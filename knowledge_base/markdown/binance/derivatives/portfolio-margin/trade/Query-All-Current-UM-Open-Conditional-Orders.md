---
title: "Query All Current UM Open Conditional Orders(Deprecated)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-UM-Open-Conditional-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:58.320Z
---
# Query All Current UM Open Conditional Orders(Deprecated)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-UM-Open-Conditional-Orders

# Query All Current UM Open Conditional Orders(Deprecated)

## API Description

Get all open conditional orders on a symbol.

## HTTP Request

`GET /papi/v1/um/conditional/openOrders`

## Request Weight

**1** for a single symbol; **40** when the symbol parameter is omitted **Careful** when accessing this with no symbol.

**Parameters:**

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
    "newClientStrategyId": "abc",
    "strategyId": 123445,
    "strategyStatus": "NEW",
    "strategyType": "TRAILING_STOP_MARKET",
    "origQty": "0.40",
    "price": "0",
    "reduceOnly": false,
    "side": "BUY",
    "positionSide": "SHORT",
    "stopPrice": "9300",
    "symbol": "BTCUSDT",
    "bookTime": 1566818724710,
    "updateTime": 1566818724722,
    "timeInForce": "GTC",
    "activatePrice": "9020",
    "priceRate": "0.3",
    "selfTradePreventionMode": "NONE",
    "goodTillDate": 0,
    "priceMatch": "NONE"
  }
]
```
