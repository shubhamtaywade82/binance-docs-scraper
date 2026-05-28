---
title: "Cloud - Ollama"
url: https://docs.ollama.com/cloud
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:23.612Z
---
# Cloud - Ollama

> Source: https://docs.ollama.com/cloud

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

## 

[​

](#cloud-models)

Cloud Models

Ollama’s cloud models are a new kind of model in Ollama that can run without a powerful GPU. Instead, cloud models are automatically offloaded to Ollama’s cloud service while offering the same capabilities as local models, making it possible to keep using your local tools while running larger models that wouldn’t fit on a personal computer.

### 

[​

](#supported-models)

Supported models

For a list of supported models, see Ollama’s [model library](https://ollama.com/search?c=cloud).

### 

[​

](#running-cloud-models)

Running Cloud models

Ollama’s cloud models require an account on [ollama.com](https://ollama.com). To sign in or create an account, run:

```
ollama signin
```

-   CLI
    
-   Python
    
-   JavaScript
    
-   cURL
    

To run a cloud model, open the terminal and run:

```
ollama run gpt-oss:120b-cloud
```

First, pull a cloud model so it can be accessed:

```
ollama pull gpt-oss:120b-cloud
```

Next, install [Ollama’s Python library](https://github.com/ollama/ollama-python):

```
pip install ollama
```

Next, create and run a simple Python script:

```
from ollama import Client

client = Client()

messages = [
  {
    'role': 'user',
    'content': 'Why is the sky blue?',
  },
]

for part in client.chat('gpt-oss:120b-cloud', messages=messages, stream=True):
  print(part['message']['content'], end='', flush=True)
```

First, pull a cloud model so it can be accessed:

```
ollama pull gpt-oss:120b-cloud
```

Next, install [Ollama’s JavaScript library](https://github.com/ollama/ollama-js):

```
npm i ollama
```

Then use the library to run a cloud model:

```
import { Ollama } from "ollama";

const ollama = new Ollama();

const response = await ollama.chat({
  model: "gpt-oss:120b-cloud",
  messages: [{ role: "user", content: "Explain quantum computing" }],
  stream: true,
});

for await (const part of response) {
  process.stdout.write(part.message.content);
}
```

First, pull a cloud model so it can be accessed:

```
ollama pull gpt-oss:120b-cloud
```

Run the following cURL command to run the command via Ollama’s API:

```
curl http://localhost:11434/api/chat -d '{
  "model": "gpt-oss:120b-cloud",
  "messages": [{
    "role": "user",
    "content": "Why is the sky blue?"
  }],
  "stream": false
}'
```

## 

[​

](#cloud-api-access)

Cloud API access

Cloud models can also be accessed directly on ollama.com’s API. In this mode, ollama.com acts as a remote Ollama host.

### 

[​

](#authentication)

Authentication

For direct access to ollama.com’s API, first create an [API key](https://ollama.com/settings/keys). Then, set the `OLLAMA_API_KEY` environment variable to your API key.

```
export OLLAMA_API_KEY=your_api_key
```

### 

[​

](#listing-models)

Listing models

For models available directly via Ollama’s API, models can be listed via:

```
curl https://ollama.com/api/tags
```

### 

[​

](#generating-a-response)

Generating a response

-   Python
    
-   JavaScript
    
-   cURL
    

First, install [Ollama’s Python library](https://github.com/ollama/ollama-python)

```
pip install ollama
```

Then make a request

```
import os
from ollama import Client

client = Client(
    host="https://ollama.com",
    headers={'Authorization': 'Bearer ' + os.environ.get('OLLAMA_API_KEY')}
)

messages = [
  {
    'role': 'user',
    'content': 'Why is the sky blue?',
  },
]

for part in client.chat('gpt-oss:120b', messages=messages, stream=True):
  print(part['message']['content'], end='', flush=True)
```

First, install [Ollama’s JavaScript library](https://github.com/ollama/ollama-js):

```
npm i ollama
```

Next, make a request to the model:

```
import { Ollama } from "ollama";

const ollama = new Ollama({
  host: "https://ollama.com",
  headers: {
    Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
  },
});

const response = await ollama.chat({
  model: "gpt-oss:120b",
  messages: [{ role: "user", content: "Explain quantum computing" }],
  stream: true,
});

for await (const part of response) {
  process.stdout.write(part.message.content);
}
```

Generate a response via Ollama’s chat API:

```
curl https://ollama.com/api/chat \
  -H "Authorization: Bearer $OLLAMA_API_KEY" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [{
      "role": "user",
      "content": "Why is the sky blue?"
    }],
    "stream": false
  }'
```

## 

[​

](#local-only)

Local only

Ollama can run in local-only mode by [disabling Ollama’s cloud](./faq#how-do-i-disable-ollama-cloud) features.

[Previous](/quickstart)[

Streaming

Next



](/capabilities/streaming)

⌘I
