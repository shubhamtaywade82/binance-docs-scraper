---
title: "CLI Reference - Ollama"
url: https://docs.ollama.com/cli
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:04:44.733Z
---
# CLI Reference - Ollama

> Source: https://docs.ollama.com/cli

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

### 

[​

](#run-a-model)

Run a model

```
ollama run gemma3
```

### 

[​

](#launch-integrations)

Launch integrations

```
ollama launch
```

Configure and launch external applications to use Ollama models. This provides an interactive way to set up and start integrations with supported apps.

#### 

[​

](#supported-integrations)

Supported integrations

-   **OpenCode** - Open-source coding assistant
-   **Claude Code** - Anthropic’s agentic coding tool
-   **Codex** - OpenAI’s coding assistant
-   **VS Code** - Microsoft’s IDE with built-in AI chat
-   **Droid** - Factory’s AI coding agent

#### 

[​

](#examples)

Examples

Launch an integration interactively:

```
ollama launch
```

Launch a specific integration:

```
ollama launch claude
```

Launch with a specific model:

```
ollama launch claude --model qwen3.5
```

Configure without launching:

```
ollama launch droid --config
```

#### 

[​

](#multiline-input)

Multiline input

For multiline input, you can wrap text with `"""`:

```
>>> """Hello,
... world!
... """
I'm a basic program that prints the famous "Hello, world!" message to the console.
```

#### 

[​

](#multimodal-models)

Multimodal models

```
ollama run gemma3 "What's in this image? /Users/jmorgan/Desktop/smile.png"
```

### 

[​

](#generate-embeddings)

Generate embeddings

```
ollama run embeddinggemma "Hello world"
```

Output is a JSON array:

```
echo "Hello world" | ollama run nomic-embed-text
```

### 

[​

](#download-a-model)

Download a model

```
ollama pull gemma3
```

### 

[​

](#remove-a-model)

Remove a model

```
ollama rm gemma3
```

### 

[​

](#list-models)

List models

```
ollama ls
```

### 

[​

](#sign-in-to-ollama)

Sign in to Ollama

```
ollama signin
```

### 

[​

](#sign-out-of-ollama)

Sign out of Ollama

```
ollama signout
```

### 

[​

](#create-a-customized-model)

Create a customized model

First, create a `Modelfile`

```
FROM gemma3
SYSTEM """You are a happy cat."""
```

Then run `ollama create`:

```
ollama create -f Modelfile
```

### 

[​

](#list-running-models)

List running models

```
ollama ps
```

### 

[​

](#stop-a-running-model)

Stop a running model

```
ollama stop gemma3
```

### 

[​

](#start-ollama)

Start Ollama

```
ollama serve
```

To view a list of environment variables that can be set run `ollama serve --help`

[Previous](/integrations/marimo)[

NemoClaw

Next



](/integrations/nemoclaw)

⌘I
