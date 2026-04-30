### Qualify Contracts (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fully qualifies the provided contracts in-place, filling in missing fields like the contract ID (conId). This method is blocking and returns a list of successfully qualified contracts.

```python
def qualifyContracts(self, *contracts: Contract) -> list[Contract]:
    """
    Fully qualify the given contracts in-place. This will fill in
    the missing fields in the contract, especially the conId.

    Returns a list of contracts that have been successfully qualified.

    This method is blocking.

    Args:
        contracts: Contracts to qualify.
    """
    return self._run(self.qualifyContractsAsync(*contracts))
```
