---
title: "Query Current CM Open Order (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-CM-Open-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:20.544Z
---
# Query Current CM Open Order (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Current-CM-Open-Order

# Query Current CM Open Order (USER\_DATA)

## API Description

Query current CM open order

## HTTP Request

GET `/papi/v1/cm/openOrder`

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
> -   If the queried order has been filled or cancelled, the error message "Order does not exist" will be returned.

## Response Example

```
[

    {

        "avgPrice": "0.0",              

        "clientOrderId": "abc",             

        "cumBase": "0",                     

        "executedQty": "0",                 

        "orderId": 1917641,                 

        "origQty": "0.40",                      

        "origType": "LIMIT",

        "price": "0",

        "reduceOnly": false,

        "side": "BUY",

        "positionSide": "SHORT",

        "status": "NEW",

        "symbol": "BTCUSD_200925",

        "pair": "BTCUSD"

        "time": 1579276756075,              // order time

        "timeInForce": "GTC",

        "type": "LIMIT",

        "updateTime": 1579276756075        // update time

    }

]

```
