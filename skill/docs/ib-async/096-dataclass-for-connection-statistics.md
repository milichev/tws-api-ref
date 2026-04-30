### Dataclass for Connection Statistics

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Holds statistics related to a network connection, such as start time, duration, and byte/message counts for sent and received data. Useful for monitoring connection health.

```python
from dataclasses import dataclass


[docs]
@dataclass(slots=True, frozen=True)
class ConnectionStats:
    startTime: float
    duration: float
    numBytesRecv: int
    numBytesSent: int
    numMsgRecv: int
    numMsgSent: int
```
