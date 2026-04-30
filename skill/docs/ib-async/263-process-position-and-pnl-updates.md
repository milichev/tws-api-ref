### Process Position and PnL Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Functions for tracking position changes and PnL calculations. They handle the lifecycle of position tracking and update PnL objects based on request IDs.

```python
def position(self, account, contract, posSize, avgCost):
    contract = Contract.recreate(contract)
    position = Position(account, contract, posSize, avgCost)
    positions = self.positions[account]
    if posSize == 0:
        positions.pop(contract.conId, None)
    else:
        positions[contract.conId] = position
    self.ib.positionEvent.emit(position)

def pnl(self, reqId, dailyPnL, unrealizedPnL, realizedPnL):
    pnl = self.reqId2PnL.get(reqId)
    if pnl:
        pnl.dailyPnL = dailyPnL
        pnl.unrealizedPnL = unrealizedPnL
        pnl.realizedPnL = realizedPnL
        self.ib.pnlEvent.emit(pnl)
```
