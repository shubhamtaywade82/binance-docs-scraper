---
title: "Push a model - Ollama"
url: https://docs.ollama.com/api/push
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:07.683Z
---
# Push a model - Ollama

> Source: https://docs.ollama.com/api/push

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

push

cURL

Push model

```
curl http://localhost:11434/api/push -d '{
  "model": "my-username/my-model"
}'
```

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

Name of the model to publish

[​

](#body-insecure)

insecure

boolean

Allow publishing over insecure connections

[​

](#body-stream)

stream

boolean

default:true

Stream progress updates

#### Response

200

application/json

Push status updates.

[​

](#response-status)

status

string

Current status message

[Previous](/api/pull)[

Delete

Next



](/api/delete)

⌘I

cURL

Push model

```
curl http://localhost:11434/api/push -d '{
  "model": "my-username/my-model"
}'
```

200

```json
{
  "status": "success"
}
```
