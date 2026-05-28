---
title: "New Block Trade Order (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:24.441Z
---
# New Block Trade Order (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade>

# New Block Trade Order (TRADE)

## API Description

Send in a new block trade order.

## HTTP Request

POST `eapi/v1/block/order/create`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| liquidity | STRING | YES | Taker or Maker |
| legs | LIST | YES | Max 1 (only single leg supported), list of legs parameters in JSON; example: eapi/v1/block/order/create?orders=\[{"symbol":"BTC-210115-35000-C", "price":"100","quantity":"0.0002","side":"BUY","type":"LIMIT"}\] |
| recvWindow | INT | NO | The value cannot be greater than 60000 |
| timestamp | INT | YES |  |

## Response Example

```json
{
  "blockTradeSettlementKey": "3668822b8-1baa-6a2f-adb8-d3de6289b361",
  "expireTime": 1730171888109,
  "liquidity": "TAKER",
  "status": "RECEIVED",
  "legs": [
    {
      "symbol": "BNB-241101-700-C",
      "side": "BUY",
      "quantity": "1.2",
      "price": "2.8"
    }
  ]
}
```
