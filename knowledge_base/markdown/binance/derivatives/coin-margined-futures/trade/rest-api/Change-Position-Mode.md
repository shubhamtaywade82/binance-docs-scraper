---
title: "Change Position Mode(TRADE)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Change-Position-Mode
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:54:32.902Z
---
# Change Position Mode(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Change-Position-Mode>

# Change Position Mode(TRADE)

## API Description

Change user's position mode (Hedge Mode or One-way Mode ) on _**EVERY symbol**_

## HTTP Request

POST `/dapi/v1/positionSide/dual`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dualSidePosition | STRING | YES | "true": Hedge Mode; "false": One-way Mode |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

**Note:**

- CM `dualSidePosition` must stay consistent with UM. If CM `dualSidePosition` is already the same as UM, changing it will be rejected with error: _"The operation is rejected because the CM dual-side is not allowed to be different from UM dual-side."_

## Response Example

```json
{
  "code": 200,
  "msg": "success"
}
```
