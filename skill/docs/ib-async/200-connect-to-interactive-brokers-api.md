### Connect to Interactive Brokers API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Establishes a connection to the Interactive Brokers API. The `connect` method blocks until the client is ready, and `connectAsync` provides an asynchronous alternative. Connection options and timeouts can be specified.

```python
# Blocking connection
client.connect(host='127.0.0.1', port=7497, clientId=0)

# Asynchronous connection (requires running within an asyncio event loop)
# await client.connectAsync(host='127.0.0.1', port=7497, clientId=0, timeout=2.0)
```
