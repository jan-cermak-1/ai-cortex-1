# Release Notes

## 2026

### February 18, 2026

#### Listening

**Support for Reddit**

Our Listening solution now supports Reddit.

Monitor brand mentions, keywords, and competitor conversations on Reddit, and bring Reddit insights directly into your dashboards, alongside all your other social media channels.

Collected listening mentions are available for analysis on the Listening boards in Unified Analytics (in aggregated form) and in the Listening section in Content (as individual content pieces).

Reddit as a listening data source is available as an add-on. To have it enabled for your Emplifi account, please contact your Customer Success Manager or Emplifi Support at support@emplifi.io.

Learn more: Listening Data Sources and Covered Content

#### Unified Analytics

**Bar Chart Behavior and Data Export**

In Unified Analytics, vertical bar charts with aggregated "Other" categories now behave more predictably when you export data by sharing a widget or board.

For raw data exports (CSV and XLSX), breakdown values are no longer aggregated into an "Other" category. Instead, you receive the full, unaggregated dataset for further analysis.

PNG exports continue to reflect exactly what is displayed on screen. If the chart shows an "Other" category due to space limitations, the exported PNG will display the same aggregated view.

Learn more: Share a Unified Analytics Widget, Share a Unified Analytics Board, Bar Chart Display and Export Behavior in Unified Analytics

#### Flow Automations

Flow Automations is currently in early access. Contact your Customer Success Manager to request participation in the early access program. Some features may not be available or change before the full release. Please report any bugs you encounter.

**Flow Automations Homepage Update**

*Additional Filter Options*

To help you manage your library of flows more efficiently, you can now filter the flows table on the Flow Automations homepage by the components used in each flow. The filter helps you quickly find flows that include specific triggers, conditions, or actions.

The filter is based on the component itself, so for example, you can find all the flows in your account that use the Community label content action.

Learn more: Flow Automations [Early Access]

**Flow Canvas Editor Updates**

*Drag and Drop*

You can now rearrange nodes and elements along and between branches in the canvas editor. Elements can only be moved to compatible node types.

With this update, you can move condition elements between condition nodes, reorder trigger or condition elements within their respective nodes, and reposition condition or action nodes within the flow.

*Canvas Notes*

The description of the flow is now directly accessible directly within the canvas editor. Any change to the description will also update the description of the flow on the Flow automations home page. This change ensures details about the flow are always available when inside the canvas editor.

Learn more: Flow Canvas Overview

**New Action**

The following action is now available for you to add to your flows:

Care Messages Label Content Action

---

### February 4, 2026

#### Unified Analytics

**AI Insights**

AI Insights are available as part of Emplifi Fuel. If you don't have the Fuel strategic Command Center enabled for your account, contact your customer success manager to learn more.

AI Insights is a new AI-powered feature in Unified Analytics that analyzes widget data and automatically generates meaningful insights to support faster, smarter decision-making.

What it does:
- Analyzes data directly within Unified Analytics widgets
- Automatically structures insights into three clear sections:
  - Observation: A concise, factual summary of what the data shows, highlighting key trends without interpretation
  - Analysis: A deeper explanation of why or how those patterns occur, including relationships, trends, differences, or anomalies
  - Suggestions: Actionable recommendations that guide next steps and help improve outcomes

Key points:
- Transforms raw data into clear, structured insights
- Provides both context and actionable guidance
- Helps users quickly understand performance and identify opportunities

Learn more: Unified Analytics, Use AI Insights

#### Care

**Custom Order of Case Views**

In Care, you can now change the default alphabetical order of case views and view groups and reorder the views as you need. This helps Care agents focus on the more important work first.

To reorder the case views, go to Settings → Care → Views, and drag and drop a case view or a view group to the new position. You can also add dividers to visually separate logical blocks of views. The changes are saved automatically and are immediately reflected in Care.

We also added new icons to help you easier differentiate case views.

**New Filters in Case Views**

A new filter is now available in case views: Mentioned users.

When a specific user is selected as the value of this filter, the view shows both the cases where this user is mentioned directly and the cases where a user group including this user is mentioned.

When a user group is selected as the value of this filter, the view shows the cases where this user group is mentioned. The cases where the individual users included in this user group are mentioned directly will not appear in this view.

The Mentioned users filter and the Assigned users filter now both offer a new filter value: Current user, which dynamically resolves to the currently logged-in user. This allows you to create one shared view with cases assigned to a user or mentioning a user instead of creating multiple views for each Care user individually.

Learn more: Create Case Views in Care

#### Community

**Option to Create Care Case from Individual Direct Message Deprecated**

In Community, the option to create a Care case from an individual direct message is no longer available. You can now escalate an entire direct conversation only.

This unifies the escalation process from Community to Care, ensures that the full context is included in the Care case, and reduces ambiguity.

Learn more: Escalate a Community Message to Care

#### Bot

**Simple Intent Engine**

The Simple Intent Engine is a new AI-powered intent handler, designed to support intent detection and conversation routing via AI.

What it does:
- Uses an AI embedding model to convert user utterances into numeric representations (embeddings)
- Matches customer messages to the correct configured intent profiles
- Routes conversations to the appropriate configured actions

Key points:
- Powers advanced intelligence via AI for intent detection and routing
- Only executes actions explicitly configured by the user
- Easily activated via a single click, removing manual configuration steps

**Updated Guidance Text**

We have added improvements to the guidance text for response actions within the authoring screen to simplify the configuration interface for users.

**Save Transcript Setting Options**

We have added a new control to the Save Transcript action. It allows users to choose whether to include system event messages in the transcript. Examples include agent connected/disconnected events, escalation notifications, and agent ringing. Users can also choose to include only messages exchanged between the end user and the bot.

Learn more: Emplifi Bot, Enabling the Simple Intent Engine

#### Flow Automations

Flow Automations is currently in early access. Contact your Customer Success Manager to request participation in the early access program. Some features may not be available or change before the full release. Please report any bugs you encounter.

**New Content Source**

Emplifi customer success managers can now create flows for your account that use Care messages as a content source. Because this is a new content source, new triggers, conditions, and actions are also available. This content source will become generally available to everyone as the early access develops for Flow Automations. To learn more, see Care Messages Flow Automations Reference.

**Flow Canvas Editor Updates**

Two new actions have been added to make it easier to restructure Flows when optimizing the processing logic:

- Transform to else branch: Available only below condition nodes that do not already have an else branch. This action converts the edge and all connected components into an else branch of the condition node.
- Transform to branch: Available only on else branch edges. This action converts the else branch of a condition node into a branch edge that shares the same parent as the condition node.

Learn more: Flow Automations [Early Access]

#### [REMINDER] Facebook 10-second Video Views Metric Deprecated

As per Meta's announcement, all paid and organic 10s video metrics and their variants for Facebook were deprecated on January 26, 2026.

Meta's decision impacts all partners that rely on the affected APIs, including Emplifi and all our competitors.

**General Impact**

Meta stopped sending data for the affected metrics, and all places where the deprecated metrics were used in analytics stopped updating data for those metrics.

Profile level:
- page_video_views_10s
- page_video_views_10s_paid
- page_video_views_10s_organic
- page_video_views_10s_autoplayed
- page_video_views_10s_click_to_play
- page_video_views_10s_unique
- page_video_views_10s_repeat

Post level:
- post_video_views_10s
- post_video_views_10s_unique
- post_video_views_10s_autoplayed
- post_video_views_10s_clicked_to_play
- post_video_views_10s_organic
- post_video_views_10s_paid
- post_video_views_10s_sound_on

