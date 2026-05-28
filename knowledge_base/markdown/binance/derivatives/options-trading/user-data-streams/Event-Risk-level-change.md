---
title: "Event: Risk level change"
url: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Risk-level-change
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:55:02.532Z
---
# Event: Risk level change

> Source: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Risk-level-change

# Event: Risk level change

## Event Description

-   Updates whenever there is an account risk level change. The following are possibly values:
    -   NORMAL
    -   REDUCE\_ONLY
-   Note: Risk level changes are only applicable to VIP and Market Makers user accounts. VIP and certain Market Maker accounts will be automatically placed into REDUCE\_ONLY mode if their margin balance is insufficient to meet their maintenance margin obligations. Once in REDUCE\_ONLY mode, the system will re-evaluate the risk level only upon the following events:
    -   Funds transfer
    -   Trade fill
    -   Option expiry

## URL PATH

`/private`

## Event Name

`RISK_LEVEL_CHANGE`

## Update Speed

**50ms**

## Response Example

```json
{
  "e": "RISK_LEVEL_CHANGE",
  "E": 1587727187525,
  "s": "REDUCE_ONLY",
  "mb": "1534.11708371",
  "mm": "254789.11708371"
}
```
