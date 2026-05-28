---
title: "BNB transfer(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/BNB-transfer
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:34.252Z
---
# BNB transfer(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/BNB-transfer

# BNB transfer(USER\_DATA)

## API Description

BNB transfer can be between Margin Account and USDM Account

## HTTP Request

POST `/sapi/v1/portfolio/bnb-transfer`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| amount | DECIMAL | YES |  |
| transferSide | STRING | YES | "TO\_UM","FROM\_UM" |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   You can only use this function 2 times per 10 minutes in a rolling manner

## Response Example

```json
{
  "tranId": 100000001
}
```
