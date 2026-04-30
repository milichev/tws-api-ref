### Request Market Scanner Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a request for market scanner data based on a provided subscription. It prepares the necessary data structures and forwards the request to the client and wrapper. Dependencies include ScanDataList, client, and wrapper objects.

```python
def reqScannerSubscription(self, subscription, scannerSubscriptionOptions, scannerSubscriptionFilterOptions):
        """
        Args:
            subscription: What to scan for.
            scannerSubscriptionOptions: Unknown.
            scannerSubscriptionFilterOptions: Unknown.
        """
        reqId = self.client.getReqId()
        dataList = ScanDataList()
        dataList.reqId = reqId
        dataList.subscription = subscription
        dataList.scannerSubscriptionOptions = scannerSubscriptionOptions or []
        dataList.scannerSubscriptionFilterOptions = (
            scannerSubscriptionFilterOptions or []
        )
        self.wrapper.startSubscription(reqId, dataList)
        self.client.reqScannerSubscription(
            reqId,
            subscription,
            scannerSubscriptionOptions,
            scannerSubscriptionFilterOptions,
        )
        return dataList
```
