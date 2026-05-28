---
title: "Get Portfolio Margin Pro Account Balance(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Classic-Portfolio-Margin-Balance-Info
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:01.559Z
---
# Get Portfolio Margin Pro Account Balance(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Classic-Portfolio-Margin-Balance-Info>

# Get Portfolio Margin Pro Account Balance(USER\_DATA)

## API Description

Query Portfolio Margin Pro account balance

## HTTP Request

GET `/sapi/v1/portfolio/balance`

## Request Weight(IP)

**20**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "asset": "BTC",
    "totalWalletBalance": "100",
    "crossMarginAsset": "100",
    "crossMarginBorrowed": "0",
    "crossMarginFree": "100",
    "crossMarginInterest": "0",
    "crossMarginLocked": "0",
    "umWalletBalance": "0",
    "umUnrealizedPNL": "0",
    "cmWalletBalance": "0",
    "cmUnrealizedPNL": "0",
    "updateTime": 0,
    "negativeBalance": "0",
    "optionWalletBalance": "0",
    "optionEquity": "0"
  }
]
```
