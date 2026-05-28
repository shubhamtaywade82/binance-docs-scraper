---
title: "Event: User Data Stream Expired"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-User-Data-Stream-Expired
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:40:40.354Z
---
# Event: User Data Stream Expired

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-User-Data-Stream-Expired>

# Event: User Data Stream Expired

## Event Description

When the `listenKey` used for the user data stream turns expired, this event will be pushed.

**Notice:**

> - This event is not related to the websocket disconnection.
> - This event will be received only when a valid `listenKey` in connection got expired.
> - No more user data event will be updated after this event received until a new valid `listenKey` used.

## Event Name

`listenKeyExpired`

## Response Example

```
{

 'e': 'listenKeyExpired',      // event type

 'E': 1576653824250    // event time

 "listenKey":"WsCMN0a4KHUPTQuX6IUnqEZfB1inxmv1qR4kbf1LuEjur5VdbzqvyxqG9TSjVVxv"

}

```
