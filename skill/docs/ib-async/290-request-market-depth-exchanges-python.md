### Request Market Depth Exchanges (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of exchanges that have multiple market makers. This information is useful for understanding market depth data availability. The function returns a list of DepthMktDataDescription objects.

```python
def reqMktDepthExchanges(self) -> list[DepthMktDataDescription]:
    """
    Get those exchanges that have have multiple market makers
    """
```
