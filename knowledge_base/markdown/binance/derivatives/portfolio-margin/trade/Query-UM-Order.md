---
title: "Query UM Order (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-UM-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:41.488Z
---
# Query UM Order (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-UM-Order

# Query UM Order (USER\_DATA)

## API Description

Check an UM order's status.

## HTTP Request

GET `/papi/v1/um/order`

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

> -   These orders will not be found:
> -   Either `orderId` or `origClientOrderId` must be sent.
>     -   order status is `CANCELED` or `EXPIRED`, **AND**
>     -   order has NO filled trade, **AND**
>     -   created time + 3 days < current time

## Response Example

```
{

    "avgPrice": "0.00000",

    "clientOrderId": "abc",

    "cumQuote": "0",

    "executedQty": "0",

    "orderId": 1917641,

    "origQty": "0.40",

    "origType": "LIMIT",

    "price": "0",

    "reduceOnly": false,

    "side": "BUY",

    "positionSide": "SHORT",

    "status": "NEW",

    "symbol": "BTCUSDT",

    "time": 1579276756075,              // order time

    "timeInForce": "GTC",

    "type": "LIMIT",

    "updateTime": 1579276756075,        // update time

    "selfTradePreventionMode": "NONE", 

    "goodTillDate": 0,

    "priceMatch": "NONE"  

}

```
