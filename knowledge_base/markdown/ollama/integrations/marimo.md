---
title: "marimo - Ollama"
url: https://docs.ollama.com/integrations/marimo
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:05:26.011Z
---
# marimo - Ollama

> Source: <https://docs.ollama.com/integrations/marimo>

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

Install [marimo](https://marimo.io). You can use `pip` or `uv` for this. You can also use `uv` to create a sandboxed environment for marimo by running:

```
uvx marimo edit --sandbox notebook.py
```

##

[​

](#usage-with-ollama)

Usage with Ollama

1. In marimo, go to the user settings and go to the AI tab. From here you can find and configure Ollama as an AI provider. For local use you would typically point the base url to `http://localhost:11434/v1`.

![Ollama settings in marimo](https://mintcdn.com/ollama-9269c548/sniSFOOyehzMt2RV/images/marimo-settings.png?fit=max&auto=format&n=sniSFOOyehzMt2RV&q=85&s=33007ad4867ca8258854eab513da81ff)

1. Once the AI provider is set up, you can turn on/off specific AI models you’d like to access.

![Selecting an Ollama model](https://mintcdn.com/ollama-9269c548/sniSFOOyehzMt2RV/images/marimo-models.png?fit=max&auto=format&n=sniSFOOyehzMt2RV&q=85&s=61acca69dfc3d32e1eb524095c42e4a0)

1. You can also add a model to the list of available models by scrolling to the bottom and using the UI there.

![Adding a new Ollama model](https://mintcdn.com/ollama-9269c548/sniSFOOyehzMt2RV/images/marimo-add-model.png?fit=max&auto=format&n=sniSFOOyehzMt2RV&q=85&s=c3a2dfa7cba1a6565cc726bbbe0ea079)

1. Once configured, you can now use Ollama for AI chats in marimo.

![Configure code completion](https://mintcdn.com/ollama-9269c548/sniSFOOyehzMt2RV/images/marimo-chat.png?fit=max&auto=format&n=sniSFOOyehzMt2RV&q=85&s=03cd217cf60765a00da87e6dc7a07f53)

1. Alternatively, you can now use Ollama for **inline code completion** in marimo. This can be configured in the “AI Features” tab.

![Configure code completion](https://mintcdn.com/ollama-9269c548/sniSFOOyehzMt2RV/images/marimo-code-completion.png?fit=max&auto=format&n=sniSFOOyehzMt2RV&q=85&s=2cd6ad42b810642a90d41b7fd3515278)

##

[​

](#connecting-to-ollama-com)

Connecting to ollama.com

1. Sign in to ollama cloud via `ollama signin`
2. In the ollama model settings add a model that ollama hosts, like `gpt-oss:120b`.
3. You can now refer to this model in marimo!

[Previous](/integrations/n8n)[

CLI Reference

Next

](/cli)

Ctrl+I
