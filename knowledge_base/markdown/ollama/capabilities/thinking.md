---
title: "Thinking - Ollama"
url: https://docs.ollama.com/capabilities/thinking
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:29.437Z
---
# Thinking - Ollama

> Source: https://docs.ollama.com/capabilities/thinking

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

Thinking-capable models emit a `thinking` field that separates their reasoning trace from the final answer. Use this capability to audit model steps, animate the model _thinking_ in a UI, or hide the trace entirely when you only need the final response.

## 

[​

](#supported-models)

Supported models

-   [Qwen 3](https://ollama.com/library/qwen3)
-   [GPT-OSS](https://ollama.com/library/gpt-oss) _(use `think` levels: `low`, `medium`, `high` — the trace cannot be fully disabled)_
-   [DeepSeek-v3.1](https://ollama.com/library/deepseek-v3.1)
-   [DeepSeek R1](https://ollama.com/library/deepseek-r1)
-   Browse the latest additions under [thinking models](https://ollama.com/search?c=thinking)

## 

[​

](#enable-thinking-in-api-calls)

Enable thinking in API calls

Set the `think` field on chat or generate requests. Most models accept booleans (`true`/`false`). GPT-OSS instead expects one of `low`, `medium`, or `high` to tune the trace length. The `message.thinking` (chat endpoint) or `thinking` (generate endpoint) field contains the reasoning trace while `message.content` / `response` holds the final answer.

-   cURL
    
-   Python
    
-   JavaScript
    

```
curl http://localhost:11434/api/chat -d '{
  "model": "qwen3",
  "messages": [{
    "role": "user",
    "content": "How many letter r are in strawberry?"
  }],
  "think": true,
  "stream": false
}'
```

```
from ollama import chat

response = chat(
  model='qwen3',
  messages=[{'role': 'user', 'content': 'How many letter r are in strawberry?'}],
  think=True,
  stream=False,
)

print('Thinking:\n', response.message.thinking)
print('Answer:\n', response.message.content)
```

```
import ollama from 'ollama'

const response = await ollama.chat({
  model: 'deepseek-r1',
  messages: [{ role: 'user', content: 'How many letter r are in strawberry?' }],
  think: true,
  stream: false,
})

console.log('Thinking:\n', response.message.thinking)
console.log('Answer:\n', response.message.content)
```

GPT-OSS requires `think` to be set to `"low"`, `"medium"`, or `"high"`. Passing `true`/`false` is ignored for that model.

## 

[​

](#stream-the-reasoning-trace)

Stream the reasoning trace

Thinking streams interleave reasoning tokens before answer tokens. Detect the first `thinking` chunk to render a “thinking” section, then switch to the final reply once `message.content` arrives.

-   Python
    
-   JavaScript
    

```
from ollama import chat

stream = chat(
  model='qwen3',
  messages=[{'role': 'user', 'content': 'What is 17 × 23?'}],
  think=True,
  stream=True,
)

in_thinking = False

for chunk in stream:
  if chunk.message.thinking and not in_thinking:
    in_thinking = True
    print('Thinking:\n', end='')

  if chunk.message.thinking:
    print(chunk.message.thinking, end='')
  elif chunk.message.content:
    if in_thinking:
      print('\n\nAnswer:\n', end='')
      in_thinking = False
    print(chunk.message.content, end='')

```

```
import ollama from 'ollama'

async function main() {
  const stream = await ollama.chat({
    model: 'qwen3',
    messages: [{ role: 'user', content: 'What is 17 × 23?' }],
    think: true,
    stream: true,
  })

  let inThinking = false

  for await (const chunk of stream) {
    if (chunk.message.thinking && !inThinking) {
      inThinking = true
      process.stdout.write('Thinking:\n')
    }

    if (chunk.message.thinking) {
      process.stdout.write(chunk.message.thinking)
    } else if (chunk.message.content) {
      if (inThinking) {
        process.stdout.write('\n\nAnswer:\n')
        inThinking = false
      }
      process.stdout.write(chunk.message.content)
    }
  }
}

main()
```

## 

[​

](#cli-quick-reference)

CLI quick reference

-   Enable thinking for a single run: `ollama run deepseek-r1 --think "Where should I visit in Lisbon?"`
-   Disable thinking: `ollama run deepseek-r1 --think=false "Summarize this article"`
-   Hide the trace while still using a thinking model: `ollama run deepseek-r1 --hidethinking "Is 9.9 bigger or 9.11?"`
-   Inside interactive sessions, toggle with `/set think` or `/set nothink`.
-   GPT-OSS only accepts levels: `ollama run gpt-oss --think=low "Draft a headline"` (replace `low` with `medium` or `high` as needed).

Thinking is enabled by default in the CLI and API for supported models.

[Previous](/capabilities/streaming)[

Structured Outputs

Next



](/capabilities/structured-outputs)

⌘I
