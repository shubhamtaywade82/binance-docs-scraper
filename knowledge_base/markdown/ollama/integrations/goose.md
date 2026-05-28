---
title: "Goose - Ollama"
url: https://docs.ollama.com/integrations/goose
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:15.234Z
---
# Goose - Ollama

> Source: <https://docs.ollama.com/integrations/goose>

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

](#goose-desktop)

Goose Desktop

Install [Goose](https://block.github.io/goose/docs/getting-started/installation/) Desktop.

###

[​

](#usage-with-ollama)

Usage with Ollama

1. In Goose, open **Settings** → **Configure Provider**.

![Goose settings Panel](https://mintcdn.com/ollama-9269c548/Qrfd4TFdx51mx0J_/images/goose-settings.png?fit=max&auto=format&n=Qrfd4TFdx51mx0J_&q=85&s=ba9aaea6b535f03456dbafb0ba48018b)

1. Find **Ollama**, click **Configure**
2. Confirm **API Host** is `http://localhost:11434` and click Submit

###

[​

](#connecting-to-ollama-com)

Connecting to ollama.com

1. Create an [API key](https://ollama.com/settings/keys) on ollama.com and save it in your `.env`
2. In Goose, set **API Host** to `https://ollama.com`

##

[​

](#goose-cli)

Goose CLI

Install [Goose](https://block.github.io/goose/docs/getting-started/installation/) CLI

###

[​

](#usage-with-ollama-2)

Usage with Ollama

1. Run `goose configure`
2. Select **Configure Providers** and select **Ollama**

![Goose CLI](https://mintcdn.com/ollama-9269c548/Qrfd4TFdx51mx0J_/images/goose-cli.png?fit=max&auto=format&n=Qrfd4TFdx51mx0J_&q=85&s=3f34e0d16cbdf89858115b8c64d6dc08)

1. Enter model name (e.g `qwen3`)

###

[​

](#connecting-to-ollama-com-2)

Connecting to ollama.com

1. Create an [API key](https://ollama.com/settings/keys) on ollama.com and save it in your `.env`
2. Run `goose configure`
3. Select **Configure Providers** and select **Ollama**
4. Update **OLLAMA\_HOST** to `https://ollama.com`

[Previous](/integrations/droid)[

Pi

Next

](/integrations/pi)

⌘I
