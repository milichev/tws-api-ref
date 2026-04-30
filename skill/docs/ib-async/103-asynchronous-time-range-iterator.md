### Asynchronous Time Range Iterator

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

An asynchronous iterator that yields datetime objects at specified intervals between a start and end time. It uses `await` for waiting, making it suitable for non-blocking operations within an async context.

```python
[docs]
async def timeRangeAsync(
    start: Time_t, end: Time_t, step: float
) -> AsyncIterator[dt.datetime]:
    """Async version of :meth:`timeRange`."""
    assert step > 0

    delta = dt.timedelta(seconds=step)
    t = _fillDate(start)
    tz = dt.timezone.utc if t.tzinfo else None
    now = dt.datetime.now(tz)
    while t < now:
        t += delta

    while t <= _fillDate(end):
        await waitUntilAsync(t)
        yield t
        t += delta
```
