---
title: "Keepalive User Data Stream (USER_STREAM)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Keepalive-User-Data-Stream
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:43:41.420Z
---
# Keepalive User Data Stream (USER_STREAM)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Keepalive-User-Data-Stream

# Keepalive User Data Stream (USER\_STREAM)

## API Description

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 60 minutes.

## HTTP Request

PUT `/fapi/v1/listenKey`

## Request Weight

**1**

## Request Parameters

None

## Response Example

```json
{
  "listenKey": "3HBntNTepshgEdjIwSUIBgB9keLyOCg5qv3n6bYAtktG8ejcaW5HXz9Vx1JgIieg"
}
```
