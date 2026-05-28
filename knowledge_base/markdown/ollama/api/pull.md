---
title: "Pull a model - Ollama"
url: https://docs.ollama.com/api/pull
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:03.633Z
---
# Pull a model - Ollama

> Source: <https://docs.ollama.com/api/pull>

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

pull

cURL

Default

curl <http://localhost:11434/api/pull> -d '{ "model": "gemma3" }'

200

```json
{
  "status": "success"
}
```

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

#### Body

application/json

[​

](#body-model)

model

string

required

Name of the model to download

[​

](#body-insecure)

insecure

boolean

Allow downloading over insecure connections

[​

](#body-stream)

stream

boolean

default:true

Stream progress updates

#### Response

200

application/json

Pull status updates.

[​

](#response-status)

status

string

Current status message

[Previous](/api/copy)[

Push

Next

](/api/push)

⌘I

cURL

Default

curl <http://localhost:11434/api/pull> -d '{ "model": "gemma3" }'

200

```json
{
  "status": "success"
}
```
