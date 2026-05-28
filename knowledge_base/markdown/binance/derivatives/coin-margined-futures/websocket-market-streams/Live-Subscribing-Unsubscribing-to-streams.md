---
title: "Live Subscribing/Unsubscribing to streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Live-Subscribing-Unsubscribing-to-streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:32.178Z
---
# Live Subscribing/Unsubscribing to streams

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Live-Subscribing-Unsubscribing-to-streams

# Live Subscribing/Unsubscribing to streams

-   The following data can be sent through the websocket instance in order to subscribe/unsubscribe from streams. Examples can be seen below.
-   The `id` used in the JSON payloads is an unsigned INT used as an identifier to uniquely identify the messages going back and forth.

## Subscribe to a stream

> **Request**

```json
{
  "method": "SUBSCRIBE",
  "params": [
    "btcusd_200925@aggTrade",
    "btcusd_200925@depth"
  ],
  "id": 1
}
```

> **Response**

```json
{
  "result": null,
  "id": 1
}
```

## Unsubscribe to a stream

> **Request**

```json
{
  "method": "UNSUBSCRIBE",
  "params": [
    "btcusd_200925@depth"
  ],
  "id": 312
}
```

> **Response**

```json
{
  "result": null,
  "id": 312
}
```

## Listing Subscriptions

> **Request**

```json
{
  "method": "LIST_SUBSCRIPTIONS",
  "id": 3
}
```

> **Response**

```json
{
  "result": [
    "btcusd_200925@aggTrade"
  ],
  "id": 3
}
```

## Setting Properties

Currently, the only property can be set is to set whether `combined` stream payloads are enabled are not. The combined property is set to `false` when connecting using `/ws/` ("raw streams") and `true` when connecting using `/stream/`.

> **Request**

```json
{
  "method": "SET_PROPERTY",
  "params": [
    "combined",
    true
  ],
  "id": 5
}
```

> **Response**

```json
{
  "result": null,
  "id": 5
}
```

## Retrieving Properties

> **Request**

```json
{
  "method": "GET_PROPERTY",
  "params": [
    "combined"
  ],
  "id": 2
}
```

> **Response**

```json
{
  "result": true,
  "id": 2
}
```
