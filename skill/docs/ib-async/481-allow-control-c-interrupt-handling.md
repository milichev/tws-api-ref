### Allow Control-C Interrupt Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Enables the program to be interrupted by a Control-C signal. This function modifies the signal handling behavior for SIGINT.

```python
import signal

def allowCtrlC():
    """Allow Control-C to end program."""
    signal.signal(signal.SIGINT, signal.SIG_DFL)
```
