### Qualify Contract Details Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously looks up and qualifies contract details. It returns matching Contract objects or a list of contracts if the request is ambiguous and 'returnAll' is True. Returns None for unqualified contracts.

```python
_async _qualifyContractsAsync(_* contracts_, _returnAll =False_)
```
