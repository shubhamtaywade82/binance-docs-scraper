---
title: "Create a model - Ollama"
url: https://docs.ollama.com/api/create
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:58.699Z
---
# Create a model - Ollama

> Source: <https://docs.ollama.com/api/create>

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

create

cURL

Default

```
curl http://localhost:11434/api/create -d '{
  "from": "gemma3",
  "model": "alpaca",
  "system": "You are Alpaca, a helpful AI assistant. You only answer with Emojis."
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

Name for the model to create

[​

](#body-from)

from

string

Existing model to create from

[​

](#body-template)

template

string

Prompt template to use for the model

[​

](#body-license-one-of-0)

license

stringstring\[\]stringstring\[\]

License string or list of licenses for the model

[​

](#body-system)

system

string

System prompt to embed in the model

[​

](#body-parameters)

parameters

object

Key-value parameters for the model

[​

](#body-messages)

messages

object\[\]

Message history to use for the model

Show child attributes

[​

](#body-quantize)

quantize

string

Quantization level to apply (e.g. `q4_K_M`, `q8_0`)

[​

](#body-stream)

stream

boolean

default:true

Stream status updates

#### Response

200

application/json

Stream of create status updates

[​

](#response-status)

status

string

Current status message

[Previous](/api-reference/show-model-details)[

Copy

Next

](/api/copy)

Ctrl+I

cURL

Default

```
curl http://localhost:11434/api/create -d '{
  "from": "gemma3",
  "model": "alpaca",
  "system": "You are Alpaca, a helpful AI assistant. You only answer with Emojis."
}'
```

200

```json
{
  "status": "success"
}
```
