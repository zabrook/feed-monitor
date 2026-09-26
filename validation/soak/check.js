#!/usr/bin/env node
// Polls public JSON feeds and logs state transitions between runs.
//
// For each target: fetch -> extract a Map of stableKey->state -> diff against
// the committed previous snapshot -> append any transitions to events.md.
//
// Always logs HTTP status and elapsed ms, so rate-limiting or intermittent
// blocking shows up as a trend across runs rather than a single mystery error.
//
// Node built-ins only. Run: node check.js

const fs = require("fs");
const path = require("path");
const { targets } = require("./targets");

const SNAPSHOT_DIR = path.join(__dirname, "snapshots");
const EVENTS_LOG = path.join(__dirname, "events.md");

// Cap per-target detail lines so one noisy run can't bloat the log. Set high
// because downstream analysis pairs each RESTOCKED with the later
// "went out of stock" on the same key, and truncation breaks that pairing.
const MAX_DETAIL_LINES = 100;

function loadSnapshot(name) {
  const file = path.join(SNAPSHOT_DIR, `${name}.json`);
  if (!fs.existsSync(file)) return null; // first run: establish a baseline
  try {
    return new Map(Object.entries(JSON.parse(fs.readFileSync(file, "utf8"))));
  } catch (err) {
    // A corrupt snapshot should not silently look like "everything changed".
    console.error(`  warning: unreadable snapshot for ${name} (${err.message}) — treating as baseline`);
    return null;
  }
}

function saveSnapshot(name, state) {
  fs.mkdirSync(SNAPSHOT_DIR, { recursive: true });
  const file = path.join(SNAPSHOT_DIR, `${name}.json`);
  // One key per line, sorted: git then stores only the handful of lines that
  // actually changed. Written as a single line instead, each of the ~432 soak
  // commits would rewrite the whole 176K file.
  const sorted = Object.fromEntries([...state].sort((a, b) => a[0].localeCompare(b[0])));
  fs.writeFileSync(file, JSON.stringify(sorted, null, 1) + "\n");
}

function diff(before, after) {
  const changed = [];
  const added = [];
  const removed = [];

  for (const [key, nowState] of after) {
    if (!before.has(key)) {
      added.push(key);
    } else if (before.get(key) !== nowState) {
      changed.push([key, before.get(key), nowState]);
    }
  }
  for (const key of before.keys()) {
    if (!after.has(key)) removed.push(key);
  }
  return { changed, added, removed };
}

async function checkTarget(target, lines) {
  const started = Date.now();
  let res;

  try {
    res = await fetch(target.url, {
      headers: { "user-agent": "feed-monitor (github actions; research)" },
    });
  } catch (err) {
    lines.push(`- \`${target.name}\` **NETWORK ERROR** — ${err.message}`);
    console.error(`${target.name}: network error — ${err.message}`);
    return;
  }

  const ms = Date.now() - started;

  if (!res.ok) {
    lines.push(`- \`${target.name}\` **HTTP ${res.status}** (${ms}ms) — possible rate limiting`);
    console.error(`${target.name}: HTTP ${res.status} (${ms}ms)`);
    return;
  }

  let state;
  try {
    state = target.extract(await res.json());
  } catch (err) {
    lines.push(`- \`${target.name}\` **PARSE ERROR** (${ms}ms) — ${err.message} (feed structure may have changed)`);
    console.error(`${target.name}: parse error — ${err.message}`);
    return;
  }

  const before = loadSnapshot(target.name);
  saveSnapshot(target.name, state);

  if (before === null) {
    lines.push(`- \`${target.name}\` baseline established — ${state.size} keys tracked (HTTP 200, ${ms}ms)`);
    console.log(`${target.name}: baseline, ${state.size} keys (${ms}ms)`);
    return;
  }

  const { changed, added, removed } = diff(before, state);
  const total = changed.length + added.length + removed.length;

  lines.push(
    `- \`${target.name}\` HTTP 200 (${ms}ms) — ${state.size} keys; ` +
      `${changed.length} changed, ${added.length} added, ${removed.length} gone`
  );

  for (const [key, was, now] of changed.slice(0, MAX_DETAIL_LINES)) {
    lines.push(`    - ${target.describe(key, was, now)}`);
  }
  for (const key of added.slice(0, MAX_DETAIL_LINES)) {
    lines.push(`    - NEW: ${key}`);
  }
  if (removed.length) {
    // Gone != restocked. Report separately so it can never be miscounted as an event.
    lines.push(`    - ${removed.length} key(s) no longer in feed (deleted/unpublished, not a state change)`);
  }
  if (changed.length > MAX_DETAIL_LINES || added.length > MAX_DETAIL_LINES) {
    lines.push(`    - (detail truncated at ${MAX_DETAIL_LINES} per category)`);
  }

  console.log(
    `${target.name}: ${state.size} keys, ${changed.length} changed, ` +
      `${added.length} added, ${removed.length} gone (${ms}ms)`
  );
  return total;
}

async function main() {
  const timestamp = new Date().toISOString();
  const lines = [`\n### ${timestamp}`];

  for (const target of targets) {
    await checkTarget(target, lines);
  }

  fs.appendFileSync(EVENTS_LOG, lines.join("\n") + "\n");
}

main().catch((err) => {
  console.error("fatal:", err);
  process.exit(1);
});
