# feed monitor

Polls public JSON feeds every 10 minutes and logs state transitions between runs.

Tracked feeds:
- Shopify `products.json` — variant availability and price
- Greenhouse job boards — posting IDs and update timestamps

Transitions are appended to `validation/soak/events.md`; the last-seen state per
feed lives in `validation/soak/snapshots/`.

Node built-ins only, no dependencies.

```bash
node validation/soak/check.js
```
