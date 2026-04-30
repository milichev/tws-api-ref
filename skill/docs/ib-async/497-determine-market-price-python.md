### Determine Market Price (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Determines the market price based on available bid, ask, and last prices. It prioritizes the last price if it falls within the bid-ask spread or if no bid/ask data is available. Otherwise, it uses the calculated midpoint. This function is crucial for real-time price tracking.

```python
def marketPrice(self) -> float:
    """
    Return the first available one of

    * last price if within current bid/ask or no bid/ask available;
    * average of bid and ask (midpoint).
    """
    if self.hasBidAsk():
        if self.bid <= self.last <= self.ask:
            price = self.last
        else:
            price = self.midpoint()
    else:
        price = self.last

    return price
```
