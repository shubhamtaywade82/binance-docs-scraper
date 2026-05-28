# Ollama Agent Integration Guide

This guide explains how to use compiler outputs with local-first `ollama_agent` style systems without expanding project scope.

## Purpose

Use this repository as a **grounding layer** so local models answer from deterministic exchange intelligence instead of raw docs.

## Recommended Retrieval Priority

1. `docs/_compiled/` (deterministic runtime semantics)
2. `docs/_registry/` (capabilities, constraints, relationships)
3. `docs/_websocket/` (stream/state synchronization semantics)
4. `docs/_chunks/` (explanations/examples fallback)

## Why This Order

- `_compiled` and `_registry` reduce hallucinations for endpoint/tool decisions.
- `_websocket` preserves state/reconciliation behavior.
- `_chunks` provide natural-language explanation when needed.

## Suggested Local Knowledge Layout

```text
exchange_knowledge/
├── embeddings/
├── compiled/
├── registry/
├── websocket/
└── metadata/
```

## Ingestion Pipeline

1. Run compiler for target exchange.
2. Embed only `docs/_chunks/` into vector DB.
3. Load deterministic lookup indexes from:
   - `docs/_compiled/`
   - `docs/_registry/`
   - `docs/_websocket/`
4. Keep `docs/_metadata/` for filtering dimensions (exchange/kind/provider).

## Query-Time Pipeline

```text
User query
   ↓
Semantic retrieve from chunks
   ↓
Deterministic lookup from compiled/registry/websocket
   ↓
Assemble structured context
   ↓
LLM answer / tool decision
```

## Example: Execution-Oriented Question

User asks:

> How do I place reduce-only trailing stop on Binance futures?

Retrieve:

- From `_compiled`: candidate endpoint + method/path + parameter schema
- From `_registry`: capability flags (`supportsReduceOnly`, `supportsTrailingStop`)
- From `_chunks`: examples/notes/caveats

Then answer with grounded constraints (no raw-doc guessing).

## Scope Guardrail

This integration uses compiler outputs as inputs for downstream runtimes. It does **not** turn this project into a live execution engine.

See:

- `PROJECT_BOUNDARY.md`
- `RELEASE_STATUS.md`
- `CURRENT_STATE.md`

For detailed query-time retrieval contract and priority tiers, see `RETRIEVAL_STRATEGY.md`.
