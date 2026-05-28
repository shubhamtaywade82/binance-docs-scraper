---
title: "Close User Data Stream (USER_STREAM)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Close-User-Data-Stream-Wsp
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:43:52.236Z
---
# Close User Data Stream (USER_STREAM)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Close-User-Data-Stream-Wsp

# Close User Data Stream (USER\_STREAM)

## API Description

Close out a user data stream.

## Method

`userDataStream.stop`

## Request

```json
{
  "id": "819e1b1b-8c06-485b-a13e-131326c69599",
  "method": "userDataStream.stop",
  "params": {
    "apiKey": "vmPUZE6mv9SD5VNHk9HlWFsOr9aLE2zvsw0MuIgwCIPy8atIco14y7Ju91duEh8A"
  }
}
```

## Request Weight

**1**

## Request Parameters

None

## Response Example

```json
{
  "id": "819e1b1b-8c06-485b-a13e-131326c69599",
  "status": 200,
  "result": {},
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
