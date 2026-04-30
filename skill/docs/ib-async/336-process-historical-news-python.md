### Process Historical News (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles historical news data, including time, provider code, article ID, and headline. It parses the timestamp, creates a HistoricalNews object, and appends it to the results for the given request ID.

```python
def historicalNews(
            self, reqId: int, time: str, providerCode: str, articleId: str, headline: str
    ):
        dt = parseIBDatetime(time)
        dt = cast(datetime, dt)
        article = HistoricalNews(dt, providerCode, articleId, headline)
        self._results[reqId].append(article)
```
