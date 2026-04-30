### Request Current Time (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests the current time from the TWS. This method is blocking and relies on an asynchronous call to fetch the time.

```python
def reqCurrentTime(self) -> datetime.datetime:
        """
        Request TWS current time.

        This method is blocking.
        """
        return self._run(self.reqCurrentTimeAsync())
```
