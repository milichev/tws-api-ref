### Order book and market depth

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Retrieves real-time market depth (DOM) for a specified contract and prints the current bid and ask prices in a loop.

```python
eurusd = Forex('EURUSD')
ticker = ib.reqMktDepth(eurusd)
while ib.sleep(5):
    print(
        [d.price for d in ticker.domBids],
        [d.price for d in ticker.domAsks])
```
