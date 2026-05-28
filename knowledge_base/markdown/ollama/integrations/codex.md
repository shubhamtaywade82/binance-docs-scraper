---
title: "Codex CLI - Ollama"
url: https://docs.ollama.com/integrations/codex
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:05.341Z
---
# Codex CLI - Ollama

> Source: https://docs.ollama.com/integrations/codex

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

](#install)

Install

Install the [Codex CLI](https://developers.openai.com/codex/cli/). For the desktop app, see [Codex App](/integrations/codex-app).

```
npm install -g @openai/codex
```

## 

[​

](#usage-with-ollama)

Usage with Ollama

Codex requires a larger context window. It is recommended to use a context window of at least 64k tokens.

### 

[​

](#quick-setup)

Quick setup

```
ollama launch codex
```

When launched through `ollama launch codex`, Ollama refreshes the model catalog and passes it to Codex for that session. To configure without launching:

```
ollama launch codex --config
```

### 

[​

](#manual-setup)

Manual setup

To use `codex` with Ollama, use the `--oss` flag:

```
codex --oss
```

To use a specific model, pass the `-m` flag:

```
codex --oss -m gpt-oss:120b
```

To use a cloud model:

```
codex --oss -m gpt-oss:120b-cloud
```

### 

[​

](#profile-based-setup)

Profile-based setup

For a persistent configuration, add an Ollama provider and profiles to `~/.codex/config.toml`:

```
[model_providers.ollama-launch]
name = "Ollama"
base_url = "http://localhost:11434/v1"

[profiles.ollama-launch]
model = "gpt-oss:120b"
model_provider = "ollama-launch"

[profiles.ollama-cloud]
model = "gpt-oss:120b-cloud"
model_provider = "ollama-launch"
```

Then run:

```
codex --profile ollama-launch
codex --profile ollama-cloud
```

[Previous](/integrations/codex-app)[

Copilot CLI

Next



](/integrations/copilot-cli)

⌘I
