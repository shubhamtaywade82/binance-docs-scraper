# Retrieval Strategy for Ollama Agent

This document defines the recommended retrieval architecture for local-first agents consuming compiler outputs.

## Core Principle

Do **not** load full markdown docs as primary context.

Use a hybrid retrieval stack:

1. deterministic semantic lookup
2. targeted semantic chunk retrieval
3. markdown fallback only when needed

## Retrieval Priority by Output Folder

| Priority | Folder | Role |
|---|---|---|
| Tier 1 | `docs/_compiled/` | deterministic endpoint/runtime facts |
| Tier 1 | `docs/_registry/` | capabilities, constraints, relationships |
| Tier 1 | `docs/_execution_runtime/` | execution flow grounding |
| Tier 1 | `docs/_websocket/` | stream/state synchronization semantics |
| Tier 2 | `docs/_chunks/` | semantic explanation/examples |
| Tier 2 | `docs/_metadata/` | filter dimensions (exchange/kind/provider) |
| Tier 3 | `docs/markdown/` | fallback prose context |

## Query-Time Flow

```text
User Query
   ↓
Intent Parse (exchange/action/domain)
   ↓
Deterministic Lookup (_compiled/_registry/_execution_runtime/_websocket)
   ↓
Chunk Retrieval (_chunks + metadata filters)
   ↓
Structured Context Assembly
   ↓
LLM Reasoning / Tool Decision
```

## Context Assembly Contract

Assemble compact context as structured payload:

```json
{
  "facts": [],
  "constraints": [],
  "runtime": [],
  "examples": []
}
```

Avoid passing large unstructured markdown unless explicitly required.

## Example: Reduce-only trailing stop order

1. Lookup `_registry` capability flags (`supportsReduceOnly`, `supportsTrailingStop`).
2. Lookup `_compiled` endpoint method/path/params.
3. Lookup `_execution_runtime` flow metadata (validate/sign/retry/reconcile).
4. Pull `_chunks` for examples and caveats.
5. Build answer or tool call from structured context.

## Example: Depth stream synchronization

1. Lookup `_websocket` for state model.
2. Ensure `requiresSnapshot`, `sequenceField`, reconnect semantics are present.
3. Pull `_chunks` for implementation notes.
4. Return synchronization steps with deterministic grounding.

## Scope Guardrail

This retrieval strategy is downstream consumption guidance.
It does not expand this compiler project into execution/risk/strategy runtimes.

See:
- `PROJECT_BOUNDARY.md`
- `CURRENT_STATE.md`
- `OLLAMA_INTEGRATION.md`
