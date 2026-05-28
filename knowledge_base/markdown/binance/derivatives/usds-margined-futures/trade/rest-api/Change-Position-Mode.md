---
title: "Change Position Mode(TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Position-Mode
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:30.537Z
---
# Change Position Mode(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Position-Mode>

# Change Position Mode(TRADE)

## API Description

Change user's position mode (Hedge Mode or One-way Mode ) on _**EVERY symbol**_

## HTTP Request

POST `/fapi/v1/positionSide/dual`

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
