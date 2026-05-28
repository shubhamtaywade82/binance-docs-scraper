---
title: "Fund Auto-collection(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Fund-Auto-collection
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:36.628Z
---
# Fund Auto-collection(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Fund-Auto-collection>

# Fund Auto-collection(USER\_DATA)

## API Description

Transfers all assets from Futures Account to Margin account

## HTTP Request

POST `/sapi/v1/portfolio/auto-collection`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - The BNB would not be collected from UM-PM account to the Portfolio Margin account.
> - You can only use this function 500 times per hour in a rolling manner.

## Response Example

```json
{
  "msg": "success"
}
```
