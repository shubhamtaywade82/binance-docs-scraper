---
title: "Get User Commission Rate for UM(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-User-Commission-Rate-for-UM
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:50.091Z
---
# Get User Commission Rate for UM(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-User-Commission-Rate-for-UM

# Get User Commission Rate for UM(USER\_DATA)

## API Description

Get User Commission Rate for UM

## HTTP Request

GET `/papi/v1/um/commissionRate`

## Request Weight

**20**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "symbol": "BTCUSDT",
  "makerCommissionRate": "0.0002",
  "takerCommissionRate": "0.0004"
}
```
