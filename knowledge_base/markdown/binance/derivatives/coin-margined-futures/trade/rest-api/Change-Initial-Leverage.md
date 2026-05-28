---
title: "Change Initial Leverage (TRADE)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Change-Initial-Leverage
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:54:38.293Z
---
# Change Initial Leverage (TRADE)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Change-Initial-Leverage

# Change Initial Leverage (TRADE)

## API Description

Change user's initial leverage in the specific symbol market.  
For Hedge Mode, LONG and SHORT positions of one symbol use the same initial leverage and share a total notional value.

## HTTP Request

POST `/dapi/v1/leverage`

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
  "maxQty": "1000",
  "symbol": "BTCUSD_200925"
}
```
