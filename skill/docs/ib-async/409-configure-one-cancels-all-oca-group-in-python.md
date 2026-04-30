### Configure One Cancels All (OCA) Group in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Assigns orders to a One Cancels All (OCA) group, ensuring that if one order in the group is executed, all other orders in the group are canceled. This is useful for strategies involving multiple contingent orders. It takes a list of orders, an OCA group name, and an OCA type as input.

```python
@staticmethod
def oneCancelsAll(orders: list[Order], ocaGroup: str, ocaType: int) -> list[Order]:
        """
        Place the trades in the same One Cancels All (OCA) group.

        https://interactivebrokers.github.io/tws-api/oca.html

        Args:
            orders: The orders that are to be placed together.
        """
        for o in orders:
            o.ocaGroup = ocaGroup
            o.ocaType = ocaType
        return orders
```
