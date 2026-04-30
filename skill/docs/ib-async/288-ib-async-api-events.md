### IB Async API Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This section details the various events emitted by the IB Async API, which are crucial for real-time data handling and notifications from the TWS/gateway.

```APIDOC
## IB Async API Events

### Description
This API provides a comprehensive set of events that are triggered by the connection to the TWS/gateway. These events allow for real-time monitoring and handling of various data streams and state changes.

### Events

*   **connectedEvent** (): Emitted after successfully connecting and synchronizing with TWS/gateway.
*   **disconnectedEvent** (): Emitted after disconnecting from TWS/gateway.
*   **updateEvent** (): Emitted after a network packet has been handled.
*   **pendingTickersEvent** (tickers: Set[:class:`.Ticker`]): Emits the set of tickers that have been updated during the last update and for which there are new ticks, tickByTicks or domTicks.
*   **barUpdateEvent** (bars: :class:`.BarDataList`, hasNewBar: bool): Emits the bar list that has been updated in real time. If a new bar has been added then hasNewBar is True, when the last bar has changed it is False.
*   **newOrderEvent** (trade: :class:`.Trade`): Emits a newly placed trade.
*   **orderModifyEvent** (trade: :class:`.Trade`): Emits when an order is modified.
*   **cancelOrderEvent** (trade: :class:`.Trade`): Emits a trade directly after requesting for it to be cancelled.
*   **openOrderEvent** (trade: :class:`.Trade`): Emits the trade with an open order.
*   **orderStatusEvent** (trade: :class:`.Trade`): Emits the changed order status of the ongoing trade.
*   **execDetailsEvent** (trade: :class:`.Trade`, fill: :class:`.Fill`): Emits the fill together with the ongoing trade it belongs to.
*   **commissionReportEvent** (trade: :class:`.Trade`, fill: :class:`.Fill`, report: :class:`.CommissionReport`): The commission report is emitted after the fill that it belongs to.
*   **updatePortfolioEvent** (item: :class:`.PortfolioItem`): A portfolio item has changed.
*   **positionEvent** (position: :class:`.Position`): A position has changed.
*   **accountValueEvent** (value: :class:`.AccountValue`): An account value has changed.
*   **accountSummaryEvent** (value: :class:`.AccountValue`): An account value has changed.
*   **pnlEvent** (entry: :class:`.PnL`): A profit- and loss entry is updated.
*   **pnlSingleEvent** (entry: :class:`.PnLSingle`): A profit- and loss entry for a single position is updated.
*   **tickNewsEvent** (news: :class:`.NewsTick`): Emit a new news headline.
*   **newsBulletinEvent** (bulletin: :class:`.NewsBulletin`): Emit a new news bulletin.
*   **scannerDataEvent** (data: :class:`.ScanDataList`): Emit data from a scanner subscription.
*   **wshMetaEvent** (dataJson: str): Emit WSH metadata.
*   **wshEvent** (dataJson: str): Emit WSH event data (such as earnings dates, dividend dates, options expiration dates, splits, spinoffs and conferences).
*   **errorEvent** (reqId: int, errorCode: int, errorString: str, contract: :class:`.Contract`): Emits the reqId/orderId and TWS error code and string together with the contract the error applies to (or None if no contract applies).
*   **timeoutEvent** (idlePeriod: float): Is emitted if no data is received for longer than the timeout period specified with :meth:`.setTimeout`. The value emitted is the period in seconds since the last update.

### Important Note
It is not advisable to place new requests inside an event handler as it may lead to too much recursion.
```
