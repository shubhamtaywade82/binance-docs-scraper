---
title: "Get UM Account Detail(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Account-Detail
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:31.769Z
---
# Get UM Account Detail(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Account-Detail

# Get UM Account Detail(USER\_DATA)

## API Description

Get current UM account asset and position information.

## HTTP Request

GET `/papi/v1/um/account`

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
  "assets": [
    {
      "asset": "USDT",
      "crossWalletBalance": "23.72469206",
      "crossUnPnl": "0.00000000",
      "maintMargin": "0.00000000",
      "initialMargin": "0.00000000",
      "positionInitialMargin": "0.00000000",
      "openOrderInitialMargin": "0.00000000",
      "updateTime": 1625474304765
    }
  ],
  "positions": [
    {
      "symbol": "BTCUSDT",
      "initialMargin": "0",
      "maintMargin": "0",
      "unrealizedProfit": "0.00000000",
      "positionInitialMargin": "0",
      "openOrderInitialMargin": "0",
      "leverage": "100",
      "entryPrice": "0.00000",
      "maxNotional": "250000",
      "bidNotional": "0",
      "askNotional": "0",
      "positionSide": "BOTH",
      "positionAmt": "0",
      "updateTime": 0
    }
  ]
}
```
