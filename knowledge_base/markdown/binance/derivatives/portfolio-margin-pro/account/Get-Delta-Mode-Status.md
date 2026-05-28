---
title: "Get Delta Mode Status(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Delta-Mode-Status
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:16.117Z
---
# Get Delta Mode Status(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Delta-Mode-Status>

# Get Delta Mode Status(USER\_DATA)

## API Description

Query the Delta mode status of current account.

## HTTP Request

GET `/sapi/v1/portfolio/delta-mode`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "deltaEnabled": false
}
```
