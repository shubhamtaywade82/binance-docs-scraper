---
title: "UM Position ADL Quantile Estimation(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/UM-Position-ADL-Quantile-Estimation
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:59.290Z
---
# UM Position ADL Quantile Estimation(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/UM-Position-ADL-Quantile-Estimation

# UM Position ADL Quantile Estimation(USER\_DATA)

## API Description

Query UM Position ADL Quantile Estimation

> -   Values update every 30s.
> -   Values 0, 1, 2, 3, 4 shows the queue position and possibility of ADL from low to high.
> -   For positions of the symbol are in One-way Mode or isolated margined in Hedge Mode, "LONG", "SHORT", and "BOTH" will be returned to show the positions' adl quantiles of different position sides.
> -   If the positions of the symbol are crossed margined in Hedge Mode:
>     -   "HEDGE" as a sign will be returned instead of "BOTH";
>     -   A same value caculated on unrealized pnls on long and short sides' positions will be shown for "LONG" and "SHORT" when there are positions in both of long and short sides.

## HTTP Request

GET `/papi/v1/um/adlQuantile`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "symbol": "ETHUSDT",
    "adlQuantile": {
      "LONG": 3,
      "SHORT": 3,
      "BOTH": 0
    }
  },
  {
    "symbol": "BTCUSDT",
    "adlQuantile": {
      "LONG": 0,
      "SHORT": 0,
      "BOTH": 2
    }
  }
]
```
