### Contract Hashing and Equality

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Implements methods for checking if a contract is hashable and defines equality and hashing behavior for Contract objects. It handles special cases like 'BAG' and 'CONTFUT' contracts.

```python
    def isHashable(self) -> bool:
        """
        See if this contract can be hashed by conId.

        Note: Bag contracts always get conId=28812380, so they're not hashable by conId,
              but we generate a synthetic hash for them based on leg details instead.
        """
        return bool(self.conId)

    def __eq__(self, other):
        return isinstance(other, Contract) and (
            self.conId
            and self.conId == other.conId
            or util.dataclassAsDict(self) == util.dataclassAsDict(other)
        )

    def __hash__(self) -> int:
        if self.secType == "BAG":
            return hash(
                tuple(
                    [
                        util.dataclassAsTuple(b)
                        for b in sorted(self.comboLegs, key=lambda x: x.conId)
                    ]
                    + [self.symbol, self.exchange]
                )
            )

        if not self.isHashable():
            raise ValueError(
                f"Contract {self} can't be hashed because no 'conId' value exists. Qualify contract to populate 'conId'."
            )

        if self.secType == "CONTFUT":
            # CONTFUT gets the same conId as the front contract, invert it here
            h = -self.conId
        else:
            h = self.conId

        return h
```
