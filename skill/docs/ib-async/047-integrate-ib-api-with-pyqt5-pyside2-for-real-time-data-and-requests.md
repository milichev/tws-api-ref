### Integrate IB API with PyQt5/PySide2 for Real-time Data and Requests

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Shows how to integrate IB API's real-time streaming and synchronous requests within a single-threaded Qt application using PyQt5 or PySide2. It ensures the UI remains responsive during API calls, such as qualifying contracts to get unique identifiers.

```python
# Example assumes PyQt5 is installed and configured.
# For PySide2, uncomment the relevant lines.

# import PyQt5.QtWidgets as QtWidgets
# import PyQt5.QtCore as QtCore
# import ib_async as ib
# import util

# util.useQt(util.PYQT5)

# class TickerTable(QtWidgets.QWidget):
#     def __init__(self):
#         super().__init__()
#         self.ib = ib.IB()
#         self.ib.connect()
#         self.initUI()

#     def initUI(self):
#         # ... UI setup ...
#         contract = ib.Stock('IBM', 'SMART', 'USD')
#         self.ticker = self.ib.reqMktData(contract)
#         self.ticker.updateEvent += self.onTicker

#     def onTicker(self, ticker):
#         # ... update UI with ticker data ...
#         pass

#     def closeEvent(self, event):
#         self.ib.disconnect()
#         event.accept()

# if __name__ == '__main__':
#     app = QtWidgets.QApplication([])
#     table = TickerTable()
#     table.show()
#     app.exec_()
```
