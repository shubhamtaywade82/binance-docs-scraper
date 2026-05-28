---
title: "Context length - Ollama"
url: https://docs.ollama.com/context-length
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:50.723Z
---
# Context length - Ollama

> Source: https://docs.ollama.com/context-length

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

Context length is the maximum number of tokens that the model has access to in memory.

Ollama defaults to the following context lengths based on VRAM:

-   < 24 GiB VRAM: 4k context
-   24-48 GiB VRAM: 32k context
-   \>= 48 GiB VRAM: 256k context

Tasks which require large context like web search, agents, and coding tools should be set to at least 64000 tokens.

## 

[​

](#setting-context-length)

Setting context length

Setting a larger context length will increase the amount of memory required to run a model. Ensure you have enough VRAM available to increase the context length. Cloud models are set to their maximum context length by default.

### 

[​

](#app)

App

Change the slider in the Ollama app under settings to your desired context length. ![Context length in Ollama app](https://mintcdn.com/ollama-9269c548/SjntZZpXgbN5v4M5/images/ollama-settings.png?fit=max&auto=format&n=SjntZZpXgbN5v4M5&q=85&s=e8a7ccd30fd9cee5e93662db05b43dc7)

### 

[​

](#cli)

CLI

If editing the context length for Ollama is not possible, the context length can also be updated when serving Ollama.

```
OLLAMA_CONTEXT_LENGTH=64000 ollama serve
```

### 

[​

](#check-allocated-context-length-and-model-offloading)

Check allocated context length and model offloading

For best performance, use the maximum context length for a model, and avoid offloading the model to CPU. Verify the split under `PROCESSOR` using `ollama ps`.

```
ollama ps
```

```
NAME             ID              SIZE      PROCESSOR    CONTEXT    UNTIL
gemma3:latest    a2af6cc3eb7f    6.6 GB    100% GPU     65536      2 minutes from now
```

[Previous](/modelfile)[

Linux

Next



](/linux)

⌘I
