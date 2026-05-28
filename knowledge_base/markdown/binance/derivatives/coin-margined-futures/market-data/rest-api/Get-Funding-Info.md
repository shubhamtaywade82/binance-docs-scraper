---
title: "Get Funding Rate Info"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Get-Funding-Info
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:28.459Z
---
# Get Funding Rate Info

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Get-Funding-Info>

# Get Funding Rate Info

## API Description

Query funding rate info for symbols that had FundingRateCap/ FundingRateFloor / fundingIntervalHours adjustment

## HTTP Request

GET `/dapi/v1/fundingInfo`

## Response Example

```json
[
  {
    "symbol": "BTCUSD_PERP",
    "adjustedFundingRateCap": "0.02500000",
    "adjustedFundingRateFloor": "-0.02500000",
    "fundingIntervalHours": 8,
    "disclaimer": false
  }
]
```
