## Orders

### The Order Object

The order object is an essential piece of the TWS API which is used to both place and manage orders. This is primarily built with an ever increasing range of attributes used to create the best order possible. With that being said, the value to the right represents the required fields in order to place or reference any order. Keep in mind that there are several other attributes that can and should be referenced.

#### Order()

**action:** String. Determines whether the contract should be a BUY or SELL.

**auxPrice:** double. Used to determine the stop price for STP, STP LMT, and TRAIL orders.

**lmtPrice:** double. Used to determine the limit price for LMT, STP LMT, and TRAIL orders.

**orderType:** String. Specify the type of order to place. For example, MKT, LMT, STP.

**tif:** String. Time in force for the order. Default tif is DAY.

**totalQuantity:** decimal. Total size of the order.

Given additional structures for orders are ever evolving, it is recommended to review the relevant order class in your programming language for a comprehensive review of what fields are available.

[Order Class Reference](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-ref/#order-ref)

### Cancelling an Order

An order can be cancelled from the API with the functions EClient.cancelOrder and EClient::reqGlobalCancel.

EClient.cancelOrder can only be used to cancel an order that was placed originally by a client with the same client ID (or from TWS for client ID 0).

EClient.reqGlobalCancel will cancel all open orders, regardless of how they were originally placed.

### Cancel Individual Order

#### EClient.cancelOrder (

**orderId:** int. Specify which order should be cancelled by its identifier.

**orderCancel:** orderCancel. An OrderCancel object that can receive the manualOrderCancelTime, manualOrderIndicator, and extOperator fields. See [OrderCancel Reference](/campus/ibkr-api-page/twsapi-ref/#ordercancel-ref) for more insight on the OrderCancel class.  
)

Cancels an active order placed by from the same API client ID.

**Note:** API clients cannot cancel individual orders placed by other clients. Only reqGlobalCancel is available.

self.cancelOrder(orderId, OrderCancel())

### Cancel All Open Orders

#### EClient.reqGlobalCancel ()

This method will cancel ALL open orders including those placed directly from TWS.

**orderCancel:** orderCancel. An OrderCancel object that can receive the manualOrderCancelTime, manualOrderIndicator, and extOperator fields. See [OrderCancel Reference](/campus/ibkr-api-page/twsapi-ref/#ordercancel-ref) for more insight on the OrderCancel class.  
)

self.reqGlobalCancel(OrderCancel())

### Exercise Options

Options are exercised or lapsed from the API with the function EClient.exerciseOptions.

*   Option exercise will appear with order status side = “BUY” and limit price of 0, but only at the time the request is made
*   Option exercise can be distinguished by price = 0

#### EClient.exerciseOptions (

**tickerId:** int. Exercise request’s identifier

**contract:** Contract. the option Contract to be exercised.

**exerciseAction:** int. Set to 1 to exercise the option, set to 2 to let the option lapse.

**exerciseQuantity:** int. Number of contracts to be exercised

**account:** String. Destination account

**ovrd:** int. Specifies whether your setting will override the system’s natural action.  
Set to 1 to override, set to 0 not to.

For example, if your action is “exercise” and the option is not in-the-money, by natural action the option would not exercise. If you have override set to “yes” the natural action would be overridden and the out-of-the money option would be exercised.

**manualOrderTime:** String. Specify the time at which the options should be exercised. An empty string will assume the current time.  
Required TWS API 10.26 or higher.  
)

Exercises an options contract.

**Note:** this function is affected by a TWS setting which specifies if an exercise request must be finalized.

self.exerciseOptions(5003, contract, 1, 1, self.account, 1, "")

### Minimum Price Increment

The minimum increment is the minimum difference between price levels at which a contract can trade. Some trades have constant price increments at all price levels. However some contracts have difference minimum increments on different exchanges on which they trade and/or different minimum increments at different price levels. In the contractDetails class, there is a field ‘minTick’ which specifies the smallest possible minimum increment encountered on any exchange or price. For complete information about minimum price increment structure, there is the IB Contracts and Securities search site, or the API function EClient.reqMarketRule.

