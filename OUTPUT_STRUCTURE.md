# Complete Output Architecture

## High-Level Pipeline

```text
Exchange Docs / Specs
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
Registry + Constraints
        ↓
Execution Runtime Artifacts
```

## Final Output Structure

```text
docs/
├── exchange/
├── raw/
├── markdown/
├── _assets/
├── _metadata/
├── _schemas/
├── _chunks/
├── _websocket/
├── _specs/
├── _compiled/
├── _registry/
├── _execution_runtime/
├── _runs/
├── _failures/
└── _crawl_state.json
```

## Most Operationally Important Folders

- `docs/_compiled/`
- `docs/_registry/`
- `docs/_execution_runtime/`
- `docs/_websocket/`

Markdown remains useful, but these folders hold runtime execution intelligence.
