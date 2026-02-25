# Demo Flows — Cortex AI

Living documentation of all demo flows. Update whenever `flows/*.js` changes.

---

## HUMAN CURATED

### Labubu Trend
**Persona:** Social Media Manager  
**Scenario:** Trend detection and campaign creation

1. Navigate to Command Center
2. Intelligence box appears — Cortex alerts that Labubu is trending and competitors are publishing related content
3. Cursor moves to the Cortex panel
4. Click "More ideas" — Cortex expands the list of suggested actions
5. Check 3 actions: create campaign + collection, create listening query, create analytics board
6. Click "Execute selected" — Cortex starts executing the actions
7. Open result: Collection "Labubu" (Content)
8. Open result: Publisher campaign "Labubu" (Publisher)
9. Open result: Listening query "Labubu" (Settings)
10. Open result: Analytics custom board "Labubu" (Unified Analytics)
11. Delete result: Analytics board
12. Delete result: Listening query
13. Delete result: Publisher campaign
14. Delete result: Collection

---

### Bulk User Import
**Persona:** Team Admin  
**Scenario:** Bulk import of users from an Excel file

1. Cursor appears in the center of the screen and moves into the Cortex panel
2. Click the `+` (attachment) button in the Cortex chatbox
3. Click "Upload file" in the dropdown — macOS Finder modal opens
4. Select `users-import.xlsx` from the Finder modal
5. Click the send button — message "add these users" with attached file appears in chat
7. Cortex: analyzing the uploaded file — `users-import-2026.xlsx`
8. Cortex: found 47 valid records (Name, Email, Department, Role)
9. Intelligence box appears with import options
10. Cortex: recommends importing users, creating teams, sending invites, and assigning roles
11. Check 4 actions: import users, create teams, send invites, assign roles
12. Click "Execute selected"
13. Cortex: import complete — 47 users, 6 teams created by department, invitations queued
14. Navigate to Settings / Users — all users are now visible in the User Management panel

---

### Content Calendar Import
**Persona:** Social Media Manager  
**Scenario:** Upload an Excel publishing plan and create Publisher drafts + Content Hub collection

1. Cursor appears in the center of the screen and moves into the Cortex panel
2. Click the `+` (attachment) button in the Cortex chatbox
3. Click "Upload file" in the dropdown — macOS Finder modal opens
4. Select `content-calendar-q2.xlsx` from the Finder modal
5. Click the send button — message "schedule these posts" with attached file appears in chat
6. Cortex: analyzing the uploaded file — detecting publishing plan structure
7. Cortex: found 20 posts across Instagram, Facebook, LinkedIn, and X with copy, schedules, and asset links
8. Intelligence box appears — title: "Content calendar detected"
9. Cortex: recommends creating post drafts, a Content Hub collection, uploading assets, and linking them to drafts
10. Check 4 actions: create 20 post drafts, create collection "Q2 Campaign Assets", upload assets from file links, link assets to drafts
11. Click "Execute selected"
12. Cortex: import complete — 20 drafts created, collection created, 20 assets uploaded and linked
13. Two result links appear, each with a delete button:
    - Publisher Calendar (filtered to show only Cortex-imported posts, badge "Cortex Import — Q2 2026" active)
    - Content Hub collection "Q2 Campaign Assets"
14. Click Publisher Calendar → navigates to Publisher Calendar with the Cortex Import filter active

> **Note:** Works with Excel files and Google Sheets — users can also paste a Google Sheet link directly into the chat.

---

## AI GENERATED

### Crisis Response
**Persona:** Brand Manager  
**Scenario:** Responding to a sudden negative sentiment spike for the EcoBottle Pro product

1. Navigate to Command Center
2. Cortex URGENT ALERT: 340% increase in negative mentions over the last 2 hours
3. Cortex: primary topic — product quality complaints about EcoBottle Pro
4. Intelligence box appears with recommended actions
5. Cortex: recommends pausing ads, drafting a crisis statement, escalating to Care, and setting up monitoring
6. Check 4 actions: pause promotional content, draft crisis response, escalate to Care, create monitoring board
7. Click "Execute selected"
8. Cortex: crisis protocol activated — 12 posts paused, 28 mentions escalated
9. Navigate to Publisher Calendar — view paused promotional posts
10. Cortex: posts are on hold until the crisis is resolved
11. Navigate to Care Inbox — Care team is handling escalated mentions
12. Cortex: Care team active, crisis monitoring board running
13. Navigate to Unified Analytics — real-time crisis monitoring board
14. Cortex: data shows sentiment stabilizing

---

### Review Automation
**Persona:** eCommerce Manager  
**Scenario:** Automating responses to 156 pending product reviews

1. Navigate to Command Center
2. Cortex: detected 156 unresponded reviews across the product catalog
3. Cortex: breakdown — 89 positive (4–5 stars), 42 neutral, 25 negative
4. Intelligence box appears with automation options
5. Cortex: recommends auto-replies for positive, drafts for negative, flagging refunds, and tagging
6. Check 4 actions: auto-respond to positive, draft responses for negative, flag refund mentions, tag by category
7. Click "Execute selected"
8. Cortex: automation complete — 89 responses sent, 25 drafts ready, 8 escalated
9. Navigate to Ratings & Reviews — review negative response drafts
10. Cortex: drafts ready for approval, all reviews tagged by category
11. Navigate to Unified Analytics — sentiment breakdown by category
12. Cortex: response rate increased to 97%

---

### Care Team Onboarding
**Persona:** Care Supervisor  
**Scenario:** Onboarding 8 new Care agents from a CSV roster file

1. Navigate to Command Center
2. Cortex: processed file `care-team-roster.csv`
3. Cortex: found 8 new agents with channel and skill assignments
4. Intelligence box appears with onboarding steps
5. Cortex: recommends creating accounts, assigning queues, configuring schedules, enabling macros
6. Check 4 actions: create agent accounts, assign queues, configure shift schedules, enable macro library
7. Click "Execute selected"
8. Cortex: onboarding complete — 8 accounts created, queues assigned, schedules set, 42 macros enabled
9. Navigate to Settings / Users — newly created agent accounts visible
10. Cortex: agents have inbox access
11. Navigate to Care Inbox — agents are ready to handle cases
12. Cortex: team capacity increased by 40%

---

### Content Optimizer
**Persona:** Content Lead  
**Scenario:** AI optimization of 23 scheduled posts for next week

1. Navigate to Command Center
2. Cortex: analyzed 23 scheduled posts for next week
3. Cortex: optimization opportunities found — predicted +32% engagement improvement
4. Intelligence box appears with optimization suggestions
5. Cortex: recommends rescheduling to optimal times, improving copy, updating hashtags, visual suggestions
6. Check 4 actions: reschedule to optimal times, enhance captions, update hashtags, suggest visual improvements
7. Click "Execute selected"
8. Cortex: optimization complete — 8 posts rescheduled, 23 captions enhanced, 5 visual suggestions ready
9. Navigate to Publisher Calendar — optimized content calendar (Monday peak time 9:30 AM)
10. Cortex: posts rescheduled to best engagement windows
11. Navigate to Content Collection — visual improvement suggestions ready for review
12. Cortex: suggestions prepared

---

### Competitor Alert
**Persona:** Brand Manager  
**Scenario:** Responding to CompetitorX's #SummerSavings campaign launch

1. Navigate to Command Center
2. Cortex ALERT: CompetitorX launched a major campaign targeting the same audience segment
3. Cortex: #SummerSavings campaign generating +45% engagement spike — counter-strategy recommended
4. Intelligence box appears with recommended response actions
5. Cortex: recommends campaign analysis, counter-content, boost budget, audience retargeting
6. Check 4 actions: analyze competitor campaign, generate counter-content, recommend paid boosts, set up audience retargeting
7. Click "Execute selected"
8. Cortex: response activated — analysis ready, 6 counter-content ideas generated, $2,500 boost budget recommended
9. Navigate to Unified Analytics — detailed campaign analysis and share of voice comparison
10. Cortex: share of voice comparison overview
11. Navigate to Publisher Calendar — boost recommendations and retargeting audience of 125K users
12. Cortex: retargeting audience created

---

### Bot Tuning
**Persona:** Bot Manager  
**Scenario:** Improving chatbot performance — containment rate from 73% to 80%

