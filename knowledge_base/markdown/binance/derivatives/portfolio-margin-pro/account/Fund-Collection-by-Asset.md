---
title: "Fund Collection by Asset(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Fund-Collection-by-Asset
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:38.864Z
---
# Fund Collection by Asset(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Fund-Collection-by-Asset

# Fund Collection by Asset(USER\_DATA)

## API Description

Transfers specific asset from Futures Account to Margin account

## HTTP Request

POST `/sapi/v1/portfolio/asset-collection`

## Request Weight(IP)

**60**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   The BNB transfer is not be supported

## Response Example

```json
{
  "msg": "success"
}
```
