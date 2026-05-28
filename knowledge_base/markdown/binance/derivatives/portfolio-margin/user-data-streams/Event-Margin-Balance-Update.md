---
title: "Event: Margin Balance Update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Margin-Balance-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:42.659Z
---
# Event: Margin Balance Update

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Margin-Balance-Update

# Event: Margin Balance Update

## Event Description

Margin Balance Update

## Event Name

`balanceUpdate`

## Response Example

```
{

  "e": "balanceUpdate",         //Event Type

  "E": 1573200697110,           //Event Time

  "a": "BTC",                   //Asset

  "d": "100.00000000",          //Balance Delta

  "U": 1027053479517            //event updateId

  "T": 1573200697068            //Clear Time

}

```
