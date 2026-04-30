### Get Ticker for Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the ticker for a given contract. The contract must have been previously requested with `reqMktData`. The ticker might not be immediately available after calling `reqMktData`.

```python
ib.ticker(contract)
```