**Replacement Metrics**

Meta has not announced replacements for the deprecated metrics. Tooltips for affected metrics were updated.

**Full Impact Statement**

See Facebook Metric Deprecation (January 2026).

---

### January 21, 2026

#### Flow Automations

Flow Automations is currently in early access. Contact your Customer Success Manager to request participation in the early access program. Some features may not be available or change before the full release. Please report any bugs you encounter.

**Changes to Actions**

Starting with this update, each action node component can contain only one action element. This means that each action exists as a singular node within the flow. We made this change to better optimize the processing path of flows.

**New Trigger**

You can now add the Care Case Closed Trigger to your flows.

**New Conditions**

There are two new conditions you can add to your flows:
- Care Case Closed Condition
- Care Case Created Time Condition

**Flow Canvas Editor Updates**

We introduced a Remove (trash can) button to elements inside a node. This means that you can now hover your mouse cursor over an element and click the trash can icon to remove the element from the flow.

Learn more: Flow Automations [Early Access]

#### Bot

**Translations V2, Accessibility, Quality of User Experience, and Usability Improvements**

This release includes:

**Translations V2 (Beta)**

We have updated Translations V2 Beta to allow users to be able to see any existing translations that may exist in a bot, and choose whether to retain the original, or refresh with a newly generated translation. These translations will not be applied to a bot unless the translation has been approved.

**Accessibility and quality of user experience**

To continue to provide an accessible experience to users, we have made some updates to better support keyboard navigation focus and tabbing, in addition to announcement behaviors for screen readers.

Additional updates have been made to improve the quality of the user experience, including:

- An updated bot tester: users can now use a dropdown selector within the bot tester to switch between language variants for easier testing and content validation.
- The actions control interface in the inspector panel has been updated to be more consistent with the recently improved routing rules interface. This update also has improved the guidance text displayed when selecting options or hovering over tooltips.
- New content widgets have been added to the overview page, linking to documentation for the bot overview, settings menu, and the existing bot terminology glossary. These widgets will only appear if you have less than 10 bots in your list, designed to provide an additional guide for newer users.
- Adding descriptive text for variable types (for users creating flow or bot variables).
- Updated guidance text for response type configuration fields, to provide better clarity for users.
- Routing rules can now support the "emoji-only" condition, allowing Bot users to configure specific flow responses in the event of an emoji-only message from a customer. There is also now a global setting that allows users to ignore all emoji-only messages if they choose to enable this setting.

**Agent chat**

We have updated the escalation mechanism between Bot and Agent, increasing the persistence of ring notifications for agents. In addition, we have updated event messages in transcripts to provide better clarity to internal agent teams.

**Web messenger CSS support**

We have updated the web messenger interface to provide a defined, expandable input field for clients to add their own CSS styling to the messenger widget.

**Collectinfo node**

We have updated the Collectinfo node to provide more options for collecting formatted data to be reused in your bot flows. As part of these updates, validation for different data formats have been included within the node itself, to better support user experience for your end users.

We advise against using the Collectinfo node to collect information unnecessarily. Clients should not use this feature to request sensitive information from customers.

Learn more: Emplifi Bot, Language Translations V2

#### [REMINDER] Facebook 10-second Video Views Metric Deprecation Announcement

As per Meta's announcement, all paid and organic 10s video metrics and their variants for Facebook are deprecated effective January 26, 2026.

Meta's decision impacts all partners that rely on the affected APIs, including Emplifi and all our competitors.

**General Impact**

Meta will stop sending data for the affected metrics, and all places where the deprecated metrics are used in analytics will stop updating data for those metrics.

Profile level:
- page_video_views_10s
- page_video_views_10s_paid
- page_video_views_10s_organic
- page_video_views_10s_autoplayed
- page_video_views_10s_click_to_play
- page_video_views_10s_unique
- page_video_views_10s_repeat

Post level:
- post_video_views_10s
- post_video_views_10s_unique
- post_video_views_10s_autoplayed
- post_video_views_10s_clicked_to_play
- post_video_views_10s_organic
- post_video_views_10s_paid
- post_video_views_10s_sound_on

**Replacement Metrics**

Meta has not announced replacements for the deprecated metrics. Tooltips for affected metrics have been updated.

**Full Impact Statement**

See Facebook Metric Deprecation (January 2026).

---

### January 8, 2026

#### Community and Care

**Automated Sentiment Tagging of TikTok Comments**

Automated sentiment tagging of TikTok comments in now available in Community and Care.

**Where is the new sentiment data available?**

As individual sentiment tags - in Community messages and Care cases originated from TikTok comments

Similarly to how automated sentiment tagging is done for all the other social media platforms, when the sentiment of a TikTok comment is detected automatically, the sentiment icon is marked with a letter A.

As aggregated data:
- In Dashboard, in the Community and Care widgets where the sentiment is available as a filter or a breakdown
- In Unified Analytics, in the widgets on the Care boards and in custom Community widgets where sentiment is available as a filter or a breakdown

**How is it going to affect you?**

- You are going to see your TikTok profiles in the list of profiles in Settings → Automation → Sentiment.
- If automated sentiment tagging is already enabled in your Emplifi account for all profiles on all platforms, it is also going to be enabled for your TikTok profiles. You can disable it if you want.
- If automated sentiment tagging is not enabled in your Emplifi account at all or is enabled just for some profiles or platforms, it is going to be disabled for your TikTok profiles. You can enable it if you want.
- For the TikTok profiles with automated sentiment tagging enabled, the existing Community messages and Care cases missing a sentiment are going to be tagged with a sentiment automatically. Any existing sentiment that was assigned manually will not be changed.
- You can always manually change any sentiment that was assigned automatically.

Learn more: Using Sentiment Analysis to Understand Your Audience

#### [REMINDER] Facebook 10-second Video Views Metric Deprecation Announcement

As per Meta's announcement, all paid and organic 10s video metrics and their variants for Facebook are deprecated effective January 26, 2026.

Meta's decision impacts all partners that rely on the affected APIs, including Emplifi and all our competitors.

**General Impact**

Meta will stop sending data for the affected metrics, and all places where the deprecated metrics are used in analytics will stop updating data for those metrics.

Profile level:
- page_video_views_10s
- page_video_views_10s_paid
- page_video_views_10s_organic
- page_video_views_10s_autoplayed
- page_video_views_10s_click_to_play
- page_video_views_10s_unique
- page_video_views_10s_repeat

Post level:
- post_video_views_10s
- post_video_views_10s_unique
- post_video_views_10s_autoplayed
- post_video_views_10s_clicked_to_play
- post_video_views_10s_organic
- post_video_views_10s_paid
- post_video_views_10s_sound_on

**Replacement Metrics**

Meta has not announced replacements for the deprecated metrics. Tooltips for affected metrics have been updated.

**Full Impact Statement**

See Facebook Metric Deprecation (January 2026).

---

## 2025

### December 2025

#### December 10, 2025

**Listening**

**New Content Types Collected from Instagram and TikTok**

Our Listening solution can now collect these types of content:

**Instagram** - For accounts that are added to your Emplifi account as owned profiles, we now collect:
- Comments where your account is mentioned via an @mention
- Comments that are published under the your account's posts

**TikTok** - We now collect comments where your account is mentioned via an @mention.

Learn more: Listening Data Sources and Covered Content, Downloading and Processing Listening Data

