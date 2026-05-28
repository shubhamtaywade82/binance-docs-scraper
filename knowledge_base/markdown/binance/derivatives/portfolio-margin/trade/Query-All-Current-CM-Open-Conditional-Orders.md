---
title: "Query All Current CM Open Conditional Orders (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-CM-Open-Conditional-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:27.111Z
---
# Query All Current CM Open Conditional Orders (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-CM-Open-Conditional-Orders

# Query All Current CM Open Conditional Orders (USER\_DATA)

## API Description

Get all open conditional orders on a symbol. **Careful** when accessing this with no symbol.

## HTTP Request

GET `/papi/v1/cm/conditional/openOrders`

## Request Weight

**1** for a single symbol; **40** when the symbol parameter is omitted

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
    "symbol": "BTCUSD",
    "bookTime": 1566818724710,
    "updateTime": 1566818724722,
    "timeInForce": "GTC",
    "activatePrice": "9020",
    "priceRate": "0.3"
  }
]
```
