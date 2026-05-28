---
title: "Toggle BNB Burn On Futures Trade (TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Toggle-BNB-Burn-On-Futures-Trade
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:21.927Z
---
# Toggle BNB Burn On Futures Trade (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Toggle-BNB-Burn-On-Futures-Trade>

# Toggle BNB Burn On Futures Trade (TRADE)

## API Description

Change user's BNB Fee Discount (Fee Discount On or Fee Discount Off ) on _**EVERY symbol**_

## HTTP Request

POST `/fapi/v1/feeBurn`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| feeBurn | STRING | YES | "true": Fee Discount On; "false": Fee Discount Off |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "code": 200,
  "msg": "success"
}
```
