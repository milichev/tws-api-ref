[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [13 Synchronous API](13-sync-api.md)


## Synchronous API

With the release of TWS API 10.40, Interactive Brokers has introduced the Synchronous API Wrapper class. This class provides a synchronous API structure, combining the functionality of EClient and EWrapper into a beginner-friendly interface.

The current release is still in a Beta state, slowly rolling out only a portion of what is available in the larger Trader Workstation API configuration. The interface is exclusively available through the _Python_ programming language.

The content shown here is an example of what the Sync Wrapper structure looks like. A larger example of all current functionality is available in the 10.40 release of the TWS API under `{TWS API}/samples/Python/Testbed/sync_test.py` .

## 13 Synchronous API

```python
# Import our Sync Wrapper and Contract objects
from ibapi.sync_wrapper_alt import *
from datetime import datetime

# Instantiate the reference for our sync class
app = TWSSyncWrapper(timeout=30)

# make a connection to Trader Workstation
# In this case, we're connecting on Localhost with port 7496 and Client ID 0.
if not app.connect_and_start(host="127.0.0.1", port=7496, client_id=8675309):
    print("Failed to connect to TWS")
    exit(1)
else:
    print("Connected to TWS")
 
# Create a contract class reference.
# In our case, we'll be testing with AAPL.
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "ISLAND"
contract.currency = "USD"

'''
Contract details requests will return all contracts the match the details
of our contract object in a list. Because a list is returned, we are 
taking the first (or 0 index) contract returned. 
'''
aapl_contract = app.get_contract_details(contract)[0].contract
print(aapl_contract)

market_data = app.get_market_data_snapshot(aapl_contract)

order = Order()
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 258

order_status = app.place_order_sync(contract, order)
oid = order_status["orderId"]

print(app.get_open_orders()[oid]['orderState'].status)

print(app.cancel_order_sync(oid, OrderCancel()))

app.disconnect_and_stop()
exit()
```

#### Response Sample

```generic
ERROR -1 1761170335710 2104 Market data farm connection is OK:usbond
ERROR -1 1761170335711 2104 Market data farm connection is OK:usfarm.nj
ERROR -1 1761170335712 2104 Market data farm connection is OK:eufarm
ERROR -1 1761170335712 2104 Market data farm connection is OK:usfarm
ERROR -1 1761170335712 2106 HMDS data farm connection is OK:ushmds
ERROR -1 1761170335713 2158 Sec-def data farm connection is OK:secdefil
Connected to TWS
ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: ISLAND, Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:
{'price': {1: {'price': 258.5, 'attrib': 2076793531408: CanAutoExecute: 1, PastLimit: 0, PreOpen: 0}, 2: {'price': 258.65, 'attrib': 2076793531536: CanAutoExecute: 1, PastLimit: 0, PreOpen: 0}, 4: {'price': 258.62, 'attrib': 2076793531600: CanAutoExecute: 0, PastLimit: 0, PreOpen: 0}, 6: {'price': 262.85, 'attrib': 2076793531856: CanAutoExecute: 0, PastLimit: 0, PreOpen: 0}, 7: {'price': 255.43, 'attrib': 2076793531920: CanAutoExecute: 0, PastLimit: 0, PreOpen: 0}, 9: {'price': 262.77, 'attrib': 2076793531984: CanAutoExecute: 0, PastLimit: 0, PreOpen: 0}, 14: {'price': 262.74, 'attrib': 2076793532048: CanAutoExecute: 0, PastLimit: 0, PreOpen: 0}}, 'size': {0: Decimal('1'), 3: Decimal('5'), 5: Decimal('3'), 8: Decimal('449348')}}
PreSubmitted
{'orderId': 358, 'status': 'PreSubmitted', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 1054257323, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 8675309, 'whyHeld': '', 'mktCapPrice': 0.0}
```

### TWSSyncWrapper Class

The TWSSyncWrapper class is produced from the ibapi/sync\_wrapper file. Clients looking to utilize the class may seek to replace their typical imports for ibapi/client and ibapi/wrapper with an import for “from ibapi.sync\_wrapper import TWSSyncWrapper”.

The TWSSyncWrapper class accepts a single argument, timeout. This will provide a default timeout integer in seconds for all connected functions to work with. If no timeout is specified, a default value of 30 seconds is passed instead.

Each function supports a timeout argument for unique endpoint timeout behavior.

```python
from ibapi.sync_wrapper import TWSSyncWrapper

app = TWSSyncWrapper(timeout=30)
```

### Connect & Start Connection

After creating the class object reference with sync wrapper, connect\_and\_start() must be used to connect the Python program with the active Trader Workstation implementation. Identical to EClient’s connect() function, connect\_and\_start() supports arguments for host, port, and client\_id.

### 13.02 Connect & Start Connection

**host:** String. Determine the connecting host IP for the API to connect to. Connections on the same computer should use “localhost” or “127.0.0.1”.

**port:** Integer. Determine the connecting port number configured in the Global Configuration in the “Socket Port” field.

Defaults: {TWS Live: 7496; TWS Paper: 7497; IBG Live: 4001; IBG Paper: 4002′}

**client\_id:** Integer. Determine the connecting client ID. TWS Supports up to 32 simultaneous API connections.

Users should connect with a client\_id of 0 for [optimal order management functionality](../undefined/index.md).

#### )

```python
app.connect_and_start(host="127.0.0.1", port=7496, client_id=0)
```

#### Response Object

While it is not necessary to handle the response from connect\_and\_start(), the function will return the result of EClient.isConnected() to help with connection validation.

The function call will return a single Boolean value, True or False, in reference to the connection status at the time of reference.

Developers may look to implement code such as this that will gracefully handle the connection procedure should it fail to connect rather than proceeding with the rest of the code implementation.

```python
# Connect to TWS
# If the connection succeeded, notify the user.
# If the connection fails and False is returned, notify the user and gracefully exit the application.
if not app.connect_and_start(host="127.0.0.1", port=7496, client_id=0):
    print("Failed to connect to TWS")
    exit(1)
else:
    print("Connected to TWS")
```

### Disconnect & Stop Connection

Once a connection is no longer needed, developers should disconnect the session. This will terminate all ongoing requests through the class’s client\_id. Connections through any other client ID or port will be unaffected.

### 13.03 Disconnect & Stop Connection

```python
app.disconnect_and_stop()
```

The function call does not return after calling. As a result, None is automatically passed in the event the function is referenced.

### Current Time

Whenever a user would need to verify the current time used within Trader Workstation or to verify the connection with the application, users may call the get\_current\_time() function.

### 13.04 Current Time

**timeout:** Integer. Timeout before the request disconnects. Function-specific timeout default of 1 second.

)

