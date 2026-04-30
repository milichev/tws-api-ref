### Connect to IB Gateway/TWS

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes a connection to a running TWS or IB Gateway application. This method is blocking and synchronizes the client upon successful connection. It allows configuration of host, port, client ID, timeout, read-only mode, account, and error handling for synchronization requests. It also supports fetching specific account data upon connection.

```python
connect(_host='127.0.0.1', _port=7497, _clientId=1, _timeout=4, _readonly=False, _account='', _raiseSyncErrors=False, _fetchFields=<StartupFetch.POSITIONS|ORDERS_OPEN|ORDERS_COMPLETE|ACCOUNT_UPDATES|SUB_ACCOUNT_UPDATES|EXECUTIONS: 63>)
```
