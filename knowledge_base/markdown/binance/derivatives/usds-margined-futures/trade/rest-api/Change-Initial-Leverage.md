---
title: "Change Initial Leverage(TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Initial-Leverage
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:33.048Z
---
# Change Initial Leverage(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Initial-Leverage>

# Change Initial Leverage(TRADE)

## API Description

Change user's initial leverage of specific symbol market.

## HTTP Request

POST `/fapi/v1/leverage`

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
