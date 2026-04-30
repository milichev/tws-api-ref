### Python: Synchronous Connection Wrapper

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Provides a synchronous wrapper for the asynchronous connection method. This function blocks until the asynchronous connection process is complete or times out. It's useful for integrating asynchronous operations into synchronous code flows.

```python
def connect(self, host: str, port: int, clientId: int, timeout: float | None = 2.0):
        """
        Connect to a running TWS or IB gateway application.

        Args:
            host: Host name or IP address.
            port: Port number.
            clientId: ID number to use for this client; must be unique per
                connection.
            timeout: If establishing the connection takes longer than
                ``timeout`` seconds then the ``asyncio.TimeoutError`` exception
                is raised. Set to 0 to disable timeout.
        """
        run(self.connectAsync(host, port, clientId, timeout))
```
