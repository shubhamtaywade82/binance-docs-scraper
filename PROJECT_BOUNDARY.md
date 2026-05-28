# Universal Exchange Knowledge Compiler

## Final Goal

Build a deterministic exchange knowledge compiler that converts exchange API documentation and specifications into a structured, queryable, runtime-safe knowledge base for automated trading systems and AI agents.

Problem solved:

> Ensure trading systems and AI agents can understand and use exchange APIs correctly, deterministically, and safely without hallucination or undocumented assumptions.

## In Scope

- Exchange documentation crawling
- OpenAPI ingestion
- AsyncAPI ingestion
- REST semantic extraction
- WebSocket semantic extraction
- Exchange capability extraction
- Constraint extraction
- Runtime-safe normalization
- Structured knowledge-base generation
- Runtime execution metadata generation

### Supported exchanges (initial)

- Binance
- DhanHQ
- CoinDCX
- Delta Exchange

### Supported doc providers (initial)

- Docusaurus
- Swagger
- Redoc
- Mintlify
- GitBook
- Generic HTML docs

## Core Deliverables

1. Structured Exchange Knowledge Base
2. Semantic Exchange Registry
3. Runtime Compilation Metadata
4. Operational Reliability (incremental sync, telemetry, failures, diff/integrity)

## Explicit Non-Goals

This project SHALL NOT become:

- live trading engine
- strategy engine
- risk engine
- execution orchestrator
- autonomous trader
- portfolio manager
- FIX engine
- universal protocol platform
- generalized AI operating system

Those are separate downstream systems.

## Definition of Done (DoD)

### A) Documentation Ingestion

- Crawl complete docs sites
- Detect provider automatically
- Ingest OpenAPI + AsyncAPI
- Preserve hierarchy
- Separate outputs by exchange/provider
- Incremental sync without full recrawl

### B) Semantic Extraction

REST:

- endpoints, methods, auth, params, enums, rate limits, examples, constraints

WebSocket:

- channels, subscription formats, payload schemas, state models, heartbeat/reconnect, snapshot/reconciliation semantics

### C) Knowledge Base Generation

Generate valid outputs under:

```text
docs/
├── markdown/
├── _metadata/
├── _schemas/
├── _chunks/
├── _websocket/
├── _specs/
├── _compiled/
├── _registry/
└── _execution_runtime/
```

### D) Semantic Registry

- normalized endpoint IDs
- websocket IDs
- capability flags
- relationship graph
- integrity validation
- semantic diff detection

### E) Runtime Compilation (metadata only)

REST definitions:

- validate flow
- auth/sign flow
- retry metadata
- reconciliation metadata

WebSocket definitions:

- connect flow
- subscribe flow
- heartbeat flow
- resync flow

### F) Reliability

- crawl telemetry
- failure persistence
- integrity checks
- schema validation
- retry handling
- content quality validation

### G) Queryability

Deterministic queries available:

- `findEndpoints()`
- `validateOrder()`
- `validateExecutionPolicy()`

### H) Exchange Coverage

Support Binance, DhanHQ, CoinDCX

- Delta Exchange across REST docs, WebSocket docs, OpenAPI, AsyncAPI via exchange adapters.

## Final Boundary

Project ends at compiled deterministic exchange intelligence.

Live execution engines, websocket sync runtime, autonomous planner, strategy/risk runtime are consumers of this project and are intentionally out-of-scope.