1. Navigate to Command Center
2. Cortex: analyzed chatbot performance — 2,847 conversations this week
3. Cortex: containment rate 73% (target: 80%) — +8% improvement opportunities identified
4. Intelligence box appears with optimization recommendations
5. Cortex: recommends improving intents, adding responses, updating fallback, training entities
6. Check 4 actions: improve intent recognition, add missing responses, update fallback flow, train product entity model
7. Click "Execute selected"
8. Cortex: optimization complete — 5 intents improved, 12 responses added, fallback updated, entity model retrained
9. Navigate to Bot Overview — post-optimization status
10. Cortex: top intent "order_status" now at 94% accuracy, bot is live with updated models
11. Cortex: expected containment rate improvement +8%, monitoring started

---

### Listening Report
**Persona:** PR Manager  
**Scenario:** Generating a weekly brand listening report for stakeholders

1. Navigate to Command Center
2. Cortex: compiled weekly brand data — 12,456 mentions across all channels
3. Cortex: positive sentiment +12% vs last week — stakeholder report ready
4. Intelligence box appears with report content options
5. Cortex: recommends executive summary, sentiment visualization, topic breakdown, share of voice
6. Check 4 actions: generate executive summary, create sentiment trend chart, topic breakdown, calculate share of voice
7. Click "Execute selected"
8. Cortex: report generated — summary, sentiment trends, topic breakdown, SOV: 34%
9. Navigate to Unified Analytics — weekly listening report with all visualizations
10. Cortex: data overview with charts
11. Cortex: share of voice increased to 34% (up from 31% last month), PDF report ready for download

---

### VoC Insights
**Persona:** CX Director  
**Scenario:** Analyzing Q1 Voice of Customer data for a board presentation

1. Navigate to Command Center
2. Cortex: analyzed Q1 VoC data — 4,287 survey responses and 18,000+ feedback touchpoints
3. Cortex: NPS improved to 42 (up from 38), top pain point: checkout process friction
4. Intelligence box appears with analysis options
5. Cortex: recommends NPS breakdown, theme analysis, journey mapping, Q2 action plan
6. Check 4 actions: NPS segment breakdown, deep-dive theme analysis, journey pain point mapping, create Q2 action plan
7. Click "Execute selected"
8. Cortex: analysis complete — NPS breakdown, 5 themes analyzed, journey map created, Q2 action plan drafted
9. Navigate to Unified Analytics — NPS segment breakdown and customer journey pain point map
10. Cortex: data overview and journey pain points
11. Navigate to VoC Survey Detail — promoter segment grew 8%, executive deck ready for board meeting
12. Cortex: deck ready for board presentation

---

## AI GENERATED — 100 FLOWS

### Group A: Publisher & Content

#### 1. Instagram Reels Batch
**Persona:** Social Media Manager | 
**File:** `flows/instagram-reels-batch.js`  
**Scenario:** Cortex identifies top-performing posts and batch-converts them into Reels with AI captions, optimal scheduling, and hashtags.

#### 2. Approval Bottleneck Fix
**Persona:** Content Lead | **File:** `flows/approval-flow-bottleneck.js`  
14 posts stuck in approval for 72h before a campaign launch. Cortex alerts reviewers, fast-tracks with temporary bypass rules, and recommends escalation.

#### 3. Brand Voice Refresh
**Persona:** Brand Manager | **File:** `flows/brand-voice-refresh.js`  
Brand tone updated after a rebranding. Cortex audits all scheduled content, flags non-compliant posts, updates the voice guidelines, and offers AI-assisted rewrites.

#### 4. LinkedIn Document Campaign
**Persona:** Content Strategist | **File:** `flows/linkedin-document-campaign.js`  
Converts 3 whitepapers into LinkedIn document posts with AI-extracted highlights, optimal scheduling, and engagement tracking setup.

#### 5. TikTok PrimeTime Boost
**Persona:** Social Media Manager | **File:** `flows/tiktok-primetime-boost.js`  
12 TikTok videos scheduled at suboptimal times. Cortex reschedules all to peak engagement windows and boosts the top 3.

#### 6. UGC to Publisher
**Persona:** Content Lead | **File:** `flows/ugc-to-publisher.js`  
Cortex identifies the top 20 UGC posts from the last 30 days, requests rights, and schedules them into Publisher as brand content.

#### 7. Product Launch Campaign
**Persona:** Marketing Manager | **File:** `flows/product-launch-campaign.js`  
Orchestrates a 3-week multi-channel product launch campaign — Publisher drafts, influencer activation, paid setup, and listening query.

#### 8. Evergreen Content Recycler
**Persona:** Content Lead | **File:** `flows/evergreen-content-recycler.js`  
Finds top-performing evergreen posts from the past year and reschedules them with refreshed copy for new audiences.

#### 9. Multi-Market Localization
**Persona:** Global Social Manager | **File:** `flows/multi-market-localization.js`  
Localizes a global campaign into 5 regional variants with AI translation, cultural adaptation, and market-specific scheduling.

#### 10. Dark Post Testing
**Persona:** Paid Social Manager | **File:** `flows/dark-post-testing.js`  
Sets up an A/B dark post experiment across 3 audience segments to test creative messaging before the main campaign launch.

---

### Group B: Community & Care

#### 11. Inbox Zero
**Persona:** Care Supervisor | **File:** `flows/inbox-zero.js`  
400-message backlog after a product issue. Cortex triages by urgency, auto-responds to FAQs, escalates complaints, and clears the queue.

#### 12. WhatsApp Templates
**Persona:** Care Manager | **File:** `flows/whatsapp-templates.js`  
Migrates the top 20 FAQ responses to WhatsApp Business API approved templates for faster, compliant messaging.

#### 13. SLA Breach Prevention
**Persona:** Care Supervisor | **File:** `flows/sla-breach-prevention.js`  
Automatically escalates 47 conversations approaching SLA breach, redistributes to available agents, and sends manager alerts.

#### 14. Multilingual Inbox
**Persona:** Care Manager | **File:** `flows/multilingual-inbox.js`  
Routes and translates messages from 8 languages in real-time, assigns to language-specific agents, and enables AI-assisted translation for replies.

#### 15. Ad Comment Moderation
**Persona:** Paid Social Manager | **File:** `flows/ad-comment-moderation.js`  
840 comments on active ads contain spam, negativity, and off-brand content. Cortex bulk-moderates, hides toxic comments, and sets up ongoing rules.

#### 16. Google Review Response
**Persona:** Reputation Manager | **File:** `flows/google-review-response.js`  
Responds to 67 pending Google Business reviews across 12 locations — AI drafts tailored responses and routes flagged reviews to location managers.

#### 17. Queue Rebalance
**Persona:** Care Supervisor | **File:** `flows/queue-rebalance.js`  
One agent has 3x the ticket volume of others. Cortex rebalances queues, adjusts routing rules, and prevents overload in real time.

#### 18. Smart Escalation
**Persona:** Care Manager | **File:** `flows/smart-escalation.js`  
Builds AI-powered escalation rules based on sentiment score, message history, and topic keywords to route complex cases to senior agents.

#### 19. VIP Customer Detection
**Persona:** Care Supervisor | **File:** `flows/vip-customer-detection.js`  
Identifies high-value customers in the Care queue (by order history, follower count, or custom CRM tags) and flags them for priority treatment.

#### 20. Agent Burnout Prevention
**Persona:** Care Manager | **File:** `flows/agent-burnout-prevention.js`  
Detects Care agents handling a high proportion of toxic/difficult conversations and automatically adjusts routing to protect wellbeing and quality.

---

### Group C: Listening & Analytics

#### 21. Sentiment Spike Alert
**Persona:** Brand Manager | **File:** `flows/sentiment-spike-alert.js`  
Investigates a sudden 23-point sentiment drop — Cortex traces it to a product complaint thread, alerts the team, and activates a response protocol.

#### 22. Share of Voice Battle
**Persona:** Brand Strategist | **File:** `flows/share-of-voice-battle.js`  
A competitor crossed above your SOV threshold. Cortex identifies the gap, recommends a content and PR push, and sets up weekly SOV tracking.

