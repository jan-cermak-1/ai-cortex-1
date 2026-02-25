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
**Persona:** Social Media Manager | **File:** `flows/instagram-reels-batch.js`  
Cortex identifies top-performing posts and batch-converts them into Reels with AI captions, optimal scheduling, and hashtags.

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
