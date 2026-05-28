---
title: "Get Auto-repay-futures Status(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-Auto-repay-futures-Status
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:01.854Z
---
# Get Auto-repay-futures Status(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-Auto-repay-futures-Status

# Get Auto-repay-futures Status(USER\_DATA)

## API Description

Query Auto-repay-futures Status

## HTTP Request

GET `/papi/v1/repay-futures-switch`

## Request Weight(IP)

**30**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "autoRepay": true
}
```
