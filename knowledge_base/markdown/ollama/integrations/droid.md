---
title: "Droid - Ollama"
url: https://docs.ollama.com/integrations/droid
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:12.526Z
---
# Droid - Ollama

> Source: https://docs.ollama.com/integrations/droid

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

Install the [Droid CLI](https://factory.ai/):

```
curl -fsSL https://app.factory.ai/cli | sh
```

Droid requires a larger context window. It is recommended to use a context window of at least 64k tokens. See [Context length](/context-length) for more information.

## 

[​

](#usage-with-ollama)

Usage with Ollama

### 

[​

](#quick-setup)

Quick setup

```
ollama launch droid
```

To configure without launching:

```
ollama launch droid --config
```

### 

[​

](#manual-setup)

Manual setup

Add a local configuration block to `~/.factory/config.json`:

```
{
  "custom_models": [
    {
      "model_display_name": "qwen3-coder [Ollama]",
      "model": "qwen3-coder",
      "base_url": "http://localhost:11434/v1/",
      "api_key": "not-needed",
      "provider": "generic-chat-completion-api",
      "max_tokens": 32000 
    }
  ]
}
```

## 

[​

](#cloud-models)

Cloud Models

`qwen3-coder:480b-cloud` is the recommended model for use with Droid. Add the cloud configuration block to `~/.factory/config.json`:

```
{
  "custom_models": [
    {
      "model_display_name": "qwen3-coder [Ollama Cloud]",
      "model": "qwen3-coder:480b-cloud",
      "base_url": "http://localhost:11434/v1/",
      "api_key": "not-needed",
      "provider": "generic-chat-completion-api",
      "max_tokens": 128000
    }
  ]
}
```

## 

[​

](#connecting-to-ollama-com)

Connecting to ollama.com

1.  Create an [API key](https://ollama.com/settings/keys) from ollama.com and export it as `OLLAMA_API_KEY`.
2.  Add the cloud configuration block to `~/.factory/config.json`:
    
    ```
    {
      "custom_models": [
        {
          "model_display_name": "qwen3-coder [Ollama Cloud]",
          "model": "qwen3-coder:480b",
          "base_url": "https://ollama.com/v1/",
          "api_key": "OLLAMA_API_KEY",
          "provider": "generic-chat-completion-api",
          "max_tokens": 128000
        }
      ]
    }
    ```
    

Run `droid` in a new terminal to load the new settings.

[Previous](/integrations/opencode)[

Goose

Next



](/integrations/goose)

⌘I
