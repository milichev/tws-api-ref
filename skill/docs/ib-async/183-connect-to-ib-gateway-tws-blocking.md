### Connect to IB Gateway/TWS (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes a blocking connection to a running TWS or IB gateway. The connection will wait until the client is ready to serve requests, with an optional timeout.

```python
client.connect(host='127.0.0.1', port=7497, clientId=1, timeout=2.0)
```
