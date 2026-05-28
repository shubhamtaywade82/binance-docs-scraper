---
title: "Change UM Initial Leverage(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-UM-Initial-Leverage
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:24.035Z
---
# Change UM Initial Leverage(TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-UM-Initial-Leverage

# Change UM Initial Leverage(TRADE)

## API Description

Change user's initial leverage of specific symbol in UM.

## HTTP Request

POST `/papi/v1/um/leverage`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| leverage | INT | YES | target initial leverage: int from 1 to 125 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "leverage": 21,
  "maxNotionalValue": "1000000",
  "symbol": "BTCUSDT"
}
```
