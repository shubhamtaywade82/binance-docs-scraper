---
title: "Anthropic compatibility - Ollama"
url: https://docs.ollama.com/api/anthropic-compatibility
kind: auth
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:39.258Z
---
# Anthropic compatibility - Ollama

> Source: <https://docs.ollama.com/api/anthropic-compatibility>

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
>
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
>
> Use this file to discover all available pages before exploring further.

Ollama provides compatibility with the [Anthropic Messages API](https://docs.anthropic.com/en/api/messages) to help connect existing applications to Ollama, including tools like Claude Code.

##

[​

](#usage)

Usage

###

[​

](#environment-variables)

Environment variables

To use Ollama with tools that expect the Anthropic API (like Claude Code), set these environment variables:

```
export ANTHROPIC_AUTH_TOKEN=ollama  # required but ignored
export ANTHROPIC_BASE_URL=http://localhost:11434
```

###

[​

](#simple-/v1/messages-example)

Simple `/v1/messages` example

basic.py

Python

```
import anthropic

client = anthropic.Anthropic(
    base_url='http://localhost:11434',
    api_key='ollama',  # required but ignored
)

message = client.messages.create(
    model='qwen3-coder',
    max_tokens=1024,
    messages=[
        {'role': 'user', 'content': 'Hello, how are you?'}
    ]
)
print(message.content[0].text)
```

###

[​

](#streaming-example)

Streaming example

streaming.py

Python

```
import anthropic

client = anthropic.Anthropic(
    base_url='http://localhost:11434',
    api_key='ollama',
)

with client.messages.stream(
    model='qwen3-coder',
    max_tokens=1024,
    messages=[{'role': 'user', 'content': 'Count from 1 to 10'}]
) as stream:
    for text in stream.text_stream:
        print(text, end='', flush=True)
```

###

[​

](#tool-calling-example)

Tool calling example

tools.py

Python

```
import anthropic

client = anthropic.Anthropic(
    base_url='http://localhost:11434',
    api_key='ollama',
)

message = client.messages.create(
    model='qwen3-coder',
    max_tokens=1024,
    tools=[
        {
            'name': 'get_weather',
            'description': 'Get the current weather in a location',
            'input_schema': {
                'type': 'object',
                'properties': {
                    'location': {
                        'type': 'string',
                        'description': 'The city and state, e.g. San Francisco, CA'
                    }
                },
                'required': ['location']
            }
        }
    ],
    messages=[{'role': 'user', 'content': "What's the weather in San Francisco?"}]
)

for block in message.content:
    if block.type == 'tool_use':
        print(f'Tool: {block.name}')
        print(f'Input: {block.input}')
```

##

[​

](#using-with-claude-code)

Using with Claude Code

[Claude Code](https://code.claude.com/docs/en/overview) can be configured to use Ollama as its backend.

###

[​

](#recommended-models)

Recommended models

For coding use cases, models like `glm-4.7`, `minimax-m2.1`, and `qwen3-coder` are recommended. Download a model before use:

```
ollama pull qwen3-coder
```

> Note: Qwen 3 coder is a 30B parameter model requiring at least 24GB of VRAM to run smoothly. More is required for longer context lengths.

```
ollama pull glm-4.7:cloud
```

###

[​

](#quick-setup)

Quick setup

```
ollama launch claude
```

This will prompt you to select a model, configure Claude Code automatically, and launch it. To configure without launching:

```
ollama launch claude --config
```

###

[​

](#manual-setup)

Manual setup

Set the environment variables and run Claude Code:

```
ANTHROPIC_AUTH_TOKEN=ollama ANTHROPIC_BASE_URL=http://localhost:11434 claude --model qwen3-coder
```

Or set the environment variables in your shell profile:

```
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_BASE_URL=http://localhost:11434
```

Then run Claude Code with any Ollama model:

```
claude --model qwen3-coder
```

##

[​

](#endpoints)

Endpoints

###

[​

](#/v1/messages)

`/v1/messages`

####

[​

](#supported-features)

Supported features

- [x]  Messages
- [x]  Streaming
- [x]  System prompts
- [x]  Multi-turn conversations
- [x]  Vision (images)
- [x]  Tools (function calling)
- [x]  Tool results
- [x]  Thinking/extended thinking

####

[​

](#supported-request-fields)

Supported request fields

- [x]  `model`
- [x]  `max_tokens`
- [x]  `messages`
  - [x]  Text `content`
  - [x]  Image `content` (base64)
  - [x]  Array of content blocks
  - [x]  `tool_use` blocks
  - [x]  `tool_result` blocks
  - [x]  `thinking` blocks
- [x]  `system` (string or array)
- [x]  `stream`
- [x]  `temperature`
- [x]  `top_p`
- [x]  `top_k`
- [x]  `stop_sequences`
- [x]  `tools`
- [x]  `thinking`
- [ ]  `tool_choice`
- [ ]  `metadata`

####

[​

](#supported-response-fields)

Supported response fields

- [x]  `id`
- [x]  `type`
- [x]  `role`
- [x]  `model`
- [x]  `content` (text, tool\_use, thinking blocks)
- [x]  `stop_reason` (end\_turn, max\_tokens, tool\_use)
- [x]  `usage` (input\_tokens, output\_tokens)

####

[​

](#streaming-events)

Streaming events

- [x]  `message_start`
- [x]  `content_block_start`
- [x]  `content_block_delta` (text\_delta, input\_json\_delta, thinking\_delta)
- [x]  `content_block_stop`
- [x]  `message_delta`
- [x]  `message_stop`
- [x]  `ping`
- [x]  `error`

##

[​

](#models)

Models

Ollama supports both local and cloud models.

###

[​

](#local-models)

Local models

Pull a local model before use:

```
ollama pull qwen3-coder
```

Recommended local models:

- `qwen3-coder` - Excellent for coding tasks
- `gpt-oss:20b` - Strong general-purpose model

###

[​

](#cloud-models)

Cloud models

Cloud models are available immediately without pulling:

- `glm-4.7:cloud` - High-performance cloud model
- `minimax-m2.1:cloud` - Fast cloud model

###

[​

](#default-model-names)

Default model names

For tooling that relies on default Anthropic model names such as `claude-3-5-sonnet`, use `ollama cp` to copy an existing model name:

```
ollama cp qwen3-coder claude-3-5-sonnet
```

Afterwards, this new model name can be specified in the `model` field:

```
curl http://localhost:11434/v1/messages \
    -H "Content-Type: application/json" \
    -d '{
        "model": "claude-3-5-sonnet",
        "max_tokens": 1024,
        "messages": [
            {
                "role": "user",
                "content": "Hello!"
            }
        ]
    }'
```

##

[​

](#differences-from-the-anthropic-api)

Differences from the Anthropic API

###

[​

](#behavior-differences)

Behavior differences

- API key is accepted but not validated
- `anthropic-version` header is accepted but not used
- Token counts are approximations based on the underlying model’s tokenizer

###

[​

](#not-supported)

Not supported

The following Anthropic API features are not currently supported:

| Feature | Description |
| --- | --- |
| `/v1/messages/count_tokens` | Token counting endpoint |
| `tool_choice` | Forcing specific tool use or disabling tools |
| `metadata` | Request metadata (user\_id) |
| Prompt caching | `cache_control` blocks for caching prefixes |
| Batches API | `/v1/messages/batches` for async batch processing |
| Citations | `citations` content blocks |
| PDF support | `document` content blocks with PDF files |
| Server-sent errors | `error` events during streaming (errors return HTTP status) |

###

[​

](#partial-support)

Partial support

| Feature | Status |
| --- | --- |
| Image content | Base64 images supported; URL images not supported |
| Extended thinking | Basic support; `budget_tokens` accepted but not enforced |

[Previous](/api/openai-compatibility)[

GenerateGenerates a response for the provided prompt

Next

](/api/generate)

⌘I