**Flow Automations**

Flow Automations is currently in early access. Contact your Customer Success Manager to request participation in the early access program. Some features may not be available or change before the full release. Please report any bugs you encounter.

**New Conditions**

There are two new conditions you can add to your flows:
- Community Escalated to Care Condition
- Community Listening Query Condition

**Updates to Existing Conditions**

Each branch of a Community or Care flow, including its else branches, can now have a combined total of 4 Keyword List and Full-text condition elements. This is an increase from the previous limit of 2 elements a branch.

Learn more: Care Full-text Condition, Care Keyword List Condition, Community Full-text Condition, Community Keyword List Condition

**Updates to Existing Actions**

There are two updates for existing actions:

The Community Send Auto-reply Action and Care Send Auto-reply Action now supports Voice of Customer surveys in answer templates.

When there are multiple users assigned, the Community Send Auto-reply Action now uses the name of the first assigned user to resolve the {{agent_name}} dynamic placeholder from an answer template.

Learn more: Flow Automations [Early Access]

**[REMINDER] Facebook 10-second Video Views Metric Deprecation Announcement**

As per Meta's announcement, all paid and organic 10s video metrics and their variants for Facebook are deprecated effective January 26, 2026.

Meta's decision impacts all partners that rely on the affected APIs, including Emplifi and all our competitors.

**General Impact**

Meta will stop sending data for the affected metrics, and all places where the deprecated metrics are used in analytics will stop updating data for those metrics.

Profile level:
- page_video_views_10s
- page_video_views_10s_paid
- page_video_views_10s_organic
- page_video_views_10s_autoplayed
- page_video_views_10s_click_to_play
- page_video_views_10s_unique
- page_video_views_10s_repeat

Post level:
- post_video_views_10s
- post_video_views_10s_unique
- post_video_views_10s_autoplayed
- post_video_views_10s_clicked_to_play
- post_video_views_10s_organic
- post_video_views_10s_paid
- post_video_views_10s_sound_on

**Replacement Metrics**

Meta has not announced replacements for the deprecated metrics. Tooltips for affected metrics have been updated.

**Full Impact Statement**

See Facebook Metric Deprecation (January 2026).

**[REMINDER] Facebook Impressions and Page Fans Metrics Deprecated**

As per Meta's announcement, Page impressions, Post impressions, and Page fans metrics for Facebook were deprecated effective November 15, 2025.

Learn more: Facebook Metric Deprecation (November 2025)

---

### November 2025

#### November 26, 2025

**[EARLY ACCESS] Flow Automations**

Flow Automations is currently in early access. Contact your Customer Success Manager to request participation in the early access program. Some features may not be available or change before the full release. Please report any bugs you encounter.

This release introduces a new, visual approach to building automated flows across your Emplifi environment. Currently, Flow Automations are available only for Community and Care.

**Overview**

Flow Automations provides a flexible canvas that allows you to define how processes should run from start to finish. Using a combination of trigger, condition, and action nodes, you can:
- Automate repetitive or event-driven tasks.
- Route content and actions based on logic you define.
- Build flows that support multiple outcomes through branching.
- Maintain clear, visual representations of your automation logic.

**What Is a Flow?**

You can think of a flow as a flowchart which directs content that triggers the flow to the specific outcomes you defined. Each flow consists of the nodes and edges (lines) that connect the nodes together.

**Node Types**

There are three node types that form the foundation of every flow:
- Trigger nodes – specify the event that initiates the flow, such as content changes or user actions.
- Condition nodes – introduce logic and branching, enabling flows to adapt to different scenarios.
- Action nodes – define the operations that the flow performs once initiated.

**Edge Types**

Flow progression is controlled through edges, which determine how nodes connect and how the flow executes:
- Base edges – create the primary, sequential path between nodes.
- Branch edges – define conditional paths that run when specific criteria are met.
- Else branch edges – provide an alternative path when a condition node does not trigger.

**New Actions and Conditions**

Alongside the announcement of Early Access, we also have some additional updates to share. The following actions and conditions are now available for you to add to your flows:

For Community:
- Community Number of Followers on X Condition
- Community Message Length Condition

For Care:
- Care Change Salesforce Status Action
- Care Escalated to Salesforce Condition
- Care Escalated to Agent Condition
- Care Assigned SLA Policy Condition

Learn more: Flow Automations [Early Access]

**Care**

**Unassign Cases from Agents Automatically**

You can now configure Care to automatically unassign cases from agents when the agents' status changes to "Away" or "Offline".

This helps you ensure that cases continue to be handled by Care agents who are currently available, preventing delays in processing the cases, and helps avoid extra work of unassigning cases manually.

Learn more: Automatically Unassign Cases in Care

**Listening**

**Support for TikTok**

Our Listening solution now supports TikTok!

We collect @mentions of your TikTok accounts in other TikTok users' posts.

Learn more: Listening Data Sources and Covered Content, Downloading and Processing Listening Data

**Facebook 10-second Video Views Metric Deprecation Announcement**

As per Meta's announcement, all paid and organic 10s video metrics and their variants for Facebook are deprecated effective January 26, 2026.

Meta's decision impacts all partners that rely on the affected APIs, including Emplifi and all our competitors.

**General Impact**

Meta will stop sending data for the affected metrics, and all places where the deprecated metrics are used in analytics will stop updating data for those metrics.

Profile level:
- page_video_views_10s
- page_video_views_10s_paid
- page_video_views_10s_organic
- page_video_views_10s_autoplayed
- page_video_views_10s_click_to_play
- page_video_views_10s_unique
- page_video_views_10s_repeat

Post level:
- post_video_views_10s
- post_video_views_10s_unique
- post_video_views_10s_autoplayed
- post_video_views_10s_clicked_to_play
- post_video_views_10s_organic
- post_video_views_10s_paid
- post_video_views_10s_sound_on

**Replacement Metrics**

Meta has not announced replacements for the deprecated metrics.

**Full Impact Statement**

See Facebook Metric Deprecation (January 2026).

**[REMINDER] Facebook Impressions and Page Fans Metrics Deprecated**

As per Meta's announcement, Page impressions, Post impressions, and Page fans metrics for Facebook are deprecated effective November 15, 2025.

Learn more: Facebook Metric Deprecation (November 2025)

#### November 12, 2025

**Unified Analytics**

**Share Dynamic Boards and Saved Views with Selected Users**

In Unified Analytics, you can now share saved views and dynamic boards with specific users or user groups. Users who you share the board or saved view will be notified according to their notification settings in Settings → Notifications. This change gives you greater flexibility and control over who can access your insights, ensuring smooth collaboration.

Dynamic boards are part of our early access program and may not be available on your account. Contact your Customer Success Manager to learn more about joining the program to gain access to dynamic boards.

For dynamic boards and saved views on standard boards, there are now three visibility options:
- Private
- Global
- Specific Users/User groups (new!)

In addition, when sharing a dynamic board, there is also a new section called Saved views access. In this section, you can see what saved views are currently attached to your board and make changes to the visibility of the view.

For saved views on dynamic boards, there are now three visibility options:
- Private
- Same as board (replaces Global)
- Specific users/user groups (new!)

Sharing only affects whether the users or user groups can see the view or dynamic board. Users still need an account role that lets them manage boards or views to make any edits, and to share their saved views and dynamic boards.

Learn more: Share a Dynamic Board, Share a Saved View for a Dynamic Board in Unified Analytics, Create a Saved View

