### Configure File Logging

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Sets up a file handler for logging messages. It configures the logger's level and adds a file handler with a specific format. This is useful for persistent logging.

```python
import logging

def logToFile(path, level=logging.INFO):
    """Create a log handler that logs to the given file."""
    logger = logging.getLogger()
    if logger.handlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)

    formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    handler = logging.FileHandler(path)
    handler.setFormatter(formatter)
    logger.addHandler(handler)
```
