[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [02 Notes &amp; Limitations](02-notes-and-limitations.md)


## Notes & Limitations

While Interactive Brokers does maintain a Python, Java, C#, and C++ offering for the TWS API, C# and our Excel offerings are exclusively available for Windows PC. As a result, these features are not available on Linux or Mac OS.

### Requirements

*   A funded and opened IBKR Pro account
*   The current Stable or Latest release of the TWS or IB Gateway
*   The current Stable or Latest release of the TWS API
*   A working knowledge of the programming language our **Testbed** sample projects are developed in.

The minimum supported language version is documented on the right for each of our supported languages.

Please be sure to toggle the indicated language to the language of your choosing.

Minimum supported Python release is version 3.11.0.

### Supported Two Factor Authentication (2FA)

Interactive Brokers maintains a strong breadth of supported 2FA systems across our platforms. Given the API does not support account management, certain 2FA methods are not supported. When attempting to authenticate using our API systems, please ensure that a supported 2FA method is enabled for the account.

Two Factor Authentication (2FA) is required for all users at Interactive Brokers.  
 

### 02.02 Supported Two Factor Authentication (2FA)

*   IB Key
*   Handy Key (Smart Phone applications)
*   SMS / Text Messages
*   Digital Security Card+ (DSC+)

#### Unsupported 2FA Methods

*   Security Code Card (Sometimes referred to as Bingo Card)
*   Temporary Security Code Card
*   Online Code Card

### Limitations

Our programming interface is designed to automate some of the operations a user normally performs manually within the TWS Software such as placing orders, monitoring your account balance and positions, viewing an instrument’s live data… etc. There is no logic within the API other than to ensure the integrity of the exchanged messages. Most validations and checks occur in the backend of TWS and our servers. Because of this it is highly convenient to familiarize with the TWS itself, in order to gain a better understanding on how our platform works. Before spending precious development time troubleshooting on the API side, it is recommended to first experiment with the TWS directly.

**Remember:** If a certain feature or operation is not available in the TWS, it will not be available on the API side either!

### C# for MacOS

The TWS API C# source files are not available through the Mac and Unix distribution download as the language is built around Dynamic Link Library (DLL) files for execution. This is because DLL files are exclusively supported through Windows platforms.

### C++ DLLs and Static Linking

Following the TWS API’s recent migration to Protobuf, clients developing in C++ should prioritize static linking over the use of DLLs.

This recommendation is based on the Google Protobuf documentation. For more information on the reasoning behind it, or questions on enabling DLLs for use with Protobuf, please see [DLLs vs static linking](https://chromium.googlesource.com/external/github.com/google/protobuf/+/HEAD/cmake/README.md#dlls-vs_static-linking).

### Canadian Residents Restricted From Programmatically Trading Canadian Products

Interactive Brokers Canada Inc. (IBC) does not allow users to use your own trading application to electronically submit order for products traded on a Canadian exchange or other marketplace through API, which would include Third Party Integrations. This decision was made through multiple and extensive communications between IBC compliance and personnel and senior management of the Canadian Investment Regulatory Organization (CIRO), formerly the Investment Industry Regulatory Organization of Canada (IIROC), our self-regulatory organization.

CIRO has implemented [IIROC Dealer Member Rule (DMR) 3200](https://www.ciro.ca/sites/default/files/legacy/2021-09/RulesCollated_090121_en.pdf) A. 1. (b) (i) which prohibits CIRO registrants, including IBC, from allowing its clients to use their own automated order systems to generated orders.

Unfortunately, these restrictions would be also applicable with third-party applications like TradingView, NinjaTrader, or other such groups as they use an API connection.

### Paper Trading

If your regular trading account has been approved and funded, you can use your Account Management page to open a [Paper Trading Account](https://www.ibkrguides.com/clientportal/papertradingaccount.htm) which lets you use the full range of trading facilities in a simulated environment using real market conditions. Using a Paper Trading Account will allow you not only to get familiar with the TWS API but also to test your trading strategies without risking your capital.

Please be aware that the Paper Trading Environment relies on more simulated technologies than the Live trading environment. As a result, certain behavior such as order execution may vary

Note the paper trading environment has inherent [limitations](https://www.ibkrguides.com/clientportal/aboutpapertradingaccounts.htm).
