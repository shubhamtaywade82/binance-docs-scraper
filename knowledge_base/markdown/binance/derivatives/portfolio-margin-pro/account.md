---
title: "Get Portfolio Margin Pro Account Info(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:43:13.510Z
---
# Get Portfolio Margin Pro Account Info(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account

# Get Portfolio Margin Pro Account Info(USER\_DATA)

## API Description

Get Portfolio Margin Pro Account Info

## HTTP Request

GET `/sapi/v1/portfolio/account`

## Request Weight(UID)

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "uniMMR": "5167.92171923",
  "accountEquity": "122607.35137903",
  "actualEquity": "142607.35137903",
  "accountMaintMargin": "23.72469206",
  "accountInitialMargin": "47.44938412",
  "totalAvailableBalance": "122,559.90199491",
  "accountStatus": "NORMAL",
  "accountType": "PM_1"
}
```