The function [EClient.reqContractDetails](#request-contract-details) when used with a Contract object will return contractDetails object to the contractDetails function which has a list of the valid exchanges where the instrument trades. Also within the contractDetails object is a field called marketRuleIDs which has a list of “market rules”. A market rule is defined as a rule which defines the minimum price increment given the price. The market rule list returned in contractDetails has a list of market rules in the same order as the list of valid exchanges. In this way, the market rule ID for a contract on a particular exchange can be determined.

*   Market rule for forex and forex CFDs indicates default configuration (1/2 and not 1/10 pips). It can be adjusted to 1/10 pips through TWS or IB Gateway Global Configuration.
*   Some non-US securities, for instance on the SEHK exchange, have a minimum lot size. This information is not available from the API but can be obtained from the IB Contracts and Securities search page. It will also be indicated in the error message returned from an order which does not conform to the minimum lot size.

With the market rule ID number, the corresponding rule can be found with the API function EClient.reqMarketRule. The rule is returned to the function EWrapper.marketRule.

*   For forex, there is an option in TWS/IB Gateway configuration which allows trading in 1/10 pips instead of 1/5 pips (the default).
*   TWS Global Configuration -> Display -> Ticker Row -> Allow Forex trading in 1/10 pips

### Request Market Rule

#### EClient.reqMarketRule (

**marketRuleId**: int. The id of market rule  
)

Requests details about a given market rule. The market rule for an instrument on a particular exchange provides details about how the minimum price increment changes with price.

A list of market rule ids can be obtained by invoking [EClient.reqContractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#contract-details) on a particular contract. The returned market rule ID list will provide the market rule ID for the instrument in the correspond valid exchange list in contractDetails.

self.reqMarketRule(26)

### Receive Market Rule

#### EWrapper.marketRule (

**marketRuleId:** int. Market Rule ID requested.

**priceIncrements:** PriceIncrement\[\]. Returns the available price increments based on the market rule.  
)