**Create Listening Query with Keyword Suggestions from Summary Topic**

In Unified Analytics, once you have generated a summary of a listening query, you can now create a new listening query directly from any topic of the summary. The new listening query will inherit all the properties of the original query but in addition will contain keyword suggestions derived from the summary topic.

Learn more: Generate a Summary of a Listening Query

**Unified Analytics, Dashboard, Content, and API**

**New Primary Metrics**

In response to the deprecation of Facebook's impressions and page fans metrics, we are implementing the following metrics into Emplifi as primary metrics from Facebook:
- Media views profile level (Page views in Facebook)
- Media views post level (Post views in Facebook)
- Page follows (metric offers also values for regional Facebook pages)
- Page follows city
- Page follows country

The new primary metrics will be introduced to Content, Unified Analytics, Dashboard, Community, custom metrics, and the Emplifi API. For a summary of widgets and boards, see Facebook Metric Deprecation (November 2025).

Posts created after the deprecation should have the same same exact counts for Media views and Total impressions. Posts created before the deprecation can potentially have different values for Media views and Total impressions.

Scope: The new metrics are available only on owned profiles with insights (no public profiles).

Data backfill: Data can be reliably retrieved as far back as January 2025. Our team is actively working to extend this range. The total retrievable timeframe is unknown at the time of this release.

**Bot**

**Language Translation V2 Beta and Accessibility Improvements**

This release includes:

**Language Translation V2 Beta**

Version 2 of the Language Translation interface is now available in beta! This is an optional feature optimized for initial bot creation (or new bots). You can enable it on the General tab of the Settings menu of your bot.

Enabling the V2 Beta interface replaces the functionality of the V1 interface. You can disable the V2 Beta interface at any time. Disabling the V2 Beta interface switches you back to the V1 interface. Before attempting to use the V2 Beta interface on an existing published bot, we advise consulting with your Customer Success Manager. The V2 Beta interface is not fully optimized for use with existing bots, and some guidance may be needed.

The V2 Beta interface includes:
- An advanced review and approval interface: The new interface allows you to translate the entire contents of your bot. Once you have completed the configuration of your initial bot, click Translations in the top taskbar menu and add additional languages to your bot. The interface will then provide automatic translations of your default bot in the newly added languages (or provide a copy of the default language content where an automatic translation is not available).
- An interactive "Path" tool: The "Path" tool allows you to see the context of where the suggested translation for a piece of copy refers to, by opening a new tab to show you the specific location in your default bot.
- An easier way to manage languages: You can now review and make changes to your bot copy directly from within the V2 Beta interface rather than having to click each response node to apply a translation. We still strongly advise reviewing any translated copy for accuracy before publishing.
- A notification alert system: Whenever you have changed any copy or made any additions to your default bot, a yellow warning indicator is now going to notify you that there are translated items that need review or updating, ensuring consistency for your brand.
- Better alignment between bot language variants: The V2 Beta interface removes the V1 dropdown versioning of bots, ensuring that you do not accidentally make structure/design changes in a language variant without updating your default language.

**Accessibility improvements**

To continue to provide an accessible experience to screenreader users, we made some updates to better support keyboard navigation focus and tabbing, in addition to announcement behaviors for screen readers.

**Further support for right-to-left languages**

We made further improvements within the authoring interface for routing rules to better support right-to-left language configurations.

Learn more: Emplifi Bot

**Fuel**

**Command Center General Release**

We're pleased to announce the release of the Emplifi Fuel Command Center. Fuel is a knowledge layer and guidance system built into Emplifi's platform that helps you better utilize the Emplifi platform to achieve your goals fast.

Don't see the Command Center in your navigation bar? Contact your Customer Success Manager to learn more about activating Fuel for your account.

Fuel consists of the following key components, with more features and improvements in active development:
- Command Center: This serves your new home page for all users, and it's loaded by default when you open Emplifi. The Command Center displays interesting trends, the status of objectives and tactics, and other insights associated with the data sources you connect to Fuel.
- Objectives and Tactics: Fuel provides a framework for setting and tracking objectives, with tactics that offer guided advice on how to better use existing platform features. Users can view progress on objectives and tactics through the interface.
- Fuel Profile Labels: Fuel generates profile labels that you can assign to your owned profiles. This allows you to connect your profiles to Fuel objectives, as well as unlock additional automation options within Emplifi.

Learn more: Emplifi Fuel

**[REMINDER] Facebook Metric Deprecation Announcement**

As per Meta's announcement, Page impressions, Post impressions, and Page fans metrics for Facebook are deprecated effective November 15, 2025.

**Replacement Metrics**

- Page impressions will be replaced by Page views (profile-level in Emplifi).
- Post impressions will be replaced by Post views (post-level in Emplifi).
- Paid/Org breakdown of Post Impressions & Page Impressions will be replaced by Paid/Org breakdown of Post views & Page views.
- Page fans (Page likes in Emplifi) will be replaced by Page follows.
- Page fans city (Followers by city in Emplifi) will be replaced by Page follows city.
- Page fans country (Followers by country in Emplifi) will be replaced by Page follows country.

The historical data of the original metric will be preserved, and the new metrics will be mapped into the current Emplifi metrics effective November 15, 2025.

Emplifi boards and widgets (including paid/organic impression breakdowns) that use Page impressions and Post impressions will instead use Media views (Profile-level) and Media views (Post-level) metric data. The impressions naming will remain in Emplifi metrics for compatibility with other social media platforms.

While similar, Views and Impressions are not exactly the same. For an overview of how this affects your analyses, see How to Approach Instagram and Facebook Views and Impressions Data.

**Locale Data Is Not Available for Page Follows**

Page fans locale (Followers by language in Emplifi): Currently, meta has decided not to include locale (language) data for the Page follows metric. They also have not provided an alternative metric.

Followers by language in Emplifi for the Facebook People insights board and Facebook Global people insights board in Unified Analytics will be removed 90 days after the deprecation goes into effect.

**Integration of Primary Metrics**

As part of the integration of the following metrics, we will also download historical data where possible. At the time of deprecation, data can be reliably retrieved as far back as January 2025. Our team is actively working to extend this range.
- Media views profile level (Page views in Facebook)
- Media views post level (Post views in Facebook)
- Page follows (metric offers also values for regional Facebook pages)
- Page follows city
- Page follows country

The new primary metrics will be introduced to Content, Unified Analytics, Dashboard, Community, and the Emplifi API.

Posts or profiles created after the deprecation should have the same counts for Media views and Total impressions. Posts or profiles created before the deprecation can potentially have different values for Media views and Total impressions.

Learn more: Facebook Metric Deprecation (November 2025)

---

### October 2025

#### October 30, 2025

**Ratings & Reviews**

**AI Review Topics General Release**

We are excited to announce the general release of our AI review topics filter. Designed with the idea of helping your shoppers navigate product reviews more efficiently, our LLM for AI Review Topics analyzes the most linguistically prominent words or phrases within the reviews of your products to generate a list of themes or topics associated with those words that shoppers can then use to filter product reviews.

To enable AI Review Topics for your account, please contact your Customer Success Manager.

Learn more: AI Review Topics

**Bot**

**Improved Default Settings and Quality-of-life Improvements for Webchat Messengers**

This release includes:

**Persistent sessions for Webchat messengers**

