### Check connection status

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Provides methods to check the current state of the client's connection to the Interactive Brokers API. `isConnected` returns whether the socket connection is active, and `isReady` indicates if the API is fully operational and ready to serve requests.

```python
if client.isConnected():
    print("Socket is connected.")

if client.isReady():
    print("API is ready to serve requests.")
```