```python
app.get_current_time()
```

#### Response Object

get\_current\_time() will return the current timestamp as an integer representing an epoch timestamp.

```python
1760478515
```

### Next Valid ID

Requests should utilize an unique identifier after each request is submitted.

The same order identifier cannot be reused except to modify an existing order.

### 13.05 Next Valid ID

**timeout:** Integer. Uses default timeout value passed to TWSSyncClass.

#### )

```python
app.get_next_valid_id()
```

#### Response Object

Requests to the get\_next\_valid\_id() function will return the next valid order ID, which may be used in order submission.

```python
123456789
```

### Account Summary

The get\_account\_summary() function returns all relevant account details identical to Trader Workstation’s “Account” window. Users may query to receive all available data or a narrow window based on the [Account Summary Tag](../undefined/index.md).

### 13.06 Account Summary

**tags:** String. Account summary key value to receive data for. See [Account Summary Tags](../undefined/index.md) for details.

**group:** String. Indicates a Financial Advisor’s allocation group to reference account details for. Non-advisor account structures should always pass “All”.

Default value passed, “All”.

**timeout:** Integer. Timeout before the request disconnects. Function-specific timeout default of 5 second.

#### )

```python
from ibapi.account_summary_tags import AccountSummaryTags

app.get_account_summary(AccountSummaryTags.AllTags, "All")
```

Total size of the request may vary depending on number of accounts held in the account, and the number of tags requested.

#### Response Object

**{AccountId}:** Dictionary. Contains all tag value pairs for the designated accountId.

{

**{Tag}:** Dictionary. Contains the value of the affiliated tag along with the relevant currency.

**value:** String. Contains the alphanumeric value affiliated with the designated tag.

**currency:** String. Returns the currency used to denote the value. May return an empty string if returning value does not contain a price.

}

