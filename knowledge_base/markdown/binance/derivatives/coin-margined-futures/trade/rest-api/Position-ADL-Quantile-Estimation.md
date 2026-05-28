---
title: "Position ADL Quantile Estimation(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Position-ADL-Quantile-Estimation
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:54:41.332Z
---
# Position ADL Quantile Estimation(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Position-ADL-Quantile-Estimation>

# Position ADL Quantile Estimation(USER\_DATA)

## API Description

Query position ADL quantile estimation

> - Values update every 30s.
> - Values 0, 1, 2, 3, 4 shows the queue position and possibility of ADL from low to high.
> - For positions of the symbol are in One-way Mode or isolated margined in Hedge Mode, "LONG", "SHORT", and "BOTH" will be returned to show the positions' adl quantiles of different position sides.
> - If the positions of the symbol are crossed margined in Hedge Mode:
>   - "HEDGE" as a sign will be returned instead of "BOTH";
>   - A same value caculated on unrealized pnls on long and short sides' positions will be shown for "LONG" and "SHORT" when there are positions in both of long and short sides.

## HTTP Request

GET `/dapi/v1/adlQuantile`

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
    "symbol": "BTCUSD_200925",
    "adlQuantile": {
      "LONG": 3,
      "SHORT": 3,
      "HEDGE": 0
    }
  },
  {
    "symbol": "BTCUSD_201225",
    "adlQuantile": {
      "LONG": 1,
      "SHORT": 2,
      "BOTH": 0
    }
  }
]
```
