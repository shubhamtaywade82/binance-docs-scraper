---
title: "Get Current Position Mode(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Get-Current-Position-Mode
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:41.440Z
---
# Get Current Position Mode(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Get-Current-Position-Mode

# Get Current Position Mode(USER\_DATA)

## API Description

Get user's position mode (Hedge Mode or One-way Mode ) on _**EVERY symbol**_

## HTTP Request

GET `/dapi/v1/positionSide/dual`

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
  "dualSidePosition": true
}
```
