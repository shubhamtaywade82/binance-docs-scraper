---
title: "Margin Max Borrow(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Margin-Max-Borrow
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:11.205Z
---
# Margin Max Borrow(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Margin-Max-Borrow

# Margin Max Borrow(USER\_DATA)

## API Description

Query margin max borrow

## HTTP Request

GET `/papi/v1/margin/maxBorrowable`

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
  "amount": "1.69248805",
  "borrowLimit": "60"
}
```
