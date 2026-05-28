---
title: "Change Auto-repay-futures Status(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-Auto-repay-futures-Status
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:04.598Z
---
# Change Auto-repay-futures Status(TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-Auto-repay-futures-Status

# Change Auto-repay-futures Status(TRADE)

## API Description

Change Auto-repay-futures Status

## HTTP Request

POST `/papi/v1/repay-futures-switch`

## Request Weight(IP)

**750**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| autoRepay | STRING | YES | Default: `true`; `false` for turn off the auto-repay futures negative balance function |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "msg": "success"
}
```
