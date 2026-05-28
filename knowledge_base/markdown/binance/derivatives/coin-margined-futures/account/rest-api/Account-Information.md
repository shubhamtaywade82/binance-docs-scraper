---
title: "Account Information (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Account-Information
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:33.397Z
---
# Account Information (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Account-Information

# Account Information (USER\_DATA)

## API Description

Get current account information.

## HTTP Request

GET `/dapi/v1/account`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   for One-way Mode user, the "positions" will only show the "BOTH" positions
> -   for Hedge Mode user, the "positions" will show "BOTH", "LONG", and "SHORT" positions.

## Response Example

```json
{
  "assets": [
    {
      "asset": "BTC",
      "walletBalance": "0.00241969",
      "unrealizedProfit": "0.00000000",
      "marginBalance": "0.00241969",
      "maintMargin": "0.00000000",
      "initialMargin": "0.00000000",
      "positionInitialMargin": "0.00000000",
      "openOrderInitialMargin": "0.00000000",
      "maxWithdrawAmount": "0.00241969",
      "crossWalletBalance": "0.00241969",
      "crossUnPnl": "0.00000000",
      "availableBalance": "0.00241969",
      "updateTime": 1625474304765
    }
  ],
  "positions": [
    {
      "symbol": "BTCUSD_201225",
      "positionAmt": "0",
      "initialMargin": "0",
      "maintMargin": "0",
      "unrealizedProfit": "0.00000000",
      "positionInitialMargin": "0",
      "openOrderInitialMargin": "0",
      "leverage": "125",
      "isolated": false,
      "positionSide": "BOTH",
      "entryPrice": "0.0",
      "breakEvenPrice": "0.0",
      "maxQty": "50",
      "updateTime": 0
    },
    {
      "symbol": "BTCUSD_201225",
      "positionAmt": "0",
      "initialMargin": "0",
      "maintMargin": "0",
      "unrealizedProfit": "0.00000000",
      "positionInitialMargin": "0",
      "openOrderInitialMargin": "0",
      "leverage": "125",
      "isolated": false,
      "positionSide": "LONG",
      "entryPrice": "0.0",
      "breakEvenPrice": "0.0",
      "maxQty": "50",
      "updateTime": 0
    },
    {
      "symbol": "BTCUSD_201225",
      "positionAmt": "0",
      "initialMargin": "0",
      "maintMargin": "0",
      "unrealizedProfit": "0.00000000",
      "positionInitialMargin": "0",
      "openOrderInitialMargin": "0",
      "leverage": "125",
      "isolated": false,
      "positionSide": "SHORT",
      "entryPrice": "0.0",
      "breakEvenPrice": "0.0",
      "maxQty": "50",
      "notionalValue": "0",
      "updateTime": 1627026881327
    }
  ],
  "canDeposit": true,
  "canTrade": true,
  "canWithdraw": true,
  "feeTier": 2,
  "updateTime": 0
}
```
