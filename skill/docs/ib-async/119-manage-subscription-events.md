### Manage Subscription Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Iterates through active tickers, subscribers, and trades to mark all associated update events as completed.

```python
def setEventsDone(self):
	"""Set all subscription-type events as done."""
	events = [ticker.updateEvent for ticker in self.tickers.values()]
	events += [sub.updateEvent for sub in self.reqId2Subscriber.values()]
	for trade in self.trades.values():
		events += [
			trade.statusEvent,
			trade.modifyEvent,
			trade.fillEvent,
			trade.filledEvent,
			trade.commissionReportEvent,
			trade.cancelEvent,
			trade.cancelledEvent,
		]
	for event in events:
		event.set_done()
```
