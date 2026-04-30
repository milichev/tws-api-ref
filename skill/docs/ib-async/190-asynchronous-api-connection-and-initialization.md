### Asynchronous API Connection and Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the asynchronous connection to the TWS API and performs concurrent initialization of account updates, open orders, and positions.

```python
async def connectAsync(
    self,
    host: str = "127.0.0.1",
    port: int = 7497,
    clientId: int = 1,
    timeout: float | None = 4,
    readonly: bool = False,
    account: str = "",
    raiseSyncErrors: bool = False,
    fetchFields: StartupFetch = StartupFetchALL,
):
    clientId = int(clientId)
    self.wrapper.clientId = clientId
    timeout = timeout or None
    try:
        await self.client.connectAsync(host, port, clientId, timeout)
        if clientId == 0:
            self.reqAutoOpenOrders(True)
        accounts = self.client.getAccounts()
        if not account and len(accounts) == 1:
            account = accounts[0]
        reqs: dict[str, Awaitable[Any]] = {}
        reqs["positions"] = self.reqPositionsAsync()
        if not readonly:
            if fetchFields & StartupFetch.ORDERS_OPEN:
                reqs["open orders"] = self.reqOpenOrdersAsync()
        # ... (additional initialization logic)
```
