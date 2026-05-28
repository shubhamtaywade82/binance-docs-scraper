---
title: "Event: GRID_UPDATE (Deprecated)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-GRID-UPDATE
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:40:57.845Z
---
# Event: GRID_UPDATE (Deprecated)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-GRID-UPDATE>

# Event: GRID\_UPDATE (Deprecated)

## Event Description

`GRID_UPDATE` update when a sub order of a grid is filled or partially filled.

**Strategy Status**

- NEW
- WORKING
- CANCELLED
- EXPIRED

## Event Name

`GRID_UPDATE`

## Response Example

```json
{
  "e": "GRID_UPDATE",
  "T": 1669262908216,
  "E": 1669262908218,
  "gu": {
    "si": 176057039,
    "st": "GRID",
    "ss": "WORKING",
    "s": "BTCUSDT",
    "r": "-0.00300716",
    "up": "16720",
    "uq": "-0.001",
    "uf": "-0.00300716",
    "mp": "0.0",
    "ut": 1669262908197
  }
}
```
