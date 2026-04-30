### Request Tick-by-Tick Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to tick-by-tick data for a specified contract and tick type. It returns a Ticker object that will contain the ticks in its `tickByTicks` attribute. Supports options for the number of ticks and ignoring size for bid/ask ticks.

```python
def reqTickByTickData(
    self,
    contract: Contract,
    tickType: str,
    numberOfTicks: int = 0,
    ignoreSize: bool = False,
) -> Ticker:
    """
    Subscribe to tick-by-tick data and return the Ticker that
    holds the ticks in ticker.tickByTicks.

    https://interactivebrokers.github.io/tws-api/tick_data.html

    Args:
        contract: Contract of interest.
        tickType: One of  'Last', 'AllLast', 'BidAsk' or 'MidPoint'.
        numberOfTicks: Number of ticks or 0 for unlimited.
        ignoreSize: Ignore bid/ask ticks that only update the size.
    """
    reqId = self.client.getReqId()
    ticker = self.wrapper.startTicker(reqId, contract, tickType)

    self.client.reqTickByTickData(
        reqId, contract, tickType, numberOfTicks, ignoreSize
    )

    return ticker
```
