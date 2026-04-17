*   [TWS API](../index.md)
*   [TWS API Documentation](index.md)
*   [18 Error Handling](18-error-handling.md)

## Error Handling

When a client application sends a message to TWS which requires a response which has an expected response (i.e. placing an order, requesting market data, subscribing to account updates, etc.), TWS will almost either always 1) respond with the relevant data or 2) send an error message to [EWrapper.error()](18.04-error.md).

*   **Exceptions when no response can occur**: Also, if a request is made prior to full establishment of connection (denoted by a returned 2104 or 2106 error code _“Data Server is Ok”_), there may not be a response from the request.

Error messages sent by the TWS are handled by the [EWrapper.error()](18.04-error.md) method. The [EWrapper.error()](18.04-error.md) event contains the originating request Id (or the orderId in case the error was raised when placing an order), a numeric error code and a brief description. It is important to keep in mind that this function is used for _true_ error messages as well as notifications that do not mean anything is wrong.

**API Error Messages when TWS is not set to the English Language**

*   Currently on the Windows platform, error messages are sent using Latin1 encoding. If TWS is launched in a non-Western language, it is recommended to enable the setting at Global Configuration -> API -> Settings to “Show API error messages in English”.