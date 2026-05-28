---
title: "Liquidation Order Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Liquidation-Order-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:11.399Z
---
# Liquidation Order Streams

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Liquidation-Order-Streams

# Liquidation Order Streams

## Stream Description

The Liquidation Order Snapshot Streams push force liquidation order information for specific symbol. For each symbol，only the largest one liquidation order within 1000ms will be pushed as the snapshot. If no liquidation happens in the interval of 1000ms, no stream will be pushed.

## URL PATH

`/market`

## Stream Name

   `<symbol>@forceOrder`

## Update Speed

1000ms

## Response Example

```
{



	"e":"forceOrder",                   // Event Type

	"E":1568014460893,                  // Event Time

	"o":{

	

		"s":"BTCUSDT",                   // Symbol

		"S":"SELL",                      // Side

		"o":"LIMIT",                     // Order Type

		"f":"IOC",                       // Time in Force

		"q":"0.014",                     // Original Quantity

		"p":"9910",                      // Price

		"ap":"9910",                     // Average Price

		"X":"FILLED",                    // Order Status

		"l":"0.014",                     // Order Last Filled Quantity

		"z":"0.014",                     // Order Filled Accumulated Quantity

		"T":1568014460893,          	 // Order Trade Time

	

	}



}

```
