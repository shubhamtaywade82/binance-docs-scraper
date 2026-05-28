---
title: "Fund Auto-collection(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Fund-Auto-collection
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:16.404Z
---
# Fund Auto-collection(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Fund-Auto-collection>

# Fund Auto-collection(TRADE)

## API Description

Fund collection for Portfolio Margin

## HTTP Request

`POST /papi/v1/auto-collection`

## Request Weight(IP)

**750**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

> - The BNB would not be collected from UM-PM account to the Portfolio Margin account.
> - You can only use this function 500 times per hour in a rolling manner.

## Response Example

```json
{
  "msg": "success"
}
```
