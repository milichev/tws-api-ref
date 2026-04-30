### Contract Creation and Recreation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the base Contract class with methods for creating and recreating contract objects. It handles different security types and ensures proper initialization.

```python
class Contract:
    # ... (previous code)

    @staticmethod
    def create(**kwargs) -> "Contract":
        """Create a Contract object from keyword arguments."""
        secType = kwargs.get("secType", "Contract")
        cls = {
            "NEWS": Contract,
            "EVENT": Contract,
            "EC": Contract,  # Event Contracts (binary yes/no results)
        }.get(secType, Contract)

        if cls is not Contract:
            kwargs.pop("secType", "")

        return cls(**kwargs)


    @staticmethod
    def recreate(c) -> "Contract":
        """Comply an existing generic Contract into its most specific type."""
        return Contract.create(**util.dataclassAsDict(c))
```
