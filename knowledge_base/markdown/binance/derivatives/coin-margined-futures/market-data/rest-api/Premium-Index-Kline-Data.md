---
title: "Premium index Kline Data"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Premium-Index-Kline-Data
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:42.679Z
---
# Premium index Kline Data

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Premium-Index-Kline-Data>

# Premium index Kline Data

## API Description

Premium index kline bars of a symbol. Klines are uniquely identified by their open time.

## HTTP Request

GET `/dapi/v1/premiumIndexKlines`

## Request Weight

based on parameter `LIMIT`

| LIMIT | weight |
| --- | --- |
| \[1,100) | 1 |
| \[100, 500) | 2 |
| \[500, 1000\] | 5 |
| \> 1000 | 10 |

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| interval | ENUM | YES |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| limit | INT | NO | Default 500; max 1500. |

> - If startTime and endTime are not sent, the most recent klines are returned.

## Response Example

```json
[
  [
    1691603820000,
    "-0.00042931",
    "-0.00023641",
    "-0.00059406",
    "-0.00043659",
    "0",
    1691603879999,
    "0",
    12,
    "0",
    "0",
    "0"
  ]
]
```
