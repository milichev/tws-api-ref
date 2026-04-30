### Request Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function sends a request to the Interactive Brokers API to retrieve all currently open orders. It's a simple call that initiates the data retrieval process from the server.

```python
    def reqOpenOrders(self):
        self.send(5, 1)
```