```json
{'U1234567': {'AccountType': {'value': 'LLC', 'currency': ''}, 'Cushion': {'value': '0.993764', 'currency': ''}, 'DayTradesRemaining': {'value': '-1', 'currency': ''}, 'LookAheadNextChange': {'value': '1760558400', 'currency': ''}, 'AccruedCash': {'value': '262079.00', 'currency': 'USD'}, 'AvailableFunds': {'value': '219944453.18', 'currency': 'USD'}, 'BuyingPower': {'value': '1466299088.69', 'currency': 'USD'}, 'EquityWithLoanValue': {'value': '221042710.95', 'currency': 'USD'}, 'ExcessLiquidity': {'value': '220044618.70', 'currency': 'USD'}, 'FullAvailableFunds': {'value': '219944453.18', 'currency': 'USD'}, 'FullExcessLiquidity': {'value': '220044618.70', 'currency': 'USD'}, 'FullInitMarginReq': {'value': '1101020.27', 'currency': 'USD'}, 'FullMaintMarginReq': {'value': '1000859.00', 'currency': 'USD'}, 'GrossPositionValue': {'value': '2982965.22', 'currency': 'USD'}, 'InitMarginReq': {'value': '1101020.27', 'currency': 'USD'}, 'LookAheadAvailableFunds': {'value': '219944453.18', 'currency': 'USD'}, 'LookAheadExcessLiquidity': {'value': '220044618.70', 'currency': 'USD'}, 'LookAheadInitMarginReq': {'value': '1101020.27', 'currency': 'USD'}, 'LookAheadMaintMarginReq': {'value': '1000859.00', 'currency': 'USD'}, 'MaintMarginReq': {'value': '1000859.00', 'currency': 'USD'}, 'NetLiquidation': {'value': '221425500.56', 'currency': 'USD'}, 'PreviousDayEquityWithLoanValue': {'value': '205659145.23', 'currency': 'USD'}, 'TotalCashValue': {'value': '218181198.71', 'currency': 'USD'}}
```

### Contract Details

Interactive Brokers trading is centered around [Contract Objects](../undefined/index.md). This is used when submitting requests for market data, retrieving position information, and placing orders. The Synchronous Wrapper utilizes the same [Contract Object](../undefined/index.md) as the standard TWS API.

Passing as much known information through a Contract Details will return all contracts that match the requesting information. At a minimum, the Contract ID, or Symbol and Security Type must be passed for contract discovery.

### 13.07 Contract Details

**contract:** [Contract Object](../undefined/index.md). Contract details you are searching for.

**timeout:** Integer. Timeout before the request disconnects. Function-specific timeout default of 5 second.

#### )

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"

app.get_contract_details(contract=contract)
```

#### Response Object

The get\_contract\_details() function will return a list of [Contract](../undefined/index.md) objects.  
Unless a relatively narrow scope is provided during the initial contract details request, multiple contract objects may be returned within the list. Please be aware that directly printing this information may result in the memory address being displayed.

```python
[3039334541648: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: ISLAND, Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:,NMS,0.01,ACTIVETIM,AD,ADDONT,ADJUST,ALERT,ALGO,ALLOC,AON,AVGCOST,BASKET,BENCHPX,CASHQTY,COND,CONDORDER,DARKONLY,DARKPOLL,DAY,DEACT,DEACTDIS,DEACTEOD,DIS,DUR,GAT,GTC,GTD,GTT,HID,IBKRATS,ICE,IMB,IOC,LIT,LMT,LOC,MIDPX,MIT,MKT,MOC,MTL,NGCOMB,NODARK,NONALGO,OCA,OPG,OPGREROUT,PEGBENCH,PEGMID,POSTATS,POSTONLY,PREOPGRTH,PRICECHK,REL,REL2MID,RELPCTOFS,RPI,RTH,SCALE,SCALEODD,SCALERST,SIZECHK,SMARTSTG,SNAPMID,SNAPMKT,SNAPREL,STP,STPLMT,SWEEP,TRAIL,TRAILLIT,TRAILLMT,TRAILMIT,WHATIF,SMART,AMEX,NYSE,CBOE,PHLX,ISE,CHX,ARCA,ISLAND,DRCTEDGE,BEX,BATS,EDGEA,BYX,IEX,EDGX,FOXRIVER,PEARL,NYSENAT,LTSE,MEMX,IBEOS,OVERNIGHT,TPLUS0,PSX,T24X,1,0,APPLE INC,,Technology,Computers,Computers,US/Eastern,20251015:0400-20251015:2000;20251016:0400-20251016:2000;20251017:0400-20251017:2000;20251018:CLOSED;20251019:CLOSED;20251020:0400-20251020:2000,20251015:0930-20251015:1600;20251016:0930-20251016:1600;20251017:0930-20251017:1600;20251018:CLOSED;20251019:CLOSED;20251020:0930-20251020:1600,,0,,,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,1,[3039334542544: ISIN=US0378331005;],,COMMON,,,,,,False,False,0,False,,,,,False,,0.0001,0.0001,100,None,,,, 3039334543504: ConId: 273982664,...]
```

### Live Market Data

Users may request market data using get\_market\_data\_snapshot() to retrieve available market data.  
The request currently supports [tickPrice, tickSize, tickString, tickGeneric, tickNews, and tickOptionCompution](../undefined/index.md) data.

### 13.08 Live Market Data

**contract:** [Contract Object](../undefined/index.md). Contract to retrieve market data for.

**generic\_tick\_list:** String. String containing comma-separate values to determine addition data to retrieve.

Default: Automatically sends an empty string, returning only the basic data such as Last, Bid, and Ask. See [Available Tick Types](../undefined/index.md) for more details.

**snapshot:** Boolean. Determine if a single snapshot should be returned or if data should be continuously updated until the timeout threshold has been reached.

Default: Set to True, returning a snapshot of data as soon as possible.

**timeout:** Integer. Uses default timeout value passed to TWSSyncClass.

#### )

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

market_data = app.get_market_data_snapshot(contract, "225,232", False)
```

