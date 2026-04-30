[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [19 Financial Advisors](19-financial-advisors.md)


## Financial Advisors

Financial Advisors are able to manage their allocation groups from the TWS API.

**Note:** Modifications made through the API will effect orders placed through TWS, the TWS API, Client Portal, and the Client Portal API.

### Request FA Groups and Profiles

### 19.01 Request FA Groups and Profiles

**faDataType:** int. The configuration to change. Set to 1 or 3 as defined in the table below.  
)

Requests the FA configuration as set in TWS for the given FA Group or Profile.

```python
self.requestFA(1)
```

#### requestFA FA Data Types

| Type Code | Type Name | Description |
| --- | --- | --- |
| 1 | Groups | offer traders a way to create a group of accounts and apply a single allocation method to all accounts in the group. |
| 3 | Account Aliases | let you easily identify the accounts by meaningful names rather than account numbers. |

### Receiving FA Groups and Profiles

### 19.02 Receiving FA Groups and Profiles

**faDataType:** int. Receive the faDataType value specified in the requestFA. See [FA Data Types](#fa-data-types)

**faXmlData:** String. The xml-formatted configuration.  
)

Receives the Financial Advisor’s configuration available in the TWS.

```python
def receiveFA(self, faData: FaDataType, cxml: str):
	print("Receiving FA: ", faData)
	open('log/fa.xml', 'w').write(cxml)
```

### Replace FA Allocations

### 19.03 Replace FA Allocations

**reqId:** int. Request identifier used to track data.

**faDataType:** int. The configuration structure to change. Set to 1 or 3 as defined above.

**xml:** String. XML configuration for allocation profiles or group. See [Allocation Method XML Format](../undefined/index.md) for more details.  
)

```python
self.replaceFa(reqId, 1, xml)
```

#### replaceFA FA Data Types

| replaceFA Type Code | Type Name | Description |
| --- | --- | --- |
| 1 | Groups | offer traders a way to create a group of accounts and apply a single allocation method to all accounts in the group. |
| 2 | Account Aliases | let you easily identify the accounts by meaningful names rather than account numbers. |

**Note:** 

In order to confirm that your FA changes were saved, you may wait for the [EWrapper.replaceFAEnd](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-methods-e-f/#receive-fa) callback, which provides the corresponding reqId. In addition, after saving changes, it is advised to verify the new FA setup via [EClient.requestFA](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-methods-e-f/#request-fa). If it is called before changes are fully saved, you may receive an error, such as [error 10230](../undefined/index.md). See [Message Codes](../undefined/index.md).

[EClient.replaceFA](../undefined/index.md) only accepts faDataType 1 now. Otherwise, it may trigger [error 585](../undefined/index.md).

#### EWrapper.replaceFAEnd (

**reqId:** int. Request identifier used to track data.

**text:** String. the message text.

)

Marks the ending of the replaceFA reception.

```python
def replaceFAEnd(self, reqId: int, text: str):
    super().replaceFAEnd(reqId, text)
    print("ReplaceFAEnd.", "ReqId:", reqId, "Text:", text)
```

### Allocation Methods and Groups

A number of methods for account allocations are available with Financial Advisor and IBroker account structures to specify how trades should be distributed across multiple accounts.

