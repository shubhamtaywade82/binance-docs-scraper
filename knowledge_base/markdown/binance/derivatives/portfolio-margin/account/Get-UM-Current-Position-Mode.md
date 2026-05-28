---
title: "Get UM Current Position Mode(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Current-Position-Mode
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:36.098Z
---
# Get UM Current Position Mode(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Current-Position-Mode>

# Get UM Current Position Mode(USER\_DATA)

## API Description

Get user's position mode (Hedge Mode or One-way Mode ) on EVERY symbol in UM

## HTTP Request

GET `/papi/v1/um/positionSide/dual`

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
