---
title: "Quickstart - Ollama"
url: https://docs.ollama.com/quickstart
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:19.958Z
---
# Quickstart - Ollama

> Source: https://docs.ollama.com/quickstart

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

Ollama is available on macOS, Windows, and Linux. [Download Ollama](https://ollama.com/download)

## 

[​

](#get-started)

Get Started

Run `ollama` in your terminal to open the interactive menu:

```
ollama
```

Navigate with `↑/↓`, press `enter` to launch, `→` to change model, and `esc` to quit. The menu provides quick access to:

-   **Run a model** - Start an interactive chat
-   **Launch tools** - Claude Code, Codex, OpenClaw, and more
-   **Additional integrations** - Available under “More…”

## 

[​

](#assistants)

Assistants

Launch [OpenClaw](/integrations/openclaw), a personal AI with 100+ skills:

```
ollama launch openclaw
```

## 

[​

](#coding)

Coding

Launch [Claude Code](/integrations/claude-code) and other coding tools with Ollama models:

```
ollama launch claude
```

```
ollama launch codex
```

```
ollama launch opencode
```

See [integrations](/integrations) for all supported tools.

## 

[​

](#api)

API

Use the [API](/api) to integrate Ollama into your applications:

```
curl http://localhost:11434/api/chat -d '{
  "model": "gemma3",
  "messages": [{ "role": "user", "content": "Hello!" }]
}'
```

See the [API documentation](/api) for Python, JavaScript, and other integrations.

[Previous](/)[

Cloud

Next



](/cloud)

⌘I
