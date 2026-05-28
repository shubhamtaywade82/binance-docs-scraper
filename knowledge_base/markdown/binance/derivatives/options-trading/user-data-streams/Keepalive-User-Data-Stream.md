---
title: "Keepalive User Data Stream (USER_STREAM)"
url: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Keepalive-User-Data-Stream
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:54:53.177Z
---
# Keepalive User Data Stream (USER_STREAM)

> Source: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Keepalive-User-Data-Stream

# Keepalive User Data Stream (USER\_STREAM)

## API Description

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 60 minutes.

## HTTP Request

PUT `/eapi/v1/listenKey`

## Request Weight

**1**

## Request Parameters

None

## Response Example

```json
{}
```
