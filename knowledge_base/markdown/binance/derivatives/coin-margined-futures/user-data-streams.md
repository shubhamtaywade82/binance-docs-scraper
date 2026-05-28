---
title: "User Data Streams Connect"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:39:45.444Z
---
# User Data Streams Connect

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams>

# User Data Streams Connect

- The base API endpoint is: **[https://dapi.binance.com](https://dapi.binance.com)**

- A User Data Stream `listenKey` is valid for 60 minutes after creation.

- Doing a `PUT` on a `listenKey` will extend its validity for 60 minutes, if response `-1125` error "This listenKey does not exist." Please use `POST /dapi/v1/listenKey` to recreate `listenKey`.

- Doing a `DELETE` on a `listenKey` will close the stream and invalidate the `listenKey`.

- Doing a `POST` on an account with an active `listenKey` will return the currently active `listenKey` and extend its validity for 60 minutes.

- The connection method for Websocket:

  - Base Url: **wss://dstream.binance.com**
  - User Data Streams are accessed at **/ws/<listenKey>**
  - Example: `wss://dstream.binance.com/ws/XaEAKTsQSRLZAGH9tuIu37plSRsdjmlAVBoNYPUITlTAko1WI22PgmBMpI1rS8Yh`
- **Message Ordering Guarantee**:

  - For the same user on a single Websocket connection, messages of the **same event type** (e.g., `ACCOUNT_UPDATE`, `ORDER_TRADE_UPDATE`) are **strictly ordered** by both `T` (transaction time from Matching Engine) and `E` (event time when the message is generated).
  - **Recommended**: Use the `E` field for ordering updates, especially when:
    - Comparing events across different event types (e.g., `ORDER_TRADE_UPDATE` vs market data streams like `aggTrade`).
    - Events from different services may share the same `T` but have different `E` values due to processing timing.
    - For the same event type on the same connection, both `T` and `E` remain strictly ordered, so either field can be used reliably.
- A single connection is only valid for 24 hours; expect to be disconnected at the 24 hour mark

- Considering that RESTful endpoints may experience query delays under volatile market conditions, we strongly recommend prioritizing Websocket user data stream messages for retrieving orders, positions, and other information.
