---
title: "Get Portfolio Margin Asset Leverage(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data/Get-Portfolio-Margin-Asset-Leverage
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:40:01.125Z
---
# Get Portfolio Margin Asset Leverage(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data/Get-Portfolio-Margin-Asset-Leverage

# Get Portfolio Margin Asset Leverage(USER\_DATA)

## API Description

Get Portfolio Margin Asset Leverage

## HTTP Request

GET `/sapi/v1/portfolio/margin-asset-leverage`

## Request Weight(IP)

**50**

## Response Example

```json
[
  {
    "asset": "USDC",
    "leverage": 10
  },
  {
    "asset": "USDT",
    "leverage": 10
  }
]
```
