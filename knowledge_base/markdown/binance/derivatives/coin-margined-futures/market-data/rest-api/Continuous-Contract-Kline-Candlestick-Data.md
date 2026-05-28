---
title: "Continuous Contract Kline/Candlestick Data"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Continuous-Contract-Kline-Candlestick-Data
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:34.092Z
---
# Continuous Contract Kline/Candlestick Data

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Continuous-Contract-Kline-Candlestick-Data>

# Continuous Contract Kline/Candlestick Data

## API Description

Kline/candlestick bars for a specific contract type. Klines are uniquely identified by their open time.

> - Contract type:
>   - PERPETUAL
>   - CURRENT\_QUARTER
>   - NEXT\_QUARTER

## HTTP Request

GET `/dapi/v1/continuousKlines`

## Request Weight

based on parameter `LIMIT`

| LIMIT | weight |
| --- | --- |
| \[1,100) | 1 |
| \[100, 500) | 2 |
| \[500, 1000\] | 5 |

> 1000 | 10

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pair | STRING | YES |  |
| contractType | ENUM | YES |  |
| interval | ENUM | YES |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| limit | INT | NO | Default 500; max 1500. |

> - The difference between `startTime` and `endTime` can only be up to 200 days
> - Between `startTime` and `endTime`, the most recent `limit` data from `endTime` will be returned:
>   - If `startTime` and `endTime` are not sent, current timestamp will be set as `endTime`, and the most recent data will be returned.
>   - If `startTime` is sent only, the timestamp of 200 days after `startTime` will be set as `endTime`(up to the current time)
>   - If `endTime` is sent only, the timestamp of 200 days before `endTime` will be set as `startTime`

## Response Example

```json
[
  [
    1591258320000,
    "9640.7",
    "9642.4",
    "9640.6",
    "9642.0",
    "206",
    1591258379999,
    "2.13660389",
    48,
    "119",
    "1.23424865",
    "0"
  ]
]
```
