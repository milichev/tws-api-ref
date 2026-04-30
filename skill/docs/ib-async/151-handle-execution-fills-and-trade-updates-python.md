### Handle Execution Fills and Trade Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes execution fills, updates trade objects, and logs trade activity. Emits events for live executions and stores results for non-live scenarios. Dependencies include Fill, TradeLogEntry, and logging utilities.

```python
def execDetails(self, execId, contract, execution, commissionReport, time):
        fill = Fill(contract, execution, CommissionReport(), time)
        if execId not in self.fills:
            # first time we see this execution so add it
            self.fills[execId] = fill
            if trade:
                trade.fills.append(fill)
                logEntry = TradeLogEntry(
                    time,
                    trade.orderStatus.status,
                    f"Fill {execution.shares}@{execution.price}",
                )
                trade.log.append(logEntry)
                if isLive:
                    self._logger.info(f"execDetails: {fill}")
                    self.ib.execDetailsEvent.emit(trade, fill)
                    trade.fillEvent(trade, fill)

        if not isLive:
            self._results[reqId].append(fill)
```
