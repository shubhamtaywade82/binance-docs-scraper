---
title: "UM Account Trade List(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/UM-Account-Trade-List
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:53.198Z
---
# UM Account Trade List(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/UM-Account-Trade-List>

# UM Account Trade List(USER\_DATA)

## API Description

Get trades for a specific account and UM symbol.

## HTTP Request

GET `/papi/v1/um/userTrades`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| fromId | LONG | NO | Trade id to fetch from. Default gets most recent trades. |
| limit | INT | NO | Default 500; max 1000. |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - If `startTime` and `endTime` are both not sent, then the last '7 days' data will be returned.
> - The time between `startTime` and `endTime` cannot be longer than 7 days.
> - The parameter `fromId` cannot be sent with `startTime` or `endTime`.

## Response Example

```json
[
  {
    "symbol": "BTCUSDT",
    "id": 67880589,
    "orderId": 270093109,
    "side": "SELL",
    "price": "28511.00",
    "qty": "0.010",
    "realizedPnl": "2.58500000",
    "quoteQty": "285.11000",
    "commission": "0.11404400",
    "commissionAsset": "USDT",
    "time": 1680688557875,
    "buyer": false,
    "maker": false,
    "positionSide": "BOTH"
  }
]
```