#### 23. Reddit Monitoring Setup
**Persona:** Insights Analyst | **File:** `flows/reddit-monitoring-setup.js`  
Sets up comprehensive Reddit listening across 8 relevant subreddits with sentiment analysis, keyword tracking, and weekly digest reports.

#### 24. Campaign Insights Report
**Persona:** Marketing Manager | **File:** `flows/campaign-insights-report.js`  
Generates a cross-channel campaign performance report with reach, engagement, conversion, and ROI breakdown for the last 30 days.

#### 25. Audience Insights Board
**Persona:** Insights Analyst | **File:** `flows/audience-insights-board.js`  
Builds a Unified Analytics board showing audience demographics, behavior patterns, top engagement times, and content preferences.

#### 26. Listening Query Cleanup
**Persona:** Insights Analyst | **File:** `flows/listening-query-cleanup.js`  
Audits 34 listening queries — 12 are overly broad or duplicative. Cortex merges, refines, and removes noise to improve signal quality.

#### 27. Executive Briefing
**Persona:** Brand Manager | **File:** `flows/executive-briefing.js`  
Generates an automated Monday morning AI briefing for leadership: top mentions, sentiment summary, competitor activity, and 3 recommended actions.

#### 28. Product Feedback Loop
**Persona:** Product Marketing Manager | **File:** `flows/product-feedback-loop.js`  
Routes social product feedback to the product team as structured Jira tickets — by feature request, bug report, or UX complaint.

#### 29. Influencer Spike Detection
**Persona:** Influencer Manager | **File:** `flows/influencer-spike-detection.js`  
A mid-tier influencer is organically creating viral content about the brand. Cortex detects it, analyzes reach potential, and activates an outreach flow.

#### 30. TikTok Topic Tracker
**Persona:** Social Media Manager | **File:** `flows/tiktok-topic-tracker.js`  
Sets up a TikTok trend tracker for 5 brand-relevant topic clusters with spike alerts and weekly trend digests.

---

### Group D: eCommerce & Reviews

#### 31. Seasonal Review Surge
**Persona:** eCommerce Manager | **File:** `flows/seasonal-review-surge.js`  
Manages a post-holiday surge of 340 new reviews — AI categorizes by topic, auto-responds to positive reviews, drafts responses for negative, and flags refund mentions.

#### 32. Negative Review Cluster
**Persona:** Reputation Manager | **File:** `flows/negative-review-cluster.js`  
18 negative reviews about the same product defect appeared in 48h. Cortex escalates to product team, drafts a public acknowledgment, and pauses promotional content.

#### 33. UGC Gallery Refresh
**Persona:** eCommerce Manager | **File:** `flows/ugc-gallery-refresh.js`  
Product page UGC galleries are 4 months old. Cortex selects fresh high-quality UGC, requests rights, and refreshes galleries across 12 product pages.

#### 34. Review Syndication Setup
**Persona:** eCommerce Manager | **File:** `flows/review-syndication-setup.js`  
Configures review syndication to distribute verified reviews across 5 retailer product pages — Walmart, Target, Amazon, Best Buy, and Costco.

#### 35. Review Incentive Campaign
**Persona:** eCommerce Manager | **File:** `flows/review-incentive-campaign.js`  
Review volume dropped 40% post-algorithm change. Cortex launches a post-purchase email campaign to drive authenticated review submissions.

---

### Group E: Bot & Automation

#### 36. Bot Handoff Optimization
**Persona:** Bot Manager | **File:** `flows/bot-handoff-optimization.js`  
42% of bot conversations hand off to agents — most unnecessarily. Cortex analyzes fallback patterns and adds responses to reduce handoffs by 25%.

#### 37. FAQ Bot Expansion
**Persona:** Bot Manager | **File:** `flows/faq-bot-expansion.js`  
Analyzes 800 unanswered customer questions and expands the FAQ bot with 40 new AI-generated intent responses.

#### 38. After-Hours Bot Config
**Persona:** Care Manager | **File:** `flows/after-hours-bot-config.js`  
Configures the after-hours bot to handle overnight volume surge with escalation rules, holding messages, and priority queue setup.

#### 39. Flow Automation Setup
**Persona:** Care Operations | **File:** `flows/flow-automation-setup.js`  
Builds 8 automated tagging and routing rules to handle top message categories without manual intervention.

#### 40. Intent Retraining
**Persona:** Bot Manager | **File:** `flows/intent-retraining.js`  
Retrains 5 underperforming bot intents based on misclassified conversations identified in the last 30 days.

---

### Group F: Influencers & Paid

#### 41. Influencer Campaign Launch
**Persona:** Influencer Manager | **File:** `flows/influencer-campaign-launch.js`  
Launches an influencer campaign for Q3 product launch — briefs 12 influencers, sets up tracking links, and configures performance monitoring.

#### 42. Paid Campaign Alert
**Persona:** Paid Social Manager | **File:** `flows/paid-campaign-alert.js`  
Paid campaign CPC is 2.4x above target. Cortex investigates, identifies audience overlap issue, and recommends immediate optimizations.

#### 43. UGC Influencer Pipeline
**Persona:** Influencer Manager | **File:** `flows/ugc-influencer-pipeline.js`  
Converts top 15 authentic UGC creators into micro-influencer partners with automated outreach, brief delivery, and contract workflow.

#### 44. Cross-Platform Budget Optimizer
**Persona:** Paid Social Manager | **File:** `flows/cross-platform-budget-optimizer.js`  
Analyzes paid social performance across Facebook, Instagram, TikTok, and LinkedIn and reallocates budget to best-performing channels.

#### 45. Lookalike Audience Builder
**Persona:** Paid Social Manager | **File:** `flows/lookalike-audience-builder.js`  
Builds lookalike audiences from best-converting customer segments for use across all paid social platforms.

---

### Group G: Governance & Strategy

#### 46. Approval Workflow Redesign
**Persona:** Social Media Director | **File:** `flows/approval-workflow-redesign.js`  
Current approval workflow takes 4.2 days on average. Cortex redesigns it to a 2-tier fast-track system targeting <24h turnaround.

#### 47. Label Taxonomy Cleanup
**Persona:** Care Operations | **File:** `flows/label-taxonomy-cleanup.js`  
Care labels have grown to 340 with significant duplication. Cortex consolidates to 45 clean labels and migrates all historical data.

#### 48. Quarterly Review Prep
**Persona:** Social Media Director | **File:** `flows/quarterly-review-prep.js`  
Prepares Q-end social performance review package — exec summary, channel performance, goal attainment, and Q+1 recommendations.

#### 49. New Market Onboarding
**Persona:** Global Social Manager | **File:** `flows/new-market-onboarding.js`  
Onboards a new regional team onto Emplifi with account setup, permission configuration, listening queries, and local workflow templates.

#### 50. Platform Health Audit
**Persona:** Platform Admin | **File:** `flows/platform-health-audit.js`  
Audits Emplifi configuration for best practices — identifies misconfigured workflows, unused features, and optimization opportunities.

---

### Group H: Agentic AI & Cross-module

#### 51. Autonomous Content Pipeline
**Persona:** Content Director | **File:** `flows/autonomous-content-pipeline.js`  
Sets up a fully autonomous AI content pipeline: trend detection → content ideation → draft creation → review routing → scheduling.

#### 52. Cross-Module Spike Response
**Persona:** Brand Manager | **File:** `flows/cross-module-spike-response.js`  
Coordinates a multi-module response to a viral spike — Listening detects it, Care prepares, Publisher pauses, Analytics tracks.

#### 53. Smart Budget Reallocation
**Persona:** Marketing Director | **File:** `flows/smart-budget-reallocation.js`  
Real-time AI budget reallocation triggered by performance anomaly — moves $30K from underperforming channels to high-ROI opportunities.

#### 54. A/B Creative Experiment
**Persona:** Creative Strategist | **File:** `flows/ab-creative-experiment.js`  
Sets up a systematic AI-driven creative A/B test across 3 platforms with statistical significance tracking and auto-winner selection.

#### 55. Visual UGC Brand Detection
**Persona:** Brand Manager | **File:** `flows/visual-ugc-brand-detection.js`  
AI vision detects 340 untagged brand appearances in customer UGC — Cortex surfaces them, requests rights, and routes to UGC gallery.

