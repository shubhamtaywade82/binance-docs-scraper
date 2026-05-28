---
title: "Query All Current UM Open Algo Orders (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-UM-Open-Algo-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:55.090Z
---
# Query All Current UM Open Algo Orders (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-All-Current-UM-Open-Algo-Orders

# Query All Current UM Open Algo Orders (USER\_DATA)

## API Description

Get all UM open algo orders on a symbol.

## HTTP Request

GET `/papi/v1/um/algo/openAlgoOrders`

## Request Weight

**1** for a single symbol; **40** when the symbol parameter is omitted

**Careful** when accessing this with no symbol.

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algoType | STRING | NO |  |
| symbol | STRING | NO |  |
| algoId | LONG | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   If the symbol is not sent, orders for all symbols will be returned in an array.

## Response Example

```json
[
  {
    "algoId": 2148627,
    "clientAlgoId": "MRumok0dkhrP4kCm12AHaB",
    "algoType": "CONDITIONAL",
    "orderType": "TAKE_PROFIT",
    "symbol": "BNBUSDT",
    "side": "SELL",
    "positionSide": "BOTH",
    "timeInForce": "GTC",
    "quantity": "0.01",
    "algoStatus": "NEW",
    "actualOrderId": "",
    "actualPrice": "0.00000",
    "triggerPrice": "750.000",
    "price": "750.000",
    "icebergQuantity": null,
    "tpTriggerPrice": "0.000",
    "tpPrice": "0.000",
    "slTriggerPrice": "0.000",
    "slPrice": "0.000",
    "tpOrderType": "",
    "selfTradePreventionMode": "EXPIRE_MAKER",
    "workingType": "CONTRACT_PRICE",
    "priceMatch": "NONE",
    "closePosition": false,
    "priceProtect": false,
    "reduceOnly": false,
    "createTime": 1750514941540,
    "updateTime": 1750514941540,
    "triggerTime": 0,
    "goodTillDate": 0
  }
]
```
