---
title: "Aggregate Trade Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Aggregate-Trade-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:38:39.243Z
---
# Aggregate Trade Streams

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Aggregate-Trade-Streams>

# Aggregate Trade Streams

## Stream Description

The Aggregate Trade Streams push market trade information that is aggregated for fills with same price and taking side every 100 milliseconds. Only market trades will be aggregated, which means the insurance fund trades and ADL trades won't be aggregated.

## URL PATH

`/market`

## Stream Name

`<symbol>@aggTrade`

**Note**:

> Retail Price Improvement(RPI) orders are aggregated into field `q` and without special tags to be distinguished.

## Update Speed

**100ms**

## Response Example

```
{

  "e": "aggTrade",  // Event type

  "E": 123456789,   // Event time

  "s": "BTCUSDT",   // Symbol

  "a": 5933014,    // Aggregate trade ID

  "p": "0.001",     // Price

  "q": "100",       // Quantity with all the market trades

  "nq": "100",      // Normal quantity without the trades involving RPI orders

  "f": 100,         // First trade ID

  "l": 105,         // Last trade ID

  "T": 123456785,   // Trade time

  "m": true,        // Is the buyer the market maker?

}

```