Data returned by get\_market\_data\_snapshot() is delivered as a json dictionary object, separating data into “price” and “size” tags. Values are then returned as the affiliated tick types alongside any price or attribute data.

#### Response Object

{

**{TickType}:** Integer, Float String. The value of the tag. Can include price values (Float), Size values (Decimal), or direct information (string).

}

```JSON
{'BID': 276.17, 'BID_SIZE': Decimal('900'), 'ASK': 276.2, 'ASK_SIZE': Decimal('300'), 'LAST_TIMESTAMP': '1764009996', 'LAST': 276.18, 'LAST_SIZE': Decimal('100'), 'VOLUME': Decimal('271511')}
```

### Historical Market Data

### 13.09 Historical Market Data

**contract:** [Contract Object](../undefined/index.md). Contract to retrieve market data for.

**end\_date\_time:** String. The request’s end date and time. This should be formatted as “YYYYMMDD HH:mm:ss TMZ”. You may also pass an empty string to indicate the current moment  
Please be aware that endDateTime must be left as an empty string when requesting continuous futures contracts or certain whatToShow values like ADJUSTED\_LAST.

**duration\_str:** String. The total timespan the bars should cover. See [Duration](../undefined/index.md) for details.

**bar\_size\_setting:** String. The time span covered by each bar. See [Bar Sizes](../undefined/index.md) for details.

**what\_to\_show:** String. Determines what kind of data should be returned. See [whatToShow](../undefined/index.md) for more details.

**use\_rth:** Boolean. Define if data should only be returned from the regular trading session or if extended trading hours should be included.

Default: True is passed by default, only returning data from the regular trading sesions.

**format\_date:** Integer. Determine the return structure of the date. Supports (1) to return a datetime formatting string or 2 to return a epoch Unix timestamp.

Default: Set to 1, returning a datetime string.

**timeout:** Integer. A default value of 30 is supplied.

#### )

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

app.get_historical_data(contract=contract, end_date_time="", duration_str="1 W", bar_size_setting="1 day", what_to_show="TRADES", use_rth=True)
```

#### Response Object

Requesting historical bars will return return a list containing all [Bar](../undefined/index.md) objects for the duration. Please be aware that directly printing this information may result in the memory address being displayed.

```python
[2524872613328: Date: 20251013, Open: 249.31, High: 249.69, Low: 245.56, Close: 247.66, Volume: 187465.43, WAP: 247.952, BarCount: 105768, 2524872614864: Date: 20251014, Open: 246.6, High: 248.85, Low: 244.7, Close: 247.77, Volume: 176034.99, WAP: 247.21, BarCount: 100507, 2524872615120: Date: 20251015, Open: 249.49, High: 251.82, Low: 247.47, Close: 249.34, Volume: 172136.46, WAP: 249.754, BarCount: 96331, 2524872615248: Date: 20251016, Open: 248.28, High: 249.04, Low: 245.13, Close: 247.45, Volume: 235179.94, WAP: 247.351, BarCount: 132811, 2524872615376: Date: 20251017, Open: 248.08, High: 253.38, Low: 247.27, Close: 252.29, Volume: 260673.48, WAP: 250.408, BarCount: 125863]
```

### Place Order

### 13.10 Place Order

**contract:** [Contract Object](../undefined/index.md). Contract to trade.

**order:** [Order Object](../undefined/index.md). Order parameters to be traded.

**timeout:** Integer. Uses default timeout value passed to TWSSyncClass. Please be aware the timeout is only relevant for the response details. The order will submit in accordance with the order object’s details.

#### )

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

order = Order()
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 250

app.place_order_sync(contract, order)
```

