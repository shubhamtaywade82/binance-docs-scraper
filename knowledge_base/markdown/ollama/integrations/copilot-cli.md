---
title: "Copilot CLI - Ollama"
url: https://docs.ollama.com/integrations/copilot-cli
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:07.743Z
---
# Copilot CLI - Ollama

> Source: https://docs.ollama.com/integrations/copilot-cli

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

GitHub Copilot CLI is GitHub’s AI coding agent for the terminal. It can understand your codebase, make edits, run commands, and help you build software faster. Open models can be used with Copilot CLI through Ollama, enabling you to use models such as `qwen3.5`, `glm-5.1:cloud`, `kimi-k2.5:cloud`.

## 

[​

](#install)

Install

Install [Copilot CLI](https://github.com/features/copilot/cli/):

macOS / Linux (Homebrew)

npm (all platforms)

macOS / Linux (script)

Windows (WinGet)

```
brew install copilot-cli
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
ollama launch copilot
```

### 

[​

](#run-directly-with-a-model)

Run directly with a model

```
ollama launch copilot --model kimi-k2.5:cloud
```

## 

[​

](#recommended-models)

Recommended Models

-   `kimi-k2.5:cloud`
-   `glm-5:cloud`
-   `minimax-m2.7:cloud`
-   `qwen3.5:cloud`
-   `glm-4.7-flash`
-   `qwen3.5`

Cloud models are also available at [ollama.com/search?c=cloud](https://ollama.com/search?c=cloud).

## 

[​

](#non-interactive-headless-mode)

Non-interactive (headless) mode

Run Copilot CLI without interaction for use in Docker, CI/CD, or scripts:

```
ollama launch copilot --model kimi-k2.5:cloud --yes -- -p "how does this repository work?"
```

The `--yes` flag auto-pulls the model, skips selectors, and requires `--model` to be specified. Arguments after `--` are passed directly to Copilot CLI.

## 

[​

](#manual-setup)

Manual setup

Copilot CLI connects to Ollama using the OpenAI-compatible API via environment variables.

1.  Set the environment variables:

```
export COPILOT_PROVIDER_BASE_URL=http://localhost:11434/v1
export COPILOT_PROVIDER_API_KEY=
export COPILOT_PROVIDER_WIRE_API=responses
export COPILOT_MODEL=qwen3.5
```

1.  Run Copilot CLI:

```
copilot
```

Or run with environment variables inline:

```
COPILOT_PROVIDER_BASE_URL=http://localhost:11434/v1 COPILOT_PROVIDER_API_KEY= COPILOT_PROVIDER_WIRE_API=responses COPILOT_MODEL=glm-5:cloud copilot
```

**Note:** Copilot requires a large context window. We recommend at least 64k tokens. See the [context length documentation](/context-length) for how to adjust context length in Ollama.

[Previous](/integrations/codex)[

OpenCode

Next



](/integrations/opencode)

Ctrl+I
