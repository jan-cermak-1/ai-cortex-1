# Care

Care allows you to escalate specific messages from Community on individual basis to customer care agents within the Emplifi platform.

When your Community team or a bot cannot handle a message, they can escalate it to the Care module where your specialists can continue with the interaction without leaving the Emplifi platform. For more information about how to escalating content from Community to Care, see [Escalate a Community Message to Care](https://docs.emplifi.io/platform/latest/home/escalate-a-case-to-care).

Care aggregates all the messages between an individual customer and each of your owned profiles in one case so that you can easily review the whole history of the exchange between the customer and a specific profile. For more information, see [Work with Care Cases](https://docs.emplifi.io/platform/latest/home/manage-community-escalations-with-care).

Care offers a wide range of customization options that you can configure to suit your product lineup, social media presence, regional and language reach, severity, and so on.For more information, see [Use Standard Care Settings](https://docs.emplifi.io/platform/latest/home/use-standard-care-settings) and [Customize Your Care Settings](https://docs.emplifi.io/platform/latest/home/customize-your-care-settings).

Care comes with its own analytics that provides comprehensive data on agent-customer interaction. It comes with ready-to-use dashboard templates and a set of metrics in customizable widgets.For more information, see [Analyze Performance of Your Care Operations](https://docs.emplifi.io/platform/latest/home/analyze-your-care-escalations).

You can integrate Care with your Salesforce environment and take on the individual cases from your own support environment.For more information, see [Integrate Care with Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-care-with-salesforce).

## Prerequisites

Before you start, ensure that the following prerequisites are met:

The Community module is enabled in your Emplifi account.To learn more, see [Community](https://docs.emplifi.io/platform/latest/home/community).

You set up the account roles and profile roles for Care Supervisors and Agents.To learn more, see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor).

You set up visibility of profiles to make sure that Care users can see and use the profiles in Care.To learn more, see [Set Up Visibility of a Profile](https://docs.emplifi.io/platform/latest/home/set-up-visibility-of-a-profile).

## Get started with Care

To get the most from your work with Care, consider the following best practices:

Customize Care (see [Customize Your Care Settings](https://docs.emplifi.io/platform/latest/home/customize-your-care-settings)).

Assign Care users skills (see [Manage Skills of Care Users](https://docs.emplifi.io/platform/latest/home/manage-skills-of-care-users)).

Manage Care users' workload (see [Set Up the Maximum Capacity for Care Users](https://docs.emplifi.io/platform/latest/home/set-up-the-maximum-capacity-for-care-users)).

Set up a service-level agreement (SLA; see [Set Up a Service-level Agreement (SLA) in Care](https://docs.emplifi.io/platform/latest/home/care-sla)).

To bring Care automation to a whole new level, contact your Customer Success Manager and ask them to set up workflows for automatic analysis and labeling.

---

## Escalate a Community Message to Care

To be able to escalate Community messages to Care, you must have the Care module enabled in your Emplifi account. If you do not have the Care module enabled, contact your Customer Success Manager at Emplifi.

For more information about the Care module, see [Care](https://docs.emplifi.io/platform/latest/home/care).

When your Community team or a bot cannot handle a message, they can escalate it to the Care module where your specialists can continue with the interaction without leaving the Emplifi platform.

### Escalate a Community message to Care manually

Steps:

In Community, click the ellipsis menu in the message that you want to escalate to Care, and click Create Care case.

The panel for escalating from Community to Care slides out.

Fill in the details for the message to escalate, and click Create case. The priority is by default set to`Medium`. You can change it, if needed. You can also change it later in Care, once the case is created there (see [Change the Priority of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-priority-of-a-care-case)). The fields reflect your setup of custom fields in Care. We encourage you to customize your case fields to allow your agents to fill more case details (see [Create Case Fields in Care](https://docs.emplifi.io/platform/latest/home/create-case-fields-in-care)). This will help you add the case to specific Care views to be picked up by the right agent. The message is escalated to a Care case. The confirmation dialog pops up providing the Care case number.

Go to Care to address the case (see [Work with Care Cases](https://docs.emplifi.io/platform/latest/home/manage-community-escalations-with-care)).

### Escalate a Community message to Care automatically

The Emplifi platform allows you to define filters to automatically escalate Community messages to Care based on predefined rules. To set up automation, contact your Customer Success Manager.

Community messages that were picked up by Listening and automatically escalated to Care are not tied to any specific profile. The Care agent that will be assigned to a Care case with no profile chosen will have to decide which profile to use to respond to the case (see [Assign a Profile to a Care Case](https://docs.emplifi.io/platform/latest/home/assign-a-profile-to-a-care-case)).

### Replying to a Community message after escalating it to Care

Once a case is created in Care, the Community message is marked with the icon indicating that the message was escalated to Care.

Escalating a Community message to Care locks this message for replying in Community. From now on and until it is resolved in Care, it should be responded to in Care (see [Respond to a Care Case](https://docs.emplifi.io/platform/latest/home/respond-to-an-escalation-in-care)).

The Community message remains locked as long as the Care case is in one of the following statuses:

`New`

`Open`

`Pending`

`On hold`

`Done` while in the grace period (see [Adjust the Length of the Grace Period for Reopening Closed Cases in Care](https://docs.emplifi.io/platform/latest/home/adjust-the-length-of-the-grace-period-for-reopenin))

Such Care cases are categorized in Community as "open". These are the cases that are being processed in Care and therefore keep their respective Community messages locked.

You can reply to the Community message again after one of the following happens:

The status of the Care case is switched to`Spam`(see [Change the Status of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-status-of-a-care-case)).

The Care case is deleted (see [Delete a Care Case](https://docs.emplifi.io/platform/latest/home/delete-a-care-case)).

For the Care case that was in the status of`Done`, the grace period has passed.

Such Care cases are categorized in Community as "closed". These are the cases that were resolved in Care, and Community agents can respond to their respective messages in Community again.

The following table summarizes the relations between the Care cases and their respective Community messages based on the case statuses in Care:

| Status of the Care case | How Community categorizes the Care case | Is the respective Community message locked? | Can a Community agent respond to the Community message? |
|-------------------------|------------------------------------------|--------------------------------------------|----------------------------------------------------------|
| `New` | Open | Yes | No |
| `Open` | Open | Yes | No |
| `Pending` | Open | Yes | No |
| `On hold` | Open | Yes | No |
| `Done`(in the grace period) | Open | Yes | No |
| `Done`(after the grace period has passed) | Closed | No | Yes |
| `Spam` | Closed | No | Yes |
| `Deleted` | Closed | No | Yes |

You can filter Community messages by the status of their respective Care cases as it is interpreted by Community (that is, "open" or "closed"). For more information, see the "Message status in Care" filter in [Community Inbox Filters](https://docs.emplifi.io/platform/latest/home/community-inbox-filters).

---

## Work with Care Cases

Locate the case you want to work on. You can review one of the default Care views (see [Use Standard Care Settings](https://docs.emplifi.io/platform/latest/home/use-standard-care-settings)), review a custom view (see [Create Case Views in Care](https://docs.emplifi.io/platform/latest/home/create-case-views-in-care)), or search for the case (see [Search within Care](https://docs.emplifi.io/platform/latest/home/search-within-care)).

### How messages are aggregated in a Care case

Care aggregates all the messages between an individual customer and each of your owned profiles in one case so that you can easily review the whole history of the exchange between the customer and a specific profile.

In Care, an individual customer is represented by the unique identifier of their social media account obtained from the respective platform such as Facebook or LinkedIn.

Each social media account is treated as a separate customer in Care even if they may belong to and be managed by the same person or company. Messages coming from such accounts will still be grouped into separate Care cases.

One open case ✖️ customer ✖️ profileAt any given time, there can be only one open Care case per individual customer per profile. However, there can be older closed cases in Care for the same customer and the same profile.

How it worksThe messages get stored in the Care case while the case is open or is marked as done but is still in the grace period.

While the Care case is open (that is, the case status is`New`,`Open`,`Pending`, or`On hold`; see [Change the Status of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-status-of-a-care-case)), all messages between the customer and the profile are stored in this case.

Once the Care case is marked as done, it enters a grace period (see [Adjust the Length of the Grace Period for Reopening Closed Cases in Care](https://docs.emplifi.io/platform/latest/home/adjust-the-length-of-the-grace-period-for-reopenin)).

During the grace period, if a customer posts a new message, the Care case automatically reopens, and this and any further messages continue getting stored in the case - until the case is marked as done and enters a grace period again.

After the grace period has passed (or, if you have no grace period set up at all and Care cases are closed immediately), the case cannot be reopened with an incoming message from the customer anymore. This case will remain closed, and no new message will be stored in it.If the customer posts a new message, the message will be treated as unrelated to this Care case. It will arrive to Community, and, if Community agents escalate it to Care, a new Care case will be opened, with this message as the first one. Going forward, all further messages will be stored in this new case.

Therefore, while there can be an open case with a specific customer and a specific owned profile, you may see older closed Care cases with messages between the same customer and the same profile.

### Layout of a Care case

The Care layout is designed to help you get a clear overview and then drill down easily to the details of individual escalations.

The left column displays the current view with individual cases.

When you click a case in the view, it displays in the middle column where you can review the conversation history.

The right column displays the details of the specific user-case combination.

The case property panel in the right column has the following tabs:

**Case**On this tab, you can assign the case to a specific Care user, review/update the case priority and sentiment, and fill in the case fields. You can create your own case fields and place them in a certain order on the Case tab (see [Create Case Fields in Care](https://docs.emplifi.io/platform/latest/home/create-case-fields-in-care)).

**Customer**On this tab, you can review and update the details about the customer.

**History**This tab shows the history of the customer on the platform from which the case was initiated. You can review conversations and individual cases involving this customer.

**Salesforce**This tab allows you to review Salesforce information related to the customer and the case (see [Integrate Care with Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-care-with-salesforce)).

### How to work with a Care case

The following are basic operations that you can perform on a Care case:

Assign the case to a Care user (see [Assign a Care Case to a Care Agent](https://docs.emplifi.io/platform/latest/home/assign-a-care-case-to-a-care-agent)).

If the case is missing the profile, assign the profile on whose behalf you want to communicate with the customer in the case (see [Assign a Profile to a Care Case](https://docs.emplifi.io/platform/latest/home/assign-a-profile-to-a-care-case)).

Respond to the case: post a reply or send a direct message, add an internal note, like or delete individual messages within the case conversation, and so on (see [Respond to a Care Case](https://docs.emplifi.io/platform/latest/home/respond-to-an-escalation-in-care)).

Update individual properties of the case:

Change the sentiment (see [Change the Sentiment of a Care Case](https://docs.emplifi.io/platform/latest/home/use-sentiment-levels-in-care-case-management))

Change the priority (see [Change the Priority of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-priority-of-a-care-case))

Update case fields (see [Update Case Fields in a Care Case](https://docs.emplifi.io/platform/latest/home/update-case-fields-in-a-care-case)).

Change the status of the case (see [Change the Status of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-status-of-a-care-case)).

Delete the case (see [Delete a Care Case](https://docs.emplifi.io/platform/latest/home/delete-a-care-case)).

Typically, unless a Care supervisor assigns cases to Care agents, you start with assigning a case to yourself and then responding to the customer.

### History of the exchanges within a Care case

Care has an unlimited data retention period. Unless you delete a case, it stays in the tool forever along with the exchanges with the customer.

Only the last 500 messages in any direct conversation are visible.

---

## Use Standard Care Settings

The Care module offers a wide range of customizable option but you can start using it out of the box after you define the [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor).

To learn how to modify the views to suit your use cases and customize other aspects of the Care module, see [Customize Your Care Settings](https://docs.emplifi.io/platform/latest/home/customize-your-care-settings).

### Main Care menu

Depending on your screen resolution, the main menu can appear:

As a dropdown panel - click Inbox to open it:

As a fixed vertical panel:

### Default Care views

When you first open Care, you can work with the following default views:

| View | Sort order |
|------|------------|
| Inbox | Sorted by oldest to newest (case creation) |
| New cases | Sorted by oldest to newest (case creation) |
| My open | Sorted by newest to oldest (time of the last customer message) |
| My pending | Sorted by oldest to newest (time of the last customer message) |
| My on hold | Sorted by newest to oldest (time of the last customer message) |
| Done | Sorted by newest to oldest (case creation) |
| My mentions | Sorted newest to oldest (time of the internal note where you were tagged) |
| Spam | Sorted by newest to oldest (case creation) |

The number of cases in a view that is displayed next to each view is automatically refreshed once in a few minutes. Only the number of cases in the view that you are currently in gets refreshed in real time.Therefore, it may happen that after you updated a case in one view and it got moved to a different view, the number of cases in that other view does not get refreshed immediately.

To see the up-to-date number of cases in a view, switch to that view.

### Change the sorting in a default view

When using a view in Care, you can temporarily change the sorting of the cases in the view to adjust it to your individual needs.

The sorting that you set up in a view is preserved while you are working in the view. Switching to a different view will reset the sorting to the default one.

To change the sorting of the cases, click the sort button to the right of the search field and the filter button:

You can sort the cases in a view by the following criteria:

By the time a case was created (oldest/newest)

By the time the last message was posted to a case (oldest/newest)

By the time left until the SLA policy assigned to a case will be breached (shortest/longest)

By the priority of a case (highest/lowest)

### Apply additional filters to a default view

When using a view in Care, you can temporarily apply additional filters to the view to adjust it to your individual needs.

The filters that you set up in a view are preserved while you are working in the view. Switching to a different view will clear the filters that you applied.

To apply additional filters, click the filter button next to the search field:

In the dialog that pops up, set up the filters, and click Filter.

### What Care agents and supervisors can see in the default views

The following table displays the visibility scope for individual default views and Care roles:

| Default view | As a Supervisor, you see… | As an Agent, you see… |
|--------------|---------------------------|------------------------|
| Inbox | All cases in any status except`Done` and`Spam` | All cases that are assigned to you |
| | Cases that are defined in custom views | |
| New cases | All new cases that are not assigned | All new cases that are not assigned from all custom views |
| | | If no custom views are created, nothing is displayed. |
| My open | Open cases that are assigned to you | Open cases that are assigned to you |
| My pending | Pending cases that are assigned to you | Pending cases that are assigned to you |
| My on hold | Cases on hold that are assigned to you | Cases on hold that are assigned to you |
| Done | All cases in a status of`Done` | All cases in a status of`Done` that are assigned to you |
| | Cases that are defined in custom views | |
| My mentions | All cases where you were tagged | All cases where you were tagged |
| Spam | All cases marked as spam | n/a |

---

## Customize Your Care Settings

By default, Care offers a set of predefined views and options (see [Use Standard Care Settings](https://docs.emplifi.io/platform/latest/home/use-standard-care-settings)). However, before you start using the Care module, we recommend that you customize the default setup to manage escalations effectively and in line with your product lineup and policies.

[Create Case Views in Care](https://docs.emplifi.io/platform/latest/home/create-case-views-in-care)

[Create Case Fields in Care](https://docs.emplifi.io/platform/latest/home/create-case-fields-in-care)

[Adjust the Length of the Grace Period for Reopening Closed Cases in Care](https://docs.emplifi.io/platform/latest/home/adjust-the-length-of-the-grace-period-for-reopenin)

[Automatically Update Care Users' Status](https://docs.emplifi.io/platform/latest/home/automatically-update-care-users-status)

---

## Analyze Performance of Your Care Operations

Care comes with its own analytics that provides comprehensive data on agent-customer interaction.

[Use Dashboard to Analyze Performance of Your Care Operations](https://docs.emplifi.io/platform/latest/home/analyze-care-performance-dashboard)

[Use Unified Analytics to Analyze Performance of Your Care Operations](https://docs.emplifi.io/platform/latest/home/analyze-care-performance-ua)

[FAQ: Care in Unified Analytics and Dashboard](https://docs.emplifi.io/platform/latest/home/faq-care-in-unified-analytics-and-dashboard)

---

## Integrate Care with Salesforce

Integrating the Care module with Salesforce allows you to interact with Care cases directly from the Salesforce environment exactly as if you worked directly in Care.

If you want to escalate an individual conversation from Care to Salesforce, you can simply create a Salesforce case directly from Care and continue dealing with the escalation within your Salesforce environment. You can also create a Salesforce lead directly from a Care case.

Unlike the Community-Salesforce integration (see [Integrate Community and Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-community-and-salesforce)), the Care-Salesforce is bi-directional.

This article is about integrating Salesforce with Emplifi Care.

To integrate Salesforce with Emplifi Community, see [Integrate Community and Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-community-and-salesforce).

### Prerequisites

Before you start, make sure that you have a Salesforce account with CRUD access to cases, contacts, leads, accounts, and the relevant record types.

### Salesforce tokens and escalation to Salesforce

The Emplifi platform uses the Salesforce API to communicate with Salesforce and connects to Salesforce using a token-based connection.

When setting up integration with Salesforce, you as a token holder must connect the Salesforce environment to your Emplifi account. Once done, your Salesforce token becomes the default token. All the cases that are created in Salesforce as escalations from the Emplifi platform will be associated with this token and with your Salesforce user, regardless of who actually initiated the escalation on the Emplifi platform.

If you want to associate a case in Salesforce with the user who initiated the escalation, you can use the following methods (either one or both of them depending on your setup):

Ask the Care users who have their personal Salesforce credentials to connect to the Salesforce account from the Emplifi account (see "Connect to a Salesforce account as an Emplifi user" further in this article).When a connected user escalates a case from Care to Salesforce, the Salesforce case will be created under this user's Salesforce token and will be associated with this user in Salesforce. If a Salesforce case is created from a Care case escalated by a user who did not connect to the Salesforce account via their personal Salesforce credentials, the Salesforce case be created under the default token and will be associated with the token holder.

Map the`Agent name` and/or`Agent email` Care fields to some of your Salesforce fields (see [Map Your Care and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-care-and-salesforce-fields)).When a user escalates a case from Care to Salesforce, the mapped Salesforce fields will be filled in with the user's name and/or email, and you will be able to identify who escalated the Care case to Salesforce.

### Set up Salesforce integration

To set up Salesforce integration, complete the following steps:

Request Salesforce integration.

Connect a Salesforce account to your Emplifi account.

Set up an account role with permissions for Salesforce integration.

Map the fields between Care and your Salesforce environment.

#### Request Salesforce integration

Steps:

Go to Settings -> Integrations & API.The list of available integrations opens.

Locate Salesforce for Community and Care, and click Request.

The request is sent to Emplifi.The status of the Salesforce integration is changed to "Requested".

Wait for your Customer Success Manager to contact you and enable Salesforce integration in your Emplifi account.

Once integration is enabled, the Salesforce sub-item appears under Settings -> Integrations & API in your Emplifi account where you can set up your Salesforce integration.

#### Connect a Salesforce account to your Emplifi account

You can set up Salesforce integration in the following ways:

Connect a Salesforce sandbox account to run all the preliminary checks and to avoid spamming the main account with tests.

Connect to a main Salesforce account to run a production environment.

Steps:

Go to Settings -> Integrations & API -> Salesforce.

Click +Connect Salesforce account to connect a production Salesforce environment or Connect Sandbox to connect a test Salesforce environment.

The Salesforce login screen opens.

Log in with your Salesforce credentials.You are asked to allow Emplifi to access all the relevant data required.

Review the requested data permissions and allow Emplifi to access the data.Emplifi accesses the data from Salesforce. The Salesforce account is added and appears in the list of accounts.

Now that you have connected a Salesforce account to your Emplifi account, do the following:

Ask the users who have their personal Salesforce credentials to connect to the Salesforce account that you have just added (see "Connect to a Salesforce account as an Emplifi user" further in this article).

If you want the status of cases to get synchronized between Care and Salesforce, see "Synchronize the case status in Care and Salesforce" further in this article.

If you want incoming and outgoing messages get propagated from a Care case to the related Salesforce case, see "Propagate messages from a case in Care to the related case in Salesforce" further in this article.

Review "Keep the Salesforce connection alive" further in this article, and familiarize yourself with the implications of the Salesforce connection getting expired.

#### Set up an account role with permissions for Salesforce integration

For more information, see [Set Up an Account Role with Permissions for Salesforce Integration](https://docs.emplifi.io/platform/latest/home/set-up-account-level-permissions-for-salesforce-in).

#### Map the fields between Care and your Salesforce environment

For more information, see [Map Your Care and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-care-and-salesforce-fields).

### Connect to a Salesforce account as an Emplifi user

If you have personal Salesforce credentials, connect to the Salesforce account from the Emplifi account.

This will help identify you as the creator of Salesforce cases when you initiate escalation from the Emplifi platform to Salesforce: the cases will be created under your Salesforce token and will be associated with you in Salesforce.If you do not have personal Salesforce credentials or do not want to connect to the Salesforce account via the personal credentials, the Salesforce cases will be created under the default token and will be associated with the holder of this token.

Having multiple Emplifi users connected to the Salesforce account makes the connection more reliable and prevents it from getting expired. The more users are connected, the more reliable the connection is. If one user's connection gets expired, the remaining users keep the connection live. For more information why it is important, see "Keep the Salesforce connection alive" further in this article.

Steps:

Go to Settings -> Integrations & API -> Salesforce.

Click the Salesforce account that you want to connect to.

Click the plus icon next to Contact, Account & Case management.

The Salesforce login screen opens.

Log in with your Salesforce credentials.You are asked to allow Emplifi to access all the relevant data required.

Review the requested data permissions and allow Emplifi to access the data.Emplifi accesses the data from Salesforce.You are connected to the Salesforce account and appear as a connected user.

To disconnect from the Salesforce account:

Click any connected user that are displayed next to Contact, Account & Case management.The connection detail dialog pops up.

Click Disconnect next to your user.

You are disconnected from the Salesforce account and moved to under Suggested Users on the connection detail dialog.You can reconnect with your Salesforce token at any time later.

### Synchronize the case status in Care and Salesforce

When you first connect your Salesforce account to the Emplifi account, there is no synchronization of the case status configured between Salesforce and Emplifi. This means that actions made in a Salesforce case are not propagated to the related case in Care, and changes made in a Care case are not propagated to the related Salesforce case. Whenever a change in made in a Care case, you have to update the related Salesforce case manually, and vice versa. For example, closing a Salesforce case requires the Salesforce agent to then also mark the related case as closed in the Care module embedded in Salesforce.

You can configure Care to synchronize the case statuses with Salesforce in the following ways:

**Care-to-Salesforce condition-based synchronization**You set up a condition, which, when satisfied in a Care case, changes the status of the related Salesforce case. This type of synchronization allows you to choose what Care cases should be synchronized with their Salesforce cases (only those that meet the conditions), while the rest of the cases will have to be managed manually, if needed. The synchronization is done from Care to Salesforce only. Synchronization from Salesforce to Care is not supported. You can set up one or multiple conditions according to your business requirements. Here are some examples of conditions:

If a message is added to a Care case (manually or via automation), set the status of the related Salesforce case to`New`.

If the Team ownership custom field in a Care case is set to`Salesforce`, set the status of the related Salesforce case to`Working`.

**Bi-directional mapping-based synchronization**Changing the status of a Care case updates the status of the related Salesforce case, and vice versa. Associating the Care statuses with the Salesforce statuses is done by mapping the Status field in Salesforce to the Case status field in Care.Once this type of synchronization is enabled, it will be applied to each new Care case that will get escalated to Salesforce (you cannot choose what Care cases should be synchronized and what should not). Getting the Care case synchronized after the status of a Salesforce case has changed may take a few minutes. While the typical use case for this type of synchronization is to map the status of Salesforce cases to the status of Care cases, you can choose to map the status of Salesforce cases to a custom field in Care cases instead. For example, you can map the Status field in Salesforce to a custom field in Care named Salesforce external status, and changing the status of a Salesforce case will update the Salesforce external status field in the related Care case. The status of the Care case will not change.

#### Set up Care-to-Salesforce condition-based synchronization

Steps:

Go to Settings -> Integrations & API -> Salesforce.

Select the Salesforce account.The Overview tab opens.

In the Case status sync with Salesforce section, select Automated sync.

Contact your Customer Success Manager to discuss your requirements for the case status synchronization.The Customer Success Manager will then work with an internal Emplifi team to implement your requirements on Emplifi's side. This may take up to a few days.

Just selecting Automated sync in the Case status sync with Salesforce section alone does not enable the case status synchronization. For the case status synchronization to start working, a certain setup must be done on Emplifi's side.

#### Set up bi-directional mapping-based synchronization

Steps:

Go to Settings -> Integrations & API -> Salesforce.

Select the Salesforce account.The Overview tab opens.

In the Case status sync with Salesforce section, select Bi-direction sync.The button for mapping case statuses in Salesforce and Emplifi appears.

Click Map statuses.You are redirected to the Mapping with Care tab.The list of the record types and objects that are available in your Salesforce account is displayed.

Click the record type for the "Case" object.The mapping editor appears.

Map the Status field in Salesforce to the Case status field in Care, and then map individual statuses of Salesforce cases to individual statuses of Care cases. If you chose to map the status of Salesforce cases to a custom field in Care cases, map the Status field in Salesforce to this field, and then map individual statuses of Salesforce cases to the individual values of the field.For more information about mapping Salesforce fields to Care data, see [Map Your Care and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-care-and-salesforce-fields).

Once done, click Save.The bi-directional mapping-based synchronization between Care and Salesforce is set up.

### Propagate messages from a case in Care to the related case in Salesforce

You can configure Care to propagate messages from a case in Care to the related case in Salesforce.

Depending on what you want to happen when a Care case is escalated to Salesforce, choose from the following options:

**Care-to-Salesforce message synchronization**When a Salesforce case is created, the last 100 messages in the Care case are propagated to the Salesforce case. Going forward, any new message posted to the Care case will automatically appear in the Salesforce case. This option requires configuration in both Care and Salesforce.

**Care-to-Salesforce one-time message copy**When a Salesforce case is created, a certain portion of messages (the first message, the latest message, or the last 10 messages) is propagated from the Care case to the Salesforce case.Once the Salesforce case is created, no further message posted to the Care case will be passed to the Salesforce case. This option requires configuration only in Care.

#### Care-to-Salesforce message synchronization

Configure Care and Salesforce to propagate incoming and outgoing messages from a case in Care to the related case in Salesforce.

When you create a case in Salesforce from Care, the last 100 messages will be fetched from the Care case and loaded to the Salesforce case. Any new message that a Care user posts to the case in Care and any message that the customer sends to this case will automatically appear in the related Salesforce case.

In Salesforce:

The steps described in this section require advanced knowledge of the Salesforce setup options. If you are not confident enough, we recommend that you involve the help of your Salesforce implementation/Support team.

This section describes the steps you need to perform in a third-party product. The process and changes in the user interface in third-party products are subject to changes beyond our control, and Emplifi therefore accepts no liability associated with them.

In your Object Manager, create a new custom "SocialPost" object. This object will be used to store all the messages in Salesforce case conversations and Care cases.

We suggest that your name the object so that it clearly identifies your Care integration or at least the object type, for example, "Care Social Post" or "Social Post".

Set up the properties of the object according to your Salesforce best practices. The new object will appear in your Emplifi account, under the connected Salesforce account in Settings.

In Emplifi:

Go to Settings -> Integrations & API -> Salesforce.

Select the Salesforce account.The Overview tab opens.

Set up the message storage parameters:

For the Storage object for messages parameter, select the "SocialPost" object that you have earlier created in Salesforce.

For the Mappable record type parameter, select the corresponding record type.

Click the Mapping with Care tab.The list of the record types and objects that are available in your Salesforce account appears.

Click the record type that is listed for the "SocialPost" object.The mapping editor appears.

Map Care fields to the Salesforce fields.For more information about mapping Salesforce fields to Care data, see [Map Your Care and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-care-and-salesforce-fields).

Once done, click Save.The Care and Salesforce fields are mapped. Message synchronization is enabled.

From now on, when you create a case in Salesforce from Care, the last 100 messages will be fetched from the Care case and loaded to the Salesforce case. Any new message that a Care user posts to the case in Care and any message that the customer sends to this case will automatically appear in the related Salesforce case.

#### Care-to-Salesforce one-time message copy

Configure Care to propagate a certain portion of messages (the first message, the latest message, or the last 10 messages) to a Salesforce case once one is created from a case in Care.

Once a Salesforce case is created and the messages are passed from the Care case, no further message posted to the Care case will be propagated to the Salesforce case.

To propagate a certain portion of messages from a Care case to the Salesforce case, map some of the fields in the Salesforce record type for the "Case" object to the following Care fields (you can map one or more fields depending on your business needs; for more information about mapping Salesforce fields to Care data, see [Map Your Care and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-care-and-salesforce-fields)):

`Latest message in the Care case`

`First message in the Care case`

`Last 10 messages in the Care case`

The messages are passed to the Salesforce case in the following format:

```
[{timestamp}] {author}: {message_text}
```

For example:

```
[2025-07-31T12:00:00Z] Joe Doe: Hi, does your new perfume have hibiscus in it? 🤔
[2025-07-31T13:00:00Z] Toutique: Hi Joe, no it does not!
```

If a message in a Care case does not contain any text (for example, it contains only an attachment), once passed to the Salesforce, it is going to include the timestamp and the author but the actual message will appear as an empty line:

```
[2025-07-31T12:00:00Z] Joe Doe: 
[2025-07-31T13:00:00Z] Toutique: What a nice image, thank you!
```

Things to be aware of:

The latest message and the last 10 messages in a Care case are determined as of the moment of creating a case in Salesforce.

If you decide to map some Salesforce field to the`Last 10 messages in the Care case` Care field, check the maximum number of characters set for this Salesforce field so that it can fit in a potentially large portion of text.

### Keep the Salesforce connection alive

Once you connected the Salesforce account to your Emplifi account, make sure that the connection stays alive and does not get expired. Make sure that at least one Emplifi user is connected to the Salesforce account at any time (see "Connect to a Salesforce account as an Emplifi user" earlier in this article).

If the Salesforce connection gets expired, make sure to re-establish it as soon as possible. When the Salesforce connection expires, the following happens:

You no longer can create Salesforce cases or leads from Care. (The already created Salesforce cases and leads are not affected.)

If you configured Care to synchronize the case statuses with Salesforce, the status synchronization stops.

You cannot change the type of the case status synchronization on the Overview tab under Settings -> Integrations & API -> Salesforce.

You cannot see the record types and objects from the Salesforce account on the Mapping with Care tab under Settings -> Integrations & API -> Salesforce.

As soon as the Salesforce connection is re-established, the lost/paused functionality is restored to the state it was in before the Salesforce connection expired.

### Community, Care, and Salesforce

If you are using Community without the Care module, you create your Salesforce cases as described in [Create a Salesforce Case or Lead from Community](https://docs.emplifi.io/platform/latest/home/create-a-salesforce-case-from-the-community-inbox). Implementation of an iframe in Salesforce as described in [Set up Care iFrame in Salesforce](https://docs.emplifi.io/platform/latest/home/set-up-care-iframe-in-salesforce) is not available.

Community and Salesforce integration remains one-way. Once you create a Salesforce case, you should only interact with it in Salesforce.

---

## Set Up Care Roles - Agent and Supervisor

The Care module supports two user roles:

**Agent**Focuses on responding to customers and resolving cases.

**Supervisor**Manages the Care team and configures the Care module to support the processes for Care agents.

When you first open Care, all users with the "Account Admin" account role (see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)) have the "Supervisor" level of access to Care. Users with different account roles cannot access Care unless they are assigned a Care-specific permission within their account role.

### Levels of permissions

While the roles of agents and supervisors in the Care management and setup are clearly differentiated, they are rather similar when it comes to handling cases.

Here is what Care agents and supervisors can and cannot do depending on whether they are assigned to a case:

| Operation | Agent/supervisor assigned to the case | Agent/supervisor not assigned to the case |
|-----------|--------------------------------------|-------------------------------------------|
| Unassign themselves or the currently assigned user from the case (see [Assign a Care Case to a Care Agent](https://docs.emplifi.io/platform/latest/home/assign-a-care-case-to-a-care-agent)) | yes | yes |
| Assign themselves or another user to the case (see [Assign a Care Case to a Care Agent](https://docs.emplifi.io/platform/latest/home/assign-a-care-case-to-a-care-agent)) | yes | yes |
| Change the case status (see [Change the Status of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-status-of-a-care-case)) | yes | yes |
| Change the case sentiment (see [Change the Sentiment of a Care Case](https://docs.emplifi.io/platform/latest/home/use-sentiment-levels-in-care-case-management)) | yes | yes |
| Change the case priority (see [Change the Priority of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-priority-of-a-care-case)) | yes | yes |
| Update case fields (see [Update Case Fields in a Care Case](https://docs.emplifi.io/platform/latest/home/update-case-fields-in-a-care-case)) | yes | yes |
| Update customer information (see [Work with Care Cases](https://docs.emplifi.io/platform/latest/home/manage-community-escalations-with-care)) | yes | yes |
| Interact with the customer in the case conversation (reply, like messages, and so on; see [Respond to a Care Case](https://docs.emplifi.io/platform/latest/home/respond-to-an-escalation-in-care)) | yes | no |
| Assign a profile to the case (see [Assign a Profile to a Care Case](https://docs.emplifi.io/platform/latest/home/assign-a-profile-to-a-care-case)) | yes | no |
| Delete the case (see [Delete a Care Case](https://docs.emplifi.io/platform/latest/home/delete-a-care-case)) | yes | yes |

To learn what agents and supervisors can and cannot see in the default Care views, see [Use Standard Care Settings](https://docs.emplifi.io/platform/latest/home/use-standard-care-settings).

### Connect Care roles with account roles, user groups, and profiles

To configure your Care setup to suit your requirements, see [Create Care-specific Account Roles and Profile Roles](https://docs.emplifi.io/platform/latest/home/create-care-specific-account-and-profile-roles).

### Care-Salesforce integration roles

Integrating bi-directional integration between Care and Salesforce requires setting up specific account-level permissions. To learn more, see [Set Up an Account Role with Permissions for Salesforce Integration](https://docs.emplifi.io/platform/latest/home/set-up-account-level-permissions-for-salesforce-in).

---

## Set Up Visibility of a Profile

This article is for the users who have an account role with the "Add Pages & Profiles" permission (that is, for Account Admins and the users who have a custom account role with the "Add Pages & Profiles" permission under the Pages & Profiles section; see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

Visibility of a profile controls whether a user can see and use the profile in various modules of the Emplifi platform (for example, whether the user can select the profile in Publisher when choosing the profiles to publish a post to, or whether the user can see the profile when searching for content in the Content module).

By default, all the profiles are set to be visible to all Account Admins in the Emplifi account. You can configure visibility of individual profiles to make them visible to the other users in the Emplifi account. You can do that when adding a profile to your Emplifi account (see [Add a Profile as Owned (Private) or Public](https://docs.emplifi.io/platform/latest/home/add-a-profile-as-owned-or-public)) or at any time later.

Regardless of the visibility settings, all the profiles are always visible to all Account Admins. You cannot restrict a profile's visibility to only selected Account Admins in the Emplifi account.

A profile is visible to a user when the user is assigned to the profile in the Emplifi account (and therefore the profile is assigned to the user too):

When you open the profile and check the Users tab, you can see the user.

When you open the user and check the Profiles tab, you can see the profile.

### Visibility of a profile vs. Access to a profile's content

Visibility of a profile controls whether a user can see and use the profile itself in various modules of the Emplifi platform. This is determined by the account role (an Account Admin can always see and use all the profiles; see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)) or is set up by assigning a profile to a user.Visibility of a profile does not determine what a user can do with the profile's content.

What a user is allowed to do with the content of a profile (view content, create and publish content, approve other users' content, like/pin content, follow profiles, and so on) is defined by the profile role that the user has set for this profile (see [Profile Roles](https://docs.emplifi.io/platform/latest/home/profile-roles)).

### Make a profile visible to a user

To make a profile visible to a user, assign this user to the profile.

By default, all the profiles in the Emplifi account are visible to all Account Admins. You do not have to assign a user who is an Account Admin to the profile - this user was assigned to all the profiles automatically once they were assigned the Account Admin account role.

Steps:

Go to Settings -> Channels, and then:

For a profile connected to an account on social media platforms (such as Facebook, Instagram, LinkedIn, and so on), click Social profiles.

For a profile connected to an account on review platforms (such as Google Business), click Google businesses.

Click the profile that you want to assign the user to.The profile opens.

Click the Users tab, then click +Add user.

The dialog for adding users opens.

Select the user that you want to assign to the profile.

(Optional) Select the profile role that you want to assign to the user for this profile.If you do not select the profile role, the user's default profile role will be assigned. The profile role defines what the user is allowed to do with the profile's content. For more information about profile roles and how to find out what profile role a user has, see [Profile Roles](https://docs.emplifi.io/platform/latest/home/profile-roles).

Click Add users.The dialog for adding users closes.The user is assigned to the profile, and the profile is now visible to the user.If you now go to Settings -> Users, click the user, and then click the Profiles tab, you will see the profile there.

You can also assign a user to the profile by the following ways:

From the user's detailsGo to Settings -> Users, click the user, and then click the Profiles tab. On this tab, you can select the profiles to assign the user to.

By adding the user to a user group that includes the profileOnce a user is added to a user group, they can see and use the profiles that are included in the user group at that moment of adding the user and the profiles that may be included in the user group in the future. For more information about user groups and how to add users to a user group, see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups).

In both cases, the user's default profile role will be assigned to the user for the profile.

### Disable a profile's visibility for a user

To disable a profile's visibility for a user, remove this user from the profile.

By default, all the profiles in the Emplifi account are visible to all Account Admins. You cannot remove an Account Admin from a profile.

Steps:

Go to Settings -> Channels, and then:

For a profile connected to an account on social media platforms (such as Facebook, Instagram, LinkedIn, and so on), click Social profiles.

For a profile connected to an account on review platforms (such as Google Business), click Google businesses.

Click the profile whose visibility you want to disable for a user.The profile opens.

Click the Users tab.

Hover over the user that you want to remove, and click the trash can icon that appears. To remove multiple users, select the users to remove, and click Remove on the bar with action buttons that appears at the bottom of the page.

Confirm the deletion.The user is removed from the profile. The profile's visibility is disabled for the user.If you now go to Settings -> Users, click the user, and then click the Profiles tab, you will not be able to see the profile there.

You can also disable a profile's visibility for the user from the user's details. Go to Settings -> Users, click the user, and then click the Profiles tab. On this tab, you can select the profiles to remove the user from.

If a profile was made visible to the user as a member of a user group, you can remove the user from the group, or remove the profile from the user group, or even delete the user group itself. However, before doing so, familiarize yourself with the impact it may have (see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups)).

---

## Manage Skills of Care Users

This article is for the users who have an account role with the "Supervisor" level of access to Care (that is, for Account Admins and the users who have a custom account role with the "Supervisor" permission in Care; see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

You can specify skills of Care agents so that you can optimize assignment of cases and distribute cases among agents more efficiently. For example, if a case is written in Spanish, you may want to assign it to an agent who is fluent in Spanish. If a customer is having an issue with SQL, you can assign the case to an agent who has a good understanding of and an experience with SQL.

You can use the skills as one of the criteria for assigning cases to Care agents automatically (see [Automatically Assign Cases in Care](https://docs.emplifi.io/platform/latest/home/auto-assign-cases-in-care)). For example, if a case contains words "SQL" and "issue", you may want to assign the case to an agent who has a good understanding of and an experience with SQL.

### Where to find skills

You can access the skills in the Settings section of your Emplifi account, under Care -> Skills.

In the Care module, the skills are listed under each Care user's name:

In the list of the users that opens when you want to assign a case to a Care agent (see [Assign a Care Case to a Care Agent](https://docs.emplifi.io/platform/latest/home/assign-a-care-case-to-a-care-agent)):

(Only if the Care user is online) In the list of the users who are currently online To display the list of the online users, click Status on the bottom of the left menu (see [Control Your Online Presence and Status in Care](https://docs.emplifi.io/platform/latest/home/control-your-online-presence-and-status-in-care)).

### Add a skill to the Emplifi account

When adding a skill, you have the option to assign it to Care users right away. If you decide to not assign it immediately, you can do it at any time later, either to multiple users at once or to an individual user (see further in this article).

Steps:

Go to Settings -> Care -> Skills.

Click +Create skill.The skill panel slides out.

Enter the name of the skill.

(Optional) Add the description for the skill.

If you want to assign the skill to users together with creating the skill itself:

Click +Add users.The dialog for adding users pops up. Only the users who have an account role with either the "Agent" or "Supervisor" level of access to Care are available to assign skills to. Those are Account Admins and the users who have a custom account role with the "Agent" or "Supervisor" permission in Care (see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor)).

Select individual users and/or user groups whom you want to assign the skill to, and click Add.The list of the selected users/user groups appear on the skill panel under Users. If you assign the skill to a user group (see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups)), be aware of the following implications:

The skill is assigned to all users in the user group.

Adding a new user to the user group at any time later automatically assigns the skill to this user.

Removing a user from the user group at any time later removes the skill from the user.

To remove the skill from a user in the user group, you have to either remove this user from the user group (see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups)) or remove the skill from the user group (see "Remove a skill from multiple users at once" further in this article).

Deleting the user group removes the skill from the users who were members of the user group.

Click Create.The skill is created and appears in the list of the skills.

### Assign a skill to multiple users at once

Assign an individual skill to multiple users in the account at once.

You can assign skills only to the users who have an account role with either the "Agent" or "Supervisor" level of access to Care. Those are Account Admins and the users who have a custom account role with the "Agent" or "Supervisor" permission in Care (see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor)).

If you want to assign multiple skills to an individual user, see "Assign multiple skills to a user" further in this article.

Steps:

Go to Settings -> Care -> Skills.

Click the skill that you want to assign to users.The skill panel slides out.

Click +Add users.

The dialog for adding users pops up. Only the users who have an account role with either the "Agent" or "Supervisor" level of access to Care are available to assign skills to. Those are Account Admins and the users who have a custom account role with the "Agent" or "Supervisor" permission in Care (see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor)).

Select individual users and/or user groups whom you want to assign the skill to, and click Add.The list of the selected user groups/users appear on the skill panel under Users. If you assign the skill to a user group (see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups)), be aware of the following implications:

The skill is assigned to all users in the user group.

Adding a new user to the user group at any time later automatically assigns the skill to this user.

Removing a user from the user group at any time later removes the skill from the user.

To remove the skill from a user in the user group, you have to either remove this user from the user group (see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups)) or remove the skill from the user group (see "Remove a skill from multiple users at once" further in this article).

Deleting the user group removes the skill from the users who were members of the user group.

Click Save.The skill is assigned to the users.

### Assign multiple skills to a user

Assign multiple skills to an individual user.

You can assign skills only to the users who have an account role with either the "Agent" or "Supervisor" level of access to Care. Those are Account Admins and the users who have a custom account role with the "Agent" or "Supervisor" permission in Care (see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor)).

If you want to assign an individual skill to multiple users, see "Assign a skill to multiple users at once" earlier in this article.

Steps:

Go to Settings -> Users.

Find and click the user in the list on the left.

Click the Care tab.

Under the Skills section, click +Add skill, select the skills that you want to assign to the user, and click Apply.

The skills are assigned to the user and appears under the Skills section.

### Remove a skill from multiple users at once

Removing a skill from a user does not delete the skill itself from the account.

You can assign the skill back at any time (see earlier in this article).

Steps:

Go to Settings -> Care -> Skills.

Click the skill that you want to remove from the users.The skill panel slides out.

Under the Users section, find the user or user group whom you want to remove the skill from, and click the cross icon next to them.

The user/user group is deleted from the skill panel.

Repeat Step 3 for all the users/user groups whom you want to remove the skill from. Removing a skill from a user group removes the skill from all the users in this user group.

Click Save.The skill is removed from the users.

### Remove multiple skills from a user

Removing a skill from a user does not delete the skill itself from the account.

You can assign the skill back at any time (see earlier in this article).

Steps:

Go to Settings -> Users.

Find and click the user in the list on the left.

Click the Care tab.

Under the Skills section, find the skill that you want to remove from the user, and click the cross icon next to it.

The skill is removed from the user. If a skill was assigned to the user not as an individual user but as a member of a user group (see "Assign a skill to multiple users at once" earlier in this article), this skill appears under the Group skills section. To remove a group skill from the user, either remove this user from the user group (see [Organize Users into User Groups](https://docs.emplifi.io/platform/latest/home/organize-users-into-user-groups)) or remove the skill from the user group (see "Remove a skill from multiple users at once" earlier in this article).

Repeat Step 4 for all the skills that you want to remove from the user.

### Review a Care user's skills

Find out what skills a Care user has assigned.

Steps:

Go to Settings -> Users.

Find and click the user in the list on the left.

Click the Care tab.The skills that the user has assigned are listed under the Skills section.

If the user has skills that were assigned to them not as an individual user but as a member of a user group (see "Assign a skill to multiple users at once" earlier in this article), these skills appear under the Group skills section.

### Delete a skill from the account

Deleting a skill from the account removes it from any user who has this skill assigned.

Steps:

Go to Settings -> Care -> Skills.

Hover over the skill you want to delete, and click the trash can icon that appears.

Confirm the deletion.The skill is deleted from the account and at the same time is removed from all the users it was assigned to.

---

## Set Up the Maximum Capacity for Care Users

To distribute cases among Care agents efficiently and make sure that the agents are productive and are not overloaded, specify the maximum number of cases that a particular Care agent can be assigned to.

By default, a Care agent has their maximum number of cases set to 5. You can adjust this for each agent individually based on their seniority, experience, scheduled shifts, an so on.

If automated assignment of cases is enabled in Care (see [Automatically Assign Cases in Care](https://docs.emplifi.io/platform/latest/home/auto-assign-cases-in-care)), when a Care agent gets the maximum number of cases assigned, no more cases will be automatically assigned to this agent.

However, you can still assign cases to the agent manually (see [Assign a Care Case to a Care Agent](https://docs.emplifi.io/platform/latest/home/assign-a-care-case-to-a-care-agent)).

### Where to find the maximum capacity set for a Care agent

In the Care module, you can see the maximum capacity and their current workload next to each user's name:

In the list of the users that opens when you want to assign a case to a Care agent (see [Assign a Care Case to a Care Agent](https://docs.emplifi.io/platform/latest/home/assign-a-care-case-to-a-care-agent))

(Only if the Care user is online) In the list of the users who are currently online To display the list of the online users, click the Status bar on the bottom left (see [Control Your Online Presence and Status in Care](https://docs.emplifi.io/platform/latest/home/control-your-online-presence-and-status-in-care)).

The maximum capacity and the current workload are displayed as`x/y`(for example,`0/5` or`3/8`), where`x` is the number of cases currently assigned to the agent and`y` is their maximum capacity.

The numbers are displayed in green when a Care agent has no (zero) cases currently assigned to them:

The numbers are displayed in black when a Care agent has a few cases currently assigned but the number of the assigned cases is smaller than the maximum capacity:

The numbers are displayed in red when the number of cases that a Care agent has currently assigned exceeds the maximum capacity set for this agent:

### Set up the max capacity for a user

By default, a Care agent has the maximum number of cases set to 5. You can adjust it for each agent individually based on their seniority, experience, scheduled shifts, an so on.

To be able to set up the max capacity of a Care agent, you must have an account role with the "Supervisor" level of access to Care (that is, an Account Admin or a custom account role with the "Supervisor" permission in Care; see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor)).

Steps:

Go to Settings -> Users.

Find and click the user.

Click the Care tab.

Set the Individual case workload (capacity) parameter to the maximum number of cases for the agent.

### Find out a user's maximum capacity

To be able to find out the max capacity of a Care agent, you must have an account role with the "Supervisor" or "Agent" level of access to Care (that is, an Account Admin or a custom account role with the "Supervisor" or "Agent" permission in Care; see [Set up Care Roles - Agent and Supervisor](https://docs.emplifi.io/platform/latest/home/set-up-care-roles-agent-and-supervisor)).

Users with no Care permissions cannot access this information.

Steps:

Go to Settings -> Users.

Find and click the user.

Click the Care tab.

The maximum number of cases for the agent is displayed as the Individual case workload (capacity) parameter.

---

## Set Up a Service-level Agreement (SLA) in Care

This article is for the users who have an account role with the "Supervisor" level of access to Care (that is, for Account Admins and the users who have a custom account role with the "Supervisor" permission in Care; see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

A service-level agreement (SLA) is the level of service that your company as a service provider is committed to provide to your customers. An SLA establishes a set of rules and criteria that helps Care agents evaluate how quickly they should react to, respond to, and resolve customer issues.

### Why use an SLA?

Setting up an SLA can help you achieve the following:

Set up service expectations for Care agents and your customers.An SLA ensures that you deliver measured and predictable service to your customers. At the same time, it sets up a clear framework of metrics for Care agents referring to how quickly a customer expects to get a response and to get their issue resolved.For example, you can specify how fast a case should get a Care agent assigned and how soon a Care agent should post the first reply to the case depending on its priority. You may also be interested in the total resolution time for cases with different priorities.

Help Care agents prioritize customer issues.Because of a high volume of cases, Care agents may not always be aware of what cases are due soon and must be addressed with the highest priority and what cases can wait. An SLA helps them focus on high-priority cases and address them before an SLA milestone is breached.

Get notified if a customer issue has not been addressed in a timely manner.If an SLA milestone is breached, a notification is sent to the agent currently assigned to the case and the users who have an account role with the "Supervisor" level of access to Care (that is, Account Admins and the users who have a custom account role with the "Supervisor" permission in Care; see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)). This brings attention to the delayed cases and helps you take necessary measures to address the situation.

### SLA policies

An SLA in an Emplifi account is configured as a collection of SLA policies.

An SLA policy is a set of rules for addressing and resolving Care cases and conditions to define what Care cases this SLA policy should be assigned to. When the properties of a case match the conditions defined in an SLA policy, the SLA policy is assigned to the case ("if a case was opened by profile`ABC`, then assign the`XYZ` SLA policy to the case").

You can have one or multiple SLA policies. You can access the SLA policies in the Settings section of your Emplifi account, under Care -> SLA Policies.

When a case has an SLA policy assigned, you can see SLA-related information in the case header and on the case property panel.

For more information about SLA-related properties of a case, see [Understand the SLA Status and the Log of Milestones of a Care Case](https://docs.emplifi.io/platform/latest/home/understand-the-sla-status-and-the-log-of-milestone).

#### Conditions

An SLA policy can contain one or multiple conditions that define what cases this SLA policy can be assigned to. An SLA policy with multiple conditions can be assigned to a case only when all the conditions are met.

You can set up conditions for the following properties of a case:

Message textEnter the keywords that should or should not be included in the case text.

ChannelSelect the profile from which the case was opened.

PlatformSelect the platform for which the case was opened.

SentimentSelect the sentiment (positive/negative/neutral/no sentiment) that was assigned to the case.

LanguageSelect the language in which the case was opened.

If you set up multiple conditions in an SLA policy, make sure that all the conditions are consistent among themselves.

For example, if you are setting up two conditions, one for the platform and one for the profile, make sure that the selected profile matches the selected platform. If you select a LinkedIn profile in the profile condition and then choose X (formerly Twitter) in the platform condition, the SLA policy will never be used because a case that meets these conditions cannot exist.

An SLA policy can contain no conditions at all. An SLA policy with no conditions is assigned to a new case that does not fit any other existing SLA policy.

Using an SLA policy with no conditions can be helpful in the following situations:

You need to assign the same SLA policy to every new case opened in Care regardless of the case properties (the profile from which the case was opened, what sentiment the case message has, and so on).In this situation, create only one SLA policy and do not add any conditions to it.

You have multiple SLA policies that are assigned to new cases depending on specific conditions. If a case does not fit any existing SLA policy, it still should be treated under some SLA rules.In this situation, create an SLA policy with no conditions and place it as the last one in the list of the SLA policies. If none of the SLA policies above the last one can be assigned to a case, the case gets assigned the last SLA policy (the one with no conditions).For more information about why the order of SLA policies is important, see "How a case gets an SLA policy assigned" further in this article.

#### Milestones

An SLA policy contains milestones that define how quickly Care agents should react to, respond to, and resolve a case depending on the case priority (Urgent, High, Medium, and Low).

For cases escalated to Care from Community, the priority in Care is set to the same value as the case had in Community. If the priority cannot be detected, it defaults to Medium.

For each level of priority, you can set up the following milestones in an SLA policy:

**Time to assign**The elapsed time between the moment a case was created and the moment the case was assigned to a Care agent

**First response time**The elapsed time between the moment a case was created and the moment a Care agent posted the first responseThe first response time is crucial in determining a customer's satisfaction because it is an acknowledgment to the customer that their message is being looked into. If the priority of the case is urgent, you may want to set up the first response time to the lowest value possible.

**Next response time**The elapsed time between the next customer message and the next reply from the Care agent (after the first response was sent and the customer got back to the agent)If the priority of the case is urgent and the case is still active after the first response, you may want to set up the next response time to be shorter than the first response time.

**Total resolution time**The elapsed time between the moment a case was created and the moment the case was resolved.

When you start creating an SLA policy, the milestones are prepopulated with the default values. You can change them as you need.

Use`d` for days,`h` for hours, and`m` for minutes. Use a space as a separator.

Examples:

`2h`

`12h 5m`

`1d 12h 30m`

The time to assign must be shorter than the first response time.

The total resolution time must be longer than the first response time.

Using 0 (zero) as the value of a milestone is not allowed.

You can disable the milestones that you do not need (for example, depending on your business requirements, you may not be interested in how fast a Care agent posts the first reply and may want rather focus on the total resolution time).

You cannot disable all milestones at once. At least one milestone must always be enabled in an SLA policy.

The disabled milestones are skipped, and a case is automatically moved to the next enabled milestone. The disabled milestones are not visible in the case's details and milestone log and are not included in Care widgets and metrics (see [Analyze Performance of Your Care Operations](https://docs.emplifi.io/platform/latest/home/analyze-your-care-escalations)).

#### Statuses

An SLA policy can be enabled (its status set to ON) or disabled (its status set to OFF).

An enabled SLA policy is in active use and gets assigned to the matching new cases.

A disabled SLA policy is not assigned to any new case.

A new SLA policy is created as disabled by default. This is done so that you can save an SLA policy that is not completely configured and you want to return to it later or you want to test the SLA policy before it gets assigned to any case.

If you disable an SLA policy that have been assigned to some cases, it remains assigned to these cases.

You can enable or disable an SLA policy at any time (see "Enable or disable an SLA policy" in [Set Up an SLA in Care](https://docs.emplifi.io/platform/latest/home/set-up-an-sla-in-care)).

#### How a case gets an SLA policy assigned

A case gets the SLA policy assigned when the case is created in Care. Once the SLA policy is assigned to a case, it cannot be unassigned or changed to a different SLA policy. You only can edit the assigned SLA policy itself (update its conditions or milestones; see "Update an SLA policy" in [Set Up an SLA in Care](https://docs.emplifi.io/platform/latest/home/set-up-an-sla-in-care)).

Each new case is evaluated against the existing enabled SLA policies in the order in which the SLA policies are listed on the SLA Policies page. The first SLA policy whose conditions meet the case properties is assigned to the case, and the evaluation stops.

Cases are not evaluated against disabled SLA policies.

Here is how it works: when a new case is opened in Care, its properties are compared to the conditions of the first SLA policy in the list.

If the case properties match the conditions, the SLA policy is assigned to the case.The evaluation stops. The case is not compared to any other SLA policy in the list.

If the case properties do not match the conditions, the SLA policy is skipped, and the case is compared to the second SLA policy in the list. If the case properties do not match the conditions of that SLA policy either, the SLA policy is skipped, and the case is compared to the third SLA policy in the list, and so on.This process continues until an SLA policy that matches the case properties is found. In this case, this SLA policy is assigned to the case. The evaluation stops. The case is not compared to any other SLA policy in the list.

### Set up an SLA

See [Set Up an SLA in Care](https://docs.emplifi.io/platform/latest/home/set-up-an-sla-in-care).
