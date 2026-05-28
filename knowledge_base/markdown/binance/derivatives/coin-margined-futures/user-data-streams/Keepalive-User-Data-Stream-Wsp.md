---
title: "Keepalive User Data Stream (USER_STREAM)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream-Wsp
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:40:34.466Z
---
# Keepalive User Data Stream (USER_STREAM)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream-Wsp

# Keepalive User Data Stream (USER\_STREAM)

## API Description

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 60 minutes.

## Method

`userDataStream.ping`

## Request

```
{

  "id": "815d5fce-0880-4287-a567-80badf004c74",

  "method": "userDataStream.ping",

  "params": {

    "apiKey": "vmPUZE6mv9SD5VNHk9HlWFsOr9aLE2zvsw0MuIgwCIPy8atIco14y7Ju91duEh8A"

   }

}

```

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory |  Description |
| --- | --- | --- | --- |
| `apiKey` | STRING | NO | Required if session is not authenticated via `session.logon` |

## Response Example

```json
{
  "id": "815d5fce-0880-4287-a567-80badf004c74",
  "status": 200,
  "result": {
    "listenKey": "3HBntNTepshgEdjIwSUIBgB9keLyOCg5qv3n6bYAtktG8ejcaW5HXz9Vx1JgIieg"
  },
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 2400,
      "count": 2
    }
  ]
}
```
