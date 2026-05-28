---
title: "Query Portfolio Margin Asset Index Price (MARKET_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:38:26.067Z
---
# Query Portfolio Margin Asset Index Price (MARKET_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data>

# Query Portfolio Margin Asset Index Price (MARKET\_DATA)

## API Description

Query Portfolio Margin Asset Index Price

## HTTP Request

GET `/sapi/v1/portfolio/asset-index-price`

## Request Weight(IP)

**1** if send asset or **50** if not send asset

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | NO |  |

## Response Example

```json
[
  {
    "asset": "BTC",
    "assetIndexPrice": "28251.9136906",
    "time": 1683518338121
  }
]
```
