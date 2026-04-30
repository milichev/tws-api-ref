### Request Historical Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests historical bar data for a specified contract. This is a blocking method. It requires parameters like end date/time, duration, bar size, data source, and whether to use Regular Trading Hours. Optional parameters include date formatting, keeping data up-to-date, chart options, and a timeout.

```python
def reqHistoricalData(
        self,
        contract: Contract,
        endDateTime: datetime.datetime | datetime.date | str | None,
        durationStr: str,
        barSizeSetting: str,
        whatToShow: str,
        useRTH: bool,
        formatDate: int = 1,
        keepUpToDate: bool = False,
        chartOptions: list[TagValue] = [],
        timeout: float = 60,
    ) -> BarDataList:
        """
        Request historical bar data.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/historical_bars.html

        Args:
            contract: Contract of interest.
            endDateTime: Can be set to '' to indicate the current time,
                or it can be given as a datetime.date or datetime.datetime,
                or it can be given as a string in 'yyyyMMdd HH:mm:ss' format.
                If no timezone is given then the TWS login timezone is used.
            durationStr: Time span of all the bars. Examples:
                '60 S', '30 D', '13 W', '6 M', '10 Y'.
            barSizeSetting: Time period of one bar. Must be one of:
                '1 secs', '5 secs', '10 secs' 15 secs', '30 secs',
                '1 min', '2 mins', '3 mins', '5 mins', '10 mins', '15 mins',
                '20 mins', '30 mins',
                '1 hour', '2 hours', '3 hours', '4 hours', '8 hours',
                '1 day', '1 week', '1 month'.
            whatToShow: Specifies the source for constructing bars.
                Must be one of:
                'TRADES', 'MIDPOINT', 'BID', 'ASK', 'BID_ASK',
                'ADJUSTED_LAST', 'HISTORICAL_VOLATILITY',
                'OPTION_IMPLIED_VOLATILITY', 'REBATE_RATE', 'FEE_RATE',
                'YIELD_BID', 'YIELD_ASK', 'YIELD_BID_ASK', 'YIELD_LAST'.
                For 'SCHEDULE' use :meth:`.reqHistoricalSchedule`.
            useRTH: If True then only show data from within Regular
                Trading Hours, if False then show all data.
            formatDate: For an intraday request setting to 2 will cause
                the returned date fields to be timezone-aware
                datetime.datetime with UTC timezone, instead of local timezone
                as used by TWS.
            keepUpToDate: If True then a realtime subscription is started
                to keep the bars updated; ``endDateTime`` must be set
                empty ('') then.
            chartOptions: Unknown.
            timeout: Timeout in seconds after which to cancel the request
                and return an empty bar series. Set to ``0`` to wait
                indefinitely.
        """
        return self._run(
            self.reqHistoricalDataAsync(
                contract,
                endDateTime,
                durationStr,
                barSizeSetting,
                whatToShow,
                useRTH,
                formatDate,
                keepUpToDate,
                chartOptions,
                timeout,
            )
        )
```
