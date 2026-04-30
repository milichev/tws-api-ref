### Error Handling for ib_async Connection

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Provides an example of how to implement error handling when connecting to the TWS or Gateway using ib_async. It specifically catches ConnectionRefusedError if the TWS/Gateway is not running or API is not enabled, and a general Exception for other connection issues.

```python
try:
    ib.connect('127.0.0.1', 7497, clientId=1)
except ConnectionRefusedError:
    print("TWS/Gateway not running or API not enabled")
except Exception as e:
    print(f"Connection error: {e}")
```
