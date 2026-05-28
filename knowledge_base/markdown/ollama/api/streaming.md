---
title: "Streaming - Ollama"
url: https://docs.ollama.com/api/streaming
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:27.073Z
---
# Streaming - Ollama

> Source: <https://docs.ollama.com/api/streaming>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

Certain API endpoints stream responses by default, such as `/api/generate`. These responses are provided in the newline-delimited JSON format (i.e. the `application/x-ndjson` content type). For example:

```
{"model":"gemma3","created_at":"2025-10-26T17:15:24.097767Z","response":"That","done":false}
{"model":"gemma3","created_at":"2025-10-26T17:15:24.109172Z","response":"'","done":false}
{"model":"gemma3","created_at":"2025-10-26T17:15:24.121485Z","response":"s","done":false}
{"model":"gemma3","created_at":"2025-10-26T17:15:24.132802Z","response":" a","done":false}
{"model":"gemma3","created_at":"2025-10-26T17:15:24.143931Z","response":" fantastic","done":false}
{"model":"gemma3","created_at":"2025-10-26T17:15:24.155176Z","response":" question","done":false}
{"model":"gemma3","created_at":"2025-10-26T17:15:24.166576Z","response":"!","done":true, "done_reason": "stop"}
```

##

[​

](#disabling-streaming)

Disabling streaming

Streaming can be disabled by providing `{"stream": false}` in the request body for any endpoint that support streaming. This will cause responses to be returned in the `application/json` format instead:

```json
{
  "model": "gemma3",
  "created_at": "2025-10-26T17:15:24.166576Z",
  "response": "That's a fantastic question!",
  "done": true
}
```

##

[​

](#when-to-use-streaming-vs-non-streaming)

When to use streaming vs non-streaming

**Streaming (default)**:

- Real-time response generation
- Lower perceived latency
- Better for long generations

**Non-streaming**:

- Simpler to process
- Better for short responses, or structured outputs
- Easier to handle in some applications

[Previous](/api/authentication)[

Usage

Next

](/api/usage)

⌘I
