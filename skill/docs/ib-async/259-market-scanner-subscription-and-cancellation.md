### Market Scanner Subscription and Cancellation

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Handles market scanner subscriptions. `reqScannerData` performs a blocking scan and returns results, while `reqScannerSubscription` subscribes to live data. `cancelScannerSubscription` is used to stop an active subscription.

```python
def reqScannerData(_subscription_ , _scannerSubscriptionOptions =[]_, _scannerSubscriptionFilterOptions =[]_):
    """
    Do a blocking market scan by starting a subscription and canceling it after the initial list of results are in.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/market_scanners.html 

    Parameters:
        subscription (ScannerSubscription): Basic filters.
        scannerSubscriptionOptions (list[TagValue]): Unknown.
        scannerSubscriptionFilterOptions (list[TagValue]): Advanced generic filters.
    Return type:
        ScanDataList
    """
    pass

def reqScannerSubscription(_subscription_ , _scannerSubscriptionOptions =[]_, _scannerSubscriptionFilterOptions =[]_):
    """
    Subscribe to market scan data.
    https://interactivebrokers.github.io/tws-api/market_scanners.html 

    Parameters:
        subscription (ScannerSubscription): What to scan for.
        scannerSubscriptionOptions (list[TagValue]): Unknown.
        scannerSubscriptionFilterOptions (list[TagValue]): Unknown.
    Return type:
        ScanDataList
    """
    pass

def cancelScannerSubscription(_dataList_):
    """
    Cancel market data subscription.
    https://interactivebrokers.github.io/tws-api/market_scanners.html 

    Parameters:
        dataList (ScanDataList): The scan data list that was obtained from `reqScannerSubscription()`.
    """
    pass
```
