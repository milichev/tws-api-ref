[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [Client Module](02-client.md)


# Client Module

### Start API Connection

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates the API connection. Requires client ID and optional capabilities.

```python
def startApi(self):
        self.send(71, 2, self.clientId, self.optCapab)
```

---

### Get Server Version

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Returns the current server version of the Interactive Brokers API. This is useful for compatibility checks.

```python
def serverVersion(self) -> int:
        return self._serverVersion

```

---

### Get Managed Account Names

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves the list of account names currently under management. Raises ConnectionError if not connected.

```python
def getAccounts(self) -> list[str]:
        """Get the list of account names that are under management."""
        if not self.isReady():
            raise ConnectionError("Not connected")
        return self._accounts
```

---

### Run Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Starts the asyncio event loop, which is necessary for the client to process network events and run asynchronously. This method blocks until the loop is stopped.

```python
def run(self):
        loop = getLoop()
        loop.run_forever()

```

---

### Initialize ib_async Client

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initializes the asynchronous client with a wrapper object. It sets up event handlers and internal state for connection management and request throttling.

```python
class Client:
    """
    Replacement for ``ibapi.client.EClient`` that uses asyncio.

    The client is fully asynchronous and has its own
    event-driven networking code that replaces the
    networking code of the standard EClient.
    It also replaces the infinite loop of ``EClient.run()``
    with the asyncio event loop. It can be used as a drop-in
    replacement for the standard EClient as provided by IBAPI.

    Compared to the standard EClient this client has the following
    additional features:

    * ``client.connect()`` will block until the client is ready to
      serve requests; It is not necessary to wait for ``nextValidId``
      to start requests as the client has already done that.
      The reqId is directly available with :py:meth:`.getReqId()`.

    * ``client.connectAsync()`` is a coroutine for connecting asynchronously.

    * When blocking, ``client.connect()`` can be made to time out with
      the timeout parameter (default 2 seconds).

    * Optional ``wrapper.priceSizeTick(reqId, tickType, price, size)`` that
      combines price and size instead of the two wrapper methods
      priceTick and sizeTick.

    * Automatic request throttling.

    * Optional ``wrapper.tcpDataArrived()`` method;
      If the wrapper has this method it is invoked directly after
      a network packet has arrived.
      A possible use is to timestamp all data in the packet with
      the exact same time.

    * Optional ``wrapper.tcpDataProcessed()`` method;
      If the wrapper has this method it is invoked after the
      network packet's data has been handled.
      A possible use is to write or evaluate the newly arrived data in
      one batch instead of item by item.

    Parameters:
      MaxRequests (int):
        Throttle the number of requests to ``MaxRequests`` per
        ``RequestsInterval`` seconds. Set to 0 to disable throttling.
      RequestsInterval (float):
        Time interval (in seconds) for request throttling.
      MinClientVersion (int):
        Client protocol version.
      MaxClientVersion (int):
        Client protocol version.

    Events:
      * ``apiStart`` ()
      * ``apiEnd`` ()
      * ``apiError`` (errorMsg: str)
      * ``throttleStart`` ()
      * ``throttleEnd`` ()
    """

    events = ("apiStart", "apiEnd", "apiError", "throttleStart", "throttleEnd")

    MaxRequests = 45
    RequestsInterval = 1

    MinClientVersion = 157
    MaxClientVersion = 178

    DISCONNECTED, CONNECTING, CONNECTED = range(3)

    def __init__(self, wrapper):
        self.wrapper = wrapper
        self.decoder = Decoder(wrapper, 0)
        self.apiStart = Event("apiStart")
        self.apiEnd = Event("apiEnd")
        self.apiError = Event("apiError")
        self.throttleStart = Event("throttleStart")
        self.throttleEnd = Event("throttleEnd")
        self._logger = logging.getLogger("ib_async.client")

        self.conn = Connection()
        self.conn.hasData += self._onSocketHasData
        self.conn.disconnected += self._onSocketDisconnected

        # extra optional wrapper methods
        self._priceSizeTick = getattr(wrapper, "priceSizeTick", None)
        self._tcpDataArrived = getattr(wrapper, "tcpDataArrived", None)
        self._tcpDataProcessed = getattr(wrapper, "tcpDataProcessed", None)

        self.host = ""
        self.port = -1
        self.clientId = -1
        self.optCapab = ""
        self.connectOptions = b""
        self.reset()

```

---

### Get New Request ID

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Generates and returns a new unique request ID. Raises a ConnectionError if the client is not connected.

```python
def getReqId(self) -> int:
        """Get new request ID."""
        if not self.isReady():
            raise ConnectionError("Not connected")

        newId = self._reqIdSeq
        self._reqIdSeq += 1
        return newId
```

---

### Get Connection Statistics

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves statistics about the current connection, such as the number of messages received and bytes transferred. Requires the API to be ready.

```python
def connectionStats(self) -> ConnectionStats:
        """Get statistics about the connection."""
        if not self.isReady():

```

---

### IBKR Message Sending with Throttling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Manages sending messages to the IBKR connection, implementing request throttling to respect server limits. Emits signals for throttling start and end.

```python
def sendMsg(self, msg: str):
        loop = getLoop()
        t = loop.time()
        times = self._timeQ
        msgs = self._msgQ
        while times and t - times[0] > self.RequestsInterval:
            times.popleft()

        if msg:
            msgs.append(msg)

        while msgs and (len(times) < self.MaxRequests or not self.MaxRequests):
            msg = msgs.popleft()
            self.conn.sendMsg(self._prefix(msg.encode()))
            times.append(t)
            if self._logger.isEnabledFor(logging.DEBUG):
                self._logger.debug(">>> %s", msg[:-1].replace("\0", ","))

        if msgs:
            if not self._isThrottling:
                self._isThrottling = True
                self.throttleStart.emit()
                self._logger.debug("Started to throttle requests")
            loop.call_at(times[0] + self.RequestsInterval, self.sendMsg, None)
        else:
            if self._isThrottling:
                self._isThrottling = False
                self.throttleEnd.emit()
                self._logger.debug("Stopped to throttle requests")
```

---

### Place Order (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Use `placeOrder` to submit orders to the exchange. It requires an `orderId`, `contract` details, and an `order` object. A workaround for IBKR's 'volatility' field bug is included.

```python
def placeOrder(self, orderId, contract, order):
    version = self.serverVersion()

    # IBKR API BUG FIX:
    # IBKR sometimes back-populates the 'volatility' field into live orders, but then if we try to
    # modify an order using cached order objects, IBKR rejects modifications because 'volatility'
    # is not allowed to be set (even though _they_ added it to our previously submitted order).
    # Solution: if an order is NOT a VOL order, delete the 'volatility' value to prevent this error.
    if not order.orderType.startswith("VOL"):
        # ONLY volatility orders can have 'volatility' set when sending API data.
        order.volatility = None

    # The IBKR API protocol is just a series of in-order arguments denoted by position.
    # The upstream API parses all fields based on the first value (the message type).
    fields = [
        3,  # PLACE_ORDER message type
        orderId,
        contract,
        contract.secIdType,
        contract.secId,
        order.action,
        order.totalQuantity,
        order.orderType,
        order.lmtPrice,
        order.auxPrice,
        order.tif,
        order.ocaGroup,
        order.account,
        order.openClose,
        order.origin,
        order.orderRef,
        order.transmit,
        order.parentId,
        order.blockOrder,
        order.sweepToFill,
        order.displaySize,
        order.triggerMethod,
        order.outsideRth,
        order.hidden,
    ]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [
                leg.conId,
                leg.ratio,
                leg.action,
                leg.exchange,
                leg.openClose,
                leg.shortSaleSlot,
                leg.designatedLocation,
                leg.exemptCode,
            ]

        legs = order.orderComboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.price]

        params = order.smartComboRoutingParams or []
        fields += [len(params)]
        for param in params:
            fields += [param.tag, param.value]

    fields += [
        "",
        order.discretionaryAmt,
        order.goodAfterTime,
        order.goodTillDate,
        order.faGroup,
        order.faMethod,
        order.faPercentage,
    ]

    if version < 177:
        fields += [order.faProfile]

    fields += [
        order.modelCode,
        order.shortSaleSlot,
        order.designatedLocation,
        order.exemptCode,
        order.ocaType,
        order.rule80A,
        order.settlingFirm,
        order.allOrNone,
        order.minQty,
        order.percentOffset,
        order.eTradeOnly,  # always False
        order.firmQuoteOnly,  # always False
        order.nbboPriceCap,  # always UNSET
        order.auctionStrategy,
        order.startingPrice,
        order.stockRefPrice,
        order.delta,
    ]
    self.send(*fields)
```

---

### Connection Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Method for setting additional connection options.

```APIDOC
## POST /connectOptions

### Description
Set additional connect options for the client connection.

### Method
POST

### Endpoint
/connectOptions

### Parameters
#### Query Parameters
- **connectOptions** (string) - Required - Additional options string. Use "+PACEAPI" to enable request-pacing for TWS/gateway 974+ (obsolete).

### Request Example
```json
{
  "connectOptions": "+PACEAPI"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates that connection options have been set.

#### Response Example
```json
{
  "status": "Connection options set"
}
```
```

---

### Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Utility methods for retrieving IDs and setting server log levels.

```APIDOC
## POST /api/ids/req

### Description
Requests a specified number of unique IDs.

### Method
POST

### Endpoint
/api/ids/req

### Parameters
#### Request Body
- **numIds** (integer) - Required - The number of IDs to request.

### Request Example
```json
{
  "numIds": 10
}
```

### Response
#### Success Response (200)
- **ids** (array) - An array of unique IDs.

#### Response Example
```json
{
  "ids": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
}
```
```

```APIDOC
## POST /api/server-log-level/set

### Description
Sets the server log level.

### Method
POST

### Endpoint
/api/server-log-level/set

### Parameters
#### Request Body
- **logLevel** (integer) - Required - The desired log level (e.g., 0: SYSTEM, 1: FUNDAMENTAL DATA, 2: DATA TYPE 2, etc.).

### Request Example
```json
{
  "logLevel": 1
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

---

### Set Additional Connection Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sets additional connection options as a string, which will be encoded to bytes. Use '+PACEAPI' for request-pacing with TWS/gateway 974+ (obsolete).

```python
def setConnectOptions(self, connectOptions: str):
        """
        Set additional connect options.

        Args:
            connectOptions: Use "+PACEAPI" to use request-pacing built
                into TWS/gateway 974+ (obsolete).
        """
        self.connectOptions = connectOptions.encode()
```

---

### Check API Readiness

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Indicates whether the API connection is fully established and ready to serve requests. This is typically true after a successful connection and handshake.

```python
def isReady(self) -> bool:
        """Is the API connection up and running?"""
        return self._apiReady

```

---

### Request Market Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Use `reqMktData` to request real-time market data. It accepts a contract object and various options for data granularity and snapshots. Ensure the contract object is correctly populated.

```python
def reqMktData(
    self,
    reqId,
    contract,
    genericTickList,
    snapshot,
    regulatorySnapshot,
    mktDataOptions,
):
    fields = [1, 11, reqId, contract]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.conId, leg.ratio, leg.action, leg.exchange]

    dnc = contract.deltaNeutralContract
    if dnc:
        fields += [True, dnc.conId, dnc.delta, dnc.price]
    else:
        fields += [False]

    fields += [genericTickList, snapshot, regulatorySnapshot, mktDataOptions]
    self.send(*fields)
```

---

### Request Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests all open positions for the connected account. No parameters are needed.

```python
def reqPositions(self):
        self.send(61, 1)
```

---

### Request Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests financial advisor configuration data. Requires a `faData` type specifier.

```python
def requestFA(self, faData):
        self.send(18, 1, faData)
```

---

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests the available parameters for market scanner subscriptions.

```python
def reqScannerParameters(self):

```

---

### Request News Providers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of available news providers. No parameters are needed.

```python
def reqNewsProviders(self):
        self.send(85)
```

---

### Connect to IB Gateway/TWS

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Establishes a connection to a running TWS or IB gateway application. Handles connection timeouts and logs connection status. Ensure the API port is open on TWS/IBG.

```python
def connect(self, host: str, port: int, clientId: int, timeout: float | None = 2.0):
        """Connect to a running TWS or IB gateway application.

        Args:
            host: Host name or IP address.
            port: Port number.
            clientId: ID number to use for this client; must be unique per
                connection.
            timeout: If establishing the connection takes longer than
                ``timeout`` seconds then the ``asyncio.TimeoutError`` exception
                is raised. Set to 0 to disable timeout.
        """
        run(self.connectAsync(host, port, clientId, timeout))
```

```python
async def connectAsync(self, host, port, clientId, timeout=2.0):
        try:
            self._logger.info(
                f"Connecting to {host}:{port} with clientId {clientId}..."
            )
            self.host = host
            self.port = int(port)
            self.clientId = int(clientId)
            self.connState = Client.CONNECTING
            timeout = timeout or None
            await asyncio.wait_for(self.conn.connectAsync(host, port), timeout)
            self._logger.info("Connected")
            msg = b"API\0" + self._prefix(
                b"v%d..%d%s" 
                % (
                    self.MinClientVersion,
                    self.MaxClientVersion,
                    b" " + self.connectOptions if self.connectOptions else b"",
                )
            )
            self.conn.sendMsg(msg)
            await asyncio.wait_for(self.apiStart, timeout)
            self._logger.info("API connection ready")
        except BaseException as e:
            self.disconnect()
            msg = f"API connection failed: {e!r}"
            self._logger.error(msg)
            self.apiError.emit(msg)
            if isinstance(e, ConnectionRefusedError):
                self._logger.error("Make sure API port on TWS/IBG is open")
            raise
```

---

### Request Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a summary of account information. Requires a request ID, group name, and a list of tags.

```python
def reqAccountSummary(self, reqId, groupName, tags):
        self.send(62, 1, reqId, groupName, tags)
```

---

### Request Smart Components

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests smart component information for a given exchange. Requires a request ID and the exchange.

```python
def reqSmartComponents(self, reqId, bboExchange):
        self.send(83, reqId, bboExchange)
```

---

### Request All Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests all currently open orders associated with the account.

```python
def reqAllOpenOrders(self):
        self.send(16, 1)
```

---

### Verify Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a verification request for API authentication. Requires API name and version.

```python
def verifyRequest(self, apiName, apiVersion):
        self.send(65, 1, apiName, apiVersion)
```

---

### Account and Order Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Methods for managing account updates, open orders, and financial advisor configurations.

```APIDOC
## POST /api/accounts/updates

### Description
Requests updates for account information. Allows subscribing or unsubscribing to account data.

### Method
POST

### Endpoint
/api/accounts/updates

### Parameters
#### Query Parameters
- **subscribe** (boolean) - Required - Whether to subscribe to account updates.
- **acctCode** (string) - Required - The account code for which to request updates.

### Request Example
```json
{
  "subscribe": true,
  "acctCode": "DU12345"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the request.

#### Response Example
```json
{
  "status": "success"
}
```
```

```APIDOC
## POST /api/orders/open

### Description
Requests all currently open orders.

### Method
POST

### Endpoint
/api/orders/open

### Parameters
None

### Response
#### Success Response (200)
- **orders** (array) - A list of open orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 1,
      "symbol": "AAPL",
      "quantity": 100,
      "price": 150.00
    }
  ]
}
```
```

```APIDOC
## POST /api/fa/request

### Description
Requests financial advisor configuration data.

### Method
POST

### Endpoint
/api/fa/request

### Parameters
#### Request Body
- **faData** (string) - Required - Specifies the type of FA data to request (e.g., 'P', 'M', 'F').

### Request Example
```json
{
  "faData": "P"
}
```

### Response
#### Success Response (200)
- **data** (string) - The requested financial advisor data.

#### Response Example
```json
{
  "data": "<XML_DATA>"
}
```
```

```APIDOC
## POST /api/fa/replace

### Description
Replaces financial advisor configuration data.

### Method
POST

### Endpoint
/api/fa/replace

### Parameters
#### Request Body
- **reqId** (integer) - Required - The request ID.
- **faData** (string) - Required - Specifies the type of FA data to replace.
- **cxml** (string) - Required - The XML content for the new FA configuration.

### Request Example
```json
{
  "reqId": 1,
  "faData": "P",
  "cxml": "<XML_DATA>"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the replacement.

#### Response Example
```json
{
  "status": "success"
}
```
```

```APIDOC
## POST /api/orders/auto-open

### Description
Enables or disables auto-binding of orders.

### Method
POST

### Endpoint
/api/orders/auto-open

### Parameters
#### Request Body
- **bAutoBind** (boolean) - Required - True to enable auto-binding, False to disable.

### Request Example
```json
{
  "bAutoBind": true
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

```APIDOC
## POST /api/accounts/managed

### Description
Requests a list of managed accounts.

### Method
POST

### Endpoint
/api/accounts/managed

### Parameters
None

### Response
#### Success Response (200)
- **accounts** (array) - A list of managed account codes.

#### Response Example
```json
{
  "accounts": ["DU12345", "DU67890"]
}
```
```

---

### Request Open Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sends a request to the API to retrieve all currently open orders. This function requires no arguments.

```python
def reqOpenOrders(self):
        self.send(5, 1)
```

---

### Place Order API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function is used to place various types of orders with detailed parameters. It handles different order types, conditions, and advanced settings based on the API version.

```APIDOC
## Place Order API

### Description
This function is used to place various types of orders with detailed parameters. It handles different order types, conditions, and advanced settings based on the API version.

### Method
POST (Implied by `self.send`)

### Endpoint
Not explicitly defined, but part of the IB API.

### Parameters
This function takes a single `order` object and a `contract` object as input, along with an optional `version` parameter.

#### Request Body
(Details are inferred from the code's field population)
- **order.stockRangeLower** (double) - Optional - Lower bound for stock range.
- **order.stockRangeUpper** (double) - Optional - Upper bound for stock range.
- **order.overridePercentageConstraints** (bool) - Optional - Whether to override percentage constraints.
- **order.volatility** (double) - Optional - Volatility value.
- **order.volatilityType** (int) - Optional - Type of volatility.
- **order.deltaNeutralOrderType** (string) - Optional - Delta neutral order type.
- **order.deltaNeutralAuxPrice** (double) - Optional - Auxiliary price for delta neutral orders.
- **order.deltaNeutralConId** (int) - Optional - Contract ID for delta neutral orders.
- **order.deltaNeutralSettlingFirm** (string) - Optional - Settling firm for delta neutral orders.
- **order.deltaNeutralClearingAccount** (string) - Optional - Clearing account for delta neutral orders.
- **order.deltaNeutralClearingIntent** (string) - Optional - Clearing intent for delta neutral orders.
- **order.deltaNeutralOpenClose** (string) - Optional - Open/close status for delta neutral orders.
- **order.deltaNeutralShortSale** (bool) - Optional - Whether it's a short sale for delta neutral orders.
- **order.deltaNeutralShortSaleSlot** (string) - Optional - Short sale slot for delta neutral orders.
- **order.deltaNeutralDesignatedLocation** (string) - Optional - Designated location for delta neutral orders.
- **order.continuousUpdate** (bool) - Optional - Whether to continuously update.
- **order.referencePriceType** (int) - Optional - Reference price type.
- **order.trailStopPrice** (double) - Optional - Trail stop price.
- **order.trailingPercent** (double) - Optional - Trailing percentage.
- **order.scaleInitLevelSize** (int) - Optional - Initial scale level size.
- **order.scaleSubsLevelSize** (int) - Optional - Subsequent scale level size.
- **order.scalePriceIncrement** (double) - Optional - Scale price increment.
- **order.scalePriceAdjustValue** (double) - Optional - Scale price adjustment value.
- **order.scalePriceAdjustInterval** (int) - Optional - Scale price adjustment interval.
- **order.scaleProfitOffset** (double) - Optional - Scale profit offset.
- **order.scaleAutoReset** (bool) - Optional - Whether to auto-reset scale.
- **order.scaleInitPosition** (int) - Optional - Initial scale position.
- **order.scaleInitFillQty** (int) - Optional - Initial scale fill quantity.
- **order.scaleRandomPercent** (double) - Optional - Scale random percentage.
- **order.scaleTable** (string) - Optional - Scale table.
- **order.activeStartTime** (string) - Optional - Active start time.
- **order.activeStopTime** (string) - Optional - Active stop time.
- **order.hedgeType** (string) - Optional - Hedge type.
- **order.hedgeParam** (string) - Optional - Hedge parameter.
- **order.optOutSmartRouting** (bool) - Optional - Whether to opt out of smart routing.
- **order.clearingAccount** (string) - Optional - Clearing account.
- **order.clearingIntent** (string) - Optional - Clearing intent.
- **order.notHeld** (bool) - Optional - Whether the order is not held.
- **contract.deltaNeutralContract** (object) - Optional - Delta neutral contract details.
- **order.algoStrategy** (string) - Optional - Algorithm strategy.
- **order.algoParams** (list of objects) - Optional - Parameters for the algorithm strategy.
- **order.algoId** (string) - Optional - Algorithm ID.
- **order.whatIf** (bool) - Optional - Whether it's a what-if order.
- **order.orderMiscOptions** (list of strings) - Optional - Miscellaneous order options.
- **order.solicited** (bool) - Optional - Whether the order is solicited.
- **order.randomizeSize** (bool) - Optional - Whether to randomize order size.
- **order.randomizePrice** (bool) - Optional - Whether to randomize order price.
- **order.referenceContractId** (int) - Optional - Reference contract ID for certain order types.
- **order.isPeggedChangeAmountDecrease** (bool) - Optional - Whether pegged change amount is a decrease.
- **order.peggedChangeAmount** (double) - Optional - Pegged change amount.
- **order.referenceChangeAmount** (double) - Optional - Reference change amount.
- **order.referenceExchangeId** (string) - Optional - Reference exchange ID.
- **order.conditions** (list of objects) - Optional - Order conditions.
- **order.conditionsIgnoreRth** (bool) - Optional - Whether to ignore RTH for conditions.
- **order.conditionsCancelOrder** (bool) - Optional - Whether to cancel order if conditions are not met.
- **order.adjustedOrderType** (string) - Optional - Adjusted order type.
- **order.triggerPrice** (double) - Optional - Trigger price.
- **order.lmtPriceOffset** (double) - Optional - Limit price offset.
- **order.adjustedStopPrice** (double) - Optional - Adjusted stop price.
- **order.adjustedStopLimitPrice** (double) - Optional - Adjusted stop limit price.
- **order.adjustedTrailingAmount** (double) - Optional - Adjusted trailing amount.
- **order.adjustableTrailingUnit** (int) - Optional - Adjustable trailing unit.
- **order.extOperator** (int) - Optional - External operator.
- **order.softDollarTier.name** (string) - Optional - Soft dollar tier name.
- **order.softDollarTier.val** (string) - Optional - Soft dollar tier value.
- **order.cashQty** (double) - Optional - Cash quantity.
- **order.mifid2DecisionMaker** (string) - Optional - MIFID2 decision maker.
- **order.mifid2DecisionAlgo** (string) - Optional - MIFID2 decision algorithm.
- **order.mifid2ExecutionTrader** (string) - Optional - MIFID2 execution trader.
- **order.mifid2ExecutionAlgo** (string) - Optional - MIFID2 execution algorithm.
- **order.dontUseAutoPriceForHedge** (bool) - Optional - Whether to not use auto price for hedge.
- **order.isOmsContainer** (bool) - Optional - Whether it's an OMS container.
- **order.discretionaryUpToLimitPrice** (bool) - Optional - Whether discretionary is up to limit price.
- **order.usePriceMgmtAlgo** (bool) - Optional - Whether to use price management algorithm.
- **order.duration** (string) - Optional - Order duration (API version >= 158).
- **order.postToAts** (bool) - Optional - Whether to post to ATS (API version >= 160).
- **order.autoCancelParent** (bool) - Optional - Whether to auto-cancel parent (API version >= 162).
- **order.advancedErrorOverride** (string) - Optional - Advanced error override (API version >= 166).
- **order.manualOrderTime** (string) - Optional - Manual order time (API version >= 169).
- **order.minTradeQty** (int) - Optional - Minimum trade quantity (for IBKRATS exchange, API version >= 170).
- **order.minCompeteSize** (int) - Optional - Minimum compete size (for PEG BEST/PEGBEST, API version >= 170).
- **order.competeAgainstBestOffset** (double) - Optional - Compete against best offset (for PEG BEST/PEGBEST, API version >= 170).
- **order.midOffsetAtWhole** (double) - Optional - Mid offset at whole (for PEGBEST/PEGMID, API version >= 170).
- **order.midOffsetAtHalf** (double) - Optional - Mid offset at half (for PEGBEST/PEGMID, API version >= 170).

### Request Example
```json
{
  "order": {
    "orderType": "LMT",
    "lmtPrice": 100.0,
    "action": "BUY",
    "totalQuantity": 100
  },
  "contract": {
    "symbol": "AAPL",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
  },
  "version": 170
}
```

### Response
(Success response details are not explicitly defined in the provided text, but typically involve an order ID or confirmation.)

#### Success Response (200)
- **orderId** (int) - The unique identifier for the placed order.

#### Response Example
```json
{
  "orderId": 123456789
}
```
```

---

### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves detailed information for a given contract. Includes optional issuer ID for newer server versions.

```python
def reqContractDetails(self, reqId, contract):
        fields = [
            9,
            8,
            reqId,
            contract,
            contract.includeExpired,
            contract.secIdType,
            contract.secId,
        ]

        if self.serverVersion() >= 176:
            fields += [contract.issuerId]

        self.send(*fields)
```

---

### Request Auto Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Enables or disables automatic binding of incoming orders. Requires a boolean flag.

```python
def reqAutoOpenOrders(self, bAutoBind):
        self.send(15, 1, bAutoBind)
```

---

### Contract Details and Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for requesting contract details and exercising options.

```APIDOC
## POST /api/contract-details/req

### Description
Requests detailed information about a contract.

### Method
POST

### Endpoint
/api/contract-details/req

### Parameters
#### Request Body
- **reqId** (integer) - Required - The request ID.
- **contract** (object) - Required - Contract details.
  - **conId** (integer) - Optional - The IB contract ID.
  - **symbol** (string) - Optional - The symbol of the contract.
  - **secType** (string) - Optional - The security type (e.g., 'STK', 'FUT').
  - **exchange** (string) - Optional - The exchange where the contract trades.
  - **currency** (string) - Optional - The currency of the contract.
  - **lastTradeDateOrContractMonth** (string) - Optional - The last trade date or contract month.
  - **strike** (number) - Optional - The strike price for options.
  - **right** (string) - Optional - The right for options ('CALL' or 'PUT').
  - **multiplier** (number) - Optional - The contract multiplier.
  - **tradingClass** (string) - Optional - The trading class.
  - **includeExpired** (boolean) - Optional - Whether to include expired contracts.
  - **secIdType** (string) - Optional - Type of security ID.
  - **secId** (string) - Optional - Security ID.
  - **issuerId** (string) - Optional - Issuer ID (for certain instruments).

### Request Example
```json
{
  "reqId": 1,
  "contract": {
    "symbol": "AAPL",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
  }
}
```

### Response
#### Success Response (200)
- **contractDetails** (array) - An array of contract detail objects.
  - **conId** (integer) - IB contract ID.
  - **symbol** (string) - Symbol.
  - **secType** (string) - Security type.
  - **exchange** (string) - Exchange.
  - **description** (string) - Contract description.
  - **tradingClass** (string) - Trading class.
  - **strike** (number) - Strike price.
  - **right** (string) - Option right.
  - **expiry** (string) - Expiry date.

#### Response Example
```json
{
  "contractDetails": [
    {
      "conId": 26075056,
      "symbol": "AAPL",
      "secType": "STK",
      "exchange": "SMART",
      "description": "Apple Inc.",
      "tradingClass": "STK",
      "strike": 0,
      "right": "",
      "expiry": ""
    }
  ]
}
```
```

```APIDOC
## POST /api/options/exercise

### Description
Exercises an option contract.

### Method
POST

### Endpoint
/api/options/exercise

### Parameters
#### Request Body
- **reqId** (integer) - Required - The request ID.
- **contract** (object) - Required - Contract details (similar to historical data request).
- **exerciseAction** (integer) - Required - The action to perform (1 for exercise, 2 for liquidate).
- **exerciseQuantity** (integer) - Required - The quantity to exercise.
- **account** (string) - Required - The account for which to exercise the option.
- **override** (integer) - Required - Override parameters (e.g., 0 for default).

### Request Example
```json
{
  "reqId": 1,
  "contract": {
    "conId": 123456,
    "symbol": "O:XYZ",
    "secType": "OPT",
    "exchange": "SMART"
  },
  "exerciseAction": 1,
  "exerciseQuantity": 10,
  "account": "DU12345",
  "override": 0
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the exercise operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

---

### Request Multi-Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests positions for a specific account and model code. Requires a request ID, account, and model code.

```python
def reqPositionsMulti(self, reqId, account, modelCode):
        self.send(74, 1, reqId, account, modelCode)
```

---

### Connection Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Methods for establishing, maintaining, and disconnecting from the IB gateway or TWS.

```APIDOC
## POST /connect

### Description
Connect to a running TWS or IB gateway application.

### Method
POST

### Endpoint
/connect

### Parameters
#### Query Parameters
- **host** (string) - Required - Host name or IP address.
- **port** (integer) - Required - Port number.
- **clientId** (integer) - Required - ID number to use for this client; must be unique per connection.
- **timeout** (float) - Optional - If establishing the connection takes longer than ``timeout`` seconds then the ``asyncio.TimeoutError`` exception is raised. Set to 0 to disable timeout. Defaults to 2.0.

### Request Example
```json
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1,
  "timeout": 5.0
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates successful connection.

#### Response Example
```json
{
  "status": "Connected successfully"
}
```

## POST /disconnect

### Description
Disconnect from the IB connection.

### Method
POST

### Endpoint
/disconnect

### Response
#### Success Response (200)
- **status** (string) - Indicates successful disconnection.

#### Response Example
```json
{
  "status": "Disconnected successfully"
}
```
```

```APIDOC
## POST /connectAsync

### Description
Asynchronously connect to a running TWS or IB gateway application.

### Method
POST

### Endpoint
/connectAsync

### Parameters
#### Query Parameters
- **host** (string) - Required - Host name or IP address.
- **port** (integer) - Required - Port number.
- **clientId** (integer) - Required - ID number to use for this client; must be unique per connection.
- **timeout** (float) - Optional - If establishing the connection takes longer than ``timeout`` seconds then the ``asyncio.TimeoutError`` exception is raised. Set to 0 to disable timeout. Defaults to 2.0.

### Request Example
```json
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1,
  "timeout": 5.0
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates successful asynchronous connection.

#### Response Example
```json
{
  "status": "Asynchronous connection established"
}
```
```

---

### Query Display Groups

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of available display groups. Requires a request ID.

```python
def queryDisplayGroups(self, reqId):
        self.send(67, 1, reqId)
```

---

### Set Server Log Level

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sets the logging level for the IB server. Requires a valid log level integer.

```python
def setServerLogLevel(self, logLevel):
        self.send(14, 1, logLevel)
```

---

### Verify and Authenticate Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Verifies and authenticates an API request. Requires API name, version, and an opaque key.

```python
def verifyAndAuthRequest(self, apiName, apiVersion, opaqueIsvKey):
        self.send(72, 1, apiName, apiVersion, opaqueIsvKey)
```

---

### Request Market Depth Exchanges

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of exchanges available for market depth data. No parameters are needed.

```python
def reqMktDepthExchanges(self):
        self.send(82)
```

---

### Request Real-Time Bars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to real-time bar data for a given contract. Requires a request ID, contract details, bar size, and display options.

```python
def reqRealTimeBars(
        self, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions
    ):
        self.send(
            50, 3, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions
        )
```

---

### Request Market Depth

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests market depth data for a contract. Supports smart depth and custom options.

```python
def reqMktDepth(self, reqId, contract, numRows, isSmartDepth, mktDepthOptions):
        self.send(
            10,
            5,
            reqId,
            contract.conId,
            contract.symbol,
            contract.secType,
            contract.lastTradeDateOrContractMonth,
            contract.strike,
            contract.right,
            contract.multiplier,
            contract.exchange,
            contract.primaryExchange,
            contract.currency,
            contract.localSymbol,
            contract.tradingClass,
            numRows,
            isSmartDepth,
            mktDepthOptions,
        )
```

---

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to or unsubscribes from account and portfolio updates. Requires account code.

```python
def reqAccountUpdates(self, subscribe, acctCode):
        self.send(6, 2, subscribe, acctCode)
```

---

### Utility and Control Endpoints

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for API control, verification, and utility functions.

```APIDOC
## POST /api/currentTime

### Description
Requests the current time from the API server.

### Method
POST

### Endpoint
/api/currentTime

### Parameters
#### Request Body
(No specific parameters required for this request)

### Request Example
```json
{
  "message": "Requesting current time"
}
```

### Response
#### Success Response (200)
- **time** (string) - The current server time.

#### Response Example
```json
{
  "time": "2023-10-27 10:00:00"
}
```
```

```APIDOC
## POST /api/globalCancel

### Description
Cancels all active requests.

### Method
POST

### Endpoint
/api/globalCancel

### Parameters
#### Request Body
(No specific parameters required for this request)

### Request Example
```json
{
  "message": "Initiating global cancel"
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of global cancellation.

#### Response Example
```json
{
  "status": "All active requests cancelled successfully."
}
```
```

```APIDOC
## POST /api/marketDataType

### Description
Sets the market data type for subsequent requests.

### Method
POST

### Endpoint
/api/marketDataType

### Parameters
#### Request Body
- **marketDataType** (string) - Required - The desired market data type (e.g., "RealTime", "Frozen", "Delayed", "DelayedFrozen").

### Request Example
```json
{
  "marketDataType": "RealTime"
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of market data type setting.

#### Response Example
```json
{
  "status": "Market data type set to RealTime."
}
```
```

```APIDOC
## POST /api/verifyRequest

### Description
Verifies an API request with the server.

### Method
POST

### Endpoint
/api/verifyRequest

### Parameters
#### Request Body
- **apiName** (string) - Required - The name of the API.
- **apiVersion** (string) - Required - The version of the API.

### Request Example
```json
{
  "apiName": "IBAPI",
  "apiVersion": "1.0"
}
```

### Response
#### Success Response (200)
- **verificationId** (int) - The ID for the verification.

#### Response Example
```json
{
  "verificationId": 101
}
```
```

```APIDOC
## POST /api/verifyMessage

### Description
Verifies a message with the server using a verification ID.

### Method
POST

### Endpoint
/api/verifyMessage

### Parameters
#### Request Body
- **apiData** (string) - Required - The data to verify.

### Request Example
```json
{
  "apiData": "some_verification_data"
}
```

### Response
#### Success Response (200)
- **status** (string) - The verification status.

#### Response Example
```json
{
  "status": "Verified"
}
```
```

```APIDOC
## POST /api/queryDisplayGroups

### Description
Queries available display groups.

### Method
POST

### Endpoint
/api/queryDisplayGroups

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the request.

### Request Example
```json
{
  "reqId": 16
}
```

### Response
#### Success Response (200)
- **groups** (array) - Array of display group data.

#### Response Example
```json
{
  "groups": [
    {
      "groupId": 1,
      "name": "Group A"
    }
  ]
}
```
```

```APIDOC
## POST /api/subscribeToGroupEvents

### Description
Subscribes to events for a specific display group.

### Method
POST

### Endpoint
/api/subscribeToGroupEvents

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the request.
- **groupId** (int) - Required - The ID of the group to subscribe to.

### Request Example
```json
{
  "reqId": 17,
  "groupId": 1
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of subscription.

#### Response Example
```json
{
  "status": "Subscribed to group events successfully."
}
```
```

```APIDOC
## POST /api/updateDisplayGroup

### Description
Updates a display group with new contract information.

### Method
POST

### Endpoint
/api/updateDisplayGroup

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the request.
- **contractInfo** (object) - Required - Contract details to update the group with.

### Request Example
```json
{
  "reqId": 18,
  "contractInfo": {
    "conId": 12345,
    "symbol": "AAPL"
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of update.

#### Response Example
```json
{
  "status": "Display group updated successfully."
}
```
```

```APIDOC
## POST /api/startApi

### Description
Starts the API connection with client ID and capabilities.

### Method
POST

### Endpoint
/api/startApi

### Parameters
#### Request Body
- **clientId** (int) - Required - The client ID for the connection.
- **optCapab** (object) - Required - Optional capabilities for the API connection.

### Request Example
```json
{
  "clientId": 100,
  "optCapab": {
    "realTimeBars": true
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of API start.

#### Response Example
```json
{
  "status": "API started successfully."
}
```
```

```APIDOC
## POST /api/verifyAndAuthRequest

### Description
Verifies and authenticates an API request.

### Method
POST

### Endpoint
/api/verifyAndAuthRequest

### Parameters
#### Request Body
- **apiName** (string) - Required - The name of the API.
- **apiVersion** (string) - Required - The version of the API.
- **opaqueIsvKey** (string) - Required - The opaque ISV key for authentication.

### Request Example
```json
{
  "apiName": "IBAPI",
  "apiVersion": "1.0",
  "opaqueIsvKey": "your_isv_key"
}
```

### Response
#### Success Response (200)
- **authId** (string) - The authentication ID.

#### Response Example
```json
{
  "authId": "auth_token_123"
}
```
```

```APIDOC
## POST /api/verifyAndAuthMessage

### Description
Verifies and authenticates a message using previous authentication.

### Method
POST

### Endpoint
/api/verifyAndAuthMessage

### Parameters
#### Request Body
- **apiData** (string) - Required - The data to verify and authenticate.
- **xyzResponse** (string) - Required - The response from XYZ verification.

### Request Example
```json
{
  "apiData": "message_data",
  "xyzResponse": "xyz_response_data"
}
```

### Response
#### Success Response (200)
- **status** (string) - The authentication status.

#### Response Example
```json
{
  "status": "Authenticated"
}
```
```

---

### Request Security Definition Options Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests parameters for security definition options. Requires a request ID, underlying symbol, exchange, underlying security type, and underlying conId.

```python
def reqSecDefOptParams(
        self,
        reqId,
        underlyingSymbol,
        futFopExchange,
        underlyingSecType,
        underlyingConId,
    ):
        self.send(
            78,
            reqId,
            underlyingSymbol,
            futFopExchange,
            underlyingSecType,
            underlyingConId,
        )
```

---

### Send Order Details - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Constructs and sends a comprehensive list of order fields to the API. This function handles various order types and conditional logic based on order parameters and API version. Ensure all required order attributes are correctly populated before calling.

```python
fields += [
            order.stockRangeLower,
            order.stockRangeUpper,
            order.overridePercentageConstraints,
            order.volatility,
            order.volatilityType,
            order.deltaNeutralOrderType,
            order.deltaNeutralAuxPrice,
        ]

        if order.deltaNeutralOrderType:
            fields += [
                order.deltaNeutralConId,
                order.deltaNeutralSettlingFirm,
                order.deltaNeutralClearingAccount,
                order.deltaNeutralClearingIntent,
                order.deltaNeutralOpenClose,
                order.deltaNeutralShortSale,
                order.deltaNeutralShortSaleSlot,
                order.deltaNeutralDesignatedLocation,
            ]

        fields += [
            order.continuousUpdate,
            order.referencePriceType,
            order.trailStopPrice,
            order.trailingPercent,
            order.scaleInitLevelSize,
            order.scaleSubsLevelSize,
            order.scalePriceIncrement,
        ]

        if 0 < order.scalePriceIncrement < UNSET_DOUBLE:
            fields += [
                order.scalePriceAdjustValue,
                order.scalePriceAdjustInterval,
                order.scaleProfitOffset,
                order.scaleAutoReset,
                order.scaleInitPosition,
                order.scaleInitFillQty,
                order.scaleRandomPercent,
            ]

        fields += [
            order.scaleTable,
            order.activeStartTime,
            order.activeStopTime,
            order.hedgeType,
        ]

        if order.hedgeType:
            fields += [order.hedgeParam]

        fields += [
            order.optOutSmartRouting,
            order.clearingAccount,
            order.clearingIntent,
            order.notHeld,
        ]

        dnc = contract.deltaNeutralContract
        if dnc:
            fields += [True, dnc.conId, dnc.delta, dnc.price]
        else:
            fields += [False]

        fields += [order.algoStrategy]
        if order.algoStrategy:
            params = order.algoParams or []
            fields += [len(params)]
            for param in params:
                fields += [param.tag, param.value]

        fields += [
            order.algoId,
            order.whatIf,
            order.orderMiscOptions,
            order.solicited,
            order.randomizeSize,
            order.randomizePrice,
        ]

        if order.orderType in {"PEG BENCH", "PEGBENCH"}:
            fields += [
                order.referenceContractId,
                order.isPeggedChangeAmountDecrease,
                order.peggedChangeAmount,
                order.referenceChangeAmount,
                order.referenceExchangeId,
            ]

        fields += [len(order.conditions)]
        if order.conditions:
            for cond in order.conditions:
                fields += dataclassAsTuple(cond)
            fields += [order.conditionsIgnoreRth, order.conditionsCancelOrder]

        fields += [
            order.adjustedOrderType,
            order.triggerPrice,
            order.lmtPriceOffset,
            order.adjustedStopPrice,
            order.adjustedStopLimitPrice,
            order.adjustedTrailingAmount,
            order.adjustableTrailingUnit,
            order.extOperator,
            order.softDollarTier.name,
            order.softDollarTier.val,
            order.cashQty,
            order.mifid2DecisionMaker,
            order.mifid2DecisionAlgo,
            order.mifid2ExecutionTrader,
            order.mifid2ExecutionAlgo,
            order.dontUseAutoPriceForHedge,
            order.isOmsContainer,
            order.discretionaryUpToLimitPrice,
            order.usePriceMgmtAlgo,
        ]

        if version >= 158:
            fields += [order.duration]

        if version >= 160:
            fields += [order.postToAts]

        if version >= 162:
            fields += [order.autoCancelParent]

        if version >= 166:
            fields += [order.advancedErrorOverride]

        if version >= 169:
            fields += [order.manualOrderTime]

        if version >= 170:
            if contract.exchange == "IBKRATS":
                fields += [order.minTradeQty]
            if order.orderType in {"PEG BEST", "PEGBEST"}:
                fields += [order.minCompeteSize, order.competeAgainstBestOffset]
                if order.competeAgainstBestOffset == math.inf:
                    fields += [order.midOffsetAtWhole, order.midOffsetAtHalf]
            elif order.orderType in {"PEG MID", "PEGMID"}:
                fields += [order.midOffsetAtWhole, order.midOffsetAtHalf]

        self.send(*fields)
```

---

### Request Matching Symbols

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of symbols that match a given pattern. Requires a request ID and the pattern.

```python
def reqMatchingSymbols(self, reqId, pattern):
        self.send(81, reqId, pattern)
```

---

### Exercise Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Exercises options contracts. Requires contract details, action, quantity, account, and override flag.

```python
def exerciseOptions(
        self, reqId, contract, exerciseAction, exerciseQuantity, account, override
    ):
        self.send(
            21,
            2,
            reqId,
            contract.conId,
            contract.symbol,
            contract.secType,
            contract.lastTradeDateOrContractMonth,
            contract.strike,
            contract.right,
            contract.multiplier,
            contract.exchange,
            contract.currency,
            contract.localSymbol,
            contract.tradingClass,
            exerciseAction,
            exerciseQuantity,
            account,
            override,
        )
```

---

### Request Scanner Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to real-time market scanner results. Requires a request ID, subscription details, and optional filter/options.

```python
def reqScannerSubscription(
        self,
        reqId,
        subscription,
        scannerSubscriptionOptions,
        scannerSubscriptionFilterOptions,
    ):
        sub = subscription
        self.send(
            22,
            reqId,
            sub.numberOfRows,
            sub.instrument,
            sub.locationCode,
            sub.scanCode,
            sub.abovePrice,
            sub.belowPrice,
            sub.aboveVolume,
            sub.marketCapAbove,
            sub.marketCapBelow,
            sub.moodyRatingAbove,
            sub.moodyRatingBelow,
            sub.spRatingAbove,
            sub.spRatingBelow,
            sub.maturityDateAbove,
            sub.maturityDateBelow,
            sub.couponRateAbove,
            sub.couponRateBelow,
            sub.excludeConvertible,
            sub.averageOptionVolumeAbove,
            sub.scannerSettingPairs,
            sub.stockTypeFilter,
            scannerSubscriptionFilterOptions,
            scannerSubscriptionOptions,
        )
```

---

### User Info

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests user information.

```APIDOC
## POST /api/userInfo

### Description
Requests information about the currently logged-in user.

### Method
POST

### Endpoint
/api/userInfo

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique request identifier.

### Request Example
```json
{
  "reqId": 9
}
```

### Response
#### Success Response (200)
- **userInfo** (dict) - Dictionary containing user information.
  - **userId** (int) - The user's unique identifier.
  - **userName** (str) - The user's name.
  - **ldots** (str) - Additional user details.

#### Response Example
```json
{
  "userInfo": {
    "userId": 12345,
    "userName": "JohnDoe",
    "ldots": "Additional user info"
  }
}
```
```

---

### Subscribe to Group Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to real-time events for a specific display group. Requires a request ID and group ID.

```python
def subscribeToGroupEvents(self, reqId, groupId):
        self.send(68, 1, reqId, groupId)
```

---

### Account Information

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Method for retrieving the list of managed account names.

```APIDOC
## GET /accounts

### Description
Get the list of account names that are under management.

### Method
GET

### Endpoint
/accounts

### Response
#### Success Response (200)
- **accounts** (list[string]) - A list of account names.

#### Response Example
```json
{
  "accounts": ["Account1", "Account2"]
}
```
```

---

### Replace Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Replaces financial advisor configuration data. Requires a request ID, FA data type, and XML content.

```python
def replaceFA(self, reqId, faData, cxml):
        self.send(19, 1, faData, cxml, reqId)
```

---

### Request Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sets the type of market data to be received. Requires a market data type code.

```python
def reqMarketDataType(self, marketDataType):
        self.send(59, 1, marketDataType)
```

---

### Place Order

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Places a new order or modifies an existing one. Handles complex order types and contract details.

```APIDOC
## POST /api/orders/place

### Description
Places a new order or modifies an existing one. Handles complex order types and contract details.

### Method
POST

### Endpoint
/api/orders/place

### Parameters
#### Request Body
- **orderId** (int) - Required - Unique identifier for the order.
- **contract** (object) - Required - Contract details.
  - **secType** (string) - Required - Security type (e.g., 'STK', 'FUT', 'BAG').
  - **symbol** (string) - Required - Security symbol.
  - **exchange** (string) - Required - Exchange code.
  - **currency** (string) - Required - Currency code.
  - **secIdType** (string) - Optional - Security ID type.
  - **secId** (string) - Optional - Security ID.
  - **comboLegs** (array) - Optional - List of combo legs for 'BAG' contracts.
    - **conId** (int) - Required - Contract ID of the leg.
    - **ratio** (int) - Required - Ratio of the leg.
    - **action** (string) - Required - Action for the leg (e.g., 'BUY', 'SELL').
    - **exchange** (string) - Required - Exchange for the leg.
    - **openClose** (string) - Optional - Open/Close status.
    - **shortSaleSlot** (int) - Optional - Short sale slot.
    - **designatedLocation** (string) - Optional - Designated location.
    - **exemptCode** (int) - Optional - Exempt code.
- **order** (object) - Required - Order details.
  - **action** (string) - Required - Order action (e.g., 'BUY', 'SELL').
  - **totalQuantity** (int) - Required - Total quantity.
  - **orderType** (string) - Required - Type of order (e.g., 'MKT', 'LMT', 'VOL').
  - **lmtPrice** (float) - Optional - Limit price.
  - **auxPrice** (float) - Optional - Auxiliary price.
  - **tif** (string) - Optional - Time in force (e.g., 'DAY', 'GTC').
  - **ocaGroup** (string) - Optional - OCA group.
  - **account** (string) - Optional - Account number.
  - **openClose** (string) - Optional - Open/Close status.
  - **origin** (string) - Optional - Order origin.
  - **orderRef** (string) - Optional - Order reference.
  - **transmit** (bool) - Required - Whether to transmit the order.
  - **parentId** (int) - Optional - Parent order ID for bracket orders.
  - **blockOrder** (bool) - Optional - Whether it's a block order.
  - **sweepToFill** (bool) - Optional - Whether to sweep to fill.
  - **displaySize** (int) - Optional - Display size for iceberg orders.
  - **triggerMethod** (int) - Optional - Trigger method for stop orders.
  - **outsideRth** (bool) - Optional - Whether the order is outside regular trading hours.
  - **hidden** (bool) - Optional - Whether the order is hidden.
  - **orderComboLegs** (array) - Optional - List of order combo legs.
    - **price** (float) - Required - Price for the combo leg.
  - **smartComboRoutingParams** (array) - Optional - Smart combo routing parameters.
    - **tag** (string) - Required - Parameter tag.
    - **value** (string) - Required - Parameter value.
  - **discretionaryAmt** (float) - Optional - Discretionary amount.
  - **goodAfterTime** (string) - Optional - Time after which the order is effective (format: 'YYYYMMDD HH:MM:SS').
  - **goodTillDate** (string) - Optional - Date until which the order is effective (format: 'YYYYMMDD HH:MM:SS').
  - **faGroup** (string) - Optional - Financial advisor group.
  - **faMethod** (string) - Optional - Financial advisor method.
  - **faPercentage** (string) - Optional - Financial advisor percentage.
  - **faProfile** (string) - Optional - Financial advisor profile (used for older server versions).
  - **modelCode** (string) - Optional - Model code for allocation.
  - **shortSaleSlot** (int) - Optional - Short sale slot.
  - **designatedLocation** (string) - Optional - Designated location.
  - **exemptCode** (int) - Optional - Exempt code.
  - **ocaType** (int) - Optional - OCA type.
  - **rule80A** (string) - Optional - Rule 80A classification.
  - **settlingFirm** (string) - Optional - Settling firm.
  - **allOrNone** (bool) - Optional - Whether the order is all or none.
  - **minQty** (int) - Optional - Minimum quantity for an order.
  - **percentOffset** (float) - Optional - Percentage offset for an order.
  - **eTradeOnly** (bool) - Optional - Whether the order is eTrade only (always false).
  - **firmQuoteOnly** (bool) - Optional - Whether the order is firm quote only (always false).
  - **nbboPriceCap** (float) - Optional - NBBO price cap (always UNSET).
  - **auctionStrategy** (int) - Optional - Auction strategy.
  - **startingPrice** (float) - Optional - Starting price for VWAP orders.
  - **stockRefPrice** (float) - Optional - Stock reference price for stock orders.
  - **delta** (float) - Optional - Delta for option orders.

### Request Example
```json
{
  "orderId": 1,
  "contract": {
    "secType": "STK",
    "symbol": "IBM",
    "exchange": "SMART",
    "currency": "USD"
  },
  "order": {
    "action": "BUY",
    "totalQuantity": 100,
    "orderType": "LMT",
    "lmtPrice": 150.00,
    "tif": "DAY",
    "transmit": true
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the status of the order placement.

#### Response Example
```json
{
  "status": "Submitted"
}
```
```
