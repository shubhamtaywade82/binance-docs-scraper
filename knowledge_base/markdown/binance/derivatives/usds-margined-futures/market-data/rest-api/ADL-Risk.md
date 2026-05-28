---
title: "ADL Risk"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/ADL-Risk
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:01.737Z
---
# ADL Risk

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/ADL-Risk>

# ADL Risk

## API Description

Query the symbol-level ADL risk rating. The ADL risk rating measures the likelihood of ADL during liquidation, and the rating takes into account the insurance fund balance, position concentration on the symbol, order book depth, price volatility, average leverage, unrealized PnL, and margin utilization at the symbol level. The rating can be high, medium and low, and is updated every 30 minutes.

## HTTP Request

GET `/fapi/v1/symbolAdlRisk`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

## Response Example

> **Response:**

```json
{
  "symbol": "BTCUSDT",
  "adlRisk": "low",
  "updateTime": 1597370495002
}
```

> **OR (when symbol not sent)**

```json
[
  {
    "symbol": "BTCUSDT",
    "adlRisk": "low",
    "updateTime": 1597370495002
  },
  {
    "symbol": "ETHUSDT",
    "adlRisk": "high",
    "updateTime": 1597370495004
  }
]
```
