---
title: "List running models - Ollama"
url: https://docs.ollama.com/api/ps
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:53.435Z
---
# List running models - Ollama

> Source: https://docs.ollama.com/api/ps

[Documentation

](/)[API Reference

](/api/introduction)

GET

/

api

/

ps

List running models

cURL

```
curl http://localhost:11434/api/ps
```

200

```json
{
  "models": [
    {
      "name": "gemma3",
      "model": "gemma3",
      "size": 6591830464,
      "digest": "a2af6cc3eb7fa8be8504abaf9b04e88f17a119ec3f04a3addf55f92841195f5a",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "gemma3",
        "families": [
          "gemma3"
        ],
        "parameter_size": "4.3B",
        "quantization_level": "Q4_K_M"
      },
      "expires_at": "2025-10-17T16:47:07.93355-07:00",
      "size_vram": 5333539264,
      "context_length": 4096
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

Models currently loaded into memory

[​

](#response-models)

models

object\[\]

Currently running models

Show child attributes

[Previous](/api/tags)[

Show model details

Next



](/api-reference/show-model-details)

Ctrl+I

List running models

cURL

```
curl http://localhost:11434/api/ps
```

200

```json
{
  "models": [
    {
      "name": "gemma3",
      "model": "gemma3",
      "size": 6591830464,
      "digest": "a2af6cc3eb7fa8be8504abaf9b04e88f17a119ec3f04a3addf55f92841195f5a",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "gemma3",
        "families": [
          "gemma3"
        ],
        "parameter_size": "4.3B",
        "quantization_level": "Q4_K_M"
      },
      "expires_at": "2025-10-17T16:47:07.93355-07:00",
      "size_vram": 5333539264,
      "context_length": 4096
    }
  ]
}
```
