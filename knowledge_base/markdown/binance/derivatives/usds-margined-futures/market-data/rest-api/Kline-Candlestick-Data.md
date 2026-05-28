---
title: "Kline/Candlestick Data"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Kline-Candlestick-Data
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:54.158Z
---
# Kline/Candlestick Data

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Kline-Candlestick-Data>

# Kline/Candlestick Data

## API Description

Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time.

## HTTP Request

GET `/fapi/v1/klines`

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
    1499040000000,
    "0.01634790",
    "0.80000000",
    "0.01575800",
    "0.01577100",
    "148976.11427815",
    1499644799999,
    "2434.19055334",
    308,
    "1756.87402397",
    "28.46694368",
    "17928899.62484339"
  ]
]
```
