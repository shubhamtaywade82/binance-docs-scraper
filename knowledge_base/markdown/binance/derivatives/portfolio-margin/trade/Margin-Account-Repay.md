---
title: "Margin Account Repay(MARGIN)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Repay
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:53.836Z
---
# Margin Account Repay(MARGIN)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Repay

# Margin Account Repay(MARGIN)

## API Description

Repay for a margin loan.

## HTTP Request

POST `/papi/v1/repayLoan`

## Request Weight

**100**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES |  |
| amount | DECIMAL | YES |  |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "tranId": 100000001
}
```