You can now enable a persistent session in a Webchat messenger. To do so, use the new setting, Persist session, that is now available within Webchat messengers. This setting allows you to define at a global level (by default) that a Webchat conversation will persist between refresh events or revisiting webpages containing the Messenger widget. The setting will remember the state of the Messenger widget (such as open or closed) between sessions, allowing you to easily continue from your last point of conversation. Even with this setting enabled, you can still choose to create a new conversation.

**Disable sending postback messages to Intent handlers**

You can now disable sending any postback messages from interactive reply types (for example, quick replies, carousels, or multi-replies) to analytics or any Intent handlers connected to your bot. This helps reducing potential friction or confusion when interpreting data or routing user behaviors. To do so, use the new setting, Disable sending postback messages to Intent handlers, that is now available under the Intents tab within the Bot authoring settings.

**Improved consistency with "Create new flow" actions**

All options for creating a new conversation flow from the various authoring prompts (the flow selector menu, the home screen button, the Add item option in the library tree) now use the default flow and node structure displayed when adding a new response node. The default structure provides helpful sample texts and a preconfigured action to wait for your input before proceeding through a flow.

**Automatically adding a "Wait for user input" action for interactive response types**

When converting a response type from a non-interactive response (for example, text) to an interactive response type (for example, quick replies, carousels, or multi-replies), the Wait for user input action is now automatically added to the response. You no longer need to add the action manually as an additional configuration step. This reduces the chance of accidentally publishing flows with interactive buttons that do not wait for users to make a choice before proceeding through a conversation flow.

**Updated messages for conversation breaks and initial contact events**

The messages for conversation breaks and initial contact events are now by default displayed as text within the Bot Tester or Conversations interfaces. This helps you easily interpret when a conversation break or initial contact event has been used during a conversation flow. These are system, internal-only messages and are never displayed to customers.

Learn more: Emplifi Bot

**[REMINDER] Facebook Metric Deprecation Announcement**

As per Meta's announcement, Page impressions, Post impressions, and Page fans metrics for Facebook are deprecated effective November 15, 2025.

**Replacement Metrics**

- Page impressions will be replaced by Page views (profile-level in Emplifi).
- Post impressions will be replaced by Post views (post-level in Emplifi).
- Paid/Org breakdown of Post Impressions & Page Impressions will be replaced by Paid/Org breakdown of Post views & Page views.
- Page fans (Page likes in Emplifi) will be replaced by Page follows.
- Page fans city (Followers by city in Emplifi) will be replaced by Page follows city.
- Page fans country (Followers by country in Emplifi) will be replaced by Page follows country.

The historical data of the original metric will be preserved, and the new metrics will be mapped into the current Emplifi metrics effective November 15, 2025.

Emplifi boards and widgets (including paid/organic impression breakdowns) that use Page impressions and Post impressions will instead use Media views (Profile-level) and Media views (Post-level) metric data. The impressions naming will remain in Emplifi metrics for compatibility with other social media platforms.

While similar, Views and Impressions are not exactly the same. For an overview of how this affects your analyses, see How to Approach Instagram and Facebook Views and Impressions Data.

**Locale Data Is Not Available for Page Follows**

Page fans locale (Followers by language in Emplifi): Currently, meta has decided not to include locale (language) data for the Page follows metric. They also have not provided an alternative metric.

Followers by language in Emplifi for the Facebook People insights board and Facebook Global people insights board in Unified Analytics will be removed 90 days after the deprecation goes into effect.

**Integration of Primary Metrics**

As part of the integration of the following metrics, we will also download 2 years of historical data:
- Media views profile level (Page views in Facebook)
- Media views post level (Post views in Facebook)
- Page follows (metric offers also values for regional Facebook pages)
- Page follows city
- Page follows country

The new primary metrics will be introduced to Content, Unified Analytics, Dashboard, Community, and the Emplifi API.

Posts or profiles created after the deprecation should have the same counts for Media views and Total impressions. Posts or profiles created before the deprecation can potentially have different values for Media views and Total impressions.

Learn more: Facebook Metric Deprecation (November 2025)

#### October 15, 2025

**Listening**

**Exclude Sensitive Content from Listening Results**

When setting up a listening query, you can now configure it to filter out sensitive content: detect images that may contain nudity and exclude mentions with such images from listening data.

Learn more: Listening - General Guide

**Bot**

**Updated Overview Page, Response Editor Consistency, and Minor Bugfixes**

This release includes:

**An updated Overview page experience**

Following the release of a new Settings interface (see September 17, 2025), we released an entirely new Overview page experience. The new Overview page replaces the former "cards" interface with a streamlined, easy-to-use table view of your bots.

The table view allows you to see all your bots in a list rather than limiting the display to only three bots. For each bot, you now can:
- See the number of conversations the bot has received in the last 24 hours, and when and by whom the last version of your bot was published
- Add/remove channels and profiles directly from the Overview page and see links to the native experience for each connected channel or profile
- Duplicate and rename your bots within the same menu
- Click the newly added Analyze button to open a pre-filtered Unified Analytics display of your bot and its related performance metrics

**Response editing consistency**

Whether you are editing responses within the main flow authoring interface or via the additional library tree interfaces (Intents, Response Groups, Routing Rules), the drop-down selector now offers a consistent experience, including the descriptive text and guidance for each response type as within the main flow authoring interface.

**Publish button relocation**

The Publish button for bots is now located within the main flow authoring interface in the top-right of the screen. This allows you to publish a change without exiting the bot that you are editing.

**Minor bugfixes and experience improvements**

We released fixes for a few minor visual issues, including the following:
- Node connectors remaining hidden when using URL response types for postbacks
- The button for generating AI intent utterances being displayed when the feature was disabled
- Minor improvements to user experience in terms of clearing "memory" for selected values when editing routing rule conditions

Learn more: Emplifi Bot

**[REMINDER] Facebook Metric Deprecation Announcement**

As per Meta's announcement, Page impressions, Post impressions, and Page fans metrics for Facebook are deprecated effective November 15, 2025.

**Replacement Metrics**

- Page impressions will be replaced by Page views (profile-level in Emplifi).
- Post impressions will be replaced by Post views (post-level in Emplifi).
- Paid/Org breakdown of Post Impressions & Page Impressions will be replaced by Paid/Org breakdown of Post views & Page views.
- Page fans (Page likes in Emplifi) will be replaced by Page follows.
- Page fans city (Followers by city in Emplifi) will be replaced by Page follows city.
- Page fans country (Followers by country in Emplifi) will be replaced by Page follows country.

The historical data of the original metric will be preserved, and the new metrics will be mapped into the current Emplifi metrics effective November 15, 2025.

Emplifi boards and widgets (including paid/organic impression breakdowns) that use Page impressions and Post impressions will instead use Media views (Profile-level) and Media views (Post-level) metric data. The impressions naming will remain in Emplifi metrics for compatibility with other social media platforms.

While similar, Views and Impressions are not exactly the same. For an overview of how this affects your analyses, see How to Approach Instagram and Facebook Views and Impressions Data.

**Locale Data Is Not Available for Page Follows**

Page fans locale (Followers by language in Emplifi): Currently, meta has decided not to include locale (language) data for the Page follows metric. They also have not provided an alternative metric.

Followers by language in Emplifi for the Facebook People insights board and Facebook Global people insights board in Unified Analytics will be removed 90 days after the deprecation goes into effect.

**Integration of Primary Metrics**

As part of the integration of the following metrics, we will also download 2 years of historical data:
- Media views profile level (Page views in Facebook)
- Media views post level (Post views in Facebook)
- Page follows (metric offers also values for regional Facebook pages)
- Page follows city
- Page follows country

