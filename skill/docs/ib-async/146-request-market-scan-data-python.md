### Request Market Scan Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Performs a blocking market scan by initiating a subscription and then canceling it after receiving the initial results. Requires a ScannerSubscription object and optional scanner subscription options.

```python
def reqScannerData(
        self,
        subscription: ScannerSubscription,
        scannerSubscriptionOptions: list[TagValue] = [],
        scannerSubscriptionFilterOptions: list[TagValue] = [],
    ) -> ScanDataList:
        """
        Do a blocking market scan by starting a subscription and canceling it
        after the initial list of results are in.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/market_scanners.html

        Args:
            subscription: Basic filters.
            scannerSubscriptionOptions: Unknown.
            scannerSubscriptionFilterOptions: Advanced generic filters.
        """
        return self._run(
            self.reqScannerDataAsync(
                subscription,
                scannerSubscriptionOptions,
                scannerSubscriptionFilterOptions,
            )
        )
```
