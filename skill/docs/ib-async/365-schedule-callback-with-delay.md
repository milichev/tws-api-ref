### Schedule Callback with Delay

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Schedules a callback function to be executed after a specified delay. It handles time inputs that might only specify time, defaulting to the current date. Returns an event handle for the scheduled callback.

```python
def _fillDate(time: Time_t) -> dt.datetime:
    # use today if date is absent
    if isinstance(time, dt.time):
        t = dt.datetime.combine(dt.date.today(), time)
    else:
        t = time
    return t




[docs]
def schedule(time: Time_t, callback: Callable, *args):
    """
    Schedule the callback to be run at the given time with
    the given arguments.

    This will return the Event Handle.

    Args:
        time: Time to run callback. If given as :py:class:`datetime.time`
            then use today as date.
        callback: Callable scheduled to run.
        args: Arguments for to call callback with.
    """
    t = _fillDate(time)
    now = dt.datetime.now(t.tzinfo)
    delay = (t - now).total_seconds()
    loop = getLoop()
    return loop.call_later(delay, callback, *args)
```
