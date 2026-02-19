# Emplifi Product Knowledge Reference

> Comprehensive module capabilities, constraints, and integration patterns
> for Senior Product Manager/Designer role.
>
> Source: Complete docs.emplifi.io exploration (all pages and sub-pages)
> Last updated: 2026-02-19

## Module Capabilities (Detailed)

### Command Center
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

### Dashboard
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

### Unified Analytics
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

### Publisher
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
**Constraints:** Platform API limits; cannot cancel YouTube <1h before publish; IG product tags require approved Instagram Shop

### Community
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

### Care
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

## Data Architecture

### Listening Data Sources (Complete Table)

| Source | Coverage | What's Collected | Historical Backfill | Refresh Rate |
|--------|----------|-----------------|---------------------|-------------|
| Facebook | 800K+ pages | Posts (excl. ads), user posts, comments | Up to 365 days | Near real-time (< 1 hour) |
| Instagram | 9M+ Business/Creator accounts | Posts, Reels (no comments) + hashtag search | Up to 365 days (not for hashtags) | Varies by type |
| X (Twitter) | All public content | Posts, replies, mentions, reposts, quote tweets | Up to 365 days | Real-time |
| YouTube | 3M+ channels | Videos (title+desc), Shorts | Up to 365 days | < 2 hours |
| Reddit | All public content (add-on) | Posts, comments | No backfill | Real-time |
| TikTok | @mentions of owned accounts | Posts and comments with @mentions (top 1000 most liked only) | No backfill | Every 24-48 hours |
| Web | 1M+ websites scanned daily, 10M+ posts indexed daily | News, Blogs, Forums | Varies | Dynamic frequency |

### Community Data Freshness (Complete Table)

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

### Care SLA Milestones

**4 milestone types:**
- Time to assign (case created → agent assigned)
- First response time (case created → first agent reply)
- Next response time (customer reply → next agent reply)
- Total resolution time (case created → case resolved)

**Format:** 1d 12h 30m (days, hours, minutes)

**Priorities:** Urgent/High/Medium/Low (configurable per policy)

## AI Capabilities (Complete)

### AI Composer
**Technology:** OpenAI-powered  
**Output:** 4 suggestions at a time; "More Like This" generates 4 similar variants  
**Brand Voice (Enterprise):** Analyzes up to last 100 posts over 90-day period per profile; requires minimum 5 posts  
**Tone options (11):** Educational, Energetic, Excited, Happy, Inspirational, Neutral, Optimistic, Professional, Recommended, Sad, Sales pitch (disabled when Brand Voice is on)  
**Format:** General, News  
**Quick tweaks:** "Amplify emotions" or "Relax tone" on existing text  
**Additional elements:** hashtags, emojis, text length (short/medium/long), questions  
**Languages:** 30+ languages with automatic detection  
**Moderation:** Human moderation mandatory; cannot auto-deploy

### AI Reply Assistant
**Actions (6):** Rephrase, Make longer, Make longer & add context, Make shorter, Simplify  
**Tones (4):** Empathetic, Friendly, Persuasive, Professional  
**Translate to:** 30+ languages (when translations enabled)  
**Safety:** Blocks hate, harassment, violence, spam content  
**Community:** Assignment NOT required to reply  
**Care:** Assignment IS required

### Sentiment Analysis
**Technology:** Deep learning / NLP  
**Classes:** Positive, Negative, Neutral, No sentiment (4 for automation); 7 levels in Content Hub (Strongly Positive to Strongly Negative)  
**Accuracy:** ~65-80% by language (English ~80%, Portuguese ~65%)  
**Languages:** 100+ supported  
**Platforms:** Facebook (comments, replies, user posts, DM), Instagram (comments, DM), LinkedIn, Reddit, TikTok, WhatsApp, YouTube, X (mentions, replies), Google Business (reviews)  
**Indicators:** "A" icon when automatically classified; manual overrides take precedence  
**Scope:** Content Hub posts with <4 comments = "No Sentiment"

### Performance Prediction
**Grades:** A+ to D  
**Platforms:** Facebook and Instagram ONLY  
**Usage:** Pre-publish guidance and post-publish analysis in UA

### PrimeTime
**Platforms:** FB, IG, TikTok only  
**Analysis windows:** 24h, 48h, 7d behavioral patterns  
**Output:** Optimal posting times with visibility % improvement estimates

### Priority Score
**Algorithm:** ML-trained on historical Community user actions  
- **81-100 = Urgent** -- learned from messages that were hidden, banned, or deleted
- **51-80 = High** -- learned from messages that received a reply
- **21-50 = Medium** -- learned from messages that were liked
- **0-20 = Low** -- learned from messages with no action or marked as done  
**Languages:** 90+ languages with full diacritic support  
**Limitation:** Not available for direct messages

## Integration Patterns

### Salesforce Integration
**Community:** ONE-WAY (create case/lead)
- Token-based authentication
- Agent name/email mapping
- Supports production and sandbox

**Care:** BI-DIRECTIONAL
- Case status sync (condition-based or bi-directional mapping)
- Message propagation: sync (last 100 + ongoing) or one-time copy
- Requires custom SocialPost object

### Listening → Community Routing
**Routes to Community:** FB, IG, X mentions appear as "Listening - Comment"  
**Does NOT route:** Reddit, TikTok, YouTube, Web mentions

### Bot → Agent Escalation
Bot handoff with pre-filled context, case creation, conversation preservation

### Publisher Platform-Specific Capabilities

| Platform | Key Capabilities | Limitations |
|----------|-----------------|-------------|
| Facebook | Dark Posts, Stories, Generate Post ID for ads, geo-gating, demographics | Natively published stories not visible; story mentions not supported |
| Instagram | Reels, Stories (manual/automatic), Product tags (5/photo, 20/carousel), Collaboration posts | Business account required; manual deletion in app; video carousels no user tagging |
| YouTube | Custom thumbnails, playlists, age restrictions, subtitles, categories, visibility | No end screens support; posts within 1h of publish cannot be cancelled |
| TikTok | PrimeTime scheduling | — |
| LinkedIn | Documents (PPT/DOC/PDF), business/personal tagging | API limits on tagging |
| Threads | Images, carousels, videos, links, AI Composer | Business profile required |

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

## Product Domain Glossary

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

## Platform Behavior & Constraints

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
