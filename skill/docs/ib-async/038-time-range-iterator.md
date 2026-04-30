### Time Range Iterator

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

An iterator that yields datetime objects at specified intervals between a start and end time. It ensures that the iteration starts from the current time or later and waits until each specified time point is reached.

```python
[docs]
def timeRange(start: Time_t, end: Time_t, step: float) -> Iterator[dt.datetime]:
    """
    Iterator that waits periodically until certain time points are
    reached while yielding those time points.

    Args:
        start: Start time, can be specified as datetime.datetime,
            or as datetime.time in which case today is used as the date
        end: End time, can be specified as datetime.datetime,
            or as datetime.time in which case today is used as the date
        step (float): The number of seconds of each period
    """
    assert step > 0
    delta = dt.timedelta(seconds=step)
    t = _fillDate(start)
    tz = dt.timezone.utc if t.tzinfo else None
    now = dt.datetime.now(tz)
    while t < now:
        t += delta

    while t <= _fillDate(end):
        waitUntil(t)
        yield t
        t += delta
```
