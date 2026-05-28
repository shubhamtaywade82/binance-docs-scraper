---
title: "Contract Info Stream"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Contract-Info-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:32.095Z
---
# Contract Info Stream

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Contract-Info-Stream>

# Contract Info Stream

## Stream Description

ContractInfo stream pushes when contract info updates(listing/settlement/contract bracket update). `bks` field only shows up when bracket gets updated.

## URL PATH

`/market`

## Stream Name

`!contractInfo`

## Update Speed

**Real-time**

## Response Example

```json
{
  "e": "contractInfo",
  "E": 1669356423908,
  "s": "IOTAUSDT",
  "ps": "IOTAUSDT",
  "ct": "PERPETUAL",
  "dt": 4133404800000,
  "ot": 1569398400000,
  "cs": "TRADING",
  "bks": [
    {
      "bs": 1,
      "bnf": 0,
      "bnc": 5000,
      "mmr": 0.01,
      "cf": 0,
      "mi": 21,
      "ma": 50
    },
    {
      "bs": 2,
      "bnf": 5000,
      "bnc": 25000,
      "mmr": 0.025,
      "cf": 75,
      "mi": 11,
      "ma": 20
    }
  ]
}
```
