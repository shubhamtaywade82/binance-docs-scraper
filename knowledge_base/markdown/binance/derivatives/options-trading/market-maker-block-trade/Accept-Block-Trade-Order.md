---
title: "Accept Block Trade Order (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade/Accept-Block-Trade-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:37.152Z
---
# Accept Block Trade Order (TRADE)

> Source: https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade/Accept-Block-Trade-Order

# Accept Block Trade Order (TRADE)

## API Description

Accept a block trade order

## HTTP Request

POST `/eapi/v1/block/order/execute`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory |  Description |
| --- | --- | --- | --- |
| blockOrderMatchingKey | STRING | YES |  |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

## Response Example

```
{

    "blockTradeSettlementKey": "7d046e6e-a429-4335-ab9d-6a681febcde5",

    "expireTime": 1730172115801,

    "liquidity": "MAKER",

    "status": "ACCEPTED",

    "createTime": 1730170315803,

    "legs": [

        {

            "symbol": "BNB-241101-700-C",

            "side": "SELL",

            "quantity": "1.2",

            "price": "2.8"

        }

    ]

}

```
