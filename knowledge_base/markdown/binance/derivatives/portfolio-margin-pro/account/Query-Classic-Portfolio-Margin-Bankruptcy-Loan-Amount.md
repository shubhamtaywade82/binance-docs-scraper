---
title: "Query Portfolio Margin Pro Bankruptcy Loan Amount(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Classic-Portfolio-Margin-Bankruptcy-Loan-Amount
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:44.367Z
---
# Query Portfolio Margin Pro Bankruptcy Loan Amount(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Classic-Portfolio-Margin-Bankruptcy-Loan-Amount

# Query Portfolio Margin Pro Bankruptcy Loan Amount(USER\_DATA)

## API Description

Query Portfolio Margin Pro Bankruptcy Loan Amount

## HTTP Request

GET `/sapi/v1/portfolio/pmLoan`

## Request Weight(UID)

**500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   If there’s no classic portfolio margin bankruptcy loan, the amount would be 0

## Response Example

```
{

   "asset": "BUSD",   

   "amount":  "579.45", // portfolio margin bankruptcy loan amount in BUSD

}

```
