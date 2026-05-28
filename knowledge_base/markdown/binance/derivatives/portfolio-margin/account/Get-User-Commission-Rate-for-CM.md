---
title: "Get User Commission Rate for CM(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-User-Commission-Rate-for-CM
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:53.001Z
---
# Get User Commission Rate for CM(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-User-Commission-Rate-for-CM

# Get User Commission Rate for CM(USER\_DATA)

## API Description

Get User Commission Rate for CM

## HTTP Request

GET `/papi/v1/cm/commissionRate`

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
  "symbol": "BTCUSD_PERP",
  "makerCommissionRate": "0.00015",
  "takerCommissionRate": "0.00040"
}
```
