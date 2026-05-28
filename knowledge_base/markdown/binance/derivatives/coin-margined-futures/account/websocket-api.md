---
title: "Futures Account Balance(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/websocket-api
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:45:26.562Z
---
# Futures Account Balance(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/account/websocket-api>

# Futures Account Balance(USER\_DATA)

## API Description

Query account balance info

## Method

`account.balance`

## Request

```
{

  "id": "9328e612-1560-4108-979e-283bf85b5acb",

  "method": "account.balance",

  "params": {

    "apiKey": "",

    "timestamp": 1727810404936,

    "signature": "0f04368b2d22aafd0ggc8809ea34297eff602272917b5f01267db4efbc1c9422"

   }

}

```

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
{

  "id": "9328e612-1560-4108-979e-283bf85b5acb",

  "status": 200,

  "result": [

    {

      "accountAlias": "fWAuTiuXoCuXmY",

      "asset": "WLD",

      "balance": "0.00000000",

      "withdrawAvailable": "0.00000000",

      "crossWalletBalance": "0.00000000",

      "crossUnPnl": "0.00000000",

      "availableBalance": "0.00000000",

      "updateTime": 0

    },

    // ... ...

  ],

  "rateLimits": [

    {

      "rateLimitType": "REQUEST_WEIGHT",

      "interval": "MINUTE",

      "intervalNum": 1,

      "limit": 2400,

      "count": 10

    }

  ]

}

```
