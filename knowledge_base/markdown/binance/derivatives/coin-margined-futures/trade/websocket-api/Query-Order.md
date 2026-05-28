---
title: "Query Order (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/Query-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:49:21.954Z
---
# Query Order (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/Query-Order

# Query Order (USER\_DATA)

## API Description

Check an order's status.

-   These orders will not be found:
    -   order status is `CANCELED` or `EXPIRED` **AND** order has NO filled trade **AND** created time + 3 days < current time
    -   order create time + 90 days < current time

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
    "symbol": "BTCUSD_PERP",
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

> -   Either `orderId` or `origClientOrderId` must be sent.
> -   `orderId` is self-increment for each specific `symbol`

## Response Example

```json
{
  "id": "0ce5d070-a5e5-4ff2-b57f-1556741a4204",
  "status": 200,
  "result": {
    "orderId": 328999071,
    "symbol": "BTCUSD_PERP",
    "pair": "BTCUSD",
    "status": "NEW",
    "clientOrderId": "ArY8Ng1rln0s9x3fclmAHy",
    "price": "58000",
    "avgPrice": "0.00",
    "origQty": "1",
    "executedQty": "0",
    "cumBase": "0",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "reduceOnly": false,
    "closePosition": false,
    "side": "BUY",
    "positionSide": "LONG",
    "stopPrice": "0",
    "workingType": "CONTRACT_PRICE",
    "priceProtect": false,
    "origType": "LIMIT",
    "selfTradePreventionMode": "EXPIRE_TAKER",
    "time": 1733740063619,
    "updateTime": 1733740063619,
    "priceMatch": "NONE"
  },
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 2400,
      "count": 6
    }
  ]
}
```
