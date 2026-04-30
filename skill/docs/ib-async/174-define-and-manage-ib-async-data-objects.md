### Define and Manage ib-async Data Objects

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The ib-async library utilizes dataclasses to represent financial data structures. These objects include helper methods like dict(), nonDefaults(), tuple(), and update() to facilitate data manipulation and state management.

```python
from ib_async.objects import CommissionReport, ExecutionFilter, BarData, RealTimeBar, TickAttrib

# Example: Creating and updating a BarData object
bar = BarData(open=100.0, close=105.0)
bar.update(volume=1000)

# Get fields that differ from defaults
changes = bar.nonDefaults()

# Convert to dictionary or tuple
bar_dict = bar.dict()
bar_tuple = bar.tuple()
```
