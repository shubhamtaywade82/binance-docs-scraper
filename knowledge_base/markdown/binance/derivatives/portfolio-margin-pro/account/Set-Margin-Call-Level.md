---
title: "Set Margin Call Level (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Set-Margin-Call-Level
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:19.063Z
---
# Set Margin Call Level (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Set-Margin-Call-Level

# Set Margin Call Level (USER\_DATA)

## API Description

Set the margin call level for a Portfolio Margin account. When the account's uniMMR drops to the specified level, a notification will be sent via email and SMS.

## HTTP Request

POST `/sapi/v1/portfolio/margin-call-level`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| marginCallLevel | DECIMAL | YES | The value of marginCallLevel must be within the range \[1.1, 2.0\]. |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "marginCallLevel": "1.67354637"
}
```
