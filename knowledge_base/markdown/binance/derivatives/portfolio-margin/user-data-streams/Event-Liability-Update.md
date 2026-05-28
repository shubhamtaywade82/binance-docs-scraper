---
title: "Event: Liability Update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Liability-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:25.748Z
---
# Event: Liability Update

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Liability-Update>

# Event: Liability Update

## Event Description

Margin Liability update

## Event Name

`liabilityChange`

## Response Example

```
{

  "e": "liabilityChange",        //Event Type

  "E": 1573200697110,            //Event Time

  "a": "BTC",                    //Asset

  "t": “BORROW”                  //Type

  "T": 1352286576452864727,     //Transaction ID

  "p": "1.03453430",             //Principal

  "i": "0",                      //Interest

  "l": "1.03476851"              //Total Liability

}

```
