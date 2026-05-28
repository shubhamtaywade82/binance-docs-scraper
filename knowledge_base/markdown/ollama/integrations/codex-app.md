---
title: "Codex App - Ollama"
url: https://docs.ollama.com/integrations/codex-app
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:02.514Z
---
# Codex App - Ollama

> Source: <https://docs.ollama.com/integrations/codex-app>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

Codex App is OpenAI’s desktop coding agent for macOS and Windows. Ollama configures the app to use Ollama’s OpenAI-compatible endpoint, so Codex can work with local models and Ollama Cloud models in the desktop app. ![Codex App with Ollama selected](https://mintcdn.com/ollama-9269c548/Fw0HGVBarMASKyhi/images/codex-app-home.png?fit=max&auto=format&n=Fw0HGVBarMASKyhi&q=85&s=e97befd3384f711903050d32029d583c)

##

[​

](#install)

Install

Install the [Codex App](https://developers.openai.com/codex/quickstart/) for macOS or Windows.

Codex App support is available in Ollama v0.24.0 and newer.

##

[​

](#quick-setup)

Quick setup

```
ollama launch codex-app
```

Once Codex App opens, start a task or open a repository as usual.

##

[​

](#built-in-browser)

Built-in browser

Codex App can open local servers and sites in its built-in browser. Annotate directly on the page to request changes. ![Codex App browser annotations](https://mintcdn.com/ollama-9269c548/Fw0HGVBarMASKyhi/images/codex-app-annotate.png?fit=max&auto=format&n=Fw0HGVBarMASKyhi&q=85&s=8bf1243702c327e5e56707bae0c89d70)

##

[​

](#review-mode)

Review mode

Use review mode to inspect code changes, leave comments, and iterate on fixes without leaving the app. ![Codex App review comments](https://mintcdn.com/ollama-9269c548/Fw0HGVBarMASKyhi/images/codex-app-review.png?fit=max&auto=format&n=Fw0HGVBarMASKyhi&q=85&s=f507519443fb7ae71a1660a7722b8e2e)

###

[​

](#run-directly-with-a-model)

Run directly with a model

```
ollama launch codex-app --model kimi-k2.6:cloud
```

Use a local model by passing its model name:

```
ollama launch codex-app --model gemma4:31b
```

Running `ollama launch codex-app` is persistent and will have your model selected next time you open Codex.

###

[​

](#restore-codex-app)

Restore Codex App

To switch Codex App back to the profile you were using before `ollama launch codex-app`, run:

```
ollama launch codex-app --restore
```

Ollama restores Codex App’s settings and configs. If Codex App is open, Ollama asks before restarting it. The Codex CLI profile managed by `ollama launch codex` is left separate from the Codex App profile. Before overwriting Codex App config files, Ollama Launch saves backups under `~/.ollama/backup/codex-app/`. On Windows, `~` resolves to your user profile directory.

##

[​

](#troubleshooting)

Troubleshooting

If Codex App does not open after setup, open Codex manually once and run `ollama launch codex-app` again. If Codex App is already running and does not switch models, allow Ollama to restart it when prompted, or quit Codex App and run `ollama launch codex-app` again.

[Previous](/integrations/claude-code)[

Codex CLI

Next

](/integrations/codex)

⌘I
