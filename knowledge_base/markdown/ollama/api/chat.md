---
title: "Generate a chat message - Ollama"
url: https://docs.ollama.com/api/chat
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:45.187Z
---
# Generate a chat message - Ollama

> Source: https://docs.ollama.com/api/chat

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

chat

cURL

Default

```
curl http://localhost:11434/api/chat -d '{
  "model": "gemma3",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ]
}'
```

200

```json
{
  "model": "<string>",
  "created_at": "2023-11-07T05:31:56Z",
  "message": {
    "content": "<string>",
    "thinking": "<string>",
    "tool_calls": [
      {
        "function": {
          "name": "<string>",
          "description": "<string>",
          "arguments": {}
        }
      }
    ],
    "images": [
      "<string>"
    ]
  },
  "done": true,
  "done_reason": "<string>",
  "total_duration": 123,
  "load_duration": 123,
  "prompt_eval_count": 123,
  "prompt_eval_duration": 123,
  "eval_count": 123,
  "eval_duration": 123,
  "logprobs": [
    {
      "token": "<string>",
      "logprob": 123,
      "bytes": [
        123
      ],
      "top_logprobs": [
        {
          "token": "<string>",
          "logprob": 123,
          "bytes": [
            123
          ]
        }
      ]
    }
  ]
}
```

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

#### Body

application/json

[​

](#body-model)

model

string

required

Model name

[​

](#body-messages)

messages

object\[\]

required

Chat history as an array of message objects (each with a role and content)

Show child attributes

[​

](#body-tools)

tools

object\[\]

Optional list of function tools the model may call during the chat

Show child attributes

[​

](#body-format-one-of-0)

format

enum<string>objectenum<string>object

Format to return a response in. Can be `json` or a JSON schema

Available options:

`json`

[​

](#body-options)

options

object

Runtime options that control text generation

Show child attributes

[​

](#body-stream)

stream

boolean

default:true

[​

](#body-think-one-of-0)

think

booleanenum<string>booleanenum<string>

When true, returns separate thinking output in addition to content. Can be a boolean (true/false) or a string ("high", "medium", "low") for supported models.

[​

](#body-keep-alive-one-of-0)

keep\_alive

stringnumberstringnumber

Model keep-alive duration (for example `5m` or `0` to unload immediately)

[​

](#body-logprobs)

logprobs

boolean

Whether to return log probabilities of the output tokens

[​

](#body-top-logprobs)

top\_logprobs

integer

Number of most likely tokens to return at each token position when logprobs are enabled

#### Response

200

application/json

Chat response

[​

](#response-model)

model

string

Model name used to generate this message

[​

](#response-created-at)

created\_at

string<date-time>

Timestamp of response creation (ISO 8601)

[​

](#response-message)

message

object

Show child attributes

[​

](#response-done)

done

boolean

Indicates whether the chat response has finished

[​

](#response-done-reason)

done\_reason

string

Reason the response finished

[​

](#response-total-duration)

total\_duration

integer

Total time spent generating in nanoseconds

[​

](#response-load-duration)

load\_duration

integer

Time spent loading the model in nanoseconds

[​

](#response-prompt-eval-count)

prompt\_eval\_count

integer

Number of tokens in the prompt

[​

](#response-prompt-eval-duration)

prompt\_eval\_duration

integer

Time spent evaluating the prompt in nanoseconds

[​

](#response-eval-count)

eval\_count

integer

Number of tokens generated in the response

[​

](#response-eval-duration)

eval\_duration

integer

Time spent generating tokens in nanoseconds

[​

](#response-logprobs)

logprobs

object\[\]

Log probability information for the generated tokens when logprobs are enabled

Show child attributes

[Previous](/api/generate)[

EmbedCreates vector embeddings representing the input text

Next



](/api/embed)

⌘I

cURL

Default

```
curl http://localhost:11434/api/chat -d '{
  "model": "gemma3",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ]
}'
```

200

```json
{
  "model": "<string>",
  "created_at": "2023-11-07T05:31:56Z",
  "message": {
    "content": "<string>",
    "thinking": "<string>",
    "tool_calls": [
      {
        "function": {
          "name": "<string>",
          "description": "<string>",
          "arguments": {}
        }
      }
    ],
    "images": [
      "<string>"
    ]
  },
  "done": true,
  "done_reason": "<string>",
  "total_duration": 123,
  "load_duration": 123,
  "prompt_eval_count": 123,
  "prompt_eval_duration": 123,
  "eval_count": 123,
  "eval_duration": 123,
  "logprobs": [
    {
      "token": "<string>",
      "logprob": 123,
      "bytes": [
        123
      ],
      "top_logprobs": [
        {
          "token": "<string>",
          "logprob": 123,
          "bytes": [
            123
          ]
        }
      ]
    }
  ]
}
```
