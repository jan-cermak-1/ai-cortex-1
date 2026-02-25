# Emplifi Platform -- Product Context Knowledge

> This file provides general Emplifi platform context.
> For Senior PM/Designer work, the AI will automatically use the 
> **emplifi-senior-pm skill** (`.cursor/skills/emplifi-senior-pm/`) which provides 
> specialized PM workflows, integration patterns, and comprehensive product knowledge.
>
> **Last updated:** 2026-02-19  
> **Coverage:** 100+ documentation pages, live product exploration, official docs  
> **Sources:** [emplifi.io](https://emplifi.io/), [docs.emplifi.io](https://docs.emplifi.io/platform/latest/home/), [soul.emplifi.io](https://soul.emplifi.io/), [Live Product](https://app.emplifi.io/)

---

## 1. Platform Overview

**Emplifi** is a unified customer experience (CX) platform formed from mergers of Socialbakers (social marketing), Astute (customer service), TurnTo (reviews), Pixlee (UGC), and KAWO (Chinese social).

| Legacy Company | Became | Domain |
|----------------|--------|--------|
| Socialbakers | Social Marketing Cloud | Social media, analytics, listening |
| Astute | Service Cloud | Customer care, chatbots |
| TurnTo | Commerce Cloud (R&R) | Ratings & reviews |
| Pixlee | Commerce Cloud (UGC) | User-generated content (`pixlee.svc.emplifi.io`) |
| KAWO | Chinese Social | WeChat, Weibo management |

**Three Clouds:** Social Marketing, Service, Commerce + cross-cloud modules (Command Center, Unified Analytics, Flow Automations, Librarian, VoC, Teams).

**Emplifi Fuel:** Unified platform layer + intelligence engine powering AI features (generative AI, sentiment analysis, image recognition).

---

## 2. Quick Reference (PM/Designer)

### Module Capability Matrix

| Module | Core Function | Primary Input | Primary Output | Integrates With | Key Constraint |
|--------|--------------|---------------|----------------|-----------------|----------------|
| **Command Center** | Strategic dashboard | Objectives, KPIs | Tactical recommendations | All modules | — |
| **Dashboard** | Legacy analytics | Social profiles | Customizable reports | All data sources | 700+ widgets, separate from UA |
| **Unified Analytics** | Next-gen analytics | All platform data | Boards, insights, predictions | All modules | AI features in early access |
| **Publisher** | Content scheduling | Media, text, campaigns | Published posts | Approval Flows, Content, UA | Platform API limits, 24h cancel window |
| **Community** | Social inbox | Social messages, reviews | Responses, escalations | Care, Bot, Listening, Salesforce | 90-day retention, 10K+ scale |
| **Care** | Case management | Escalated messages | Resolved cases | Community, Salesforce, Bot | Grace period 5d, max 5 cases/agent |
| **Content Hub** | Content discovery | Published content, ads, listening | Collections, insights | Publisher, Listening, Paid | 21B+ inspiration content |
| **UGC** | User content curation | Social UGC, uploads | Galleries, widgets | Influencers, eCommerce | Pixlee-powered, max 500 collections |
| **Influencers** | Influencer marketing | Discovery, campaigns | Creator relationships, content | UGC, Content | 30M+ profiles, fake detection |
| **Listening** | Social monitoring | Keywords, queries | Mentions, insights, alerts | Community, Care, Content, UA | Annual mention limit, platform-specific coverage |
| **Ratings & Reviews** | Review management | Product reviews | Widgets, syndication | eCommerce platforms | TurnTo-powered, separate UI |
| **Bot** | AI chatbot | Customer inquiries | Automated responses | Agent, Community, Knowledge | NLP-powered, multi-channel |
| **Agent** | Contact center | Escalated conversations | B2C support | Bot, Care | Separate docs site |
| **Flow Automations** | Workflow automation | Community/Care events | Automated actions | Community, Care | Max 100 flows, PIE-powered |
| **Live Commerce** | Video shopping | Video calls | Sales conversions | Products, Advisors | 1-to-1 video + chat |
| **VoC** | Survey management | Customer feedback | NPS, CSAT, insights | All channels | 2.3M+ respondents |
| **Paid** | Ad analytics | Ad accounts | Campaign performance | Content Hub (Ads) | Meta, TikTok, X accounts |

### Product Domain Glossary

**Core Concepts:**
- **Profile** -- Connected social account; Owned (full control) vs Public (competitor monitoring)
- **Case** -- Aggregated customer thread per profile; unlimited retention unless deleted
- **Message** -- Single social interaction; 90-day retention across all platforms
- **Post-level vs Profile-level** -- Aggregation by publish date vs engagement date
- **Escalation** -- Promotion from Community → Care; locks original message until resolved
- **Grace period** -- 5-day window for automatic case reopening on customer reply

**AI & Automation:**
- **PIE (Platform Intelligence Engine)** -- Automation backbone powering Flow Automations
- **Priority Score** -- ML-based urgency: Urgent (81-100), High (51-80), Medium (21-50), Low (0-20)
- **Performance Prediction** -- AI content grading (A+ to D) for Facebook and Instagram
- **Brand Voice** -- AI learns writing style from last 100 posts over 90 days (Enterprise)
- **PrimeTime** -- AI optimal posting times for FB, IG, TikTok only

**Technical Terms:**
- **SLA (Service Level Agreement)** -- Case resolution time targets with milestones and breach alerts
- **Spike Alert** -- Anomaly detection for mention volume spikes (AI or threshold-based)
- **Query Set** -- Grouped listening queries by geography, brand, or topic
- **Shared Insights** -- Instagram feature enabling collaboration post detection
- **Syndication** -- Review distribution: Source (origin) vs Recipient (displays)

### Critical Data Flows (PM Perspective)

**1. Content Ideation → Execution:**
```
Listening (trends) → Content Hub Inspiration (discover) → Collections (curate) 
→ Publisher (schedule) → Social Platforms (publish) → UA (analyze performance)
```

**2. Customer Issue → Resolution:**
```
Social Platform → Community (Priority Score + AI Reply) → Care (SLA + case management) 
→ Agent (complex) → Salesforce (CRM sync)
```

**3. Crisis Management:**
```
Listening (spike alert) → Community (surface mentions) → Care (triage) 
→ Publisher (coordinate response) → UA (measure impact)
```

**4. Influencer Campaign:**
```
Influencers (discovery) → Campaigns (manage) → UGC (collect content) 
→ Collections (curate) → Publisher (amplify) → UA (track ROI)
```

### Technical Constraints (Design Impact)

| Constraint Type | Value | Affects | Workaround/Notes |
|----------------|-------|---------|------------------|
| **Data Retention** | 90 days | Community, Listening | Care has unlimited if not deleted |
| **Session Timeout** | 7 days | All modules | Auto re-auth on activity |
| **Flow Automations** | Max 100/account | Automation | Request increase via Professional Services |
| **Collections** | Max 500/account | Content Hub | Archive old collections before creating new |
| **Agent Capacity** | Default 5 cases | Care | Configurable per agent |
| **Custom Feeds** | 30 global, 15 private | Community | Hard limits |
| **Bulk Operations** | Max 50 items | Community | Per-operation limit |
| **Labeling Rules** | ~300/account | Automation | Hard limit |
| **Historical Backfill** | 365 days | Listening | Varies by platform; none for Reddit, TikTok, IG hashtags |
| **Annual Mentions** | Billing-based quota | Listening | All queries suspended when reached |
| **Instagram Products** | 5/photo, 20/carousel | Publisher | Platform API limit |
| **YouTube Cancel** | <1h before publish | Publisher | Cannot cancel within 1 hour |

---

---

## 4. Product Modules

### 4.0 Command Center (Cross-Cloud)

**Function:** Strategic homepage with KPI summaries and tactical guidance  
**Input:** Objectives, connected profiles, user activity patterns  
**Output:** Tactical recommendations, frequently visited shortcuts  
**Capabilities:**
- KPI widgets: Followers, Content, Engagements, Impressions (last 30 days, Profile/Post-level)
- Objectives & Tactics: connects strategic goals to daily workflows
- Fuel Labels for categorizing objectives
- Frequently visited shortcuts
- Notifications panel (configurable in Settings)
**Integrations:** Data from all modules; same Objectives as Unified Analytics  
**Constraints:** Requires Fuel activation to become default homepage

### 4.1 Dashboard (Cross-Cloud)

**Function:** Legacy analytics with customizable widget-based dashboards  
**Input:** Social profiles, ad accounts, listening queries, care data  
**Output:** Custom dashboards with 700+ widget types  
**Capabilities:**
- 700+ widgets across social, paid, listening, care, bot, Live Commerce, UGC
- Widget types: Value, Column, Pie, Line, Area, Table
- Post-level vs Profile-level aggregation
- Templates: Care Case Analysis, Community Performance, Team Performance
- Duplicate dashboards for variants
- Global date range control
**Integrations:** Separate data pipeline from Unified Analytics  
**Constraints:** Dashboard widgets ≠ UA widgets (different systems); timezone from account settings

### 4.2 Unified Analytics (Cross-Cloud)

**Function:** Next-gen cross-module analytics with AI-powered insights  
**Input:** All platform data (social, listening, care, UGC, VoC)  
**Output:** Pre-loaded boards, custom visualizations, performance predictions  
**Capabilities:**
- **AI features:** Generate charts [EARLY ACCESS], Search metrics, Performance Prediction (FB/IG: A+ to D grades)
- Pre-loaded board hierarchy (DISCOVER):
  - Social profiles: Cross-platform, FB, IG (8 boards incl. Performance Prediction), X, YouTube, LinkedIn, Pinterest, TikTok, Snapchat
  - Paid: Paid insight overview
  - Campaigns & labels: Cross-platform + per-platform
  - Listening: Aggregated, AI Query highlights, Audience, Crisis, Key topics, Platforms, Sentiment, Volume
  - Care: Case management (Volume, Backlog, Processing), SLA, Agent performance [EARLY ACCESS]
  - Bot, Community, Link in Bio, Live Commerce (11 boards), UGC, R&R, Knowledge, Agent
- Saved views (persist filters, team-shared)
- Custom Boards (hand-pick widgets)
- Objectives (goal tracking)
**Integrations:** Feeds from all modules  
**Constraints:** Legacy Analytics discontinued (no migration tools, must recreate scheduled reports); Threads API in development; API unchanged  
**Product owner:** Antongiulio Migliacci

### 4.3 Publisher (Social Marketing Cloud)

**Function:** Content scheduling and multi-platform publishing  
**Input:** Media, text, campaigns; approval workflows  
**Output:** Published posts across 8 social platforms  
**Capabilities:**
- **AI Composer:** OpenAI-powered; 4 suggestions; Brand Voice (last 100 posts/90d, Enterprise); 11 tones; 30+ languages
- **PrimeTime:** AI scheduling for FB, IG, TikTok only; 24h/48h/7d windows
- **Link in Bio (Emplifi Link):** Microsite builder; Buttons + Social Grid; Smart/Integrate packages
- Multi-platform: FB, IG, TikTok, YouTube, X, LinkedIn, Threads, Pinterest
- Calendar views: Month/Week/Day; drag-and-drop rescheduling
- Approval workflows: Standard (creator→approvers) vs Flexible (multi-stage with roles)
- Emergency Stop Publishing: converts next 24h scheduled posts to drafts (irreversible)
- Generate Post ID (FB): pre-generate link for ad campaigns
**Platform-specific:**
- Instagram: Stories (manual/auto), Reels, Product tags (5/photo, 20/carousel), grid preview
- Facebook: Dark Posts, Stories, geo-gating, demographics, Generate Post ID
- YouTube: Custom thumbnails, playlists, age restrictions, subtitles; NO end screens; <1h cancel lock
- TikTok: PrimeTime only
- LinkedIn: Documents (PPT/DOC/PDF), tagging with API limits
- Threads: Images, carousels, videos, links; business profile required
**Integrations:** 
- → Social Platforms (publish)
- → Approval Flows (governance)
- ← Content Hub Collections (schedule from collections)
- → UA (performance analytics)
**Constraints:** Platform API limits; cannot cancel YouTube <1h before publish; IG product tags require approved Instagram Shop; Link in Bio only IG assets in multi-network posts  
**Product owner:** Michal Kadak

### 4.4 Community (Service Cloud)

**Function:** Unified social inbox for messages and reviews  
**Input:** Social messages from 8 platforms + review channels  
**Output:** Responses, escalations to Care, Salesforce cases  
**Capabilities:**
- **Priority Score:** ML-based (Urgent 81-100, High 51-80, Medium 21-50, Low 0-20); 90+ languages; not for DMs
- **AI Reply Assistant:** 6 actions (Rephrase, Make longer, longer+context, shorter, Simplify) + 4 tones + Translate; 30+ languages
- Custom feeds: max 30 global, 15 private
- Search: AND/OR/NOT, wildcards, "exact phrase"
- Bulk operations: max 50 items
- Escalation to Care: locks message until resolved
- Translations: 84 languages, 827 pairs
- Export: XLSX, max 10K messages, up to 500 comments/DMs per message
**Platform support:** FB, IG, X, LinkedIn (company pages only), YouTube, TikTok, Google Business, WhatsApp (individual chats only)  
**Integrations:**
- → Care (escalation locks message)
- → Salesforce ONE-WAY (create case/lead)
- ← Listening (FB/IG/X mentions appear as "Listening - Comment")
- ← Bot ("Handled by Bot" tracking)
**Constraints:** 90-day retention; WhatsApp individual only (no groups); LinkedIn company pages only; edit reply only FB comments + GB reviews (<90d, not in Care case)  
**Product owner:** Petr Landsman

### 4.5 Care (Service Cloud)

**Function:** Case management for escalated customer interactions  
**Input:** Escalated messages from Community/Bot/Listening  
**Output:** Resolved cases with SLA tracking  
**Capabilities:**
- **Case aggregation:** All messages per customer per profile = 1 case; unlimited retention
- **Grace period:** 5 days default (configurable); customer reply reopens; Spam = no grace period
- **Agent capacity:** Default max 5 cases/agent (configurable); x/y display; auto-assignment stops at max
- **Skills system:** Auto-assignment + workload distribution; group membership = auto-update
- **Case fields:** 5 types (Single/Multi-select, Text, Number, Date); 3 visibilities (Global, Read-only, Hidden)
- **AI Reply Assistant:** Same as Community (requires assignment to case)
- **"Summarize case":** AI-powered case summarization
- **SLA system:** Configurable policies with conditions; 4 milestones (Time to assign, First response, Next response, Total resolution); format: 1d 12h 30m; breach = notify agent + supervisors
**Case statuses:** New, Open, Pending, On hold, Done, Spam; auto-transitions: New→Open on assignment, Pending→Open on reply  
**Integrations:**
- ← Community (escalation unlocks after Done/Spam/grace period)
- ↔ Salesforce BI-DIRECTIONAL (status sync, message propagation; requires SocialPost object)
- ← Bot (escalated conversations)
- Zendesk, Microsoft Dynamics
**Constraints:** Grace period 5d; default max 5 cases/agent; last 500 messages visible per DM; Salesforce needs custom SocialPost object  
**Product owner:** Giovanni Romano

### 4.6 Content Hub (Social Marketing Cloud)

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

### 4.7 UGC (User-Generated Content)

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

### 4.8 Influencers

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

### 4.9 Listening

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

### 4.10 Ratings & Reviews

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

### 4.11 Emplifi Bot

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

### 4.12 Emplifi Agent

Contact center automation solution focusing on B2C contact (Service Cloud, formerly Astute Agent). Separate documentation at `agent-docs.emplifi.io` (Production + Training versions).

- **Bot handoff** -- receives escalated conversations from Bot with pre-filled case information
- **Case creation** -- automatic case creation on agent acceptance
- **Bot Interaction panel** -- real-time conversation management
- **Workflow automation** -- streamlined B2C customer service workflows
- **All channels** -- supports customer engagement across all channels and digital touchpoints
- **Legacy** -- previously known as Astute Agent; old docs at `agenthelp.myastutesolutions.com`

### 4.13 Flow Automations (Early Access)

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

### 4.14 Librarian

AI-powered in-app assistant for platform help. Language-model AI designed specifically for Emplifi questions.

- Accessible via Help & support icon at any time; draggable window across workspace
- Contextual answers specific to Emplifi; dynamically suggested relevant topics based on click history
- English primary, can respond in other languages "if you ask nicely"
- **Best practices:** ask specific Emplifi questions (not single words), provide context in prompts
- Related links + suggested relevant topics that change dynamically
- Feedback system to refine AI responses
- Direct support ticket creation (with subject, description, issue type, up to 5 attachments) if the question is not resolved
- Not a live chat, but unlimited questions allowed

### 4.15 Live Advisor

1-to-1 video shopping capability (Commerce Cloud). "Bring the in-store experience to your customers at home."

- Connects online shoppers with in-store associates via high-quality video and audio calls paired with chat
- Enhances online shopping by allowing agents to guide customers through products in real-time
- Drives conversions through personal interaction
- Part of the social commerce toolkit alongside shoppable posts and ShopLink (Link in Bio)
- **Product owner:** Jason Magrane (Senior Manager, GTM)

### 4.16 Voice of Customer (VoC) / 360 VoC

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

### 4.17 Emplifi Teams

Governance and access control layer for the platform. "Seamless Governance with Emplifi Teams."

- **Team-based access** -- logical grouping that defines access between users and resources
- **Roles** -- Platform admin (top-level), Team admin (per-team), team members
- **Team structure** -- Headquarters, regional teams (Japan, France, Portugal, Germany, etc.), functional teams (Global support, Content Creators, Automation)
- **Resource control** -- defines which social profiles, features, and data each team can access

### 4.18 Paid Social / Paid Analytics

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

### 4.19 Social FAQ Bot

Lighter-weight chatbot specifically for social media channels, distinct from the full Emplifi Bot.

- Delivers instant, accurate answers to common customer questions across social channels
- Reduces response times, cuts support costs, keeps customers engaged 24/7
- **Generate with AI** -- AI-assisted creation of bot responses and user utterance training
- Scales support with fast, personalized automation

### 4.20 Live Video Calling

Personalized one-to-one video calls from websites (related to but distinct from Live Advisor).

- **Customer-initiated** -- customers launch video calls directly from a widget on the website
- **Product showcase** -- agents can share product links and display product cards with prices during the video call
- **Multi-modal** -- combines high-quality video + audio + text chat in a single session
- Boosts online conversions with personalized video interactions that match or exceed in-store conversion rates

### 4.21 Knowledge Base

Internal or external-facing help article repository (Service Cloud).

- Used by Bot for answering customer questions from authored content
- Available to agents for reference during case handling
- Listed as a data source in Unified Analytics

### 4.22 Live Commerce

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

### 4.23 KAWO (Chinese Social)

Dedicated module for managing Chinese social networks (acquired company, separate branding and UI).

- **"Manage all of your Chinese social networks in one platform"**
- **Features** -- Multiple Accounts management, Reporting, Competitor analysis, Collaboration
- **Chinese platforms** -- WeChat, likely Weibo, Douyin, RED/Xiaohongshu
- **Login options** -- Email, WeChat, Mobile, SSO
- **Language** -- English and Chinese (中文) UI
- **Shanghai-based** -- KAWO is registered in Shanghai, China

### 4.24 Labs (Experimental Features)

Preview of upcoming smart product features. "Experience the future of Emplifi platform."

- Prototypes are fully functional and connected to the user's real account and data
- **Current prototypes:**
  - **Trends Summarization** [Listening] -- automatic daily summary of X (Twitter) trends for countries
  - **Scribe with Style** [Publisher] -- AI content creation assistant that learns the user's complete writing style
  - **Scribe** [Publisher] -- AI content creation assistant based on text generation technology
- "Give us feedback" button for user input on experimental features

---

## 5. Cloud Organization

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

## 6. Cross-Module Relationships

### 6.1 Product Design Scenarios

**Scenario 1: Brand Crisis Response**
- **User need:** React fast to negative spike in social mentions
- **Module flow:** Listening (spike alert) → Community (surface FB/IG/X mentions) → Care (triage urgent cases with SLA) → Publisher (coordinate response) → UA (measure impact)
- **Key integration points:** 
  - Listening mentions auto-appear in Community with "Listening - Comment" tag
  - Priority Score helps triage (Urgent 81-100)
  - Escalation to Care locks messages
  - Publisher can reference listening keywords for response
- **Design considerations:** 90-day retention means limited historical context; spike alerts need tuning per brand; Care SLA breach notifications to supervisors

**Scenario 2: Influencer Campaign Execution**
- **User need:** Find influencer → create content → amplify → measure ROI
- **Module flow:** Influencers (discovery 30M+ profiles) → Influencers Campaigns (Creator Portal) → UGC (collect content in Albums) → Content Collections (curate + vote) → Publisher (schedule amplification) → UA (track performance)
- **Key integration points:**
  - Influencer content auto-flows to UGC Albums
  - Collections can pull from UGC (max 500 collections)
  - Publisher can schedule collection items directly
  - UA boards show influencer performance
- **Design considerations:** Instagram Shared Insights required for full metrics; collaboration post detection needs managed content API; add influencers before products in campaigns (cannot reverse)

**Scenario 3: Customer Complaint Escalation**
- **User need:** Social complaint → human agent → permanent CRM record
- **Module flow:** Social Platform → Community (Priority Score + AI Reply Assistant) → Care (case management + SLA tracking) → Agent (complex B2C issues) → Salesforce (permanent record)
- **Key integration points:**
  - Community-to-Care escalation LOCKS message until resolved (Done/Spam/grace period)
  - Care-to-Salesforce is BI-DIRECTIONAL (status sync + message propagation; requires custom SocialPost object)
  - Bot can pre-screen before Community (escalates with full context)
- **Design considerations:** Grace period 5 days for reopening; max 5 cases per agent (configurable); Community assignment NOT required, Care assignment IS required; Salesforce ONE-WAY from Community, BI-DIRECTIONAL from Care

**Scenario 4: Content Performance Optimization**
- **User need:** Understand what content works → create more of it
- **Module flow:** Publisher (publish with PrimeTime) → Social Platforms → UA Performance Prediction (A+ to D grades, FB/IG only) → Content Hub Feed (analyze A/A+ rating) → Collections (save winners, team vote) → Publisher (replicate with AI Composer Brand Voice)
- **Key integration points:**
  - UA predicts performance before/after publish
  - Content Hub filters by A/A+ rating + sentiment
  - Collections support voting/discussion (max 500, archive before delete)
  - AI Composer Brand Voice learns from top content (needs min 100 posts/90 days, Enterprise)
- **Design considerations:** Performance Prediction only FB/IG; Brand Voice Enterprise-only, needs 100 posts/90d; PrimeTime only FB/IG/TikTok; Content Hub posts <4 comments = "No Sentiment"

### 6.2 Data Flow Diagram

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

## 7. Technical Architecture & Terminology

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

## 8. Emplifi AI ("Emplifi Fuel" Intelligence)

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

## 9. Integration & Data Architecture (docs.emplifi.io)

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

- **Public API:** RESTful; auth: Basic HTTP (token+secret) or OAuth 2.0 (authorization code flow); not enabled by default
- **API migration:** documented path from Socialbakers API 1.0 to 3.0; new metric names (e.g. `comments` → `number_of_comments`), new dimensions (`date.day`, `media_type`); v3 adds Content Hub metrics
- **Looker Studio connector** for external BI; prerequisites: Emplifi Public API access + API credentials; only monitored profiles; excludes Assets API and Community Content
- **Cloud storage:** Google Drive, OneDrive, Box, Gmail, Dropbox, Bynder, Adobe Experience Manager; used in Publisher, Community, Content Collections; auth tokens expire after hours
- **Salesforce integration:**
  - Community: ONE-WAY (create case/lead); token-based; agent name/email mapping; supports production and sandbox
  - Care: BI-DIRECTIONAL; case status sync (condition-based or bi-directional mapping); message propagation: sync (last 100 + ongoing) or one-time copy; requires custom SocialPost object
- **Webhooks** for R&R (real-time review notifications)
- **SpeedFlex widgets** for R&R (low-code JavaScript, themed, Design Editor with Setup Wizard)
- **TurnTo API** for programmatic R&R access
- **Link Shortener** -- Bit.ly integration in Publisher (enabled by default); clicks tracked in Emplifi
- **E-commerce platforms** -- Magento 2.1-2.4, Salesforce Commerce (SiteGenesis, SFRA), Shopify

### AI Reply Assistant (Community & Care)

Both Community and Care share the same AI Reply Assistant capabilities:
- **Rephrase** -- reword the reply
- **Make longer** -- expand the text
- **Make longer & add context** -- expand with contextual details
- **Make shorter** -- condense the text
- **Simplify** -- simplify language
- **Change tone** -- Empathetic, Friendly, Persuasive, Professional
- **Translate to** -- available when translations enabled; 30+ languages
- Human moderation required; blocks hate, harassment, violence, spam content
- In Community: assignment NOT required to reply; in Care: assignment IS required

### Publisher Platform-Specific Capabilities

| Platform | Key Capabilities | Limitations |
|----------|-----------------|-------------|
| Facebook | Dark Posts, Stories, Generate Post ID for ads, geo-gating, demographics | Natively published stories not visible; story mentions not supported |
| Instagram | Reels, Stories (manual/automatic), Product tags (5/photo, 20/carousel), Collaboration posts | Business account required; manual deletion in app; video carousels no user tagging |
| YouTube | Custom thumbnails, playlists, age restrictions, subtitles, categories, visibility | No end screens support; posts within 1h of publish cannot be cancelled |
| TikTok | PrimeTime scheduling | — |
| LinkedIn | Documents (PPT/DOC/PDF), business/personal tagging | API limits on tagging |
| Threads | Images, carousels, videos, links, AI Composer | Business profile required |
| Pinterest | Standard publishing | — |
| X | Standard publishing | — |

### R&R Data Feed Architecture

**Inbound feeds (to Emplifi):**
- Catalog feed (required) -- product data
- JavaScript Order feed -- order data for solicitation
- Historical Order feed -- past orders
- Knowledge Base, Cancelled Order, Email Opt-Out, Historical Reviews/Q&A (optional)

**Outbound feeds (from Emplifi):**
- SKU Average Rating feed
- UGC Feed (XML/JSON)
- Email Opt-Out feed
- Google Shopping Feed

**Syndication model:**
- Source site (origin of reviews) vs Recipient site (displays reviews)
- Product matching: GTIN, Brand+MPN, or Virtual Parent Code (VPC) for product families
- Internal syndication: both on Emplifi (one-way or bi-directional)
- Inbound/Open Review Syndication: external sources via data feed
- Migration from Bazaarvoice and PowerReviews supported

### Sentiment Analysis Technical Details

- **Technology:** Deep learning / NLP
- **Classes:** Positive, Negative, Neutral, No sentiment (4 for automation); 7 levels in Content Hub (Strongly Positive to Strongly Negative)
- **Accuracy:** ~65-80% by language (English ~80%, Portuguese ~65%)
- **Languages:** 100+ supported
- **Platforms:** Facebook (comments, replies, user posts, DM), Instagram (comments, DM), LinkedIn, Reddit, TikTok, WhatsApp, YouTube, X (mentions, replies), Google Business (reviews)
- **Indicators:** "A" icon when automatically classified; manual overrides take precedence
- **Scope:** Content Hub posts with <4 comments = "No Sentiment"

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

## 10. Design System: SOUL

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

### HTML/CSS Implementation (this prototype)

This project uses SOUL tokens via `soul-tokens.css` and typography utility classes in `styles.css`:

| Typography Class | SOUL Style | Use |
|------------------|------------|-----|
| `.headline-2` | H2 | Section titles |
| `.headline-3` | H3 | Subsection titles |
| `.headline-5` | H5 | Small blocks, labels (uppercase) |
| `.body-medium` | Body Medium | Default text |
| `.body-small` | Body Small | Compact text |
| `.helper-text` | Helper | Help text, captions |
| `.button-label` | Button Label | Button text |
| `.field-label` | Field Label | Form labels |
| `.badge-label` | Badge Label | Badge text |

**Spacing guidelines:** Use `--space-2` (6px) for associated elements, `--space-4` (12px) between elements, `--space-6` (24px) for form spacing. See `SOUL-USAGE.md` for component patterns.

**Resources:** [soul.emplifi.io](https://soul.emplifi.io/) | [Storybook](https://soul.dev.emplifi.io/) | Skill: `.cursor/skills/soul-design-system/`

---

## 11. AI Layer: Cortex (Prototype Context)

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

## 12. Extended Documentation

All Emplifi knowledge is consolidated in `.cursor/skills/`:

| Skill | Content | Location |
|-------|---------|----------|
| **emplifi-senior-pm** | PM framework, module lookup, constraints, roadmap & strategy | `.cursor/skills/emplifi-senior-pm/` |
| **emplifi-docs** | Condensed docs.emplifi.io: modules, platform config, UI states, workflows | `.cursor/skills/emplifi-docs/` |
| **soul-design-system** | SOUL tokens, 200+ components, patterns, content guidelines, 1014 icons | `.cursor/skills/soul-design-system/` |
| **soul-ui-designer** | UI design decisions, component selection, pattern application, accessibility | `.cursor/skills/soul-ui-designer/` |

Raw documentation data from docs.emplifi.io is in `emplifi-knowledge-raw-data/`.
Raw SOUL documentation data is in `soul-knowledge-raw-data/`.

### 2024–2026 Timeline (Summary)

- **2024:** UA expansion (Snapchat, Listening, UGC), R&R in Suite, AI in Community/Care, Google Business, WhatsApp moderation, Threads publishing
- **2025:** R&R in UA, AI features in R&R, Fuel verticalization (CMS for tactics, industry categorization)
- **2026:** Fuel AI Copilot, AI Copilot for Care, AI-powered UA widgets, Workflow & Bot automations, Emplifi Teams, Full Reddit integration

---

## 13. Platform Behavior & Constraints

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

