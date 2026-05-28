---
title: "Introduction - Ollama"
url: https://docs.ollama.com/api
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:05:15.341Z
---
# Introduction - Ollama

> Source: https://docs.ollama.com/api

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

Ollama’s API allows you to run and interact with models programatically.

## 

[​

](#get-started)

Get started

If you’re just getting started, follow the [quickstart](/quickstart) documentation to get up and running with Ollama’s API.

## 

[​

](#base-url)

Base URL

After installation, Ollama’s API is served by default at:

```
http://localhost:11434/api
```

For running cloud models on **ollama.com**, the same API is available with the following base URL:

```
https://ollama.com/api
```

## 

[​

](#example-request)

Example request

Once Ollama is running, its API is automatically available and can be accessed via `curl`:

```
curl http://localhost:11434/api/generate -d '{
  "model": "gemma3",
  "prompt": "Why is the sky blue?"
}'
```

## 

[​

](#libraries)

Libraries

Ollama has official libraries for Python and JavaScript:

-   [Python](https://github.com/ollama/ollama-python)
-   [JavaScript](https://github.com/ollama/ollama-js)

Several community-maintained libraries are available for Ollama. For a full list, see the [Ollama GitHub repository](https://github.com/ollama/ollama?tab=readme-ov-file#libraries-1).

## 

[​

](#versioning)

Versioning

Ollama’s API isn’t strictly versioned, but the API is expected to be stable and backwards compatible. Deprecations are rare and will be announced in the [release notes](https://github.com/ollama/ollama/releases).

[

Authentication

Next



](/api/authentication)

Ctrl+I
