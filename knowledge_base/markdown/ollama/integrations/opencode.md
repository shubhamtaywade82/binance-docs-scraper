---
title: "OpenCode - Ollama"
url: https://docs.ollama.com/integrations/opencode
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:10.099Z
---
# OpenCode - Ollama

> Source: https://docs.ollama.com/integrations/opencode

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

OpenCode is an open-source AI coding assistant that runs in your terminal.

## 

[​

](#install)

Install

Install the [OpenCode CLI](https://opencode.ai):

```
curl -fsSL https://opencode.ai/install | bash
```

OpenCode requires a larger context window. It is recommended to use a context window of at least 64k tokens. See [Context length](/context-length) for more information.

## 

[​

](#usage-with-ollama)

Usage with Ollama

### 

[​

](#quick-setup)

Quick setup

```
ollama launch opencode
```

To configure without launching:

```
ollama launch opencode --config
```

`ollama launch opencode` passes its configuration to OpenCode inline via the `OPENCODE_CONFIG_CONTENT` environment variable. OpenCode deep-merges its config sources on startup, so anything you declare in `~/.config/opencode/opencode.json` is still respected and available inside OpenCode. Models declared only in `opencode.json` won’t appear in `ollama launch`’s model-selection menu.

[Previous](/integrations/copilot-cli)[

Droid

Next



](/integrations/droid)

Ctrl+I
