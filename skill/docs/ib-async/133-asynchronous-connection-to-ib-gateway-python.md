### Asynchronous Connection to IB Gateway (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes an asynchronous connection to the Interactive Brokers Gateway. It allows configuration of host, port, client ID, timeout, read-only mode, account, and synchronization error handling.

```python
_async _connectAsync(_host='127.0.0.1'_ , _port=7497_ , _clientId=1_ , _timeout=4_ , _readonly=False_ , _account=''_ , _raiseSyncErrors=False_ , _fetchFields= <StartupFetch.POSITIONS|ORDERS_OPEN|ORDERS_COMPLETE|ACCOUNT_UPDATES|SUB_ACCOUNT_UPDATES|EXECUTIONS: 63>_)
```
