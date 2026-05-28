---
title: "Hermes Agent - Ollama"
url: https://docs.ollama.com/integrations/hermes
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:56.248Z
---
# Hermes Agent - Ollama

> Source: <https://docs.ollama.com/integrations/hermes>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

Hermes Agent is a self-improving AI agent built by Nous Research. It features automatic skill creation, cross-session memory, and 70+ skills that it ships with by default. ![Hermes Agent with Ollama](https://mintcdn.com/ollama-9269c548/_5fHmJyR9RXyOCBa/images/hermes.png?fit=max&auto=format&n=_5fHmJyR9RXyOCBa&q=85&s=760b90a13b4f22ea9cdfc9ca69f78184)

##

[​

](#quick-start)

Quick start

```
ollama launch hermes
```

Ollama handles everything automatically:

1. **Install** — If Hermes isn’t installed, Ollama prompts to install it via the Nous Research install script
2. **Model** — Pick a model from the selector (local or cloud)
3. **Onboarding** — Ollama configures the Ollama provider, points Hermes at `http://127.0.0.1:11434/v1`, and sets your model as the primary
4. **Gateway** — Optionally connects a messaging platform (Telegram, Discord, Slack, WhatsApp, Signal, Email) and launches the Hermes chat

Hermes on Windows requires WSL2. Install it with `wsl --install` and re-run from inside the WSL shell.

##

[​

](#recommended-models)

Recommended models

**Cloud models**:

- `kimi-k2.5:cloud` — Multimodal reasoning with subagents
- `glm-5.1:cloud` — Reasoning and code generation
- `qwen3.5:cloud` — Reasoning, coding, and agentic tool use with vision
- `minimax-m2.7:cloud` — Fast, efficient coding and real-world productivity

**Local models:**

- `gemma4` — Reasoning and code generation locally (~16 GB VRAM)
- `qwen3.6` — Reasoning, coding, and visual understanding locally (~24 GB VRAM)

More models at [ollama.com/search](https://ollama.com/search?c=cloud).

##

[​

](#connect-messaging-apps)

Connect messaging apps

Link Telegram, Discord, Slack, WhatsApp, Signal, or Email to chat with your models from anywhere:

```
hermes gateway setup
```

##

[​

](#reconfigure)

Reconfigure

Re-run the full setup wizard at any time:

```
hermes setup
```

##

[​

](#manual-setup)

Manual setup

If you’d rather drive Hermes’s own wizard instead of `ollama launch hermes`, install it directly:

```
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Hermes launches the setup wizard automatically. Choose **Quick setup**:

```
How would you like to set up Hermes?

 →  Quick setup — provider, model & messaging (recommended)
    Full setup — configure everything
```

###

[​

](#connect-to-ollama)

Connect to Ollama

1. Select **More providers…**
2. Select **Custom endpoint (enter URL manually)**
3. Set the API base URL to the Ollama OpenAI-compatible endpoint:

    ```
    API base URL [e.g. https://api.example.com/v1]: http://127.0.0.1:11434/v1
    ```

4. Leave the API key blank (not required for local Ollama):

    ```
    API key [optional]:
    ```

5. Hermes auto-detects downloaded models, confirm the one you want:

    ```
    Verified endpoint via http://127.0.0.1:11434/v1/models (1 model(s) visible)
      Detected model: kimi-k2.5:cloud
      Use this model? [Y/n]:
    ```

6. Leave context length blank to auto-detect:

    ```
    Context length in tokens [leave blank for auto-detect]:
    ```

###

[​

](#connect-messaging)

Connect messaging

Optionally connect a messaging platform during setup:

```
Connect a messaging platform? (Telegram, Discord, etc.)

 →  Set up messaging now (recommended)
    Skip — set up later with 'hermes setup gateway'
```

###

[​

](#launch)

Launch

```
Launch hermes chat now? [Y/n]: Y
```

[Previous](/integrations/openclaw)[

Claude Code

Next

](/integrations/claude-code)

Ctrl+I
