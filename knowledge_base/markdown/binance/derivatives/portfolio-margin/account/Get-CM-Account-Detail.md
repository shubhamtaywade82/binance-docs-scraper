---
title: "Get CM Account Detail(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Account-Detail
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:34.971Z
---
# Get CM Account Detail(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-CM-Account-Detail

# Get CM Account Detail(USER\_DATA)

## API Description

Get current CM account asset and position information.

## HTTP Request

GET `/papi/v1/cm/account`

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

    "assets": [

        {

            "asset": "BTC",  // asset name 

            "crossWalletBalance": "0.00241969",  // total wallet balance

            "crossUnPnl": "0.00000000",  // unrealized profit or loss

            "maintMargin": "0.00000000",    // maintenance margin

            "initialMargin": "0.00000000",  // total intial margin required with the latest mark price

            "positionInitialMargin": "0.00000000",  // positions" margin required with the latest mark price

            "openOrderInitialMargin": "0.00000000",  // open orders" intial margin required with the latest mark price

            "updateTime": 1625474304765 // last update time  

         }

     ],

     "positions": [

         {

            "symbol": "BTCUSD_201225",

            "positionAmt":"0",  // position amount

            "initialMargin": "0",

            "maintMargin": "0",

            "unrealizedProfit": "0.00000000",

            "positionInitialMargin": "0",

            "openOrderInitialMargin": "0",

            "leverage": "125",

            "positionSide": "BOTH", // BOTH means that it is the position of One-way Mode  

            "entryPrice": "0.0",

            "maxQty": "50",  // maximum quantity of base asset

            "updateTime": 0

        }

     ]

}

```
