---
title: "OpenClaw - Ollama"
url: https://docs.ollama.com/integrations/openclaw
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:51.951Z
---
# OpenClaw - Ollama

> Source: https://docs.ollama.com/integrations/openclaw

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

OpenClaw is a personal AI assistant that runs on your own devices. It bridges messaging services (WhatsApp, Telegram, Slack, Discord, iMessage, and more) to AI coding agents through a centralized gateway.

## 

[​

](#quick-start)

Quick start

```
ollama launch openclaw
```

Ollama handles everything automatically:

1.  **Install** — If OpenClaw isn’t installed, Ollama prompts to install it via npm
2.  **Security** — On the first launch, a security notice explains the risks of tool access
3.  **Model** — Pick a model from the selector (local or cloud)
4.  **Onboarding** — Ollama configures the provider, installs the gateway daemon, sets your model as the primary, and enables OpenClaw’s bundled Ollama web search
5.  **Gateway** — Starts in the background and opens the OpenClaw TUI

OpenClaw requires a larger context window. It is recommended to use a context window of at least 64k tokens if using local models. See [Context length](/context-length) for more information.

Previously known as Clawdbot. `ollama launch clawdbot` still works as an alias.

## 

[​

](#web-search-and-fetch)

Web search and fetch

OpenClaw ships with a bundled Ollama `web_search` provider that lets local or cloud-backed Ollama setups search the web through the configured Ollama host.

```
ollama launch openclaw
```

Ollama web search is enabled automatically when launching OpenClaw through Ollama. To configure it manually:

```
openclaw configure --section web
```

Ollama web search for local models requires `ollama signin`.

## 

[​

](#configure-without-launching)

Configure without launching

To change the model without starting the gateway and TUI:

```
ollama launch openclaw --config
```

To use a specific model directly:

```
ollama launch openclaw --model kimi-k2.5:cloud
```

If the gateway is already running, it restarts automatically to pick up the new model.

## 

[​

](#recommended-models)

Recommended models

**Cloud models**:

-   `kimi-k2.5:cloud` — Multimodal reasoning with subagents
-   `qwen3.5:cloud` — Reasoning, coding, and agentic tool use with vision
-   `glm-5.1:cloud` — Reasoning and code generation
-   `minimax-m2.7:cloud` — Fast, efficient coding and real-world productivity

**Local models:**

-   `gemma4` — Reasoning and code generation locally (~16 GB VRAM)
-   `qwen3.5` — Reasoning, coding, and visual understanding locally (~11 GB VRAM)

More models at [ollama.com/search](https://ollama.com/search?c=cloud).

## 

[​

](#non-interactive-headless-mode)

Non-interactive (headless) mode

Run OpenClaw without interaction for use in Docker, CI/CD, or scripts:

```
ollama launch openclaw --model kimi-k2.5:cloud --yes
```

The `--yes` flag auto-pulls the model, skips selectors, and requires `--model` to be specified.

## 

[​

](#connect-messaging-apps)

Connect messaging apps

```
openclaw configure --section channels
```

Link WhatsApp, Telegram, Slack, Discord, or iMessage to chat with your local models from anywhere.

## 

[​

](#stopping-the-gateway)

Stopping the gateway

```
openclaw gateway stop
```

[Previous](/integrations)[

Hermes Agent

Next



](/integrations/hermes)

⌘I
