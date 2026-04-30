### Get News Ticks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of news ticks, which contain headlines for news articles. The full article content can be fetched using the `reqNewsArticle` method.

```python
def newsTicks(self) -> list[NewsTick]:
    """
    List of ticks with headline news.
    The article itself can be retrieved with :meth:`.reqNewsArticle`.
    """
    return self.wrapper.newsTicks
```
