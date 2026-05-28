---
title: "Margin Account Borrow(MARGIN)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Borrow
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:50.967Z
---
# Margin Account Borrow(MARGIN)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Margin-Account-Borrow

# Margin Account Borrow(MARGIN)

## API Description

Apply for a margin loan.

## HTTP Request

POST `/papi/v1/marginLoan`

## Request Weight(IP)

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
