---
title: "Query Order (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Query-Order
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:54:12.348Z
---
# Query Order (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Query-Order>

# Query Order (USER\_DATA)

## API Description

Check an order's status.

- These orders will not be found:
  - order status is CANCELED or EXPIRED AND order has NO filled trade AND created time + 3 days < current time
  - order create time + 90 days < current time

## HTTP Request

GET `/dapi/v1/order`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| orderId | LONG | NO |  |
| origClientOrderId | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Either `orderId` or `origClientOrderId` must be sent.

## Response Example

```json
{
  "avgPrice": "0.0",
  "clientOrderId": "abc",
  "cumBase": "0",
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
  "symbol": "BTCUSD_200925",
  "pair": "BTCUSD",
  "time": 1579276756075,
  "timeInForce": "GTC",
  "type": "TRAILING_STOP_MARKET",
  "activatePrice": "9020",
  "priceRate": "0.3",
  "updateTime": 1579276756075,
  "workingType": "CONTRACT_PRICE",
  "priceProtect": false,
  "priceMatch": "NONE",
  "selfTradePreventionMode": "NONE"
}
```