Upon placing an order, a dictionary containing all of the order status’s information will be returned. As the response is static, refer to the [get\_open\_orders](../undefined/index.md) function more more details on the current order status.

#### Response Object

{  
orderId: Integer. The identifier for the order. Relevant for order tracking, modification, and cancellation.  
status: String. The current status of the order. See [Order Status](../undefined/index.md) for more details.  
filled: Decimal. The total quantity of executed shares for the order.  
remaining: Decimal. The total quantity of shares that have yet to execute for the order.  
avgFillPrice: Float. The average execution price across fills.  
permId: Integer. The permanent identifier for the order. This is calculated based on orderId and client ID for internal order tracking.  
parentId: Integer. The orderId for the parent of this contract. Will return 0 unless trading a [bracket or](/campus/ibkr-api-page/order-types/#bracket-orders) [OCA](/campus/ibkr-api-page/order-types/#one-cancels-all-orders) order.  
lastFillPrice: Float. The price of the most recent execution for the order.  
clientId: Integer. The identifier for which client ID the order was placed through. Orders can only be cancelled or modified by their on the [clientId they are bound to](../undefined/index.md).  
whyHeld: String. In the event an order is held instead of being transmitted, the reason will be documented here.  
mktCapPrice: Float. If an order is capped due to it exceeding the market price and the price is automatically modified, the modified price will be returned. Otherwise 0.0 is displayed.  
}  
 

```python
{'orderId': 347, 'status': 'PreSubmitted', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 979867961, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 8675309, 'whyHeld': '', 'mktCapPrice': 0.0}
```

### Cancel Order

### 13.11 Cancel Order

**order\_id:** Integer. Identifier for the order to cancel. Retrieved from the original [Order Placement](../undefined/index.md) or [get\_open\_orders()](../undefined/index.md).

**order:** [OrderCancel Object](../undefined/index.md). Order cancellation parameters.

**timeout:** Integer. A default value of 3 seconds is supplied.

#### )

```python
app.cancel_order_sync(347, OrderCancel())
```

Upon cancellingan order, a dictionary containing all of the order status’s information will be returned. As the response is static, refer to the [get\_open\_orders](../undefined/index.md) function more more details on the current order status.

#### Response Object

{

**orderId:** Integer. The identifier for the order. Relevant for order tracking, modification, and cancellation.

**status:** String. The current status of the order. See [Order Status](../undefined/index.md) for more details.

**filled:** Decimal. The total quantity of executed shares for the order.

**remaining:** Decimal. The total quantity of shares that have yet to execute for the order.

**avgFillPrice:** Float. The average execution price across fills.

**permId:** Integer. The permanent identifier for the order. This is calculated based on orderId and client ID for internal order tracking.

**parentId:** Integer. The orderId for the parent of this contract. Will return 0 unless trading a [bracket](/campus/ibkr-api-page/order-types/#bracket-orders) or [OCA](/campus/ibkr-api-page/order-types/#one-cancels-all-orders) order.

**lastFillPrice:** Float. The price of the most recent execution for the order.

**clientId:** Integer. The identifier for which client ID the order was placed through. Orders can only be cancelled or modified by their on the [clientId](../undefined/index.md) they are bound to.

**whyHeld:** String. In the event an order is held instead of being transmitted, the reason will be documented here.

**mktCapPrice:** Float. If an order is capped due to it exceeding the market price and the price is automatically modified, the modified price will be returned. Otherwise 0.0 is displayed.

}

```python
{'orderId': 347, 'status': 'PendingCancel', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 1395073938, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 8675309, 'whyHeld': '', 'mktCapPrice': 0.0}
```

### Open Orders

### 13.12 Open Orders

**timeout:** Integer. A default value of 3 seconds is supplied.

#### )

```python
app.get_open_orders()
```

All orders from the current day’s trading session are returned in a dictionary, using the orderId as the key to discover the specific order.

#### Response Object

{  
{Order ID}: Dictionary. Returns the [Contract](../undefined/index.md), [Order](../undefined/index.md), and [OrderState](../undefined/index.md) objects of the affiliated orderId.  
{  
orderId: Integer. The identifier for the order. Relevant for order tracking, modification, and cancellation.

**contract:** [Contract Object](../undefined/index.md). Contract to trade.

**order:** [Order Object](../undefined/index.md). Parameters for the given order to execute.

**orderState:** [OrderState Object](../undefined/index.md). Current state of the order. Contains margin impact and status details.

}  
 

```python
{351: {'orderId': 351, 'contract': 2172957720272: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: , Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'order': 2172957719120: 351,8675309,979867965: LMT BUY 100@800 GTC, 'orderState': }}
```

### Executions

Request all executions following the Execution Filter’s restrictions.

### 13.13 Executions

**exec\_filter:** [ExecutionFilter Object](../undefined/index.md). Parameters to restrict the Execution data to be returned.

**timeout:** Integer. A default value of 10 seconds is supplied.

#### )

```python
app.get_open_orders()
```

All executions passed in the context of the ExecutionFilter are returned in a list.

#### Response Object

\[{

**contract:** [Contract Object](../undefined/index.md). Contract to trade.

**execution:** [Execution Object](../undefined/index.md). Execution details regarding the recent trade.

}\]  
 

```python
[{'contract': 1530250139984: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: IEX, PrimaryExchange: , Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'execution': 1530250140432: ExecId: 0000e0d5.68fa9014.01.01, Time: 20251022 14:56:24 US/Eastern, Account: U1234567, Exchange: IEX, Side: BOT, Shares: 100, Price: 256.62, PermId: 1395073936, ClientId: 8675309, OrderId: 355, Liquidation: 0, CumQty: 100, AvgPrice: 256.62, OrderRef: , EvRule: , EvMultiplier: 0, ModelCode: , LastLiquidity: 2, PendingPriceRevision: False, Submitter: csdem9545, OptExerciseOrLapseType: None}]
```

### Positions

Request positions for all accounts available to the user.

### 13.14 Positions

**timeout:** Integer. A default value of 10 seconds is supplied.

#### )

```python
app.get_positions()
```

All orders from the current day’s trading session are returned in a dictionary, using the orderId as the key to discover the specific order.

#### Response Object

{  
{Account ID}: List. List of all contracts  
\[{

**contract:** [Contract Object](../undefined/index.md). Contract to trade.

**position:** Decimal. The total number of shares held in the account.

**avgCost:** Float. The average price across executions for the position.

}\]  
 

```python
{'U1234567': [{'contract': 2333839861008: ConId: 340216238, Symbol: COIL, SecType: FUT, LastTradeDateOrContractMonth: 20251031, Strike: 0, Right: , Multiplier: 1000, Exchange: IPE, PrimaryExchange: , Currency: , LocalSymbol: COILZ5, TradingClass: COIL, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'position': Decimal('4'), 'avgCost': 61359.9}]}
```

### Portfolio

Request portfolio details for the selected account or accounts available to the user.

### 13.15 Portfolio

**account\_code:** String. The accountID to pull portfolio information for. If an empty string is passed, all accounts are requested.

**timeout:** Integer. A default value of 10 seconds is supplied.

#### )

```python
app.get_portfolio("")
```

#### Response Object

{  
{Account ID}: List. List of all contracts  
\[{

**contract:** [Contract Object](../undefined/index.md). Contract to trade.

**position:** Decimal. The total number of shares held in the account.

**marketPrice:** Float. The current market price of the instrument.

**marketValue:** Float. The current value of the total position.

**averageCost:** Float. The average price across executions for the position.

**unrealizedPNL:** Float. The unrealized profit and loss for the instrument.

**realizedPNL:** Float. The realized profit and loss for the instrument.

**accountName:** String. The account identifier that holds the given position.

}\]  
 

```python
[{'contract': 1957652380880: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: ISLAND, PrimaryExchange: , Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'position': Decimal('202635'), 'marketPrice': 258.57998655, 'marketValue': 52397355.58, 'averageCost': 263.3360764, 'unrealizedPNL': -963750.26, 'realizedPNL': 0.0, 'accountName': 'DU5240685'}]
```
