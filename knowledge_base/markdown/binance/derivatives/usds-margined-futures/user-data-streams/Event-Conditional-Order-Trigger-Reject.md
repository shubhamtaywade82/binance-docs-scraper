---
title: "Event: Conditional_Order_Trigger_Reject"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Conditional-Order-Trigger-Reject
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:44:17.447Z
---
# Event: Conditional_Order_Trigger_Reject

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Conditional-Order-Trigger-Reject

# Event: Conditional\_Order\_Trigger\_Reject

## Event Description

`CONDITIONAL_ORDER_TRIGGER_REJECT` update when a triggered TP/SL order got rejected.

## URL PATH

`/private`

## Event Name

`CONDITIONAL_ORDER_TRIGGER_REJECT`

## Response Example

```
{

    "e":"CONDITIONAL_ORDER_TRIGGER_REJECT",      // Event Type

    "E":1685517224945,      // Event Time

    "T":1685517224955,      // me message send Time

    "or":{

      "s":"ETHUSDT",      // Symbol   

      "i":155618472834,      // orderId

      "r":"Due to the order could not be filled immediately, the FOK order has been rejected. The order will not be recorded in the order history",      // reject reason

     }

}  

```
