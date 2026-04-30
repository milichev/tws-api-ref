### Python: Set Connection Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Allows setting additional connection options as a string. These options are encoded and used during the connection handshake. An example provided is '+PACEAPI' for enabling request pacing in newer TWS/Gateway versions.

```python
def setConnectOptions(self, connectOptions: str):
        """
        Set additional connect options.

        Args:
            connectOptions: Use "+PACEAPI" to use request-pacing built
                into TWS/gateway 974+ (obsolete).
        """
        self.connectOptions = connectOptions.encode()
```
