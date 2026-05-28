---
title: "Reset Market Maker Protection Config (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-endpoints/Reset-Market-Maker-Protection-Config
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:13.802Z
---
# Reset Market Maker Protection Config (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/market-maker-endpoints/Reset-Market-Maker-Protection-Config>

# Reset Market Maker Protection Config (TRADE)

## API Description

Reset MMP, start MMP order again.

## HTTP Request

POST `/eapi/v1/mmpReset`

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
