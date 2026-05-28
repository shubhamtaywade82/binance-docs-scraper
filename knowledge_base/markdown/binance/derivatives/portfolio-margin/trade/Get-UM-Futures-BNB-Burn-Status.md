---
title: "Get UM Futures BNB Burn Status (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Get-UM-Futures-BNB-Burn-Status
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:53:07.974Z
---
# Get UM Futures BNB Burn Status (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Get-UM-Futures-BNB-Burn-Status

# Get UM Futures BNB Burn Status (USER\_DATA)

## API Description

Get user's BNB Fee Discount for UM Futures (Fee Discount On or Fee Discount Off )

## HTTP Request

GET `/papi/v1/um/feeBurn`

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
  "feeBurn": true
}
```
