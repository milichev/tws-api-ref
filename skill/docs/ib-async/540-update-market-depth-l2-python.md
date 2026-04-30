### Update Market Depth (L2) (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Updates the Level 2 market depth data for a given ticker. It handles insert, update, and delete operations on bids and asks, maintaining the order book. The function updates internal dictionaries (`domBidsDict`, `domAsksDict`) and then converts the values into lists for user consumption.

```python
def updateMktDepthL2(
        self,
        reqId: int,
        position: int,
        marketMaker: str,
        operation: int,
        side: int,
        price: float,
        size: float,
        isSmartDepth: bool = False,
    ):
        # operation: 0 = insert, 1 = update, 2 = delete
        # side: 0 = ask, 1 = bid
        ticker = self.reqId2Ticker[reqId]

        # 'dom' is a dict so we can address position updates directly
        dom = ticker.domBidsDict if side else ticker.domAsksDict

        if operation in {0, 1}:
            # '0' is INSERT NEW
            # '1' is UPDATE EXISTING
            # We are using the same operation for "insert or overwrite" directly.
            dom[position] = DOMLevel(price, size, marketMaker)
        elif operation == 2:
            # '2' is DELETE EXISTING
            size = 0
            try:
                level = dom.pop(position)
                price = level.price
            except Exception as _: 
                # invalid position requested for removal, so ignore the request
                pass

        # To retain the original API structure, we convert all sorted dict
        # values into lists for users to consume.
        # Users can also read ticker.domBidsDict or ticker.domAsksDict directly.
        values = list(dom.values())
        if side:
            # Update BID for users
            ticker.domBids = values
        else:
            # Update ASK for users
            ticker.domAsks = values
```
