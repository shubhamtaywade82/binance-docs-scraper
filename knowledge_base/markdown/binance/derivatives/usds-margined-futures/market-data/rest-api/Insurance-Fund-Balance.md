---
title: "Query Insurance Fund Balance Snapshot"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Insurance-Fund-Balance
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:58.744Z
---
# Query Insurance Fund Balance Snapshot

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Insurance-Fund-Balance

# Query Insurance Fund Balance Snapshot

## API Description

Query Insurance Fund Balance Snapshot

## HTTP Request

GET `/fapi/v1/insuranceBalance`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

## Response Example

pass symbol

```json
{
  "symbols": [
    "BNBUSDT",
    "BTCUSDT",
    "BTCUSDT_250627",
    "BTCUSDT_250926",
    "ETHBTC",
    "ETHUSDT",
    "ETHUSDT_250627",
    "ETHUSDT_250926"
  ],
  "assets": [
    {
      "asset": "USDC",
      "marginBalance": "299999998.6497832",
      "updateTime": 1745366402000
    },
    {
      "asset": "USDT",
      "marginBalance": "793930579.315848",
      "updateTime": 1745366402000
    },
    {
      "asset": "BTC",
      "marginBalance": "61.73143554",
      "updateTime": 1745366402000
    },
    {
      "asset": "BNFCR",
      "marginBalance": "633223.99396922",
      "updateTime": 1745366402000
    }
  ]
}
```

> or not pass symbol

```json
[
  {
    "symbols": [
      "ADAUSDT",
      "BCHUSDT",
      "DOTUSDT",
      "EOSUSDT",
      "ETCUSDT",
      "LINKUSDT",
      "LTCUSDT",
      "TRXUSDT",
      "XLMUSDT",
      "XMRUSDT",
      "XRPUSDT"
    ],
    "assets": [
      {
        "asset": "USDT",
        "marginBalance": "314151411.06482935",
        "updateTime": 1745366402000
      }
    ]
  },
  {
    "symbols": [
      "ACTUSDT",
      "MUBARAKUSDT",
      "OMUSDT",
      "TSTUSDT"
    ],
    "assets": [
      {
        "asset": "USDT",
        "marginBalance": "5166686.84431694",
        "updateTime": 1745366402000
      }
    ]
  }
]
```
