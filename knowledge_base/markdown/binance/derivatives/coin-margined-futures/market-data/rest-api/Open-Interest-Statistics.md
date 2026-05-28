---
title: "Open Interest Statistics"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Open-Interest-Statistics
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:58:56.359Z
---
# Open Interest Statistics

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Open-Interest-Statistics

# Open Interest Statistics

## API Description

Query open interest stats

## HTTP Request

GET `/futures/data/openInterestHist`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pair | STRING | YES | BTCUSD |
| contractType | ENUM | YES | ALL, CURRENT\_QUARTER, NEXT\_QUARTER, PERPETUAL |
| period | ENUM | YES | "5m","15m","30m","1h","2h","4h","6h","12h","1d" |
| limit | LONG | NO | Default 30,Max 500 |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |

> -   If startTime and endTime are not sent, the most recent data is returned.
> -   Only the data of the latest 30 days is available.

## Response Example

```json
[
  {
    "pair": "BTCUSD",
    "contractType": "CURRENT_QUARTER",
    "sumOpenInterest": "20403",
    "sumOpenInterestValue": "176196512.23400000",
    "timestamp": 1591261042378
  },
  {
    "pair": "BTCUSD",
    "contractType": "CURRENT_QUARTER",
    "sumOpenInterest": "20401",
    "sumOpenInterestValue": "176178704.98700000",
    "timestamp": 1583128200000
  }
]
```
