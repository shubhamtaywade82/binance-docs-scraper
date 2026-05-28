---
title: "Get Market Maker Protection Config (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-endpoints
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:03.677Z
---
# Get Market Maker Protection Config (TRADE)

> Source: https://developers.binance.com/docs/derivatives/options-trading/market-maker-endpoints

# Get Market Maker Protection Config (TRADE)

## API Description

Get config for MMP.

## HTTP Request

GET `/eapi/v1/mmp (HMAC SHA256)`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| underlying | STRING | TRUE | underlying, e.g BTCUSDT |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "underlyingId": 2,
  "underlying": "BTCUSDT",
  "windowTimeInMilliseconds": 3000,
  "frozenTimeInMilliseconds": 300000,
  "qtyLimit": "2",
  "deltaLimit": "2.3",
  "lastTriggerTime": 0
}
```
