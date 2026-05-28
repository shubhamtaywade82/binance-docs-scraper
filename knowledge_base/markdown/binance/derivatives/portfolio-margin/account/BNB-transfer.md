---
title: "BNB transfer (TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/BNB-transfer
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:22.284Z
---
# BNB transfer (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/BNB-transfer>

# BNB transfer (TRADE)

## API Description

Transfer BNB in and out of UM

## HTTP Request

POST `/papi/v1/bnb-transfer`

## Request Weight(IP)

**750**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| amount | DECIMAL | YES |  |
| transferSide | STRING | YES | "TO\_UM","FROM\_UM" |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

> - The endpoint can only be called 10 times per 10 minutes in a rolling manner

## Response Example

```json
{
  "tranId": 100000001
}
```
