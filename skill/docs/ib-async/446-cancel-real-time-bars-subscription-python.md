### Cancel Real-Time Bars Subscription (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Cancels an existing real-time bar subscription. It takes a RealTimeBarList object, which was previously obtained from `reqRealTimeBars`, as input to identify the subscription to cancel.

```python
def cancelRealTimeBars(self, bars: RealTimeBarList):
        """
        Cancel the realtime bars subscription.

        Args:
            bars: The bar list that was obtained from ``reqRealTimeBars``.
        """
        self.client.cancelRealTimeBars(bars.reqId)
        self.wrapper.endSubscription(bars)
```
