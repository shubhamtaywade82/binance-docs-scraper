---
title: "Get Funding Rate Info"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Get-Funding-Rate-Info
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:14.601Z
---
# Get Funding Rate Info

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Get-Funding-Rate-Info

# Get Funding Rate Info

## API Description

Query funding rate info for symbols that had FundingRateCap/ FundingRateFloor / fundingIntervalHours adjustment

## HTTP Request

GET `/fapi/v1/fundingInfo`

## Request Weight

**0**

share 500/5min/IP rate limit with `GET /fapi/v1/fundingRate`

## Request Parameters

## Response Example

```json
[
  {
    "symbol": "BLZUSDT",
    "adjustedFundingRateCap": "0.02500000",
    "adjustedFundingRateFloor": "-0.02500000",
    "fundingIntervalHours": 8,
    "disclaimer": false
  }
]
```
