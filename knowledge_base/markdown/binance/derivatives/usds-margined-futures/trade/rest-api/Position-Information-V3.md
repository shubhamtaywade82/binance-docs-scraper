---
title: "Position Information V3 (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Position-Information-V3
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:43.801Z
---
# Position Information V3 (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Position-Information-V3

# Position Information V3 (USER\_DATA)

## API Description

Get current position information(only symbol that has position or open orders will be returned).

## HTTP Request

GET `/fapi/v3/positionRisk`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

**Note**

> Please use with user data stream `ACCOUNT_UPDATE` to meet your timeliness and accuracy needs.

## Response Example

> For One-way position mode:

```json
[
  {
    "symbol": "ADAUSDT",
    "positionSide": "BOTH",
    "positionAmt": "30",
    "entryPrice": "0.385",
    "breakEvenPrice": "0.385077",
    "markPrice": "0.41047590",
    "unRealizedProfit": "0.76427700",
    "liquidationPrice": "0",
    "isolatedMargin": "0",
    "notional": "12.31427700",
    "marginAsset": "USDT",
    "isolatedWallet": "0",
    "initialMargin": "0.61571385",
    "maintMargin": "0.08004280",
    "positionInitialMargin": "0.61571385",
    "openOrderInitialMargin": "0",
    "adl": 2,
    "bidNotional": "0",
    "askNotional": "0",
    "updateTime": 1720736417660
  }
]
```

> For Hedge position mode:

```json
[
  {
    "symbol": "ADAUSDT",
    "positionSide": "LONG",
    "positionAmt": "30",
    "entryPrice": "0.385",
    "breakEvenPrice": "0.385077",
    "markPrice": "0.41047590",
    "unRealizedProfit": "0.76427700",
    "liquidationPrice": "0",
    "isolatedMargin": "0",
    "notional": "12.31427700",
    "marginAsset": "USDT",
    "isolatedWallet": "0",
    "initialMargin": "0.61571385",
    "maintMargin": "0.08004280",
    "positionInitialMargin": "0.61571385",
    "openOrderInitialMargin": "0",
    "adl": 2,
    "bidNotional": "0",
    "askNotional": "0",
    "updateTime": 1720736417660
  },
  {
    "symbol": "COMPUSDT",
    "positionSide": "SHORT",
    "positionAmt": "-1.000",
    "entryPrice": "70.92841",
    "breakEvenPrice": "70.900038636",
    "markPrice": "49.72023376",
    "unRealizedProfit": "21.20817624",
    "liquidationPrice": "2260.56757210",
    "isolatedMargin": "0",
    "notional": "-49.72023376",
    "marginAsset": "USDT",
    "isolatedWallet": "0",
    "initialMargin": "2.48601168",
    "maintMargin": "0.49720233",
    "positionInitialMargin": "2.48601168",
    "openOrderInitialMargin": "0",
    "adl": 2,
    "bidNotional": "0",
    "askNotional": "0",
    "updateTime": 1708943511656
  }
]
```
