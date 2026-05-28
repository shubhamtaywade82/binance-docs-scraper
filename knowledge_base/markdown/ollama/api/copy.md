---
title: "Copy a model - Ollama"
url: https://docs.ollama.com/api/copy
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:01.241Z
---
# Copy a model - Ollama

> Source: <https://docs.ollama.com/api/copy>

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

copy

Copy a model to a new name

cURL

```
curl http://localhost:11434/api/copy -d '{
  "source": "gemma3",
  "destination": "gemma3-backup"
}'
```

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

#### Body

application/json

[​

](#body-source)

source

string

required

Existing model name to copy from

[​

](#body-destination)

destination

string

required

New model name to create

#### Response

200

Model successfully copied

[Previous](/api/create)[

Pull

Next

](/api/pull)

⌘I

Copy a model to a new name

cURL

```
curl http://localhost:11434/api/copy -d '{
  "source": "gemma3",
  "destination": "gemma3-backup"
}'
```
