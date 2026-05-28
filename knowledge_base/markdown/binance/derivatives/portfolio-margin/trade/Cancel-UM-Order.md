---
title: "Cancel UM Order(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-UM-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:58.775Z
---
# Cancel UM Order(TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-UM-Order

# Cancel UM Order(TRADE)

## API Description

Cancel an active UM LIMIT order

## HTTP Request

DELETE `/papi/v1/um/order`

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

> -   Either `orderId` or `origClientOrderId` must be sent.

## Response Example

```json
{
  "avgPrice": "0.00000",
  "clientOrderId": "myOrder1",
  "cumQty": "0",
  "cumQuote": "0",
  "executedQty": "0",
  "orderId": 4611875134427365000,
  "origQty": "0.40",
  "price": "0",
  "reduceOnly": false,
  "side": "BUY",
  "positionSide": "SHORT",
  "status": "CANCELED",
  "symbol": "BTCUSDT",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "updateTime": 1571110484038,
  "selfTradePreventionMode": "NONE",
  "goodTillDate": 0,
  "priceMatch": "NONE"
}
```
