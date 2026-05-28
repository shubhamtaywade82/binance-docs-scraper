---
title: "Repay futures Negative Balance(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Repay-futures-Negative-Balance
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:46.976Z
---
# Repay futures Negative Balance(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Repay-futures-Negative-Balance>

# Repay futures Negative Balance(USER\_DATA)

## API Description

Repay futures Negative Balance

## HTTP Request

POST `/sapi/v1/portfolio/repay-futures-negative-balance`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | STRING | NO | SPOT or MARGIN，default SPOT｜ |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "msg": "success"
}
```
