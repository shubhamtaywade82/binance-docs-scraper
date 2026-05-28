---
title: "Current All Open Orders (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Current-All-Open-Orders
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:16.790Z
---
# Current All Open Orders (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Current-All-Open-Orders

# Current All Open Orders (USER\_DATA)

## API Description

Get all open orders on a symbol.

## HTTP Request

GET `/fapi/v1/openOrders`

## Request Weight

**1** for a single symbol; **40** when the symbol parameter is omitted

**Careful** when accessing this with no symbol.

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   If the symbol is not sent, orders for all symbols will be returned in an array.

## Response Example

```json
[
  {
    "avgPrice": "0.00000",
    "clientOrderId": "abc",
    "cumQuote": "0",
    "executedQty": "0",
    "orderId": 1917641,
    "origQty": "0.40",
    "origType": "TRAILING_STOP_MARKET",
    "price": "0",
    "reduceOnly": false,
    "side": "BUY",
    "positionSide": "SHORT",
    "status": "NEW",
    "stopPrice": "9300",
    "closePosition": false,
    "symbol": "BTCUSDT",
    "time": 1579276756075,
    "timeInForce": "GTC",
    "type": "TRAILING_STOP_MARKET",
    "activatePrice": "9020",
    "priceRate": "0.3",
    "updateTime": 1579276756075,
    "workingType": "CONTRACT_PRICE",
    "priceProtect": false,
    "priceMatch": "NONE",
    "selfTradePreventionMode": "NONE",
    "goodTillDate": 0
  }
]
```
