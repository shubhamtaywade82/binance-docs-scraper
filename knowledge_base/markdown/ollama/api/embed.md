---
title: "Generate embeddings - Ollama"
url: https://docs.ollama.com/api/embed
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:48.165Z
---
# Generate embeddings - Ollama

> Source: https://docs.ollama.com/api/embed

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

embed

cURL

Default

```
curl http://localhost:11434/api/embed -d '{
  "model": "embeddinggemma",
  "input": "Why is the sky blue?"
}'
```

200

```json
{
  "model": "embeddinggemma",
  "embeddings": [
    [
      0.010071029,
      -0.0017594862,
      0.05007221,
      0.04692972,
      0.054916814,
      0.008599704,
      0.105441414,
      -0.025878139,
      0.12958129,
      0.031952348
    ]
  ],
  "total_duration": 14143917,
  "load_duration": 1019500,
  "prompt_eval_count": 8
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

Model name

[​

](#body-input-one-of-0)

input

stringstring\[\]stringstring\[\]

required

Text or array of texts to generate embeddings for

[​

](#body-truncate)

truncate

boolean

default:true

If true, truncate inputs that exceed the context window. If false, returns an error.

[​

](#body-dimensions)

dimensions

integer

Number of dimensions to generate embeddings for

[​

](#body-keep-alive)

keep\_alive

string

Model keep-alive duration

[​

](#body-options)

options

object

Runtime options that control text generation

Show child attributes

#### Response

200 - application/json

Vector embeddings for the input text

[​

](#response-model)

model

string

Model that produced the embeddings

[​

](#response-embeddings)

embeddings

number\[\]\[\]

Array of vector embeddings

[​

](#response-total-duration)

total\_duration

integer

Total time spent generating in nanoseconds

[​

](#response-load-duration)

load\_duration

integer

Load time in nanoseconds

[​

](#response-prompt-eval-count)

prompt\_eval\_count

integer

Number of input tokens processed to generate embeddings

[Previous](/api/chat)[

TagsFetch a list of models and their details

Next



](/api/tags)

Ctrl+I

cURL

Default

```
curl http://localhost:11434/api/embed -d '{
  "model": "embeddinggemma",
  "input": "Why is the sky blue?"
}'
```

200

```json
{
  "model": "embeddinggemma",
  "embeddings": [
    [
      0.010071029,
      -0.0017594862,
      0.05007221,
      0.04692972,
      0.054916814,
      0.008599704,
      0.105441414,
      -0.025878139,
      0.12958129,
      0.031952348
    ]
  ],
  "total_duration": 14143917,
  "load_duration": 1019500,
  "prompt_eval_count": 8
}
```
