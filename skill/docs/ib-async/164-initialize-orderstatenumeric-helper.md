### Initialize OrderStateNumeric Helper

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates the usage of OrderStateNumeric as a type helper for mypy when converting order states to a numeric representation with specific precision.

```python
state_numeric: OrderStateNumeric = state.numeric(digits=2)
```
