### Integrate Qt Event Loop with Asyncio

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Enables the execution of a combined Qt and asyncio event loop. It supports multiple Qt libraries (PyQt5/6, PySide2/6) and uses a polling mechanism to keep both loops responsive.

```python
def useQt(qtLib: str = "PyQt5", period: float = 0.01):
    def qt_step():
        loop.call_later(period, qt_step)
        if not stack:
            qloop = qc.QEventLoop()
            timer = qc.QTimer()
            timer.timeout.connect(qloop.quit)
            stack.append((qloop, timer))
        qloop, timer = stack.pop()
        timer.start(0)
        qloop.exec() if qtLib == "PyQt6" else qloop.exec_()
        timer.stop()
        stack.append((qloop, timer))
        qApp.processEvents()

    # ... initialization logic ...
```
