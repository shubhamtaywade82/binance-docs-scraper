---
title: "Cancel Order (TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Order
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:01.312Z
---
# Cancel Order (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Order>

# Cancel Order (TRADE)

## API Description

Cancel an active order.

## HTTP Request

DELETE `/fapi/v1/order`

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
  "clientOrderId": "myOrder1",
  "cumQty": "0",
  "cumQuote": "0",
  "executedQty": "0",
  "orderId": 283194212,
  "origQty": "11",
  "origType": "TRAILING_STOP_MARKET",
  "price": "0",
  "avgPrice": "0.00",
  "reduceOnly": false,
  "side": "BUY",
  "positionSide": "SHORT",
  "status": "CANCELED",
  "stopPrice": "9300",
  "closePosition": false,
  "symbol": "BTCUSDT",
  "timeInForce": "GTC",
  "type": "TRAILING_STOP_MARKET",
  "activatePrice": "9020",
  "priceRate": "0.3",
  "updateTime": 1571110484038,
  "workingType": "CONTRACT_PRICE",
  "priceProtect": false,
  "priceMatch": "NONE",
  "selfTradePreventionMode": "NONE",
  "goodTillDate": 1693207680000
}
```
