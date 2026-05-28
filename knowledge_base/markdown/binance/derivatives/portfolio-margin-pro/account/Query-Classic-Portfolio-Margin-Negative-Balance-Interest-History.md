---
title: "Query Portfolio Margin Pro Negative Balance Interest History(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Classic-Portfolio-Margin-Negative-Balance-Interest-History
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:55.677Z
---
# Query Portfolio Margin Pro Negative Balance Interest History(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Classic-Portfolio-Margin-Negative-Balance-Interest-History>

# Query Portfolio Margin Pro Negative Balance Interest History(USER\_DATA)

## API Description

Query interest history of negative balance for portfolio margin.

## HTTP Request

GET `/sapi/v1/portfolio/interest-history`

## Request Weight(IP)

**50**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | NO |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| size | LONG | NO | Default:10 Max:100 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "asset": "USDT",
    "interest": "24.4440",
    "interestAccruedTime": 1670227200000,
    "interestRate": "0.0001164",
    "principal": "210000"
  }
]
```
