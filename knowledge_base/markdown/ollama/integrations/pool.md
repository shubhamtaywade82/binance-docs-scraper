---
title: "Pool - Ollama"
url: https://docs.ollama.com/integrations/pool
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:20.424Z
---
# Pool - Ollama

> Source: https://docs.ollama.com/integrations/pool

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

Pool is Poolside’s software agent for the terminal, built for enterprise development workflows.

## 

[​

](#install)

Install

Install [Pool](https://github.com/poolsideai/pool):

## 

[​

](#usage-with-ollama)

Usage with Ollama

### 

[​

](#quick-setup)

Quick setup

```
ollama launch pool
```

### 

[​

](#run-directly-with-a-model)

Run directly with a model

```
ollama launch pool --model kimi-k2.6:cloud
```

### 

[​

](#pass-arguments-through-to-pool)

Pass arguments through to Pool

Arguments after `--` are passed directly to Pool:

```
ollama launch pool -- --help
```

## 

[​

](#manual-setup)

Manual setup

Pool connects to Ollama using the OpenAI-compatible API via environment variables.

1.  Set the environment variables:

```
export POOLSIDE_STANDALONE_BASE_URL=http://localhost:11434/v1
export POOLSIDE_API_KEY=ollama
```

2.  Run Pool with an Ollama model:

```
pool -m kimi-k2.6:cloud
```

Or run with environment variables inline:

```
POOLSIDE_STANDALONE_BASE_URL=http://localhost:11434/v1 POOLSIDE_API_KEY=ollama pool -m kimi-k2.6:cloud
```

[Previous](/integrations/pi)[

Cline

Next



](/integrations/cline)

Ctrl+I
