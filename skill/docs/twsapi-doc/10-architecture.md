  [index.html](IBKR TWS API) -> 
  [10-architecture.md](10 Architecture) -> 

 10 Architecture


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

### The Trader Workstation

Our market maker-designed IBKR Trader Workstation (TWS) lets traders, investors, and institutions trade stocks, options, futures, forex, bonds, and funds on over 100 markets worldwide from a single account. The TWS API is a programming interface to TWS, and as such, for an application to connect to the API there must first be a running instance of TWS or IB Gateway.

### The IB Gateway

As an alternative to TWS for API users, IBKR also offers IB Gateway (IBGW). From the perspective of an API application, IB Gateway and TWS are identical; both represent a server to which an API client application can open a socket connection after the user has authenticated. With either application (TWS or IBGW), the user must manually enter their username and password into a login window. For security reasons, a headless session of TWS or IBGW without a GUI is not supported. From the user’s perspective, IB Gateway may be advantageous because it is a lighter application which consumes about 40% fewer resources.

Both TWS and IBGW were designed to be restarted daily. This is necessary to perform functions such as re-downloading contract definitions in cases where contracts have been changed or new contracts have been added. Beginning in version 974+ both applications offer an autorestart feature that allows the application to restart daily without user intervention. With this option enabled, TWS or IBGW can potentially run from Sunday to Sunday without re-authenticating. After the nightly server reset on Saturday night it will be necessary to again enter security credentials.

The advantages of TWS over IBGW is that it provides the end user with many tools (Risk Navigator, OptionTrader, BookTrader, etc) and a graphical user interface which can be used to monitor an account or place orders. For beginning API users, it is recommended to first become acquainted with TWS before using IBGW.

**For simplicity, this guide will mostly refer to the TWS although the reader should understand that for the TWS API’s purposes, TWS and IB Gateway are synonymous.**
