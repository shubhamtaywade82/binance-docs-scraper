---
title: "Margin Account Trade List (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Trade-List
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:53:29.903Z
---
# Margin Account Trade List (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Trade-List

# Margin Account Trade List (USER\_DATA)

## API Description

Margin Account Trade List

## HTTP Request

GET `/papi/v1/margin/myTrades`

## Weight

**5**

## Parameters:

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| orderId | LONG | NO |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| fromId | LONG | NO | TradeId to fetch from. Default gets most recent trades. |
| limit | INT | NO | Default 500; max 1000. |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

**Notes:**

-   If `fromId` is set, it will get trades >= that `fromId`. Otherwise most recent trades are returned.
-   Less than 24 hours between `startTime` and `endTime`.

## Response:

```json
[
  {
    "commission": "0.00006000",
    "commissionAsset": "BTC",
    "id": 34,
    "isBestMatch": true,
    "isBuyer": false,
    "isMaker": false,
    "orderId": 39324,
    "price": "0.02000000",
    "qty": "3.00000000",
    "symbol": "BNBBTC",
    "time": 1561973357171
  }
]
```