#### 56. Competitive Benchmark Alert
**Persona:** Brand Strategist | **File:** `flows/competitive-benchmark-alert.js`  
Competitor crossed a key performance threshold. Cortex alerts the team, benchmarks the gap, and proposes a counter-strategy.

#### 57. Anomaly Auto-Correction
**Persona:** Social Media Manager | **File:** `flows/anomaly-auto-correction.js`  
Detects and automatically corrects publishing anomalies — wrong timezone, duplicate post, missing UTM parameters.

#### 58. Employee Advocacy Launch
**Persona:** Brand Manager | **File:** `flows/employee-advocacy-launch.js`  
Launches an employee advocacy program with AI-curated content feed, sharing incentives, and performance leaderboard.

#### 59. Multi-Agent Care Resolution
**Persona:** Care Director | **File:** `flows/multi-agent-care-resolution.js`  
Coordinates a multi-agent AI system to resolve complex customer issue spanning social, email, and order management.

---

### Group I: Customer Journey & CX

#### 60. Customer Onboarding Journey
**Persona:** CX Manager | **File:** `flows/customer-onboarding-journey.js`  
Builds a social-driven customer onboarding journey with welcome sequences, milestone messages, and NPS check-ins.

#### 61. Churn Prevention Social
**Persona:** CX Director | **File:** `flows/churn-prevention-social.js`  
Detects at-risk customers via social signals and CRM data, triggers retention offers, and monitors recovery.

#### 62. NPS Action Plan
**Persona:** CX Director | **File:** `flows/nps-action-plan.js`  
Converts NPS detractor feedback into a structured action plan with owner assignment, timeline, and resolution tracking.

#### 63. Post-Purchase Care
**Persona:** eCommerce Manager | **File:** `flows/post-purchase-care.js`  
Automates post-purchase Care follow-up — delivery confirmation, review request, and 30-day satisfaction check-in.

#### 64. Negative Experience Recovery
**Persona:** Care Manager | **File:** `flows/negative-experience-recovery.js`  
Identifies customers with negative experiences in the last 30 days and triggers personalized recovery messaging.

#### 65. VoC to Product
**Persona:** Product Marketing Manager | **File:** `flows/voc-to-product.js`  
Routes structured social Voice of Customer data — feature requests, bug reports, UX complaints — to the product team as actionable tickets.

#### 66. CSAT Monitoring
**Persona:** Care Director | **File:** `flows/csat-monitoring.js`  
Builds a CSAT monitoring dashboard with alert thresholds, agent-level tracking, and weekly trend reports.

#### 67. Loyalty Campaign
**Persona:** CX Manager | **File:** `flows/loyalty-campaign.js`  
Launches a social loyalty program targeting the top 500 brand advocates — exclusive content, early access, and community recognition.

#### 68. CX Weekly Digest
**Persona:** CX Director | **File:** `flows/cx-weekly-digest.js`  
Generates an automated weekly CX intelligence digest — CSAT trends, NPS movement, top issues, and care volume analysis.

---

### Group J: Data & Reporting

#### 69. Analytics Dashboard Migration
**Persona:** Analytics Manager | **File:** `flows/analytics-dashboard-migration.js`  
Migrates 8 legacy analytics dashboards to Unified Analytics with data mapping, validation, and stakeholder notification.

#### 70. Social ROI Report
**Persona:** Marketing Director | **File:** `flows/social-roi-report.js`  
Builds an end-to-end social ROI attribution report connecting social engagement to pipeline, revenue, and cost-per-outcome.

#### 71. Content Performance Audit
**Persona:** Content Strategist | **File:** `flows/content-performance-audit.js`  
Audits 6 months of content performance — identifies top formats, best topics, worst-performing content types, and Q3 recommendations.

#### 72. Paid vs. Organic Attribution
**Persona:** Marketing Analyst | **File:** `flows/paid-vs-organic-attribution.js`  
Builds a paid vs. organic performance attribution model to optimize channel investment across the funnel.

#### 73. Real-Time Event Tracking
**Persona:** Event Marketing Manager | **File:** `flows/real-time-event-tracking.js`  
Sets up live event social monitoring — real-time mention tracking, sentiment dashboard, and post-event performance report.

#### 74. Data Quality Audit
**Persona:** Analytics Manager | **File:** `flows/data-quality-audit.js`  
Identifies and fixes data quality issues across reporting — duplicate profiles, missing UTMs, broken tracking pixels.

#### 75. Listening to UA Board
**Persona:** Insights Analyst | **File:** `flows/listening-to-ua-board.js`  
Creates a Unified Analytics custom board that visualizes listening insights alongside owned social performance data.

#### 76. Annual Report Prep
**Persona:** Social Media Director | **File:** `flows/annual-report-prep.js`  
Compiles the annual social media performance report — 12 months of data, YoY comparisons, and strategic recommendations.

#### 77. SOV Tracker Setup
**Persona:** Brand Strategist | **File:** `flows/sov-tracker-setup.js`  
Sets up a comprehensive share of voice competitive tracker across 5 brands with weekly alerts and automated monthly reports.

---

### Group K: Industry-Specific

#### 78. Retail Seasonal Campaign
**Persona:** Retail Marketing Manager | **File:** `flows/retail-seasonal-campaign.js`  
Orchestrates a 6-week Black Friday social campaign — pre-build content, influencer activation, paid campaign setup, and real-time monitoring.

#### 79. Finance Compliance Review
**Persona:** Compliance Manager | **File:** `flows/finance-compliance-review.js`  
Audits all scheduled social content for financial services compliance — flags regulatory issues and configures ongoing compliance monitoring.

#### 80. B2B LinkedIn Program
**Persona:** B2B Marketing Manager | **File:** `flows/b2b-linkedin-program.js`  
Builds a 90-day B2B thought leadership program on LinkedIn — employee advocacy, content series, and lead generation tracking.

#### 81. Hospitality Reputation
**Persona:** Reputation Manager | **File:** `flows/hospitality-reputation.js`  
Manages hotel group reputation across TripAdvisor, Google, and Booking.com — AI responses, manager escalation, and reputation monitoring.

#### 82. Healthcare Social Monitoring
**Persona:** Healthcare Marketing Manager | **File:** `flows/healthcare-social-monitoring.js`  
Sets up HIPAA-compliant social monitoring and Care workflows with patient privacy safeguards and compliance documentation.

#### 83. eCommerce Product Launch
**Persona:** eCommerce Manager | **File:** `flows/ecommerce-product-launch.js`  
Coordinates a multi-channel eCommerce product launch — social campaign, review seeding, UGC activation, and performance tracking.

#### 84. Franchise Governance
**Persona:** Franchise Marketing Manager | **File:** `flows/franchise-governance.js`  
Enforces brand standards across 200 franchise social accounts — compliance monitoring, content approval workflows, and regional reporting.

#### 85. Telco Care Automation
**Persona:** Care Manager | **File:** `flows/telco-care-automation.js`  
Automates Care response to a network outage social surge — mass auto-responses, status updates, and post-incident recovery.

#### 86. CPG UGC Amplification
**Persona:** Brand Manager | **File:** `flows/cpg-ugc-amplification.js`  
Builds a systematic UGC amplification pipeline for CPG brands — AI-selects top 40 posts, requests rights, and creates 8-week resharing schedule.

#### 87. Media Real-Time Response
**Persona:** Communications Director | **File:** `flows/media-realtime-response.js`  
Coordinates a 30-minute response to a brand mention in a major Reuters story — social monitoring, response drafting, Care briefing, and leadership alert.

---

### Group L: Strategic & Executive

#### 88. Q3 Strategy Kickoff
**Persona:** Social Media Director | **File:** `flows/q3-strategy-kickoff.js`  
Synthesizes Q2 data into a Q3 strategy package — 5 priorities, KPI targets, content calendar framework, and leadership presentation.

#### 89. Board Reporting Package
**Persona:** Marketing Director | **File:** `flows/board-reporting-package.js`  
Compiles a board-ready social and CX performance package — exec summary with 3 wins, 1 challenge, and 2 H2 priorities.

#### 90. Brand Health Quarterly Review
**Persona:** Brand Director | **File:** `flows/brand-health-quarterly.js`  
Analyzes 90 days of brand health data — sentiment trends, SOV, brand association mapping, and Q3 early warning alerts.

