---
title: "Notional Bracket for Pair(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Notional-Bracket-for-Pair
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:38.602Z
---
# Notional Bracket for Pair(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Notional-Bracket-for-Pair

# Notional Bracket for Pair(USER\_DATA)

## API Description

**Not recommended to continue using this v1 endpoint**

Get the pair's default notional bracket list, may return ambiguous values when there have been multiple different `symbol` brackets under the `pair`, suggest using the following `GET /dapi/v2/leverageBracket` query instead to get the specific `symbol` notional bracket list.

## HTTP Request

GET `/dapi/v1/leverageBracket`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pair | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
[

    {

        "pair": "BTCUSD",

        "brackets": [

            {

                "bracket": 1,   // bracket level

                "initialLeverage": 125,  // the maximum leverage

                "qtyCap": 50,  // upper edge of base asset quantity

                "qtylFloor": 0,  // lower edge of base asset quantity

                "maintMarginRatio": 0.004 // maintenance margin rate

				"cum": 0.0  // Auxiliary number for quick calculation 

            },

        ]

    }

]

```