The new primary metrics will be introduced to Content, Unified Analytics, Dashboard, Community, and the Emplifi API.

Posts or profiles created after the deprecation should have the same counts for Media views and Total impressions. Posts or profiles created before the deprecation can potentially have different values for Media views and Total impressions.

Learn more: Facebook Metric Deprecation (November 2025)

#### October 1, 2025

**Facebook Metric Deprecation Announcement**

As per Meta's announcement, Page impressions, Post impressions, and Page fans metrics for Facebook are deprecated effective November 15, 2025.

**Replacement Metrics**

- Page impressions will be replaced by Page views (profile-level in Emplifi).
- Post impressions will be replaced by Post views (post-level in Emplifi).
- Paid/Org breakdown of Post Impressions & Page Impressions will be replaced by Paid/Org breakdown of Post views & Page views.
- Page fans (Page likes in Emplifi) will be replaced by Page follows.
- Page fans city (Followers by city in Emplifi) will be replaced by Page follows city.
- Page fans country (Followers by country in Emplifi) will be replaced by Page follows country.

The historical data of the original metric will be preserved, and the new metrics will be mapped into the current Emplifi metrics effective November 15, 2025.

Emplifi boards and widgets (including paid/organic impression breakdowns) that use Page impressions and Post impressions will instead use Media views (Profile-level) and Media views (Post-level) metric data. The impressions naming will remain in Emplifi metrics for compatibility with other social media platforms.

While similar, Views and Impressions are not exactly the same. For an overview of how this affects your analyses, see How to Approach Instagram and Facebook Views and Impressions Data.

**Locale Data is Not Available for Page Follows**

Page fans locale (Followers by language in Emplifi): Currently, meta has decided not to include locale (language) data for the Page follows metric. They also have not provided an alternative metric.

Followers by language in Emplifi for the Facebook People insights board and Facebook Global people insights board in Unified Analytics will be removed 90 days after the deprecation goes into effect.

**Integration of Primary Metrics**

As part of the integration of the following metrics, we will also download 2 years of historical data:
- Media views profile level (Page views in Facebook)
- Media views post level (Post views in Facebook)
- Page follows (metric offers also values for regional Facebook pages)
- Page follows city
- Page follows country

The new primary metrics will be introduced to Content, Unified Analytics, Dashboard, Community, and the Emplifi API.

Posts or profiles created after the deprecation should have the same counts for Media views and Total impressions. Posts or profiles created before the deprecation can potentially have different values for Media views and Total impressions.

Learn more: Facebook Metric Deprecation (November 2025)

**X (formerly Twitter) Metric Deprecation Announcement**

On September 30, 2025, the social media platform X deprecated the post-level Media views (insights_media_views) metric from their API endpoints. This means it is not possible for use to retrieve this data even though the metric still exists on their platform.

**Replacement Metrics**

X has not announced a replacement API endpoint for the metric. Widgets that use this metric will not receive new data from X. The metric itself is still available on X.

Historical data will be available for a limited time. After 90 days, Emplifi will delete this metric from X-specific widgets. Cross-platform widgets that use this metric will be unaffected, although data for X will be unavailable.

Learn more: Available Custom Metrics Definitions, Media views (post), Unified Analytics - Widgets Overview

---

### September 2025

#### September 17, 2025

**Listening**

**Manually Exclude Mentions from Query Results in Content**

When reviewing collected listening mentions in the Listening feed of the Content module, you can now manually remove specific mentions from the results, either a single mention (click the trash can icon on the mention tile) or multiple mentions at once (select the mentions and click Remove from query on the multi-action bar that appears on the bottom).

The removed mentions will disappear from the query results and will also be excluded from any analytics.

Learn more: Content

**X (formerly Twitter) Metric Deprecation Announcement**

On September 30, 2025, the social media platform X will deprecate the post-level Media views (insights_media_views) metric from their platform.

X has not announced a replacement metric. After September 30, 2025, widgets that use this metric will not receive new data from X.

Historical data will be available for a limited time. After 90 days, Emplifi will delete this metric from X-specific widgets. Cross-platform widgets that use this metric will be unaffected, although data for X will be unavailable.

Learn more: Available Custom Metrics Definitions, Media views (post), Unified Analytics - Widgets Overview

**Bot**

**Changes to Settings and Default Behaviors, and Removal of Unsupported Legacy Channels**

This release includes:

**Changes to Settings**

We released a new "in-authoring" Settings menu. The new menu is located in the taskbar at the top of the screen. The new menu provides access to a Settings interface for each bot from within the Authoring interface, allowing you to better utilize the recent visual improvements and to make changes in Settings without leaving the Authoring interface. Some unused legacy settings were removed, and a few tooltips and instructional texts for various optional settings were updated. The legacy Settings menu was removed from the main Bot "Overview" page. In one of the subsequent releases, we are planning to update the main Bot "Overview" page for a better user experience.

**Removal of Twilio WhatsApp**

Twilio WhatsApp is no longer available as a channel. You can still use WhatsApp Business as a Bot channel because WhatsApp Business is directly integrated into the Emplifi platform (see Add an Owned Profile for Your WhatsApp Business Account).

**Updated conversation annotations for escalation queues**

The conversation annotations that are available at escalation to a human agent were updated with additional events to clarify when an escalation has been accepted, declined, or timed out by the agent. These updates provide more details for escalation and containment analytics.

**WhatsApp Business carousel conversion logic**

Because carousels are not available for Whatsapp Business in the same way as they are used in Facebook Messenger, Instagram direct messages, or Webchat due to Meta restrictions and guidelines regarding the use of media assets, we now detect when a carousel asset is used within a bot that is connected to a WhatsApp Business channel and automatically convert that carousel to an interactive message format that is supported on WhatsApp Business. The converted carousel is visually indistinguishable from a typical carousel. URL links are not supported as payloads for any buttons on the WhatsApp Business interactive message format.

**Changes to default behaviors**

We updates certain settings, enabling them by default instead of requiring user intervention to enable them. This includes a default timeframe for inserting conversation breaks and automatically enabling that setting in order to populate Containment analytics for any newly created bot.

Learn more: Emplifi Bot

#### September 3, 2025

**Publisher**

**Publish Facebook Stories**

With Publisher web, you can now schedule and publish stories for Facebook.

After you schedule or publish your post, you can find your post in the Calendar or any other feed in Publisher.

Due to Facebook API limitations, the following restrictions apply to stories within the Emplifi suite:
- You cannot see stories that were published natively (directly through the Facebook platform) in Publisher. Also, any changes that were natively made to the story do not appear within Publisher.
- Story mentions are not supported, and replies to stories are treated as direct messages without any reference to the story.

Learn more: Facebook Publishing, Schedule and Publish Facebook Stories, Content Types Historical Data and Update Frequency in Community, Direct Conversation and Direct Message

**Set Custom Thumbnail for TikTok Videos**

With Publisher web, you can now take a screenshot of a frame from your video and use that frame as the thumbnail for when you publish to TikTok.

Learn more: TikTok Publishing, Content Options in Publisher

**Settings**

**Make Connection More Reliable in Multiple Profiles at Once**

If you have a few owned profiles with an established connection (for example, "Publishing" or "Insights") and you want to connect as yet another user in order to make the connection stronger, you can now do so for all those profiles at once.

Learn more: Check and Establish Connections of Owned Profiles

**Bot**

