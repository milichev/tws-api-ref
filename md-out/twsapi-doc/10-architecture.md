*   [TWS API](../index.md)
*   [TWS API Documentation](index.md)
*   [10 Architecture](10-architecture.md)

## Architecture

The TWS API is a BSD implementation that communicates request and response values across TCP socket using a end-line-delimited message protocol. While the underlying structure of the message will vary by request, requests typically follow a patter of indicating a message identifier, request identifier, and then directly relevant content for the request such as contract details or market data parameters.

The provided TWS API package use two distinct classes to accommodate the request / response functionality of the socket protocol, EClient and EWrapper respectively.

The EWrapper class is used to receive all messages from the host and distribute them amongst the affiliated response functions. The EReader class will retrieve the messages from the socket connection and decode them for distribution by the EWrapper class.

class TestWrapper(wrapper.EWrapper):

EClient or EClientSocket is used to send requests to the Trader Workstation. This client class contains all the available methods to communicate with the host. Up to 32 clients can be connected to a single instance of the host Trader Workstation or IB Gateway simultaneously.

The primary distinction in EClient and EClientSocket is the involvement of the EReader Class to trigger when requests should be processed. EClient is unique to the Python implementation and utilizes the Python Queue module in place of the EReaderSignal directly. Both the EReaderSignal and Python Queue module handle the queueing process for submitting messages across the socket connection. In either scenario, the EWrapper class must be implemented first to acknowledge the EClient requests.

class TestClient(EClient):
         def \_\_init\_\_(self, wrapper):
             EClient.\_\_init\_\_(self, wrapper)
    ...
    class TestApp(TestWrapper, TestClient):
    	def \_\_init\_\_(self):
    	TestWrapper.\_\_init\_\_(self)
             TestClient.\_\_init\_\_(self, wrapper=self)

**Note**: The EReaderSignal class is not used for Python API. The Python Queue module is used for inter-thread communication and data exchange.