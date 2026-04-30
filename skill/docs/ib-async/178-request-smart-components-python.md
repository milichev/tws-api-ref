### Request Smart Components (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Obtains a mapping from single-letter codes to exchange names. This request requires the exchanges to be open; otherwise, an empty list will be returned. It returns a list of SmartComponent objects.

```python
def reqSmartComponents(self, bboExchange: str) -> list[SmartComponent]:
    """
    Obtain mapping from single letter codes to exchange names.

    Note: The exchanges must be open when using this request, otherwise an
    empty list is returned.
    """
    return self._run(self.reqSmartComponentsAsync(bboExchange))
```
