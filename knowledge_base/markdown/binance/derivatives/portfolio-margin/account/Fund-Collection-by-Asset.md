---
title: "Fund Collection by Asset(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Fund-Collection-by-Asset
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:19.423Z
---
# Fund Collection by Asset(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Fund-Collection-by-Asset>

# Fund Collection by Asset(TRADE)

## API Description

Transfers specific asset from Futures Account to Margin account

## HTTP Request

POST `/papi/v1/asset-collection`

## Request Weight(IP)

**30**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - The BNB transfer is not be supported

## Response Example

```json
{
  "msg": "success"
}
```
