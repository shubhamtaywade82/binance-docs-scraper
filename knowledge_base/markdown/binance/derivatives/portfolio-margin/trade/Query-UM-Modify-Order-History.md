---
title: "Query UM Modify Order History(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-UM-Modify-Order-History
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:44.015Z
---
# Query UM Modify Order History(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-UM-Modify-Order-History>

# Query UM Modify Order History(TRADE)

## API Description

Get order modification history

## HTTP Request

GET `/papi/v1/um/orderAmendment`

## Request Weight(Order)

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| orderId | LONG | NO |  |
| origClientOrderId | STRING | NO |  |
| startTime | LONG | NO | Timestamp in ms to get modification history from INCLUSIVE |
| endTime | LONG | NO | Timestamp in ms to get modification history until INCLUSIVE |
| limit | INT | NO | Default 500, max 1000 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Either `orderId` or `origClientOrderId` must be sent, and the `orderId` will prevail if both are sent.

## Response Example

```json
[
  {
    "amendmentId": 5363,
    "symbol": "BTCUSDT",
    "pair": "BTCUSDT",
    "orderId": 20072994037,
    "clientOrderId": "LJ9R4QZDihCaS8UAOOLpgW",
    "time": 1629184560899,
    "amendment": {
      "price": {
        "before": "30004",
        "after": "30003.2"
      },
      "origQty": {
        "before": "1",
        "after": "1"
      },
      "count": 3
    },
    "priceMatch": "NONE"
  },
  {
    "amendmentId": 5361,
    "symbol": "BTCUSDT",
    "pair": "BTCUSDT",
    "orderId": 20072994037,
    "clientOrderId": "LJ9R4QZDihCaS8UAOOLpgW",
    "time": 1629184533946,
    "amendment": {
      "price": {
        "before": "30005",
        "after": "30004"
      },
      "origQty": {
        "before": "1",
        "after": "1"
      },
      "count": 2
    },
    "priceMatch": "NONE"
  },
  {
    "amendmentId": 5325,
    "symbol": "BTCUSDT",
    "pair": "BTCUSDT",
    "orderId": 20072994037,
    "clientOrderId": "LJ9R4QZDihCaS8UAOOLpgW",
    "time": 1629182711787,
    "amendment": {
      "price": {
        "before": "30002",
        "after": "30005"
      },
      "origQty": {
        "before": "1",
        "after": "1"
      },
      "count": 1
    },
    "priceMatch": "NONE"
  }
]
```
