---
title: "Generate a response - Ollama"
url: https://docs.ollama.com/api/generate
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:02:42.677Z
---
# Generate a response - Ollama

> Source: https://docs.ollama.com/api/generate

[Documentation

](/)[API Reference

](/api/introduction)

POST

/

api

/

generate

cURL

Default

```
curl http://localhost:11434/api/generate -d '{
  "model": "gemma3",
  "prompt": "Why is the sky blue?"
}'
```

200

```json
{
  "model": "<string>",
  "created_at": "<string>",
  "response": "<string>",
  "thinking": "<string>",
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

](#body-prompt)

prompt

string

Text for the model to generate a response from

[​

](#body-suffix)

suffix

string

Used for fill-in-the-middle models, text that appears after the user prompt and before the model response

[​

](#body-images)

images

string\[\]

Base64-encoded images for models that support image input

[​

](#body-format-one-of-0)

format

stringobjectstringobject

Structured output format for the model to generate a response from. Supports either the string `"json"` or a JSON schema object.

[​

](#body-system)

system

string

System prompt for the model to generate a response from

[​

](#body-stream)

stream

boolean

default:true

When true, returns a stream of partial responses

[​

](#body-think-one-of-0)

think

booleanenum<string>booleanenum<string>

When true, returns separate thinking output in addition to content. Can be a boolean (true/false) or a string ("high", "medium", "low") for supported models.

[​

](#body-raw)

raw

boolean

When true, returns the raw response from the model without any prompt templating

[​

](#body-keep-alive-one-of-0)

keep\_alive

stringnumberstringnumber

Model keep-alive duration (for example `5m` or `0` to unload immediately)

[​

](#body-options)

options

object

Runtime options that control text generation

Show child attributes

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

Generation responses

[​

](#response-model)

model

string

Model name

[​

](#response-created-at)

created\_at

string

ISO 8601 timestamp of response creation

[​

](#response-response)

response

string

The model's generated text response

[​

](#response-thinking)

thinking

string

The model's generated thinking output

[​

](#response-done)

done

boolean

Indicates whether generation has finished

[​

](#response-done-reason)

done\_reason

string

Reason the generation stopped

[​

](#response-total-duration)

total\_duration

integer

Time spent generating the response in nanoseconds

[​

](#response-load-duration)

load\_duration

integer

Time spent loading the model in nanoseconds

[​

](#response-prompt-eval-count)

prompt\_eval\_count

integer

Number of input tokens in the prompt

[​

](#response-prompt-eval-duration)

prompt\_eval\_duration

integer

Time spent evaluating the prompt in nanoseconds

[​

](#response-eval-count)

eval\_count

integer

Number of output tokens generated in the response

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

[Previous](/api/anthropic-compatibility)[

ChatGenerate the next chat message in a conversation between a user and an assistant.

Next



](/api/chat)

⌘I

cURL

Default

```
curl http://localhost:11434/api/generate -d '{
  "model": "gemma3",
  "prompt": "Why is the sky blue?"
}'
```

200

```json
{
  "model": "<string>",
  "created_at": "<string>",
  "response": "<string>",
  "thinking": "<string>",
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
