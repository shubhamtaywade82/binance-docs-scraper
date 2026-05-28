---
title: "Switch Delta Mode(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Switch-Delta-Mode
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:13.046Z
---
# Switch Delta Mode(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Switch-Delta-Mode>

# Switch Delta Mode(TRADE)

## API Description

Switch the Delta mode for existing PM PRO / PM RETAIL accounts.

## HTTP Request

POST `/sapi/v1/portfolio/delta-mode`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deltaEnabled | STRING | YES | `true` to enable Delta mode; `false` to disable Delta mode |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "msg": "success"
}
```
