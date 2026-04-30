### Process News Ticks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming news ticks, including timestamp, provider code, article ID, headline, and extra data. It creates a NewsTick object, appends it to a list, and emits a news tick event.

```python
def tickNews(
            self,
            _reqId: int,
            timeStamp: int,
            providerCode: str,
            articleId: str,
            headline: str,
            extraData: str,
    ):
        news = NewsTick(timeStamp, providerCode, articleId, headline, extraData)
        self.newsTicks.append(news)
        self.ib.tickNewsEvent.emit(news)
```
