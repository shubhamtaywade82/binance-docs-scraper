---
title: "Cancel CM Order(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-CM-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:16.254Z
---
# Cancel CM Order(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-CM-Order>

# Cancel CM Order(TRADE)

## API Description

Cancel an active LIMIT order

## HTTP Request

DELETE `/papi/v1/cm/order`

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

```
{

    "avgPrice": "0.0",

    "clientOrderId": "myOrder1",

    "cumQty": "0",

    "cumBase": "0",

    "executedQty": "0",

    "orderId": 283194212,

    "origQty": "2",

    "price": "0",

    "reduceOnly": false,

    "side": "BUY",

    "positionSide": "SHORT",  

    "status": "CANCELED",          

    "symbol": "BTCUSD_200925",

    "pair": "BTCUSD",

    "timeInForce": "GTC",

    "type": "LIMIT",

    "updateTime": 1571110484038,

}

```
