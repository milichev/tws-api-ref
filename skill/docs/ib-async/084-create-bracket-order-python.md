### Create Bracket Order - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Creates a limit order that is bracketed by a take-profit and a stop-loss order. The bracketed orders can then be submitted using `ib.placeOrder`.

```python
ib.bracketOrder(action, quantity, limitPrice, takeProfitPrice, stopLossPrice, **kwargs)
```
