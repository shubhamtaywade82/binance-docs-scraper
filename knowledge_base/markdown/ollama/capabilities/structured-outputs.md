---
title: "Structured Outputs - Ollama"
url: https://docs.ollama.com/capabilities/structured-outputs
kind: examples
category: docs
source: ollama
scraped_at: 2026-05-28T19:03:32.566Z
---
# Structured Outputs - Ollama

> Source: https://docs.ollama.com/capabilities/structured-outputs

[Documentation

](/)[API Reference

](/api/introduction)

> ## Documentation Index
> 
> Fetch the complete documentation index at: [https://docs.ollama.com/llms.txt](https://docs.ollama.com/llms.txt)
> 
> Use this file to discover all available pages before exploring further.

Ollama’s Cloud currently does not support structured outputs.

Structured outputs let you enforce a JSON schema on model responses so you can reliably extract structured data, describe images, or keep every reply consistent.

## 

[​

](#generating-structured-json)

Generating structured JSON

-   cURL
    
-   Python
    
-   JavaScript
    

```
curl -X POST http://localhost:11434/api/chat -H "Content-Type: application/json" -d '{
  "model": "gpt-oss",
  "messages": [{"role": "user", "content": "Tell me about Canada in one line"}],
  "stream": false,
  "format": "json"
}'
```

```
from ollama import chat

response = chat(
  model='gpt-oss',
  messages=[{'role': 'user', 'content': 'Tell me about Canada.'}],
  format='json'
)
print(response.message.content)
```

```
import ollama from 'ollama'

const response = await ollama.chat({
  model: 'gpt-oss',
  messages: [{ role: 'user', content: 'Tell me about Canada.' }],
  format: 'json'
})
console.log(response.message.content)
```

## 

[​

](#generating-structured-json-with-a-schema)

Generating structured JSON with a schema

Provide a JSON schema to the `format` field.

It is ideal to also pass the JSON schema as a string in the prompt to ground the model’s response.

-   cURL
    
-   Python
    
-   JavaScript
    

```
curl -X POST http://localhost:11434/api/chat -H "Content-Type: application/json" -d '{
  "model": "gpt-oss",
  "messages": [{"role": "user", "content": "Tell me about Canada."}],
  "stream": false,
  "format": {
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "capital": {"type": "string"},
      "languages": {
        "type": "array",
        "items": {"type": "string"}
      }
    },
    "required": ["name", "capital", "languages"]
  }
}'
```

Use Pydantic models and pass `model_json_schema()` to `format`, then validate the response:

```
from ollama import chat
from pydantic import BaseModel

class Country(BaseModel):
  name: str
  capital: str
  languages: list[str]

response = chat(
  model='gpt-oss',
  messages=[{'role': 'user', 'content': 'Tell me about Canada.'}],
  format=Country.model_json_schema(),
)

country = Country.model_validate_json(response.message.content)
print(country)
```

Serialize a Zod schema with `zodToJsonSchema()` and parse the structured response:

```
import ollama from 'ollama'
import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

const Country = z.object({
  name: z.string(),
  capital: z.string(),
  languages: z.array(z.string()),
})

const response = await ollama.chat({
  model: 'gpt-oss',
  messages: [{ role: 'user', content: 'Tell me about Canada.' }],
  format: zodToJsonSchema(Country),
})

const country = Country.parse(JSON.parse(response.message.content))
console.log(country)
```

## 

[​

](#example-extract-structured-data)

Example: Extract structured data

Define the objects you want returned and let the model populate the fields:

```
from ollama import chat
from pydantic import BaseModel

class Pet(BaseModel):
  name: str
  animal: str
  age: int
  color: str | None
  favorite_toy: str | None

class PetList(BaseModel):
  pets: list[Pet]

response = chat(
  model='gpt-oss',
  messages=[{'role': 'user', 'content': 'I have two cats named Luna and Loki...'}],
  format=PetList.model_json_schema(),
)

pets = PetList.model_validate_json(response.message.content)
print(pets)
```

## 

[​

](#example-vision-with-structured-outputs)

Example: Vision with structured outputs

Vision models accept the same `format` parameter, enabling deterministic descriptions of images:

```
from ollama import chat
from pydantic import BaseModel
from typing import Literal, Optional

class Object(BaseModel):
  name: str
  confidence: float
  attributes: str

class ImageDescription(BaseModel):
  summary: str
  objects: list[Object]
  scene: str
  colors: list[str]
  time_of_day: Literal['Morning', 'Afternoon', 'Evening', 'Night']
  setting: Literal['Indoor', 'Outdoor', 'Unknown']
  text_content: Optional[str] = None

response = chat(
  model='gemma3',
  messages=[{
    'role': 'user',
    'content': 'Describe this photo and list the objects you detect.',
    'images': ['path/to/image.jpg'],
  }],
  format=ImageDescription.model_json_schema(),
  options={'temperature': 0},
)

image_description = ImageDescription.model_validate_json(response.message.content)
print(image_description)
```

## 

[​

](#tips-for-reliable-structured-outputs)

Tips for reliable structured outputs

-   Define schemas with Pydantic (Python) or Zod (JavaScript) so they can be reused for validation.
-   Lower the temperature (e.g., set it to `0`) for more deterministic completions.
-   Structured outputs work through the OpenAI-compatible API via `response_format`

[Previous](/capabilities/thinking)[

Vision

Next



](/capabilities/vision)

⌘I
