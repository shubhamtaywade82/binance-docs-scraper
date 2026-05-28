---
title: "Toggle BNB Burn On UM Futures Trade (TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Toggle-BNB-Burn-On-UM-Futures-Trade
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:53:04.577Z
---
# Toggle BNB Burn On UM Futures Trade (TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Toggle-BNB-Burn-On-UM-Futures-Trade

# Toggle BNB Burn On UM Futures Trade (TRADE)

## API Description

Change user's BNB Fee Discount for UM Futures (Fee Discount On or Fee Discount Off ) on _**EVERY symbol**_

## HTTP Request

POST `/papi/v1/um/feeBurn`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| feeBurn | STRING | YES | "true": Fee Discount On; "false": Fee Discount Off |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

-   The BNB would not be collected from UM-PM account to the Portfolio Margin account.

## Response Example

```json
{
  "code": 200,
  "msg": "success"
}
```
