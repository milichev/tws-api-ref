### Handle Socket Data and Protocol Decoding

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Processes incoming raw TCP data by reading a 4-byte length prefix to reconstruct messages. It decodes the payload, splits fields by null characters, and manages the API handshake and state transitions.

```python
def _onSocketHasData(self, data):
	self._data += data
	while True:
		if len(self._data) <= 4: break
		msgEnd = 4 + struct.unpack(">I", self._data[:4])[0]
		if len(self._data) < msgEnd: break
		msg = self._data[4:msgEnd].decode(errors="backslashreplace")
		self._data = self._data[msgEnd:]
		fields = msg.split("\0")
		fields.pop()
```
