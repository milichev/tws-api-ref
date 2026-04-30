### Qualify Contracts - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fully qualifies the given contracts in-place, filling in missing fields like `conId`. Returns a list of successfully qualified contracts. This method is blocking.

```python
ib.qualifyContracts(*contracts)
```
