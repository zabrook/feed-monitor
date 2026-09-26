// Feed definitions.
//
// Each target exposes:
//   name     unique slug, used as the snapshot filename
//   group    which feed family it belongs to, for grouped reporting
//   url      public JSON endpoint (no auth, no scraping)
//   extract  (json) => Map<stableKey, state>  — state must be a primitive so
//            it compares cleanly across runs via ===
//   describe (key, before, after) => human-readable line for events.md
//
// Keys must be STABLE across runs. Shopify variant ids are reused but products
// can vanish from the feed, so a key disappearing is reported as "gone" rather
// than treated as a change of state.
//
// Multiple stores per group on purpose: a single store measures that store's
// restocking habits, not the category's. Out-of-stock share alone ranges from
// 15% to 71% across these four, so one sample would not have been trustworthy.

// --- Shopify restock -------------------------------------------------------
// Verified 2026-09-26: all return HTTP 200 on the public products.json feed.
const SHOPIFY_STORES = [
  { slug: "allbirds", host: "www.allbirds.com" },
  { slug: "gymshark", host: "gymshark.com" },
  { slug: "mejuri", host: "www.mejuri.com" },
  { slug: "brooklinen", host: "www.brooklinen.com" },
];

function shopifyTarget({ slug, host }) {
  return {
    name: `shopify-${slug}`,
    group: "Shopify restock",
    url: `https://${host}/products.json?limit=250`,
    extract(json) {
      const state = new Map();
      for (const product of json.products ?? []) {
        for (const variant of product.variants ?? []) {
          // Key on handle + variant id so a recreated product with a fresh id
          // reads as a new key rather than a phantom restock.
          const key = `${product.handle}#${variant.id}`;
          state.set(key, `${variant.available ? "in" : "out"}|${variant.price}`);
        }
      }
      return state;
    },
    describe(key, before, after) {
      const [wasAvail, wasPrice] = before.split("|");
      const [nowAvail, nowPrice] = after.split("|");
      const parts = [];
      if (wasAvail !== nowAvail) {
        parts.push(nowAvail === "in" ? "RESTOCKED" : "went out of stock");
      }
      if (wasPrice !== nowPrice) parts.push(`price ${wasPrice} -> ${nowPrice}`);
      return `${key}: ${parts.join(", ")}`;
    },
  };
}

// --- Job postings (comparison group) ---------------------------------------
// Structurally identical to Shopify: a platform-level public JSON feed used by
// thousands of companies. Lets event rates be compared across feed families
// for the same effort.
const GREENHOUSE_BOARDS = ["stripe", "figma", "anthropic", "databricks"];

function greenhouseTarget(company) {
  return {
    name: `jobs-${company}`,
    group: "Job postings",
    url: `https://boards-api.greenhouse.io/v1/boards/${company}/jobs`,
    extract(json) {
      const state = new Map();
      for (const job of json.jobs ?? []) {
        state.set(String(job.id), job.updated_at ?? "unknown");
      }
      return state;
    },
    describe(key, before, after) {
      return `job ${key}: updated ${before} -> ${after}`;
    },
  };
}

const targets = [
  ...SHOPIFY_STORES.map(shopifyTarget),
  ...GREENHOUSE_BOARDS.map(greenhouseTarget),
];

module.exports = { targets };
