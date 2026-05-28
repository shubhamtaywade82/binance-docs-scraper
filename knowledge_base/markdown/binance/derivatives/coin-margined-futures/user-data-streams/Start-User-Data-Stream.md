---
title: "Start User Data Stream (USER_STREAM)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Start-User-Data-Stream
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:40:23.947Z
---
# Start User Data Stream (USER_STREAM)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Start-User-Data-Stream

# Start User Data Stream (USER\_STREAM)

## API Description

Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

## HTTP Request

POST `/dapi/v1/listenKey`

## Request Weight

**1**

## Request Parameters

None

## Response Example

```json
{
  "listenKey": "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
}
```
