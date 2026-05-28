---
title: "Keepalive User Data Stream (USER_STREAM)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:40:26.391Z
---
# Keepalive User Data Stream (USER_STREAM)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream

# Keepalive User Data Stream (USER\_STREAM)

## API Description

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes.

## HTTP Request

PUT `/dapi/v1/listenKey`

## Request Weight

**1**

## Request Parameters

None

## Response Example

```json
{
  "listenKey": "vmNt6gl1so8bXVsaAY153FG5tf63QaODxUarKUM8V8rY4ElSwEe431DNIYNKOkQp"
}
```
