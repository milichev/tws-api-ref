### One Cancels All Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Groups orders to be placed in the same One Cancels All (OCA) group. This ensures that if one order in the group is executed, all other orders in the group are canceled.

```python
ib.oneCancelsAll(orders, ocaGroup, ocaType)
```
