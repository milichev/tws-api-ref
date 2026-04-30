### ContractDescription Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section covers the ContractDescription object, outlining its attributes and methods. Key attributes include contract and derivativeSecTypes, while methods like dict(), nonDefaults(), tuple(), and update() allow for data retrieval and modification. This object provides descriptive information about a contract.

```python
class ContractDescription:
    contract: Contract
    derivativeSecTypes: list

    def dict(self) -> dict:
        """Returns a dictionary representation of the contract description."""
        pass

    def nonDefaults(self) -> dict:
        """Returns a dictionary of non-default attributes."""
        pass

    def tuple(self) -> tuple:
        """Returns a tuple representation of the contract description."""
        pass

    def update(self, **kwargs):
        """Updates contract description with provided keyword arguments."""
        pass
```