#### 91. Team Performance Review
**Persona:** Social Media Director | **File:** `flows/team-performance-review.js`  
Generates Q2 scorecards for all 14 team members with burnout detection, skills gap identification, and recognition recommendations.

#### 92. AI Governance Rollout
**Persona:** Marketing Director | **File:** `flows/ai-governance-rollout.js`  
Deploys AI governance framework before team-wide AI expansion — approval workflows, sensitive topic detection, usage policy, and monitoring dashboard.

#### 93. Market Expansion Setup
**Persona:** Global Social Manager | **File:** `flows/market-expansion-setup.js`  
Configures localized social infrastructure for 3 new SEA markets (Vietnam, Thailand, Indonesia) — platform matrix, listening, care routing, content framework.

#### 94. Social Budget Reforecast
**Persona:** Marketing Director | **File:** `flows/budget-reforecast.js`  
Mid-year budget reforecast — identifies $120K reallocation from underperforming TikTok/Twitter to LinkedIn and Influencer for H2.

#### 95. Agency Brief Builder
**Persona:** Marketing Manager | **File:** `flows/agency-brief-builder.js`  
Generates a data-backed agency creative brief for Q3 — objectives, audience personas, competitive benchmarks, and KPI framework.

#### 96. Social Tech Vendor Evaluation
**Persona:** Social Media Director | **File:** `flows/vendor-evaluation.js`  
Reviews 3 contract renewals and identifies $52K annual savings via listening tool consolidation — scorecards, usage analysis, negotiation strategy.

#### 97. Crisis Preparedness Audit
**Persona:** Communications Director | **File:** `flows/crisis-preparedness-audit.js`  
Audits and closes 4 critical crisis preparedness gaps — pre-approved dark posts, care escalation protocol, listening expansion, and executive comms playbook.

---

## AI GENERATED — COMPETITOR INSPIRED (Flows 101–200)

*Inspired by competitive analysis of Sprinklr and Sprout Social — translated into Emplifi/Cortex context.*

### Group M: Sprinklr Service AI

#### 101. Contact Driver Discovery
**Persona:** Bot Manager | **File:** `flows/contact-driver-discovery.js`  
Cortex analyzed 10,000 Care conversations using unsupervised AI and found 8 recurring customer intents the bot currently cannot handle — causing 23% unnecessary escalations. Recommends creating new bot flows for each.

#### 102. KB Gap Analysis
**Persona:** Knowledge Manager | **File:** `flows/kb-gap-analysis.js`  
Cortex analyzed which questions agents couldn't answer using existing KB articles. 23 distinct gaps found — agents searched but found no match in 4,200+ cases last month. Proposes new articles to fill each gap.

#### 103. KB Refinement
**Persona:** Knowledge Manager | **File:** `flows/kb-refinement.js`  
Cortex analyzed 340 total KB articles and found 14 duplicates and 8 ambiguous entries — reducing bot containment and agent response quality. Recommends merge and cleanup plan.

#### 104. Statistical Stories
**Persona:** Care Analytics | **File:** `flows/statistical-stories.js`  
"Shipping delay" complaints spiked +47% this week vs last month baseline. Root cause: Regional carrier outage in Midwest — 3-day backlog affecting 12,000 orders. Cortex surfaces root cause and recommended response actions.

#### 105. Agent Nudge Setup
**Persona:** Care Supervisor | **File:** `flows/agent-nudge-setup.js`  
Configure real-time AI coaching nudges for Care agents — triggered when conversation sentiment turns negative, response time exceeds 3 minutes, or a VIP customer is detected.

#### 106. After-Call Work Autofill
**Persona:** Care Operations | **File:** `flows/acw-autofill-config.js`  
Configure AI to auto-fill case disposition forms from conversation transcripts. Saves 4 minutes per case × 80 cases/day = 5+ hours saved daily for the team.

#### 107. Smart Response Training
**Persona:** Care Manager | **File:** `flows/smart-response-training.js`  
Cortex analyzed the top 500 best-rated agent responses from the last 6 months, identified patterns, clustered by topic, and built a RAG-powered reply suggestion model.

#### 108. AI-Powered Agent Onboarding
**Persona:** Care Supervisor | **File:** `flows/care-agent-onboarding-ai.js`  
6 new Care agents joining next week. Cortex created personalized onboarding plans, configured queues and skills, and enabled AI reply assistance to compensate for lack of social media tone knowledge.

#### 109. AI Quality Management
**Persona:** Care Director | **File:** `flows/quality-management-ai.js`  
Enable automated QA scoring for all Care conversations — scoring criteria: tone, resolution, compliance, brand voice. Weekly QA reports generated per agent automatically.

#### 110. Case Routing Automation
**Persona:** Care Operations | **File:** `flows/case-routing-automation.js`  
Configure AI to automatically classify and route 12 case types (returns, shipping, billing, complaints, compliments, technical, account, product, warranty, refund, order status, general) without manual tagging.

#### 111. Voice Bot TTS Setup
**Persona:** Bot Manager | **File:** `flows/voice-bot-tts-setup.js`  
Configure Text-to-Speech for the voice bot channel. Test 3 voice profiles, select the most natural-sounding one, and deploy to the phone support channel.

#### 112. Dynamic Workflow Builder
**Persona:** Care Operations | **File:** `flows/dynamic-workflow-builder.js`  
Build AI-assisted guided workflows for the 5 most complex Care scenarios: product returns, account closures, escalations, billing disputes, and technical issues.

---

### Group N: Sprinklr Insights AI

#### 113. Sentiment Shift Alert
**Persona:** Brand Analyst | **File:** `flows/sentiment-shift-alert.js`  
Cortex detected a -18 point sentiment drop across Instagram and X in the past 6 hours — correlated with a PR event. Surfaces 47 affected posts, top negative themes, and recommended immediate response actions.

#### 114. Competitor Benchmark AI
**Persona:** Brand Strategist | **File:** `flows/competitor-benchmark-ai.js`  
Cortex ran automated benchmarking vs 5 rivals — comparing engagement rate, share of voice, and content cadence. Surfaces 3 strategic gaps to exploit this quarter.

#### 115. Trend Report Generator
**Persona:** Research Analyst | **File:** `flows/trend-report-generator.js`  
Cortex auto-generates a weekly trend intelligence report covering your brand, industry, and top 3 competitors. Translates raw listening data into 5 actionable insights.

#### 116. Campaign Lift Analysis
**Persona:** Campaign Manager | **File:** `flows/campaign-lift-analysis.js`  
Post-campaign: Cortex measured lift across 6 weeks — brand mentions +34%, share of voice +8%, sentiment up 12 points. Attribution report links paid + organic to awareness metrics.

#### 117. Custom Taxonomy Builder
**Persona:** Research Analyst | **File:** `flows/custom-taxonomy-builder.js`  
Cortex analyzed 50,000 posts to build a custom topic taxonomy for your industry — 8 main themes, 34 subtopics, and smart classification rules configured automatically.

#### 118. Media Monitoring Setup
**Persona:** PR Manager | **File:** `flows/media-monitoring-setup.js`  
Cortex sets up real-time media monitoring for a product launch — brand, product, and executive name queries configured. Alerts trigger when coverage exceeds 50 mentions/hour.

#### 119. Influencer Sentiment Scan
**Persona:** Influencer Manager | **File:** `flows/influencer-sentiment-scan.js`  
Cortex scanned content from 120 active influencers and detected 4 whose recent posts show negative brand alignment. Recommends review before next campaign activation.

#### 120. Audience Intent Signals
**Persona:** Brand Strategist | **File:** `flows/audience-intent-signals.js`  
Cortex identified purchase intent signals in 8,400 brand conversations — segmented by product category. Surfaces 3 high-intent audience clusters ready for retargeting in paid social.

#### 121. Share of Voice Tracker
**Persona:** Marketing Director | **File:** `flows/share-of-voice-tracker.js`  
Brand's share of voice dropped from 34% to 27% while Competitor A gained 6 points. Cortex diagnoses the cause and proposes a content response strategy to reclaim reach.

#### 122. Listening Query Optimizer
**Persona:** Research Analyst | **File:** `flows/listening-query-optimizer.js`  
Cortex reviewed 23 active listening queries and found 6 returning noisy irrelevant data. Proposes optimized boolean queries reducing noise by 60% while maintaining signal coverage.

