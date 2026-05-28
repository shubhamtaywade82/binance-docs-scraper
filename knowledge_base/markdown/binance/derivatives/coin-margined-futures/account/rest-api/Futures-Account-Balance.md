---
title: "Futures Account Balance (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Futures-Account-Balance
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:24.518Z
---
# Futures Account Balance (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Futures-Account-Balance

# Futures Account Balance (USER\_DATA)

## API Description

Check futures account balance

## HTTP Request

GET `/dapi/v1/balance`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "accountAlias": "SgsR",
    "asset": "BTC",
    "balance": "0.00250000",
    "withdrawAvailable": "0.00250000",
    "crossWalletBalance": "0.00241969",
    "crossUnPnl": "0.00000000",
    "availableBalance": "0.00241969",
    "updateTime": 1592468353979
  }
]
```
