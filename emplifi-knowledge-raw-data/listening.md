# Listening

Learn how to use Listening to monitor digital conversations across social media to understand what customers are saying about brand, products, and industries.

[Listening - General Guide](https://docs.emplifi.io/platform/latest/home/listening-general-guide)

[Listening Data Sources and Covered Content](https://docs.emplifi.io/platform/latest/home/listening-data-sources-available-coverage)

[Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data)

[Crisis Management and Spike Alerts in Listening](https://docs.emplifi.io/platform/latest/home/crisis-management-and-spike-alerts-in-listening)

[Unknown and Unidentified Profiles in Listening Analytics](https://docs.emplifi.io/platform/latest/home/unknown-and-unidentified-profiles-in-listening)

[Generate a Summary of a Listening Query](https://docs.emplifi.io/platform/latest/home/query-summarization)

[Get Nuanced Actionable Insights into Your Listening Queries](https://docs.emplifi.io/platform/latest/home/get-nuanced-actionable-insights-into-your-listenin)

[Discover What Is Being Discussed in Listening Mentions](https://docs.emplifi.io/platform/latest/home/discover-what-is-being-discussed-in-listening-ment)

---

## Listening - General Guide

Listening is a tool that allows you to monitor digital conversations. It helps you understand what customers are saying about brands, products, and industries.

To start listening, you set up a keyword-based query to monitor (listen to) digital content.

The results of queries are called listening mentions.

You can:

- Analyze mentions in Unified Analytics or Content modules of the Emplifi platform
- Respond to mentions in Community

### Create a listening query

Based on keyword based conditions, the queries define what content we collect for you, what sources we monitor, and for what date range we collect data.

You input these parameters in a four-step process:

1. Choose the keywords.
2. Define data sources.
3. Sum up the query.

The following text describes the steps in detail.

#### Step 1 - Choose your keywords

Keywords are the basic part of your query. Keywords define what listening mentions you'll collect from social media and the web.

**Keywords**

To enter a keyword, type it in the text field and press Enter.

When entering keywords, consider the following:

A keyword can be:

- A plain-text word or a combination of words
- #hashtag
- @mention

Keywords are not case-sensitive. `sunglasses` and `SUNGLASSES` are treated as the same keyword.

Diacritic marks in keywords are taken into account and processed. `kampaň` and `kampan` are treated as two different keywords.

Wildcards (`?` and `*`) in keywords are not supported.

**includes vs. does not include**

When setting up a condition, you can define:

- Keywords (and their combinations) that must be present in the text ("include")
- Keywords (and their combinations) that cannot be present in the text ("doesn't include")

Each query must be based on at least one "include" condition. Queries consisting solely of "doesn't include" conditions are not supported.

**Operators**

**AND**

You can use the `AND` operator to separate segments within a condition.

**OR**

Conditions within a query and keywords within a condition are separated with the `OR` operator.

**NEAR**

To narrow down the query results and make a query more specific, you can use the `NEAR` operator in a query condition.

`NEAR` is a proximity operator that allows you to specify a term that must be found within a certain number of words from the keyword in a query condition. If the term is found within the specified proximity, the listening mention is included in the query results. Otherwise, the listening mention is considered irrelevant and is not included in the query results.

How to use the `NEAR` operator with different data sources (see "Step 2 - Define data sources" further in this article) within one listening query:

- If your query includes Facebook, Instagram, Reddit, TikTok, YouTube, and/or X (formerly Twitter) as data sources, you can use as many `NEAR` operators in one query as you need provided that the length of individual conditions does not exceed the limit (see "The maximum length of a query" further in this article). Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).
- If your query includes the Web among other data sources, you can use up to five `NEAR` operators in one query.

For example, if you use the keyword `cat` and are interested only in the results related to domestic animals, you can set up a condition as follows:

`cat NEAR(3) domestic OR animal`

This query condition will include only the listening mentions that have the word `cat` with either `domestic` or `animal` up to three words apart from it.

The mention `A cat is a domestic animal.` will be included in the results because the term `domestic` and the keyword `cat` are two words apart. The mentions `A cat, also known as Felis catus, is a domestic animal.` and `Computerized Axial Tomography is often called CAT.` will not be included in the results.

A term must be a single word containing at least two characters.

If you specify multiple terms for a keyword, they are separated with `OR`.

To add a `NEAR` operator to a keyword, click the proximity icon (`(o)`) that appear next to the keyword.

To set the number of words (proximity), click the `NEAR` operator and choose a number from 1 through 6.

#### Step 2 - Define data sources

Choose digital sources you want to monitor for listening mentions. You have the following options that you can combine to suit your requirements:

- Facebook
- Instagram
- Reddit (Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).)
- TikTok
- X (formerly Twitter)
- YouTube
- Web

By default, all the sources are selected. You can keep all of them, proceed with only one of them or combine them. At least one data source needs to be chosen.

Additional options for each source allow you to enrich the data set or narrow it down.

Learn more about the data sources and the advanced options of their combinations in [Listening Data Sources and Covered Content](https://docs.emplifi.io/platform/latest/home/listening-data-sources-available-coverage).

#### Step 3 - Sum up the query

The last step allows you to:

- Name the query
- Set up for how long it would collect data
- Filter out sensitive content from listening data
- Enable listening data for Community management
- Regulate the volume of mentions

**Name and date range of the query**

We recommend naming the query in a way which is understandable and easy to find for later use. There are no limitations, though.

By default, the start date is set to 'now' and the end date as 'forever'. However, you can let the query run for a limited time and schedule the start and end to a specific day in the future. For example, if you're planning a short time campaign.

**Historical data**

Historical data is available for some of the data sources (see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data)).

Depending on the data sources that you chose, once you create a query, you can choose to collect historical data from up to 365 days in the past.

Historical mentions are deducted from the current billing cycle and you can hit your maximum mention limit almost immediately.

**Filtering sensitive content**

Filtering sensitive content detects images that may contain nudity and excludes mentions with such images from listening data.

The estimated accuracy of detecting sensitive content is 93%.

Only static images are processed. GIFs and videos are not checked.

The excluded mentions do not count towards the maximum mention limit.

**Community management**

When you know your colleagues managing your social media community will need to work with the mentions, make sure you allow the Community management.

Turning the Community management on will list the query mentions in Community feeds and allow agents to respond to them (when possible; see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data)).

If you're not sure how Listening could affect their work, we recommend checking up with them first.

**Regulating the number of collected mentions**

All queries in your account share the mention limit of your Listening package. Once you reach this limit, all queries get temporarily suspended and they will not renew until the beginning of the following billing period.

By regulating the number of mentions, you can avoid reaching the limit in case your query is too broad and avoid the suspension of your active queries.

### Edit a listening query

When you are editing a listening query, the changes that you are making will be applied only to the future listening mentions that will be collected going forward. The changes will not be applied to the listening mentions that have already been collected by the query.

If you want to re-download the already collected listening mentions to match the new query conditions, duplicate the query, edit it as needed, and set the start date and the end date to cover the previous period. Depending on the query data sources, you can re-download the data from up to one year ago.

**Updating the already collected data**

The option to update the listening mentions that the query has already collected is in beta. It is available only to the participants of the beta program.

If you are not a participant and want to test this feature in your listening queries, contact Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).

When you are editing a listening query, you can decide what to do with the listening mentions that the query has already collected. You can choose one of the following options:

- Retroactively update the already collected mentions according to the changes that you have just made to the query. Depending on the query data sources, you can re-download the data from up to one year ago.
- Keep the already collected mentions as is. No changes will be made to the previously collected data. The changes will be applied only to the future listening mentions that will be collected going forward.

### Maximum number of queries and mentions

The maximum limit of queries and mentions depends on your account settings.

The limit for queries takes into account only queries that are considered active. Active queries are those that are running, regulated, suspended, or scheduled.

The limit for the number of mentions counts every mention collected during a month. If you hit the limit, all your queries get suspended. They start collecting data at the beginning of the following month when the limit renews.

In case you need to increase those limits, please reach out to your customer success manager.

### The maximum length of a query

For Instagram, Facebook, Reddit, TikTok, and YouTube, there is no limit in query length. Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).

For X (formerly Twitter), a query can be up to 4,096 characters long (a technical limitation of the X data source).

For web, the limit is 3,900 characters maximum (a technical limitation of the web data source).

Sometimes the actual length of the query may not be obvious. The length considers the query in its complexity, including the profile names, countries and languages used as a filter. On top of that, some parts of it may not be visible to you, for example, the logical operators and include/exclude conditions.

When you're not using any filters, you can use up to approximately 1 900 characters when defining the keywords.

Emplifi automatically calculates the query length. If you reach the limit, we return an error message and ask you to reduce the query conditions. If there's no way of reducing the query, we suggest breaking the query down into multiple queries.

### Query statuses

Based on the selected date range and your account limits, the query can be found in a couple of different statuses. There are two basic types of queries: active and inactive ones. Your account limit only considers active queries; inactive queries are not limited.

**Active queries**

- Running – The query is collecting data within the specified date range.
- Processing – The query is processing a large data set with historical data. To ensure data consistency, you cannot change the query setting during Processing. You can stop Processing and review the data that has been processed up to that point. You cannot resume processing.
- Scheduled – The query will start collecting listening mentions on the scheduled date.
- Regulated – The query hit the annual mentions limit set for the query. The query is run again at the beginning of the next billing period.
- Suspended – The query is not collecting any data because of reaching the annual limit for the number of listening mentions. The data collection will be renewed at the beginning of the next billing period.

**Inactive queries**

- Paused – The query was paused by the user and it isn't collecting any listening mentions.
- Done – The query has reached the end date and it isn't collecting any listening mentions.

### Query sets, a way to organize your queries

Use query sets to categorize your queries and let them follow your desired structure. You can assign one query to multiple query sets if necessary. It may help you manage the queries and analyze the whole query sets or combination of a query and query set.

For example, this way you can split your queries geographically, per brand, or by topic.

### When does the data collection start?

The query starts collecting data depending on the date you choose in the last step of the query wizard: immediately (if you select "now" as the start date) or on the scheduled date.

Depending on the sources of the query, in the Unified Analytics and Content modules, mentions are available for further use in less than an hour. In Community, data is usually available almost immediately, but it can take up to a few minutes.

You can learn more about data download and processing in [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

### Who can create query sets and queries?

To be able to manage queries and query sets (create and edit them), you must be assigned an account role with the "Manage Query sets and Queries" permission (that is, Account Admin or a custom account role with the "Manage Query sets and Queries" permission under the Listening section; see [Account Roles](https://docs.emplifi.io/platform/latest/home/account-roles)).

Users without this permission can only view already created query sets and queries in the respective sections.

---

## Listening Data Sources and Covered Content

### Supported data sources

You can listen for data from the following sources:

- Facebook
- Instagram
- Reddit (Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).)
- TikTok
- X (formerly Twitter)
- YouTube
- Web

**Downloading and processing listening data**

Every source is crawled at least once every 24 hours after publishing, and some of them are crawled every hour. Emplifi requests the crawled data for new mentions in a dynamically changing frequency. Listening queries receiving a lot of mentions provide new mentions every hour, while some niche queries can be refreshed in up to every 12 hours.

Historical backfill is available for all data sources except for Instagram hashtags, Reddit, and TikTok.

For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

### The scope of data sources

When setting up a listening query, define what scope of data from each data source you want to monitor.

**Wide range listening**

This is the widest possible scope of data to monitor where you can select one or more supported data sources (the social media platforms and web).

To narrow down the results, you can apply global filters to the selected data sources:

- Filtering by language
- Filtering by country (Filtering by country is not available for Reddit and TikTok. Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).)

Limitations of filtering by country: Determining the country of a social media account or a website relies on the following:

- Public information about the location that the relevant social media account or a website decided to disclose,
- The query capabilities of the social media platform or a web site. While Emplifi requests the location data, it is solely the social media platform or the website who decides what data to return.

Emplifi cannot independently verify the accuracy of location data obtained from third-parties as described above and therefore assumes no liability for the accuracy of location data. Social media accounts or websites lacking public location data are not included in the results at all.

For each selected social media platform except for Reddit and TikTok, you can also specify the profiles that should be excluded from listening.

Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).

**Specific social profiles**

Explicitly specify the accounts on the social media platforms that you want to monitor. Those can be the accounts that you added to your Emplifi account as profiles (see [Add a Profile as Owned (Private) or Public](https://docs.emplifi.io/platform/latest/home/add-a-profile-as-owned-or-public)) or any other accounts that you can find by their name or URL.

Specifying the accounts that you want to monitor is not available for Reddit and TikTok.

(Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).)

### Data sources

**Facebook**

The Facebook data source is an extensive, growing database of social media content. It includes billions of posts from more than 800,000 Facebook pages, but still not all Facebook content.

If there is a specific Facebook page that you want to monitor but you do not see listening mentions collected from this page among your query results, contact Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io) to have the page added to the Facebook data source database.

What is collected:

- Posts (except for ad posts)
- User posts
- Comments

Data availability: The data is collected almost in real time. The listening mentions are available for analysis no later than an hour after the content has been published. Data starts gathering from the point a query is set, up to 365 days in the past. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

**Instagram**

The Instagram data source is an extensive, growing database of social media content. It includes billions of posts from more than 9,000,000 Instagram Business and Creator accounts, but still not all Instagram content.

If there is a specific Instagram account that you want to monitor but you do not see listening mentions collected from this account among your query results, contact Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io) to have the account added to the Instagram data source database.

You can include Instagram hashtags in the scope of the monitored data. Instagram hashtag search is a way of getting access to Instagram public content tagged with a specific hashtag. It searches in the content of Business and Creator accounts and also personal accounts that are public. For more information, see [Listening - Instagram Hashtag Search](https://docs.emplifi.io/platform/latest/home/listening-instagram-hashtag-search).

What is collected:

- Posts (comments are not included)
- Reels (comments are not included)

Listening for owned profiles: For Instagram accounts that are added to your Emplifi account as owned profiles and are activated for Community (see [Add an Owned Profile for Your Instagram Account](https://docs.emplifi.io/platform/latest/home/how-to-add-owned-instagram-profiles) and [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles)), we collect:

- Posts where the account is tagged via a media tag
- Posts and comments where the account is mentioned via an @mention
- Comments under the account's posts

Data availability: The frequency of collecting the data depends on the data type:

- The listening mentions coming from the hashtag search are shown immediately after a post with the hashtags is published.
- For the other data types, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

Data starts gathering from the point a query is set, up to 365 days in the past. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

Historical backfill is not available for:

- Hashtag search
- Comments where the account is mentioned via an @mention
- Comments under the account's posts

**Reddit**

Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).

You can access all public Reddit content.

What's collected:

- Posts
- Comments

Data availability: The data is collected in real time, and the listening mentions are available for analysis immediately after the content has been published. Data starts gathering from the point a query is set. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

No backfill: Reddit has no historical backfill.

Reddit's data policies and data availability: Per [Reddit's policies](https://redditinc.com/policies/developer-terms), any third party that uses Reddit data (including Emplifi and our competitors) cannot redistribute Reddit data and must delete any data from their systems when this data is deleted from Reddit itself. This is how this may affect you:

- When content is deleted from Reddit, Emplifi deletes it from their systems. The deleted data will no longer be available in the Content module and Unified Analytics module, which may affect your reporting and analytical data.
- Exporting Reddit data from the Content module is disabled.

**TikTok**

On TikTok, the listening algorithm listens for @mentions of your TikTok accounts in other TikTok users' posts and comments.

Due to the [TikTok API limitations](https://ads.tiktok.com/gateway/docs/index?doc_id=1825103422736385), to appear in the results of a listening query:

- A post with a @mention of your account must be one of the top 1000 most liked posts out of all the posts that mention your TikTok account.
- A comment with a @mention of your account must be one of the top 1000 most liked comments out of all the comments that mention your TikTok account.

For listening queries to be able to collect posts and comments with mentions, your TikTok accounts must be added to your Emplifi account as owned profiles (see [Add an Owned Profile for Your TikTok Account](https://docs.emplifi.io/platform/latest/home/add-an-owned-profile-for-your-tiktok-account)) and the UGC and Listening connection must be established in these profiles (see [Check and Establish Connections of Owned Profiles](https://docs.emplifi.io/platform/latest/home/check-and-establish-connections-of-owned-profiles)).

What is collected: Posts and comments where the account is mentioned via an @mention

If a collected post is a photo post (a post with a photo carousel), the thumbnail image is not fetched due to TikTok API limitations and therefore will not be displayed when the post is reviewed in the Content module.

Data availability: The data is collected every 24-48 hours. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

TikTok has no historical backfill.

**X (formerly Twitter)**

Because X (formerly Twitter) works differently than other social media platforms, you can access all public X content without any limitations.

What's collected:

- Posts (formerly "tweets")
- Replies
- Mentions
- Reposts (formerly "retweets")
- Reposts with comment (formerly "quote tweets") – Only when a query keyword is included in the comment to the reposted post (and not in the post itself)

Data availability: The data is collected in real time, and the listening mentions are available for analysis immediately after the content has been published. Data starts gathering from the point a query is set, up to 365 days in the past. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

**YouTube**

The YouTube data source is an extensive, growing database of social media content. It includes billions of posts from more than 3,000,000 YouTube channels pages, but still not all YouTube content.

If there is a specific YouTube channel page that you want to monitor but you do not see listening mentions collected from this channel page among your query results, contact Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io) to have the channel page added to the YouTube data source database.

What is collected:

- Videos (the title and description are included)
- Shorts

Data availability: The data is collected almost in real time, and the listening mentions are available for analysis no later than two hours after the content has been published. Data starts gathering from the point a query is set, up to 365 days in the past. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

**Web**

The web data source is an extensive, growing database of web content. It scans and extracts data from over a million websites every day and over 10 million posts are indexed daily.

If you want to know whether a certain domain is covered, contact Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).

What is collected:

- News – Articles published in established news media outlets
- Blogs – Articles published by self-published authors
- Forums – Online discussions, conversation threads on message boards, forums, and review sites

Data availability: The data is collected with a dynamically changing frequency. For more information, see [Downloading and Processing Listening Data](https://docs.emplifi.io/platform/latest/home/downloading-and-processing-listening-data).

The web data source is available only with the Wide range listening option selected (see "The scope of data sources" earlier in this article).

---

## Downloading and Processing Listening Data

Once a listening query starts running, we download and process the corresponding data:

- The listening mentions themselves
- Data enrichments (additional information about the mentions for the analysis)

The processing rates for data and data enrichments vary; some data will be processed faster, some slower. It takes time to receive data from the social network itself, and we also process the listening data in batches, not post by post. For this reason, the new information about listening mentions will be continually updated in your feed.

### Frequency of downloading and updating listening data

**Facebook**

- Data range: An extensive, growing database of social media content plus any page of your choice
- Collected types of content: Posts (except for ads posts), User posts, Comments
- Frequency of collecting new listening mentions: Up to 1 hour
- Frequency of updating the main metrics/parameters of a collected listening mention: Posts: every 4 hours; Comments: every 12 hours
- Data backfill: 365 days of historical data

**Instagram**

- Data range: An extensive, growing database of social media content from Business and Creator accounts plus any Business or Creator account of your choice
- Collected types of content: Posts (comments are not included), Reels (comments are not included). For Instagram accounts that are added to your Emplifi account as owned profiles and are activated for Community (see [Add an Owned Profile for Your Instagram Account](https://docs.emplifi.io/platform/latest/home/how-to-add-owned-instagram-profiles) and [Activate Profiles for Community and Set Up Profile Roles](https://docs.emplifi.io/platform/latest/home/activate-profiles-for-community-set-up-roles)), we collect: Posts where the account is tagged via a media tag; Posts and comments where the account is mentioned via an @mention; Comments under the account's posts
- Frequency of collecting new listening mentions: Posts where the account is tagged via a media tag, posts and comments where the account is mentioned via an @mention, comments under the account's posts - up to 1 hour; Posts and reels collected by listening queries with the Wide-range listening option selected - up to 8 hours; Posts and reels collected by listening queries with the Specific social profiles option selected - up to 24 hours
- Frequency of updating the main metrics/parameters of a collected listening mention: Posts and reels collected by listening queries with the Specific social profiles option selected - up to 24 hours; Reels and all the other posts - up to 8 hours; Comments where the account is mentioned via an @mention and comments under the account's posts - up to 8 hours
- Data backfill: 365 days of historical data. Not available for comments where the account is mentioned via an @mention and for comments under the account's posts

**Instagram hashtag search**

- Data range: Content of Business and Creator accounts plus public personal accounts using a specified hashtag in the text
- Collected types of content: Posts (comments are not included)
- Frequency of collecting new listening mentions: In real time
- Frequency of updating the main metrics/parameters of a collected listening mention: No updates
- Data backfill: n/a

**Reddit**

Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).

- Data range: All public content
- Collected types of content: Posts, Comments
- Per [Reddit's policies](https://redditinc.com/policies/developer-terms), any third party that uses Reddit data (including Emplifi and our competitors) cannot redistribute Reddit data and must delete any data from their systems when this data is deleted from Reddit itself. This is how this may affect you: When content is deleted from Reddit, Emplifi deletes it from their systems. The deleted data will no longer be available in the Content module and Unified Analytics module, which may affect your reporting and analytical data. Exporting Reddit data from the Content module is disabled.
- Frequency of collecting new listening mentions: In real time
- Frequency of updating the main metrics/parameters of a collected listening mention: No updates
- Data backfill: n/a

**TikTok**

Your TikTok accounts must be added to your Emplifi account as owned profiles (see [Add an Owned Profile for Your TikTok Account](https://docs.emplifi.io/platform/latest/home/add-an-owned-profile-for-your-tiktok-account)) and the UGC and Listening connection must be established in these profiles (see [Check and Establish Connections of Owned Profiles](https://docs.emplifi.io/platform/latest/home/check-and-establish-connections-of-owned-profiles)).

- Data range: Listens for @mentions of your TikTok accounts in other TikTok users' posts and comments
- Collected types of content: Posts and comments where the account is mentioned via an @mention. If a collected post is a photo post (a post with a photo carousel), the thumbnail image is not fetched due to TikTok API limitations and therefore will not be displayed when the post is reviewed in the Content module.
- Frequency of collecting new listening mentions: Every 24-48 hours
- Frequency of updating the main metrics/parameters of a collected listening mention: No updates
- Data backfill: n/a

**Web**

- Data range: An extensive, growing database of web content that scans and extracts from above a million of websites every day with over 10 millions of posts indexed daily
- Collected types of content: News, Blogs, Forums
- Frequency of collecting new listening mentions: From 1 hour up to 24 hours for less frequently publishing websites
- Frequency of updating the main metrics/parameters of a collected listening mention: No updates
- Data backfill: 30 days of historical data

**X (formerly Twitter)**

- Data range: All content
- Collected types of content: Posts (formerly "tweets"), Replies, Mentions, Reposts (formerly "retweets"), Reposts with comment (formerly "quote tweets") – Only when a query keyword is included in the comment to the reposted post (and not in the post itself)
- Frequency of collecting new listening mentions: In real time
- Frequency of updating the main metrics/parameters of a collected listening mention: Every 8 hours. We update the metrics of a collected mention for 2 days after the mention was collected. Once the mention is 2 days old, we stop updating the metrics. Collected mentions older than 2 days do not get their metrics updated.
- Data backfill: 365 days of historical data

**YouTube**

- Data range: An extensive, growing database of social media content plus any channel page of your choice
- Collected types of content: Videos (the title and description are included), Shorts
- Frequency of collecting new listening mentions: Up to 2 hours
- Frequency of updating the main metrics/parameters of a collected listening mention: Every 24 hours. We update the metrics of a collected mention for 1 month after the mention was collected. Once the mention is 1 month old, we stop updating the metrics. Collected mentions older than 1 month do not get their metrics updated.
- Data backfill: 365 days of historical data

### Downloading and processing Today's Listening data in Analytics

The delays in downloading data are apparent in Unified Analytics when you include Today in the selected date range.

Today can be selected as a part of a broader date range and it's also included in the following date range shortcuts:

- Today
- This Week
- This Month
- This Quarter
- This Year

Although listening mentions are available almost immediately (per table above), it may take up to 2 hours to see advanced data such as sentiment, location, language, country, gender, topics, keywords, etc.

If you opt to see only Today's data, you will be informed in the corresponding widget that there is still data to be loaded.

If you include Today in a more extended date range, there will typically be some data shown, but it may not include all the latest data, we will let you know that data may be missing with an alert icon and explanatory tooltip.

### Community management of Listening data

When setting up a query, you can enable Community management for mentions found via listening. In other words, you decide if you want to send listening mentions to Community feeds and allow Community agents to manage them the way they are used to.

An easy way how to get to messages coming through listening is to open Message types in the Filter panel and select Listening. Potentially, agents can save the filter set up as a feed. For more information, see [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds).

**Mentions that can be managed from Community**

In general, Community agents will be getting mentions coming from Facebook, X (formerly Twitter), Instagram, and they will be able to assign them to other users, set statuses, apply labels, and respond to them.

However, each network works differently thus the possibilities for Community management may differ as well.

**Ability to respond, like and share Listening content**

The option to respond, like and share Listening mentions from Community differs per each platform.

- Facebook: Agents will be able to like, comment, and share Facebook posts. If the account includes more than one profile, agents have to select what profile will be used for the interaction. Comments from public (not owned) Facebook profiles are not sent to Community.
- Instagram: Agents can see Instagram posts, reels, and comments coming via Listening, but due to technical limitations on Instagram's side, it is not possible to react to them directly from the Emplifi platform. However, agents are given the opportunity to respond on Instagram, which is a link leading directly to the post/reel/comment on Instagram where a reaction is possible. Community identifies the content type of reels as "posts". To display only the reels and hide all the other non-reel posts, filter the messages by media type set to `IG Reels` (see [Community Inbox Filters](https://docs.emplifi.io/platform/latest/home/community-inbox-filters)).
- X (formerly Twitter): Agents will be able to like, repost, and reply to posts and replies. If the account includes more than one profile, agents have to select what profile will be used for the interaction.

Once the agent responds, their message is available in the Sent feed or after opening the whole thread of the post or comment. The whole thread can be helpful when managing comments since it shows the parent post and provides agents with context.

On some occasions, the parent post may not be available, typically due to the social network's privacy policies or technical limitations. In such cases, we provide agents with a direct link to the post on the social platform.

**Mentions that are not sent to Community**

Agents will not find in Community mentions to which they cannot react and respond:

- Facebook comments from public (not owned) profiles
- All mentions from the web source
- All mentions coming from Reddit, TikTok, and YouTube (Reddit as a data source is available as an add-on. To have it enabled for your Emplifi account, contact your Customer Success Manager or Emplifi Support at [support@emplifi.io](mailto:support@emplifi.io).)
- Historical data or, in other words, mentions from the past where responding has no point anymore

### Historical data

Historical data is available for the following sources:

- Facebook
- Instagram
- X (formerly Twitter)
- YouTube
- Web

Once you create a query, you can choose to collect historical data.

How many days of the historical data is available depends on the data source and the type of the collected content. For more information, see the sections about the individual sources earlier in this article.

The data backfill is only available for query that starts collecting the mentions immediately; it is not available for query scheduled for the future.

By the nature of the data, the historical mentions will not appear in Community. Since we are talking about the past, such mentions would only make the Community cluttered, and there does not seem to be a good use case to show them.

In certain situations, the data backfill process can be paused or canceled:

| What could happen | How does it affect data backfill |
|-------------------|----------------------------------|
| You stop collecting historical mentions while processing. | The data backfill stops. Your already collected data will be kept. |
| You cannot resume the query due to technical limitations of platforms APIs. | Duplicate and/or edit the query and run the job again. |
| Your account hits the annual limit of collected mentions. | The data backfill pauses. When the limit renews, the data download starts again from the point where it ended. |
| A query that you regulate hits your custom limit. | The data backfill stops. Your already collected data will be kept. You cannot resume the query due to technical limitations on platforms APIs. Duplicate and/or edit the query and run the job again. (Note: The custom limit is the limit (the number of mentions) that you set for your query.) |
| A query is deleted. | The backfill is cancelled and all the already downloaded data will be removed. |
| A source is removed from a query. | The data backfill stops. Your already downloaded data will be kept. |
| You edit a query (for example, you remove or add a keyword). | The data backfill stops. Your already downloaded data will be kept. |
| Query is rescheduled for future. | The data backfill stops. Your already downloaded data will be kept. The query will continue from the new date but there will be a gap in your data (from the moment of the stop until the date when the query resumed). |
| Query reaches its end date but historical data has not been fully downloaded yet. | Historical data download continues until it completes. |

---

## Crisis Management and Spike Alerts in Listening

Crisis management and spike alerts help brands identify events that could negatively or positively impact the brand's perception among customers and react to such events in time.

Emplifi Crisis Management for Listening allows you to set up alerts on top of existing Listening queries. These alerts automatically notify you about potential spikes in the number of mentions received during a short period of time. This was you always know something's happening and you can respond to the situation.

While starting with an existing Listening query, you can target your spike alert rules with keywords and sentiment filters and get notifications only about the most relevant spikes in mentions.

For example, if you're monitoring your brand name in a Listening query, you can filter down mentions with the keyword "Quality" and negative sentiment.

To properly set the sensitivity of spike identification, you can:

- use our AI-driven "Smart Detection" based on analysis of historical data
- manually set up the number of mentions you consider significant
- or, if needed, get a notification about every mention that meets your definition.

You can get notifications about spikes via email and/or directly within the Emplifi platform. These notifications include links that would take you to Listening Analytics, where you can analyze and understand the data behind the spikes.

Learn more about how to use the functionality up to the maximum below.

### Managing Spike Alert Rules

To manage spike alerts, head to Emplifi Settings → Listening → Spike alerts.

The section allows you to create new alerts and edit, monitor and delete existing ones.

It contains basic information about the alerts:

- name
- number of detected spikes
- users to be notified (user notified when a spike is detected)
- status of the alert

If you need to filter the alert list, you can do so by query sets, queries and users to be notified.

**Alert status**

The alert can be in four different states:

- Running – The alert is active
- Paused – The alert is paused
- Invalid – The alert can be invalid when the query it's supposed to monitor has been deleted.
- On hold – The on hold status is affected by the status of the query sets or queries it's supposed to monitor. It can happen when:
  - All the original queries have been paused, so they're not collecting any data.
  - All the original queries have reached their mentions quota, so they're not collecting any data.
  - The Emplifi Account has reached the yearly listening mentions quota. The queries will not collect any new data until the first day of the new billing period.

### How to Set Up Spike Alerts

The setup process consists of three steps:

1. Source & condition
2. Alert sensitivity
3. Notifications

Each phase is described separately further below.

**Permissions**

Spike alerts are, by default, part of the Listening feature. There are no additional permissions, therefore, users with access to Listening settings (specifically, the Manage query sets and queries account permission) also have access to Spike alert settings.

If you need to change these settings, head to Settings → Roles & permissions → Account roles → Listening.

### Creating Spike Alerts

To create a new alert, simply press the Create spike alert button to open the alert setup.

Let's go through each step of spike alert creation.

**Step 1 - Source & conditions**

In the first step of the setup, you define the alert name, choose data sources it will monitor and set up the monitoring conditions (keywords and sentiment filter).

When choosing a data source, you have two options:

- Choosing a query set: By default, all queries within the selected query set are automatically used as a data source.
- Choosing specific queries: You can select one or multiple queries based on the needs of your workflow.

When setting up the alert conditions:

Apply a keyword filter (optional). You can choose one of the following filters:

- Any - searches for content containing at least one of the specified keywords, @mentions, or #hashtags. Technically speaking, it's an OR logical operation.
- All - searches for content containing all specified keywords, @mentions, or #hashtags. Technically speaking, it's an AND logical operation.
- None - excludes from the search all content that includes one or more of the specified keywords, @mentions, or #hashtags. Technically speaking, it's a NOR logical operation.

Set up the sentiment filter:

- All sentiment
- Positive only – when you're interested in monitoring, for example, potentially viral content
- Negative only – when you want to monitor, for example, potential PR crises

**Step 2 - Alert sensitivity**

Choose the alert sensitivity that best fits your workflow. There are three options:

- Smart detection
- Mentions per hour exceeding…
- All mentions

We describe them further below.

**Data preview and spike volume estimation**

To ensure you set up the spike alert correctly, we've implemented a preview tool that helps you predict how many spikes the alert is likely to detect and how many notifications you can expect.

Based on real data from the previous 7 days, we're previewing how many spikes the current alert setup would detect.

**Smart detection**

Our AI-powered algorithm calculates the number of mentions per hour that can be considered normal and then compares the actual number to this benchmark based on the queries and query sets you choose.

You can then select how sensitive your alert should be and whether you want to be notified about:

- Slight increase above normal
- High increase above normal
- Extreme increase above normal

**Mentions per hour exceeding…**

Get a notification every time the number of mentions per hour exceeds the chosen number of mentions.

**All mentions**

Get hourly notifications summing up all mentions that match your settings. You'll get a notification every time there's at least one mention in an hour window.

**Step 3 - Notifications**

The last step lets you choose who, how and how often should get notifications about spikes.

By pressing the Add user button, you can add people to the list of users to be notified and choose if they should be notified by email, in-product notification or both.

### Notification types

Email notifications are sent to the user's email connected to Emplifi (the one they're using to log in).

If you're not sure what the email address is, you can review it in Settings → Personal Settings → Social Identities.

The email notification includes two buttons that would take you to different parts of the Emplifi platform: Analytics (Review in Analytics) and Content (Open the mentions in Content).

When you're redirected to the corresponding module, the search bar is automatically prefilled with relevant inputs so that you can immediately focus on the actual spike.

Immediate in-product notifications redirect you to Analytics where you can analyze the spike.

If you miss an immediate in-product notification, you can still find it in the platform's Notifications Center. Access it by clicking your name in the platform's navigation panel. If you want to see the spike alert data in Analytics, click the notification you're interested in. You'll be automatically redirected to relevant data.

### Disabling spike notifications

There are two places in the Emplifi platform where you can set up spike alert notifications: in the platform Settings and in the settings of each alert.

You can disable in-product notifications about all spike alerts in the platform's Settings → Notifications in the Listening section. However, it is not possible to globally turn off email notifications about spike alerts to help prevent potential issues no notifications could cause.

If you wish to unsubscribe from in-product or email notifications for a specific alert, you can do so in the Spike alerts tab in the Listening settings. Click the alert for which you want to disable the notifications. Go to the Notifications tab and set up your preferences. In this case you can disable both notification types.

### How to Access Spike Data and Work With It

There are different ways to access and analyze the spike alert data:

- Directly by searching for a specific spike alert in the Listening section in Unified Analytics, legacy Analytics, or Content modules
- Directly by filtering up spike data in Community
- From an email or in-product notification, you can learn more above
- From the spike alert list in Listening settings

**Analytics**

In Unified Analytics → Listening → Crisis Management and legacy Analytics → Listening → Crisis Management, you can search for spike alerts in the search bar and select them as a data source.

Once selected, you'll get a table providing basic information about all spikes detected during the selected time range.

For more data about the spikes, review the widgets below the table.

If you wish to get details about one specific spike, you can navigate to its data by clicking the Focus button on the right side of the particular line.

After opening a particular spike, you can see its progress in detail. As the spikes usually do not have a clear beginning and ending, you can drag and drop their "edges" to analyze them in a full context and review what preceded and what followed.

**Community**

You can use specific spike alerts to filter Listening mentions in Community and react to critical conversations as they happen in real-time.

To use the filter, search for the Spike alerts - Listening filter in the right panel and select the relevant spike alert.

You can select as many spike alerts as you need. Once you do, hit the Apply button to confirm your choice. When your filter settings are ready, click the Filter button in the bottom part of the panel.

**Redirection from spike alerts table in Listening settings**

Another way of accessing data from a specific alert is through redirect buttons in Listening settings that would take you to Analytics or Content.

You can find these buttons in Emplifi Settings → Listening → Spike alerts. Hover on the spike alert you're interested in; the buttons will appear next to the alert name. The options are Open in Analytics and Open in Content. Pressing each will take you to its corresponding section in Analytics or Content.

### Terminology

- **Spike alert** is an automated alerting rule that monitors selected data sources (Listening data) and detects volume spikes based on defined keywords and sensitivity and notifies users about anomalies in the data.
- **Spike** is an anomaly in the number of Listening mentions.
- **Spike notification** is an in-product or email notification sent to users that provides them with basic information about the detected spike.
- **Spike alert sensitivity** is a basic input needed for the correct settings of a spike alert. It allows users to set up a threshold value for the number of mentions and notify them when the number changes in a way they define as significant.

---

## Unknown and Unidentified Profiles in Listening Analytics

Collecting listening mentions is always subject to the privacy policy of the social platforms. Technical limitations are put in place to protect users, influencing the way we collect and analyze listening data.

One of the effects is that sometimes it's impossible to display some profile information or even identify a profile.

Subsequently, this influences the information we show in the charts and how we calculate some of the metrics.

### Users who opt-out from sharing personal data become Unknown profiles in some of the Analytics charts

You might come across an unknown profile in your Influencers or Advocates chart. This means the user chose not to share information about their profile.

In such a case, we don't display the name and profile picture—you would see a placeholder image. Yet, we're still able to identify the profile's ID.

As long as we have the profile's ID, we can connect a listening mention to its author and include it in the metrics.

That's why the metrics Number of authors, Influencers, and Advocates remains unaffected. We're still able to:

- Include the profile in the metric Number of authors that informs about the number of profiles that mentioned a brand.
- Find out the number of followers a profile has. That's why you can find Unknown profiles on the Influencers list.
- Learn how many times a specific profile mentioned a brand so that you can find Unknown profiles among your Advocates list.

### Profiles we can't identify don't count in the metrics

When we can't identify a profile (technically speaking, we can't get its ID), it's impossible to connect a listening mention and its author.

It's possible that in Content and Community, you can still find the listening mentions by unidentified authors. Yet, they aren't taken into account in some metrics you'd find in Analytics. As long as we cannot connect a mention with a specific profile, the metrics could be misleading. Thus, the unidentified profiles aren't included in Top Authors table, nor the Number of authors metric.

When we can't identify a profile, when showing the content in Content and Community, instead of a profile's name, we display an Unknown profile.

The reasons why we can't identify a profile and get its ID could be the following:

- The profile was deleted.
- An Instagram profile has been switched to private.
- A Facebook user has disabled the sharing possibilities after we fetched the post.
- A listening mention was detected thanks to the Instagram hashtag search.

### Emplifi data package can help to identify profiles and include them in the metrics

We can identify profiles that have been previously added to our database. We call it Emplifi Data Package (for details, see [Listening Data Sources and Covered Content](https://docs.emplifi.io/platform/latest/home/listening-data-sources-available-coverage)).

The Emplifi data package would mostly affect the listening mentions coming via the Instagram hashtag search (see [Listening - Instagram Hashtag Search](https://docs.emplifi.io/platform/latest/home/listening-instagram-hashtag-search)). For the majority of the content, we wouldn't be able to identify the profile's ID. Yet, if it's in our data package, we can connect a listening mention to a specific profile. We can then both show profile information and include it in the metrics.

---

## Generate a Summary of a Listening Query (Query Summarization)

To analyze the results of your listening queries faster and easier, generate a summary of a listening query.

Summary generation is an AI-based feature. It condenses listening mentions into a human-readable format and provides you with an easy-to-understand and coherent summary of the most important highlights behind the data collected by the queries. You no longer need to piece together information from various graphs and tables. Using the digest generated from your queries, you can understand the audience's conversations faster and take prompt actions.

Generating a summary is supported for listening queries that collected at least 40 mentions during the time range selected on the board.

### Supported languages

You can generate a summary for listening queries from any language that is used in your listening query.

### Supported social media platforms

You can generate a summary for listening queries gathering mentions from the following platforms:

- Facebook
- Instagram
- Reddit
- TikTok
- X (formerly Twitter)
- YouTube

### Generate a summary of a listening query

Steps:

1. Go to Unified Analytics -> Listening.
2. Under Listening, click AI Query highlights.
3. Select a listening query to be analyzed.
4. (Optional) Adjust the time range for the analysis.
5. To narrow down the scope of listening mentions that will be processed, specify one or more filters:
   - The sentiment
   - The social media platform
   - The language of the summary
   - Other filtering criteria available under the Filter menu
6. Click Generate.

The listening mentions for the specified period get analyzed, and the summary topics are generated and displayed.

If you find a certain summary topic especially useful and inspiring, you can immediately create a new listening query based on the original query but enhanced with keywords derived from the topic (see further in this article).

### Create a listening query with keyword suggestions from a summary topic

If a certain topic in the generated summary seems particularly insightful, you can create a new listening query based on the original query but enriched with the keywords from the topic.

The new listening query will inherit all the properties of the original query but in addition will contain keyword suggestions derived from the summary topic.

Steps:

1. Generate a summary of a listening query as described earlier in this article.
2. Choose the topic that you want to use for keyword suggestions, and click Create query from this topic.
3. The query wizard opens. In the keyword field, you can see the keywords used in the original query and the keywords suggested based on the topic.
4. The segment with the suggested keywords is appended to the segment with the original keywords with the `AND` operator. The keywords within the segment are separated with the `OR` operator.
5. Review the suggested keywords and edit them, if needed.
6. Go through the rest of the wizard and edit the listening query, if needed. For more information about the individual properties of a listening query, see [Listening - General Guide](https://docs.emplifi.io/platform/latest/home/listening-general-guide).
7. Once done, click Finish. The listening wizard closes, and the listening query is created. You are redirected to the Listening section under Settings.

---

## Get Nuanced Actionable Insights into Your Listening Queries

To get a more authentic picture and enable more nuanced, actionable insights into your Listening queries, use the Topics aggregated view in the Analytics module.

The Topics view allows you to dive deep into your customer conversations. The algorithm behind the Topics view dissects sentences to understand what is actually being said. As the result, the Topics view shows the most trending topics, their sentiments, and descriptive keywords that are most frequently associated with them.

For example, if you are a fashion retailer trying to understand evolving consumer preferences for a seasonal clothing line, categorizing mentions under broader topics like `winter collection` or `summer trends` may not be sufficient. The Topics view can pick up dynamic topics like `sustainable fabrics` or `retro designs` and the sentiment tied to each. This helps you pivot or double-down on certain aspects of the collection based on real-time feedback and launch a successful campaign that heavily converts into a boost in sales.

Steps:

1. Go to Analytics.
2. Click Listening on the left panel.
3. In the search bar, select the listening queries, and click Analyze. The available views are displayed.
4. Click Aggregated overview.
5. Scroll down to the Topics view.
6. Hover over a topic to see the link that opens the topic in the Content module.
7. Hover over a topic's sentiment to see the distribution of individual mentions' sentiments explaining the calculation behind it.
8. Hover over a keyword to see detailed information about it and the link that opens it in the Content module.

---

## Discover What Is Being Discussed in Listening Mentions

To discover what is being discussed in the listening mentions gathered by your Listening queries, use the Top Themes and Interests aggregated views in the Analytics module.

### Themes vs. interests

Both themes and interests show what is being discussed in the listening mentions. Themes are more specific than interests.

You can think of the themes as particular things that can be generalized and grouped into interests; and you can think of interests as rather general areas that can be specified by themes in more detail.

Themes and interests are detected from the text of the listening mentions using a machine learning-based system. The system can predict up to 10,000 different themes and 320 different interests from advertising and sustainability to justice and weather.

One listening mention can contain multiple themes and multiple interests.

### Supported languages

The themes support the following languages (the languages in bold are also supported by the interests):

- Chinese (Simplified)
- Czech
- Dutch
- English
- French
- German
- Japanese
- Polish
- Portuguese
- Russian
- Spanish
- Thai

The interests support the following languages (the languages in bold are also supported by the themes):

- Arabic
- Czech
- English
- French
- German
- Indonesian
- Korean
- Portuguese
- Russian
- Spanish

### Review the themes and interest in your listening mentions

Steps:

1. Go to Analytics.
2. Click Listening on the left panel.
3. In the search bar, select the listening queries, and click Analyze. The available views are displayed.
4. Click Aggregated overview.
5. Scroll down to the Top themes view.
6. Hover over a theme to see the number of mentions that contain this theme and the link that opens it in the Content module.
7. Scroll down more to the Interests view.
8. Hover over an interest to see the link that opens the topic in the Content module.
