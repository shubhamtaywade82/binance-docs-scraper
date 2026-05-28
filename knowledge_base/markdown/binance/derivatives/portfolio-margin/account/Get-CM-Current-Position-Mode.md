---
title: "Get CM Current Position Mode(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Current-Position-Mode
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:38.799Z
---
# Get CM Current Position Mode(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Current-Position-Mode>

# Get CM Current Position Mode(USER\_DATA)

## API Description

Get user's position mode (Hedge Mode or One-way Mode ) on EVERY symbol in CM

## HTTP Request

GET `/papi/v1/cm/positionSide/dual`

## Request Weight

**30**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "dualSidePosition": true
}
```
