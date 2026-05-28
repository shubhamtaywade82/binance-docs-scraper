---
title: "Get BNB Burn Status (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-BNB-Burn-Status
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:53:43.483Z
---
# Get BNB Burn Status (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-BNB-Burn-Status

# Get BNB Burn Status (USER\_DATA)

## API Description

Get user's BNB Fee Discount (Fee Discount On or Fee Discount Off )

## HTTP Request

GET `/fapi/v1/feeBurn`

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
