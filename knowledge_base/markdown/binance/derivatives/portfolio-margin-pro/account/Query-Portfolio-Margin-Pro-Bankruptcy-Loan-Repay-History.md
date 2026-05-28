---
title: "Query Portfolio Margin Pro Bankruptcy Loan Repay History(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Portfolio-Margin-Pro-Bankruptcy-Loan-Repay-History
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:04.526Z
---
# Query Portfolio Margin Pro Bankruptcy Loan Repay History(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Portfolio-Margin-Pro-Bankruptcy-Loan-Repay-History

# Query Portfolio Margin Pro Bankruptcy Loan Repay History(USER\_DATA)

## API Description

Query repay history of pmloan for portfolio margin pro.

## HTTP Request

GET `/sapi/v1/portfolio/pmloan-history`

## Request Weight(IP)

**500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| current | LONG | NO | Currently querying page. Start from 1. Default:1 |
| size | LONG | NO | Default:10 Max:100 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

-   `startTime` and `endTime` cannot be longer than 360 days
-   If `startTime` and `endTime` not sent, return records of the last 30 days by default.
-   If `startTime`is sent and `endTime` is not sent, return records of \[startTime, startTime+30d\].
-   If `startTime` is not sent and `endTime` is sent, return records of \[endTime-30d, endTime\].

## Response Example

```json
{
  "total": 3,
  "rows": [
    {
      "asset": "USDT",
      "amount": "404.80294503",
      "repayTime": 1731336427804
    },
    {
      "asset": "USDT",
      "amount": "4620.41204574",
      "repayTime": 1726125090016
    }
  ]
}
```