Returns minimum price increment structure for a particular market rule ID market rule IDs for an instrument on valid exchanges can be obtained from the [contractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#contract-details) object for that contract

def marketRule(self, marketRuleId: int, priceIncrements: ListOfPriceIncrements):
	print("Market Rule ID: ", marketRuleId)
	for priceIncrement in priceIncrements:
	print("Price Increment.", priceIncrement)

### MiFIR Transaction Reporting Fields

For EEA investment firms required to comply with MiFIR reporting, and who have opted in to Enriched and Delegated Transaction Reporting, we have added four new order attributes to the Order class, and several new presets to TWS and IB Gateway Global Configuration.

New order attributes include:

*   **IBApi.Order.Mifid2DecisionMaker** – Used to send “investment decision within the firm” value (if IBApi.Order.Mifid2DecisionAlgo is not used).
*   **IBApi.Order.Mifid2DecisionAlgo** – Used to send “investment decision within the firm” value (if IBApi.Order.Mifid2DecisionMaker is not used).
*   **IBApi.Order.Mifid2ExecutionTrader** – Used to send “execution within the firm” value (if IBApi.Order.Mifid2ExecutionAlgo is not used).
*   **IBApi.Order.Mifid2ExecutionAlgo** – Used to send “execution within the firm” value (if IBApi.Order.Mifid2ExecutionTrader is not used).

New TWS and IB Gateway Order Presets can be found in the Orders > MiFIR page of Global Configuration, and include TWS Decision-Maker Defaults, API Decision-Maker Defaults, and Executing Trader/Algo presets.

The following choices are available for the “investment decision within the firm” IBApi.Order.Mifid2DecisionMaker and IBApi.Order.Mifid2DecisionAlgo attributes:

1.  This field does not need to be reported if you are:
    
    *   Using the TWS API to transmit orders, AND
    *   The investment decision is always made by the client, AND
    *   None of these clients are an EEA investment firm with delegated reporting selected (the “delegated reporting firm”).
    
    You can configure the preset to indicate this via TWS Global Configuration using the Orders > MiFIR page. In this scenario, the orders for the proprietary account will need to be placed via TWS.
    
2.  If you are using the TWS API to transmit orders, and the investment decision is made by a person, or a group of people within a delegated reporting firm, with one person being the primary decision maker:
    *   Your TWS API program can, on each order, transmit a decision maker’s IB-assigned short code using the field IBApi.Order.Mifid2DecisionMaker. You can define persons who can be the decision-makers via IB Account Management. To obtain the short codes that IB assigned to those persons, please contact IB Client Services.
    *   If your TWS API program is unable to transmit the above field, and the investment decision is either made by, or approved by, a single person who can be deemed to be the primary investment decision maker, you can pre-configure a default investment decision-maker that will be used for orders where the above fields are not present. You must define the investment decision-maker(s) in IB Account Management, and can then configure the default investment decision-maker in TWS Global Configuration using the Orders > MiFIR page.
3.  If you are using the TWS API to transmit orders and the investment decision is made by an algorithm:
    *   Your TWS API program can, on each order, transmit a decision maker’s IB-assigned short code using the field IBApi.Order.Mifid2DecisionAlgo. You can define algorithms that can be the decision-makers via IB Account Management. To obtain the short codes that IB assigned to those persons, please contact IB Client Services.
    *   If your TWS API program is unable to transmit the above field, and/or the investment decision is made by a single or primary decision-maker algorithm, you can pre-configure a default investment decision-maker algo that will be used for orders where the above field is not sent. You must define the investment decision-maker(s) in IB Account Management, and can then configure the default investment decision-maker in TWS Global Configuration using the Orders > MiFIR page.
        
        _NOTE: Only ONE investment decision-maker, either a primary person or algorithm, should be provided on an order, or selected as the default._
        

The following choices are available for “execution within the firm” IBApi.Order.Mifid2ExecutionTrader and IBApi.Order.Mifid2ExecutionAlgo attributes:

1.  No additional information is needed if you are using the TWS API to transmit orders entered in a third-party trading interface, and you are the trader responsible for execution within the firm.
2.  If your TWS API program transmits orders to IB automatically without human intervention, please contact **IB Client Services** to register the program or programs with IB as an algo. Only the primary program or algo needs to be registered and identified. You can then configure the default in TWS Global Configuration using the Orders > MiFIR page.
3.  Your TWS API program, on each order, can transmit the IB-assigned short code of the algo or person responsible for execution within the firm using the field IBApi.Order.Mifid2ExecutionAlgo (for the algorithm) or IBApi.Order.Mifid2ExecutionTrader (for the person).

For more information, or to obtain short codes for persons or algos defined in IB Account Management, please contact IB Client Services.

To find out more about the MiFIR transaction reporting obligations, see the [MiFIR Enriched and Delegated Transaction Reporting for EEA Investment Firms](https://ibkr.info/node/2975) knowledge base article.

### Modifying Orders

Modification of an API order can be done if the API client is connected to a session of TWS with the same username of TWS and using the same API client ID. The function [EClient.placeOrder](#place-order) can then be called with the same fields as the open order, except for the parameter to modify. This includes the Order.OrderId, which must match the Order.OrderId of the **open** order. It is not generally recommended to try to change order fields aside from order price, size, and tif (for DAY -> IOC modifications). To change other parameters, it might be preferable to instead cancel the open order, and create a new one.

*   To modify or cancel an individual order placed manually from TWS, it is necessary to connect with client ID 0 and then bind the order before attempting to modify it. The process of binding assigns the order an API order ID; prior to binding it will be returned to the API with an **API order ID of 0**. Orders with API order ID 0 cannot be modified/cancelled from the API. The function reqOpenOrders binds orders open at that moment which do not already have an API order ID, and the function reqAutoOpenOrders binds future orders automatically. The function reqAllOpenOrders does not bind orders.
*   To modify API orders when connecting to a different session of TWS (logged in with a different username than used for the original order), it is necessary to first bind the order with client ID 0 in the same manner as manual TWS orders are bound before they can be modified. The binding assignment of API order IDs is independent for each TWS user, so the same order can have different API order IDs for different users. The permID returned in the API Order class which is assigned by TWS can be used to identify an order in an account uniquely.
*   The process of order binding from the API cancels/resubmits an order working on an exchange. This may affect the order’s place in the exchange queue. Enhancements are planned to allow for API binding with modification of exchange queue priority.

### Place Order

Orders are submitted via the EClient.placeOrder method.

Immediately after an order is submitted correctly, the TWS will start sending events concerning the order’s activity via [EWrapper.openOrder](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#open-order) and [EWrapper.orderStatus](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#order-status)

Advisors executing allocation orders will receive execution details and commissions for the allocation order itself. To receive allocation details and commissions for a specific subaccount [EClient.reqExecutions](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-exec-details) can be used.

An order can be sent to TWS but not transmitted to the IB server by setting the Order.Transmit flag in the order class to False. Untransmitted orders will only be available within that TWS session (not for other usernames) and will be cleared on restart. Also, they can be cancelled or transmitted from the API but not viewed while they remain in the “untransmitted” state.

#### EClient.placeOrder (

**id:** int. The order’s unique identifier. If a new order is placed with an order ID less than or equal to the order ID of a previous order an error will occur.

**contract:** Contract. The order’s contract

**order:** Order. The order object.  
)

Places or modifies an order.

self.placeOrder(orderId, contract, order)

### Adding a Profit Taker and Stop Loss

Users are able to bracket their order in two distinct ways:

*   Manually construct each child of the parent. See [Bracket Orders](/campus/ibkr-api-page/order-types/#bracket-orders) for more details.
*   Adding child orders based on TWS Presets.

Adding a profit taker and stop loss from the same order object automated the order bracket process so that only order ID needs to be provided. This is best for users looking to trade with identical bracket parameters across orders.  
 

#### Profit Taker

A profit taker can be added to an order using the `ptOrderId` and `ptOrderType` Order attributes.

**PtOrderId** must be a unique order identifier.  
Consider using [EWrapper.NextValidId](/campus/ibkr-api-page/twsapi-doc/#next-valid-id)

**PtOrderType** must always be set to “PRESET”.  
Be sure to review your [Presets in Trader Workstation](/en/?f=%2Fen%2Ftrading%2Ftws-order-presets.php) prior to submitting orders as the Profit taker details will mirror these details as set.

order = Order()
order.orderId = 10000
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 256
order.tif = "DAY"

order.ptOrderType = "PRESET"
order.ptOrderId = 10001

#### Stop Loss

A stop loss can be added to an order using the `slOrderId` and `slOrderType` Order attributes.

**SlOrderId** must be a unique order identifier.  
Consider using [EWrapper.NextValidId](/campus/ibkr-api-page/twsapi-doc/#next-valid-id)

**SlOrderType** must always be set to “PRESET”.  
Be sure to review your [Presets in Trader Workstation](/en/?f=%2Fen%2Ftrading%2Ftws-order-presets.php) prior to submitting orders as the Stop loss details will mirror these details as set.

order = Order()
order.orderId = 10000
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 256
order.tif = "DAY"

order.slOrderType = "PRESET"
order.slOrderId = 10002

### Combo Orders

A user may create an order for a combination of symbols, referred to as a Spread or Combo, by the use of a [Spread Contract](/campus/ibkr-api-page/contracts/#twsapi-spreads).

Spreads may be priced on a per-leg basis or a complete order.

*   Combo orders may only use price-per-leg on with two legs in a Non-Guaranteed spread.
*   Combo orders with more than 2 legs may only be placed with a price for the overall order and must not be NonGuaranteed.

#### Combo Price Per Leg

Combination orders may be priced per-leg with no more than 2 legs in a [NonGuaranteed](/lib/cstools/faq/#/content/1163249841) order. This is accomplished with the [OrderComboLeg](/campus/ibkr-api-page/twsapi-ref/#ordercomboleg-ref) class and defining a price in each object. The [OrderComboLeg](/campus/ibkr-api-page/twsapi-ref/#ordercomboleg-ref) should then be added to the [Order object’s](/campus/ibkr-api-page/twsapi-ref/#order-ref) [OrderComboLegs](/campus/ibkr-api-page/twsapi-ref/#ordercomboleg-ref) attribute in an array.

order = Order()
order.orderType = "LMT"

orderLeg1 = OrderComboLeg()
orderLeg1.price = 222

orderLeg2 = OrderComboLeg()
orderLeg2.price = 333

order.orderComboLegs = \[orderLeg2, orderLeg1\]

#### Price Overall Order

To price an overall order, users would only need to define the lmtPrice or auxPrice values within the [Order object](/campus/ibkr-api-page/twsapi-ref/#order-ref) as they would if trading an individual contract.

order = Order()
order.orderType = "LMT"
order.lmtPrice = 555

### Trading The Overnight Session

In the event a user would like to designate a trade to take place during the Overnight trading hours, the [Order object](/campus/ibkr-api-page/twsapi-ref/#order-ref) must set “includeOvernight” set to True and optionally set the Exchange value to OVERNIGHT.

#### Routing exclusively to the Overnight market

Users that would like to route orders to [Overnight](/en/trading/ordertypes.php?m=overnightTradingModal) without trading during the regular session must set the [Order Object’s](/campus/ibkr-api-page/twsapi-ref/#order-ref) includeOvernight value as True and designate the exchange value as “OVERNIGHT”.

order = Order()
order.exchange = "OVERNIGHT"
order.includeOvernight = True

#### Routing as Overnight+DAY

Users that would like to route orders to [Overnight+DAY](/en/trading/ordertypes.php?m=overnightSmartModal) to trade during the day and the overnight session must set the [Order Object’s](/campus/ibkr-api-page/twsapi-ref/#order-ref) includeOvernight value as True and designate the exchange value as “SMART”.

order = Order()
order.exchange = "SMART"
order.includeOvernight = True

### Understanding Order Precautions

By default, the Trader Workstation implements several precautionary settings that will notify customers of potential order risks to make sure users are well informed before transmitting orders. As a result, customers will typically need to acknowledge a precautionary message and manually transmit the orders through the Trader Workstation. These precautionary messages may be disabled if the user is comfortable and aware of the behavior they are disabling.  
 

### Disabling Warning Messages

1.  Log in to the Trader Workstation
2.  Open the Global Configuration by selecting the Cog Wheel icon in the top right corner
3.  Navigate to the “Messages” section on the left.
4.  **Carefully read each message before disabling it**. You can then disable the warning by unchecking the box on the right of the message description.

### Modifying Precautionary Settings

1.  Log in to the Trader Workstation
2.  Open the Global Configuration by selecting the Cog Wheel icon in the top right corner
3.  Navigate to the “Presets” section on the left
4.  Select the instrument(s) you are trading
5.  **Carefully read each setting before making changes to it.** You may modify the values inside the “Precautionary Settings” settings to be more or less restrictive. You may also set the value to ‘0’ to disable the precaution entirely.

### Order Placement Considerations

When placing orders via the API and building a robust trading system, it is important to monitor for callback notifications, specifically for **[IBApi::EWrapper::error](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#error)**, [**IBApi:**:**EWrapper::orderStatus**](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#order-status) changes, [**IBApi::EWrapper::openOrder**](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#open-orders) warnings, and **[IBApi::EWrapper::execDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#receive-exec-details)** to ensure proper operation.

If you experience issues with orders you place via the API, such as orders not filling, the first thing to check is what these callbacks returned. Your order may have been rejected or cancelled. If needed, see the **[API Log](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#log-location)** section, for information on obtaining your API logs or submitting them for review.

Common cases of order rejections, cancellations, and warnings, and the corresponding message returned:

*   If an order is subject to a large size (LGSZ) reject, the API client would receive **Error (201)** via **[IBApi::EWrapper::error](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#error)**. The error text would indicate that order size too large and suggest another smaller size.
    *   In accordance with our regulatory obligations as a broker, we cannot accept Large Limit Orders for #### shares of ABCD that you have submitted. Please submit a smaller order (not exceeding ###) _or convert your order to an algorithmic Order (IBALGO) \[conditional on instrument\]_

*   If an order is subject to price checks the client may receive status (cancelled) + **Error (202)** via [**IBApi.EWrapper.orderStatus**](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#order-status) and **[IBApi::EWrapper::error](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#error)**. The error text would indicate the price is too far from current price.
    *   In accordance with our regulatory obligations as a broker, we cannot accept your order at the limit price ### you selected because it is too far through the market. Please submit your order using a limit price that is closer to the current market price ###

*   The client may receive warning Text via **[IBApi::EWrapper::openOrder](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#open-orders)** indicating that the order could be subject to price capping.
    *   If your order does not immediately execute, in accordance with our regulatory obligations as a broker we may, depending on market conditions, reject your order if the limit price of your order is more than allowed distance from the current reference price. This is designed to ensure that the price of your order is in line with an orderly market and reduce the impact your order has on the market. Please note that such rejection will result in you not receiving a fill.
    *   **_[mktCapPrice](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#order-status)_** – If an order has been capped, this indicates the current capped price (returned to [**IBApi.EWrapper.orderStatus**](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#open-orders))

### Pre-Borrow Shares For Shorting

The TWS API supports the ability to pre-borrow shares for shorting.

*   See [here](<About Pre-Borrows>) for Pre-Borrow Eligibility
*   See [here](https://www.interactivebrokers.com/en/pricing/other-fees.php#:~:text=Stock%20Loan-,Pre%2DBorrows,-Universal) for pricing details

To place a Pre-Borrow order, users must:

*   Assign the contract’s exchange to “PREBORROW”
*   Assign the contract’s security type to “SBL”
*   Assign the order’s orderType to “MKT”

contract = Contract()
contract.symbol = symbol
contract.secType = "SBL"
contract.exchange = "PREBORROW"
contract.currency = "USD"

order = Order()
order.action = "BUY"
order.orderType = "MKT"
order.totalQuantity = quantity

### Test Order Impact (WhatIf)

From the API it is possible to check how a specified trade execution is expected to change the account margin requirements for an account in real time. This is done by creating an Order object which has the IBApi.Order.WhatIf flag set to true. By default, the whatif boolean in Order has a false value, but if set to True in an Order object with is passed to [IBApi.EClient.placeOrder](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#place-order), instead of sending the order to a destination the IB server it will undergo a credit check for the expected post-trade margin requirement. The estimated post-trade margin requirement is returned to the IBApi.OrderState object in the [EWrapper.openOrder](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#open-orders) callback..

This is equivalent to creating a order ticket in TWS, clicking “Preview”, and viewing the information in the “Margin Impact” panel.

For example, most users want to check the margin details or available leverage of the order. Here is the example of checking the Initial Maintenance Margin Change.

Python:

def openOrder(self, orderId: OrderId, contract: Contract, order: Order, orderState: OrderState):
    print(orderId, contract, order, orderState.initMarginChange) 

.
.
.
order.whatIf = True
.
.
.
self.placeOrder(order\_id, contract, order)

Expected output:

210 152791428,700,STK,,0,?,,SEHK,,HKD,700,700,False,,,,combo: 210,1,1832692965: MKT BUY 100@0 DAY 12567.5

You can see that 12567.5 is the initMarginChange which matches the Initial Margin Change result shown in TWS Order Ticket Preview.

![Initial margin change in the Order preview window.](./images/%E6%93%B7%E5%8F%96-1-700x538.png)

Apart from InitMarginChange, there are other supported variables. For details, please visit: [https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-ref/#orderstate-ref](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-ref/#orderstate-ref)

Note:

It is not recommended for users to submit lots of what-if orders. When a user submits a what-if order for margin preview only, the request is sent to IB credit system for review. In some cases, if user(s) submit lots of what-if orders, the creditman is affected. There is no clear limitation about this what-if feature. However, if you want to use this what-if feature, please:

*   keep the ratio: 10 order submissions: 1 what-if request
*   do not overuse the what-if request (> 1 what-if request per minute)
*   cancel the what-if order after margin review

### Trigger Methods

The Trigger Method defined in the [IBApi.Order](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#order-object) class specifies how simulated stop, stop-limit, and trailling stops, and conditional orders are triggered. Valid values are:

*   0 – The default method for instrument
*   1 – “Double bid/ask” function, where stop orders are triggered based on two consecutive bid or ask prices.
*   2 – “Last” function, where stop orders are triggered based on the last price
*   3 – “Double last” function
*   4 – Bid/ask function
*   7 – Last or bid/ask function
*   8 – Mid-point function

Below is a table which indicates whether a given secType is compatible with bid/ask-driven or last-driven trigger methods (method 7 only used in iBot alerts)

| secType | Bid/Ask-driven (1, 4, 8) | Last-driven (2, 3) | Default behavior | Notes |
| --- | --- | --- | --- | --- |
| STK | yes | yes | Last | The double bid/ask is used for OTC stocks |
| CFD | yes | yes | Last |  |
| CFD – Index | yes | n/a | n/a | Ex IBUS500 |
| OPT | yes | yes | US OPT: Double bid/ask, Other: Last |  |
| FOP | yes | yes | Last |  |
| WAR | yes | yes | Last |  |
| IOPT | yes | yes | Last |  |
| FUT | yes | yes | Last |  |
| COMBO | yes | yes | Last |  |
| CASH | yes | n/a | Bid/ask |  |
| CMDTY | yes | n/a | Last |  |
| IND | n/a | yes | n/a | For conditions only |

**Important notes** :

*   If an incompatible triggerMethod and secType are used in your API order, the order may never trigger.
*   These trigger methods only apply to stop orders simulated by IB. If a stop-variant is handled natively, the trigger method specified is ignored. See our [Stop Orders](https://www.interactivebrokers.com/en/index.php?f=609) page for more information.