---

### Group O: Sprinklr Marketing AI

#### 123. AI Campaign Brief
**Persona:** Campaign Manager | **File:** `flows/ai-campaign-brief.js`  
Cortex generates a complete campaign brief from scratch — objective, target personas, channel mix, messaging pillars, creative direction, and KPIs — all based on historical top-performing campaigns.

#### 124. Content Localizer
**Persona:** Global Marketing Manager | **File:** `flows/content-localizer.js`  
Cortex localizes a campaign for 7 markets — adapts copy, adjusts visual direction guidelines, and flags 4 culturally sensitive elements. Estimated time saved: 3 days of manual work.

#### 125. Channel Mix Optimizer
**Persona:** Performance Marketing Manager | **File:** `flows/channel-mix-optimizer.js`  
Cortex analyzed 6 months of campaign data and recommends reallocating budget: reduce Twitter by 30%, boost Instagram Stories by 20%, test LinkedIn for B2B. Expected +12% ROAS.

#### 126. Ad Creative Rotator
**Persona:** Paid Social Manager | **File:** `flows/ad-creative-rotator.js`  
Cortex detected creative fatigue — CTR dropped 35% in 7 days. Auto-generates 4 creative variations from existing brand assets, ready for A/B testing.

#### 127. Compliance Content Shield
**Persona:** Compliance Manager | **File:** `flows/compliance-content-shield.js`  
Pre-publish scan across 18 scheduled posts — Cortex flags 3 for regulatory risk (undisclosed partnership, banned health claim, healthcare language) and suggests approved rewrites.

#### 128. Budget Pacing Alert
**Persona:** Campaign Manager | **File:** `flows/budget-pacing-alert.js`  
Campaign is 68% through budget but only 41% through the flight period — overpacing by 27 points. Cortex recommends automatic bid adjustments across 4 ad sets to normalize delivery.

#### 129. Content Performance Predictor
**Persona:** Content Strategist | **File:** `flows/content-performance-predictor.js`  
Before publishing 5 campaign posts, Cortex scores each for predicted engagement (Low/Medium/High). Recommends optimizing the 2 lowest-scored posts before going live.

#### 130. Multi-Brand Content Sync
**Persona:** Brand Manager | **File:** `flows/multi-brand-content-sync.js`  
Cortex identifies 4 content duplicates and 2 conflicting messages across 8 regional brand profiles publishing independently. Proposes a unified content calendar with regional slots.

#### 131. Paid-Organic Amplifier
**Persona:** Growth Manager | **File:** `flows/paid-organic-amplifier.js`  
Cortex identifies the top 5 organic posts from the past month and recommends boosting 3 for paid amplification — predicts 10x reach increase with $2,500 incremental budget.

#### 132. Brand Voice Consistency Check
**Persona:** Brand Manager | **File:** `flows/creative-brand-voice-check.js`  
Cortex scans all 62 posts published this month and detects 11 that deviate from brand voice guidelines (too formal, too casual, or mixed tone). Proposes AI-rewrites aligned to brand playbook.

---

### Group P: Trellis-Inspired Flows

#### 133. Intelligent Case Triage
**Persona:** Care Team Lead | **File:** `flows/trellis-case-triage.js`  
Cortex analyzed 847 unread care messages from the past 12 hours — classified by urgency, sentiment, and intent. 23 critical cases escalated, 340 routed to correct queues, 189 routine cases with macro suggestions.

#### 134. Autonomous Care Resolver
**Persona:** Care Operations Manager | **File:** `flows/autonomous-care-resolver.js`  
Cortex identified 34 low-complexity case types (order status, FAQ, password reset) suitable for bot automation. Expected deflection: 28% of total care volume — freeing agents for complex issues.

#### 135. Social Inbox Zero
**Persona:** Community Manager | **File:** `flows/social-inbox-zero.js`  
1,247 unread social messages accumulated over the weekend. Cortex categorized, prioritized, and suggested responses for all. 8 urgent brand reputation items flagged for immediate human attention.

#### 136. Smart Escalation Paths
**Persona:** Care Manager | **File:** `flows/smart-escalation-paths.js`  
Configure 6 AI-powered escalation rules: VIP customer detection, sentiment cliff detection, repeat contact ID, legal keyword detection, executive mention alerts, and SLA breach prediction.

#### 137. AI Report Builder
**Persona:** Analytics Manager | **File:** `flows/trellis-report-builder.js`  
"I need a C-suite social ROI report for Monday." Cortex gathers data from Care, Publishing, and Listening — structures it into a 6-slide executive narrative with key metrics, YoY trends, and recommended actions.

#### 138. Cross-Channel Care View
**Persona:** Head of CX | **File:** `flows/cross-channel-care-view.js`  
Cortex correlates care conversations across Instagram, X, Facebook Messenger, and email — creating a unified customer journey view. Identified 156 customers who contacted via 2+ channels in the past 30 days.

#### 139. Proactive Care Triggers
**Persona:** Care Innovator | **File:** `flows/proactive-care-trigger.js`  
Cortex identified 12 customers who tweeted product frustration before opening a formal ticket. Configures proactive outreach — auto-reach out with personalized messages before they escalate.

#### 140. AI Review Moderation
**Persona:** Brand Manager | **File:** `flows/ai-review-moderation.js`  
4,200 new product reviews accumulated since last month. Cortex classified them into 8 sentiment themes, flagged 47 requiring response, and drafted personalized reply templates for each theme.

#### 141. Shift Handover Summary
**Persona:** Care Team Lead | **File:** `flows/shift-handover-summary.js`  
End of shift: Cortex generates a comprehensive handover brief for the incoming team — open cases, escalation status, trending topics, SLA risk items, and priority actions for the next 4 hours.

#### 142. Care Capacity Forecasting
**Persona:** Care Operations Manager | **File:** `flows/care-capacity-forecasting.js`  
Cortex analyzed historical care volume patterns and forecasts next week's inbound — expects +45% spike Monday–Tuesday post-promotion. Recommends scheduling 3 extra agents and enabling overflow bot.

---

### Group Q: Sprout AI Assist Flows

#### 143. Caption Optimizer
**Persona:** Social Media Manager | **File:** `flows/ai-caption-optimizer.js`  
28 posts scheduled for next week. Cortex scored captions for predicted engagement and rewrote the bottom 8 with platform-native language — casual for TikTok, professional for LinkedIn, visual-first for Instagram.

#### 144. Hashtag Intelligence
**Persona:** Content Creator | **File:** `flows/hashtag-intelligence.js`  
Cortex analyzed 90 days of hashtag performance across all platforms. Retires 12 underperforming tags, promotes 6 rising tags, and discovered 4 niche hashtags your audience already uses organically.

#### 145. Best Time to Post
**Persona:** Social Media Manager | **File:** `flows/best-time-to-post.js`  
Cortex identifies optimal posting windows per platform from 6-month engagement data: Instagram peaks Wed/Fri 6–7pm, LinkedIn Mon/Thu 8–9am, X is inconsistent — recommends real-time scheduling.

#### 146. Content Repurposer
**Persona:** Content Strategist | **File:** `flows/content-repurposer.js`  
Cortex identifies the top 12 blog articles and transforms each into social-ready micro-content: 3 Twitter threads, 4 LinkedIn carousels, 5 Instagram caption series. Publishes all to draft in one action.

#### 147. AI Listening Insights
**Persona:** Brand Analyst | **File:** `flows/ai-listening-insights.js`  
Cortex processed 34,000 brand mentions from the past month and distilled them into 7 actionable insight cards: top themes, emerging topics, key influencers, and recommended content opportunities.

#### 148. Engagement Rate Recovery
**Persona:** Social Media Manager | **File:** `flows/engagement-rate-recovery.js`  
Instagram engagement rate dropped from 3.2% to 1.8% over 6 weeks. Cortex diagnoses 3 root causes (posting frequency, content mix, caption length) and proposes a recovery content plan.

#### 149. UGC Curation Automation
**Persona:** Content Manager | **File:** `flows/ugc-curation-automation.js`  
Cortex scanned 8,400 tagged posts and identified 234 high-quality UGC pieces across 6 product categories. Rights requests sent automatically to 234 creators; 189 approved within 2 days.

