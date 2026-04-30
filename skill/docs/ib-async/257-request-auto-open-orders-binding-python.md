### Request Auto Open Orders Binding (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Binds manual TWS orders for management by this client. This requires clientId to be 0 and a specific TWS API setting. The request is automatically called when clientId is 0. It allows enabling or disabling the binding.

```python
def reqAutoOpenOrders(self, autoBind: bool = True):
        """
        Bind manual TWS orders so that they can be managed from this client.
        The clientId must be 0 and the TWS API setting "Use negative numbers
        to bind automatic orders" must be checked.

        This request is automatically called when clientId=0.

        https://interactivebrokers.github.io/tws-api/open_orders.html
        https://interactivebrokers.github.io/tws-api/modifying_orders.html

        Args:
            autoBind: Set binding on or off.
        """
        self.client.reqAutoOpenOrders(autoBind)
```
