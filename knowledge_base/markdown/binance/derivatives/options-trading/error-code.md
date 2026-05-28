---
title: "Error Codes"
url: https://developers.binance.com/docs/derivatives/options-trading/error-code
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:38:31.209Z
---
# Error Codes

> Source: https://developers.binance.com/docs/derivatives/options-trading/error-code

# Error Codes

> Here is the error JSON payload:

```json
{
  "code": -1121,
  "msg": "Invalid symbol."
}
```

Errors consist of two parts: an error code and a message.  
Codes are universal,but messages can vary.

## 10xx - General Server or Network issues

### \-1000 UNKNOWN

-   An unknown error occurred while processing the request.

### \-1001 DISCONNECTED

-   Internal error; unable to process your request. Please try again.

### \-1002 UNAUTHORIZED

-   You are not authorized to execute this request.

### \-1008 TOO\_MANY\_REQUESTS

-   Too many requests queued.
-   Too much request weight used; please use the websocket for live updates to avoid polling the API.
-   Too much request weight used; current limit is %s request weight per %s %s. Please use the websocket for live updates to avoid polling the API.
-   Way too much request weight used; IP banned until %s. Please use the websocket for live updates to avoid bans.

### \-1014 UNKNOWN\_ORDER\_COMPOSITION

-   Unsupported order combination.

### \-1015 TOO\_MANY\_ORDERS

-   Too many new orders.
-   Too many new orders; current limit is %s orders per %s.

### \-1016 SERVICE\_SHUTTING\_DOWN

-   This service is no longer available.

### \-1020 UNSUPPORTED\_OPERATION

-   This operation is not supported.

### \-1021 INVALID\_TIMESTAMP

-   Timestamp for this request is outside of the recvWindow.
-   Timestamp for this request was 1000ms ahead of the server's time.

### \-1022 INVALID\_SIGNATURE

-   Signature for this request is not valid.

## 11xx - 2xxx Request issues

### \-1100 ILLEGAL\_CHARS

-   Illegal characters found in a parameter.
-   Illegal characters found in a parameter. %s
-   Illegal characters found in parameter `%s`; legal range is `%s`.

### \-1101 TOO\_MANY\_PARAMETERS

-   Too many parameters sent for this endpoint.
-   Too many parameters; expected `%s` and received `%s`.
-   Duplicate values for a parameter detected.

### \-1102 MANDATORY\_PARAM\_EMPTY\_OR\_MALFORMED

-   A mandatory parameter was not sent, was empty/null, or malformed.
-   Mandatory parameter `%s` was not sent, was empty/null, or malformed.
-   Param `%s` or `%s` must be sent, but both were empty/null!

### \-1103 UNKNOWN\_PARAM

-   An unknown parameter was sent.

### \-1104 UNREAD\_PARAMETERS

-   Not all sent parameters were read.
-   Not all sent parameters were read; read `%s` parameter(s) but was sent `%s`.

### \-1105 PARAM\_EMPTY

-   A parameter was empty.
-   Parameter `%s` was empty.

### \-1106 PARAM\_NOT\_REQUIRED

-   A parameter was sent when not required.
-   Parameter `%s` sent when not required.

### \-1111 BAD\_PRECISION

-   Precision is over the maximum defined for this asset.

### \-1115 INVALID\_TIF

-   Invalid timeInForce.

### \-1116 INVALID\_ORDER\_TYPE

-   Invalid orderType.

### \-1117 INVALID\_SIDE

-   Invalid side.

### \-1118 EMPTY\_NEW\_CL\_ORD\_ID

-   New client order ID was empty.

### \-1119 EMPTY\_ORG\_CL\_ORD\_ID

-   Original client order ID was empty.

### \-1120 BAD\_INTERVAL

-   Invalid interval.

### \-1121 BAD\_SYMBOL

-   Invalid symbol.

### \-1125 INVALID\_LISTEN\_KEY

-   This listenKey does not exist.

### \-1127 MORE\_THAN\_XX\_HOURS

-   Lookup interval is too big.
-   More than %s hours between startTime and endTime.

### \-1128 BAD\_CONTRACT

-   Invalid underlying

### \-1129 BAD\_CURRENCY

-   Invalid asset。

### \-1130 INVALID\_PARAMETER

-   Invalid data sent for a parameter.
-   Data sent for paramter `%s` is not valid.

### \-1131 BAD\_RECV\_WINDOW

-   recvWindow must be less than 60000

### \-2010 NEW\_ORDER\_REJECTED

-   NEW\_ORDER\_REJECTED

### \-2013 NO\_SUCH\_ORDER

-   Order does not exist.

