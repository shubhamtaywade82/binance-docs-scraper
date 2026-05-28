---
title: "Delete Margin Call Level (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Delete-Margin-Call-Level
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:31.706Z
---
# Delete Margin Call Level (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Delete-Margin-Call-Level>

# Delete Margin Call Level (USER\_DATA)

## API Description

Delete the margin call level for a Portfolio Margin account.

## HTTP Request

DELETE `/sapi/v1/portfolio/margin-call-level`

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
  "msg": "success"
}
```
