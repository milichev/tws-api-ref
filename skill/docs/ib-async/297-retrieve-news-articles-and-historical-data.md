### Retrieve News Articles and Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to fetch news provider lists, specific article content, and historical news headlines. These functions wrap asynchronous calls into blocking operations for easier integration.

```python
def reqNewsArticle(self, providerCode: str, articleId: str, newsArticleOptions: list[TagValue] = []) -> NewsArticle:
    return self._run(self.reqNewsArticleAsync(providerCode, articleId, newsArticleOptions))

def reqHistoricalNews(self, conId: int, providerCodes: str, startDateTime: str | datetime.date, endDateTime: str | datetime.date, totalResults: int, historicalNewsOptions: list[TagValue] = []) -> HistoricalNews:
    return self._run(self.reqHistoricalNewsAsync(conId, providerCodes, startDateTime, endDateTime, totalResults, historicalNewsOptions))
```
