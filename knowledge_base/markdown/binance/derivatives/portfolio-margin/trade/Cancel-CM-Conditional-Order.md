---
title: "Cancel CM Conditional Order(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-CM-Conditional-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:22.042Z
---
# Cancel CM Conditional Order(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-CM-Conditional-Order>

# Cancel CM Conditional Order(TRADE)

## API Description

Cancel CM Conditional Order

## HTTP Request

DELETE `/papi/v1/cm/conditional/order`

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

> - Either `strategyId` or `newClientStrategyId` must be sent.

## Response Example

```json
{
  "newClientStrategyId": "myOrder1",
  "strategyId": 123445,
  "strategyStatus": "CANCELED",
  "strategyType": "TRAILING_STOP_MARKET",
  "origQty": "11",
  "price": "0",
  "reduceOnly": false,
  "side": "BUY",
  "positionSide": "SHORT",
  "stopPrice": "9300",
  "symbol": "BTCUSD",
  "timeInForce": "GTC",
  "activatePrice": "9020",
  "priceRate": "0.3",
  "bookTime": 1566818724710,
  "updateTime": 1566818724722,
  "workingType": "CONTRACT_PRICE",
  "priceProtect": false
}
```
