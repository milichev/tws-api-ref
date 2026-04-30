### Subscribe to Market Scan Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to market scan data. This method initiates a continuous stream of market scan results based on the provided subscription criteria and optional filters.

```python
def reqScannerSubscription(
        self,
        subscription: ScannerSubscription,
        scannerSubscriptionOptions: list[TagValue] = [],
        scannerSubscriptionFilterOptions: list[TagValue] = [],
    ) -> ScanDataList:
        """
        Subscribe to market scan data.
        """
```
