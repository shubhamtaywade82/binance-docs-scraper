---
title: "Open Interest"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Open-Interest
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:31.473Z
---
# Open Interest

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Open-Interest

# Open Interest

## API Description

Get present open interest of a specific symbol.

## HTTP Request

GET `/fapi/v1/openInterest`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |

## Response Example

```json
{
  "openInterest": "10659.509",
  "symbol": "BTCUSDT",
  "time": 1589437530011
}
```