### \-2014 BAD\_API\_KEY\_FMT

-   API-key format invalid.

### \-2015 INVALID\_API\_KEY

-   Invalid API-key, IP, or permissions for action.

### \-2018 BALANCE\_NOT\_SUFFICIENT

-   Balance is insufficient.

### \-2027 OPTION\_MARGIN\_NOT\_SUFFICIENT

-   Option margin is insufficient.

## 3xxx-5xxx Filters and other issues

### \-3029 TRANSFER\_FAILED

-   Asset transfer fail.

### \-4001 PRICE\_LESS\_THAN\_ZERO

-   Price less than 0.

### \-4002 PRICE\_GREATER\_THAN\_MAX\_PRICE

-   Price greater than max price.

### \-4003 QTY\_LESS\_THAN\_ZERO

-   Quantity less than zero.

### \-4004 QTY\_LESS\_THAN\_MIN\_QTY

-   Quantity less than min quantity.

### \-4005 QTY\_GREATER\_THAN\_MAX\_QTY

-   Quantity greater than max quantity.

### \-4013 PRICE\_LESS\_THAN\_MIN\_PRICE

-   Price less than min price.

### \-4029 INVALID\_TICK\_SIZE\_PRECISION

-   Tick size precision is invalid.

### \-4030 INVALID\_QTY\_PRECISION

-   Step size precision is invalid.

### \-4055 AMOUNT\_MUST\_BE\_POSITIVE

-   Amount must be positive.

### \-4056 INVALID\_AMOUNT

-   Amount is invalid.

### \-4078 OPTIONS\_COMMON\_ERROR

-   options internal error

### \-5001 USER\_EXIST

-   Option user already exist

### \-5002 USER\_NOT\_ACCESS

-   Option user not access

### \-5003 BAD\_INVITE\_CODE

-   Invalid invite code

### \-5004 USED\_INVITE\_CODE

-   Invite code has bean used

### \-5005 BLACK\_COUNTRY

-   Black country

### \-5006 ITEMS\_EXIST

-   Items '%s' already exist

### \-5007 USER\_API\_EXIST

-   User api already exist

### \-5008 KYC\_NOT\_PASS

-   User kyc not pass

### \-5009 IP\_COUNTRY\_BLACK

-   Restricted jurisdiction ip address

### \-5010 NOT\_ENOUGH\_POSITION

-   User doesn't have enough position to sell

### \-6001 INVALID\_MMP\_WINDOW\_TIME\_LIMIT

-   Invalid mmp window time limit

### \-6002 INVALID\_MMP\_FROZEN\_TIME\_LIMIT

-   Invalid mmp frozen time limit

### \-6003 INVALID\_UNDERLYING

-   Invalid underlying

### \-6004 MMP\_UNDERLYING\_NOT\_FOUND

-   Underlying not found

### \-6005 IS\_NOT\_MARKET\_MAKER

-   It is not market maker

### \-6006 MMP\_RULES\_NOT\_EXISTING

-   Mmp rules are not existing

### \-6007 MMP\_ERROR\_UNKNOWN

-   Mmp unknown error

### \-6008 INVALID\_LIMIT

-   parameter 'limit' is invalid.

### \-6009 INVALID\_COUNTDOWN\_TIME

-   countdownTime must be no less than 5000 or equal to 0

### \-6010 OPEN\_INTEREST\_ERR\_DATA

-   open interest error data.

### \-6011 EXCEED\_MAXIMUM\_BATCH\_ORDERS

-   Maximum 10 orders in one batchOrder request.

### \-6012 EXCEED\_MAXIMUM\_BLOCK\_ORDER\_LEGS

-   Exceed maximum number of legs in one block order request.

### \-6013 BLOCK\_ORDER\_LEGS\_WITH\_DUPLICATE\_SYMBOL

-   Duplicate symbol in one block order request.

### \-6014 GRFQ\_INVALID\_LEGS

-   Invalid legs

### \-6015 GRFQ\_QTY\_IS\_NOT\_MULTIPLE\_OF\_MINIMUM\_QTY

-   Quantity is not multiple of minimum quantity

### \-6016 GRFQ\_QUOTE\_NOT\_FOUND

-   Quote is not found

### \-6017 GRFQ\_QUOTE\_NOT\_ENOUGH\_QTY\_LEFT

-   Not enough quantity left

### \-6018 GRFQ\_QUOTE\_REQUEST\_NOT\_FOUND

-   Quote request is not found

### \-6019 GRFQ\_QUOTE\_INVALID\_EXPIRE\_TIME

-   Invalid quote expire time

### \-6020 GRFQ\_QUOTE\_EXPIRED

-   Quote expired

