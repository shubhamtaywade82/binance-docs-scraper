---
title: "Pi - Ollama"
url: https://docs.ollama.com/integrations/pi
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:18.023Z
---
# Pi - Ollama

> Source: <https://docs.ollama.com/integrations/pi>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

Pi is a minimal and extensible coding agent.

##

[​

](#install)

Install

Install [Pi](https://github.com/badlogic/pi-mono):

```
npm install -g @mariozechner/pi-coding-agent
```

##

[​

](#usage-with-ollama)

Usage with Ollama

###

[​

](#quick-setup)

Quick setup

```
ollama launch pi
```

This installs Pi, configures Ollama as a provider including web tools, and drops you into an interactive session. To configure without launching:

```
ollama launch pi --config
```

###

[​

](#run-directly-with-a-model)

Run directly with a model

```
ollama launch pi --model qwen3.5:cloud
```

Cloud models are also available at [ollama.com](https://ollama.com/search?c=cloud).

##

[​

](#extensions)

Extensions

Pi ships with four core tools: `read`, `write`, `edit`, and `bash`. All other capabilities are added through its extension system. On-demand capability packages invoked via `/skill:name` commands. Install from npm or git:

```
pi install npm:@foo/some-tools
pi install git:github.com/user/repo@v1
```

See all packages at [pi.dev](https://pi.dev/packages)

###

[​

](#web-search)

Web search

Pi can use web search and fetch tools via the `@ollama/pi-web-search` package. When launching Pi through Ollama, package install/update is managed automatically. To install manually:

```
pi install npm:@ollama/pi-web-search
```

###

[​

](#autoresearch-with-pi-autoresearch)

Autoresearch with `pi-autoresearch`

[pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) brings autonomous experiment loops to Pi. Inspired by Karpathy’s autoresearch, it turns any measurable metric into an optimization target: test speed, bundle size, build time, model training loss, Lighthouse scores.

```
pi install https://github.com/davebcn87/pi-autoresearch
```

Tell Pi what to optimize. It runs experiments, benchmarks each one, keeps improvements, reverts regressions, and repeats — all autonomously. A built-in dashboard tracks every run with confidence scoring to distinguish real gains from benchmark noise.

```
/autoresearch optimize unit test runtime
```

Each kept experiment is automatically committed. Each failed one is reverted. When you’re done, Pi can group improvements into independent branches for clean review and merge.

##

[​

](#manual-setup)

Manual setup

Add a configuration block to `~/.pi/agent/models.json`:

```
{
  "providers": {
    "ollama": {
      "baseUrl": "http://localhost:11434/v1",
      "api": "openai-completions",
      "apiKey": "ollama",
      "models": [
        {
          "id": "qwen3-coder"
        }
      ]
    }
  }
}
```

Update `~/.pi/agent/settings.json` to set the default provider:

```json
{
  "defaultProvider": "ollama",
  "defaultModel": "qwen3-coder"
}
```

[Previous](/integrations/goose)[

Pool

Next

](/integrations/pool)

Ctrl+I
