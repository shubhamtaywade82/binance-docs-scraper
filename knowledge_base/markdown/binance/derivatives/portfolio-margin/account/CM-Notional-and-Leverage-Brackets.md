---
title: "CM Notional and Leverage Brackets(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/CM-Notional-and-Leverage-Brackets
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:44.286Z
---
# CM Notional and Leverage Brackets(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/CM-Notional-and-Leverage-Brackets

# CM Notional and Leverage Brackets(USER\_DATA)

## API Description

Query CM notional and leverage brackets

## HTTP Request

GET `/papi/v1/cm/leverageBracket`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
[

    {

        "symbol": "BTCUSD_PERP",

        "brackets": [

            {

                "bracket": 1,   // bracket level

                "initialLeverage": 125,  // the maximum leverage

                "qtyCap": 50,  // upper edge of base asset quantity

                "qtyFloor": 0,  // lower edge of base asset quantity

                "maintMarginRatio": 0.004, // maintenance margin rate

                "cum": 0.0 // Auxiliary number for quick calculation 

            },

        ]

    }

]

```
