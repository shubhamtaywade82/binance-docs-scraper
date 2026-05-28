---
title: "Change UM Position Mode(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-UM-Position-Mode
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:30.081Z
---
# Change UM Position Mode(TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-UM-Position-Mode

# Change UM Position Mode(TRADE)

## API Description

Change user's position mode (Hedge Mode or One-way Mode ) on EVERY symbol in UM

## HTTP Request

POST `/papi/v1/um/positionSide/dual`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dualSidePosition | STRING | YES | "true": Hedge Mode; "false": One-way Mode |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "code": 200,
  "msg": "success"
}
```
