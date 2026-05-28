---
title: "Event: Margin Call"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Margin-Call
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:44:00.459Z
---
# Event: Margin Call

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Margin-Call>

# Event: Margin Call

## Event Description

- When the user's position risk ratio is too high, this stream will be pushed.
- This message is only used as risk guidance information and is not recommended for investment strategies.
- In the case of a highly volatile market, there may be the possibility that the user's position has been liquidated at the same time when this stream is pushed out.

## URL PATH

`/private`

## Event Name

`MARGIN_CALL`

## Response Example

```json
{
  "e": "MARGIN_CALL",
  "E": 1587727187525,
  "cw": "3.16812045",
  "p": [
    {
      "s": "ETHUSDT",
      "ps": "LONG",
      "pa": "1.327",
      "mt": "CROSSED",
      "iw": "0",
      "mp": "187.17127",
      "up": "-1.166074",
      "mm": "1.614445"
    }
  ]
}
```
