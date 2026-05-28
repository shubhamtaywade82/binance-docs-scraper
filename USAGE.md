# Usage Guide

## 1. Basic Documentation Ingestion

### Binance Futures

```bash
START_URL=https://developers.binance.com/docs/derivatives \
EXCHANGE=binance \
npm run scrape
```

### DhanHQ

```bash
START_URL=https://dhanhq.co/docs/v2 \
EXCHANGE=dhanhq \
npm run scrape
```

### CoinDCX
- Delta Exchange

```bash
START_URL=https://docs.coindcx.com \
EXCHANGE=coindcx \
npm run scrape
```

## 2. OpenAPI / AsyncAPI Ingestion

The compiler automatically detects:
- OpenAPI specs
- AsyncAPI specs
- Swagger UI
- Redoc
- embedded spec references

Generated specs are written to:

```text
docs/_specs/
```

Compiled runtime artifacts are written to:

```text
docs/_compiled/
```

## 3. Runtime Compilation

### OpenAPI Runtime Compilation

```json
{
  "id": "binance.futures.create_order",
  "method": "POST",
  "path": "/fapi/v1/order",
  "inputSchema": {},
  "outputSchema": {}
}
```

### AsyncAPI Runtime Compilation

```json
{
  "channel": "depth",
  "publish": {},
  "subscribe": {},
  "stateModel": "incremental_orderbook"
}
```

## 4. WebSocket Semantic Modeling

The platform extracts:
- websocket endpoints
- subscription schemas
- payload schemas
- sequence semantics
- snapshot requirements
- heartbeat semantics
- reconnect requirements

Generated websocket artifacts:

```text
docs/_websocket/
```

## 5. Registry Outputs

```text
docs/_registry/
├── endpoints/
├── relationships/
├── diffs/
└── integrity.json
```

## 6. Semantic Querying

```js
const results = findEndpoints({
  action: 'create_order',
  market: 'futures'
})
```

## 7. Runtime Validation

### Order Validation

```js
validateOrder({
  exchange: 'binance',
  market: 'usdm_futures',
  reduceOnly: true
})
```

### Execution Policy Validation

```js
validateExecutionPolicy({
  maxLeverage: 5
})
```

## 8. Schema Diff Detection

Generated diffs:

```text
docs/_registry/diffs/
```

Example:

```json
{
  "type": "parameter_added",
  "parameter": "priceMatch"
}
```

## 9. Incremental Crawling

The platform stores crawl state in:

```text
docs/_crawl_state.json
```

Unchanged pages are skipped automatically.

## 10. Failure Tracking

Failures are persisted under:

```text
docs/_failures/
```

Each failure includes:
- URL
- stack trace
- retry count
- timestamp

## 11. Run Telemetry

Run metrics are written to:

```text
docs/_runs/
```

Example:

```json
{
  "pagesVisited": 120,
  "pagesWritten": 98,
  "compiledOpenApi": 44,
  "compiledAsyncApi": 12
}
```

## 12. Multi-Exchange Architecture

Exchange-specific adapters:

```text
src/exchanges/
├── binance/
├── dhanhq/
├── coindcx/
└── shared/
```

Provider-specific adapters (current + planned):

```text
src/providers/
├── detectProvider.js
├── swagger/
├── redoc/
├── docusaurus/
├── mintlify/
└── gitbook/
```

## 13. Recommended Workflow

### Step 1 — Ingest Documentation

```bash
npm run scrape
```

### Step 2 — Generate Runtime Intelligence

Automatically produces:
- semantic registry
- websocket semantics
- compiled runtimes
- constraints
- relationships

### Step 3 — Generate Runtime Tools

```js
generateToolSchema(compiledEndpoint)
```

### Step 4 — Integrate Into Trading Runtime

Use compiled runtime semantics for:
- execution validation
- websocket synchronization
- autonomous planners
- exchange capability checks

## 14. Troubleshooting

- If no pages are discovered, verify `START_URL` and `ALLOWED_PATH_PREFIX`.
- If runtime compiled outputs are empty, inspect `docs/_specs` for discovered spec artifacts.
- If too many pages fail validation, reduce `MIN_MARKDOWN_LENGTH` temporarily and inspect selectors/provider detection.
- Check `docs/_failures` and `docs/_runs` first when diagnosing crawl issues.


## 15. Execution Runtime Artifacts

Generated runtime executors are written to:

```text
docs/_execution_runtime/
├── rest-executors.json
└── websocket-runtimes.json
```

These artifacts are intended for direct trading runtime integration:
- REST: `validate → sign → execute → retry → reconcile`
- WebSocket: `connect → subscribe → heartbeat → reconcile → resync`


## 16. Live Runtime Integration (Next Step)

Use generated runtime artifacts with concrete live runtime classes:

```text
src/runtime/live/
├── BinanceRestClient.js
└── DepthStreamRuntime.js
```

Order lifecycle reconciliation state machine:

```text
src/runtime/state/OrderLifecycleStateMachine.js
```

These bridge semantic compilation to live execution behavior:
- REST: validate → sign → execute → reconcile
- WS: connect → subscribe → sequence validate → resync


## 17. Output Folder Reference

See `OUTPUT_STRUCTURE.md` for a full artifact-by-artifact map from crawl outputs to execution runtime definitions.


## 18. Exchange/Raw/Markdown Separation

- `docs/exchange/<exchange>/` logical exchange separation root
- `docs/raw/<exchange>/` raw extracted HTML for debug/recovery
- `docs/markdown/<exchange>/` clean markdown knowledge base
- `_specs/openapi/` and `_specs/asyncapi/` separate spec classes


## 19. Scope Boundary

Before extending architecture, check `PROJECT_BOUNDARY.md` to ensure changes remain in compiler scope and do not drift into live execution/risk/strategy systems.


## 20. Stabilization Mode

This project is now in boundary-controlled stabilization mode. See `RELEASE_STATUS.md` and `PROJECT_BOUNDARY.md` before proposing new features.


## 21. Current State Reference

If you are onboarding downstream consumers, start with `CURRENT_STATE.md` before integration work.
