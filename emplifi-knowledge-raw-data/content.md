# Content

The Content Hub helps you analyze your own and competitor social media, ad performance, save assets from past posts for future campaigns, upload assets to your Emplifi account, collaboratively build content collections, and discover new content inspiration.

The Content Hub is divided into the following sections:

**Feed** — Quickly find and analyze the organic and promoted content produced by the private and public profiles connected to your account.

[https://vimeo.com/763441680/cdc7e91bb7?share=copy](https://vimeo.com/763441680/cdc7e91bb7?share=copy)

**Inspiration** — Gain inspiration from our extensive database of content from Facebook, Instagram, Youtube, and X (formerly Twitter).

**Ads** — Analyze the performance of your ads and campaigns from Meta, TikTok, and X (formerly Twitter).

**Listening** — Provide context to your listening mentions by finding their associated content.

**Collections** — Create collections using your favorite assets from within Content Hub or your own storage, so you can share the content internally or through Emplifi Publisher.

---

## Instagram Reels in Organic Analytics

As a part of organic analytics offering Reels are now presented in:

- Content - Feed
- Dashboard: Organic flexible widgets
- Analytics: Campaign view (new)
- Public API

You can find Reels data by filtering the content by Media type.

### Reels Metrics

The metrics that are available for Reels content vary depending on the profile connection type (owned or public).

#### Public profiles

- Interactions
- Interactions per 1k
- Likes count
- Comments count

#### Owned profiles

- Interactions
- Interactions per 1k
- Likes count
- Comments count
- Saves count
- Shares count
- Engagements (Likes + Comments + Saves + Shares)
- Reach
- Reach engagement rate
- Content impressions
- Initial video views

**Disclaimer:** This metric is in development by Meta.

Available in [Content](https://docs.emplifi.io/platform/latest/home/content) hub, Emplifi [APIs](https://api.emplifi.io/), and [Custom Metrics](https://docs.emplifi.io/platform/latest/home/custom-metrics).

Insights only (no public data)

This metric counts only the first-time (initial) plays of a reel including plays of 1 millisecond or more.

Comments will be displayed in the relevant detail section. Sentiment is available for Owned Profiles (in accordance with the specific pricing and packaging of the Account).

See more details on the calculation of Instagram engagements and reach engagement rate in [Engagements, Reach Engagement Rate, and Impressions Engagement Rate](https://docs.emplifi.io/platform/latest/home/engagements-reach-engagement-rate-and-impressions).

### FAQ

**Q1. Do we have data for Reels that are not shared to Instagram Feed?**

Yes.

**Q2. Where can I find the Reels Plays metric?**

Plays metric is integrated under [Video views (post)](https://docs.emplifi.io/platform/latest/home/video-views-post) and [Content impressions](https://docs.emplifi.io/platform/latest/home/content-impressions).

In short, for the time being, Instagram Reels are counted as follows:

- in video views = plays + replays

---

## Facebook Reels

Facebook reels for private profile data are available across the Emplifi platform components:

- [Dashboard](https://docs.emplifi.io/platform/latest/home/dashboard)
- [Legacy Analytics](https://docs.emplifi.io/platform/latest/home/legacy-analytics) Campaign view
- [Content](https://docs.emplifi.io/platform/latest/home/content) hub
- Labeling and filters (see [Set Up Labels](https://docs.emplifi.io/platform/latest/home/how-to-set-up-labels) and [Set Up Filters in Community Feeds](https://docs.emplifi.io/platform/latest/home/how-to-set-up-filters-in-community-feeds))
- [API](https://api.emplifi.io/)

Facebook reels are only available for private profiles and do not cover public data.

Facebook's Video Views metric implementation in Facebook Reels may return an empty value. We flagged the issue with Meta and are in touch with them in an effort to resolve it. If you believe that you are affected by this issue, contact [Emplifi Support](mailto:support@emplifi.io).

Facebook reels use just one video views metric. No other data is included and FB reels do not support the organic/boosted split. This is down to API limitations. As a result, we are using the blue_reels_play_count mapped into Emplifi's video_views metric.

### Facebook reels in Dashboard

You can create a reels-based media type filter for your data visualizations in your dashboards.

The following flexible, post-level widgets support Facebook reels data:

- [Average % video viewed](https://docs.emplifi.io/platform/latest/home/average-video-viewed)
- [Average interactions per post](https://docs.emplifi.io/platform/latest/home/average-interactions-per-post)
- [Average reach per content piece](https://docs.emplifi.io/platform/latest/home/average-reach-per-piece-of-content)
- [Avg time watched](https://docs.emplifi.io/platform/latest/home/avg-time-watched)
- [Content widget](https://docs.emplifi.io/platform/latest/home/content-widget)
- [Content impressions](https://docs.emplifi.io/platform/latest/home/content-impressions) — Video views are used as a metric for TikTok content and Instagram reels. Facebook reels generate both the impression and the video views data.
- [Distribution of interactions](https://docs.emplifi.io/platform/latest/home/distribution-of-interactions)
- [Distribution of page post types](https://docs.emplifi.io/platform/latest/home/distribution-of-page-post-types)
- [Distribution of reactions](https://docs.emplifi.io/platform/latest/home/distribution-of-reactions)
- [Engagement rate](https://docs.emplifi.io/platform/latest/home/engagement-rate)
- [Engagements (post)](https://docs.emplifi.io/platform/latest/home/engagements-post)
- [Impressions engagement rate (post)](https://docs.emplifi.io/platform/latest/home/impressions-engagement-rate-post)
- [Interactions (post)](https://docs.emplifi.io/platform/latest/home/interactions-post)
- [Interactions per 1k fans](https://docs.emplifi.io/platform/latest/home/interactions-per-1k-fans)
- [Most engaging post types](https://docs.emplifi.io/platform/latest/home/most-engaging-post-types)
- [Number of posts](https://docs.emplifi.io/platform/latest/home/number-of-posts)
- [Reach engagement rate (post)](https://docs.emplifi.io/platform/latest/home/reach-engagement-rate-post)
- [Reactions](https://docs.emplifi.io/platform/latest/home/reactions)
- [Sentiment of comments](https://docs.emplifi.io/platform/latest/home/sentiment-of-comments)
- [Share of interactions by PPD](https://docs.emplifi.io/platform/latest/home/share-of-interactions-by-ppd)
- [Share of posts by PPD](https://docs.emplifi.io/platform/latest/home/share-of-posts-by-ppd)
- [Unique video views](https://docs.emplifi.io/platform/latest/home/unique-video-views)
- [View time (post)](https://docs.emplifi.io/platform/latest/home/view-time-post)

### Facebook reels in Content Hub

Facebook reels display in Content Hub as any other type of content. That means that you can create a Facebook reels based filter. For Instagram reels, see [Instagram Reels in Organic Analytics](https://docs.emplifi.io/platform/latest/home/instagram-reels-in-organic-analytics).

### Facebook reels in the Analytics's Campaign view

#### Facebook-specific template

In the Facebook template, reels send data to the following charts:

- Average reach
- Content by media (count as reel)
- Content by profile
- Content by sentiment
- Content by type (count as value=post)
- Content impressions
- Distribution of interactions
- Engagement rate
- Impressions by media type
- Interactions
- Interactions by media type
- Most engaging post types (engagement rate broken down by media type)
- Number of posts
- Number of comments
- Reactions
- Reactions in time
- Video views
- Video views in time

#### Cross-platform template

In the cross-platform template, Facebook reels are sending data to the following charts:

- Content by platform
- Content by sentiment
- Content impressions
- Content impressions by platform
- Content impressions time by platform
- Content in time by platform
- Content in time by Sentiment
- Engagement rate
- Interactions
- Interactions by platforms
- Interactions in time
- Number of comments
- Number of posts
- Video views

### Facebook reels in public API

In the [Emplifi's API](https://api.emplifi.io/#introduction), you can filter Facebook reels by selecting media type filter to reels.

### Task automation - rule-based labeling

You can create task automation rules that include Facebook reels as a content type (see [How to Automate Labeling with Rules](https://docs.emplifi.io/wiki/pages/createpage.action?spaceKey=TRGT&title=How%20to%20Automate%20Labeling%20with%20Rules&linkCreation=true&fromPageId=181043209)).

---

## Ads in Content Hub

The Ads feed in Content allows you to easily analyze your ads and campaigns. The only thing that you need is to connect your Meta, TikTok, or X (formerly Twitter) ad account (see [Connecting and Managing Ad Accounts](https://docs.emplifi.io/platform/latest/home/ad-accounts)).

Emplifi supports the following ad accounts:

**Meta**
- Facebook
- Instagram
- Threads
- WhatsApp
- Messenger
- Audience network

**TikTok**
- TikTok
- Pangle
- TikTok Global App Bundle

**X (formerly Twitter)**
- X
- Publisher network

The search appears only after you connect at least one ad account (see [Connecting and Managing Ad Accounts](https://docs.emplifi.io/platform/latest/home/ad-accounts)), campaign, or content label (see [Set Up Labels](https://docs.emplifi.io/platform/latest/home/how-to-set-up-labels)).

### Next steps

In the following articles, you will learn how to build queries to analyze your ad content:

- [Build an Ads Content Query](https://docs.emplifi.io/platform/latest/home/build-an-ads-content-query)
- [Customize an Ads Content Query](https://docs.emplifi.io/platform/latest/home/customize-an-ads-content-query)
- [Ads Content Query Options](https://docs.emplifi.io/platform/latest/home/ads-content-query-options)
- [Work with Ad Cards](https://docs.emplifi.io/platform/latest/home/work-with-ad-cards)

---

## Sentiment Analysis in Content Hub

When planning your next great post, it's especially important to keep an eye on how your audiences are feeling about the content being shared. Without any manual effort from your side, Emplifi' algorithm detects and evaluates the sentiment of all comments. Then, it automatically assigns an overall sentiment to that post with one of seven different nuances, reaching from Strongly Positive Sentiment over Neutral to Strongly Negative Sentiment. Posts with less than four comments have No Sentiment assigned to it.

### How does sentiment analysis help me?

The proper analysis of your content's sentiment can help you answer questions such as:

- Why are people responding to this particular piece of content in a certain way?
- Is this a consistent reading across most of our content, or just an anomaly?
- What are these sentiment patterns telling us about our overall strategy?

In Emplifi Content Hub, you can easily drill down into one post's sentiment specifically, or get a view of sentiment on content and messaging over time. Automated sentiment, in particular, allows you to manage this process at scale, saving tons of time and energy. From Afrikaans to Yoruba, automated sentiment is detected for more than 100 languages – check out the full list of supported languages in [Languages Covered in Automated Sentiment Analysis](https://docs.emplifi.io/platform/latest/home/languages-covered-in-automated-sentiment-analysis).

To learn more about sentiment analysis (including automated sentiment) across the entire Emplifi platform, see [Using Sentiment Analysis to Understand Your Audience](https://docs.emplifi.io/platform/latest/home/use-sentiment-analysis-to-understand-your-audience).

### Filter sentiment in the main feed

In Content → Feed, you can filter search results based on overall sentiment values. This allows you to identify your most positive and most negative content in an instant.

**Steps:**

1. In Content → Feed, type sentiment in the search bar, or open the Search options panel to see all of the search options available to you.
2. Select which sentiment to filter for in your search results. For a description of each sentiment, open the search options and hover over the question mark in the Content sentiment section of the search options panel.
3. Click Search.

Once you generate content results based on your search, you can find the sentiment tag on the result itself. This tag sits between the Organic/Paid tag and the Content Grade tag (if your plan includes it.)

4. Click the post open the post details.
5. Click Comments to see a breakdown of sentiment for comments and additional analytics.
6. Sentiments marked with an A indicates that the sentiment was automatically detected. From this screen, you can also change the comment sentiment for an individual comment.
7. For a metrics-driven perspective, click the Post Insights tab.
8. Exports are available as XLXS and can be downloaded immediately.

### Filter sentiment in the listening feed

In Content → Listening, you can filter your listening mentions by their automated or manual sentiment values. This allows you to identify the most positive and negative content from your listening query in an instant.

This search method does not provide details of the mentions overall sentiment. Instead, results are based on the automated sentiment or manual sentiment of the mention. For overall sentiment results, use the search in Content → Feed.

**Steps:**

1. In Content → Listening, open Search options and add a query or query set to your search.
2. Select which sentiment to filter for in your search results. For a description of each sentiment, open the search options and hover over the question mark in the Content sentiment section of the search options panel.
3. Click Search.

Once you generate listening mentions based on your search, you can find the sentiment tag on the result itself. Results with an A on the sentiment indicate the sentiment was applied automatically by the Emplifi algorithm.

You can confirm the state of a sentiment by clicking the value it already has, or change the sentiment by clicking a new one. This removes the Automated label for the sentiment as well. Select multiple mentions to change the sentiment in bulk.

---

## Video Analysis in Emplifi

Video is an integral part of an engaging social media marketing strategy. Because creating videos can often be more labor and resource intensive, it's so important to have quick and accurate access to data insights on video performance to improve over time. In Emplifi, drive a smart and effective video strategy. Across the platform, it's easy to zoom in on video performance from a granular metrics' perspective or take a macro approach, seeing how the video format really fits into your wider social media success.

In this article, learn how and where you can support video strategy using the Emplifi platform.

### Video Analysis in Dashboard

Dashboards provide an easily digestible, easily sharable bird's eye view of content performance from a variety of perspectives. Once you set up a dashboard with your preferred widgets, visualizations, and time range, you're good to go. Make your dashboard truly useful by customizing your widgets' data sources, filtering, and breakdowns, slicing and dicing data without hassle.

For video performance analysis, the following is available for you in Dashboards:

- Video views (Facebook, Instagram, Twitter, YouTube)
- Media Views (Facebook, Instagram, Twitter, YouTube)
- Average % Video Watched (Facebook)
- Video Views (Facebook)
- Organic Video Views (Facebook)
- Paid Video Views (Facebook)
- 30-second Video Views (Facebook)
- Click to Play Video Rate (Facebook)
- Video Benchmark Score (Facebook)
- Number of New Videos (YouTube)
- Video Views (YouTube)
- Content (YouTube)

To learn more about what the widget will measure, hover over the question mark to see the tooltip. Here is the tooltip for the [flexible widget](https://www.socialbakers.com/blog/product-news-w28-2019) Video Videos.

### Video Analysis in Analytics

Charts in analytics help you understand the success of social media content from various perspectives, including engagement, promotion efficiency, content types, user activity, labels, and more.

In the following chart, you can see a head-to-head comparison the most engaging of post type on Facebook for the selected time range of the last 90 days.

In the following chart, you can see what the distribution of post type on Instagram is for the selected time range of the last 30 days.

In the following chart, you can see the Number of Views for a selected YouTube channel for the selected time range of the last 30 days. Many of the AI-powered content recommendations can be found here, and should be leveraged to make better content decisions, invest in top-quality content, and spot patterns in engagement to develop an evergreen content strategy.

In Performance Prediction, every organic post is automatically assigned a quality grade from A+ to D, evaluated based on the post's potential performance. In this instant, AI makes content analysis straightforward and user-friendly. To hone in on your best performing videos, simply filter the Posts in Last 72 Hours table by Type.

To get better at posting videos at the right time, check in on PrimeTime tab too. The content table can also be filtered by content type, allowing you to see just how much your actual posting time varied from PrimeTime recommendations and the subsequent missed impressions due to this variance.

In the specific video performance section of Insights for Facebook, a variety of metrics are ready for analysis, including:

- Video Audience Retention
- Total Time Watched
- Video Views
- Unique vs Repeat Views
- Auto-played vs Click to Play Views
- 10-second Views
- 10-second Unique vs Repeat Views
- 10-second Auto-played vs Click to Play Views
- 30-second Views
- 30-second Unique vs Repeat Views
- 30-second Unique vs Repeat Views

### Video Benchmarks

In the Video Benchmarks section of Analytics, you can benchmark the performance of your Facebook videos against Industries (20), Countries (9), and Regions (13). Learn more about how benchmark categories are defined in [Benchmarks - Industry Categories and Regions](https://docs.emplifi.io/platform/latest/home/benchmarks-industry-categories-and-regions).

Seeing your private video performance metrics in a larger context is key when building a competitive video strategy. By leveraging these unique insights, you can set more ambitious goals and rise above the pack to deliver the ROI you're counting on. Video benchmarks allow you to learn just how well your video performance stands out in the crowd against the following categories:

- **Video Views:** Total, 10-second, 30-second views
- **Viewers:** Unique View, 10-second Unique View, 30-second Unique View, Time Watched, Average Time Watched
- **View Type:** Repeated Views, Click to Play Views, Autoplay Views
- **Paid Video Score:** Paid Views, 10-second Paid Views, 30-second Paid Views

### Video Analysis in Content Hub

Content Hub is the go-to place for holistic content insights, easily accessible for quick and painless content analysis. Content Hub's unified content feed allows you to analyze all profiles (Owned, Public, and Influencer) that you've added to the platform. Filter content using the search bar or advanced search options. For video analysis, filter by items such as Platform, Media Type, and Facebook Video Types (Crosspost, Crosspostable, Live, Shared). Analyze videos with video-specific metrics such as: Video Reach & Views, View Time, and Video Retention. Tip: Create a "Saved search" to easily jump into the same analysis view time and again.

Looking at Video Reach & Views shows total video impressions and reach, and allows you to understand performance at each stage of the video view funnel: from 10-sec video views to completed views. Understand precisely how long people are watching and when they are jumping off. For videos that were posted from several Facebook profiles (so-called crosspostable videos), compare performance on the selected profile vs. performance across all profiles by switching from This Post to All Posts.

Diving into View Time gives you insights into the total view time, average time watched, and allows you to dig into countries or audience demographics. Again, for crosspostable Facebook videos, you can compare performance on the selected profile vs. performance across all profiles by switching from This Post to All Posts.

The third option, View Retention, is a great way to learn more about view patterns of Facebook Videos. With an interactive chart that evolves as you hit the video play button, identify what the audience is responding to, spot spikes, drops, and see exactly when people stop watching.

### Video Trends Tracking in Content Inspiration

Content Inspiration allows your teams to search and discover top-performing content across open social (FB, IG, TW, YT), using keywords and filters to get honed results. Having quick, comprehensive access to what's trending on social is key; and focusing analysis on what your specific audiences like is the golden ticket, allowing you to create content that will make fans and followers stop mid-scroll to engage with your message. It's easy to search Content Inspiration by Media Type: Video to discover top video content.

---

## Origin of Content

The following guide describes the Origin of Content filter across Emplifi's analytics modules.

When using the Origin of Content filter, you have the following options.

**Brand's content** — Original content produced by a social profile.

**User-generated content** — Content created by other users, including posts that tag your page, user posts on your Facebook wall, X posts that mention your profile, and Instagram mentions or media tags (@Mentions from stories from any social network are not included.) User-generated content from X is limited to profiles connected to your Emplifi account.

**All content** — Combination of brand's and user-generated content showing an overview of all social profile's content.

Brand's content is the default setting in all Emplifi platform modules. In other words, if you leave the Origin of Content untouched, only content created and published by your own profile or by the profile that you are monitoring will be analyzed.

For the purpose of this filter, the term user generated content is used generically and does not refer to our [UGC](https://docs.emplifi.io/platform/latest/home/ugc) module.

### Origin of Content in Unified Analytics

The Origin of Content filter is available in the Social Profile boards (see [Unified Analytics - List of Boards](https://docs.emplifi.io/platform/latest/home/unified-analytics-list-of-boards). Simply click the Filter control button.

### Origin of Content in Dashboard

When you are adding a [Dashboard](https://docs.emplifi.io/platform/latest/home/dashboard) widget, click Filters and apply the specific Origin of Content setting.

### Origin of Content in Content Hub

After you open the Search panel in the Feed section the Origin of Content filter is available with all of the options.

---

## Content Collections

Whenever you discover inspiring or interesting content, save it to a content collection. You can also share your collections with your team and also invite others to contribute to the collection so that you can organize and plan engaging content strategies together. Teamwork is built into the collections with the following features:

- Like or Dislike (vote) individual pieces of content.
- A place for Discussion (chat) specific to the collection.
- Schedule straight to Publisher.
- Live updates to the collection for real-time collaboration.

You can [Use AI to Rate the Quality of an Image](https://docs.emplifi.io/platform/latest/home/use-ai-to-rate-the-quality-of-an-image) before you publish it your socials.

You can [Asset Recognition in Content Collections](https://docs.emplifi.io/platform/latest/home/asset-recognition-in-content-collections) to manage and track campaign content across your socials.

By default, each user starts with a private collection that has the name "My first collection" and an introductory video to Collections.

### Create a Collection

You can create a new, empty collection from the Collections screen or when you find an interesting piece of content that you want to save. Whenever you create a new collection, by default only you have access (Private).

An account can have a maximum of 500 collections.

#### Create an Empty Collection

**Steps:**

1. Starting from the main navigation menu, click Content → Collections. The Collections list opens.
2. Click Create Collection. The New Collection window opens.
3. (Optional) Enable [AI Image Score](https://docs.emplifi.io/platform/latest/home/use-ai-to-rate-the-quality-of-an-image).
4. (Optional) Enable [Asset Recognition](https://docs.emplifi.io/platform/latest/home/asset-recognition-in-content-collections).
5. Give your collection a Name and Description.
6. Click Create Collection. A new, empty collection is created and opened.

#### Create a Collection from a Piece of Content

**Steps:**

1. Starting from the main navigation menu, click Content. The Content module opens.
2. Click Feed, Inspiration, Ads, or Listening and search for content.
3. On the tile for the piece of content you want to save, click the Save to Collection button.
4. The Save Content to Collection window opens.
5. Click Create Collection. An overlay opens.
6. (Optional) Enable [AI Image Score](https://docs.emplifi.io/platform/latest/home/use-ai-to-rate-the-quality-of-an-image).
7. (Optional) Enable [Asset Recognition](https://docs.emplifi.io/platform/latest/home/asset-recognition-in-content-collections).
8. Give your collection a Name and Description.
9. Click Create. The collection is created and the overlay closes. The newly created collection is automatically selected in the Save Content to Collection window.
10. (Optional) Depending on the type of content, choose between any combination of Photo, Video, Text, or Content Labels. Only the parts of the content selected will save to the collection.
11. Click Save. The content is saved to the collection.

### Add Content to a Collection

When you find interesting content, save it to a collection so you can find it later. Newly added items appear at the top of the collection. After 200 items, a new page is created within the collection. Your collection can have an unlimited number of pages.

#### Save Content to a Collection

**Steps:**

1. Starting from the main navigation menu, click Content. The Content module opens.
2. Click Feed, Inspiration, Ads, or Listening and search for content.
3. On the tile for the piece of content you want to save, click the Save to Collection button.
4. The Save Content to Collection window opens.
5. Select the collection to save the content to. You can select more than one collection.
6. (Optional) Depending on the type of content, choose between any combination of Photo, Video, Text, or Content Labels. Only the parts of the content selected will save to the collection.
7. Click Save. The content is saved to the collection.

You can also add content to a collection directly by clicking Upload when you are inside the collection.

### Share a Collection

You can share collections with specific users or with everyone in your account.

#### Change Access Settings for a Collection

**Steps:**

1. Starting from the main navigation menu, click Content → Collections. The Collections list opens.
2. Click on the tile for collection you want to share. The collection opens.
3. In the collection header menu, click the Share button.
4. The Share with others sidebar opens.
5. Select which Access setting to use for the collection.

**Private** — Only the creator of the collection can view and edit the collection. This is the default state for every new collection.

**Specific Users** — Only the selected users have access to the collection. You can choose whether the selected users Can edit or Can view the selected collection. Account admins always have full access to the collection. If Specific users is selected but there are no users added, only account admins and the collection creator can access the collection.

**Global** — Everyone in the account has access to the collection. Additionally, you can choose between the following permissions:

- **Everyone can view** — Everyone in the account can view the collection and vote on the content it contains, but only the collection creator and account admins can edit, share, or delete the collection.
- **Everyone can edit** — Everyone in the account can view, edit, share, and delete the collection.

6. Depending on the access setting you chose, click either Done, Share, or Share with Everyone. The access settings are applied, and the side bar closes.

Users with the [predefined Account Admin role](https://docs.emplifi.io/platform/latest/home/account-roles) have the permission to see and edit all shared collections. Because this is a predefined superuser role, it is not possible to modify this permission. If there are users who should not be able to see or edit every shared collection, then move them to a different account role. You can make a duplicate of the Account Admin role and assign the user to that instead. The duplicate role will not have the permission to view or edit every collection.

### Archive or Remove a Collection

You can archive collections that you don't have a use for anymore but aren't ready to delete. When you archive a collection, the collection is moved from the main collection list to the Archived collections section with all of its content. After you archive a collection, you can remove (delete) the collection.

#### Archive a Collection

**Steps:**

1. Starting from the main navigation menu, click Content → Collections. The Collections list opens.
2. Hover over a collection tile and click the ellipses menu (…). Alternatively, click the ellipses menu next to the name of the collection in the collection header menu when you are inside a collection. The context menu opens.
3. Click Archive. The collection is moved to the Archived collections section.

To restore a collection, go to your Archived collections, open the context menu for the content, and click Unarchive.

#### Remove a Collection

When you no longer need a collection and any of the content within the collection, you can remove it (delete). Only archived collections can be removed.

You cannot restore a removed collection. Be sure you want to delete the the collection. If in doubt, leave the collection archived, or save the content to another collection.

**Steps:**

1. Starting from the main navigation menu, click Content → Collections. The Collections list opens.
2. In the header menu, for the Show: selector, choose Archived Collections.
3. The list of archived collections opens.
4. Hover over a collection tile and click the ellipses menu (…). Alternatively, click the ellipses menu next to the name of the collection in the collection header menu when you are inside a collection. The context menu opens.
5. Click Remove. A confirmation window opens.
6. Click Remove again to confirm the deletion. The collection and all of its content is removed.

---

## Measure IG Collaboration Posts

With the right setup, you can measure Instagram collaboration metrics in Emplifi.

Emplifi gets the collaborator data from Instagram's managed content.

Using Instagram's API, we can retrieve the following details about collaboration posts:

- handles of collaborators
- performance metrics
- likes
- comments
- interactions.

The data for collaboration metrics is only available when the content is managed - your profiles must be authenticated within our system.

### Prerequisites

1. In the Emplifi platform, connect all relevant Instagram Profiles
2. Go to Settings.
3. Click Add profile and ensure that you connect owned profiles only.
4. Ensure that your collaborator enabled the Post to Other Instagram Accounts toggle. Before publishing, collaborators (e.g. influencers) must activate the toggle in Instagram to ensure the post appears on all relevant profiles. Only then we can capture collaboration posts from all involved accounts.

### Create aggregated collaboration insights

To get aggregate insights (overall likes, impressions, etc.) for a campaign with a collaborator, you need to tag the posts that you are collaborating on. Then you will base your reporting on the content label.

When one influencer publishes one post in collaboration with 5 of your profiles (for example, in a one profile-per-country scenario), each post will be analyzed as individual content in Emplifi using our own metrics. To get aggregated analysis, use a specific content label and then use that label in your reporting.

You can apply labels manually or automate the process. For more information see:

- [Set Up Labels](https://docs.emplifi.io/platform/latest/home/how-to-set-up-labels)
- [Automate Labeling with Rules](https://docs.emplifi.io/platform/latest/home/how-to-automate-labeling-with-rules)

### Known limitations

**public profiles** — If the collaboration involves public profiles (not connected to Emplifi), we can still retrieve the post, but we will not be able to detect that it is a collaboration post. Consequently, only basic public metrics (for example, comments and likes) will be available.

**default toggle setting** — By default, the Instagram's Post to Other Accounts toggle is turned off. Ensure that all participating collaborators turn this option on; otherwise, analytics data collection will remain limited.

---

## Export and Schedule a Content Hub Report

You can easily export and share Content hub reports in multiple formats. You can do it manually at any given moment or you can automate your boards distribution with the scheduling feature.

This article describes available sharing options:

- create a one-off PDF report
- export an XLSX file for additional analysis
- email the report (in a PDF format)
- create a schedule to automatically generate a PDF reports and send it to the interested parties
- share a URL link

### Create a one-off PDF or XLSX file

To quickly share a board at any given moment, you can simply export it in the PDF format or export data as an XLSX file.

A PDF file is great for general sharing your board with a wider audience while you can use data from XLSX exports for further analysis.

### Schedule the report

When scheduling a report, you have the following options:

- The format of the file to email
- The recipient addresses
- **Frequency**
  - Daily
  - Weekly (select the day of the week)
  - Monthly (select the day of the month - first, last, or anything in between)
  - Quarterly (the first day of a calendar quarter at 7 am; for example, Jan 01, 2023, at 07:00)
- Time (defaults to 8 am)
- Time zone
- The name of the report

If you schedule a time comparison version of your board, a brand new time comparison report will be generated based on the scheduled frequency.

#### Modify or delete a scheduled report

To modify or delete a scheduled report:

1. Click your initials in the bottom left corner of the Emplifi platform.
2. Click Reports.
3. Find the report that you want to modify or delete and click Edit or Remove.
4. On the screen that opens, you can modify the following parameters:
   - format
   - addressee
   - personal note
   - frequency
   - name
5. Click Save.

You cannot change the scope (boards) of the scheduled report. If you want to modify the board that you scheduled, delete the scheduled report, modify the board and create a new schedule.

---

## Collaboration Posts Setup for Better Analytics

As a brand with one or many Instagram profiles, you often work with influencers on collaboration posts.

Such collaborations tend to increase reach, engagement, and provide the viral, grassroots quality to your content. Learn how to [Add Collaborators to your Instagram Post](https://docs.emplifi.io/platform/latest/home/add-collaborators-to-your-instagram-post).

In this article, you will learn how to set up collaboration workflows to ensure that you can:

- easily analyze the performance of collaboration posts
- manage the publishing process of collaboration posts

In the course of this article, the term 'creator' refers to the profile that creates collaboration content. The profile can belong to an influencer (that you collaborate with) or it can be one of your own profiles (for example, when you run parallel campaigns for two of your brands).

A 'collaborator' is you - the entity who works (collaborates) with influencers (creators) who create the content to promote you.

Typically, collaboration detection is only possible when the creator's profile is an owned profile with insights.

However, you can easily [Set Up Shared Insights with Influencers](https://docs.emplifi.io/platform/latest/home/how-to-set-up-shared-insights-in-emplifi-suite). After an influencer shares their insights with you, we will be able to detect and fully report all metrics coming from collaboration posts.

Collaboration posts are a content type that is implemented across all Emplifi analytics tools:

- Content hub
- Dashboard
- Unified analytics
- Public API

Collaboration posts are identified by an icon and display the collaborators' names and collaboration status.

Filters and dimensions remain only available for creators' posts.

### Configuration setups and options

Depending on the way the creator's (influencer's) profile is connected to Emplifi, you have the following options to access the analytics.

User-generated content is treated as public content in all Emplifi analytic tools. As a result, insights and collaboration post flags are not available.

**Scenario 1**

As a collaborator, analyzing posts made by a creator's profile that is connected as owned with insights will be treated as user-generated content, and the collaboration post flag will NOT be available.

Search the results for the specific creator's page to identify their collaboration posts.

**Scenario 2**

As a collaborator, analyzing posts made by a creator's profile that is connected as public will be treated as user-generated content, and the collaboration post flag will NOT be available…

…unless you [Set Up Shared Insights with Influencers](https://docs.emplifi.io/platform/latest/home/how-to-set-up-shared-insights-in-emplifi-suite) which will result in Scenario 3.

**Scenario 3**

A creator that has their profile connected as owned with insights has their posts treated as brand content, and the collaboration post flag will be available.

This is the recommended setup that allows you to see collaboration posts with all insights metrics and collaboration post flag.

A creator's profile should be connected with insights or shared insights - see [Set Up Shared Insights with Influencers](https://docs.emplifi.io/platform/latest/home/how-to-set-up-shared-insights-in-emplifi-suite).

### Collaboration posts analytics availability

#### Dashboard

**Content widget**

Use the Collaboration posts and profile filters to narrow down your analytics to collaboration posts from specific profiles.

#### Unified analytics

In Unified analytics, you can analyze Instagram collaboration posts in the Overview and Content performance boards using the following 'content type' widgets:

- Content by content type
- Most engaging content types
- Content by content type trend
- Shares by content type

#### Content hub

In Content hub, collaboration posts are identified by a specific icon and a count of collaborators.

Hover over the collaborators' count and review the status (accepted/pending) of the invite.

#### Public API

Collaboration posts are available as new content type.