**Library Homepage "Create" Prompts and Minor Visual Bugfixes**

This release includes:

**Restoring the homepage screen "Create" prompts**

We restored the dynamic home pages that appear when clicking on a folder within the library tree (Conversation Flows, Intents, Routing Rules, and so on), allowing users to easily view specific guidance resources and use the specific "Create" buttons for those items.

**Restoring the routing condition for Instagram story replies**

We restored the routing condition for Instagram story replies, allowing users to create specific rules for replies on Instagram stories (which are treated as direct messages by Instagram).

**Minor visual bugfixes**

We released fixes for a few minor issues involving the visual alignment of a minority of fields within the new routing conditions view.

Learn more: Emplifi Bot

---

## Announcements

### Facebook Metric Deprecation (January 2026)

The information on this page can change before or after the deprecation depending on the actions of Meta.

As per Meta's announcement, all paid and organic 10s video metrics and their variants for Facebook are deprecated effective January 26, 2026.

Meta's decision impacts all partners that rely on the affected APIs, including Emplifi and all our competitors.

**General Impact**

Meta will stop sending data for the affected metrics, and all places where the deprecated metrics are used in analytics will stop updating data for those metrics.

Profile level:
- page_video_views_10s
- page_video_views_10s_paid
- page_video_views_10s_organic
- page_video_views_10s_autoplayed
- page_video_views_10s_click_to_play
- page_video_views_10s_unique
- page_video_views_10s_repeat

Post level:
- post_video_views_10s
- post_video_views_10s_unique
- post_video_views_10s_autoplayed
- post_video_views_10s_clicked_to_play
- post_video_views_10s_organic
- post_video_views_10s_paid
- post_video_views_10s_sound_on

**Replacement metrics**

Meta has not announced replacements for the deprecated metrics.

**Post-deprecation summary**

Emplifi will retain historical data for the affected metrics for 90 days after the deprecation and then delete the metrics from the platform.

**Dashboard Widgets**

The following Dashboard widgets are affected by the January 26, 2026 metric deprecation:

Content widgets (displayed metrics for cards):
- 10–second views (Post-level)
- 10–second views - Click to Play (Post-level)
- 10–second views - Organic (Post-level)
- 10–second views - Paid (Post-level)
- 10–second views - Unique (Post-level)

**Unified Analytics Board and Widgets**

The following Unified Analytics boards and widgets are affected by the January 26, 2026 metric deprecation:

**Social Profiles**

Social profiles -> Facebook -> Owned profiles -> Video insights:
- 10-second video views by organic vs. paid trend (Profile-level)
- Average 10-second video views by auto-played vs. clicked to play (Profile-level)
- Maximum 10-second video views per day (Profile-level)
- Average 10-second video views (Profile-level)
- Minimum 10-second video views per day (Profile-level)
- Total 10-second video views (Profile-level)
- 10-second video views by organic vs. paid (Profile-level)
- Average 10-second video views by unique vs. repeat (Profile-level)
- 10-second views by unique vs. repeat trend (Profile-level)
- Total 10-second repeat video views (Profile-level)
- 10-second video views by auto-played vs. clicked to play trend (Profile-level)
- Total 10-second video views by auto-played vs. clicked to play (Profile-level)

**Content**

The following Content Feed insights are affected by the January 26, 2026 metric deprecation:

Feed (Sort by, Insights, Post details, Video reach & Views):
- 10s video views (Post-level)

Feed (Performance view):
- 10–second views (Post-level)
- 10–second views - Click to Play (Post-level)
- 10–second views - Organic (Post-level)
- 10–second views - Paid (Post-level)
- 10–second views - Unique (Post-level)

**Emplifi API**

The following metrics are affected by the January 26, 2026 metric deprecation:

Facebook posts:
- insights_video_views_10s
- insights_video_views_10s_by_play_type
- insights_video_views_10s_by_post_attribution
- insights_video_views_10s_by_sound
- insights_video_views_10s_unique

---

### Instagram Insights Metrics Deprecation (April 2025)

Update: As per the Meta's announcement, several Instagram insights metrics were deprecated on April 21, 2025. You can find more information in the Meta's changelog.

The good news is that we found a way how to mitigated the impact by remapping available data from other metrics into the existing analytics tool.

**Post-deprecation summary and next steps**

**Video Views (Post Level)**

New Definition: This metric now reflects media views at the post level, filtered for video content only.

Scope - what is included:
- Instagram posts with video media type
- Reels

What's Staying the Same: Historical data for video views has been preserved.

From April 21, 2025: This metric will be counted as media views filtered for videos.

Limitations:
- Instagram Carousels: Video views are not supported for carousel posts, even if a video is attached. This is due to platform limitations.
- Stories with video media type: As of January 8, 2025, the original metric for video views on carousels was deprecated. To ensure data consistency, we will clean the database and mark video views as N/A for all carousels created after January 8, 2025.

**Video Views (Profile Level)**

New Definition: The total number of times Instagram video content (reels) was played or displayed to a user.

New Emplifi metric, previously didn't exist for Instagram.

From June 6, 2025: Data will be available from June 6, 2025.

Historical Data: Will not be available due to API limitations.

**Impressions (Post Level)**

Definition: Equivalent to media views at the post level.

Historical Data: Preserved and unchanged.

From April 21, 2025: Will be tracked as media views at the post level.

**Impressions (Profile Level)**

Definition: Equivalent to media views at the profile level.

Historical Data: Preserved and unchanged.

From April 21, 2025: Will be counted as media views at the profile level.

If the impressions values are not available from before April 21, 2025 (whether due to a bug or because a profile was connected to suite recently (after the deprecation)), we can manually rebuild older impressions (from before April 21) with media views. However:
- We cannot retrieve original impressions from API in such a case because the field has been deprecated and Meta no longer provides it.
- We also do not have the original impressions values saved in our database due to the fact that the profile was connected to Emplifi after the deprecation.

**Media Views (Post Level)**

Definition: This is the primary post-level metric for views on Instagram.

Historical Data: Has been downloaded and is available starting from approximately July 2024.

**Media Views (Profile Level)**

Definition: This is the primary profile-level metric for views on Instagram.

Historical Data: Has been downloaded, but availability varies by profile:
- Some profiles started in August 2024
- Others became available during the autumn months
- A few may be available even later

**Usage tips**

For cross-platform comparison reporting use-case, we recommend that you use impressions and video views.

For single platform (Instagram only) reporting use-case, we recommend that you switch to media views.

**Overview**

Meta's decisions impacts all Meta's partners who rely on Meta's APIs, including Emplifi and all our competitors.

The following Meta metrics will be impacted:

**Profile level**
- impressions - This Meta metric will be replaced by views mapped into impressions.
- profile impressions rolling window (specific breakdown of data 1/7/28 days from the impression metric provided by Meta) - This specific aggregated breakdown will be deprecated with no replacement

**Post level**
- plays - This metric (in Emplifi represented as initial video views) will be deprecated.
- clips_replays_count - Zero impact - we are not using this metric in Emplifi products.
- ig_reels_aggregated_all_plays_count - This metric (in Emplifi represented as video views for reels) will be replaced by views mapped into video views.
- impressions - This metric will be replaced by views mapped into impressions.

