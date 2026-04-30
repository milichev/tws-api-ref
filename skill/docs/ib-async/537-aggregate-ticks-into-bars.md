### Aggregate Ticks into Bars

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for aggregating raw tick data into structured bars based on time intervals, tick counts, or volume thresholds. These methods emit completed Bar objects and maintain a history in a BarList.

```python
from ib_async.ticker import TimeBars, TickBars, VolumeBars

# Time-based aggregation
time_bars = TimeBars(timer=my_timer_event)

# Tick-based aggregation
tick_bars = TickBars(count=100)

# Volume-based aggregation
volume_bars = VolumeBars(volume=1000)
```
