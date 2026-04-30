### Cancel Order with Manual Time (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function cancels an existing order on the Interactive Brokers platform. It requires the order ID and an optional manual cancellation time. The manual time field is only included if the server version is 169 or higher.

```python
    def cancelOrder(self, orderId, manualCancelOrderTime=""):
        fields = [4, 1, orderId]
        if self.serverVersion() >= 169:
            fields += [manualCancelOrderTime]
        self.send(*fields)
```
