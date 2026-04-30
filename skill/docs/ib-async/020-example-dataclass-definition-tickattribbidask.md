### Example Dataclass Definition: TickAttribBidAsk

Source: https://ib-api-reloaded.github.io/ib_async/api.html

An example of a specific ib_async object structure. It demonstrates how standard dataclass fields are defined with default values.

```python
from dataclasses import dataclass

@dataclass
class TickAttribBidAsk:
    bidPastLow: bool = False
    askPastHigh: bool = False
```
