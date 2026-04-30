### Error Handling for IBKR API Connection

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Provides a Python example for robustly handling potential connection errors when establishing a connection to the Interactive Brokers TWS or Gateway API using `ib_async`. It specifically catches `ConnectionRefusedError` and general exceptions.

```python
try:
    ib.connect('127.0.0.1', 7497, clientId=1)
except ConnectionRefusedError:
    print("TWS/Gateway not running or API not enabled")
except Exception as e:
    print(f"Connection error: {e}")

```