**Historical data**
- initial video views and profile impressions by 1/7/28 days charts/metrics will be deprecated without replacement. We will keep these metrics/charts in emplifi for 3 more months - in order to allow users download/export historical data. After 3 months we will remove those charts/metrics completely.
- Historical data for impressions and video views metrics/charts will be kept until the deprecation date - April 21, 2025. After that, data from views will be mapped into impressions and video views. We will start using the views metric on the day of deprecation - therefore this metrics will not match the data shown by the native metric on Instagram (discrepancy will be introduced). Use media views to see the exact data as represented in native version of views.

**Media views metric**

Instagram started to provide the views metric on both the post and the profile level. We plan to integrate it as Media views within Emplifi analytics products as a part of our Instagram metric deprecation efforts.

Media views metric plans:
- Primary metric for Instagram views integration (currently exists in Content hub and Dashboard for Snapchat and X (post level)).
- Integration of Instagram views (post level) into existing Media views post level across all analytics products (Dashboard, Content hub, Unified Analytics, Custom metrics, Emplifi public API).
- Integrate Instagram views (profile level) into new Media views profile level metric across all analytics products (Dashboard, Unified Analytics, Emplifi public API).
- We will download all historical data available in API to ensure Media views in Emplifi match views in native API as close as possible. Based on our investigation, it seems that historical data for new Views (profile level) metric in Instagram API are starting August 20, 2024 onward. Once the metric is implemented, we will run rebuilds to ensure we provide all data that is provided via Instagram API.

For more information, see Instagram Media views.

**Impact**

Deprecation of the metrics listed above will impact all analytical features of the Emplifi platform.

**Unified Analytics**

The following Unified Analytics widgets or sections of a board are impacted:

**Profile level**
- Social profiles -> Instagram -> Profiles summary: Instagram profiles overview - Impressions column will be affected because the underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Instagram -> Overview: Profile impressions - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Profile impressions trend by rolling window - Entire board section (all 3 rolling window metrics) will be deprecated without replacement.
- Social profiles -> Instagram -> Time comparison: Profile impressions trend by rolling window - Entire board section (all 3 rolling window metrics) will be deprecated without replacement.
- Social profiles -> Instagram -> Profile vs. profile: Profile impressions trend by rolling window - Entire board section (all 3 rolling window metrics) will be deprecated without replacement.

**Post level**
- Social profiles -> Cross-platform -> Overview: Number of impressions - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions by platform - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions trend - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Cross-platform -> Overview -> Time comparison: Number of impressions - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions by platform - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions trend - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Cross-platform -> Overview -> Profile vs. profile: Number of impressions - partial impact (2 widgets - p.1 and p.2). Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions trend - partial impact (2 widgets - p.1 and p.2). Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Average impressions - partial impact (2 widgets - p.1 and p.2). Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Cross-platform -> Overview -> Multicomparison: Number of impressions - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Cross-platform -> Content performance: Top content by interactions - partial impact. Impression metric: Values for IG platform for each post will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Instagram -> Overview: Impressions - Entire board section (3 widgets) will be affected as the underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Instagram -> Overview -> Time comparison: Number of impressions - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions trend - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions per media type - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Instagram -> Overview -> Profile vs. profile: Number of impressions - (2 widgets - p.1 and p.2) - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions trend - (2 widgets - p.1 and p.2) - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Average impressions - (2 widgets - p.1 and p.2) - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Instagram -> Overview -> Multicomparison: Number of impressions - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Social profiles -> Instagram -> Content performance: Top content by interactions - Impression metric for each post will be deprecated. Solution: Will be replaced by Views mapped into impressions. Video views by type - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into video views. Video views trend - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into video views.
- Social profiles -> Instagram -> Story engagement: Number of story impressions - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Story impressions by media type - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Story impressions by media type trend - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Top stories by engagement - Impression metric for each post will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Campaigns & labels -> Cross-platform overview: Video views - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into video views. Number of impressions - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions by platform - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions by platform trend - partial impact. Values for IG platform will be deprecated. Solution: Will be replaced by Views mapped into impressions.
- Campaigns & labels -> Instagram: Video views - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into video views. Number of impressions - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Impressions by media type - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into impressions. Video views trend - Underlying metric will be deprecated. Solution: Will be replaced by Views mapped into video views.

**Dashboard**

**Profile level widgets**
- Impressions will be replaced by Views (profile level) mapped into impressions.

**Post level widgets**
- Video views will be replaced by Views mapped into video views.
- Content impressions will be replaced by Views mapped into impressions.

**Content**

Displayed metrics for cards:
- video.viewCount -> Video view count will be replaced by Views mapped into Video Views (in front end represented by Video view count).
- insights.videoViewsOrganic -> Views - Organic will be replaced by Views mapped into Video Views (in front end represented by Views-Organic).
- insights.impressions -> Total impressions will be replaced by Views mapped into impressions (In front end represented by Total Impressions).
- insights.impressionsByPaidNonPaid.unpaid -> Organic impressions will be replaced by Views mapped into impressions (in front end represented by Organic Impressions).

Also impacted are Custom metrics that can be added for each post. See the deprecated Custom Metrics section below.

**Content hub**

**Profile level**
- N/A for Content hub

**Post level**

Feed:
- Initial video views - Will be deprecated (no replacement).
- Video views - Will be replaced by Views mapped into Video Views.
- Organic video views - Will be replaced by Views mapped into Video Views (in front end represented by Organic video views).
- Impressions - Will be replaced by Views mapped into impressions.
- Organic impressions - Will be replaced by Views mapped into impressions (in front end represented by Organic impressions).

Feed Post Detail - Post Insights (only shown for Reels):
- Impressions - Will be replaced by Views mapped into impressions.
- Video Views -> Organic - Will be replaced by Views mapped into Video Views (in front end represented by organic).

Feed Post Detail - Custom Metrics: See the Custom Metrics section

Table View:
- Initial video views - Will be deprecated (no replacement).
- Video view count - Will be replaced by Views mapped into Video Views (in front end represented by Video view count).
- Views - organic - Will be replaced by Views mapped into Video Views (in front end represented by Views-organic).
- Total impressions - Will be replaced by Views mapped into impressions (in front end represented by total impression).
- Organic impressions - Will be replaced by Views mapped into impressions (in front end represented by Organic impressions).

**Public API**

**Profile level**

V1 → Profile Metrics → Instagram Metrics:
- insights_profile_impressions_by_day will be replaced by Views (profile level) mapped into impressions.

>= V2 → Profile Metrics → Instagram Metrics:
- insights_impressions will be replaced by Views (profile level) mapped into impressions.
- insights_impressions_7_days will be deprecated (no replacement).
- insights_impressions_28_days will be deprecated (no replacement).

**Post level**

Aggregated post metrics:
- insights_video_views >= V1 will be replaced by Views mapped into video views.
- insights_impressions >= V1 will be replaced by Views mapped into impressions.
- insights_initial_video_views >= V3 will be deprecated (no replacement).

Posts → Instagram posts:
- insights_video_views >= V1 will be replaced by Views mapped into video views.
- insights_impressions >= V1 will be replaced by Views mapped into impressions.
- insights_initial_video_views >= V3 will be deprecated (no replacement).

**Custom metrics**

**Profile level**
- Custom metrics only supports post level metrics.

**Post level**

- plays → insights_initial_video_views will be deprecated (no replacement)
- ig_reels_aggregated_all_plays_count (mapped as video_views) → insights_video_views will be replaced by Views mapped into video views; insights_impressions_or_video_views will be replaced by Views mapped into video views
- impressions → insights_impressions will be replaced by Views mapped into impressions; insights_impressions_or_video_views will be replaced by Views mapped into impressions