### \-6021 GRFQ\_INVALID\_SIDE

-   Invalid side

### \-6022 GRFQ\_INVALID\_USER

-   Not Global RFQ user

### \-6023 SELF\_TRADE\_PREVENTION

-   Self trade prevention

### \-6024 CHANGE\_USER\_FLAG\_FAILED

-   Change user flag failed

### \-6025 GRFQ\_INVALID\_QUOTE\_PRICE

-   Invalid quote price

### \-6026 INVALID\_QTY

-   Invalid qty

### \-6027 INVALID\_PRICE

-   Invalid price

### \-6028 ORDER\_IS\_FINAL

-   Order is in final state

### \-6029 PARAMETER\_IS\_REQUIRED

-   %s is required

### \-6030 INVALID\_TIME\_INTERVAL

-   Invalid time interval.

### \-6031 START\_TIME\_GREATER\_THAN\_END\_TIME

-   Start time is greater than end time.

### \-6032 HAS\_OPEN\_ORDER

-   Has open order.

### \-6033 HAS\_NEGATIVE\_BALANCE

-   Has negative balance.

### \-6034 HAS\_POSITION

-   Has position.

### \-6035 NO\_NEED\_TO\_CHANGE

-   No need to change.

### \-6036 NO\_PERMISSION\_TO\_CHANGE

-   no permission to change.

### \-6037 NO\_RECORDS\_FOUND

-   No records found.

### \-6038 SCALE\_NOT\_MATCH

-   scale not match.

### \-6039 INVALID\_STEP\_SIZE\_PRECISION

-   Step size precision is invalid.

### \-6040 INVALID\_QTYLIMIT\_DELTALIMIT

-   Invalid qtyLimit or deltaLimit.

### \-6041 START\_TRADING\_MUST\_SLOWLY

-   Start Trading Must Slowly..

### \-6042 INDEX\_COMMISSION\_NOT\_MATCH

-   Index Commission Not Match..

### \-6043 INDEX\_RISKPARAMETER\_NOT\_MATCH

-   Index RiskParameter Not Match..

### \-6044 CLI\_ORD\_ID\_ERROR

-   clientOrderId is duplicated

### \-6045 REDUCE\_ONLY\_REJECT

-   Reduce-only order rejected. The new reduce-only order conflicts with existing open orders. Please cancel the conflicting orders and resubmit.

### \-6046 FOK\_ORDER\_REJECT

-   Due to the order could not be filled immediately, the FOK order has been rejected.

### \-6047 GTX\_ORDER\_REJECT

-   Due to the order could not be executed as maker, the Post Only order will be rejected.

### \-6048 INVALID\_BLOCK\_ORDER

-   Block order parameter is invalid

### \-6049 SYMBOL\_NOT\_TRADING

-   this symbol is not in trading status

### \-6050 MAX\_OPEN\_ORDERS\_ON\_SYMBOL\_EXCEEDED

-   Maximum open orders reached for this symbol. Please cancel existing orders and try again.

### \-6051 MAX\_OPEN\_ORDERS\_ON\_INDEX\_EXCEEDED

-   Maximum open orders reached for this underlying. Please cancel existing orders and try again.

### \-6052 MAX\_SHORT\_POSITION\_ON\_SYMBOL\_EXCEEDED

-   Maximum short position size reached for this symbol

### \-6053 MAX\_SHORT\_POSITION\_ON\_INDEX\_EXCEEDED

-   Maximum short position size reached for this underlying

### \-6054 MAX\_QUANTITY\_ON\_SINGLE\_ORDER\_EXCEEDED

-   Quantity greater than max quantity

### \-6055 USER\_LIQUIDATING

-   User is in liquidation process

### \-6056 REDUCE\_ONLY\_MARGIN\_CHECK\_FAILED

-   Reduce-only order failed. Your new reduce-only order, when combined with existing same-side open orders, would flip your position and cause insufficient margin. Please cancel those open orders and try again.

### \-6057 WRITER\_CANT\_NAKED\_SELL

-   The current symbol is not eligible for option writing.

### \-6058 MMP\_TRIGGERED

-   MMP triggered. Please reset MMP config

### \-6059 USER\_IN\_LIQUIDATION

-   User is in liquidation process

### \-6060 LOCKED\_BALANCE\_NOT\_FOUND

-   OTC order fail due to unable to lock balance

### \-6061 LOCKED\_OTC\_ORDER\_NOT\_FOUNT

-   OTC order fail due to unable to lock order

### \-6062 INVALID\_USER\_STATUS

-   Operation is not supported for current user status

### \-6063 CANCEL\_REJECTED

-   Cancel rejected by system
