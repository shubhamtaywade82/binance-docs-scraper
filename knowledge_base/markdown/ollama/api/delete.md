---
title: "Delete a model - Ollama"
url: https://docs.ollama.com/api/delete
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:10.161Z
---
# Delete a model - Ollama

> Source: https://docs.ollama.com/api/delete

[Documentation

](/)[API Reference

](/api/introduction)

DELETE

/

api

/

delete

Delete model

cURL

```
curl -X DELETE http://localhost:11434/api/delete -d '{
  "model": "gemma3"
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

](#body-model)

model

string

required

Model name to delete

#### Response

200

Model successfully deleted

[Previous](/api/push)[

Get versionRetrieve the version of the Ollama

Next



](/api-reference/get-version)

⌘I

Delete model

cURL

```
curl -X DELETE http://localhost:11434/api/delete -d '{
  "model": "gemma3"
}'
```
