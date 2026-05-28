---
title: "Trading Schedule"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Trading-Schedule
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:15.195Z
---
# Trading Schedule

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Trading-Schedule

# Trading Schedule

## API Description

Trading session schedules for the underlying assets of TradFi Perps are provided for a one-week period starting from the day prior to the query time, covering both the U.S. equity and commodity markets. Equity market session types include "PRE\_MARKET", "REGULAR", "AFTER\_MARKET", "OVERNIGHT", and "NO\_TRADING", while commodity market session types include "REGULAR" and "NO\_TRADING".

## HTTP Request

GET `/fapi/v1/tradingSchedule`

## Request Weight

**5**

## Request Parameters

NONE

## Response Example

```json
{
  "updateTime": 1761286643918,
  "marketSchedules": {
    "EQUITY": {
      "sessions": [
        {
          "startTime": 1761177600000,
          "endTime": 1761206400000,
          "type": "OVERNIGHT"
        },
        {
          "startTime": 1761206400000,
          "endTime": 1761226200000,
          "type": "PRE_MARKET"
        }
      ]
    },
    "COMMODITY": {
      "sessions": [
        {
          "startTime": 1761724800000,
          "endTime": 1761744600000,
          "type": "NO_TRADING"
        },
        {
          "startTime": 1761744600000,
          "endTime": 1761768000000,
          "type": "REGULAR"
        }
      ]
    }
  }
}
```
