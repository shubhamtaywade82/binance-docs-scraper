---
title: "Query Current UM Open Conditional Order(Deprecated)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-UM-Open-Conditional-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:01.276Z
---
# Query Current UM Open Conditional Order(Deprecated)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-UM-Open-Conditional-Order

# Query Current UM Open Conditional Order(Deprecated)

## API Description

Query Current UM Open Conditional Order

## HTTP Request

GET `/papi/v1/um/conditional/openOrder`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| strategyId | LONG | NO |  |
| newClientStrategyId | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

Notes:

> -   Either `strategyId` or `newClientStrategyId` must be sent.
> -   If the queried order has been `CANCELED`, `TRIGGERED` or `EXPIRED`, the error message "Order does not exist" will be returned.

## Response Example

```json
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
```
