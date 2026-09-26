# Event Log

Append-only. One block per run, written by [check.js](check.js).

- `RESTOCKED` — a variant went from unavailable to available
- `went out of stock` — the reverse
- `price X -> Y` — price changed on a tracked variant
- `NEW:` — a job posting ID appeared that wasn't in the previous snapshot
- `no longer in feed` — item removed/unpublished. Not a state change; counted separately
- Repeated `HTTP 429` / `HTTP 403` — rate limiting

---

### 2026-09-26T04:17:08.528Z
- `shopify-allbirds` HTTP 200 (673ms) — 2720 keys; 1 changed, 0 added, 0 gone
    - mens-tree-gliders-blizzard-natural-black#41011842154576: went out of stock
- `shopify-gymshark` HTTP 200 (606ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (908ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1233ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (107ms) — 703 keys; 0 changed, 0 added, 1 gone
    - 1 key(s) no longer in feed (deleted/unpublished, not a state change)
- `jobs-figma` HTTP 200 (36ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (43ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (43ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T04:17:59.005Z
- `shopify-allbirds` HTTP 200 (665ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (561ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (926ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1392ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (109ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (50ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (49ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (55ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T04:19:58.952Z
- `shopify-allbirds` HTTP 200 (639ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (511ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (1082ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1523ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (75ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (105ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (27ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (33ms) — 888 keys; 0 changed, 0 added, 0 gone
