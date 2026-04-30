### Configure Console Logging

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Sets up a stream handler for logging messages to the console (stderr). It checks for existing handlers and either reuses them or creates a new one with a specified format and level.

```python
import logging
import sys

def logToConsole(level=logging.INFO):
    """Create a log handler that logs to the console."""
    logger = logging.getLogger()
    stdHandlers = [
        h
        for h in logger.handlers
        if type(h) is logging.StreamHandler and h.stream is sys.stderr
    ]

    if stdHandlers:
        # if a standard stream handler already exists, use it and
        # set the log level for the ib_async namespace only
        logging.getLogger("ib_async").setLevel(level)
    else:
        # else create a new handler
        logger.setLevel(level)
        formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
        handler = logging.StreamHandler()
        handler.setFormatter(formatter)
        logger.addHandler(handler)
```
