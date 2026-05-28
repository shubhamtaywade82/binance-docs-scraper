---
title: "Liquidation Order Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Liquidation-Order-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:45:12.807Z
---
# Liquidation Order Streams

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Liquidation-Order-Streams

# Liquidation Order Streams

## Stream Description

The Liquidation Order Snapshot Streams push force liquidation order information for specific symbol.

For each symbol，only the latest one liquidation order within 1000ms will be pushed as the snapshot. If no liquidation happens in the interval of 1000ms, no stream will be pushed.

## Stream Name

`<symbol>@forceOrder`

## Update Speed

**1000ms**

## Response Example

```
{



	"e":"forceOrder",                   // Event Type

	"E": 1591154240950,					// Event Time

	"o":{

		"s":"BTCUSD_200925", 		// Symbol

		"ps": "BTCUSD",					// Pair

		"S":"SELL",						// Side

		"o":"LIMIT",					// Order Type

		"f":"IOC",						// Time in Force

		"q":"1",						// Original Quantity

		"p":"9425.5",					// Price

		"ap":"9496.5",					// Average Price

		"X":"FILLED",					// Order Status

		"l":"1",						// Order Last Filled Quantity

		"z":"1",						// Order Filled Accumulated Quantity

		"T": 1591154240949,				// Order Trade Time

	}

}

```
