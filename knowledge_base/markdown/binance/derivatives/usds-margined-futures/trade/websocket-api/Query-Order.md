---
title: "Query Order (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Query-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:43:26.690Z
---
# Query Order (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Query-Order>

# Query Order (USER\_DATA)

## API Description

Check an order's status.

- These orders will not be found:
  - order status is `CANCELED` or `EXPIRED` **AND** order has NO filled trade **AND** created time + 3 days < current time
  - order create time + 90 days < current time

## Method

`order.status`

## Request

```json
{
  "id": "0ce5d070-a5e5-4ff2-b57f-1556741a4204",
  "method": "order.status",
  "params": {
    "apiKey": "HMOchcfii9ZRZnhjp2XjGXhsOBd6msAhKz9joQaWwZ7arcJTlD2hGPHQj1lGdTjR",
    "orderId": 328999071,
    "symbol": "BTCUSDT",
    "timestamp": 1703441060152,
    "signature": "ba48184fc38a71d03d2b5435bd67c1206e3191e989fe99bda1bc643a880dfdbf"
  }
}
```

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

Notes:

> - Either `orderId` or `origClientOrderId` must be sent.
> - `orderId` is self-increment for each specific `symbol`

## Response Example

```json
{
  "id": "605a6d20-6588-4cb9-afa0-b0ab087507ba",
  "status": 200,
  "result": {
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
    "priceProtect": false
  }
}
```
