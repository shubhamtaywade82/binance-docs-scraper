---
title: "Symbol Price Ticker"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Symbol-Price-Ticker
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:48.106Z
---
# Symbol Price Ticker

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Symbol-Price-Ticker

# Symbol Price Ticker

## API Description

Latest price for a symbol or symbols.

## HTTP Request

GET `/dapi/v1/ticker/price`

## Request Weight

**1** for a single symbol, **2** when the symbol parameter is omitted

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| pair | STRING | NO |  |

> -   Symbol and pair cannot be sent together
> -   If a pair is sent,tickers for all symbols of the pair will be returned
> -   If either a pair or symbol is sent, tickers for all symbols of all pairs will be returned

## Response Example

```json
[
  {
    "symbol": "BTCUSD_200626",
    "ps": "9647.8",
    "price": "9647.8",
    "time": 1591257246176
  }
]
```
