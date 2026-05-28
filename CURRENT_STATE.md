# Current State

## Project Identity

This repository is a **deterministic exchange knowledge compiler**.

It compiles heterogeneous exchange API documentation/specifications into structured, queryable, runtime-safe exchange intelligence.

It is **not**:
- a trading bot
- a live execution engine
- a strategy engine
- a risk engine
- an autonomous trading runtime

## What It Produces

- structured markdown knowledge
- semantic metadata
- normalized REST endpoint models
- normalized WebSocket models
- semantic registry + relationships
- runtime-safe execution definitions
- validation + diff artifacts

## Primary Supported Exchanges

- Binance
- DhanHQ
- CoinDCX
- Delta Exchange

## Expected Usage

Use this compiler as upstream source-of-truth for downstream systems that need deterministic API understanding and safer integration behavior.

### Typical downstream consumers
- trading runtimes
- validator/tool generators
- exchange integration services
- AI agents (with grounded API context)

## Outputs (Conceptual)

- `docs/markdown/` — human-readable knowledge
- `docs/_metadata/` — retrieval/index metadata
- `docs/_schemas/` — extracted + normalized schemas
- `docs/_websocket/` — websocket semantics
- `docs/_specs/` — discovered OpenAPI/AsyncAPI
- `docs/_compiled/` — compiled runtime semantic artifacts
- `docs/_registry/` — endpoints/relations/diffs/integrity
- `docs/_execution_runtime/` — execution-runtime metadata definitions
- `docs/_runs/` + `docs/_failures/` + `_crawl_state.json` — reliability telemetry

## Practical Boundary

This project ends at **compiled deterministic exchange intelligence**.

Execution, strategy, risk, and autonomous orchestration are separate downstream projects.

See also:
- `PROJECT_BOUNDARY.md`
- `RELEASE_STATUS.md`
- `OUTPUT_STRUCTURE.md`