#### 150. Social Customer Profiles
**Persona:** CRM Manager | **File:** `flows/social-customer-profiles.js`  
Cortex enriches 1,200 care contacts with social data — adds sentiment history, topic interests, influence score, and platform preferences. Syncs enriched profiles back to CRM.

#### 151. Content Pillar AI
**Persona:** Content Strategist | **File:** `flows/content-pillar-ai.js`  
Based on the top 100 posts from the past year, Cortex identified 5 content pillars driving 80% of engagement. Recommends adjusting the mix: increase Educational (18%→30%), reduce Promotional (35%→20%).

#### 152. Social ROI Attribution
**Persona:** CMO | **File:** `flows/social-roi-attribution.js`  
Cortex builds a social ROI attribution model connecting social engagement to 847 website conversions and $234K revenue last quarter. Breaks down contribution by channel, content type, and campaign.

---

### Group R: Sprout Influencer & Creator AI

#### 153. Creator Discovery AI
**Persona:** Influencer Marketing Manager | **File:** `flows/creator-discovery-ai.js`  
Cortex searched 50M+ creator profiles for a campaign brief — found 34 micro-influencers (10K–100K followers) with authentic audience overlap. Audience age matches the 18–34 target at 73%.

#### 154. Influencer Fraud Detection
**Persona:** Influencer Manager | **File:** `flows/influencer-fraud-detection.js`  
Before signing 8 new influencer deals, Cortex scanned for fake followers and engagement pods. Flagged 2 profiles (43% fake followers each) and 1 engagement pod member. Estimated savings: ~$18K in wasted budget.

#### 155. Creator Brief Generator
**Persona:** Influencer Campaign Manager | **File:** `flows/creator-brief-generator.js`  
Campaign launches in 4 days but briefs aren't ready for 12 creators. Cortex auto-generates personalized creative briefs for each — tailored to content style, past brand work, and audience preferences.

#### 156. Influencer ROI Tracker
**Persona:** Marketing Analytics Manager | **File:** `flows/influencer-roi-tracker.js`  
Q1 campaign wrapped. Cortex calculated ROI per influencer: 3 over-performed (CPE $0.12 vs $0.45 benchmark), 5 underperformed. Recommends renewing top 3 and replacing bottom 2 for Q2.

#### 157. UGC Rights Campaign
**Persona:** Content Manager | **File:** `flows/ugc-rights-campaign.js`  
New product launch generated 3,400 tagged posts. Cortex selected 156 highest-quality UGC pieces and auto-sent rights request DMs to each creator — tracking approval status in real time.

#### 158. Creator Content Amplifier
**Persona:** Performance Marketing Manager | **File:** `flows/creator-content-amplifier.js`  
4 influencer posts went viral (>500K reach each). Cortex recommends whitelisting all 4 for paid amplification — estimates +2.3M incremental reach with $8,000 budget and configures lookalike targeting.

#### 159. Creator Portfolio Audit
**Persona:** Influencer Director | **File:** `flows/creator-portfolio-audit.js`  
Creator roster of 87 active influencers hasn't been audited in 12 months. Cortex grades each on current performance, audience health, and brand alignment. Result: 12 offboard, 8 upgrade tier, 4 new categories.

#### 160. Ambassador Program AI
**Persona:** Community Manager | **File:** `flows/ambassador-program-ai.js`  
From 180,000 social followers, Cortex identifies the top 20 brand advocates — those who mention you most, have highest authentic reach, and strongest audience alignment. Personalized recruitment messages drafted.

---

### Group S: Sprinklr Enterprise Case Study Flows

#### 161. Enterprise Care Scale
**Persona:** Head of Digital CX | **File:** `flows/microsoft-scale-care.js`  
Care team handles 45,000 messages/month across 12 channels. Product launch event incoming. Cortex configures auto-routing, bot containment, and priority queuing to handle a 3x volume surge.

#### 162. Global Social Coordination
**Persona:** Global Social Media Director | **File:** `flows/samsung-global-social.js`  
Coordinate 28 regional social teams publishing across 340 social profiles. Cortex detects content conflicts, enforces global brand guidelines, and synchronizes campaign timing across 14 time zones.

#### 163. UGC at Scale
**Persona:** Digital Content Director | **File:** `flows/mcdonalds-ugc-scale.js`  
120,000 customer photos posted monthly with brand hashtags. Cortex classifies by product, sentiment, and visual quality — curates top 500 for website galleries, requests rights, and auto-publishes best UGC to brand channels.

#### 164. Creator Network Intelligence
**Persona:** Creator Marketing VP | **File:** `flows/nike-creator-network.js`  
Managing 450 creator partnerships globally. Cortex detects 8 creators with early brand misalignment signals, 12 ready for tier upgrade, and 34 high-potential micro-creators to recruit for next season.

#### 165. Enterprise Compliance Shield
**Persona:** Legal & Compliance Manager | **File:** `flows/disney-compliance-shield.js`  
180 social media managers across 24 brands publishing daily. Cortex pre-screens all content for legal risk, IP infringement, and regulatory compliance — blocked 34 problematic posts this week before they went live.

#### 166. Multi-Brand Insight Engine
**Persona:** Global Insights Director | **File:** `flows/unilever-insight-engine.js`  
Monitor 22 brands across 67 markets in real time. Cortex surfaces cross-brand trends, detects early reputation risks, and identifies cross-sell opportunities by correlating data from multiple brand listening streams.

#### 167. Crisis War Room
**Persona:** Crisis Communications Director | **File:** `flows/t-mobile-crisis-war-room.js`  
Network outage affecting 2M customers triggered 340K social posts in 2 hours. Cortex activates crisis war room mode: prioritizes care queue, deploys empathy bot, drafts executive statement, and monitors sentiment recovery.

#### 168. Regulated Content AI
**Persona:** Healthcare Marketing Compliance | **File:** `flows/pfizer-regulated-content.js`  
Pharmaceutical content requires multi-layer approval: legal, medical, regulatory. Cortex automates the review workflow — reducing approval cycle from 8 days to 2.5 days.

#### 169. Financial Services Social Compliance
**Persona:** Financial Services Social Media Manager | **File:** `flows/barclays-financial-social.js`  
Detect and prevent 12 types of regulated content violations common in financial services. Cortex flags "guaranteed returns" language, unlicensed advice, and non-standard disclaimers before publishing.

#### 170. Holiday Season Scaling
**Persona:** Retail Social Media Director | **File:** `flows/holiday-season-scaling.js`  
Black Friday is 3 weeks away. Cortex forecasts 8x care volume spike — prepares 45 FAQ bot flows for holiday queries, pre-schedules 120 promotional posts, and configures escalation rules for high-value cart abandonment.

#### 171. Agency Client Reporting
**Persona:** Agency Account Manager | **File:** `flows/agency-client-reporting.js`  
12 client reports due Friday. Cortex pulls data for all 12 accounts, generates branded PDF reports with custom KPIs per client, and drafts personalized insights emails for each account manager.

#### 172. Retail Product Launch
**Persona:** Brand Launch Manager | **File:** `flows/retail-product-launch.js`  
New product launches in 72 hours. Cortex activates launch protocol: pre-schedules 34 posts across 8 channels, configures listening alerts, sets care priority rules, and enables launch-specific bot FAQs.

---

### Group T: Sprout Real Customer Flows

#### 173. eCommerce Social Care
**Persona:** eCommerce Customer Service Manager | **File:** `flows/ecommerce-social-care.js`  
Cortex connects social care conversations to order data — agents see order status, delivery date, and purchase history while responding on Instagram. Average handle time dropped 40%: from 8.2 min to 4.9 min.

#### 174. Healthcare Patient Care AI
**Persona:** Patient Experience Manager | **File:** `flows/healthcare-patient-care.js`  
Route inbound healthcare social messages: non-urgent questions → FAQ bot, appointment requests → scheduling bot, urgent care inquiries → human agent within 5 minutes. HIPAA compliance enforced automatically.

#### 175. Automotive Care AI
**Persona:** Automotive Digital Marketing Manager | **File:** `flows/automotive-care-ai.js`  
A 3-day test drive campaign generated 2,400 social DMs and comments. Cortex classifies by intent (847 booking requests, 612 price inquiries, 234 complaints, 707 general interest) and routes each to the right team.