Allocation Groups can be created or modified in the Trader Workstation directly as described in [TWS: Allocations and Transfers](https://www.ibkrguides.com/tws/usersguidebook/financialadvisors/create%20an%20account%20group%20for%20share%20allocation.htm).

Alternatively, allocation groups can be created or modified through the [EClient.replaceFA()](../undefined/index.md) method in the API.

Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified.

### 19.04 Allocation Methods and Groups

*   [Available Equity](../undefined/index.md)
*   [Equal Quantity](../undefined/index.md)
*   [Net Liquidation Value](../undefined/index.md)

#### User-specified allocation methods

###### Formerly known as Allocation Profiles

*   [Cash Quantity](../undefined/index.md)
*   [Percentages](../undefined/index.md)
*   [Ratios](../undefined/index.md)
*   [Shares](../undefined/index.md)

### Allocation Method XML Format

Allocation methods for financial advisor’s allocation groups are created using an XML format. The content below signifies the supported allocation groups and how to format them in their respective XML.

### Available Equity

Requires you to specify an order size. This method distributes shares based on the amount of available equity in each account. The system calculates ratios based on the Available Equity in each account and allocates shares based on these ratios.

**Example:** You transmit an order for 700 shares of stock XYZ. The account group includes three accounts, A, B and C with available equity in the amounts of $25,000, $50,000 and $100,000 respectively. The system calculates a ratio of 1:2:4 and allocates 100 shares to Client A, 200 shares to Client B, and 400 shares to Client C.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
    <name>MyTestProfile2</name>
    <defaultMethod>AvailableEquity</defaultMethod>
    <ListOfAccts varName="list">
      <Account>
        <acct>DU6202167</acct>
      </Account>
      <Account>
        <acct>DU6202168</acct>
      </Account>
    </ListOfAccts>
  </Group>
</ListOfGroups>
```

### Contracts Or Shares

This method allocates the absolute number of shares you enter to each account listed. If you use this method, the order size is calculated by adding together the number of shares allocated to each account in the profile.

**Example:**

Assume an order for 300 shares of stock ABC is transmitted.

In the example code shown in the right side, you can see that:

1.  Account A is set to receive 100.0 shares while Account B is set to receive 200.0 shares. Account A should receive 100 shares and Account B should receive 200 shares.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>ContractsOrShares</defaultMethod>
  
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>100.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>200.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```

### Equal Quantity

Requires you to specify an order size. This method distributes shares equally between all accounts in the group.

**Example:** You transmit an order for 400 shares of stock ABC. If your Account Group includes four accounts, each account receives 100 shares. If your Account Group includes six accounts, each account receives 66 shares, and then 1 share is allocated to each account until all are distributed.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
    <name>MyTestProfile2</name>
    <defaultMethod>Equal</defaultMethod>
    <ListOfAccts varName="list">
      <Account>
        <acct>DU6202167</acct>
      </Account>
      <Account>
        <acct>DU6202168</acct>
      </Account>
    </ListOfAccts>
  </Group>
</ListOfGroups>
```

### MonetaryAmount

The Monetary Amount method calculates the number of units to be allocated based on the monetary value assigned to each account.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>MonetaryAmount</defaultMethod>
  
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>1000.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>2000.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```

### Net Liquidation Value

Requires you to specify an order size. This method distributes shares based on the net liquidation value of each account. The system calculates ratios based on the Net Liquidation value in each account and allocates shares based on these ratios.

**Example:** You transmit an order for 700 shares of stock XYZ. The account group includes three accounts, A, B and C with Net Liquidation values of $25,000, $50,000 and $100,000 respectively. The system calculates a ratio of 1:2:4 and allocates 100 shares to Client A, 200 shares to Client B, and 400 shares to Client C.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
    <name>MyTestProfile2</name>
    <defaultMethod>NetLiq</defaultMethod>
    <ListOfAccts varName="list">
      <Account>
        <acct>DU6202167</acct>
      </Account>
      <Account>
        <acct>DU6202168</acct>
      </Account>
    </ListOfAccts>
  </Group>
</ListOfGroups>
```

### Percentages

This method will split the total number of shares in the order between listed accounts based on the percentages you indicate.

**Example:**

Assume an order for 300 shares of stock ABC is transmitted.

In the example code shown in the right side, you can see that:

1.  Account A is set to have 60.0 percentage while Account B is set to have 40.0 percentage. Account A should receive 180 shares and Account B should receive 120 shares.

While making modifications to allocations for profiles, the method uses an enumerated value. The number shown below demonstrates precisely what profile corresponds to which value.

| BUY ORDER | Positive Percent | Negative Percent |
| --- | --- | --- |
| Long Position | Increases position | No effect |
| Short Position | No effect | Decreases position |

| SELL ORDER | Positive Percent | Negative Percent |
| --- | --- | --- |
| Long Position | No effect | Decreases position |
| Short Position | Increases position | No effect |

**Note:**  
Do not specify an order size. Since the quantity is calculated by the system, the order size is displayed in the Quantity field after the order is acknowledged. This method increases or decreases an already existing position. Positive percents will increase a position, negative percents will decrease a position. For exmaple, to fully close out a position, you just need to specify percentage to be -100.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>Percent</defaultMethod>
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>60.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>40.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```

### Ratios

This method calculates the allocation of shares based on the ratios you enter.

**Example:**

Assume an order for 300 shares of stock ABC is transmitted.

In the example code shown in the right side, you can see that:

1.  A ratio of 1.0 and 2.0 is set to Account A and Account B. Account A should receive 100 shares and Account B should receive 200 shares.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ListOfGroups>
  <Group>
  <name>MyTestProfile2</name>
  <defaultMethod>Ratio</defaultMethod>
  
  <ListOfAccts varName="list">
  <Account>
    <acct>DU6202167</acct>
    <amount>1.0</amount>
  </Account>
  <Account>
    <acct>DU6202168</acct>
    <amount>2.0</amount>
  </Account>
  </ListOfAccts>
  </Group>
</ListOfGroups>
```

### Model Portfolios and the API

Advisors can use Model Portfolios to easily invest some or all of a client’s assets into one or multiple custom-created portfolios, rather than tediously managing individual investments in single instruments.

[More about Model Portfolios](https://www.interactivebrokers.com/en/index.php?f=20917)

The TWS API can access model portfolios in accounts where this functionality is available and a specific model has previously been setup in TWS. API functionality allows the client application to request model position update subscriptions, request model account update subscriptions, or place orders to a specific model.

Model Portfolio functionality **not** available in the TWS API:

*   Portfolio Model Creation
*   Portfolio Model Rebalancing
*   Portfolio Model Position or Cash Transfer

To request position updates from a specific model, the function [IBApi::EClient::reqPositionsMulti](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#request-positions-multi) can be used: [Position Update Subscription by Model](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#positions-multi)

To request model account updates, there is the function [IBApi::EClient::reqAccountUpdatesMulti](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#request-model-account-update), see: [Account Value Update Subscriptions by Model](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#model-account-update)

To place an order to a model, the IBApi.Order.ModelCode field must be set accordingly, for example:

```python
modelOrder = Order()
modelOrder.account = "DF12345"
modelOrder.modelCode = "Technology" # model for tech stocks first created in TWS
self.placeOrder(self.nextOrderId(), contract, modelOrder)
```

### Unification of Groups and Profiles

With TWS/IBGW build 983+, the API settings will have a new flag/checkbox, **“Use Account Groups with Allocation Methods”** (enabled by default for new users). If not enabled, groups and profiles would behave the same as before. If it is checked, group and profile functionality will be merged.

With TWS/IBGW Build 10.20+, this setting is now enabled by default, and moving forward into new versions, the two systems can be deemed as interchangeable for modifying allocation groups, placing orders, requesting account or portfolio summaries, or requesting multiple positions.

### Order Placement

For advisors to place orders to their [allocation groups](../undefined/index.md) users would simply declare their allocation group name in the order object. This would be done with the Order’s faGroup field. The example to the right references a standard market order placed to our allocation group, MyTestProfile.

```python
order = Order()
order.action = "BUY"
order.orderType = "MKT"
order.totalQuantity = 50
order.faGroup = "MyTestProfile"
```
