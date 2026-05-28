# Universal Exchange Semantic Compiler

A semantic exchange intelligence platform that converts exchange documentation, OpenAPI specs, AsyncAPI specs, and websocket protocols into executable runtime semantics for autonomous trading systems.

## Features
- Multi-provider documentation ingestion
- OpenAPI + AsyncAPI support
- REST + WebSocket semantic extraction
- Typed runtime compilation
- Exchange capability normalization
- Constraint-aware runtime validation
- Semantic relationship graph generation
- Registry integrity validation
- Drift detection and schema diffing
- Incremental crawl + synchronization
- Runtime tool schema generation

## Supported Documentation Providers
- Docusaurus
- Swagger UI
- Redoc
- Mintlify
- GitBook
- Generic HTML documentation

## Supported Semantic Layers
### REST APIs
- Endpoint extraction
- Parameter normalization
- Auth modeling
- Constraint validation
- Runtime compilation

### WebSocket APIs
- Stream extraction
- Event schema normalization
- Stateful synchronization semantics
- Snapshot/reconciliation modeling
- Reliability validation

## Architecture

```text
Docs / Specs
      ↓
Provider Detection
      ↓
Spec Discovery
      ↓
Semantic Extraction
      ↓
Normalization
      ↓
Runtime Compilation
      ↓
Constraint Validation
      ↓
Executable Exchange Intelligence
```

## Installation

```bash
npm install
npx playwright install chromium
```

## Quick Start

### Binance

```bash
START_URL=https://developers.binance.com/docs/derivatives/change-log \
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

```bash
START_URL=https://docs.coindcx.com \
EXCHANGE=coindcx \
npm run scrape
```

## Outputs

```text
docs/
├── _compiled/
├── _schemas/
├── _registry/
├── _websocket/
├── _specs/
├── _chunks/
├── _metadata/
├── _runs/
└── _failures/
```

## Core Runtime Outputs

### Compiled REST Runtime

```json
{
  "id": "binance.futures.create_order",
  "method": "POST",
  "path": "/fapi/v1/order"
}
```

### Compiled WebSocket Runtime

```json
{
  "channel": "depth",
  "stateModel": "incremental_orderbook"
}
```

## Documentation

See `USAGE.md` for:
- advanced ingestion
- custom providers
- runtime compilation
- websocket semantics
- semantic registry usage
- execution policy validation
- multi-exchange workflows
