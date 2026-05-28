---
title: "Get Position Margin Change History (TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Get-Position-Margin-Change-History
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:49.323Z
---
# Get Position Margin Change History (TRADE)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Get-Position-Margin-Change-History

# Get Position Margin Change History (TRADE)

## API Description

Get Position Margin Change History

## HTTP Request

GET `/fapi/v1/positionMargin/history`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| type | INT | NO | 1: Add position margin，2: Reduce position margin |
| startTime | LONG | NO |  |
| endTime | LONG | NO | Default current time if not pass |
| limit | INT | NO | Default: 500 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   Support querying future histories that are not older than 30 days
> -   The time between `startTime` and `endTime`can't be more than 30 days

## Response Example

```json
[
  {
    "symbol": "BTCUSDT",
    "type": 1,
    "deltaType": "USER_ADJUST",
    "amount": "23.36332311",
    "asset": "USDT",
    "time": 1578047897183,
    "positionSide": "BOTH"
  },
  {
    "symbol": "BTCUSDT",
    "type": 1,
    "deltaType": "USER_ADJUST",
    "amount": "100",
    "asset": "USDT",
    "time": 1578047900425,
    "positionSide": "LONG"
  }
]
```
