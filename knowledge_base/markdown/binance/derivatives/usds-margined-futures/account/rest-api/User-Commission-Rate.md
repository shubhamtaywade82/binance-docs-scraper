---
title: "User Commission Rate (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/User-Commission-Rate
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:34.218Z
---
# User Commission Rate (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/User-Commission-Rate>

# User Commission Rate (USER\_DATA)

## API Description

Get User Commission Rate

## HTTP Request

GET `/fapi/v1/commissionRate`

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
  "takerCommissionRate": "0.0004",
  "rpiCommissionRate": "0.00005"
}
```
