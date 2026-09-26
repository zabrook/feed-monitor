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

### 2026-09-26T04:52:03.599Z
- `shopify-allbirds` HTTP 200 (538ms) — 2720 keys; 2 changed, 0 added, 0 gone
    - womens-superlight-tree-runners-blizzard-lux-liberty#40873658810448: went out of stock
    - mens-tree-dasher-relay#39745240596560: went out of stock
- `shopify-gymshark` HTTP 200 (721ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (1049ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1298ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (215ms) — 703 keys; 1 changed, 0 added, 0 gone
    - job 8174158: updated 2026-09-25T16:45:01-04:00 -> 2026-09-26T00:26:59-04:00
- `jobs-figma` HTTP 200 (26ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (29ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (31ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T05:02:09.112Z
- `shopify-allbirds` HTTP 200 (834ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (248ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (755ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1269ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (74ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (24ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (28ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (102ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T05:12:13.974Z
- `shopify-allbirds` HTTP 200 (608ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (189ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (804ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (2199ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (5126ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (25ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (25ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (30ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T05:22:24.513Z
- `shopify-allbirds` HTTP 200 (616ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (610ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (934ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1858ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (137ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (24ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (30ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (28ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T05:32:30.250Z
- `shopify-allbirds` HTTP 200 (262ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (233ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (976ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1852ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (141ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (24ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (25ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (31ms) — 888 keys; 0 changed, 0 added, 0 gone

### 2026-09-26T05:42:35.484Z
- `shopify-allbirds` HTTP 200 (653ms) — 2720 keys; 0 changed, 0 added, 0 gone
- `shopify-gymshark` HTTP 200 (726ms) — 1685 keys; 0 changed, 0 added, 0 gone
- `shopify-mejuri` HTTP 200 (1027ms) — 1545 keys; 0 changed, 0 added, 0 gone
- `shopify-brooklinen` HTTP 200 (1723ms) — 3401 keys; 0 changed, 0 added, 0 gone
- `jobs-stripe` HTTP 200 (141ms) — 703 keys; 0 changed, 0 added, 0 gone
- `jobs-figma` HTTP 200 (24ms) — 163 keys; 0 changed, 0 added, 0 gone
- `jobs-anthropic` HTTP 200 (28ms) — 619 keys; 0 changed, 0 added, 0 gone
- `jobs-databricks` HTTP 200 (37ms) — 888 keys; 0 changed, 0 added, 0 gone
