---
title: "Continuous Contract Kline/Candlestick Data"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Continuous-Contract-Kline-Candlestick-Data
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:56.852Z
---
# Continuous Contract Kline/Candlestick Data

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Continuous-Contract-Kline-Candlestick-Data

# Continuous Contract Kline/Candlestick Data

## API Description

Kline/candlestick bars for a specific contract type. Klines are uniquely identified by their open time.

## HTTP Request

GET `/fapi/v1/continuousKlines`

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
| pair | STRING | YES |  |
| contractType | ENUM | YES |  |
| interval | ENUM | YES |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| limit | INT | NO | Default 500; max 1500. |

> -   If startTime and endTime are not sent, the most recent klines are returned.

> -   Contract type:
>     -   PERPETUAL
>     -   CURRENT\_QUARTER
>     -   NEXT\_QUARTER
>     -   TRADIFI\_PERPETUAL

## Response Example

```json
[
  [
    1607444700000,
    "18879.99",
    "18900.00",
    "18878.98",
    "18896.13",
    "492.363",
    1607444759999,
    "9302145.66080",
    1874,
    "385.983",
    "7292402.33267",
    "0"
  ]
]
```
