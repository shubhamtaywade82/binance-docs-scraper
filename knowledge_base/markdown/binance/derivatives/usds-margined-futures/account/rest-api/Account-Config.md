---
title: "Futures Account Configuration(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Config
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:37.339Z
---
# Futures Account Configuration(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Config>

# Futures Account Configuration(USER\_DATA)

## API Description

Query account configuration

## HTTP Request

GET `/fapi/v1/accountConfig`

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
  "updateTime": 0,
  "multiAssetsMargin": false,
  "tradeGroupId": -1
}
```
