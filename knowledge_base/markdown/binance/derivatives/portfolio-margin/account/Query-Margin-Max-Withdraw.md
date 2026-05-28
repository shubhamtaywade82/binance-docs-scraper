---
title: "Query Margin Max Withdraw(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-Margin-Max-Withdraw
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:14.341Z
---
# Query Margin Max Withdraw(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-Margin-Max-Withdraw

# Query Margin Max Withdraw(USER\_DATA)

## API Description

Query Margin Max Withdraw

## HTTP Request

GET `/papi/v1/margin/maxWithdraw`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES |  |
| recvWindow | LONG | NO | The value cannot be greater than `60000` |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "amount": "60"
}
```
