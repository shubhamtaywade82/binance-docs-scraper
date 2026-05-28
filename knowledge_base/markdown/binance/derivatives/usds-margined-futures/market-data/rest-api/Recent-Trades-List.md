---
title: "Recent Trades List"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Recent-Trades-List
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:45.270Z
---
# Recent Trades List

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Recent-Trades-List

# Recent Trades List

## API Description

Get recent market trades

## HTTP Request

GET `/fapi/v1/trades`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| limit | INT | NO | Default 500; max 1000. |

> -   Market trades means trades filled in the order book. Only market trades will be returned, which means the insurance fund trades and ADL trades won't be returned.

## Response Example

```
[

  {

    "id": 28457,

    "price": "4.00000100",

    "qty": "12.00000000",

    "quoteQty": "48.00",

    "time": 1499865549590,

    "isBuyerMaker": true,

    "isRPITrade": true,

  }

]

```
