### Connect to IB Gateway/TWS (Asynchronous)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes an asynchronous connection to a running TWS or IB gateway using asyncio. This coroutine allows the program to continue executing other tasks while the connection is being established.

```python
await client.connectAsync(host='127.0.0.1', port=7497, clientId=1, timeout=2.0)
```
