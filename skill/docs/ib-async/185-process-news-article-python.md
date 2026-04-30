### Process News Article (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles a news article, including its type and text content. It creates a NewsArticle object and ends the request with the article.

```python
def newsArticle(self, reqId: int, articleType: int, articleText: str):
        article = NewsArticle(articleType, articleText)
        self._endReq(reqId, article)
```
