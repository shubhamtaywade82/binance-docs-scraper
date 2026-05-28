---
title: "Extend Block Trade Order (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade/Extend-Block-Trade-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:30.531Z
---
# Extend Block Trade Order (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade/Extend-Block-Trade-Order>

# Extend Block Trade Order (TRADE)

## API Description

Extends a block trade expire time by 30 mins from the current time.

## HTTP Request

PUT `/eapi/v1/block/order/create`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory |  Description |
| --- | --- | --- | --- |
| blockOrderMatchingKey | STRING | YES |  |
| recvWindow | INT | NO | The value cannot be greater than 60000 |
| timestamp | INT | YES |  |

## Response Example

```
{

    "blockTradeSettlementKey": "3668822b8-1baa-6a2f-adb8-d3de6289b361",

    "expireTime": 1730172007000,

    "liquidity": "TAKER",

    "status": "RECEIVED",

    "createTime": 1730170088111,

    "legs": [

        {

            "symbol": "BNB-241101-700-C",

            "side": "BUY",

            "quantity": "1.2",

            "price": "2.8"

        }

    ]

}

```
