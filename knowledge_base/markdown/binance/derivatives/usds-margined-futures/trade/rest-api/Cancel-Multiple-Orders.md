---
title: "Cancel Multiple Orders (TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Multiple-Orders
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:04.093Z
---
# Cancel Multiple Orders (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Multiple-Orders>

# Cancel Multiple Orders (TRADE)

## API Description

Cancel Multiple Orders

## HTTP Request

DELETE `/fapi/v1/batchOrders`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| orderIdList | LIST<LONG> | NO | max length 10  
e.g. \[1234567,2345678\] |
| origClientOrderIdList | LIST<STRING> | NO | max length 10  
e.g. \["my\_id\_1","my\_id\_2"\], encode the double quotes. No space after comma. |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Either `orderIdList` or `origClientOrderIdList` must be sent.

## Response Example

```json
[
  {
    "clientOrderId": "myOrder1",
    "cumQty": "0",
    "cumQuote": "0",
    "executedQty": "0",
    "orderId": 283194212,
    "origQty": "11",
    "origType": "TRAILING_STOP_MARKET",
    "price": "0",
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
  },
  {
    "code": -2011,
    "msg": "Unknown order sent."
  }
]
```
