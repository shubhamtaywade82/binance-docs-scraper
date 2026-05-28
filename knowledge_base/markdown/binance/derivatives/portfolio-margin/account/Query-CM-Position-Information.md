---
title: "Query CM Position Information(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-CM-Position-Information
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:20.979Z
---
# Query CM Position Information(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-CM-Position-Information>

# Query CM Position Information(USER\_DATA)

## API Description

Get current CM position information.

## HTTP Request

GET `/papi/v1/cm/positionRisk`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| marginAsset | STRING | NO |  |
| pair | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - If neither `marginAsset` nor `pair` is sent, positions of all symbols with `TRADING` status will be returned.
> - for One-way Mode user, the response will only show the "BOTH" positions
> - for Hedge Mode user, the response will show "LONG", and "SHORT" positions.

**Note**

> - Please use with user data stream `ACCOUNT_UPDATE` to meet your timeliness and accuracy needs.

## Response Example

- For One-way position mode:

```json
[
  {
    "symbol": "BTCUSD_201225",
    "positionAmt": "1",
    "entryPrice": "11707.70000003",
    "markPrice": "11788.66626667",
    "unRealizedProfit": "0.00005866",
    "liquidationPrice": "6170.20509059",
    "leverage": "125",
    "positionSide": "LONG",
    "updateTime": 1627026881327,
    "maxQty": "50",
    "notionalValue": "0.00084827"
  }
]
```

> - For Hedge position mode(only return with position):

```json
[
  {
    "symbol": "BTCUSD_201225",
    "positionAmt": "1",
    "entryPrice": "11707.70000003",
    "markPrice": "11788.66626667",
    "unRealizedProfit": "0.00005866",
    "liquidationPrice": "6170.20509059",
    "leverage": "125",
    "positionSide": "LONG",
    "updateTime": 1627026881327,
    "maxQty": "50",
    "notionalValue": "0.00084827"
  },
  {
    "symbol": "BTCUSD_201225",
    "positionAmt": "1",
    "entryPrice": "11707.70000003",
    "markPrice": "11788.66626667",
    "unRealizedProfit": "0.00005866",
    "liquidationPrice": "6170.20509059",
    "leverage": "125",
    "positionSide": "LONG",
    "updateTime": 1627026881327,
    "maxQty": "50",
    "notionalValue": "0.00084827"
  }
]
```
