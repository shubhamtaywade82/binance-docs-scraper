---
title: "Open Interest"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Open-Interest
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:53.688Z
---
# Open Interest

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Open-Interest

# Open Interest

## API Description

Get present open interest of a specific symbol.

## HTTP Request

GET `/dapi/v1/openInterest`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |

## Response Example

```json
{
  "symbol": "BTCUSD_200626",
  "pair": "BTCUSD",
  "openInterest": "15004",
  "contractType": "CURRENT_QUARTER",
  "time": 1591261042378
}
```
