# Emplifi Platform -- Product Context Knowledge

> This file serves as persistent context for AI assistance. It documents the Emplifi platform,
> its product modules, cross-module relationships, the SOUL design system, and the Cortex AI layer
> being prototyped in this repository.
>
> **Sources:** [emplifi.io](https://emplifi.io/), [docs.emplifi.io](https://docs.emplifi.io/platform/latest/home/) (official documentation - extensively mined), [soul.emplifi.io](https://soul.emplifi.io/), [Emplifi Academy](https://emplifi.app.bigtincan.com/), [Live Product](https://app.emplifi.io/)

---

## 1. Platform Overview

**Emplifi** is a unified customer experience (CX) and social media marketing platform used by 20,000+ brands (Spotify, Cartier, Toyota, Heineken, etc.). It was formed by the merger/acquisition of multiple companies:

| Legacy Company | Became | Domain |
|----------------|--------|--------|
| **Socialbakers** | Social Marketing Cloud | Social media management, analytics, listening |
| **Astute** | Service Cloud | Customer care, case management, chatbots |
| **TurnTo** | Commerce Cloud (R&R) | Ratings & reviews, social commerce |
| **Pixlee** | Commerce Cloud (UGC) | User-generated content, visual commerce (runs on `pixlee.svc.emplifi.io`) |
| **KAWO** | Chinese Social Module | Chinese social network management (WeChat, Weibo, etc.) |

**Core value proposition:** Closing the "Customer Experience Gap" by unifying social media management, customer service, and social commerce into one interface.

The platform is organized into three clouds/pillars:

- **Social Marketing Cloud** -- content creation, publishing, analytics, listening, influencer management
- **Commerce Cloud** -- UGC, ratings & reviews, shoppable content, live advisor
- **Service Cloud** -- community engagement, case management, chatbots, live agents

**Emplifi Fuel** is the overarching unified platform layer and intelligence engine that ties all modules together into a single command center, providing a shared real-time view of customer interactions across marketing, commerce, and care. It powers AI features across the platform (generative AI, sentiment analysis, image recognition).

Emplifi was named a **Leader** in the Forrester Wave for social suite solutions.

---

## 2. Product Modules

### 2.0 Command Center (Emplifi Fuel)

The Fuel strategic Command Center is the landing page/home screen of the platform. When Fuel is activated, it becomes the default homepage. Guides users through organizational business objectives, recommended tactics, and actionable steps.

- **KPI Summaries** -- 4 widgets for the last 30 days: Number of followers, Total content, Engagements, Impressions; each shows data level (Profile-level or Post-level) and trend vs. previous period
- **Objectives & Tactics** -- highlights top strategic objectives and most frequently completed tactics; connects with live Platform data (posts, impressions, engagements); turns strategic goals into daily workflows; same objectives as in Unified Analytics > Objectives
- **Frequently visited** -- shortcuts to most commonly opened parts of the platform
- **Notifications panel** -- right-side panel with unread/historical Platform Notifications (configurable in Settings > Notifications)
- **Fuel Labels** -- categorization system for organizing Fuel objectives
- **Data source selector** -- choose which connected profiles to view

### 2.1 Dashboard

The analytical hub of the platform. Allows defining, creating, processing, and displaying data from social media activities using a single tool. Comes with pre-defined widgets and templates so analysis can start immediately after connecting social media accounts.

- **Dashboard wizard** -- create from templates (select one social media profile) or start from scratch (add widgets and configure manually)
- **700+ widgets** across social, paid, listening, care, bot, Live Commerce, UGC modules
- **Widget characteristics** -- each widget has: Platform reach (cross-platform/multi-platform/single), Organic/Boosted scope, Private/Public data, Post-level vs Profile-level aggregation, Ads-only flag
- **Widget visualization types** -- Value, Column, Pie, Line, Area, Table
- **Widget configuration** -- chart type, widget name, data source, filters, breakdown options, widget-specific options
- **Post-level vs Profile-level** -- Post-level = lifetime data from individual posts published during period, aggregated by publish date; Profile-level = data attributed to profile, aggregated by when engagement happened regardless of post date
- **Templates** -- pre-defined dashboards: "Care: Case Analysis", "Community: Labels & Sentiment", "Community: Team Performance", "LinkedIn Growth & Engagement"
- **Organization** -- "My Dashboards" (personal) and "Shared Dashboards" (team-visible)
- **Duplicate** -- duplicate dashboards to create variants (e.g., same layout with different date ranges)
- **Date range** -- global date range for all widgets; overrides individual widget settings
- **Timezone** -- determined by Localization preferences in account settings
- **Note:** Dashboard widgets are separate from Unified Analytics widgets

### 2.2 Unified Analytics

Cross-module analytics environment that aggregates data from across the entire platform into a single view. "Gain a 360° view of performance across all platforms." Transforms social data into actionable insights by aggregating social media, listening, UGC, VoC, and social customer care data.

- **Pre-loaded boards** with hundreds of ready-made data visualizations
- **Interactive widgets** -- drill-down, timeframe setting, cross-account/platform comparisons
- **DISCOVER data sources** (live product) -- see full board hierarchy below
- **AI features** -- "Generate charts" [EARLY ACCESS] (ask AI to recommend visualizations), "Search metrics and more" (ask AI for assistance), **Performance Prediction** for Facebook and Instagram (AI-based content optimization, grades A+ to D)
- **Organization** -- My boards, Shared with me, Professional services (pre-made demo/template boards like "Competitors Benchmarking", "Crisis Management", "KPI Scorecard", "VoC Aggregated Overview")
- **Saved views** -- persist specific board configurations with filters, shared across team
- **Custom Boards** -- hand-pick widgets to create custom analytical views
- **Transition from Legacy Analytics** -- Legacy Analytics discontinued; connected profiles, permissions, connections preserved; scheduled reports must be recreated; API unchanged
- **Objectives** -- goal tracking integrated into UA
- **Board URL format** -- boards have numeric IDs (e.g., `/ua/6173` for Care > Case management > Volume)
- **Board structure** -- each board can have tabs (e.g., Volume | Backlog | Case processing), a toolbar with profile/date/filter selectors, and multiple widget rows
- **Widget types** -- KPI cards (absolute number + % change period-over-period), trend line/bar charts (aggregated by day/week/month), contextual tip boxes
- Enables team collaboration across marketing, commerce, and care departments
- **Product owner:** Antongiulio Migliacci (Group Product Manager)

**DISCOVER Board Hierarchy (from live product):**

- **Social profiles** -- Data sources: OWNED SOCIAL PROFILES, PUBLIC PROFILES, PROFILE LABELS
  - **Cross-platform:** Profiles summary, Overview, Content performance
  - **Facebook:** Profiles summary, Profile insights (page likes, followers, impressions), Content performance, Public profiles (competitor benchmarking)
  - **Instagram (deepest analytics -- 8 boards):** Profiles summary, Overview, Content performance, Story engagement, Earned media, Public profiles, People insights (audience demographics), Performance prediction (AI-powered forecast)
  - **X:** Profiles summary, Overview, Content performance, Earned media, Public profiles
  - **YouTube:** Profiles summary, Overview, Video insights, Public profiles
  - **LinkedIn:** Profiles summary, Overview, Content performance
  - **Pinterest:** Profiles summary, Overview
  - **TikTok:** Profiles summary, Overview, Video insights
  - **Snapchat:** Overview (minimal support)
- **Paid:** Paid insight overview
- **Campaigns & labels:** Cross-platform overview + per-platform (Facebook, Instagram, X, YouTube, LinkedIn, Pinterest, TikTok, Snapchat)
- **Listening** -- Data sources: LISTENING QUERIES; Also monitors: Blogs, Forums, News (beyond social)
  - Aggregated overview, AI Query highlights (select a listening query + sentiment + platform + language to get AI analysis), Audience (author demographics & reach), Crisis Management (spike alerts), Key topics (keywords, emojis, hashtags), Platforms (per-platform metrics), Sentiment (across mentions), Volume (detailed breakdowns)
- **Care** -- Data source: AGENTS AND SUPERVISORS; "Boost your Care team's performance with advanced analytics"
  - Case management (tabs: Volume, Backlog, Case processing -- KPI cards: Created/Reopened/Resolved/Unresolved cases with % changes), Service level agreement, Agents performance
- **Bot:** Bot overview, Bot performance
- **Community** (single board)
- **Link in Bio:** Link in Bio Performance
- **Live Commerce (11 boards):** Executive summary, Network performance, Advisor performance, Operational performance, Appointments, Chat First, Pool Performance, Account overview, Store Performance, Call by URL, Call feedback
- **UGC:** Gallery interactions
- **Ratings & Reviews** (single board)
- **Knowledge** (single board)
- **Agent** (single board)

**Deep-dive details (from live product):**

- **Home page** -- personalized greeting ("Hi, Jan"); three action cards: "Generate charts" [EARLY ACCESS], "Create a board" [EARLY ACCESS], "Search metrics and more" (with AI assistance)
- **Saved views table** -- columns: Name, Board (path hierarchy e.g., "Social profiles / Cross-platform / Content performance"), Last edited, Creator; filterable by "Created by: Anyone"
- **Board examples** -- "Volume" (Care / Case management), "Profiles summary" (Social profiles / Cross-platform), "People insights" (Social profiles / Facebook / Owned profiles), "Profile vs. profile label", "Content performance", "Amelia's Team Metrics!"
- **Objectives page** -- grid of KPI objective cards, each showing: objective name, time period ("Last 30 Days"), metric value with change % (green ↑ or red ↓), metric name (Engagement rate, Content impressions, Interactions, Link clicks), target comparison ("Above X"), mini sparkline/bar chart with AVG line; "+ Create Objective" button; up to many objectives visible (scrollable grid)
- **"+ New" button** -- quick creation of boards from the sidebar
- **Care > Case management > Volume board** -- toolbar: profile selector ("emplifi_demo_shop"), "Select case fields" dropdown, "Last 30 Days", Day granularity, Filter; actions: Reset, "Save as new view", "Update view"; 4 KPI cards at top (Created/Reopened/Resolved/Unresolved with period comparison), contextual tip box explaining the metrics, "Created cases by status trend" line chart below
- **Professional services boards** -- pre-made boards: Color Tests (Cross-Platform/Instagram Overview), Content Overview, DEMO LATAM Airlines Group, Audience Analysis, Brand Awareness & Perception, Competitors Benchmarking, Crisis Management, Trend Analysis, Overview by Platform, Profile/Profile Label Performance, Organic & Paid performance, VoC Aggregated/Survey Comparison/Survey Deep Dive, KPI Scorecard, Leaderboard DEMO, Q1 Trend Analysis

### 2.3 Publisher

Content creation, scheduling, and publishing engine for social media. "Maximize performance, streamline collaboration, and enhance efficiency."

- **Multi-platform publishing** -- schedule posts across multiple profiles and platforms simultaneously (Facebook, Instagram, TikTok, YouTube, X, LinkedIn, Threads, Pinterest)
- **AI Composer** -- OpenAI-powered text generation; generates 4 suggestions at a time; Brand Voice feature (Enterprise: analyzes last 100 posts over 90 days); tone options: Educational/Energetic/Excited/Happy/Inspirational/Neutral/Optimistic/Professional/Recommended/Sad/Sales pitch; format: General/News; "Amplify emotions"/"Relax tone" quick tweaks; 30+ languages with auto-detection; human moderation mandatory
- **PrimeTime** -- analyzes user behavioral patterns to recommend optimal publish times (24h/48h/7-day windows, with visibility improvement percentages)
- **Link in Bio (Emplifi Link)** -- built-in microsite builder (similar to Linktree); custom URL, page title/bio, GDPR compliant, 90-day data retention; Global or Specific Users visibility; integrated into Publisher workflows; analytics available
- **Content types** -- Photos, videos, GIFs, documents (PPT/DOC/PDF for LinkedIn), links, carousel posts
- **Supported platforms** -- Instagram (Stories, Reels, product tags: 5 per photo, 20 per carousel), Facebook (Stories, Dark Posts), Threads, YouTube (custom thumbnails, playlists, age restrictions, subtitles, categories), TikTok, LinkedIn, Pinterest, X
- **Targeting** -- demographics (age, language, country, interests), feed targeting, geo-gating (Facebook)
- **Calendar views** -- Month, Week, Day views; drag-and-drop rescheduling; NOTES row for team annotations
- **Workflow statuses** -- Scheduled, Waiting for Approval, Rejected, Publishing Error, Assigned to You, Sent, Drafts
- **Approval workflows** -- Standard (simple: creator → approvers) vs Flexible (multi-stage: roles = Content Creator, Page Admin, Client/External); configurable in Settings
- **Emergency Stop Publishing** -- Account Admin action converts all posts scheduled in next 24h to drafts; requires security phrase; irreversible
- **Generate Post ID** (Facebook) -- pre-generate post link for ad campaigns before publishing
- **Link Shortener** -- Bit.ly integration (enabled by default); clicks tracked in Emplifi analytics
- **Mobile Suite** -- publish from mobile browser to FB, IG, X, LinkedIn; upload from cloud or device
- **Sub-features** -- Instagram grid preview, Link in Bio (microsite builder), Dark Posts (Facebook), Preset Templates
- **Industry-specific value** -- publisher value positioning varies by industry (restaurants, retail, etc.)
- **Product owner:** Michal Kadak (Group Product Manager)

**Publisher Sidebar Navigation (complete):**

1. **Calendar** -- Month/Week/Day views; main publishing overview
2. **Instagram grid** -- visual grid planner
3. **Link in Bio** -- landing page builder
4. *(separator)*
5. **Scheduled** -- upcoming scheduled posts
6. **Waiting for Approval** -- posts in approval pipeline (connects to Settings > Approval flows)
7. **Rejected** -- posts rejected during approval
8. **Publishing Error** -- failed publish attempts
9. **Assigned to You** -- posts assigned to the current user
10. *(separator)*
11. **Sent** -- published post history
12. **Dark Posts** -- Facebook dark/unpublished posts
13. *(separator)*
14. **Drafts** -- draft posts
15. **Preset Templates** -- reusable post templates
16. *(separator)*
17. **+ Create post** -- new post creation action

**Deep-dive details (from live product):**

- **Calendar Month view** -- shows date grid (Mon-Sun, week starts Monday); posts appear as platform-colored badges (blue = FB, pink = IG, etc.); "Draft" yellow badges with count (e.g., "12 Drafts", "8 Drafts"); multi-day colored spans (blue/pink horizontal bars) for campaigns or date ranges; today highlighted with blue circle; NOTES row visible; header: "Calendar | Today | < > nav | date range | Month/Week/Day | Filter | + Create post"
- **Instagram Grid** -- visual grid planner that previews how posts will appear on an Instagram profile feed; select a profile and target date (current or future); "Show posts waiting for approval" toggle
- **Link in Bio** -- landing page builder (similar to Linktree); each page has brand logo, name, description, shareable link ("Copy link"); pages can be Global or profile-specific; "+ Create a page" action
- **Scheduled view** -- list of upcoming posts with filters: Platform icons (FB, IG, X, LinkedIn, Pinterest, YouTube, TikTok, Threads), Status circles, Advanced filters (Labels, Content Type, Media Type, Assignment, Mentioned user in internal chat, Created by); "Stop publishing" action; two tabs "Scheduled" vs. "Scheduled on Facebook"; "Default view" option
- **Sent view** -- published post history with the same filter structure; each post shows assigned user avatar, social media post ID, "No Status" default post-publish status dropdown
- **Post cards** -- show profile name/handle, date/time, content type badge (e.g., "Stories", "DRAFT"), content preview, media thumbnails; "Publishing Notes" are separate from the actual caption; collaboration indicators (message count, team count); status dropdown ("In progress", "No Status")
- **Stories flow** -- manual "Confirm: Stories Published" action for Stories content; warnings when scheduled time has passed
- **Approval workflow connection** -- "Waiting for Approval" posts flow through multi-step approval pipelines defined in Settings > Approval flows; rejected posts appear in "Rejected" section

### 2.4 Community

Unified inbox for **social media and review channels** -- streamlines communication for both social engagement and review response management.

- **Channels** -- Facebook, Instagram, X, LinkedIn (company pages only), YouTube, TikTok, Google Business, WhatsApp (individual chats only, no group chats/communities)
- **Scale** -- handles 10,000+ messages in the inbox
- **Preset feeds** -- "All incoming", "Assigned to you", "Mentioned you", "For approval", "Sent", "Publishing problems" + custom Global feeds (up to 30 per account) and My feeds (up to 15 per user)
- **AI features** -- automated prioritization, sorting, sentiment analysis (5 emoji levels), **AI Reply Assistant** (Rephrase, Make longer, Make longer & add context, Make shorter, Simplify, Change tone: Empathetic/Friendly/Persuasive/Professional, Translate to; 30+ languages; human moderation required)
- **Priority Score** -- ML-trained on historical Community user actions: 81-100 Urgent (from hidden/banned/deleted), 51-80 High (from replies), 21-50 Medium (from likes), 0-20 Low (no action); 90+ languages; not available for DMs
- **Listening integration** -- messages from Listening appear directly in Community (tagged as "Listening - Comment"); Spike Alert filter available
- **Workflow** -- answer templates (macros), user role assignment, task assignments, "Mark as Done", collision detection
- **Sort options** -- Date, Priority, Number of comments, Number of followers (X only), Engagement rate, Number of likes
- **Filters** -- Platform, Sentiment, Status, Message type, Chatter (Mentions/GIF/Emoji/Hashtag), Priority, Media type, Date/time range, "Show done messages" toggle (global setting)
- **Search** -- scoped to current feed; operators: AND, OR, NOT/-, "exact phrase", * (wildcard), () for precedence; case-insensitive; UPPERCASE for operators
- **Multi-selection & bulk operations** -- select up to 50 items at once; apply sentiment, labels, assignments, notes, status changes in bulk
- **Escalation to Care** -- manual or automatic (via rules/flow automations); escalation locks message in Community until resolved in Care; status mapping: New/Open/Pending/On hold = locked; Done (after grace period)/Spam/Deleted = unlocked
- **Translations** -- 84 languages, 827 translation pairs; disabled for messages >3,000 characters; user-level setting; shared with Care
- **Salesforce integration** -- ONE-WAY only (create Salesforce case/lead from Community); token-based; agent name/email mapping
- **Export** -- XLSX format; max 10,000 messages recommended; up to 500 comments/DMs per message; scheduled email delivery
- **Data retention** -- 90 days of historical data across all platforms
- **Edit sent reply** -- only for Facebook comments and Google Business reviews; not if part of Care case, deleted, or >90 days old
- **Direct Conversation vs Direct Message** -- DC = full thread (technically endless); DM = single message in a DC; feeds work with conversations
- **Reporting** -- dashboard templates: Labels & Sentiment, Team Performance, Community Performance; business hours for accurate response time metrics; listening mentions NOT included in Community widget data
- **Product owner:** Petr Landsman (Sr. Product Manager)

**Deep-dive details (from live product):**

- **Message count** -- "51 out of 10000+" format; pagination through message set
- **Sorting** -- "Sort by: Highest priority" dropdown, plus refresh/sync icon
- **Action bar per message** -- Reply, Like, Repost, Profile view, Team collaboration, Assign, Assign special, "Mark as Done" (green), "..." more options; brand logo icon at start
- **Custom Global feeds** -- configurable named feeds beyond built-in ones (e.g., "Volantis DMs and C... (36)", "Complaint related... (0)", "SC TEST (67)", "Comments & posts (33)", "DMs (15)", "DMs (escalated to c... (18)", "Listening - travel int... (990)")
- **"active only" toggle** in filter panel; OFF toggle at top (keyboard shortcuts or display mode)
- **Platform filter icons** -- FB, IG, X, LinkedIn, YouTube, TikTok, WhatsApp, plus one additional icon
- **Sentiment filter** -- 5 emoji levels plus a hidden/blocked icon (6 total sentiment states)
- **Status filter** -- 5 colored circle indicators
- **Community features** and **Reports** sections in sidebar (expandable)
- **Agent status** -- "Status: Offline" at bottom left; agents toggle Online/Offline availability
- **Message metadata per message** -- author name + follower count (e.g., "2k"), date/time, source type badge ("Listening - Comment" in blue), priority badge ("URGENT" in red), platform reference ("commented to [Platform] [Profile]"), video/media thumbnails inline
- **Chatter filter types** -- Mentions only, GIF/GIF only, Emoji only, Hashtag only -- filters by message content characteristics

### 2.5 Care

Comprehensive case management for escalated customer interactions (Service Cloud). "Provide timely support, resolve issues quickly, and create meaningful connections."

- **Scale** -- 6,998+ cases in a typical inbox
- **Three-panel layout** -- left: case list with search/filter, middle: conversation thread, right: case details panel
- **Case aggregation** -- all messages between an individual customer and each owned profile are grouped into one case; one open case per customer per profile at any time; unlimited data retention (unless deleted)
- **Case statuses** -- New, Open, Pending, On hold, Done, Spam; auto-transitions: New→Open on assignment, Pending→Open on customer reply, Done→grace period
- **Grace period** -- default 5 days (configurable in Settings > Care > Workflows); customer reply reopens case; after period, new messages create new cases; Spam = immediate close, no grace period
- **Agent capacity** -- default max 5 cases per agent (configurable); display: x/y format; auto-assignment stops at max; manual assignment still allowed
- **Skills system** -- assigned to users/groups for auto-assignment and workload distribution; group membership updates skills automatically
- **Case fields** -- types: Single-select, Multi-select, Text, Number (9 digits), Date; visibility: Global (editable), Read-only (metadata), Hidden (automation only); "Recommended" fields prompt when marking Done
- **Case management** -- case numbers (#9463 etc.), response time monitoring, watcher assignments; last 500 messages visible per DM conversation
- **AI Reply Assistant** -- same as Community: Rephrase, Make longer, Make longer & add context, Make shorter, Simplify, Change tone, Translate to; requires assignment to case
- **"Summarize case"** -- AI-powered case summarization feature
- **Public + private messages** -- manages both without losing continuity across channels
- **Case details panel** -- tabs: Case, Customer, History, Salesforce; ASSIGNEE with assign/unassign; custom fields per customer; CSAT score; sentiment (5 levels)
- **SLA system** -- configurable SLA policies with conditions (message text, channel, platform, sentiment, language); milestones per priority: Time to assign, First response time, Next response time, Total resolution time; format: "1d 12h 30m"; breach notifications to agent + supervisors; policies evaluated in order, first match assigned permanently
- **SLA Milestone indicators** -- red dot = overdue, orange = approaching, blue = info; visible in case header and detail panel
- **Custom fields** -- per-brand fields (e.g., "Telefono - Arajet", "Nombre - Arajet", "Case Reason - Arajet" with dropdown)
- **Proactive engagement** -- enables marketing teams and customer-facing departments to proactively connect
- **Salesforce integration** -- BI-DIRECTIONAL (unlike Community's one-way); case status sync (condition-based or bi-directional mapping); message propagation: sync (last 100 + ongoing) or one-time copy; requires custom SocialPost object in Salesforce
- **Other integrations** -- Zendesk, Microsoft Dynamics
- **Actions** -- "Assign me to this case", "Add note" (internal notes), "Mark as Done" dropdown
- **Cross-module case sources** -- cases can originate from Community (escalated messages), Bot (escalated conversations), AND Listening (listening mentions tagged as "Listening - Comment")
- Handles the "second tier" of customer service after Community's front-line engagement
- **Product owner:** Giovanni Romano (Director of Product)

**Left Panel -- Case Inbox (from live product):**

- **Search bar** -- "Search names, m..." for finding specific cases
- **Built-in inbox tabs** with counts:
  - Inbox (999+), New cases (999+), My open (1), My pending (0), My on hold (0), Done (999+), My mentions (2), Spam (11)
- **Custom VIEWS** -- user-created segment views with case counts:
  - Examples: "México", "Cancelaciones Arajet (4)", "Modificaciones Arajet (3)", "New view (66)"
  - Creates focused workspaces for specific markets, issue types, or workflows
- **Case card** shows: case number, OPEN badge, green sentiment indicator, platform icon (X), author name with follower count (e.g., "2k"), content preview, date/time, SLA countdown (red when overdue)
- **Counter** -- "6998 CASES SHOWN"
- **Bottom sections** -- "Care features" (expandable), "Reports" (arrow), **"Status: Offline"** (agent online/offline status)

**Middle Panel -- Conversation Thread:**

- Case header: "#9463 OPEN | Listening" | "First response within -134 d 13 h" | MEDIUM priority badge | "Mark as Done" dropdown | "..."
- Date dividers between messages
- Message source tag: "Listening - Comment · Grok · 19:58"
- **"Summarize case"** sparkle icon
- Assignment gate: "Another person has been assigned to the case. To respond, you need to be assigned instead." → "Assign me" (blue) + "Add note"

**Right Panel -- Case Details:**

- Customer header: name, avatar, handle (@grok16), CSAT button
- **4 tabs:** Case | Customer | History | Salesforce
- **Case tab:** ASSIGNEE (unassign action, user dropdown), CASE INFO with CSAT label, Priority dropdown (Medium), Sentiment (5 emoji levels), custom text fields, custom dropdown fields
- **MILESTONES:** red dot = overdue, orange = approaching, blue = info; "Mark as Done due", "First response due", "Assigned at", "Case created at"

### 2.6 Content (Content Hub)

Content discovery, analysis, and collaboration hub. "Discover the best content in your all-in-one hub." Organized into four sections plus Collections:

**Content Hub Sidebar Navigation:**
1. **Feed** -- analyze organic and promoted content from connected profiles
2. **Inspiration** -- browse content from Facebook, Instagram, YouTube, X for ideas
3. **Ads** -- analyze ad/campaign performance
4. **Listening** -- find content associated with listening mentions
5. **Collections** -- organize assets into themed boards

**Feed:**
- Search bar with "Search options" for advanced filtering
- **"My searches"** -- saved search queries (top-right)
- **Published data by default** -- info banner: "You're viewing published data only. By default, we now show data only for published Facebook posts and listed YouTube videos for more precise analytics. To include unpublished or unlisted content, adjust Content visibility in your filter settings."
- **Predefined quick-start queries** -- "Most commented photo content", "Your most successful (A/A+) content", "Your most successful Instagram Stories", "Your most viewed videos"
- **Content visibility** toggle -- published-only vs. including unpublished/unlisted

**Ads (cross-module with Paid):**
- "Dive into what really makes an ad great" -- ad creative analysis and performance insights
- **Supported ad accounts:** Meta (Facebook, Instagram, Threads, WhatsApp, Messenger, Audience Network), TikTok (TikTok, Pangle, TikTok Global App Bundle), X (X, Publisher network)
- Search by **campaign, ad account name or ID, label, campaign objective, and platform**
- **Cross-module connection** -- "The searches you save in Paid will be available here as well" -- shared saved searches between Content > Ads and Paid module
- Build queries, customize, and work with individual ad cards
- **Currency selector** -- USD dropdown for monetary metrics
- **Performance date range** -- "Performance by: Last 30 days"
- **Feature pillars:** Get the big picture (budgets, best-performing ads), Investigate ads your way (ad placement, platform, status, interactions, spend), Generate granular reports (PDF exports, scheduled reports)

**Listening (cross-module with Listening):**
- "Listen to what's being said out there, everywhere" -- social listening meets content strategy
- **Search by query set or spike alert** -- driven by Listening queries, not free text; "Select query set or spike alert to start your search..."
- **Content labeling** -- use content labeling within listening results to understand keyword/topic impact
- **Dual view** -- "Easily switch between Content and Analytics views to get the most out of your social listening data"
- **Feature pillars:** Content, meet Listening (exclude irrelevant mentions, access specific results), Effortlessly smooth workflows (Content ↔ Analytics), Your central workspace (custom searches, collections, exports)
- Links to **"Listening settings"** from the header

**Collections:**
- **Content curation boards** -- like mood boards or campaign planning boards
- **"+ Create Collection"** action; "Show: All Collections", "Sort by: Updated Time"
- Each collection card shows: thumbnail image, name with item count (superscript), description/objective, last updated date, visibility badge, team avatars
- **Visibility: Global vs Private** -- Global collections are visible to the entire team, Private are personal
- **Campaign-oriented naming** -- e.g., "TikTok & Instagram Campaign", "Men's Fall Collection", "Contents for Christmas", "Instagram Shopping", "Evergreen Images", "Video Files"
- **Cross-source content** -- collections can contain content from Feed searches, Inspiration, Listening results
- **Team collaboration** -- shared collections show team member avatars (e.g., FT, CR, VB, AD +2)

Additional capabilities:
- **A/A+ content rating** -- AI-based quality scoring for content pieces (Performance Prediction: grades A+ to D)
- **Sentiment Analysis** -- 7 levels (Strongly Positive to Strongly Negative); 100+ languages; posts with <4 comments get "No Sentiment"; manual override per comment; bulk changes in Listening
- **Video Analysis** -- Video Benchmark Score (FB, IG, Twitter, YouTube), View Retention, 30-sec views, Click to Play rate; benchmarks across 20 industries, 9 countries, 13 regions
- **Content Collections** -- max 500 per account; unlimited items; Vote (like/dislike), discussion, schedule to Publisher; **AI Image Score**, **Asset Recognition** for campaign tracking; Archive before delete
- **Origin of Content** -- filter: Brand's content vs UGC vs All; UGC includes posts tagging page, user posts on FB wall, X mentions, IG mentions/media tags
- **IG Collaboration Posts** -- detect collaborator handles and metrics; Creator vs Collaborator distinction; Shared Insights for full data
- **Export** -- PDF, XLSX; schedulable Daily/Weekly/Monthly/Quarterly; cannot change scope after scheduling
- Competitor content analysis and competitive benchmarking
- Paid vs. Organic performance breakdown

**Inspiration deep-dive (from live product):**

- **Inspiration engine** -- indexes **21+ billion pieces of content** ("Get inspired by 21,109,347,942 pieces of content"); searchable by country, industry, media type; "Search options" for advanced filtering
- **"This Week's Top Trends"** -- trending interest topics with occurrence counts (e.g., "Politics: 177,174", "Photography: 184,560", "Writing: 89,567")
- **"Top Recommended Interests"** -- personalized recommendations based on monitored profiles (e.g., "Association football: 2,259", "American football: 1,629")
- **Date range selector** -- "Last 30 days" with export option at top level

### 2.7 UGC (User-Generated Content)

Platform for collecting, curating, and deploying authentic customer content (Commerce Cloud). Powered by **Pixlee** (acquired, runs on `pixlee.svc.emplifi.io` -- has its own distinct UI). "Build authentic, shoppable social proof that drives engagement across social channels."

- **Collection** -- gathers UGC from Instagram, Facebook, X, TikTok, YouTube, direct uploads, email submissions
- **Visual search** -- search and filter UGC by visual content, tags (e.g., "Beach"), and keywords
- **Curation workflow** -- content passes through statuses (e.g., COLLECTED) as it moves through the approval pipeline
- **AI curation** -- automated finding, tagging, and content moderation; image recognition for auto-tagging
- **Galleries** -- dynamic, on-brand galleries integrated with eCommerce platforms
- **Permissions** -- streamlined content rights management with filtering tools
- **Analytics** -- creator analytics, social engagement metrics
- **Impact** -- 5.5x more repeat visits, 140% increase in AOV, 1.6x increase in conversions
- **Tech** -- JavaScript widgets for embedding on client websites
- **UGC sub-sections** (Pixlee UI): Dashboard, Curation (Albums, Products, Tags, Comments, Checkout Comments, Reviews), Publish Center (Galleries/widgets, UGC Channels for landing pages), Analytics, Settings
- **UGC Analytics** -- engagement metrics (likes, comments, shares, reposts, favorites, submissions, reach by platform); Top Influencer (most followers), Top Evangelist (most submissions) with "Add To CRM"; location data (top cities with map)
- **UGC Settings** -- integrations: Facebook Ads, Salesforce Social Studio; multinational access control (Global Enterprise)
- **Albums** -- content organized into albums; Home Album, Create New Album, Manage Albums
- **Moderation** -- "Moderate New Content" workflow for approving collected UGC
- **Product linking** -- "Manage Products" ties UGC to product catalog
- **Influencers & Top Content** -- built-in influencer tracking within UGC module
- **Connected platforms** -- Facebook, Instagram, TikTok, Pinterest, X

### 2.8 Influencers

End-to-end influencer marketing management.

- **Discovery** -- 30M+ influencer profiles; Instagram (search by follower count, interest, country, language), YouTube (search by subscribers, interests, country, category, avg video length, posting frequency); browse top influencers
- **Influencer Score** -- proprietary rating system to compare performance; **fake follower detection**
- **Contacts CRM** -- required: first name + Instagram handle; CSV bulk import; social profiles, campaigns, automatic actions, tags, files, notes, Activity Feed, Creator Profile
- **Campaign management** -- goals: new content, conversions, brand awareness; parameters, products, links, compensation, assets, creators; add influencers before products; Creator Portal with UGC view, communication, analytics
- **ROI tracking** -- engagement rates, reach, conversions, revenue impact; Shared Insights setup for data-driven selection
- **Content amplification** -- embed influencer content on websites, apps, emails; clickable shoppable posts

**Deep-dive details (from live product):**

- **Left sidebar sections** -- Instagram (discovery), YouTube (discovery), Contacts (CRM), Campaigns (management), Collections (grouping)
- **Discovery UI** -- "Find the best [Instagram/YouTube] influencers for your business"; search by #hashtag, @username, or @mentions; "Discover Top Influencers" section sorted by Followers Count; Bookmark feature on influencer cards; each card shows rank number, avatar, platform badge, handle, country flags, bio
- **Search options** -- filter by specific country, language, and more
- **Campaigns** -- Creator Portal hosted on `pixlee.me` domain (e.g., `pixlee.me/emp30`); campaign table with: Campaign Name, shareable link, Start/End dates, Active influencers (X/Y format e.g., "4/16"), cost metrics ($), edit/delete per campaign; "Upload Logo" for campaign branding; "Create New Campaign" action

### 2.9 Listening

Social listening across digital conversations. "Turn insights into action with AI analysis, unified reporting, & full-platform integration."

- **Data sources** -- Facebook (800K+ pages), Instagram (9M+ Business/Creator accounts + hashtag search), X (all public content), YouTube (3M+ channels), Reddit (add-on, all public), TikTok (@mentions of owned accounts only, top 1000 most liked), Web (1M+ websites scanned daily, 10M+ posts indexed daily; covers News, Blogs, Forums)
- **Query system** -- keyword-based with operators: AND, OR, NEAR(1-6) proximity operator; max length: 4096 chars for X, 3900 for Web, unlimited for others
- **Monitoring scope** -- wide-range listening (all sources with language/country filtering), or specific social profiles; exclude profiles option
- **Data refresh** -- varies by source: X = real-time, Facebook = < 1 hour, YouTube = < 2 hours, TikTok = 24-48 hours; dynamic frequency based on query volume
- **Historical backfill** -- up to 365 days (except Reddit, TikTok, IG hashtags = no backfill)
- **Query statuses** -- Running, Processing, Scheduled, Regulated (hit annual limit), Suspended, Paused, Done
- **Query sets** -- organize queries by geography, brand, or topic; one query can be in multiple sets
- **Sensitive content filtering** -- detects nudity in static images with 93% accuracy; excluded mentions don't count toward limit
- **Community management toggle** -- enables listening mentions to appear in Community feeds; only Facebook, X, Instagram mentions go to Community; Reddit, TikTok, YouTube, Web do NOT go to Community
- **Response capabilities from Community** -- Facebook (like, comment, share), X (like, repost, reply), Instagram (no direct reaction, link to post)
- **Themes vs Interests** -- ML-based classification; ~10,000 themes (specific topics), ~320 interests (broader categories); themes support 12 languages (zh, cs, nl, en, fr, de, ja, pl, pt, ru, es, th); interests support 10 languages
- **Advanced data delay** -- sentiment, location, language, topics can take up to 2 hours to appear in Analytics
- **Unknown vs Unidentified profiles** -- Unknown = users who opt out (placeholder, keep profile ID, counted in metrics); Unidentified = profile ID missing (deleted, private, API limits; NOT counted in Top Authors)
- **AI features** -- Query summarization (condenses mentions into human-readable AI summaries; min 40 mentions; creates query from topic), Topics view (dissects sentences to find trending topics with sentiment and keywords), crisis alerts, spike detection
- **Spike alerts** -- 3 sensitivity options: Smart Detection (AI-powered historical analysis), Mentions per hour exceeding threshold, All mentions; notifications via email + in-product; keyword + sentiment filtering; 4 states: Running, Paused, Invalid, On hold; data preview shows predicted spike count from last 7 days
- **Full-platform integration** -- listening data feeds across Content Hub, Unified Analytics, Community, Care, Flow Automations
- **Annual mention limit** -- shared across all queries in account; all queries suspended when limit reached, renewed next billing period
- **Product owner:** Adam Vejrych (Product Manager)

**Deep-dive details (from live product -- Settings > Listening):**

- **Query management** -- queries are the core of Listening; keyword-based conditions that define what content and sources to monitor and collection duration
- **Query configuration** -- Settings > Listening > Queries tab; each query shows: name, author, mentions this billing period, status (RUNNING); organized into named groups (e.g., "Streaming Platforms")
- **Query sets** -- grouping related queries together for management
- **Spike alerts** -- configurable alerts when mention volume exceeds thresholds
- **Yearly mention limit** -- billing-based quota (e.g., 12,000,000 mentions/year); current usage tracked with progress bar
- **Volume examples** -- Netflix: 795,520 mentions, Disney Plus: 110,022, HBO Max: 122,661, Prime Video: 180,714 in a single billing period
- **"Codeless-LLM"** -- experimental AI/LLM-related listening query by product owner Adam Vejrych

### 2.10 Ratings & Reviews

Review management for eCommerce (Commerce Cloud). "The Power of Social Proof" -- helps turn customer voices into powerful sales drivers. Claims the most review sources in the industry.

- **Implementation options** -- SpeedFlex widget, TurnTo API, hybrid, or e-commerce platform plugin
- **Collection** -- source product reviews and star ratings from digital channels
- **Data Feeds** -- Inbound: Catalog (required), JavaScript Order, Historical Order; optional: Knowledge Base, Cancelled Order, Email Opt-Out, Historical Reviews/Q&A. Outbound: SKU Average Rating, UGC Feed (XML/JSON), Email Opt-Out, Google Shopping Feed
- **Management** -- publish, moderate, filter by language, tag content
- **Auto-moderation** -- profanity filter + ≥25% gibberish → auto-hidden; image recognition for obscenity; gibberish detection not supported for Thai, Chinese, Japanese, Korean
- **Moderation views** -- Inbox, Moderated, All, Flagged (For CS, Needs response, Inappropriate); filter by star rating, date, content type, brand, category, email, incentive, product, source, tags
- **Syndication** -- Source vs Recipient model; product matching via GTIN, Brand+MPN, or VPC (Virtual Parent Code); internal (bi-directional) or inbound (Open Review Syndication)
- **Display** -- SpeedFlex widgets with star ratings, reviews, "Popular mentions" summaries; Design Editor for theming (branding, typography, buttons, iconography); custom CSS via CSM
- **Review Incentives** -- Static (max 500 SKUs) vs Dynamic (no limit, filter-based); promo codes for reviews with visual content; enable via CSM/AM
- **E-commerce platforms** -- Magento 2.1-2.4, Salesforce Commerce (SiteGenesis, SFRA), Shopify
- **Email** -- own ESP or Emplifi (SendGrid); integrations: Braze, Cordial; Inbox Submission (review forms inside email client); white labeling, branded landing page
- **Portal** -- production/test environments; multi-site by region or brand; roles: Moderator vs Manager
- **Migration support** -- from Bazaarvoice, PowerReviews
- **Privacy** -- CCPA notice, GDPR DPA, "Forget User" REST API; Third-Party Moderator and Report Viewer roles (no shopper emails)
- **Additional sources** -- seller ratings, visual reviews, checkout comments, community Q&A
- **Integration** -- email/SMS campaigns, mobile apps, loyalty programs, UGC galleries
- **SEO** -- search engine optimization for review content
- **Review incentives** -- programs to encourage customer reviews
- **Tech** -- JavaScript widgets, syndication logic; has its own distinct UI (separate from main Emplifi product, like UGC/Pixlee)
- **R&R sub-sections** -- Moderate, Articles, Review Incentives, Analyze (Overview, Reviews, Visual Content, Questions & Answers, Checkout Comments, Analytics, Content Reports), Settings (Team, Admin, My preferences)
- **Site-based** -- each R&R deployment is per-site (e.g., "dx-store V5.0")
- **Moderation states** -- Hidden vs. Published content
- **Product Coverage** -- tracks % of products with reviews, visual content, and checkout comments

### 2.11 Emplifi Bot

Conversational AI chatbot for customer self-service (Service Cloud). Award-winning conversational concierge driven by narrow AI and NLP.

- **NLP-powered** -- narrow AI, natural language processing, intent recognition
- **Multi-channel** -- websites, branded apps, messaging platforms; consistent experience across all channels
- **Multilingual** -- handles inquiries in multiple languages
- **Proactive** -- sends alerts/notifications to customers on their preferred channel
- **Knowledge-based** -- pulls authored content from Knowledge Base to provide answers in conversation format
- **Escalation** -- seamlessly routes to live agents (Emplifi Agent) automatically or at customer's request; preserves full conversation context
- **Doc sub-sections** -- Getting Started, User Menu, Bots (builder), Conversations, Bot Analytics, AI Tools, Guides
- **Impact** -- 39% reduction in queue volume, 29% reduction in wait times, 40% cost savings
- **Bot builder** -- "Create bot from template" (pre-made templates) or "Create bot" (custom); Sub-sections: Overview, Settings, Analytics, Conversations
- **Bot types** demonstrated in product: Retail Bot, Help Bot, Social Bot, Agent Travel Bot, Commerce Bot, FAQ Bot
- **Connected channels** -- each bot connects to specific channels with conversation tracking (last 24h)
- **Version publishing** -- bots have published versions with author tracking

**Deep-dive details (from live product):**

- **Left sidebar** -- Overview, Settings (expandable), Analytics (expandable), Conversations
- **Bot list table** -- columns: Bots (clickable name), Connected channels (green icon + channel name), Number of conversations (last 24 hours), Last published version by (user + date)
- **Naming convention** -- standardized naming like "A1_Retail Bot", "A2_Help Bot", "A3_Social Bot", "A4_Agent Travel Bot", "A5_Volantis Bot", "A6_Commerce Bot" for template/demo bots
- **Conversations page** -- dedicated view for reviewing bot conversation logs

### 2.12 Emplifi Agent

Contact center automation solution focusing on B2C contact (Service Cloud, formerly Astute Agent). Separate documentation at `agent-docs.emplifi.io` (Production + Training versions).

- **Bot handoff** -- receives escalated conversations from Bot with pre-filled case information
- **Case creation** -- automatic case creation on agent acceptance
- **Bot Interaction panel** -- real-time conversation management
- **Workflow automation** -- streamlined B2C customer service workflows
- **All channels** -- supports customer engagement across all channels and digital touchpoints
- **Legacy** -- previously known as Astute Agent; old docs at `agenthelp.myastutesolutions.com`

### 2.13 Flow Automations (Early Access)

Configurable automation flows powered by the Emplifi **Platform Intelligence Engine (PIE)**. Each flow is a visual flowchart with trigger → condition → action logic. Available for Community, Care cases, and Care messages only.

- **Node components:**
  - **Trigger nodes** (required) -- WHEN statements; one trigger node per flow; multiple trigger elements use OR (any of); examples: new messages, status changes, sentiment changes; can be triggered by actions of other flows
  - **Condition nodes** (optional) -- IF statements; logic: All/Any/None across condition elements; examples: content labels, message types, sentiment; supports base, branch, else branch edges
  - **Action nodes** (required) -- THEN statements; one action element per node; max 100 actions per flow (extensible via Professional Services); must be last on each path; successful parent action continues to child
- **Edge types:**
  - **Base edge** -- default connection between nodes
  - **Branch edge** -- directs flow to different actions based on conditions
  - **Else branch edge** -- activates only when parent condition doesn't apply
- **Content sources** -- Community messages, Care cases, Care messages (Care messages = Early Access; only Professional Services can create)
- **Key behaviors:**
  - Flows react to events in real-time; NO historical processing (unlike rule-based labeling)
  - Only content with enrichment (language, sentiment) can be processed
  - Cascading: Flow A actions can trigger Flow B; manual label changes can trigger flows
  - "Content labels set" trigger processes both new and existing content when label is applied
- **Canvas features** -- zoom, lock/unlock, undo/redo, disconnect branches (draft mode), transform to else branch; view-only for users without resource access
- **States** -- Active (running), Inactive (default for new flows), Invalid (critical errors, cannot activate)
- **Use cases** -- escalate messages to Care, set case priorities, auto-reply, update fields based on sentiment, apply labels, respond with auto messages
- **Limits** -- up to 100 flows per account
- **Permissions** -- VIEW-ONLY badge for shared/read-only flows; only Administrators access Flow Automations homepage; filter by component type
- **Location** -- Settings > Automation > Flow Automations

### 2.14 Librarian

AI-powered in-app assistant for platform help. Language-model AI designed specifically for Emplifi questions.

- Accessible via Help & support icon at any time; draggable window across workspace
- Contextual answers specific to Emplifi; dynamically suggested relevant topics based on click history
- English primary, can respond in other languages "if you ask nicely"
- **Best practices:** ask specific Emplifi questions (not single words), provide context in prompts
- Related links + suggested relevant topics that change dynamically
- Feedback system to refine AI responses
- Direct support ticket creation (with subject, description, issue type, up to 5 attachments) if the question is not resolved
- Not a live chat, but unlimited questions allowed

### 2.15 Live Advisor

1-to-1 video shopping capability (Commerce Cloud). "Bring the in-store experience to your customers at home."

- Connects online shoppers with in-store associates via high-quality video and audio calls paired with chat
- Enhances online shopping by allowing agents to guide customers through products in real-time
- Drives conversions through personal interaction
- Part of the social commerce toolkit alongside shoppable posts and ShopLink (Link in Bio)
- **Product owner:** Jason Magrane (Senior Manager, GTM)

### 2.16 Voice of Customer (VoC) / 360 VoC

"Every customer voice, one platform." Goes beyond simple surveys -- unifies fragmented customer feedback across all touchpoints to surface clear priorities, resolve individual issues fast, and reveal journey-level problems demanding attention.

- **Surveys** -- NPS slider (0-10 scale, Poor to Great), CSAT, and multi-choice question types ("Which products are essential for you?")
- **Channels** -- surveys deployed across social channels, digital care channels, and chatbot interactions
- **Scale** -- platform handles 2.3M+ completed survey respondents
- **Alert sensitivity** -- configurable alerting frequency (Only once / Hourly) for feedback-driven notifications
- **360 view** -- aggregates feedback from all customer touchpoints into a unified picture
- **Project-based** -- organized into VoC projects (e.g., "eCommerce Feedback", "Drive Thru Experience - QR Code", "Sales follow up")
- **Deployment modes** -- "Managed listening post" vs. "Self-Serve" tabs
- **Universal Code** -- embeddable survey code generator
- **Brand manager** -- brand-level settings and customization
- **Response rates** -- tracking survey completion rates
- Feeds insights into Unified Analytics

**Deep-dive details (from live product):**

- **Left sidebar** -- Overview + "Create project", per-project sections (Setup, Share, Analyze), Universal Code, Users, Brand manager, "VoC Fundamentals" (external documentation link)
- **Projects table** -- columns: Project name, Id (numeric e.g., 128958), Survey type ("Custom research"), Respondents in the last 24 hours, Total number of respondents, Status (ON toggle)
- **Expanded project view** -- "Code generator", "Project info", "Response rates" action buttons; "Completed surveys" time-series chart (respondents over time)
- **Multi-language support** -- languages with ON/OFF toggle, one set as "Default" (e.g., English: 29,221 respondents, Portuguese: OFF, Spanish Latin America: OFF)
- **Managed vs. Self-Serve** -- two tabs for different project types

### 2.17 Emplifi Teams

Governance and access control layer for the platform. "Seamless Governance with Emplifi Teams."

- **Team-based access** -- logical grouping that defines access between users and resources
- **Roles** -- Platform admin (top-level), Team admin (per-team), team members
- **Team structure** -- Headquarters, regional teams (Japan, France, Portugal, Germany, etc.), functional teams (Global support, Content Creators, Automation)
- **Resource control** -- defines which social profiles, features, and data each team can access

### 2.18 Paid Social / Paid Analytics

Dedicated module for paid advertising oversight across ad accounts. "Get advanced metrics across ads and campaigns."

- **Search-driven** -- search by campaign, ad account name or ID, label, campaign objective, and platform; "Search options" and "Analyze" button
- **"My searches"** -- saved search queries
- **Planning, Monitoring, and Reporting** on all ad campaigns
- **Organic vs. Paid** -- donut chart showing spend breakdown
- **Spend tracking** -- total ad spend metrics (e.g., $30,438 last 30 days)
- **Campaign Objective analysis** -- Brand awareness, Conversions
- **Audience Demographics** -- paid content performance by gender, age, etc.
- **Comparison Overview** -- benchmarks of key metrics across selected ad accounts
- **Cross-platform** -- Meta, TikTok, X ad accounts
- Works together with Content Hub (Ads section) and Publisher

### 2.19 Social FAQ Bot

Lighter-weight chatbot specifically for social media channels, distinct from the full Emplifi Bot.

- Delivers instant, accurate answers to common customer questions across social channels
- Reduces response times, cuts support costs, keeps customers engaged 24/7
- **Generate with AI** -- AI-assisted creation of bot responses and user utterance training
- Scales support with fast, personalized automation

### 2.20 Live Video Calling

Personalized one-to-one video calls from websites (related to but distinct from Live Advisor).

- **Customer-initiated** -- customers launch video calls directly from a widget on the website
- **Product showcase** -- agents can share product links and display product cards with prices during the video call
- **Multi-modal** -- combines high-quality video + audio + text chat in a single session
- Boosts online conversions with personalized video interactions that match or exceed in-store conversion rates

### 2.21 Knowledge Base

Internal or external-facing help article repository (Service Cloud).

- Used by Bot for answering customer questions from authored content
- Available to agents for reference during case handling
- Listed as a data source in Unified Analytics

### 2.22 Live Commerce

Full sub-platform for live video commerce (Commerce Cloud). Encompasses Live Advisor and Live Video Calling with rich operational management.

- **Dashboard** -- Summary overview with Opportunity graph (page views vs. calls), Advisor tracker
- **Advisors** -- staff management for live video call agents
- **Appointments** -- scheduled video call management
- **Live Events** -- live shopping event management
- **Products** -- product catalog for live commerce sessions
- **JSON scripts** -- technical integration scripts for embedding
- **Engagement** -- engagement tracking tools
- **Training** -- advisor training videos with progress tracking (e.g., 27 training videos)
- **Call metrics** -- Total calls, Accepted calls, Customer rating
- **Opportunity tracking** -- monitors missed opportunities (page views without initiated calls)
- **Manage** and **Corporate notes** for administrative control
- **Service Status** -- system health monitoring page

**Deep-dive details (from live product):**

- **Full sidebar navigation** -- Dashboard (Summary overview, Advisor tracker), Advisors, Appointments (expandable), Live Events (expandable), Products, JSON scripts, Manage (expandable), Engagement, Corporate notes, Service Status
- **Summary overview** -- Time zone display (e.g., "Europe/Prague"); Opportunity graph (Y: Page views, X: Hours) with opportunity loss metric; Call summary with three KPI cards: Total calls, Accepted calls, Customer rating -- each showing value with day-over-day comparison ("More than Day before")
- **Date controls** -- "Show: Yesterday" dropdown for date selection with refresh

### 2.23 KAWO (Chinese Social)

Dedicated module for managing Chinese social networks (acquired company, separate branding and UI).

- **"Manage all of your Chinese social networks in one platform"**
- **Features** -- Multiple Accounts management, Reporting, Competitor analysis, Collaboration
- **Chinese platforms** -- WeChat, likely Weibo, Douyin, RED/Xiaohongshu
- **Login options** -- Email, WeChat, Mobile, SSO
- **Language** -- English and Chinese (中文) UI
- **Shanghai-based** -- KAWO is registered in Shanghai, China

### 2.24 Labs (Experimental Features)

Preview of upcoming smart product features. "Experience the future of Emplifi platform."

- Prototypes are fully functional and connected to the user's real account and data
- **Current prototypes:**
  - **Trends Summarization** [Listening] -- automatic daily summary of X (Twitter) trends for countries
  - **Scribe with Style** [Publisher] -- AI content creation assistant that learns the user's complete writing style
  - **Scribe** [Publisher] -- AI content creation assistant based on text generation technology
- "Give us feedback" button for user input on experimental features

---

## 3. Cloud Organization

The platform modules map to three clouds targeting different user personas:

| Cloud | Legacy Origin | Modules | Target Persona |
|-------|--------------|---------|----------------|
| **Social Marketing** | Socialbakers | Publisher, Content Hub, Community, Listening, Influencers, Dashboard, Paid Analytics | Marketing teams |
| **Commerce** | TurnTo + Pixlee | UGC (Pixlee), Ratings & Reviews, Live Commerce (Live Advisor + Live Video Calling), Social Commerce (ShopLink) | eCommerce / product teams |
| **Service** | Astute | Care, Bot, Social FAQ Bot, Agent, Knowledge Base | Customer care / support agents |
| **Chinese Social** | KAWO | KAWO (WeChat, Weibo, etc.) | China market teams |

Cross-cloud modules: Command Center, Unified Analytics, Flow Automations, Librarian, 360 VoC, Emplifi Teams (governance), Labs.

### Solution Bundles

Emplifi packages modules into solution bundles that span multiple individual products:

| Solution Bundle | Components | Value Proposition |
|----------------|------------|-------------------|
| **Social Marketing Solution** | Publisher, Content Hub, Community, Listening, Influencers, Paid Analytics, Unified Analytics | "Connect brands and customers with tools that boost engagement and streamline social media" |
| **Social Care Solution** | Community, Care, Agent, Bot, Social FAQ Bot, Knowledge Base + CRM Integrations + PIE | "Build exceptional social media customer service experiences" -- route, open, track, and resolve inquiries across social and review channels |
| **Social Commerce Solution** | UGC, Ratings & Reviews, Live Advisor, Live Video Calling | "Easily collect, manage, and showcase authentic feedback and shoppable content" -- leverages UGC, reviews, and live video shopping |

---

## 4. Cross-Module Relationships

```
             ┌──────────────────────────────────────────┐
             │       Emplifi Teams (Governance)         │
             │  Platform admin → Team admins → Members  │
             └──────────────────┬───────────────────────┘
                                │
                    ┌───────────▼─────────────────┐
                    │        Emplifi Fuel          │
                    │  (Unified Platform + AI)     │
                    └───────────┬─────────────────┘
                                │
          ┌─────────────────────┼─────────────────────┐
          │                     │                     │
    ┌─────▼──────┐     ┌───────▼───────┐    ┌───────▼───────┐
    │  MARKETING  │     │   COMMERCE    │    │    SERVICE    │
    │  CLOUD      │     │   CLOUD       │    │    CLOUD      │
    │ (Socialbkrs)│     │  (TurnTo)     │    │   (Astute)    │
    └─────┬──────┘     └───────┬───────┘    └───────┬───────┘
          │                    │                    │
  ┌───────┼────────┐   ┌──────┼───────┐    ┌───────┼────────┐
  │Publisher       │   │UGC           │    │Community       │
  │Content Hub     │   │Ratings &     │    │Care            │
  │Listening       │   │Reviews       │    │Bot / FAQ Bot   │
  │Influencers     │   │Live Advisor  │    │Agent           │
  │Dashboard       │   │Live Video    │    │Knowledge Base  │
  │Paid Analytics  │   │ShopLink      │    └────────────────┘
  └────────────────┘   └──────────────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                   ┌───────────▼───────────┐
                   │  Unified Analytics    │
                   │  Flow Automations     │
                   │  Librarian (AI)       │
                   │  360 VoC              │
                   └───────────────────────┘
```

Key data flows:

| From | To | Relationship |
|------|----|-------------|
| Community | Care | Escalation -- messages requiring agent attention are promoted to Care cases |
| Bot | Agent | Handoff -- bot escalates conversations to live agents with pre-filled context |
| Content Hub | Publisher | Scheduling -- assets from Collections can be sent directly to Publisher |
| UGC | eCommerce | Galleries -- curated UGC is embedded in product pages and storefronts |
| Listening | Content Hub | Context -- listening mentions are enriched with associated content; Content > Listening tab lets you browse actual content from listening queries with content labeling tools |
| All modules | Unified Analytics | Reporting -- all module data feeds into the unified analytics layer |
| Flow Automations | Community, Care | Automation -- triggers based on Community/Care events drive actions |
| Publisher | All social platforms | Distribution -- posts are published to FB, IG, TikTok, X, YouTube, LinkedIn, etc. |
| Publisher | Approval Flows | Governance -- posts go through multi-step approval pipelines defined in Settings > Approval Flows before publishing |
| Influencers | UGC | Content -- influencer content can be collected and deployed as UGC |
| Knowledge Base | Bot | Answers -- bot pulls authored content to provide conversational responses |
| Listening | Community | Messages -- listening mentions appear directly in Community inbox tagged as "Listening - Comment" |
| Listening | Care | Cases -- listening mentions can be escalated to Care cases (case header shows "Listening" source) |
| Community | Bot | Handling -- messages "Handled by Bot" tracked in Community feeds |
| Paid | Content Hub (Ads) | Shared searches -- saved searches in Paid module appear in Content > Ads tab |
| Content Hub (Collections) | Publisher | Planning -- collections organize discovered content for campaign planning and scheduling |

### Product Navigation (app.emplifi.io)

The live product left-side navigation contains these modules in order:

1. **Command Center** (home/landing)
2. **Dashboard** (classic dashboards)
3. **Unified Analytics** (next-gen analytics)
4. **Paid** (ad analytics)
5. **Publisher** (content scheduling, badge shows pending count e.g., "18")
6. **Community** (unified inbox)
7. **Care** (case management)
8. **Content** (Content Hub)
9. **UGC** (redirects to Pixlee UI at `pixlee.svc.emplifi.io`)
10. **Influencers** (discovery/campaigns)
11. **Ratings & Reviews** (separate R&R UI)
12. **Bot** (chatbot builder)
13. **VoC** (surveys)
14. **Live Commerce** (video commerce sub-platform)
15. **KAWO** (Chinese social, separate login)
16. **Labs** (experimental features)
17. **+ Add Data Source** (connect new profiles/accounts)
18. **Settings** (platform configuration)

**Settings structure:** Personal settings, Notifications, Channels (Social profiles, Google businesses, Ad accounts), Users, User groups, Roles & permissions, Approval flows, Integrations & API, Business hours, Labels, Care (expandable), Listening, Automation (expandable), Subscription plan, Answer templates (expandable), Single sign on.

**Settings deep-dive (from live product + documentation):**

- **Channels > Social Profiles** -- 162 profiles connected; table columns: Profile name (logo + platform badge), Connection status, Ownership (Public/Owned), Profile labels, User groups; supported platforms: Facebook, Google Business, Instagram, LinkedIn, Pinterest, Snapchat, Threads, TikTok, WhatsApp Business, X (Twitter), YouTube; profiles can be Owned (private, full access) or Public (competitor monitoring); visibility per user configurable; business hours per profile; "+ Add profile" action; Search, Filter, Export tools
- **Channels > Google businesses** -- separate channel type for Google Business profiles
- **Channels > Ad accounts** -- platforms: Meta (Facebook, Instagram, Threads, WhatsApp, Messenger, Audience Network), TikTok (TikTok, Pangle, Global App Bundle), X (X, Publisher Network); permissions: View (analytics, dashboard, content) and Manage (assign users, change permissions); only assigned users can access an ad account
- **Session duration** -- 7 days from last activity; resets on each user action
- **Supported browsers** -- Chrome, Edge, Firefox (6 latest stable); Safari (2 latest); Chrome recommended
- **Approval flows** -- multi-step content approval pipelines for Publisher
  - Visual representation: color-coded circles (blue → green → yellow) connected by lines, showing pipeline stages
  - 1-step (single approver), 2-step (two levels), 3+ step (multi-level) flows supported
  - Assigned to specific social profiles (e.g., Volantis profiles)
  - Examples: "Brand Manager to Volantis A...", "Regional" (2-step), "Agency to Brand Manager" (2-step), "Global → Local → Agency A..." (3-step)
  - Supports Brand/Agency organizational structures
  - "+ Add approval flow" action
- **Listening** -- three tabs: Queries, Query sets, Spike alerts
  - **Queries** -- keyword-based monitoring rules, each showing: Query name, Author (user + role), Mentions this billing period, Status (RUNNING/stopped); grouped by topic (e.g., "Streaming Platforms" group: Netflix 795,520, Disney Plus 110,022, HBO Max 122,661, Prime Video 180,714, Paramount Plus 52,589)
  - **Yearly mention limit** -- e.g., 4,781,206 / 12,000,000 with progress bar; "Codeless-LLM" query for AI experiments
  - **"+ Create query"** action
- **Automation** -- four sub-sections:
  - **Flow Automations** [EARLY ACCESS] -- flow limit per account (e.g., 39/100); table with: Flow name, State (ON/OFF toggle), Status (INVALID/INACTIVE/ACTIVE), Content source (Community messages, Care messages, Care cases), Last edit by, Created by; VIEW-ONLY badge for shared read-only flows
  - **Labeling** -- automated content labeling rules; up to ~300 rules; Content types: Direct messages, Listening mentions, Brand's content, User-generated content; platforms: FB, IG, LI, PT, TT, X, YT, Threads, GB; conditions: keywords with include/exclude, wildcards `?` and `*`; statuses: Running, Paused, Done, Draft, Invalid
  - **Sentiment** -- deep learning/NLP; classes: Positive, Negative, Neutral, No sentiment; accuracy ~65-80% by language (English ~80%, Portuguese ~65%); platforms: FB, IG, LI, Reddit, TT, WhatsApp, YT, X, GB; 100+ languages; automatic sentiment marked with "A"
  - **Keyword lists** -- keyword-based matching configuration
- **User Groups** -- collections of users + profiles; control: profile visibility, label visibility, Care case views, skills, dashboard sharing, answer templates, business hours; members inherit business hours for SLA and performance metrics
- **Business Hours** -- timezone, weekly schedule, multiple slots per day, holidays (including recurring); used in Community response time, Care SLA, agent performance; changes NOT applied retrospectively
- **Cloud storage** -- integrations: Google Drive, OneDrive, Box, Gmail, Dropbox, Bynder, Adobe Experience Manager; also Facebook, Instagram, Google Photos, Web Search, Link (URL)
- **Looker Studio connector** -- pull Emplifi API data into Looker Studio for BI dashboards; only monitored profiles; no Assets API or Community Content
- **Public API** -- Basic HTTP (token+secret) or OAuth 2.0 (authorization code flow); not enabled by default; request via Settings > Integrations & API
- **Subscription** -- shows usage of profiles, users, swaps (formerly delete credits) vs limits; requires "Access to Subscription plan section" permission
- **Personal locale** -- date/time format, timezone, decimal/thousands separators, currency, language
- **Labels** -- three types: Profile Labels (assigned to profiles), Content Labels (assigned to posts/notes), Content Label Groups (organize content labels); visibility: Global/Specific Users/Private; "Required for publishing" option per label group (users must select at least one label before publish); labels can be bulk-created; advanced permissions per label; Visibility Review tool catches inconsistent permission setups
- **User Roles & Permissions** -- two role types:
  - **Account roles** -- what user can DO in platform modules; predefined: Account Admin (full access), Account User (view most, limited create), Client/External User (Publisher only); custom roles by duplication; one role per user
  - **Profile roles** -- per-profile permissions for content and communication; Publisher levels: View Only, Create, Create+Publish, Create+Publish+Approve, Approve only, Create+Approve; predefined roles: Client, Content Creator (with/without approval), Create Publish, Create Publish Approve, Customer Care, Page Admin, Page Viewer; default role assigned when adding user; modules covered: UA, Dashboard, Content, Community, Publisher
  - Only Account Admin can manage Roles & Permissions

### Key Cross-Module Workflow Patterns (Senior PM perspective)

Understanding how modules connect reveals the platform's core value proposition -- not individual tools, but **unified workflows across the customer journey:**

**1. Content Lifecycle:**
Publisher (create/schedule) → Approval Flows (governance) → Social Platforms (publish) → Content Hub Feed (analyze) → Collections (curate best-performing) → Publisher (re-use/iterate)

**2. Listening-to-Action Pipeline:**
Listening Queries (monitor) → Community (surface mentions) → Care (escalate to cases) → UA > Listening boards (analyze trends) → Content > Listening (browse actual content) → Publisher (respond with content)

**3. Customer Service Escalation Path:**
Bot (first-line, automated) → Community (human review, prioritized inbox) → Care (case management with SLA) → Agent (premium, full CRM) → Salesforce/Zendesk (external CRM sync)

**4. Analytics Layering:**
- **Dashboard** = classic, widget-based, customizable dashboards (legacy)
- **Unified Analytics** = next-gen, board-based, DISCOVER hierarchy, AI-powered, cross-module (modern)
- **Module-specific analytics** = each module has its own inline analytics (Care reports, Community reports, Bot analytics, etc.)
- **Content Hub** = content-centric analytics (performance scoring, competitor benchmarking)

**5. Governance & Access Control:**
Emplifi Teams (org structure) → User groups (profile access) → Roles & permissions (feature access) → Approval flows (content governance) → Labels (content/profile categorization)

**6. Data Source Architecture:**
The platform organizes data around three key entity types:
- **Social Profiles** (Owned, Public/competitor, Profile Labels) → Social profiles analytics
- **Listening Queries** (keyword-based rules) → Listening analytics, Content Listening, Community mentions
- **Care Cases** (tickets from Community/Bot/Listening escalation) → Care analytics, SLA tracking

---

## 5. Technical Architecture & Terminology

### PIE (Platform Intelligence Engine)

The automation and intelligence engine behind the Emplifi platform. Powers Flow Automations, intelligent routing, and cross-module automation capabilities. Referenced prominently in the Social Care Solution context alongside CRM integrations.

### Key Entities / Data Model

| Entity | Description |
|--------|-------------|
| **Profile** | A connected social media account (e.g., a specific Facebook Page or Instagram Business Account) |
| **Post** | A content piece published to a social network |
| **Feed / Stream** | An aggregated list of incoming posts, comments, or mentions |
| **Metric** | Quantitative data point (Reach, Impressions, Engagement Rate, etc.) |
| **Widget** | Front-end component -- in Dashboard for data visualization, in Commerce for embedding reviews/UGC on client websites |
| **Case** | A customer service ticket in Care, created from escalated Community messages or Bot conversations |
| **Board** | A collection of widgets in Unified Analytics, organized by topic |

### Integration & API

- **Emplifi API** -- RESTful API for external access to data (analytics, publishing)
- **Webhooks** -- real-time updates in Service and Commerce clouds (e.g., new review submitted)
- **CRM integrations** -- Salesforce, Zendesk, Microsoft Dynamics (critical for Service Cloud data sync)
- **eCommerce integrations** -- for R&R widget embedding, UGC galleries, product tagging

### Legacy Codebase Context

When encountering legacy code or references in the Emplifi ecosystem:

| Reference | Origin | Domain |
|-----------|--------|--------|
| `Socialbakers` or `SB` | Social Marketing legacy codebase | Analytics, publishing, listening |
| `Astute` | Service/Bot legacy codebase | Customer care, chatbots |
| `TurnTo` | Ratings & Reviews codebase | Reviews, syndication |
| `Pixlee` | UGC codebase (`pixlee.svc.emplifi.io`) | User-generated content, visual commerce |
| `KAWO` | Chinese social codebase | Chinese social network management |

---

## 6. Emplifi AI ("Emplifi Fuel" Intelligence)

The AI layer powers features across all three clouds:

| AI Capability | Used In | Description |
|---------------|---------|-------------|
| **Generative AI** | Publisher (AI Composer), Community (suggested replies) | Drafting post captions and customer responses |
| **Sentiment Analysis** | Community (5 emoji levels), Listening, Content Hub, Care (per-case) | Automatic classification: Strongly Positive to Strongly Negative |
| **Image Recognition** | UGC, Content Hub | Auto-tagging objects in user-generated images |
| **PrimeTime** | Publisher | AI-based optimal posting time recommendations (24h/48h/7d with visibility % improvement) |
| **Priority Score** | Community | 4-level scoring: Urgent, High, Medium, Low |
| **Query Summarization** | Listening | Condensing mentions into human-readable summaries |
| **Intent Recognition** | Bot | NLP-based understanding of customer intent |
| **Crisis Detection** | Listening | Spike alerts and early warning for brand crises |
| **Summarize Case** | Care | AI-powered case summarization for agents |
| **Generate Charts** | Unified Analytics [EARLY ACCESS] | Ask AI to recommend visualizations for your data |
| **Trends Summarization** | Labs / Listening | Automatic daily summary of X trends by country |
| **Scribe / Scribe with Style** | Labs / Publisher | AI content creation that learns the user's writing style |
| **A/A+ Content Rating** | Content Hub | AI-based quality scoring for content pieces |
| **AI Query Highlights** | Unified Analytics / Listening | AI-powered analysis highlights in listening boards |

---

## 7. Technical Details from Documentation (docs.emplifi.io)

> Source: [Emplifi Documentation Center](https://docs.emplifi.io/platform/latest/home/)

### Priority Score Algorithm

The Community Priority Score uses machine learning trained on historical Community user actions:
- **81-100 = Urgent** -- learned from messages that were hidden, banned, or deleted
- **51-80 = High** -- learned from messages that received a reply
- **21-50 = Medium** -- learned from messages that were liked
- **0-20 = Low** -- learned from messages with no action or marked as done
- Not available for direct messages
- Supports **90+ languages** with full diacritic support

### AI Composer Technical Details

- Powered by **OpenAI** (subject to OpenAI usage policies)
- Generates **4 suggestions** at a time; "More Like This" generates 4 similar variants
- **Brand Voice** (Enterprise): analyzes up to last 100 posts over 90-day period per profile; requires minimum 5 posts
- **Tone options** (disabled when Brand Voice is on): Educational, Energetic, Excited, Happy, Inspirational, Neutral, Optimistic, Professional, Recommended, Sad, Sales pitch
- **Format:** General, News
- **Quick tweaks:** "Amplify emotions" or "Relax tone" on existing text
- **Additional elements:** hashtags, emojis, text length (short/medium/long), questions
- **Automatic language detection** from typed prompt; supports 30+ languages
- Human moderation is mandatory -- AI-generated content cannot be auto-deployed

### Listening Technical Details

**Data source coverage:**
| Source | Coverage | What's Collected | Historical Backfill | Refresh Rate |
|--------|----------|-----------------|---------------------|-------------|
| Facebook | 800K+ pages | Posts (excl. ads), user posts, comments | Up to 365 days | Near real-time (< 1 hour) |
| Instagram | 9M+ Business/Creator accounts | Posts, Reels (no comments) + hashtag search | Up to 365 days (not for hashtags) | Varies by type |
| X (Twitter) | All public content | Posts, replies, mentions, reposts, quote tweets | Up to 365 days | Real-time |
| YouTube | 3M+ channels | Videos (title+desc), Shorts | Up to 365 days | < 2 hours |
| Reddit | All public content (add-on) | Posts, comments | No backfill | Real-time |
| TikTok | @mentions of owned accounts | Posts and comments with @mentions (top 1000 most liked only) | No backfill | Every 24-48 hours |
| Web | 1M+ websites scanned daily, 10M+ posts indexed daily | News, Blogs, Forums | Varies | Dynamic frequency |

**Query system:**
- Keywords with operators: `AND`, `OR`, `NEAR(1-6)` (proximity)
- Max query length: 4,096 chars for X, 3,900 chars for Web, unlimited for others
- Sensitive content filtering (93% accuracy for nudity in static images)
- Community management toggle: enables listening mentions to appear in Community feeds
- Annual mention limit shared across all queries; suspension when limit reached
- Query statuses: Running, Processing, Scheduled, Regulated, Suspended, Paused, Done

### Care SLA System

**SLA Policies** -- configurable rules for addressing and resolving cases:
- **Conditions** per policy: message text keywords, channel/profile, platform, sentiment, language
- **Milestones** per priority level (Urgent/High/Medium/Low):
  - Time to assign (case created → agent assigned)
  - First response time (case created → first agent reply)
  - Next response time (customer reply → next agent reply)
  - Total resolution time (case created → case resolved)
- Format: `1d 12h 30m` (days, hours, minutes)
- Policies evaluated in order; first matching policy assigned to case (cannot be changed)
- Priority in Care inherits from Community; defaults to Medium if undetectable
- Breach notifications sent to assigned agent + all Supervisors
- Care user features: Skills management, Maximum capacity settings per agent

### Community Data Freshness

| Platform | Update while open | Update while closed | Historical data per update |
|----------|-------------------|---------------------|---------------------------|
| Facebook | < 1 min | < 10 min | 14 days |
| Instagram | < 1 min | < 60 min | 7 days |
| X (Twitter) | < 5 sec | < 15 sec | Lifetime |
| LinkedIn | < 1 min | < 60 min | 4 weeks |
| TikTok | < 15 min | < 12 hrs | 60 days |
| YouTube | < 1 min | < 6 hrs | 90 days |
| WhatsApp | Real-time | Real-time | N/A (no historical) |
| Google Business | < 15 min | < 15 min | 30 days |

- Historical data retention: **90 days** across all platforms
- Community supports: Facebook, Google Business, Instagram, LinkedIn (company pages only), TikTok, WhatsApp, X, YouTube

### API & Integration Details

- **Public API:** RESTful, documented migration path from Socialbakers API 1.0 to 3.0
- **Looker Studio connector** for external BI integration
- **Cloud storage integration** (connect Emplifi with cloud storage providers)
- **Salesforce integration** for both Community (direct) and Care (per-case)
- **Webhooks** for R&R (real-time review notifications)
- **SpeedFlex widgets** for R&R (low-code JavaScript, themed)
- **TurnTo API** for programmatic R&R access

### Documentation Navigation Structure

The official documentation (docs.emplifi.io) covers these top-level sections:
1. Emplifi Fuel (Command Center, Objectives & Tactics, Labels)
2. Dashboard (widget dictionary, templates, create dashboards)
3. Unified Analytics - Getting Started
4. Publisher (AI Composer, Link in Bio, Stories, Reels, Product Tagging, YouTube)
5. Community (Inbox, Filters, Templates, Escalation, Priority Score, Salesforce integration, DMs)
6. Care (Cases, Settings, SLA, Salesforce, Skills, Capacity)
7. Content (Reels, Ads, Sentiment, Video Analysis, Collections, Collaboration Posts)
8. UGC (Dashboard, Curation, Publish Center, Calendar, Analytics, Settings)
9. Influencers (Instagram, YouTube, Contacts, Campaigns)
10. Ratings & Reviews (Portal, SpeedFlex, API, Webhooks, E-commerce, Syndication, SEO, Moderation)
11. Listening (General Guide, Data Sources, Crisis Management, Query Summarization)
12. Settings (Browsers, Security, Profiles, Ad Accounts, Labels, API, Users, Roles)
13. Flow Automations (Components, Canvas, Create Flow, Activation Examples, References)
14. User Guides
15. Librarian (AI-powered in-app assistant)
16. Emplifi Bot
17. Emplifi Agent
18. Release Notes
19. Deprecated Features

---

## 8. Design System: SOUL

**SOUL** is Emplifi's design system for creating consistent products and digital experiences.

### Structure

| Layer | Contents |
|-------|----------|
| **Foundations** | Colors, typography (Inter), spacing, icons, elevations, illustrations |
| **Components** | Buttons, forms, data tables, navigation -- React-first with Web Components support |
| **Patterns** | Reusable solutions combining components to solve common UX needs |
| **Content Style Guide** | Standards for in-product copy (clear, concise communication) |

### Technical Details

- **Framework:** React-first, official Web Components support
- **Font:** Inter (Google Fonts, open-source)
- **Distribution:** Private npm scope (`@emplifi/soul`)
- **Documentation:** Storybook
- **Design tool:** Figma with two libraries:
  - Global Library (UI colors, icons, illustrations, effects, styles)
  - Product Library (product typography, components, templates)
- **Accessibility** is a fundamental design philosophy

### Token System (used in this prototype)

The file `soul-tokens.css` defines SOUL design tokens as CSS custom properties:

| Category | Examples |
|----------|---------|
| Colors -- Layout | `--color-layer-level-0/1/2`, `--color-layer-hover` |
| Colors -- Text | `--color-on-layer-primary/secondary/tertiary` |
| Colors -- Border | `--color-border-primary/secondary`, emphasis variants |
| Colors -- Button | `--color-button-primary/ghost/invisible` with hover/active states |
| Colors -- Status | Success, error, warning, info (base, light, text) |
| Colors -- Navigation | `--color-nav-dark`, hover, active |
| Colors -- AI Gradient | `--color-ai-gradient-start` (teal) to `--color-ai-gradient-end` (purple) |
| Colors -- Platform | Facebook blue, Instagram pink, Twitter blue, YouTube red |
| Spacing | `--space-0` (3px) to `--space-13` (120px) |
| Border Radius | `--radius-small/medium/large/pill/full` |
| Shadows | `--box-shadow-100` to `--box-shadow-400`, inner shadow |
| Motion | Duration (instant/quick/moderate), easing, slide transforms |
| Typography | Headline, body, helper, button, field, badge size scales |
| Layout | `--platform-nav-width`, `--cortex-panel-width` |

---

## 9. AI Layer: Cortex (Prototype Context)

**Cortex** is the AI assistant being prototyped in this repository (`ai-cortex-1`). It represents a new intelligence layer across the Emplifi platform, building on top of Emplifi Fuel's AI capabilities.

### Prototype Tech Stack

- Plain HTML/CSS/JS (no framework, no build tools)
- SOUL design tokens via `soul-tokens.css`
- SPA routing via `router.js`

### Prototype Pages

| Route | File | Purpose |
|-------|------|---------|
| Command Center | `command-center.html` | Main dashboard with widgets, trend intelligence |
| Unified Analytics | `unified-analytics.html` | Analytics view |
| Content Collection | `content-collection.html` | Content hub view |
| Publisher Campaign | `publisher-campaign.html` | Campaign publishing view |
| Settings -- Listening | `settings-listening.html` | Listening configuration |

### Cortex Panel (`cortex-panel.js`)

Persistent right-side panel with:

- **AI Chat** -- conversational interface for Cortex
- **Activity Log** -- history of AI actions and recommendations
- **Notifications** -- alerts and updates

### Key Interactions

- User selects actions (campaign, listening, analytics, UGC) via Command Center
- Cortex generates AI-powered recommendations and decisions
- **Drag & Drop** (`drag-drop.js`) -- decision items from the Cortex panel can be dragged into the page
- Cross-module action execution -- Cortex can trigger workflows across Publisher, Listening, Analytics, UGC

### Design References

- Figma node references are embedded in code comments (e.g., `7968:9500`)
- AI-specific gradient: teal-to-purple (`--color-ai-gradient-start/end`)

---

## 10. Supported Social Platforms

| Platform | Publisher | Community | Listening | Content Hub | Influencers | UA Analytics |
|----------|-----------|-----------|-----------|-------------|-------------|-------------|
| Facebook | x | x | x | x | - | x |
| Instagram | x | x | x | x | x | x |
| TikTok | x | x | x | x | - | x |
| X (Twitter) | x | x | x | x | - | x |
| YouTube | x | x | x | x | x | x |
| LinkedIn | x | x | - | - | - | x |
| Pinterest | x | - | - | x | - | x |
| Threads | x | - | - | - | - | - |
| Snapchat | - | - | - | - | - | x |
| Reddit | - | - | x | - | - | - |
| Google Business | - | x | - | - | - | - |
| WhatsApp | - | x | - | - | - | - |
| Web | - | - | x | - | - | - |
| WeChat (via KAWO) | - | - | - | - | - | - |

---

## 11. Target Industries

Agencies, Consumer Packaged Goods, Higher Education, Media & Entertainment, Restaurants, Retail & eCommerce, Sports, Travel & Hospitality.
