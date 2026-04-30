  [index.html](IBKR TWS API) -> 
  [11-ecs-ref.md](11 EClientSocket Class Reference) -> 

 11 EClientSocket Class Reference


## EClientSocket Class Reference

TWS/Gateway client class This client class contains all the available methods to communicate with IB. Up to 32 clients can be connected to a single instance of the TWS/Gateway simultaneously. From herein, the TWS/Gateway will be referred to as the Host.

Inheritance diagram for EClient:

![](./images/classIBApi_1_1EClient.png)

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| serverVersion (int version | void EClientMsgSink. | string time) |
| eConnect (string host | void | int port |
| eConnect (string host | void | int port |
| redirect (string host) | void | Redirects connection to different host. |
| eDisconnect (bool resetState=true) | override void | Closes the socket connection and terminates its thread. |

### Protected Member Functions

| Name | Type | Description |
| --- | --- | --- |
| createClientStream (string host | virtual Stream | int port) |
| prepareBuffer (BinaryWriter paramsList) | override uint | None |
| CloseAndSend (BinaryWriter request | override void | uint lengthPos) |
