---
title: "Event: riskLevelChange"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-riskLevelChange
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:40.025Z
---
# Event: riskLevelChange

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-riskLevelChange>

# Event: riskLevelChange

## Event Description

- When the user's position risk ratio is too high, this stream will be pushed.
- This message is only used as risk guidance information and is not recommended for investment strategies.
- `RISK_LEVEL_CHANGE`includes following types：`MARGIN_CALL`, `REDUCE_ONLY`, `FORCE_LIQUIDATION`
- In the case of a highly volatile market, there may be the possibility that the user's position has been liquidated at the same time when this stream is pushed out.

## Event Name

`RISK_LEVEL_CHANGE`

## Response Example

```json
{
  "e": "riskLevelChange",
  "E": 1587727187525,
  "u": "1.99999999",
  "s": "MARGIN_CALL",
  "eq": "30.23416728",
  "ae": "30.23416728",
  "m": "15.11708371"
}
```
