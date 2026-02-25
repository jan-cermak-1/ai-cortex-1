# Community

The Community module allows you to engage with your followers and manage your interactions across multiple social profiles.

Review the Emplifi Learning video and then explore Community options in greater detail.

[https://vimeo.com/767396720/074dbe55e6?share=copy](https://vimeo.com/767396720/074dbe55e6?share=copy)

## Get Started with Community

Community is your central hub for organizing your accounts' feeds and interacting with your users or customers directly from the Emplifi environment.

Community offers a wide range of customization options that you can configure to suit your product lineup, social media presence, regional and language reach, severity, and so on. For more information, see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox) and [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds).

Community comes with its own analytics that provides comprehensive data on agent-customer interaction. It comes with ready-to-use dashboard templates and a set of metrics in customizable widgets. For more information, see [Analyze Performance of Your Community Operations](https://docs.emplifi.io/platform/latest/home/measure-the-response-time-of-your-community-team).

Community seamlessly integrates with Care, which allows you to escalate Community content to Care cases where they can be handled by your specialized agents. For more information, see [Escalate a Community Message to Care](https://docs.emplifi.io/platform/latest/home/escalate-a-case-to-care).

You can integrate Community with your Salesforce environment and take on the individual cases from your own support environment. For more information, see [Integrate Community and Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-community-and-salesforce).

### Prerequisites

Before you start, ensure that the following prerequisites are met:

- Your accounts on social media platforms and review platforms are added to your Emplifi account as owned profiles. To learn more, see [Add a Profile as Owned (Private) or Public](https://docs.emplifi.io/platform/latest/home/add-a-profile-as-owned-or-public).
- You enabled Community management on the owned profiles, and set up the account roles and profile roles for Community users. To learn more, see [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles).
- You set up visibility of profiles to make sure that Community users can see and use the profiles in Community. To learn more, see [Set Up Visibility of a Profile](https://docs.emplifi.io/platform/latest/home/set-up-visibility-of-a-profile).

### Get started with Community

To get the most from your work with Community, consider the following best practices:

- Set up filters in Community feeds (see [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds)).
- Set up answer templates (see [Set Up Answer Templates for Community](https://docs.emplifi.io/platform/latest/home/set-up-answer-templates-for-community-and-care)).
- To bring Community automation to a whole new level, contact your Emplifi Customer Success Manager and ask them to set up workflows for automatic analysis, labeling, and Care escalation.

## Content Types, Historical Data, and Update Frequency

Community supports the following platforms:

- Facebook
- Google Business
- Instagram
- LinkedIn (company pages only)
- TikTok
- WhatsApp
- X (formerly Twitter)
- YouTube

### Content types and historical data

**Supported content types** – Not all content types that are available on the supported platforms are supported in Community. Some content types are not supported in Community because they are available only natively on their respective platforms and cannot be accessed via API.

**Profiles to gather data from** – Community gathers data only from owned profiles that were activated for Community (for more information, see [Add a Profile as Owned (Private) or Public](https://docs.emplifi.io/platform/latest/home/add-a-profile-as-owned-or-public) and [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles)). Community does not gather data from owned profiles that were not activated for Community or from public profiles.

**Available historical data** – Collected data remains accessible in the Community feeds for 90 days.

Example: You can retrieve data about Instagram comments for up to 28 days back in the past via the Instagram API. When an Instagram account gets activated for Community (see [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles)), Community downloads 28 days of historical data about comments retrospectively. These 28 days of historical data will increase each day, for as long as the Instagram profile is monitored, until the 90-day cap is reached.

Historical availability of ad data for all the supported platforms is two years from the moment when an account was added to the Emplifi platform. This means that after you add an account to the Emplifi platform, you have two years of historical data available. After one year, you will see three years back.

**Keeping the historical data up-to-date** – Not all the available historical data in Community is kept up-to-date and gets synchronized with the respective native platforms.

Example: Community can store up to 90 days of historical data about comments on LinkedIn. However, when downloading the latest version of the historical data from LinkedIn, Community synchronizes the data only for the last 4 weeks. The historical data older than 4 weeks may not be up-to-date: if a LinkedIn user edits their 5-week old comment directly on LinkedIn, Community will not get this edit and will not update this comment in its database. The version of the comment that Community stores and will continue storing is the last one that was obtained from LinkedIn (that is, when the comment was 4 weeks old).

For information on how far in the past Community goes to synchronize and update the historical data, see "Updating the historical data in the Community feeds" further in this article.

#### Facebook

| Content type | Supported in Community? |
|-------------|-------------------------|
| Direct messages | yes[1] |
| Wall posts | yes |
| Posts with mentions or tags | yes[2] |
| Organic comments | yes |
| Standard ad comments (including comments under unpublished/dark posts), comments on boosted posts, remarketing ads, dynamic creative ads, placement asset customization ads, multi-language ads, and geo-location asset customized ads | yes |
| Content captured by listening queries[3] | yes[4] |
| Comments on posts inside of events | no |
| Stories with mentions | no |

[1] Except for forwarded Facebook video posts and reels – When a direct message is a forwarded Facebook reel or a video post, the forwarded media content may not be properly displayed in Community due to Meta API limitations.

[2] Only the posts that are published under the profile's Facebook page with a mention/tag in the text of the post

[3] Except for comments collected from public (not owned) Facebook profiles (see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data))

[4] Only by the queries that are enabled for Community (see [Listening - General Guide](https://docs.emplifi.io/platform/latest/home/listening-general-guide)). For information about the content types that listening queries collect from Facebook, see [Listening Data Sources and Covered Content](https://docs.emplifi.io/platform/latest/home/listening-data-sources-available-coverage) and [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

#### Google Business

| Content type | Supported in Community? |
|-------------|-------------------------|
| Reviews[5] | yes |
| Review comments | yes |

[5] Except for attached images – The images attached to reviews are not downloaded to Community due to Google Business API limitations.

#### Instagram

| Content type | Supported in Community? |
|-------------|-------------------------|
| Direct messages | yes[6] |
| Posts/comments/stories with mentions | yes |
| Posts with media tags | yes |
| Comments | yes |
| Ad comments | yes |
| Content captured by listening queries | yes[7] |

[6] Except for forwarded Instagram video posts and reels – When a direct message is a forwarded Instagram reel or a video post, the forwarded media content may not be properly displayed in Community due to Meta API limitations.

[7] Only by the queries that are enabled for Community (see [Listening - General Guide](https://docs.emplifi.io/platform/latest/home/listening-general-guide)). For information about the content types that listening queries collect from Instagram, see [Listening Data Sources and Covered Content](https://docs.emplifi.io/platform/latest/home/listening-data-sources-available-coverage) and [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

#### LinkedIn

Community supports only company pages on LinkedIn. LinkedIn personal profiles are not supported in Community.

| Content type | Supported in Community? |
|-------------|-------------------------|
| Comments | yes |
| Direct messages | no |
| Posts/comments with mentions | no |
| Ad comments | no |

#### TikTok

| Content type | Supported in Community? |
|-------------|-------------------------|
| Comments and replies to comments[8] | yes[9] |
| Direct messages | no |
| Posts/comments/stories/captions with mentions | no |
| Ad-related content (such as ad posts, comments, replies to comments) | no |

[8] Including comments from both organic posts and promoted posts (posts that were originally published as organic and then were boosted as an ad). Due to TikTok API limitations, Community cannot determine whether a comment is associated with the period when the post was organic or with the period when the post was being boosted. Therefore, all comments are marked as organic (that is, the message type of all the comments is specified as "Comment").

[9] Except for attached images – The images attached to comments and replies to comments are not downloaded to Community due to TikTok API limitations.

#### WhatsApp

| Content type | Supported in Community? |
|-------------|-------------------------|
| Direct messages (individual chats) | yes |
| Group chats | no |
| Communities | no |

#### X (formerly Twitter)

| Content type | Supported in Community? |
|-------------|-------------------------|
| Direct messages | yes |
| Posts/replies with mentions | yes[10] |
| Reposts with comments (formerly "quote tweets") | yes |
| Replies | yes |
| Content captured by listening queries | yes[11] |
| Ad comments | no |

[10] Only when a mention is within the first 280 characters of the post/reply. If the post/reply is longer than 280 characters and a mention appears after the first 280 characters, this post/reply is not downloaded to Community due to X API limitations.

[11] Only by the queries that are enabled for Community (see [Listening - General Guide](https://docs.emplifi.io/platform/latest/home/listening-general-guide)). For information about the content types that listening queries collect from X, see [Listening Data Sources and Covered Content](https://docs.emplifi.io/platform/latest/home/listening-data-sources-available-coverage) and [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

#### YouTube

| Content type | Supported in Community? |
|-------------|-------------------------|
| Comments on videos (including shorts) and channels | yes |
| Comments on live streams (both streams that are currently live and streams that ended) | no |
| Direct messages | no[12] |
| Posts and comments on YouTube Community | no[12] |
| Video titles/descriptions with mentions | no[12] |
| Ad-related content (such as ad posts, comments, replies to comments) | no[12] |
| Content captured by listening queries | no |

[12] Posts and comments on YouTube Community, direct messages, video titles/descriptions with mentions, and ad-related content are not supported in Emplifi Community because on YouTube they are available only natively and cannot be accessed via the YouTube API. Therefore, Emplifi or any other third-party provider cannot provide this functionality.

### Updating the historical data in the Community feeds

Community regularly accesses the platforms to obtain the latest version of the data and to update the historical data stored in Community accordingly.

**How often Community updates the historical data** – The frequency of updating the stored historical data depends on the platform and the type of the content. It may also differ for periods when you have Community open in your browser and when you do not.

Downloading content from various platforms is a complex process. Consider the information about the data update frequency an ideal case scenario when there are no issues such as missing tokens, rate limits, infrastructure issues, high loads on databases, or other disruptions.

**What historical data gets updated** – Community does not update all the available historical data. What portion of the available historical data is synchronized with the respective platforms (in other words, how far back in the past Community goes to download the latest data) varies for different platforms and types of the content.

For each individual piece of the stored content, Community keeps regularly querying the content's native platform to obtain the most recent version of the content. Community will be doing it for a certain period of time only. How long this period is depends on the platform itself and the type of the content (it may be minutes on one platform and days on the other). Once this period has passed, Community stops querying the platform for the latest version of the content. From that moment, Community is going to store the version of the content that was obtained last. No changes to this content will be captured past that point.

Unless specified otherwise, the date from which Community goes back in the past is "today".

Example: Community can store up to 90 days of historical data about comments on LinkedIn but synchronizes only the data that is up to 4 weeks old. The historical data older than 4 weeks may not be up-to-date: if a LinkedIn user edits their 5-week old comment directly on LinkedIn, Community will not get this edit and will not update this comment in its database. The version of the comment that Community stores and will continue storing is the last one that was obtained from LinkedIn (that is, when the comment was 4 weeks old).

For information on for how long the data remains accessible in the Community feeds, see "Content types and historical data" earlier in this article.

#### Facebook update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| All incoming | < 1 minute | < 10 minutes | 14 days |
| Sent | < 1 minute | < 10 minutes | 14 days |
| Direct messages | < 1 minute | < 15 minutes | 15 minutes |
| Posts with mentions or tags | < 1 minute | < 60 minutes | 4 weeks |
| Dark posts | < 1 minute | < 10 minutes | 14 days |

#### Google Business update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| New reviews and comments | < 15 minutes[13] | < 15 minutes[13] | 30 days[14] |
| Existing reviews and comments | < 6 hours | < 6 hours | 30 days[14] |

[13] Obtaining the reviews may take longer (up to a few days in rare cases) due to Google moderation and anti-spam checks. While a review is being checked by Google, Community cannot download and display it.

[14] Back in the past from the time the reviews were posted. Community updates a review for 30 days after it was posted. Once the review is 30 days old, Community stops synchronizing it with Google Business. Reviews older than 30 days do not get updated. Community will be storing the last version of the review that was obtained from Google Business. The comments that you posted under reviews get updated only as long as Community updates the reviews that these comments belong to (regardless of when you posted the comments themselves).

Example: A Google Business user posted a review on September 1. You posted a comment to this review on September 3. Community will be updating the review for 30 days after it was posted - until October 1. If the author of the review edits the review directly on Google Business on October 2, Community will not get this edit and will not update this review in its database. Community will be keeping the version of the review that was obtained last (that is, on October 1). Community will be updating the comment for 30 days after the review was posted (not after the moment the comment itself was posted). Although the comment was posted on September 3, Community will be updating it until October 1.

#### Instagram update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| All incoming | < 1 minute | < 60 minutes | 7 days |
| Sent | < 1 minute | < 60 minutes | 7 days |
| Dark posts | < 1 minute | < 15 minutes | 7 days |

#### LinkedIn update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| All incoming | < 1 minute | < 60 minutes | 4 weeks |
| Sent | < 1 minute | < 60 minutes | 4 weeks |

#### TikTok update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| All incoming | < 15 minutes | < 12 hours | 60 days |
| Sent | < 15 minutes | < 12 hours | 60 days |

#### WhatsApp update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| Incoming messages | real-time | real-time | n/a[15] |
| Sent messages | real-time | real-time | n/a[15] |

[15] Downloading historical WhatsApp data is not available due to Meta API limitations.

#### X (formerly Twitter) update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| All incoming | < 5 seconds | < 15 seconds | lifetime |
| Sent | < 5 seconds | < 15 seconds | lifetime |
| Direct messages | < 5 seconds | < 60 minutes | 60 minutes |

#### YouTube update frequency

| Feed/content type | Updating interval while in Community | Updating interval while not in Community | Historical data downloaded to Community with each data update |
|------------------|-------------------------------------|------------------------------------------|---------------------------------------------------------------|
| All incoming | < 1 minute | < 6 hours | 90 days |
| Sent | < 1 minute | < 6 hours | 90 days |

## Activate Profiles for Community and Set Up Profile Roles

### Activate profiles for Community

Community gathers data only from owned profiles that were activated for Community. Community does not gather data from owned profiles that were not activated for Community or from public profiles.

The number of profiles (slots) to be activated for Community available to you depends on your Emplifi plan (see [Subscription Plan](https://docs.emplifi.io/platform/latest/home/subscription)). You can activate owned profiles on the following platforms for Community:

- Facebook
- Google Business
- Instagram
- LinkedIn (company pages only)
- TikTok
- WhatsApp
- X (formerly Twitter)
- YouTube

#### Activate one profile for Community

For you to be able to activate a profile for Community:

- The profile must have an active "Publishing" connection (see [Check and Establish Connections of Owned Profiles](https://docs.emplifi.io/platform/latest/home/check-and-establish-connections-of-owned-profiles)).
- You must be an Account Admin or have a custom account role with the "Manage Community moderation" permission under the Pages & Profiles section (see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

Steps:

1. Go to Settings -> Channels, and then:
   - For profiles connected to accounts on social media platforms (such as Facebook, Instagram, LinkedIn, and so on), click Social profiles.
   - For profiles connected to accounts on review platforms (such as Google Business), click Google businesses.
2. Click the profile that you want to activate.
3. Under Community Engagement, toggle the switch next to the Community Management option to ON. If the switch is disabled, check whether the profile has an active "Publishing" connection and that you are an Account Admin.

The profile is activated for Community. Community now starts gathering the content.

You can deactivate a profile at any point. To do so, toggle the switch next to the Community Management option to OFF, and confirm the deactivation. Once the profile is deactivated, Community stops gathering its content.

#### Activate multiple profiles for Community

For you to be able to activate profiles for Community:

- The profiles must have an active "Publishing" connection (see [Check and Establish Connections of Owned Profiles](https://docs.emplifi.io/platform/latest/home/check-and-establish-connections-of-owned-profiles)).
- You must be an Account Admin or have a custom account role with the "Manage Community moderation" permission under the Pages & Profiles section (see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

Activating multiple profiles at once is supported only for profiles connected to accounts on social media platforms (such as Facebook, Instagram, LinkedIn, and so on). Activating multiple profiles connected to accounts on review platforms (such as Google Business) is not available.

Steps:

1. Go to Settings -> Channels -> Social profiles.
2. Click Filter on the top right.
3. The filter panel opens.
4. Select the following filtering criteria:
   - Under Connection status, select Connected.
   - Under Connection type, select Publishing.
   - Under Community connection status, select Disabled.
   - Select any other criteria that are relevant to your use case. For example, you may want to select specific social media platforms or user groups.
5. Click Filter profiles. The profiles that meet the filter criteria are listed.
6. In the list of profiles, select those that you want to activate for Community.
7. Click Connections on the bar with action buttons that appears at the bottom of the page, then click Community moderation and select Activate.
8. If some of the selected profiles cannot be activated for Community (for example, because they are already activated or because Community does not support the social media platform), a message with details appears. Review the profiles that cannot be activated, and click Activate (n) where n is the number of profiles that will be activated.
9. If all selected profiles are eligible for Community activation, the profiles are activated for Community.

You can deactivate profiles at any point. To do so, click Connections -> Community moderation -> Deactivate, and confirm the deactivation. Once the profiles are deactivated, Community stops gathering their content.

### Set up profile roles for Community

For a user to be able to reply to a Community message (see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message)), their profile role for the profile on whose behalf they want to reply must have the "Create, Publish" or "Create, Publish, Approve" level of access in Community. In other words, for the profile on whose behalf they want to reply to the message, they must be assigned a default or custom profile role with the "Create, Publish" or "Create, Publish, Approve" level permission set under "Community".

Therefore, make sure that all the users that will be working in Community have the profile roles with the "Create, Publish" or "Create, Publish, Approve" level permission.

For more information about profile roles in general, see [Profile Roles](https://docs.emplifi.io/platform/latest/home/profile-roles).

#### Find out what profile role a user have

A user in the Emplifi account has a profile role defined for each profile that is assigned to them. Depending on business requirements and the user's tasks in the account, the user can have the same profile role set for all the profiles assigned to them or can have different roles for different profiles.

To be able to find out what profile role a user has, you must be an Account User or Account Admin (see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

Steps:

1. Go to Settings -> Users.
2. Find and click the user.
3. Click the Profiles tab. The profile role is displayed in the dropdown next to each profile assigned to the user.

#### Review the profile role's permissions for Community

Once you know the profile role, find out what level of access and other permissions in Community this profile role has.

To be able to review the profile role, you must be an Account Admin (see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

Steps:

1. Go to Settings -> Roles & permissions.
2. Click the Profile roles tab.
3. Click the profile role that you want to review. The role permission panel slides out.
4. Review the permissions the profile role has for Community.
5. The profile role must have the "Create, Publish" or "Create, Publish, Approve" level of access in Community. If the profile role has a different level of access, see "Set up a profile role for Community" further in this article.
6. The other permissions determine how you can react to a Community message (like, hide, delete, and so on; see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message)).
7. Once done reviewing, click Cancel to close the panel.

#### Set up a profile role for Community

If the profile role that a user has assigned for a certain profile has a different level of access in Community than "Create, Publish" or "Create, Publish, Approve", the user cannot reply to Community messages on behalf of that profile.

To enable the user to reply, do the following:

1. Create a custom profile role with the level of access to Community set to "Create, Publish" or "Create, Publish, Approve".
2. Assign this profile role to the user for each profile on whose behalf they want to reply to Community messages.

To be able to create and assign profile roles, you must be an Account Admin (see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

**Create a custom profile role with the "Create, Publish" or "Create, Publish, Approve" access level**

Choose from the following options:

**Create a new profile role from scratch**

Steps:

1. Go to Settings -> Roles & permissions.
2. Click the Profile roles tab.
3. Click +Add Profile Role.
4. The role permission panel slides out.
5. Click the pencil icon next to the placeholder role name, rename the role, and press Enter.
6. In the Community section, set the level of access to either "Create, Publish" or "Create, Publish, Approve".
7. Select the other permissions that the profile role should have.
8. Once done, click Save. The role is created and appears in the list of the profile roles. The new role is immediately available for assigning to users in the account.

**Create a new profile role by duplicating an existing profile role**

Steps:

1. Go to Settings -> Roles & permissions.
2. Click the Profile roles tab.
3. Hover over the profile role that you want to duplicate, and click Duplicate.
4. The new role gets the same name as the original profile role plus the `- copy` suffix. For example, if you duplicated the profile role "Content Creator (Does Not Need Approval)", the new profile role will be titled "Content Creator (Does Not Need Approval) - copy".
5. Click the newly created role. The role permission panel slides out.
6. Click the pencil icon next to the placeholder role name, rename the role, and press Enter.
7. In the Community section, set the level of access to either "Create, Publish" or "Create, Publish, Approve".
8. Select and de-select the permissions to define the scope of permissions that the new profile role should have.
9. Once done, click Save. The role is saved with the defined permissions. The new role is immediately available for assigning to users in the account.

**Assign the new profile role to the user**

After you create the profile role, assign it to the user for each profile on whose behalf they want to reply to Community messages. This enables the user to reply to Community messages on behalf of this profile.

Steps:

1. Go to Settings -> Users.
2. Find and click the user.
3. Click the Profiles tab.
4. Find the profile on whose behalf the user wants to reply to Community messages.
5. In the drop down menu in the Profile role column, select the profile role that has the "Create, Publish" or "Create, Publish, Approve" level of access.
6. The change is applied and automatically saved. The user now can reply to Community messages on behalf of the profile.
7. Repeat Steps 4-5 for each profile on whose behalf the user wants to reply to Community messages.

## Community Inbox

Community Inbox organizes your account feeds into a neat folder-like structure that you can customize to boost your social media interactions with your fans and customers.

### Glossary

**Community Manager** – A user of the Emplifi platform who interacts with your followers in the Community feeds.

**Follower** – A user of the page or profile that the Community Manager deals with on the Emplifi platform. In other words, it can be your user, your customer, or your fan.

### Prerequisites

For more information, see [Get Started with Community](https://docs.emplifi.io/platform/latest/home/get-started-with-community).

### Feeds

A feed is a preset or custom entity that lists Community message based on certain criteria. These criteria are sometimes static (Incoming, Sent), sometimes dynamically depending on how you, a Community Manager, set up and combined the filters (for information, see [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds)).

#### Preset feeds

- **All Incoming** – All the incoming messages for any kind of message type.
- **Assigned to you** – All the incoming messages that have been assigned to you.
- **Mentioned you** – All the incoming messages where you mentioned in the chat (internal notes).
- **For approval** – All the outgoing messages that are waiting for the Community Manager's approval to be published.
- **Sent** – All the outgoing messages that have already been successfully published, including the "outgoing" posts of the profiles.
- **Publishing problems** – All the outgoing messages that cannot be published due to some platform problem and possible solutions.

#### Custom feeds

You can set up custom feeds as global, for your entire Emplifi account, or as private feeds visible only to you.

A custom feed is essentially a specific configuration of filters that you can easily save as a feed (see "Save a filter as a feed" in [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds)).

**Global feeds** – A custom feed visible to the entire account and editable only by enabled Community Managers.

**My feeds** – A custom feed is visible and editable only to the Community Manager who created it.

#### Managing feeds

Only authorized Community Managers can manage global feeds. To enable a Community Manager to manage global feeds, add the appropriate permission to their account role.

To check a user's account role, see "Find out what account role a user has" in [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles).

Steps:

1. Go to Settings -> Roles & permissions. The Account roles screen opens listing the existing account roles.
2. Find and click the account role that you want to assign the Community feed privileges to. The role permission panel slides out.
3. Click Community & Publisher, and select the checkbox Create, Edit & Order global feeds.
4. Click Save. The role is saved with the defined permission. The changes in permissions take effect immediately.

To sum up, Community Managers can do the following:

- Create feeds.
- Name feeds.
- Edit feeds.
- Duplicate feeds.
- Delete feeds.
- Set feeds to private or global, if:
  - The Community Manager is authorized to create global feeds (has the "Create, Edit & Order global feeds" permission granted as described above), AND
  - The Community Manager (for private feeds) or the account (for global feeds) have not reached the quota limit (check the limitations section below).

#### Feed limitations

Maximum amount of custom feeds:

- Each Community Manager can save up to 15 private feeds (in "My feeds"). Once you reach the limit, you can no longer create a new feed until you delete another feed of the same type.
- Each account can have up to 30 global feeds. Only authorized Community Managers can manage global feeds.

#### Feed counter update

The counter is the number next to the feed name. It counts the number of messages according to the filter applied to the feed and the global filters.

- The counter of the inactive feeds is automatically updated every 45-60s.
- The counter of the active feed is updated real-time.

### Global Inbox settings

Global settings are settings that apply on top of any feed or filter selection. For this reason, they cannot be saved as the setting of a custom feed.

These settings are stored by Community for each Community Manager. Each Community Manager can have a different set of the global settings based on which settings are applied.

The global settings overwrite feed filters.

#### Display done messages

The Show done messages toggle allows you to display or hide all the messages whose status is set to `Done`. By default, the toggle is set to OFF (that is, the messages marked as `Done` are hidden).

Because the Show done messages toggle is a global setting, setting it to OFF hides the messages marked as `Done` in all Community feeds, both preset and custom, regardless of any filters by message status they may have.

If a feed is filtered by message status to show messages with the status of `Done` and the Show done messages toggle is set to OFF, the feed will not return any message. The Show done messages toggle set to hide `Done` messages overrides the feed-level filter set to show `Done` messages.

Based on the width of your browser window and the zoom level, the toggle may appear without the text description.

#### Select the date and time range

**Date selector**

As a Community Manager, use the date selector to limit the number of days included in the results.

You can select:

- **Static date range** – Select the start date and the end date to define the time period.
- **Running date range** – Select one of the presets to display a running date range that updates every day (for example, Last 7 days + today). The default Last 90 days corresponds to the maximum amount of data available in Community.

The date filters start at 00:00 and end at 23:59.

**Time selector**

The time selector allows you to specify the period within a day to narrow down the results further.

**How the date selector and time selector work together**

The period set in the time selector is applied to the continuous period specified in the date selector. The period is not applied to each individual day withing the date range.

- The time set in From of the time selector specifies the time on the date in Start date of the date selector.
- The time set in To of the time selector specifies the time on the date in End date of the date selector.

Example: Imagine the following setup:

- Your date range is set from September 15, 2025, to September 30, 2025.
- Your time range is set from 10.00 to 19.00.
- The final period for which the messages should be shown is from 10.00 on September 15, 2025, till 19.00 on September 30, 2025.

**How direct messages are filtered**

For direct messages, the results are presented not as individual messages but as whole conversations where at least one direct message falls within the selected time range.

Therefore, you may also see messages that do not match the selected time range, but they still appear in the results because they belong to a conversation where some other message falls within the time range.

#### Sort by criteria

By default, the messages are sorted by date ascending. In other words, it shows the oldest first.

You can change it and sort by:

- Date
- Priority
- Number of comments
- Number of followers (X (formerly Twitter) only)
- Engagement rate
- Number of likes

### Multi-selection and bulk operation

Multi-selection allows Community Managers to select multiple messages to apply bulk actions.

In any Feed, simply tick the checkbox with the message display counter.

Once checked, a bar will appear at the bottom of the Community Inbox with the bulk operation options.

Options:

- number of selected items – Only 50 results are loaded by default. Click Select all n to select all messages in the selected feed. You can deselect specific messages manually by unchecking the box in the message's body.
- select the sentiment
- apply labels
- assign the messages to specific community managers
- add internal notes
- change the status of the selected messages

**Result limitations**

Only the first 50 results are loaded and selected by default. When you scroll to the end of the loaded messages, the system loads 50 more results. Those messages will not be selected. Either select them manually or click Select all n.

This limitation is in place to avoid impacting the global performance of Community Inbox.

### Open the customer's page on the native platform

To see the customer's page on the native social media platform, click the customer's name in the message to open a side panel on the right. Then, click the customer's handle under their name on the panel to open the customer's page in a new browser tab.

Due to API limitations, links to the customer's page behind the handle are disabled for the following platforms:

- WhatsApp
- Google Business
- Facebook (users only; the links for pages are enabled)

### Message timestamp and timezone

A message has a timestamp showing when the post/comment was published or the direct message was sent.

Hover over it to see the full date, time, and the timezone. The displayed timezone is the timezone that you (as the user who is currently logged in to the Emplifi account) have set in Settings → Personal settings (see [Personal Locale Setting](https://docs.emplifi.io/platform/latest/home/personal-locale-setting)).

### Message details

To display details of a message, hover over the message, and click the details arrow that appears on the right.

Alternatively, click the ellipsis menu in the message, and click Open details.

If the arrow does not appear and the Open details menu option is hidden, it means that there are no details related to the message.

The details page and information it provides differ from message to message.

To open the customer's page on the native social media platform from the details page, click the customer's handle under their name.

Due to API limitations, links to the customer's page behind the handle are disabled for the following platforms:

- WhatsApp
- Google Business
- Facebook (users only; the links for pages are enabled)

### Parent post

For some types of Community messages such as comments, ad comments, and mention comments, a preview of the parent post appears next to a message.

Hover over the parent post preview to see the options to open the parent post on the native platform or to use the parent post as a filter (see further in this article).

Sometimes, the parent post preview is not available.

This may happen in the following cases:

- The parent post does not belong to any of your owned profiles. It was published by a public profile and was not downloaded to Community. For more information about owned and public profiles, see [Add a Profile as Owned (Private) or Public](https://docs.emplifi.io/platform/latest/home/add-a-profile-as-owned-or-public).
- You are not assigned to the profile that the parent post belongs to. For more information about assigning profiles to users, see [Set Up Visibility of a Profile](https://docs.emplifi.io/platform/latest/home/set-up-visibility-of-a-profile).
- The parent post contains an unsupported type of content (for example, a cover photo).

### Filter messages by specific posts

As a community manager, you may want to filter and display comments by a specific message or messages.

You can combine post-based filtering with any of the main filters. For more information, see [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds).

#### Filter by parent posts

The parent post filter is available in the preview field that appears next to parent posts in the feed.

To filter by one parent post only:

1. Hover the mouse over the parent post preview, next to a comment in the feed.
2. Click Use post as filter.

#### Use your posts as a filter

You can easily find and display incoming messages related to a specific post (or posts) that you published using your profiles.

For example, you want to display all messages that are related to the posts you ran as a part of a specific campaign.

Steps:

1. Go to your Sent feed.
2. Select one or most posts. A bar with a few options will appear at the bottom of your window.
3. Click Use posts as filter for All Incoming. The "All incoming" feed displays with the filtered messages.

### More resources

For all the other information about Community in general, consult the other articles about Community:

- [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds)
- [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles)
- [Content Types, Historical Data, and Update Frequency in Community](https://docs.emplifi.io/platform/latest/home/content-types-historical-data-update-frequency)
- [Understand the Actions and Buttons of a Community Message](https://docs.emplifi.io/platform/latest/home/actions-and-buttons-in-community-feeds)
- [Priority Score](https://docs.emplifi.io/platform/latest/home/priority-score)

### Community Inbox in Emplifi Learning

[https://vimeo.com/767396720/074dbe55e6?share=copy](https://vimeo.com/767396720/074dbe55e6?share=copy)

## How to Set Up Filters in Community Feeds

Filtering allows you to customize what you see depending on your unique use case. This way, you can work smarter and focus on the most important conversations first.

You can apply filters in the following ways:

- **Inclusive (positive filtering)** – Display all messages that meet the filter condition. For example, select `Esperanto` to display all messages written in Esperanto.
- **Excluding (negative filtering)** – Display all other messages except for those that meet the filter condition. For example, exclude `Esperanto` to display messages that are written in any language except for Esperanto.

### Define a filter

Filters in Community are very comprehensive and give you detailed control over what gets displayed and will be filtered out.

We recommend that you devise your filters carefully to avoid unexpected results.

Example: Let's create a filter over the "All incoming" feed in Community to display the following messages:

- Sent through Instagram and Facebook
- Of any media type excluding Status and Link
- Written in English
- Containing a negative sentiment

Steps:

1. In the General section of the filter panel, do the following:
   - Under Platform, select Facebook and Instagram.
   - Under Sentiment, select Negative sentiment.
2. In the Chatter, priority, media types… section:
   - Open the Media type dropdown, hover over Link and click the Exclude icon that appears. The Link option is crossed-out.
   - Repeat the same for Status, and click Apply.
   - Open the Language dropdown, select English, and click Apply.
3. Click Filter at the bottom of the filter panel. Community displays the messages to which your filter's conditions apply.

### Save a filter as a feed

To use a complex filter setup with multiple conditions repeatedly, you can simply save it as a filter feed.

Filter feeds can be private or global. You can save up to 30 global and 15 private feeds.

Even after you make a feed global, some users might not see the feed's full content. This is because profiles, labels and other filter elements in the saved feed keep their individual settings.

Steps:

1. Complete the filter setup's as described in "Define a filter" earlier in this article, but in the last step click Save as feed instead of Filter.
2. You are prompted to set up the properties of the feed.
3. Enter the name of the feed.
4. (Optional) Customize the color and the icon that the feed will be marked with in Community.
5. Decide whether to make the feed private or global.
6. Click Save. Your saved filter feed appears in the left feed column, either under Global feeds or My feeds depending on the visibility settings.

## Actions and Buttons in Community Feeds

A Community message offers a set of buttons and other UI elements that allow you to get information about the message and perform various operations on it.

Not all actions and buttons are available for all the content types that a Community message can contain and all the supported platforms.

### Header

The header appears on the top of the Community message and can contain the following elements:

(1) A checkbox that, when selected, opens the bar for performing an action on multiple Community messages at once (such as selecting a sentiment, adding labels, assigning a Community agent, and so on; for more information, see "Multi-selection and bulk operation" in [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox))

(2) The name of the user or page who commented or posted, together with the page icon – Hover over it to see the user/page ID. Click it to open a side panel on the right with brief information about the user/page and all the content this user/page posted (except for direct messages).

(3) The profile that received the comment or post – Hover over it to see the details of the account behind the profile.

(4) The timestamp when the post/comment was published or the direct message was sent – Hover over it to see the full date, time, and the timezone. Click it to open the post on the native platform (this is not supported for direct messages and Google Business reviews). The displayed timezone is the timezone that you (as the user who is currently logged in to the Emplifi account) have set in Settings → Personal settings (see [Personal Locale Setting](https://docs.emplifi.io/platform/latest/home/personal-locale-setting)).

(5) The type of the content (comment, mention, direct message, and so on)

(6) The priority that was automatically assigned to the Community message – Hover over it to see how the priority was decided on.

(7) The icon indicating that the Community message was escalated to Agent (see #10 in "Footer" further in this article) – Hover over it to see the Agent case ID and status. For more information about Agent, see [Emplifi Agent](https://agent-docs.emplifi.io/home/Production/).

(8) The icon indicating that the Community message was escalated to Salesforce (see #10 in "Footer" further in this article) – Hover over it to see the Salesforce case ID. For more information about Salesforce integration, see [Integrate Community and Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-community-and-salesforce).

(9) The icon indicating that the Community message was escalated to Care (see #10 in "Footer" further in this article) – Hover over it to see the Care case number and status. For more information about Care, see [Care](https://docs.emplifi.io/platform/latest/home/care).

(10) (Direct messages only) The icon indicating that the conversation in the Community message is handled by Bot (see [Emplifi Bot](https://docs.emplifi.io/platform/latest/home/emplifi-bot)).

(11) (Posts only) The average sentiment of the comments under the post (not to be confused with the sentiment of the post itself; see #5 in "Footer" further in this article) – The sentiment is recognized and assigned automatically by the Emplifi sentiment analysis solution. The sentiment can be positive, negative, or neutral. If the post has four or fewer comments with a detected sentiment, the sentiment is not determined, and the Community message with the post is marked as `No Sentiment`. For more information about sentiments, see [Using Sentiment Analysis to Understand Your Audience](https://docs.emplifi.io/platform/latest/home/use-sentiment-analysis-to-understand-your-audience). Hover over it to see the breakdown across positive, negative, and neutral comments.

(12) The icon indicating that the content was pinned on TikTok (see #10 in "Footer" further in this article)

(13) (Facebook, Instagram, and LinkedIn only) The icon indicating that the content was deleted from the native social media platform, either by a Community agent in Community (see #10 in "Footer" further in this article) or by a user on the native social media platform (see [Handle Deleted Content in a Community Message](https://docs.emplifi.io/platform/latest/home/handle-deleted-content-in-a-community-message)). No social interaction is available with this content on the native platform.

(14) (Facebook, Instagram, TikTok, X (formerly Twitter), and YouTube only) The icon indicating that the content was hidden on the native social media platform – If the content was hidden by a Community agent in Community (see #4 in "Footer" further in this article), you can un-hide it by clicking the hide/un-hide button. If the content was hidden from the native social media platform (by a platform user - if such option is available on the platform, or by the platform itself), you cannot un-hide it from Community. In this case, Community just shows you that the content is hidden, but the hiding operation itself was performed on the native platform, outside of Community. Social media platforms may automatically hide content for various reasons, for example: Platform algorithms consider the content inappropriate (for instance, profanity or hate speech) and hide it. Platform algorithms detect spammy-like behavior (for instance, posting the same comment multiple times or posting comments too fast) and hide the suspicious content. Other platform users reported the content, and the platform hides it until the platform personnel reviews it.

### Body

The body is where the content of the Community message is. For more information, see "Message details" in [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox).

### Footer

The footer appears on the bottom of the Community message and can contain the following elements:

(1) The profile on whose behalf you want to communicate with the customer and the content of the Community message (like, reply, and so on) – Hover over it to see the details of the account behind the profile. By default, the profile that received the comment or post is selected. You can change it to a different profile, if needed. The content that was gathered by listening queries has no profile associated, and you have to decide which profile to use to respond.

(2) Reply to or comment on the content – This option may not be available depending on the platform and their API limitations, the type or the age of the content, and so on. For example, you cannot reply to a mention in a Facebook post/comment if the author of the mention is not determined in Community. You can still reply to such mentions directly on Facebook. For more information about the replying options, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message).

(3) Like or unlike the content – This option is available for Facebook, LinkedIn, TikTok, and X (formerly Twitter). This option may not be available depending on the type of the content. For more information about the liking/unliking functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message).

(4) Hide or un-hide the content – This option is available for Facebook, Instagram, TikTok, X (formerly Twitter), and YouTube. The Community message with hidden content is marked as `Hidden` (see #14 in "Header" earlier in this article). This option may not be available depending on the type of the content. For more information about the hiding/un-hiding functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message).

(5) The sentiment of the content (for posts, not to be confused with the average sentiment of the comments under the post; see #11 in "Header" earlier in this article) – The sentiment can be positive, negative, neutral, or not assigned at all. The sentiment can be recognized and assigned automatically by the Emplifi sentiment analysis solution, or a Community user can assign the sentiment manually. When the sentiment is recognized automatically, the letter `A` is added to the sentiment icon. For more information about sentiments, see [Using Sentiment Analysis to Understand Your Audience](https://docs.emplifi.io/platform/latest/home/use-sentiment-analysis-to-understand-your-audience).

(6) Labels – The number on the icon shows how many labels were added to the Community message (for more information about labels, see [Set Up Labels](https://docs.emplifi.io/platform/latest/home/how-to-set-up-labels))

(7) Assigned users and user groups – The number on the icon shows how many users are currently assigned to the Community message. To see all the messages that are assigned to you, use the "Assigned to you" default feed (see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox)). You can also set up a notification to get informed when someone assigns you to a Community message (see [Get Notified about Relevant Actions in Community](https://docs.emplifi.io/platform/latest/home/get-notified-about-relevant-actions-in-community)).

(8) Internal notes – Add an internal note to the Community message with information about the message and/or tagging another Community user. Internal notes are visible only to Community users and not shared publicly. The number on the icon shows how many notes were added to the Community message. To see all the messages where other Community users tagged you, use the "Mentioned you" default feed (see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox)). You can also set up a notification to get informed when someone tags you in an internal note (see [Get Notified about Relevant Actions in Community](https://docs.emplifi.io/platform/latest/home/get-notified-about-relevant-actions-in-community)).

(9) The status of the Community message together with the status selector:

- **[No status]** (indicated by Mark as Done displayed on the button) – The message has no status assigned. This is the initial state of a message when it arrives to Community. Also, a Community message with a status of `Done` is automatically switched to `[No status]` if the customer posts a reply to the message.
- **In progress** – Set the status of the Community message to `In progress` when you start working on it and the communication has not yet been resolved.
- **No action** – Set the status of the Community message to `No action` when no action is needed for this message.
- **Done** – Set the status of the Community message to `Done` once the communication is over. You can also set the message to `Done` together with posting a reply. If the customer posts a reply to a Community message with a status of `Done`, the message is automatically switched to `[No status]`.

(10) Additional actions under the ellipsis menu (…) – Not all actions are available for all the content types and all the supported platforms:

- **Open details** – Opens a detailed view of the Community message with the expanded conversation (see "Message details" in [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox))
- **Customer info** – Opens a side panel on the right with brief information about the user/page who commented or posted and all the content this user/page posted (except for direct messages)
- **Activity log** – Opens a list of all the actions that were done to the Community message (labels added or removed, users assigned and unassigned, status changed, sentiment set, and so on)
- **View post/comment on Facebook/Instagram/YouTube/…** – Opens the message on the native social media platform
- **Reply with direct message** – Opens the reply box for sending a direct message (see #2 in "Footer" earlier in this article)
- **Create Salesforce case/lead** – Prompts you to choose a case or lead to create and then opens a side panel for creating a case or lead in Salesforce (see [Create a Salesforce Case or Lead from Community](https://docs.emplifi.io/platform/latest/home/create-a-salesforce-case-from-the-community-inbox)). Once a Salesforce case is opened, the Community message is marked with the icon indicating that the message was escalated to Salesforce (see #8 in "Header" earlier in this article).
- **Create Agent case** – Opens a side panel for creating a case in Agent (see [Emplifi Agent](https://agent-docs.emplifi.io/home/Production/)). Once an Agent case is opened, the Community message is marked with the icon indicating that the message was escalated to Agent (see #7 in "Header" earlier in this article).
- **Create Care case** – Opens a side panel for creating a case in Care (see [Escalate a Community Message to Care](https://docs.emplifi.io/platform/latest/home/escalate-a-case-to-care)). Once a Care case is opened, the Community message is marked with the icon indicating that the message was escalated to Care (see #9 in "Header" earlier in this article).
- **Share to publisher** – Redirects you to the Publisher module where you can publish the content to any profile (see [Publisher](https://docs.emplifi.io/platform/latest/home/publisher))
- **Delete** (Facebook, Instagram, and LinkedIn only; not supported for direct messages) – Deletes the content from the native social media platform (for more information about the deleting functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message)). The Community message with deleted content is marked as `Deleted` (see #13 in "Header" earlier in this article). No social interaction is available with this content on the native platform.
- **Block customer** – This option is available only for Facebook (public comments only) and YouTube. For more information about the blocking functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message). On Facebook, it blocks the customer and hides their comments. On YouTube, it hides comments and replies from the customer. The customer is not informed about hiding their content and can still see your content and can post replies to the hidden comment. However, the replies will not be visible on YouTube. While the blocking option is not available for the other social media platforms, you can use the Hide option (see #4 in "Footer" earlier in this article) on Instagram, TikTok, and X (formerly Twitter) as an option with somewhat similar functionality.
- **Pin on TikTok** – Pins the content on TikTok. For more information about the pinning/unpinning functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message). A Community message with pinned content is marked as `Pinned` (see #14 in "Header" earlier in this article).
- **Unpin from TikTok** – Unpins the content on TikTok and removes `Pinned` from the Community message (see #14 in "Header" earlier in this article). For more information about the pinning/unpinning functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message).
- (11) **Repost** – Repost the content on X (formerly Twitter) immediately or schedule the repost. For more information about the reposting functionality and its prerequisites and limitations, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message).

## Get Notified about Relevant Actions in Community

Get a notification when someone assigns you to a Community message or tags you in an internal note.

In general, you can receive notifications to your email connected to Emplifi (the one you use to log in) and directly in the Emplifi account (in-product notifications). If you miss an immediate in-product notification, you can find it in your notification center: click your name in the bottom left and then click Notifications.

We recommend that you keep at least one notification channel enabled. However, you can disable both in-product and email notifications, if needed.

Steps:

1. Go to Settings -> Notifications.
2. Scroll down to the Publisher & Community section.
3. For the Assigned Posts or Content and Mention in Internal Notes notifications, select and de-select the notifications to define which ones you want to receive.
4. Click Save. Your notification settings are saved.

## Set Up and Use Templates for Replying to Community

- [Set Up Answer Templates for Community](https://docs.emplifi.io/platform/latest/home/set-up-answer-templates-for-community-and-care)
- [Use WhatsApp Templates in Community](https://docs.emplifi.io/platform/latest/home/whatsapp-templates)

## Search within Community

Search allows you to quickly find specific messages that you or other Community users are or were working on.

To help you narrow down the results, the search only looks in the messages in the current feed. This allows you to search, for example, only within the messages that are assigned to you or the messages where you are mentioned.

The search takes into consideration the text of the message and the author's name.

When the logical operators are included in the search, the search takes into consideration only the text of the message and not the author's usernames. In other words, only the classic plain text search works with usernames.

Keywords are not case-sensitive. `sunglasses`, `SUNGLASSES`, and `Sunglasses` are treated as the same keyword.

Use the logical operators and special characters to expand or narrow down your search.

Logical operators must be entered in UPPERCASE.

- `AND` → conjunction – Enter `sunscreen AND spf` to search for the messages where both words "sunscreen" and "skin" appear.
- `OR` → disjunction – Enter `sunscreen OR spf` to search for the messages that: Contain the word "sunscreen" but do not contain the word "spf"; Contain the word "spf" but do not contain the word "sunscreen"; Contain both words "sunscreen" and "spf"
- `NOT` or `-` (dash) → negation – Enter `apple NOT macintosh` to search for the messages where the word "apple" appears except for the messages that contain both words "apple" and "macintosh".
- `"` `"` (quotation marks) → exact match – Enter `"vintage keyboard"` to search for the messages where the exact phrase "vintage keyboard" appears. The messages that contain both words "vintage" and "keyboard" but not in this exact order will not appear in the search results.
- `*` (asterisk) → any number of characters at the end of a search term – Enter `summer*` to search for the messages containing the words that start with "summer", such as "summer", "summervibes", "summertime", and similar.
- `(` `)` (parentheses) → search precedence – Use in combination with the other logical operators to specify in which order the search terms should be processed. The terms enclosed in parentheses are processed first.

If you enter `(white OR red) AND wine`, the search first locates all the messages that contain either the word "white" or the word "red". Then, it narrows down the results by searching through the located messages to find only those that also contain the word "wine".

If you enter `white OR (red AND wine)`, the search first locates all the messages that contain both words "red" and "wine". Then, it searches for the messages that contain the word "white". The search results will contain the results from both these searches.

You can combine the logical operators to create more complex search queries, for example:

`(((white OR red) AND wine) OR cheese) AND tast* AND "made in Italy" NOT "made in France"`

For more information about all the available filters that you can use to search through Community messages, see [Community Inbox Filters](https://docs.emplifi.io/platform/latest/home/community-inbox-filters).

## Respond to a Community Message

### Post a reply to a message

#### When you can and cannot post a reply

For you to be able to reply to a Community message, your profile role for the profile on whose behalf you want to reply must have the "Create, Publish" or "Create, Publish, Approve" level of access in Community. In other words, for the profile on whose behalf you want to reply to the message, you must be assigned a default or custom profile role with the "Create, Publish" or "Create, Publish, Approve" permission set under "Community" (see [Profile Roles](https://docs.emplifi.io/platform/latest/home/profile-roles) and [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles)).

The option to reply to a Community message may not be available depending on the platform and its API limitations, the type or the age of the content, and so on. For more information, see [Reply Options and Limitations in Community Messages](https://docs.emplifi.io/platform/latest/home/reply-options-and-limitations-in-community-message).

You do not have to be assigned to the message to be able to reply to it.

#### What you can post as a reply

When you reply to a message, your options are determined by the type of the message that you are responding to and the platform.

Depending on the type of the message and the platform, certain limitations may apply to your reply options. For more information, see [Reply Options and Limitations in Community Messages](https://docs.emplifi.io/platform/latest/home/reply-options-and-limitations-in-community-message).

When posting a reply to a thread of WhatsApp messages, you can choose a specific message in the thread to reply to.

#### Compose a reply manually

Steps:

1. In the message that you want to reply to, click Reply.
2. The text box opens.
3. Type a message in the text box. You can add an emoji or attach an asset (for example, a photo) to the message. You can also use answer templates to insert frequently used standard phrases such as `Hello! Thank you for your message. How can I help you today?` (see [Set Up Answer Templates for Community](https://docs.emplifi.io/platform/latest/home/set-up-answer-templates-for-community-and-care)).
4. When replying to a WhatsApp message, you can use one of WhatsApp templates (see [Use WhatsApp Templates in Community](https://docs.emplifi.io/platform/latest/home/whatsapp-templates)).
5. When composing the reply, check the maximum number of characters that you can use. For more information about the character number limitations of different platforms, see [Reply Options and Limitations in Community Messages](https://docs.emplifi.io/platform/latest/home/reply-options-and-limitations-in-community-message).
6. (Optional) Set the message to be marked as done after posting the reply.
7. Click Reply. The reply is posted to the Community message.

#### Compose a reply using the AI reply assistant

You can use the AI reply assistant, an artificial intelligence tool, to quickly write replies. The AI reply assistant helps you create a reply based on a text prompt and modify it per your instructions.

**AI reply assistant options**

The AI reply assistant offers the following options:

- Rephrase
- Make longer
- Make longer & add context
- Make shorter
- Simplify
- Change tone (Empathetic, Friendly, Persuasive, Professional)
- Translate to (The translation option is available only if you have the translation feature enabled in Community (see [Enable Translations in Community](https://docs.emplifi.io/platform/latest/home/enable-translations-in-community)) and if there is at least one language to which the reply can be translated from the language it is written in.)

To generate the first version of the reply, all the options except for "Make longer & add context" use the text prompt that you enter in the text box. The "Make longer & add context" option uses the text prompt that you enter in the text box as well as the messages in the conversation in the Community message.

When generating the second and all the subsequent versions of the reply, all the options also include the previous generated versions of the reply in the processing.

**Automatic language detection and supported languages**

The AI reply assistant can detect the language of the text that you submitted as a reply draft.

For the best results, we recommend that you use full diacritics of the particular language (accents, stress signs, umlauts, and so on). For example, when typing in French, type `hôtel` and `très` instead of `hotel` and `tres`.

If the AI reply assistant detected the language incorrectly, you can manually change it to the correct one.

The AI reply assistant supports the following languages: Arabic, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hungarian, Indonesian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Portuguese (BR), Romanian, Russian, Slovak, Slovenian, Spanish, Spanish (LATAM), Swedish, Turkish.

**Usage guidelines and policies**

Human moderation is necessary when using the AI reply assistant. The decision to use and/or modify the AI-generated content is yours.

The AI reply assistant is an artificial intelligence tool. While highly autonomous and constantly learning, some members of your audience may find its messages inappropriate and, ultimately, damaging to your brand.

You cannot use the AI reply assistant to generate the following types of content: Hate, Harassment, Violence, Self-harm, Sexual, Political, Spam, Deception, Malware.

If you prompt the AI reply assistant to generate such content, it may not generate content at all or generate content that you do not expect.

**Use the AI reply assistant to compose a reply**

Steps:

1. In the message that you want to reply to, click Reply.
2. The text box opens.
3. Type in a draft in the text box. It can be a few words or few sentences. You can add an emoji or attach an asset (for example, a photo) to the message. You can also use answer templates to insert frequently used standard phrases (see [Set Up Answer Templates for Community](https://docs.emplifi.io/platform/latest/home/set-up-answer-templates-for-community-and-care)).
4. Click the AI reply assistant icon, and select one of the available options.
5. The AI reply assistant generates the reply and opens it in a separate pop-up dialog. The AI reply assistant can detect the language of the text that you submitted as a reply draft.
6. If the AI reply assistant detected the language incorrectly, you can manually change it to the correct one.
7. If the AI reply assistant could not detect the language of the submitted text, it sets it to the language that you chose as preferred (see [Enable Translations in Community](https://docs.emplifi.io/platform/latest/home/enable-translations-in-community)), and you can change it manually, if needed. The language dropdown is available only if you have the translation feature enabled in Community.
8. To change the text, click Modify, and select one of the available options.
9. The AI reply assistant modifies the text accordingly.
10. Continue tweaking the text until it is up to your expectations. At any point, you can go to a previous version of the modified text or return to a later version. The pop-up dialog keeps up to 10 latest versions of the text.
11. To discard the current AI reply assistant results and start over from scratch, click Modify -> Discard. This will erase all the versions of the text, but will keep your initial text prompt in the text box.
12. Once you are satisfied with the text, click Insert reply. The text is inserted into the text box. The reply is not yet posted to the Community message. Check the maximum number of characters that you can use in the reply.
13. (Optional) Edit the text in the text box manually, if needed.
14. (Optional) Set the message to be marked as done after posting the reply.
15. Click Reply. The reply is posted to the Community message.

#### Edit a sent reply

Editing a sent reply is supported only for replies to Facebook comments and Google Business reviews.

**Edit a reply to a Facebook comment**

Steps:

1. Go to the Sent feed.
2. Find the reply, click the ellipsis menu, and click Edit reply.
3. The reply text opens for editing.
4. Edit the reply, and click Update reply. The reply is updated in Community and on the native platform (Facebook).

Editing a reply to a Facebook comment is disabled in the following cases: Your profile role for the profile on whose behalf the reply was initially posted has a different level of access in Community than "Create, Publish" or "Create, Publish, Approve"; The reply is part of a Care case; The reply was deleted from the native platform (Facebook); The reply was posted 90 or more days ago; The reply was not posted via Community; The reply contains a GIF file.

**Edit a reply to a Google Business review**

Steps:

1. Go to the Sent feed.
2. Find the reply, and click Edit reply.
3. The reply text opens for editing.
4. Edit the reply, and click Update reply. The reply is updated in Community and on the native platform (Google Business).

Editing a reply to a Google Business review is disabled in the following cases: Your profile role has a different level of access; The reply is part of a Care case; The reply was deleted from the native platform; The reply was posted 90 or more days ago.

#### Troubleshoot a failed reply

Sometimes, delivering a reply fails. This can happen for various reasons, for example, an issue with the Internet connection, an issue with a third-party API, the profile connection getting expired, the platform rejecting the reply, and so on.

In this case, your reply will not be delivered, and you will see an error message instead. To find out more about the error and why the reply delivery failed, check the Publishing problems feed.

For each failed reply, you can edit the reply and try re-sending it or you can delete it.

### Add an internal note to a message

Add an internal note to a message with information about the message or tagging another Community user. Internal notes are visible only to Community users and not shared with customers.

To see all the messages where other Community users tagged you, use the "Mentioned you" default feed (see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox)). You can also set up a notification to get informed when someone tags you in an internal note (see [Get Notified about Relevant Actions in Community](https://docs.emplifi.io/platform/latest/home/get-notified-about-relevant-actions-in-community)).

### React to the conversation in a message

You do not have to be assigned to a Community message to be able to react to the conversation in the message.

**Like a message** – Quickly react to a customer's message without compiling a text response. Supported platforms: Facebook, LinkedIn, TikTok, X (formerly Twitter). Profile role and permission needed: "Like/Favorite/+1" permission enabled under Community.

**Delete a message** – Delete unwanted user-generated content such as spam or sensitive information from the native platform. Supported platforms: Facebook (wall posts and comments only), Instagram (comments only), LinkedIn. Profile role and permission needed: "Delete" permission enabled under Community. Direct messages cannot be deleted.

**Hide a comment under a post** – Hide a comment under a post. When you hide a comment, it is no longer visible to any users on the native platform except for you (as the owner of the account) and the author of the message. Supported platforms: Facebook, Instagram, TikTok, X (formerly Twitter), YouTube. Profile role and permission needed: "Hide" permission enabled under Community. Things to be aware of: You cannot reply to hidden comments; You cannot hide direct messages; Hiding a comment on YouTube is permanent; A hidden comment on Instagram may still be accessible by its direct URL.

**Block a customer** – Block a customer who spams, frequently violates your brand's guidelines, or posts offensive content. Supported platforms: Facebook (public comments only), YouTube. Profile role and permission needed: "Block Users (Facebook, YouTube)" permission enabled under Community. Things to be aware of: You cannot unblock a blocked customer from Community. You have to do it on the native platform; Community does not indicate that a customer is blocked and allows for blocking the same customer more than once.

**Follow a customer** – Start following a customer on X (formerly Twitter). Following a customer allows them to send you direct messages. Supported platforms: X (formerly Twitter). Profile role and permission needed: "Follow (X)" permission enabled under Community. To unfollow a customer, click the ellipsis menu, then Customer info, and click Unfollow.

**Repost content** – Repost the content immediately or schedule the repost. Supported platforms: X (formerly Twitter). Profile role and permission needed: "Repost (X)" permission enabled under Community.

**Pin content** – Pin the content on TikTok. Supported platforms: TikTok. Profile role and permission needed: "Pin" permission enabled under Community.

## Handle Deleted Content in a Community Message

Deleted content may continue to show up in your Community feeds. This happens when your customer deletes their message on the native platform/platform of origin (such as Facebook or LinkedIn). Typically, there is no reliable tool to detect all the content that was deleted on the original platform.

However, when you try to respond to such content, the message will be marked as `Deleted` (see [Understand the Actions and Buttons of a Community Message](https://docs.emplifi.io/platform/latest/home/actions-and-buttons-in-community-feeds)).

## Escalate a Community Message to Care

To be able to escalate Community messages to Care, you must have the Care module enabled in your Emplifi account. If you do not have the Care module enabled, contact your Customer Success Manager at Emplifi.

For more information about the Care module, see [Care](https://docs.emplifi.io/platform/latest/home/care).

When your Community team or a bot cannot handle a message, they can escalate it to the Care module where your specialists can continue with the interaction without leaving the Emplifi platform.

### Escalate a Community message to Care manually

Steps:

1. In Community, click the ellipsis menu in the message that you want to escalate to Care, and click Create Care case.
2. The panel for escalating from Community to Care slides out.
3. Fill in the details for the message to escalate, and click Create case. The priority is by default set to `Medium`. You can change it, if needed. You can also change it later in Care, once the case is created there (see [Change the Priority of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-priority-of-a-care-case)). The fields reflect your setup of custom fields in Care. We encourage you to customize your case fields to allow your agents to fill more case details (see [Create Case Fields in Care](https://docs.emplifi.io/platform/latest/home/create-case-fields-in-care)). This will help you add the case to specific Care views to be picked up by the right agent. The message is escalated to a Care case. The confirmation dialog pops up providing the Care case number.
4. Go to Care to address the case (see [Work with Care Cases](https://docs.emplifi.io/platform/latest/home/manage-community-escalations-with-care)).

### Escalate a Community message to Care automatically

The Emplifi platform allows you to define filters to automatically escalate Community messages to Care based on predefined rules. To set up automation, contact your Customer Success Manager.

Community messages that were picked up by Listening and automatically escalated to Care are not tied to any specific profile. The Care agent that will be assigned to a Care case with no profile chosen will have to decide which profile to use to respond to the case (see [Assign a Profile to a Care Case](https://docs.emplifi.io/platform/latest/home/assign-a-profile-to-a-care-case)).

### Replying to a Community message after escalating it to Care

Once a case is created in Care, the Community message is marked with the icon indicating that the message was escalated to Care.

Escalating a Community message to Care locks this message for replying in Community. From now on and until it is resolved in Care, it should be responded to in Care (see [Respond to a Care Case](https://docs.emplifi.io/platform/latest/home/respond-to-an-escalation-in-care)).

The Community message remains locked as long as the Care case is in one of the following statuses: `New`, `Open`, `Pending`, `On hold`, `Done` while in the grace period (see [Adjust the Length of the Grace Period for Reopening Closed Cases in Care](https://docs.emplifi.io/platform/latest/home/adjust-the-length-of-the-grace-period-for-reopenin)).

Such Care cases are categorized in Community as "open". These are the cases that are being processed in Care and therefore keep their respective Community messages locked.

You can reply to the Community message again after one of the following happens:

- The status of the Care case is switched to `Spam` (see [Change the Status of a Care Case](https://docs.emplifi.io/platform/latest/home/change-the-status-of-a-care-case)).
- The Care case is deleted (see [Delete a Care Case](https://docs.emplifi.io/platform/latest/home/delete-a-care-case)).
- For the Care case that was in the status of `Done`, the grace period has passed.

Such Care cases are categorized in Community as "closed". These are the cases that were resolved in Care, and Community agents can respond to their respective messages in Community again.

| Status of the Care case | How Community categorizes the Care case | Is the respective Community message locked? | Can a Community agent respond to the Community message? |
|------------------------|------------------------------------------|---------------------------------------------|---------------------------------------------------------|
| `New` | Open | Yes | No |
| `Open` | Open | Yes | No |
| `Pending` | Open | Yes | No |
| `On hold` | Open | Yes | No |
| `Done` (in the grace period) | Open | Yes | No |
| `Done` (after the grace period has passed) | Closed | No | Yes |
| `Spam` | Closed | No | Yes |
| `Deleted` | Closed | No | Yes |

You can filter Community messages by the status of their respective Care cases as it is interpreted by Community (that is, "open" or "closed"). For more information, see the "Message status in Care" filter in [Community Inbox Filters](https://docs.emplifi.io/platform/latest/home/community-inbox-filters).

## Export and Share Community Data

You can export Community messages from a feed to an XLSX file and then download it, send it as an email, or schedule a regular email. You can also export all comments from a specific Community message to XLSX.

You can use the export to back up your data, for archiving purposed, for analysis in third-party tools, to share with colleagues who may not have access to the Emplifi platform, an so on.

### Export all Community messages from a feed

Export all Community messages from a Community feed to an XLSX file.

For the best results, we recommend that you export no more than 10,000 Community messages at once. Exporting more than 10,000 messages may take a long time to complete.

Steps:

1. Click the feed that you want to export messages from. To get a more precise list of messages to export, apply filters to the feed (see [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds)). All the messages are always exported from a feed. Even if you select only some of the messages in the feed, the generated file will contain all the feed messages regardless of your selection.
2. Click Export in the top bar.
3. The option panel slides out.
4. Do one of the following:
   - To download the messages as an XLSX file, click Download XLSX. The file is generated. Depending on your browser settings, the file is automatically saved on your machine or you are prompted to save the file.
   - To email the messages as an XLSX file: Click Send report as email. The pop-up dialog opens. Select XLSX for the format, and enter the email addresses. (Optional) Add a note to include in the email. Click Email report. The file is generated and emailed.
   - To schedule the time and the frequency when to email the messages as an XLSX file: Click Schedule report. The pop-up dialog opens. Select XLSX for the format, and enter the email addresses. Set the frequency of emailing the exported messages. (Optional) Edit the email subject, and add a note to include in the email. Click Schedule report. The file is generated and emailed.

### Export all comments from a specific Community message

Export comments and direct messages from the conversation in a Community message to an XLSX file.

Export from a Community message fetches up to the last 500 comments/direct messages.

Steps:

1. Locate the message whose comments you want to export.
2. Hover over the message body, and click the arrow that appears on the right. Alternatively, you can click the ellipsis menu (...), and then click Open details.
3. The detail page opens. If the arrow does not appear or if the ellipsis menu does not have the Open details option, there are no details related to the message in the database. You cannot export anything from this message.
4. Click Export Comments. For a Community message containing direct messages, this option is named Export Conversation.
5. The file is generated. Depending on your browser settings, the file is automatically saved on your machine or you are prompted to save the file.

## Enable Translations in Community

Community can translate text content for you:

- Messages that a customer posts to a Community message in a language that differs from your preferred language
- Your replies to the customer - before you post them to the Community message

### Translation options

When the translation functionality is enabled, you can see the following translation-related options in Community:

- The "Show translation" option under messages from customers that are written in a language that differs from your preferred language, and the options for editing and rating the suggested translation
- The "Show translation" option does not appear for the messages from customers that are written in your preferred language and for the messages that were posted by you or other Community users. To prevent performance issues, the "Show translation" option is disabled for messages containing more than 3,000 characters.
- The "Translate to" option in the AI reply assistant menu (for more information about the AI assistant, see [Respond to a Community Message](https://docs.emplifi.io/platform/latest/home/respond-to-a-community-message))
- The language dropdown on the AI reply assistant pop-up dialog

### Supported languages

Translation is supported for 84 unique languages, which make 827 language translation pairs. A pair is determined by the source language, the target language, and the direction of translation (from -> to). For example, "English to Spanish" and "Spanish to English" are two different language pairs.

Not all languages support translation to every language. For example, while translating from Armenian to English is supported, translating from English to Armenian is not.

For more information about the supported language pairs, see [Supported Languages for Translation in Community](https://docs.emplifi.io/platform/latest/home/supported-languages-for-translation-in-community).

### Enable translations in Community

By default, translations in Community are disabled. You can enable them for yourself.

The translation functionality is enabled at the level of an individual user in the Emplifi account, not at the level of the account itself. Enabling it for yourself does not affect this functionality for any other user in the Emplifi account.

Enabling and disabling translations in Community automatically enables and disables translations in Care (see [Enable Translations in Care](https://docs.emplifi.io/platform/latest/home/enable-translations-in-care)), and vice versa.

Steps:

1. In the main Community menu (see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox)), click Community features -> Translations.
2. The translation menu opens.
3. Toggle the switch next to the Enable translation features option to ON.
4. From the Preferred language dropdown, select your preferred language. The preferred language is the language to which Community will translate messages from customers written in a different language. You can change the preferred language at any time later.
5. Click Save. The translation menu closes. The translations are now enabled in Community.

### Translate a message

Steps:

1. Locate the message that you want to translate, and click Show translation.
2. The "Show translation" option does not appear for the messages from customers that are written in your preferred language and for the messages that were posted by you or other Community users. To prevent performance issues, the "Show translation" option is disabled for messages containing more than 3,000 characters. The translation is generated and displayed.
3. If the language of the message is detected incorrectly, click Edit translation, and manually change the source language. The translation is regenerated. The language of an individual message is detected based on the language of the previous messages posted to the conversation within the Community message.
4. (Optional) If you want to have the message translated to a different language than the preferred one, click Edit translation, and manually change the target language. The translation is regenerated.
5. (Optional) Help us improve the translation. Click "Yes" or "No" to let us know whether this translation is helpful. The submitted feedback is anonymous.

### Change the preferred language

The preferred language is the language to which Community will translate messages from customers written in a different language.

Changing the preferred language in Community automatically changes it in Care (see [Enable Translations in Care](https://docs.emplifi.io/platform/latest/home/enable-translations-in-care)), and vice versa.

Steps:

1. In the main Community menu (see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox)), click Community features -> Translations.
2. The translation menu opens.
3. From the Preferred language dropdown, select the new preferred language.
4. Click Save. The translation menu closes. The new preferred language is set.

## Measure the Response Time of Your Community Team

Community comes with its own analytics that provides comprehensive data on agent-customer interaction.

### Set up Community dashboards

You can easily review and analyze the performance of your Community operations by creating a dashboard with a set of dedicated Community widgets and metrics.

#### Generate a Community dashboard from a predefined template

Quickly generate a dashboard with one of ready-to-use Community dashboard templates.

- **Community: Labels & Sentiment** – Analyze the incoming content by its sentiment and the labels that you applied to it.
- **Community: Team Performance** – Analyze how your Community team handles incoming messages and get an overview of the agents' performance.
- **Community Performance** – Analyze your incoming and outgoing direct messages to improve your communication over time.

Steps:

1. In the main Community menu (see [Community Inbox](https://docs.emplifi.io/platform/latest/home/community-inbox)), click Reports -> +Create a dashboard.
2. You are redirected to the Dashboard module and asked to choose a dashboard template or to start building a dashboard from scratch.
3. Choose one of the Community templates. A new dashboard is generated and opens.
4. Click Select data source, and select the content that you want to analyze. The dashboard is populated with your Community data.
5. (Optional) Rename the dashboard and/or set up the default date range for the dashboard widgets.
6. Click Create Dashboard. The generated dashboard is saved and appears under My dashboards in the left panel. The dashboard also appears in Community: you can find it under Reports -> My dashboards in the main Community menu.

By default, a newly created dashboard is available to you only. You can grant other team members access to the dashboard or export it to PDF and share the generated file (see [Share and Export a Dashboard](https://docs.emplifi.io/platform/latest/home/share-and-export-a-dashboard)).

At any time later, you can update the dashboard by adding and deleting individual widgets (see [Add and Remove a Widget from Dashboard](https://docs.emplifi.io/platform/latest/home/add-and-remove-a-widget-from-dashboard)).

#### Generate a Community dashboard from scratch

Generate a fully customized dashboard with dedicated Community widgets.

You can choose from the following Community widgets: Content by labels, Content by type, Incoming messages, Sent messages, Incoming vs sent messages, Response time, Direct messages response time, Sentiment of direct messages, Average review rating (Community), Agents' performance, User activity, Escalated Salesforce cases (Community), Escalated Salesforce leads, Sent surveys, Answered surveys, Survey response rate, Overall satisfaction score (OSAT/CSAT).

You can filter and break down the data in the widgets by various dimensions (such as assigned users, profiles, social media platforms, sentiment, and so on).

Steps:

1. In the main Community menu, click Reports -> +Create a dashboard.
2. You are redirected to the Dashboard module and asked to choose a dashboard template or to start building a dashboard from scratch.
3. Click Blank Dashboard. A new empty dashboard opens.
4. Click +Add Widget to add your first widget to the new dashboard.
5. Click the Community icon to narrow down the selection to only the Community widgets.
6. Click the widget that you want to add to the dashboard. The widget configuration page opens.
7. Configure the widget options. Typically, you can define the widget name, type, data source, filters, breakdown dimensions, and any widget-specific options if available.
8. Once you have configured the widget, click Create Widget. The widget is added to the dashboard.
9. To add another widget, click Add -> Widget, and repeat Steps 4-7.
10. Rename the dashboard to give it a distinctive and meaningful name.

By default, a newly created dashboard is available to you only. You can grant other team members access to the dashboard or export it to PDF and share the generated file.

#### Interpreting Community dashboard data

The Community widgets reflect the data that is shown within the Community module, including the following:

- Content that was sent natively (directly from social media platforms) or using the Emplifi API
- Care escalation content: the piece of content that was escalated from Community to Care, and the content that was generated by the customer and the Care agents within the scope of the Care case
- Listening mentions are not included in the data of the Community widgets.

### Measure the average response time of your Community team

The Community analytics allows you to report on the average time taken to respond to your fans' direct messages. You can compare the response time of individual members of the Community team as well as the response time per profile.

To measure and track the average response time, you are going to use the widget "Direct messages response time".

#### Assign business hours to your profiles

Before adding the widget "Direct messages response time" to your dashboard, consider setting up business hours for the profiles that you want to report the response time for.

Business hours are the hours when your Community team is available and able to respond to your fans' messages (for example, from 8.00 till 17.00 local time). The widget "Direct messages response time" allows you to switch between calculating the average time with or without taking business hours into account.

If your Community team is available only during a certain part of the day, you may want to set up business hours to get the most accurate average response time.

If your Community team is on duty 24/7 or you are not interested in considering business hours in calculating the response time, you do not need to set business hours.

Community widgets work with business hours assigned to profiles. Assign business hours for each profile that you want to report the response time for. For more information about how to create business hours and then assign them to profiles, see [Set Up Business Hours for a Profile or a User](https://docs.emplifi.io/platform/latest/home/business-hours) and [Assign Business Hours to Profiles](https://docs.emplifi.io/platform/latest/home/assign-business-hours-to-profiles).

When a profile does not have business hours set, the response times displayed in the widget "Direct messages response time" might be much higher than expected because users could be sending messages at night or during holidays or weekends.

When a profile has business hours configured, you can configure the widget "Direct messages response time" to take them into account (the timers will be running during the business hours and will pause outside of the business hours and on holidays if any exists).

Setting up or updating business hours are not applied to the widget's data retrospectively. If you set up or update business hours for a profile, the past response time data will not be recalculated.

#### Add the widget "Direct messages response time" to your dashboard

Steps:

1. Go to Dashboard, and select the dashboard where you want to add the widget.
2. Click Add -> Widget.
3. Find and click the widget "Direct messages response time". The widget configuration page opens.
4. Select the data source for the widget to report on.
5. Switch the aggregation type from `Median` to `Average`.
6. To make the widget respect the business hours, switch from `All hours (24h)` to `Profile business hours`.
7. (Optional) Configure the other widget options: Choose the type of data visualization; Set up the default date range; Add dimensions to break the data down.
8. Click Create widget. The widget is added to the dashboard.

## Measure and Optimize Community Management at Scale

Today's consumer expects a great experience with brands online – but that can become difficult to provide when social teams manage many communities at once and manual review of incoming communication grows overwhelming. Community management in Suite sets up teams for success, so current customers keep coming back and new ones are easier to find.

Let's take a look at three key questions to address when scaling up operations.

### How can community managers support an excellent online experience at scale?

An excellent online experience means excellent community care. Keep a finger on the pulse of the conversations around your brand with automated sentiment analysis.

It's easy to do in Suite. Simply Turn On automated sentiment analysis from Settings, and see exactly how people are talking about your brand. Once it's turned on, quick analysis can begin! All automatically assigned sentiment is marked with an A.

Another way to ensure your communities are happy is with quick, consistent responses – key to growing trust and brand loyalty – using custom answer templates (see [Set Up Answer Templates for Community](https://docs.emplifi.io/platform/latest/home/set-up-answer-templates-for-community-and-care)). Answer templates can be used to handle frequently asked questions, so you can be sure you're working with pre-approved content and spending less time on repetitive tasks.

From Settings, go to Answer Templates and click Create Answer Template. Give your template a descriptive Name. In the Text field, you can fill out what you'd like your response to say. Then you can give your template a Short Code – this allows you to access your template quickly in the future.

Once your answer template is all set up, you can easily access it later on right in Community.

### How can teams manage the complexities of global cooperation?

A clear operational structure is key to keeping large teams working together well. With advanced collision detection features like user roles, task assignments and status labeling, Suite makes sure team members are on the same page. A streamlined workflow keeps everything running smoothly.

Go to the Community section and on all individual posts, you can quickly and easily change the status of a post (Done, In Progress, No Action) and assign specific users to communications.

What's more, you can filter by these different cases and easily see at-a-glance who is responsible for what, and avoid confusing mix-ups (see [How to Be Proactive in Your Community Management](https://docs.emplifi.io/platform/latest/home/how-to-be-proactive-in-your-community-management)).

### How can better community management increase productivity and lead to better performance on social?

Large brands means large, disparate communities – and they all need care. And that care can mean lots of time-consuming manual work sorting content. Remove the hassle and give teams more time for more valuable work with rule-based labeling of content.

Go to the Automation tab in Settings and select Add rule. Select which profiles you'd like to automatically create labels for. Then add the conditions for the posts you want to automatically label, and select which label to give them. You can then give your rule a name and a range of time for it to run. Hit Finish to get your new rule up and running. For more information, see [Automate Labeling with Rules](https://docs.emplifi.io/platform/latest/home/how-to-automate-labeling-with-rules).

Let automation take care of labeling, so you can get back to productive analysis. To get instant insight into successful strategies, use personalized community performance dashboards – track label-based trends and team performance metrics like user response rate and user actions, and leverage those insights to set better goals.

From the Dashboard section, go to Add New Dashboard, then select Community Performance. Choose which profiles and users or groups you want to monitor, then Create Dashboard. Get a quick overview of the landscape of your incoming and outgoing communications and content, arranged by generated labels. Discover what content is performing well so you can focus your efforts on profitable venues. For more information, see [Analyze Performance of Your Community Operations](https://docs.emplifi.io/platform/latest/home/measure-the-response-time-of-your-community-team).

Other dashboard widgets also show you user activity, message response rate, and response time per profile. Get a better understanding of your community management performance so you can set achievable goals and improve the online experience.

Done well, community management can play a key role in creating an excellent online experience. Take advantage of Suite's scalable workflow and start maximizing the productivity of your teams.

## How to Be Proactive in Your Community Management

Engaging with a social community isn't just about creating compelling content. By keeping close to your fans and followers even after you hit publish, you can build brand loyalty and actually optimize your social media performance.

With Community in Suite, smoothly validate opinions, answer questions, and amplify positive feedback to grow awareness and trust. Let's take a look at how to streamline the community management experience from execution to reporting.

### Community Management to Drive Content Performance

Influence the success of your posts by staying involved in the conversation. Community is a useful channel to do just that. You can configure your unique view on all your community communication with highly customizable feeds. Adding your voice to the mix will increase engagement and keep your posts around for longer.

To add a new feed, click +Add Feed and choose from the following: Incoming, Assigned to You, Direct Messages, Sent, Dark Posts, Promoted Posts, For Approval, and Publishing Problems. You can order your feeds with a quick drag and drop to make sure your community view is set up to help you reach your unique goals.

### Showing Your Audience You Care – Quickly

Social care is the new marketing. Show that you do care with timely and personalized communication. The Community experience is set up for collaboration, so your community teams can stay on top of all incoming communication. To ensure they can do their best work, you can set defined roles, tag users for assignments, and make use of real-time email and in-product notifications.

Internal cues and notifications are key to streamline team collaboration. Assignments ensure that no two managers are working on the same message at once. To further communicate the status of an assignment, users can mark posts as done, in progress, or no action. Posts can be filtered by their status so that you can see how your community is managing its workload.

With templated answers, community managers can kickstart the process with verified information and correct links, especially with frequently asked questions. From there, authentic personal touches can go a long way to help build trust and create better relationships online – in less time.

### Comprehensive Community Reporting and Business Hours

Community Reporting allows for a transparent view of how your community management teams are working. In the Community Reporting dashboard, you can track statistics across your social profiles with labels for a comprehensive view of your approach. Analyze the performance and speed of your Community care teams and monitor the topics your fans keep bringing up. You can customize your dashboard set up, time range, and data visualizations depending on your needs to make sure the dashboard view actually suits your needs.

By setting specific business hours and holidays for your profiles, you can be more accurate in your community reporting. The response times for your team will be measured and reported on only for these specific time ranges. This will give you a more accurate insight into your ability to respond to your fans. For those teams that are running 24/7, there's no need to set business hours. Learn how to set your business hours in just a few steps (see [Analyze Performance of Your Community Operations](https://docs.emplifi.io/platform/latest/home/measure-the-response-time-of-your-community-team)).

### Community Management as a Positive Experience

With a proactive approach to community management, a thoughtful response can turn a good post in a great relationship. Community management in Suite allows brands to easily engage in transparent dialogue and improve the social experience for everyone in the community, from the newest followers to the most loyal fans.

## Priority Score

Whenever inappropriate comments (hate speech, profanity, racism) or super harsh complaints come up, it's crucial to resolve them quickly.

Emplifi Priority Score sifts through the noise to help community managers focus on these critical comments, as they happen.

### How the scoring works

The algorithm learned how to prioritize and sort your incoming messages depending on which action was used in the past by Emplifi's Community users. The Priority Score uses the same judgement on similar incoming mentions, comments, ad comments, and wall posts, equally, for every Emplifi Account. For example:

- Hiding, banning, or deleting a comment: 81-100 (Urgent)
- Replying to the comment or reply: 51-80 (High)
- Liking the comment or reply: 21-50 (Medium)
- No action or marked as done: 0-20 (Low)

The Priority Score is not available for direct messages.

### Set up your priority score sorting in Community

Since the priority Score algorithm deals with incoming messages, you need to set up either an Inbox Feed or an Incoming Feed, and then, simply sort it by priority.

Once the feed is sorted by priority, you will see the priority tag on each incoming message. For more specific information about the score, you can hover the tag to discover the exact score assigned by the AI.

### Languages supported

Afrikaans (AF), Albanian (SQ), Arabic (AR), Aragonese (AN), Armenian (HY), Asturleonese (AST), Azerbaijani (AZB, AZ), Bashkir (BA), Basque (EU), Bavarian (BAR), Belarusian (BE), Bengali (BN), Bishnupriya Manipur (BPY), Bosnian (BS), Breton (BR), Bulgarian (BG), Burmese (MY), Catalan (CA), Cebuano (CEB), Chechen (CE), Chinese (ZH), Chuvash (CV), Croatian (HR), Czech (CS), Danish (DA), Dutch (NL), English (EN), Estonian (ET), Finnish (FI), French (FR), Galician (GL), Georgian (KA), German (DE), Gujarati (GU), Haitian (HT), Hebrew (HE), Hindi (HI), Hungarian (HU), Icelandic (IS), Ido (IO), Indonesian (IN), Irish (GA), Italian (IT), Japanese (JA), Javanese (JV), Kannada (KN), Kazakh (KK), Kirghiz (KY), Korean (KO), Latin (LA), Latvian (LV), Lithuanian (LT), Lombard (LMO), Luxembourgish (LB), Macedonian (MK), Malagasy (MG), Malay (MS), Malayalam (ML), Marathi (MR), Minangkabau (MIN), Modern Greek (EL), Mongolian (MN), Nepal Bhasa/Newari (NDS), Nepali (NE), Newar (NEW), Norwegian (NO, NN), Occitan (OC), Panjabi (PA), Persian (FA), Piedmontese (PMS), Polish (PL), Portuguese (PT), Punjabi (PNB), Romanian (RO), Russian (RU), Scots (SCO), Serbian (SR), Serbo-Croatian (SH), Sicilian (SCN), Slovak (SK), Slovenian (SL), Spanish (ES), Sundanese (SU), Swahili (SW), Swedish (SV), Tagalog (TL), Tajik (TG), Tamil (TA), Tatar (TT), Telugu (TE), Thai (TH), Turkish (TR), Ukrainian (UK), Urdu (UR), Uzbek (UZ), Vietnamese (VI), Volapük (VO), Waray (WAR), Welsh (CY), Western Frisian (FY), Yoruba (YO).

## Enable Instagram Direct Messages in Community

As the engagement platform number one, Instagram is a great tool to build authentic relationships.

Lift personalized customer care to the next level and create meaningful conversations at scale with Instagram Messaging in Emplifi Community.

### Add Instagram DMs to Your Community Workflow

#### Step 1 - Instagram

To give third-party providers like Emplifi access to Instagram Direct Messages, please follow these steps:

1. Open the Instagram app and, if you have access to more than one Instagram profile, make sure to select the profile you want to enable.
2. Go to the Instagram Settings – Privacy
3. In the Messages subsection, toggle on Allow Access to Messages, hereby giving Emplifi access to view and respond to Instagram DMs

#### Step 2 - Accepting the New Permissions for Added Pages

This step is especially important in case the pages were already part of your Emplifi Account because it will ask Facebook for the new permissions.

1. Go to Settings -> Channels -> Social profiles.
2. Click the correct Instagram profile.
3. Click Connect next to Instagram Publishing to reconnect the permissions.
4. A new window from Facebook appears.
5. Click Edit Settings to adjust your permissions.
6. Activate all options to give Emplifi access to view and respond to IG DMs.
7. Press Done and you're all set!

#### Step 3 (optional) - Troubleshooting Emplifi Business Integration permissions on Facebook

To check and confirm your data connection permissions please follow these steps:

1. Go to your Facebook Profile Settings & Privacy → Settings and click on Business Integrations.
2. Check the active business integrations and click View and edit on Emplifi business connection.
3. A new window will appear. Make sure all options are activated, to give Emplifi access to view and respond to Instagram direct messages.

You're done! Head over to the Community module and start responding to your DMs.

### Still having problems?

If after following the above, you're still having problems, send your questions to support@emplifi.io.

## Integrate Community and Salesforce

Integrating the Community module with Salesforce allows you to monitor and interact with your customers directly in Community.

If you want to escalate an individual conversation to Salesforce, you can simply create a Salesforce case directly from Community and continue dealing with the escalation within your Salesforce environment. You can also create a Salesforce lead directly from a Community message.

Community-Salesforce integration supports only one-off creation of a case. When you use Community to create a Salesforce case and then update the case in Salesforce, the changes will not be synced back to Community.

This article is about integrating Salesforce with Emplifi Community. To integrate Salesforce with Emplifi Care, see [Integrate Care with Salesforce](https://docs.emplifi.io/platform/latest/home/integrate-care-with-salesforce).

### Prerequisites

Before you start, make sure that you have a Salesforce account with CRUD access to cases, contacts, leads, accounts, and the relevant record types.

### Salesforce tokens and escalation to Salesforce

The Emplifi platform uses the Salesforce API to communicate with Salesforce and connects to Salesforce using a token-based connection.

When setting up integration with Salesforce, you as a token holder must connect the Salesforce environment to your Emplifi account. Once done, your Salesforce token becomes the default token. All the cases that are created in Salesforce as escalations from the Emplifi platform will be associated with this token and with your Salesforce user, regardless of who actually initiated the escalation on the Emplifi platform.

If you want to associate a case in Salesforce with the user who initiated the escalation, you can use the following methods:

- Ask the Community users who have their personal Salesforce credentials to connect to the Salesforce account from the Emplifi account (see "Connect to a Salesforce account as an Emplifi user" further in this article). When a connected user escalates a message from Community to Salesforce, the Salesforce case will be created under this user's Salesforce token and will be associated with this user in Salesforce. If a Salesforce case is created from a message escalated by a user who did not connect to the Salesforce account via their personal Salesforce credentials, this case be created under the default token and will be associated with the token holder.
- Map the `Agent name` and/or `Agent email` Community fields to some of your Salesforce fields (see [Map Your Community and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-community-and-salesforce-fields)). When a user escalates a message from Community to Salesforce, the mapped Salesforce fields will be filled in with the user's name and/or email, and you will be able to identify who escalated the message to Salesforce.

### Set up Salesforce integration

To set up Salesforce integration, complete the following steps:

1. Request Salesforce integration.
2. Connect a Salesforce account to your Emplifi account.
3. Map the fields between Community and your Salesforce environment.

#### Request Salesforce integration

Steps:

1. Go to Settings -> Integrations & API. The list of available integrations opens.
2. Locate Salesforce for Community and Care, and click Request.
3. The request is sent to Emplifi. The status of the Salesforce integration is changed to "Requested".
4. Wait for your Customer Success Manager to contact you and enable Salesforce integration in your Emplifi account.
5. Once integration is enabled, the Salesforce sub-item appears under Settings -> Integrations & API in your Emplifi account where you can set up your Salesforce integration.

#### Connect a Salesforce account to your Emplifi account

You can set up Salesforce integration in the following ways:

- Connect a Salesforce sandbox account to run all the preliminary checks and to avoid spamming the main account with tests.
- Connect to a main Salesforce account to run a production environment.

Steps:

1. Go to Settings -> Integrations & API -> Salesforce.
2. Click +Connect Salesforce account to connect a production Salesforce environment or Connect Sandbox to connect a test Salesforce environment.
3. The Salesforce login screen opens.
4. Log in with your Salesforce credentials. You are asked to allow Emplifi to access all the relevant data required.
5. Review the requested data permissions and allow Emplifi to access the data. Emplifi accesses the data from Salesforce. The Salesforce account is added and appears in the list of accounts.

Now that you have connected a Salesforce account to your Emplifi account, do the following:

- Ask the users who have their personal Salesforce credentials to connect to the Salesforce account that you have just added (see "Connect to a Salesforce account as an Emplifi user" further in this article).
- Review "Keep the Salesforce connection alive" further in this article, and familiarize yourself with the implications of the Salesforce connection getting expired.

#### Map the fields between Community and your Salesforce environment

For more information, see [Map Your Community and Salesforce Fields](https://docs.emplifi.io/platform/latest/home/map-your-community-and-salesforce-fields).

### Connect to a Salesforce account as an Emplifi user

If you have personal Salesforce credentials, connect to the Salesforce account from the Emplifi account.

This will help identify you as the creator of Salesforce cases when you initiate escalation from the Emplifi platform to Salesforce: the cases will be created under your Salesforce token and will be associated with you in Salesforce. If you do not have personal Salesforce credentials or do not want to connect to the Salesforce account via the personal credentials, the Salesforce cases will be created under the default token and will be associated with the holder of this token.

Having multiple Emplifi users connected to the Salesforce account makes the connection more reliable and prevents it from getting expired. The more users are connected, the more reliable the connection is. If one user's connection gets expired, the remaining users keep the connection live.

Steps:

1. Go to Settings -> Integrations & API -> Salesforce.
2. Click the Salesforce account that you want to connect to.
3. Click the plus icon next to Contact, Account & Case management.
4. The Salesforce login screen opens.
5. Log in with your Salesforce credentials. You are asked to allow Emplifi to access all the relevant data required.
6. Review the requested data permissions and allow Emplifi to access the data. Emplifi accesses the data from Salesforce. You are connected to the Salesforce account and appear as a connected user.

To disconnect from the Salesforce account:

1. Click any connected user that are displayed next to Contact, Account & Case management. The connection detail dialog pops up.
2. Click Disconnect next to your user.
3. You are disconnected from the Salesforce account and moved to under Suggested Users on the connection detail dialog. You can reconnect with your Salesforce token at any time later.

### Keep the Salesforce connection alive

Once you connected the Salesforce account to your Emplifi account, make sure that the connection stays alive and does not get expired. Make sure that at least one Emplifi user is connected to the Salesforce account at any time (see "Connect to a Salesforce account as an Emplifi user" earlier in this article).

If the Salesforce connection gets expired, make sure to re-establish it as soon as possible. When the Salesforce connection expires, the following happens:

- You no longer can create Salesforce cases or leads from Community. (The already created cases and leads are not affected.)
- You cannot see the record types and objects from the Salesforce account on the Mapping with Community tab under Settings -> Integrations & API -> Salesforce.

As soon as the Salesforce connection is re-established, the lost/paused functionality is restored to the state it was in before the Salesforce connection expired.

## Direct Conversation and Direct Message

Some automation processes allow you to apply filters (language, sentiment) to the whole conversation or to individual messages.

This is why it is important to understand differences between a direct conversation (DC) and a direct message (DM).

### Direct conversation

A direct conversation is a body of messages exchanged between two profiles on a social media network.

In other words, when your customer sends a direct message to your Facebook profile, they are starting a direct conversation.

Conversations are, technically speaking, endless. Any interaction between any two profiles on a given social media network is considered a single direct conversation.

For example, imagine that follower John sent you a direct message on Facebook 10 years ago. You replied, and that was it. If John sends you another message tomorrow, the new message will be a part of the conversation that started 10 years ago.

### Direct message

A direct message is a single 'unit' of a direct conversation that was sent to your profile (you) by another profile (your customer).

### How we analyze conversations and messages

Understanding the differences between direct conversations and direct messages is important for handling communication with your followers, whether in immediate sorting or in complex flow automations.

Community feeds (all incoming, sent, etc.) only work with direct conversations (not with with individual direct messages).

Filters related to the notion of 'message' work with aggregated values from direct messages. This applies to the following filters: Language, Sentiment, Message type, Media type, Chatter messages, Fulltext.

Fulltext search occurs in the last 100 direct messages including brand and customer messages.

Some filters allow you to make a choice to apply them on the message level or the conversation level.

#### Direct messages

On the direct message level, a filter is applied to a single message.

When a new direct message arrives from a customer, it is evaluated against filters. If it meets the conditions, your rule is triggered.

#### Direct conversations

On the direct conversation level, only your customers' messages are considered in the filters.

Example: Your agent's reply in German to your customer's French messages would have no effect on the message/conversation being filtered as French.

Every time a new direct message is received in a direct conversation, this is what happens:

1. Automation selects one or multiple customer messages that arrived after the previous agent's responses. Selection logic: the latest direct message from your customer; up to 10 previous customer's direct messages or all previous customer's direct messages up your own latest message, whichever comes first.
2. We analyze the applicable messages - first language, then sentiment.
3. Based on this analysis, language and sentiment are determined.
4. Only the most recent detected language and sentiment are stored. In other words, the language of the direct conversation is always determined by the last analysis.

### Instagram and Facebook anomalies

**Instagram** – When your follower mentions you (your brand's profile) anywhere on Instagram in any story, Instagram API will treat that mention as a direct message between that follower and your profile. That mention will, as a result, slot in the queue of direct message within the direct conversation between you and that specific follower.

This, however, reclassifies the entire direct conversation to a Story. When an actual direct message arrives, the story turns into a direct conversation again.

- direct message → becomes a part of direct conversation
- story mention → becomes a part of direct conversation → direct conversation turns into a story (PIE rules that are applied over direct conversation are not executed)
- direct message → becomes a part of direct conversation → story turns into a direct conversation

**Facebook** – Replies to Facebook stories are always treated as direct messages, and the Facebook API does not have the ability to reference the story in the message. This means that when you receive a reply to a story you created, you will receive a direct message, but Emplifi has no way to connect the message to the story you posted.

In addition, the Facebook API does not support story mentions. Because story mentions are not supported, you will not receive a message for story mentions.
