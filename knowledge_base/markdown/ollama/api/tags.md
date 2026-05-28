---
title: "List models - Ollama"
url: https://docs.ollama.com/api/tags
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:50.712Z
---
# List models - Ollama

> Source: <https://docs.ollama.com/api/tags>

[Documentation

](/)[API Reference

](/api/introduction)

GET

/

api

/

tags

List models

cURL

```
curl http://localhost:11434/api/tags
```

200

```json
{
  "models": [
    {
      "name": "gemma3",
      "model": "gemma3",
      "modified_at": "2025-10-03T23:34:03.409490317-07:00",
      "size": 3338801804,
      "digest": "a2af6cc3eb7fa8be8504abaf9b04e88f17a119ec3f04a3addf55f92841195f5a",
      "details": {
        "format": "gguf",
        "family": "gemma",
        "families": [
          "gemma"
        ],
        "parameter_size": "4.3B",
        "quantization_level": "Q4_K_M"
      }
    }
  ]
}
```

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

#### Response

200 - application/json

List available models

[​

](#response-models)

models

object\[\]

Show child attributes

[Previous](/api/embed)[

PsRetrieve a list of models that are currently running

Next

](/api/ps)

⌘I

List models

cURL

```
curl http://localhost:11434/api/tags
```

200

```json
{
  "models": [
    {
      "name": "gemma3",
      "model": "gemma3",
      "modified_at": "2025-10-03T23:34:03.409490317-07:00",
      "size": 3338801804,
      "digest": "a2af6cc3eb7fa8be8504abaf9b04e88f17a119ec3f04a3addf55f92841195f5a",
      "details": {
        "format": "gguf",
        "family": "gemma",
        "families": [
          "gemma"
        ],
        "parameter_size": "4.3B",
        "quantization_level": "Q4_K_M"
      }
    }
  ]
}
```
