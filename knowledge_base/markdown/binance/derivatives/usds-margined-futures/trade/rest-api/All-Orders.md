---
title: "All Orders (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:14.000Z
---
# All Orders (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders

# All Orders (USER\_DATA)

## API Description

Get all account orders; active, canceled, or filled.

-   These orders will not be found:
    -   order status is `CANCELED` or `EXPIRED` **AND** order has NO filled trade **AND** created time + 3 days < current time
    -   order create time + 90 days < current time

## HTTP Request

GET `/fapi/v1/allOrders`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| orderId | LONG | NO |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| limit | INT | NO | Default 500; max 1000. |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

**Notes:**

> -   If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are returned.
> -   The query time period must be less then 7 days( default as the recent 7 days).

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