#### 176. B2B Social Selling
**Persona:** B2B Social Media Manager | **File:** `flows/b2b-social-selling.js`  
Cortex monitors LinkedIn and identifies 23 warm B2B leads based on intent signals (engaged with 3+ pieces of content, mentioned a competitor, asked industry questions). Routes to Sales with context and suggested outreach.

#### 177. Media Company Social
**Persona:** Digital Media Manager | **File:** `flows/media-company-social.js`  
Managing 47 show accounts across 6 platforms. Cortex auto-generates show-specific social content from episode summaries and schedules optimal posting times per audience. Last week: 312 posts from 89 episode summaries.

#### 178. Nonprofit Community AI
**Persona:** Community Engagement Manager | **File:** `flows/nonprofit-community.js`  
Annual fundraising campaign live. Cortex monitors 12,000 community conversations — identifies donor friction points, surfaces top 50 most engaged supporters for personal outreach, and optimizes content for emotional resonance.

#### 179. Sports Fan Engagement
**Persona:** Sports Digital Media Manager | **File:** `flows/sports-team-fan-care.js`  
Match day generated 45,000 fan interactions. Cortex filters bots and spam, auto-replies to common queries (ticket info, stadium rules, schedules), and flags 340 VIP fans for personal engagement.

#### 180. Restaurant Chain Social AI
**Persona:** Franchise Social Media Manager | **File:** `flows/restaurant-chain-social.js`  
340 restaurant locations with social profiles. Cortex detected 12 locations with review scores below 3.8★ and high complaint volume. Surfaces root causes (delivery, quality, service) and auto-routes escalations to franchise ops.

---

### Group U: Emplifi Three-Cloud Differentiator Flows

#### 181. Commerce-Care Bridge
**Persona:** Head of Digital CX | **File:** `flows/commerce-care-bridge.js`  
A customer complained on Instagram about a defective product. Cortex bridges Commerce and Care: pulls purchase history, checks return policy, initiates return, and sends proactive response — all automated. Resolution time: 4 minutes.

#### 182. Ratings & Review Response AI
**Persona:** E-Commerce Manager | **File:** `flows/ratings-review-response-ai.js`  
1,240 new product reviews across Amazon, Google, and your website this week. Cortex drafts personalized responses for each, calibrating tone by star rating — apologetic for 1★, grateful for 5★. 847 drafts ready for approval.

#### 183. Three-Cloud Campaign
**Persona:** VP Marketing | **File:** `flows/three-cloud-campaign.js`  
Launch a campaign across all three Emplifi clouds simultaneously: Social drives awareness, Commerce boosts reviews and social proof, Service deflects support volume with FAQ content. Cortex coordinates timing and measurement.

#### 184. UGC to Commerce
**Persona:** eCommerce Content Manager | **File:** `flows/ugc-to-commerce.js`  
Cortex identified 89 top UGC posts featuring products, requested rights, and published them as shoppable content on PDPs and in email campaigns. Estimated +14% conversion lift; 34 rights already approved.

#### 185. Social Proof Engine
**Persona:** eCommerce Director | **File:** `flows/social-proof-engine.js`  
Cortex scans the review database for the 3 best quotes per product SKU and creates dynamic social proof widgets for 847 product pages — filtered by recency, rating, and verified purchase status.

#### 186. CX 360° View
**Persona:** Chief Customer Officer | **File:** `flows/cx-360-view.js`  
Cortex connects social interactions, care tickets, reviews, and purchase data to build a unified CX score per customer segment. Identified 3 high-churn-risk segments with recommended proactive retention campaigns.

#### 187. Care-to-Commerce Recovery
**Persona:** Customer Success Manager | **File:** `flows/care-to-commerce-recovery.js`  
Cortex identified 456 customers who had negative care experiences in the past 30 days and didn't repurchase. Triggers a recovery campaign: personalized offer + dedicated agent follow-up for the top 50 high-value accounts.

#### 188. Review Velocity Alert
**Persona:** Brand Reputation Manager | **File:** `flows/review-velocity-alert.js`  
Negative review volume for Product SKU #8847 spiked 340% in 48 hours — potential quality issue. Cortex alerts product, quality, and care teams simultaneously and activates a coordinated crisis response.

#### 189. Influencer Commerce Tie
**Persona:** Influencer Marketing Manager | **File:** `flows/influencer-commerce-tie.js`  
Cortex tracked 34 influencer links and coupon codes to 1,240 conversions and $89K revenue. Ranks influencers by actual sales impact — top performer: 340 conversions, $28K, 4.2% of total campaign revenue.

#### 190. Content Hub AI Curation
**Persona:** Content Operations Manager | **File:** `flows/content-hub-ai-curation.js`  
Content Hub has 8,400 assets. Cortex tagged all 3,200 untagged assets by AI — detects product, theme, channel suitability, and quality score. Created 12 curated collections for upcoming campaigns.

#### 191. Social Commerce Dashboard
**Persona:** Social Commerce Manager | **File:** `flows/social-commerce-dashboard.js`  
Cortex builds a unified Social Commerce view — combining social engagement, link clicks, product views, add-to-carts, and purchases. Identifies top 5 social commerce drivers and 3 conversion blockers.

#### 192. Multi-Cloud ROI Report
**Persona:** CMO | **File:** `flows/multi-cloud-roi.js`  
Board meeting needs a comprehensive CX ROI report. Cortex aggregates across all three clouds: social engagement ($340K earned media), care efficiency (23% cost reduction), commerce lift (+$1.2M attributed revenue).

---

### Group V: Future Cortex Agent & Governance Flows

#### 193. Cortex Memory & Learning
**Persona:** Head of Social Innovation | **File:** `flows/cortex-memory-learning.js`  
Cortex reviewed its own 90-day performance — learned 14 new brand-specific patterns and improved response suggestion accuracy from 67% to 84%. Brand voice model now powers all AI suggestions across Publisher and Care.

#### 194. AI Governance Setup
**Persona:** Chief Digital Officer | **File:** `flows/ai-governance-setup.js`  
Configure enterprise AI governance: approval workflows for AI-generated content, bias detection for AI suggestions, explainability logging for all AI decisions, and human-in-loop requirements per risk level.

#### 195. Cortex Skill Builder
**Persona:** Social Innovation Manager | **File:** `flows/cortex-skill-builder.js`  
Train a custom Cortex skill: upload your brand playbook, competitor analysis, and 500 best-performing posts. Cortex creates a proprietary brand intelligence model. Training: 2.4h. Validation accuracy: 91%.

#### 196. Multi-Agent Orchestration
**Persona:** Digital Operations Director | **File:** `flows/multi-agent-orchestration.js`  
Set up 5 specialized Cortex sub-agents (Care, Content, Insights, Commerce, Influencer) with a master Orchestrator that coordinates them on complex cross-cloud tasks. First orchestrated task resolved in 3 minutes with zero manual routing.

#### 197. AI Audit Trail
**Persona:** Compliance Director | **File:** `flows/ai-audit-trail.js`  
Enable complete AI decision logging — every Cortex recommendation, action, content generated, and human override recorded with timestamp, rationale, and model version. GDPR-compliant audit export. 47,230 decisions logged this month.

#### 198. Predictive Crisis Prevention
**Persona:** Head of Communications | **File:** `flows/predictive-crisis-prevention.js`  
Cortex's predictive model detected 6 early warning signals that preceded the last 3 crises. Running continuously, it gave 4-hour advance notice of today's potential issue — enabling proactive response before it went viral.

#### 199. AI Content Moderation
**Persona:** Trust & Safety Manager | **File:** `flows/ai-content-moderation.js`  
Configure AI content moderation for community channels — detects hate speech, spam, competitor mentions, and policy violations in real time. Processing 50,000 comments/day with 98.4% classification accuracy.

#### 200. Cortex ROI Dashboard
**Persona:** VP Digital Strategy | **File:** `flows/cortex-roi-dashboard.js`  
Cortex calculates its own ROI: 3.2x productivity gain across publishing, 28% care cost reduction, 14% UGC rights acquisition improvement, and $2.1M estimated annualized value. Generates CFO-ready business case for AI investment renewal.
