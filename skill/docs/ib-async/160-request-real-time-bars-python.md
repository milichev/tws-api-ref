### Request Real-Time Bars (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests real-time 5-second bars for a given contract. It requires specifying the bar size (must be 5), the data source ('TRADES', 'MIDPOINT', 'BID', or 'ASK'), and whether to use Regular Trading Hours. This method initiates a subscription and returns a RealTimeBarList object.

```python
def reqRealTimeBars(
        self,
        contract: Contract,
        barSize: int,
        whatToShow: str,
        useRTH: bool,
        realTimeBarsOptions: list[TagValue] = [],
    ) -> RealTimeBarList:
        """
        Request realtime 5 second bars.

        https://interactivebrokers.github.io/tws-api/realtime_bars.html

        Args:
            contract: Contract of interest.
            barSize: Must be 5.
            whatToShow: Specifies the source for constructing bars.
                Can be 'TRADES', 'MIDPOINT', 'BID' or 'ASK'.
            useRTH: If True then only show data from within Regular
                Trading Hours, if False then show all data.
            realTimeBarsOptions: Unknown.
        """
        reqId = self.client.getReqId()
        bars = RealTimeBarList()
        bars.reqId = reqId
        bars.contract = contract
        bars.barSize = barSize
        bars.whatToShow = whatToShow
        bars.useRTH = useRTH
        bars.realTimeBarsOptions = realTimeBarsOptions or []
        self.wrapper.startSubscription(reqId, bars, contract)
        self.client.reqRealTimeBars(
            reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions
        )
        return bars
```
