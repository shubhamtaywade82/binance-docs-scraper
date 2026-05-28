---
title: "Index Price and Mark Price"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Index-Price-and-Mark-Price
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:23.743Z
---
# Index Price and Mark Price

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Index-Price-and-Mark-Price>

# Index Price and Mark Price

## API Description

Query index price and mark price

## HTTP Request

GET `/dapi/v1/premiumIndex`

## Request Weight

**10**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| pair | STRING | NO |  |

## Response Example

> with symbol

```json
[
  {
    "symbol": "BTCUSD_PERP",
    "pair": "BTCUSD",
    "markPrice": "11029.69574559",
    "indexPrice": "10979.14437500",
    "estimatedSettlePrice": "10981.74168236",
    "lastFundingRate": "0.00071003",
    "interestRate": "0.00010000",
    "nextFundingTime": 1596096000000,
    "time": 1596094042000
  },
  {
    "symbol": "BTCUSD_200925",
    "pair": "BTCUSD",
    "markPrice": "12077.01343750",
    "indexPrice": "10979.10312500",
    "estimatedSettlePrice": "10981.74168236",
    "lastFundingRate": "",
    "interestRate": "",
    "nextFundingTime": 0,
    "time": 1596094042000
  }
]
```
