---
title: "UM Futures Account Configuration(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Futures-Account-Config
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:38.028Z
---
# UM Futures Account Configuration(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Futures-Account-Config

# UM Futures Account Configuration(USER\_DATA)

## API Description

Query UM Futures account configuration

## HTTP Request

GET `/papi/v1/um/accountConfig`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "feeTier": 0,
  "canTrade": true,
  "canDeposit": true,
  "canWithdraw": true,
  "dualSidePosition": true,
  "updateTime": 1724416653850,
  "multiAssetsMargin": false,
  "tradeGroupId": -1
}
```
