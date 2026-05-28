---
title: "Get Position Margin Change History(TRADE)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Get-Position-Margin-Change-History
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:50:30.645Z
---
# Get Position Margin Change History(TRADE)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Get-Position-Margin-Change-History

# Get Position Margin Change History(TRADE)

## API Description

Get position margin change history

## HTTP Request

GET `/dapi/v1/positionMargin/history`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| type | INT | NO | 1: Add position margin,2: Reduce position margin |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| limit | INT | NO | Default: 50 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "amount": "23.36332311",
    "asset": "BTC",
    "symbol": "BTCUSD_200925",
    "time": 1578047897183,
    "type": 1,
    "positionSide": "BOTH"
  },
  {
    "amount": "100",
    "asset": "BTC",
    "symbol": "BTCUSD_200925",
    "time": 1578047900425,
    "type": 1,
    "positionSide": "LONG"
  }
]
```
