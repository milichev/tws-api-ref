[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [09 Troubleshooting &amp; Support](09-troubleshooting.md)


## Troubleshooting & Support

If there are remaining questions about available API functionality after reviewing the content of this documentation, the API Support group is available to help.

\-> It is important to keep in mind that IB **cannot provide programming assistance** or give suggestions on how to code custom applications. The API group can review log files which contain a record of communications between API applications and TWS, and give details about what the API can provide.

General suggestions on starting out with the IB system:

*   **Become familiar with the analogous functionality in TWS before using the API**: the TWS API is nothing but a communication channel between your client application and TWS. Each API function has a corresponding tool in TWS. For instance, the market data tick types in the API correspond to watchlist columns in TWS. Any order which can be created in the API can first be created in TWS, and it is recommended to do so. Additionally, if information is not available in TWS, it will not be available in the API. Before using IB Gateway with the API, it is recommended to first become familiar with TWS.
*   **Make use of the sample API applications**: the sample applications distributed with the API download have examples of essentially every API function in each of the available programming languages. If an issue does not occur in the corresponding sample application, that implies there is a problem with the custom implementation.
*   **Upgrade TWS or IB Gateway periodically**: TWS and IB Gateway often have new software releases that have enhancements, and that can sometimes have bug fixes. Because of this, we strongly recommend our users to keep their software as up to date as possible. If you are experiencing a specific problem that is occurring in TWS or IB Gateway and not in the API program, it is likely resolved in the more recent software build.

### Log Files

Log files are used by developers and support to unambiguously understand the behavior of a request.

These files are stored on the clients machine and are only sent to Interactive Brokers by client request.

These logs will recycle every 7 days. This would include the current day and the prior 6 days.

### API Logs

TWS and IB Gateway can be configured to create a separate log file which has a record of just communications with API applications. This log is not enabled by default; but needs to be enabled by the Global Configuration setting **“Create API Message Log File”**(picture below).

*   API logs contain a record of exchanged messages between API applications and TWS/IB Gateway. Since only API messages are recorded, the API logs are more compact and easier to handle. However they do not contain general diagnostic information about TWS/IBG as the TWS/IBG logs. The TWS/IBG settings folder is by default **C:\\Jts** (or IBJts on Mac/Linux). The API logs are named **api.\[clientId\].\[day\].log**, where \[clientId\] corresponds to the Id the client application used to connect to the TWS and \[day\] to the week day (i.e. api.123.Thu.log).
*   There is also a setting “Include Market Data in API Log” that will include streaming market data values in the API log file. Historical candlestick data is always recorded in the API log.

**Note:** Both the API and TWS logs are encrypted locally. The API logs can be decrypted for review from the associated TWS or IB Gateway session, just like the TWS logs, as shown in the section describing the Local location of logs.

**Note:** The TWS/IB Gateway log file setting has to be set to ‘Detail’ level before an issue occurs so that information recorded correctly when it manifests. However due to the high amount of information that will be generated under this level, the resulting logs can grow considerably in size.  
 

**Enabling creation of API logs**

TWS:

1.  Navigate to File/Edit → Global Configuration → API → Settings
2.  Check the box _Create API message log file_
3.  Set _Logging Level_ to _Detail_
4.  Click Apply and Ok

![TWS Global Configuration window displaying API settings with API logging.](./images/API_Settings-700x416.png)

IB Gateway:

1.  Navigate to Configure → Settings → API → Settings
2.  Check the box _Create API message log file_
3.  Set _Logging Level_ to _Detail_
4.  Click Apply and Ok

![IB Gateway settings window displaying API settings with API logging.](./images/API_Settings_ibg-700x479.png)

### How To Enable Debug Logging

Enabling DEBUG-level logging for the host platform (TWS or IBG, this does not affect API logs):

1.  Navigate to the root TWS/IBG installation directory
2.  Find jts.ini and open in text editor
3.  Put debug=1 under the \[Communication\] section
4.  Reboot TWS/IBG

Setting debug=1 has added benefits in TWS.

1.  Debug=1 also allows you to enter conIds into a watchlist to resolve them into symbols. Type/paste the conId in an empty watchlist row, add |C (vertical bar, capital C) at the end, and press Enter. Example: 265598|C will resolve immediately to AAPL (exchange will be SMART where available, primary otherwise).
    *   If the instrument is already present in the watchlist, nothing will happen.
2.  Additional detail in the “Description” window for an instrument, normally available by right-clicking on an instrument in a watchlist and selecting Financial Instrument Info >> Description from the context menu. Debug=1 will add the conId, min order sizes, market rules (i.e., min price increments and thresholds), all available order types, and all available exchanges to this interface. Changing the behavior of TWS to bring up that Description window on double-click can make it easier to find.
    1.  In TWS, go to Global Configuration >> Display >> Ticker Row
    2.  Change “Double-click on Financial Instrument will” dropdown menu to “Open Contract Details”

### Location of Interactive Brokers Logs

Logs are stored in the TWS settings directory, C:\\Jts\\ and then your user subdirectory by default on a Windows computer (the default can be configured differently on the login screen).

The path to the log file directory can be found from a TWS or IB Gateway session by using the combination **Ctrl-Alt-U**. This will reveal path such as C:\\Jts\\detcfsvirl\\ (on Windows).

Due to privacy regulations, logs are **encrypted** before they are saved to disk. To review them on your machine, you may need to [Export Your Logs](../undefined/index.md) from the associated TWS or IB Gateway session.

### How To Delete Logs

In some instances, your logs may be too large to export or upload for Client Services to review. In scenarios such as this, the Support team may request that you delete your existing API logs, and then replicate the error before attempting to upload them again.

To delete your logs:

1.  [Locate your Logs](../undefined/index.md).
2.  Exit TWS or IB Gateway session by clicking “File” and “Exit”.
3.  In your terminal or window explorer, navigate to your user subdirectory.
4.  Once in the directory, select the files labeled like “api.0.20250110.105733.ibgzenc”, “tws.20250110.105733.ibgzenc” or “ibgateway.20250110.105733.ibgzenc” and press the “Delete” key on your keyboard, or type ‘del {filename}’ into your terminal.

### Uploading Logs

If API logging has been enabled with the setting “Create API Message Log” during the time when an issue occurs, it can be uploaded to the API group.

**Important:** Please be aware that the process of uploading logs does not notify support, nor is a ticket logged. You will need to contact our representatives through a direct call, chat, or secure message center message for our representatives to be aware of the upload.

To upload logs as a Windows user:

1.  In TWS or IB Gateway, press CTRL+ALT+H to bring up the Upload Diagnostics window.
2.  In the “reason” text field, please type the reason for your upload.
    *   Alternatively, type “ATTENTION: ” and then the ticket number you are working with, or the name of your customer service representative.
3.  Find the small arrow in the upper right corner, click it and select “Advanced View”
4.  Make sure “Full internal state of the application” is checked
5.  Make sure “Include previous days logs and settings” is unchecked, unless the error happened on a prior day.
6.  Click Submit

To upload logs as a Mac and Linux user:

1.  In TWS or IB Gateway, press CMD+OPT+H to bring up the Upload Diagnostics window.
2.  In the “reason” text field, please type the reason for your upload.
    *   Alternatively, type “ATTENTION: ” and then the ticket number you are working with, or the name of your customer service representative.
3.  Find the small arrow in the upper right corner, click it and select “Advanced View”
4.  Make sure “Full internal state of the application” is checked
5.  Make sure “Include previous days logs and settings” is unchecked, unless the error happened on a prior day.
6.  Click Submit

If logs have been uploaded, please let the API Support group know by **creating a webticket** in the Message Center in Account Management (under Support) indicating the **username** of the associated TWS session. In some cases a TWS log may also be requested at the Detailed logging level. The TWS log can grow quite large and may not be uploadable by the automatic method; in this case an alternative means of upload can be found.

### Exporting Logs

1.  In TWS, navigate to Help menu >> Troubleshooting >> Diagnostics >> “API Logs” or “TWS Logs”.
2.  In IBG, both “API Logs” and “Gateway Logs” are accessible directly from the File menu.
3.  Click “Export Today Logs…” to decrypt the logs and save them in plaintext (logs are stored encrypted on your local machine)

### Reading Exported Logs

Each supported API language of the API contains a message file that translates a given number identifier into their corresponding request. The message identifier numbers used in the underlying wire protocol is the core of the TWS API.

The information on the right documents where each message reader file is located. The {TWS API} listed is the path to the primary TWS API or JTS folder created from the API installation.

By default, this will be saved directly on the C: drive.

Both the Incoming and Outgoing message IDs are listed in one file.

{TWS API}\\source\\pythonclient\\ibapi\\messages.py

In our API logs, the direction of the message is indicated by the arrow at the beginning:

**\->** for incoming messages (TWS to client)

**<-** for outgoing messages (client to TWS)

Thus  **<- 3** (outgoing request of type 3) is a placeOrder request, and the subsequent incoming requests are:

**\-> 5** \= openOrder response

**\-> 11** \= executionData response

**\-> 59** \= commissionReport response

Also note that the first openOrder response carries with it an orderStatus response in the same message. If that status were to change later, it would be delivered as a standalone message:

**\-> 3** \= orderStatus response

### Unset Values

Developers may often find a super-massive value returned from requests like market data, P&L information, and elsewhere. These are known as Unset values. Unset values are used throughout programming systems to indicate that a value is not available. Unset values are used in place of NULL characters to prevent any unexpected error be thrown in your code. Unset values are also used in place of values like 0 to avoid confusing viewers to believe they have an account balance of 0, or that an equity is worth $0.

An unset value is the maximum value of a given data type. So the Unset Double value will appear like 1.7976931348623157E308, which contains approximately 308 digits to intentionally appear extraneous.
