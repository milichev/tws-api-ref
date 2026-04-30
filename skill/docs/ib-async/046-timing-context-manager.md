### Timing Context Manager

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

A context manager for timing code execution. It records the start time upon entering the context and prints the elapsed time (formatted with SI prefixes) upon exiting.

```python
import time

class timeit:
    """Context manager for timing."""

    def __init__(self, title="Run"):
        self.title = title

    def __enter__(self):
        self.t0 = time.time()

    def __exit__(self, *_args):
        print(self.title + " took " + formatSI(time.time() - self.t0) + "s")
```
