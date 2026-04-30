[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [29 TWS UI Display Groups](29-display-groups.md)


## TWS UI Display Groups

Display Groups function allows API clients to integrate with [TWS Color Grouping Windows](https://www.ibkrguides.com/tws/usersguidebook/specializedorderentry/use_windows_grouping_to_link_blotter.htm).

TWS Color Grouping Windows are identified by a colored chain in TWS and by an integer number via the API. Currently that number ranges from 1 to 7 and are mapped to specific colors, as indicated in TWS.

### Query Display Groups

The IBApi.EClient.queryDisplayGroups method is used to request all available Display Groups in TWS. The IBApi.EWrapper.displayGroupList is a one-time response to IBApi.EClient.queryDisplayGroups.

It returns a list of integers representing visible Group ID separated by the “|” character, and sorted by most used group first. This list will not change during TWS session. In other words, user cannot add a new group, but only the sorting of the group numbers can change.

Example: “4|1|2|5|3|6|7”

### Request Query Display Groups

#### 29.01.01 Request Query Display Groups

**requestId:** int. Request identifier used to track data.  
)

Requests all available Display Groups in TWS.

```python
self.queryDisplayGroups(requestId)
```

### Receive Query Display Groups

#### 29.01.02 Receive Query Display Groups

**requestId:** Request identifier used to track data.

**groups:** String. Returns a list of integers representing visible Group ID separated by the “|” character, and sorted by most used group first.  
)

A one-time response to querying the display groups.

```python
def displayGroupList(self, reqId: int, groups: str):
  print("DisplayGroupList. ReqId:", reqId, "Groups", groups)
```

### Subscribe To Group Events

To integrate with a specific Group, you need to first subscribe to the group number by invoking IBApi.EClient.subscribeToGroupEvents. The IBApi.EWrapper.displayGroupUpdated call back is triggered once after receiving the subscription request, and will be sent again if the selected contract in the subscribed display group has changed.

### Request Group Events Subscription

#### 29.02.01 Request Group Events Subscription

**requestId:** int. Request identifier used to track data.

**groupId:** int. The display group for integration.  
)

Integrates API client and TWS window grouping.

```python
self.subscribeToGroupEvents(19002, 1)
```

### Receive Group Events Subscription

#### 29.02.02 Receive Group Events Subscription

**requestId:** int. Request identifier used to track data.

**contractInfo:** String. Contract information produced for the active display group.

)  
Call triggered once after receiving the subscription request, and will be sent again if the selected contract in the subscribed \* display group has changed.

```python
def displayGroupUpdated(self, reqId: int, contractInfo: str):
	print("DisplayGroupUpdated. ReqId:", reqId, "ContractInfo:", contractInfo)
```

### Unsubscribe From Group Events

#### 29.02.03 Unsubscribe From Group Events

**requestId:** int. Request identifier used to track data.  
)

Cancels a TWS Window Group subscription.

```python
self.unsubscribeFromGroupEvents(19002)
```

### Update Display Group

### 29.03 Update Display Group

**requestId:** int. Request identifier used for tracking data.

**contractInfo:** String. An encoded value designating a unique IB contract. Possible values include:

*   none: Empty selection
*   contractID: Any non-combination contract. Examples 8314 for IBM SMART; 8314 for IBM ARCA
*   combo: If any combo is selected Note: This request from the API does not get a TWS response unless an error occurs.  
    )

Updates the contract displayed in a TWS Window Group.

```python
self.updateDisplayGroup(19002, "8314@SMART")
```

**Note:** This request from the API does not get a response from TWS unless an error occurs.

In this sample we have commanded TWS Windows that chained with Group #1 to display IBM@SMART. The screenshot of TWS Mosaic to the right shows that both the pink chained (Group #1) windows are now displaying IBM@SMART, while the green chained (Group #4) window remains unchanged.

![Chained windows displaying IBM@SMART.](./images/display_groups_sample.png)
