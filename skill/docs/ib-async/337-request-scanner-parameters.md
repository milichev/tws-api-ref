### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests an XML string containing available scanner parameters. This method is blocking and internally calls an asynchronous version to fetch the data. The return type is a string representing the XML parameters.

```python
def reqScannerParameters(self) -> str:
        """
        Requests an XML list of scanner parameters.

        This method is blocking.
        """
        return self._run(self.reqScannerParametersAsync())
```
