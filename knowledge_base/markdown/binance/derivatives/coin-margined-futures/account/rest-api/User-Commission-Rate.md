---
title: "User Commission Rate (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/User-Commission-Rate
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:30.252Z
---
# User Commission Rate (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/User-Commission-Rate>

# User Commission Rate (USER\_DATA)

## API Description

Query user commission rate

## HTTP Request

GET `/dapi/v1/commissionRate`

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
