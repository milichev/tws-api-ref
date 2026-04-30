### Manage API Request Throttling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Implements a queue-based throttling system to ensure outgoing messages do not exceed defined rate limits. It uses an asynchronous loop to track timestamps and emit signals when throttling starts or ends.

```python
def sendMsg(self, msg: str):
	loop = getLoop()
	t = loop.time()
	times = self._timeQ
	msgs = self._msgQ
	while times and t - times[0] > self.RequestsInterval:
		times.popleft()

	if msg:
		msgs.append(msg)

	while msgs and (len(times) < self.MaxRequests or not self.MaxRequests):
		msg = msgs.popleft()
		self.conn.sendMsg(self._prefix(msg.encode()))
		times.append(t)

	if msgs:
		if not self._isThrottling:
			self._isThrottling = True
			self.throttleStart.emit()
		loop.call_at(times[0] + self.RequestsInterval, self.sendMsg, None)
```
