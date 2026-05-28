---
title: "Portfolio Margin Pro Bankruptcy Loan Repay"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Classic-Portfolio-Margin-Bankruptcy-Loan-Repay
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:41.491Z
---
# Portfolio Margin Pro Bankruptcy Loan Repay

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Classic-Portfolio-Margin-Bankruptcy-Loan-Repay>

# Portfolio Margin Pro Bankruptcy Loan Repay

## API Description

Repay Portfolio Margin Pro Bankruptcy Loan

## HTTP Request

POST `/sapi/v1/portfolio/repay`

## Request Weight(UID)

**3000**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | STRING | NO | SPOT or MARGIN，default SPOT |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

- Please note that the API Key has enabled Spot & Margin Trading permissions to access this endpoint.

## Response Example

```json
{
  "tranId": 58203331886213500
}
```
