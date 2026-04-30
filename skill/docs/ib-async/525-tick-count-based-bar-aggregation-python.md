### Tick Count-Based Bar Aggregation (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Represents the aggregation of ticks into bars based on a fixed number of ticks. The TickBars class inherits from Op and is initialized with a count. It processes ticks and forms a new bar once the specified tick count is reached.

```python
class TickBars(Op):

```
