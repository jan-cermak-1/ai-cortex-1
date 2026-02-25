/* ============================================================
   FLOWS REGISTRY - All available demo flows
   
   Add new flows here. Each flow defines its own data and content.
   The Cortex UI component is shared across all flows.
   
   source: 'human' = manually created flows
   source: 'ai' = AI-generated flows
   ============================================================ */

const FLOWS_REGISTRY = [
  {
    id: 'none',
    name: 'None',
    description: 'Empty Cortex component (for UI debugging)',
    persona: null,
    startPage: 'command-center.html',
    source: 'human',
    data: null
  },
  {
    id: 'labubu-trend',
    name: 'Labubu Trend',
    description: 'Trend detection and campaign creation',
    persona: 'Social Media Manager',
    startPage: 'command-center.html',
    source: 'human',
    data: FLOW_LABUBU_TREND
  },
  {
    id: 'bulk-user-import',
    name: 'Bulk User Import',
    description: 'Import users from Excel with team and role assignment',
    persona: 'Team Admin',
    startPage: 'command-center.html',
    source: 'human',
    data: FLOW_BULK_USER_IMPORT
  },
  {
    id: 'content-calendar-import',
    name: 'Content Calendar Import',
    description: 'Import Excel content calendar into Publisher drafts + Content Hub collection',
    persona: 'Social Media Manager',
    startPage: 'command-center.html',
    source: 'human',
    data: FLOW_CONTENT_CALENDAR_IMPORT
  },
  {
    id: 'crisis-response',
    name: 'Crisis Response',
    description: 'Handle negative sentiment spike with coordinated response',
    persona: 'Brand Manager',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_CRISIS_RESPONSE
  },
  {
    id: 'review-automation',
    name: 'Review Automation',
    description: 'Automate review responses and categorization',
    persona: 'eCommerce Manager',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_REVIEW_AUTOMATION
  },
  {
    id: 'care-onboarding',
    name: 'Care Team Onboarding',
    description: 'Onboard new Care agents with roster import',
    persona: 'Care Supervisor',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_CARE_ONBOARDING
  },
  {
    id: 'content-optimizer',
    name: 'Content Optimizer',
    description: 'AI-optimize scheduled posts for better engagement',
    persona: 'Content Lead',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_CONTENT_OPTIMIZER
  },
  {
    id: 'competitor-alert',
    name: 'Competitor Alert',
    description: 'React to competitor campaign with counter-strategy',
    persona: 'Brand Manager',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_COMPETITOR_ALERT
  },
  {
    id: 'bot-tuning',
    name: 'Bot Tuning',
    description: 'Improve chatbot containment with AI recommendations',
    persona: 'Bot Manager',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_BOT_TUNING
  },
  {
    id: 'listening-report',
    name: 'Listening Report',
    description: 'Generate weekly brand listening insights report',
    persona: 'PR Manager',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_LISTENING_REPORT
  },
  {
    id: 'voc-insights',
    name: 'VoC Insights',
    description: 'Analyze quarterly Voice of Customer data',
    persona: 'CX Director',
    startPage: 'command-center.html',
    source: 'ai',
    data: FLOW_VOC_INSIGHTS
  },

  // ── Group A: Publisher & Content ──────────────────────────────────
  { id: 'instagram-reels-batch', name: 'Instagram Reels Batch', description: 'Batch-create Reels from top-performing posts', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_INSTAGRAM_REELS_BATCH },
  { id: 'approval-flow-bottleneck', name: 'Approval Bottleneck Fix', description: 'Resolve bottlenecked approval queue before deadline', persona: 'Content Lead', startPage: 'command-center.html', source: 'ai', data: FLOW_APPROVAL_FLOW_BOTTLENECK },
  { id: 'brand-voice-refresh', name: 'Brand Voice Refresh', description: 'Update brand voice guidelines and audit scheduled content', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_BRAND_VOICE_REFRESH },
  { id: 'linkedin-document-campaign', name: 'LinkedIn Document Campaign', description: 'Convert whitepapers into LinkedIn document posts', persona: 'Content Strategist', startPage: 'command-center.html', source: 'ai', data: FLOW_LINKEDIN_DOCUMENT_CAMPAIGN },
  { id: 'tiktok-primetime-boost', name: 'TikTok PrimeTime Boost', description: 'Reschedule TikTok posts to optimal engagement windows', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_TIKTOK_PRIMETIME_BOOST },
  { id: 'ugc-to-publisher', name: 'UGC to Publisher', description: 'Convert top UGC posts into scheduled brand content', persona: 'Content Lead', startPage: 'command-center.html', source: 'ai', data: FLOW_UGC_TO_PUBLISHER },
  { id: 'product-launch-campaign', name: 'Product Launch Campaign', description: 'Orchestrate multi-channel product launch content', persona: 'Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_PRODUCT_LAUNCH_CAMPAIGN },
  { id: 'evergreen-content-recycler', name: 'Evergreen Content Recycler', description: 'Identify and reschedule evergreen top-performing content', persona: 'Content Lead', startPage: 'command-center.html', source: 'ai', data: FLOW_EVERGREEN_CONTENT_RECYCLER },
  { id: 'multi-market-localization', name: 'Multi-Market Localization', description: 'Localize content for 5 markets simultaneously', persona: 'Global Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_MULTI_MARKET_LOCALIZATION },
  { id: 'dark-post-testing', name: 'Dark Post Testing', description: 'Launch A/B dark post test across audience segments', persona: 'Paid Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_DARK_POST_TESTING },

  // ── Group B: Community & Care ─────────────────────────────────────
  { id: 'inbox-zero', name: 'Inbox Zero', description: 'Eliminate 400-message Care backlog with AI triage', persona: 'Care Supervisor', startPage: 'command-center.html', source: 'ai', data: FLOW_INBOX_ZERO },
  { id: 'whatsapp-templates', name: 'WhatsApp Templates', description: 'Migrate FAQ responses to WhatsApp approved templates', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_WHATSAPP_TEMPLATES },
  { id: 'sla-breach-prevention', name: 'SLA Breach Prevention', description: 'Automatically escalate at-risk conversations before SLA breach', persona: 'Care Supervisor', startPage: 'command-center.html', source: 'ai', data: FLOW_SLA_BREACH_PREVENTION },
  { id: 'multilingual-inbox', name: 'Multilingual Inbox', description: 'Route and translate multilingual Care messages', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_MULTILINGUAL_INBOX },
  { id: 'ad-comment-moderation', name: 'Ad Comment Moderation', description: 'Bulk-moderate negative ad comments with AI', persona: 'Paid Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_AD_COMMENT_MODERATION },
  { id: 'google-review-response', name: 'Google Review Response', description: 'Respond to Google Business reviews at scale', persona: 'Reputation Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_GOOGLE_REVIEW_RESPONSE },
  { id: 'queue-rebalance', name: 'Queue Rebalance', description: 'Rebalance agent queues to prevent overload', persona: 'Care Supervisor', startPage: 'command-center.html', source: 'ai', data: FLOW_QUEUE_REBALANCE },
  { id: 'smart-escalation', name: 'Smart Escalation', description: 'Build AI escalation rules to route complex cases', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_SMART_ESCALATION },
  { id: 'vip-customer-detection', name: 'VIP Customer Detection', description: 'Identify and prioritize VIP customers in Care queue', persona: 'Care Supervisor', startPage: 'command-center.html', source: 'ai', data: FLOW_VIP_CUSTOMER_DETECTION },
  { id: 'agent-burnout-prevention', name: 'Agent Burnout Prevention', description: 'Detect and prevent Care agent burnout with workload balancing', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_AGENT_BURNOUT_PREVENTION },

  // ── Group C: Listening & Analytics ───────────────────────────────
  { id: 'sentiment-spike-alert', name: 'Sentiment Spike Alert', description: 'Investigate and respond to sudden sentiment drop', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_SENTIMENT_SPIKE_ALERT },
  { id: 'share-of-voice-battle', name: 'Share of Voice Battle', description: 'Reclaim share of voice lost to a competitor', persona: 'Brand Strategist', startPage: 'command-center.html', source: 'ai', data: FLOW_SHARE_OF_VOICE_BATTLE },
  { id: 'reddit-monitoring-setup', name: 'Reddit Monitoring Setup', description: 'Set up comprehensive Reddit listening for brand intelligence', persona: 'Insights Analyst', startPage: 'command-center.html', source: 'ai', data: FLOW_REDDIT_MONITORING_SETUP },
  { id: 'campaign-insights-report', name: 'Campaign Insights Report', description: 'Generate cross-channel campaign performance report', persona: 'Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_CAMPAIGN_INSIGHTS_REPORT },
  { id: 'audience-insights-board', name: 'Audience Insights Board', description: 'Build Unified Analytics board for audience behavior', persona: 'Insights Analyst', startPage: 'command-center.html', source: 'ai', data: FLOW_AUDIENCE_INSIGHTS_BOARD },
  { id: 'listening-query-cleanup', name: 'Listening Query Cleanup', description: 'Audit and optimize noisy listening queries', persona: 'Insights Analyst', startPage: 'command-center.html', source: 'ai', data: FLOW_LISTENING_QUERY_CLEANUP },
  { id: 'executive-briefing', name: 'Executive Briefing', description: 'Generate Monday morning AI-powered executive briefing', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_EXECUTIVE_BRIEFING },
  { id: 'product-feedback-loop', name: 'Product Feedback Loop', description: 'Route social product feedback to product team', persona: 'Product Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_PRODUCT_FEEDBACK_LOOP },
  { id: 'influencer-spike-detection', name: 'Influencer Spike Detection', description: 'Detect and activate trending influencer opportunity', persona: 'Influencer Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_INFLUENCER_SPIKE_DETECTION },
  { id: 'tiktok-topic-tracker', name: 'TikTok Topic Tracker', description: 'Track trending TikTok topics relevant to brand', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_TIKTOK_TOPIC_TRACKER },

  // ── Group D: eCommerce & Reviews ──────────────────────────────────
  { id: 'seasonal-review-surge', name: 'Seasonal Review Surge', description: 'Handle post-holiday review surge with AI responses', persona: 'eCommerce Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_SEASONAL_REVIEW_SURGE },
  { id: 'negative-review-cluster', name: 'Negative Review Cluster', description: 'Investigate and respond to review cluster around product issue', persona: 'Reputation Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_NEGATIVE_REVIEW_CLUSTER },
  { id: 'ugc-gallery-refresh', name: 'UGC Gallery Refresh', description: 'Refresh product page UGC galleries with fresh content', persona: 'eCommerce Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_UGC_GALLERY_REFRESH },
  { id: 'review-syndication-setup', name: 'Review Syndication Setup', description: 'Syndicate reviews across retailer product pages', persona: 'eCommerce Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_REVIEW_SYNDICATION_SETUP },
  { id: 'review-incentive-campaign', name: 'Review Incentive Campaign', description: 'Launch post-purchase review collection campaign', persona: 'eCommerce Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_REVIEW_INCENTIVE_CAMPAIGN },

  // ── Group E: Bot & Automation ─────────────────────────────────────
  { id: 'bot-handoff-optimization', name: 'Bot Handoff Optimization', description: 'Reduce unnecessary bot-to-agent handoffs', persona: 'Bot Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_BOT_HANDOFF_OPTIMIZATION },
  { id: 'faq-bot-expansion', name: 'FAQ Bot Expansion', description: 'Expand chatbot FAQ coverage with unanswered questions', persona: 'Bot Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_FAQ_BOT_EXPANSION },
  { id: 'after-hours-bot-config', name: 'After-Hours Bot Config', description: 'Configure after-hours bot to handle peak overnight volume', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_AFTER_HOURS_BOT_CONFIG },
  { id: 'flow-automation-setup', name: 'Flow Automation Setup', description: 'Build automated tagging and routing rules for Care', persona: 'Care Operations', startPage: 'command-center.html', source: 'ai', data: FLOW_FLOW_AUTOMATION_SETUP },
  { id: 'intent-retraining', name: 'Intent Retraining', description: 'Retrain bot intents based on misclassified conversations', persona: 'Bot Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_INTENT_RETRAINING },

  // ── Group F: Influencers & Paid ───────────────────────────────────
  { id: 'influencer-campaign-launch', name: 'Influencer Campaign Launch', description: 'Launch influencer campaign with brief and tracking', persona: 'Influencer Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_INFLUENCER_CAMPAIGN_LAUNCH },
  { id: 'paid-campaign-alert', name: 'Paid Campaign Alert', description: 'Investigate and fix underperforming paid campaign', persona: 'Paid Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_PAID_CAMPAIGN_ALERT },
  { id: 'ugc-influencer-pipeline', name: 'UGC Influencer Pipeline', description: 'Convert top UGC creators into micro-influencer partners', persona: 'Influencer Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_UGC_INFLUENCER_PIPELINE },
  { id: 'cross-platform-budget-optimizer', name: 'Cross-Platform Budget Optimizer', description: 'Optimize paid social budget allocation across platforms', persona: 'Paid Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_CROSS_PLATFORM_BUDGET_OPTIMIZER },
  { id: 'lookalike-audience-builder', name: 'Lookalike Audience Builder', description: 'Build lookalike audiences from best-converting customer segments', persona: 'Paid Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_LOOKALIKE_AUDIENCE_BUILDER },

  // ── Group G: Governance & Strategy ───────────────────────────────
  { id: 'approval-workflow-redesign', name: 'Approval Workflow Redesign', description: 'Redesign approval workflows to reduce bottlenecks', persona: 'Social Media Director', startPage: 'command-center.html', source: 'ai', data: FLOW_APPROVAL_WORKFLOW_REDESIGN },
  { id: 'label-taxonomy-cleanup', name: 'Label Taxonomy Cleanup', description: 'Standardize and clean up label taxonomy', persona: 'Care Operations', startPage: 'command-center.html', source: 'ai', data: FLOW_LABEL_TAXONOMY_CLEANUP },
  { id: 'quarterly-review-prep', name: 'Quarterly Review Prep', description: 'Prepare Q-end social performance review package', persona: 'Social Media Director', startPage: 'command-center.html', source: 'ai', data: FLOW_QUARTERLY_REVIEW_PREP },
  { id: 'new-market-onboarding', name: 'New Market Onboarding', description: 'Onboard new regional market team onto Emplifi', persona: 'Global Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_NEW_MARKET_ONBOARDING },
  { id: 'platform-health-audit', name: 'Platform Health Audit', description: 'Audit Emplifi configuration for best practices', persona: 'Platform Admin', startPage: 'command-center.html', source: 'ai', data: FLOW_PLATFORM_HEALTH_AUDIT },

  // ── Group H: Agentic AI & Cross-module ────────────────────────────
  { id: 'autonomous-content-pipeline', name: 'Autonomous Content Pipeline', description: 'Set up fully autonomous AI content creation pipeline', persona: 'Content Director', startPage: 'command-center.html', source: 'ai', data: FLOW_AUTONOMOUS_CONTENT_PIPELINE },
  { id: 'cross-module-spike-response', name: 'Cross-Module Spike Response', description: 'Coordinate Care, Listening, and Publishing response to viral spike', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_CROSS_MODULE_SPIKE_RESPONSE },
  { id: 'smart-budget-reallocation', name: 'Smart Budget Reallocation', description: 'AI-driven real-time budget reallocation based on performance', persona: 'Marketing Director', startPage: 'command-center.html', source: 'ai', data: FLOW_SMART_BUDGET_REALLOCATION },
  { id: 'ab-creative-experiment', name: 'A/B Creative Experiment', description: 'Set up AI-driven creative A/B test across platforms', persona: 'Creative Strategist', startPage: 'command-center.html', source: 'ai', data: FLOW_AB_CREATIVE_EXPERIMENT },
  { id: 'visual-ugc-brand-detection', name: 'Visual UGC Brand Detection', description: 'Detect untagged brand appearances in UGC with AI vision', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_VISUAL_UGC_BRAND_DETECTION },
  { id: 'competitive-benchmark-alert', name: 'Competitive Benchmark Alert', description: 'Alert and respond to competitor crossing performance threshold', persona: 'Brand Strategist', startPage: 'command-center.html', source: 'ai', data: FLOW_COMPETITIVE_BENCHMARK_ALERT },
  { id: 'anomaly-auto-correction', name: 'Anomaly Auto-Correction', description: 'Detect and automatically fix publishing anomalies', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_ANOMALY_AUTO_CORRECTION },
  { id: 'employee-advocacy-launch', name: 'Employee Advocacy Launch', description: 'Launch employee advocacy program with AI content curation', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_EMPLOYEE_ADVOCACY_LAUNCH },
  { id: 'multi-agent-care-resolution', name: 'Multi-Agent Care Resolution', description: 'Coordinate multi-agent AI to resolve complex customer issue', persona: 'Care Director', startPage: 'command-center.html', source: 'ai', data: FLOW_MULTI_AGENT_CARE_RESOLUTION },

  // ── Group I: Customer Journey & CX ───────────────────────────────
  { id: 'customer-onboarding-journey', name: 'Customer Onboarding Journey', description: 'Build social-driven customer onboarding journey', persona: 'CX Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_CUSTOMER_ONBOARDING_JOURNEY },
  { id: 'churn-prevention-social', name: 'Churn Prevention Social', description: 'Detect at-risk customers and trigger social-led retention', persona: 'CX Director', startPage: 'command-center.html', source: 'ai', data: FLOW_CHURN_PREVENTION_SOCIAL },
  { id: 'nps-action-plan', name: 'NPS Action Plan', description: 'Convert NPS detractor feedback into action plan', persona: 'CX Director', startPage: 'command-center.html', source: 'ai', data: FLOW_NPS_ACTION_PLAN },
  { id: 'post-purchase-care', name: 'Post-Purchase Care', description: 'Automate post-purchase social Care follow-up', persona: 'eCommerce Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_POST_PURCHASE_CARE },
  { id: 'negative-experience-recovery', name: 'Negative Experience Recovery', description: 'Identify and recover negative customer experience cases', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_NEGATIVE_EXPERIENCE_RECOVERY },
  { id: 'voc-to-product', name: 'VoC to Product', description: 'Route structured social Voice of Customer data to product team', persona: 'Product Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_VOC_TO_PRODUCT },
  { id: 'csat-monitoring', name: 'CSAT Monitoring', description: 'Build CSAT monitoring dashboard with alert thresholds', persona: 'Care Director', startPage: 'command-center.html', source: 'ai', data: FLOW_CSAT_MONITORING },
  { id: 'loyalty-campaign', name: 'Loyalty Campaign', description: 'Launch social loyalty program for top brand advocates', persona: 'CX Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_LOYALTY_CAMPAIGN },
  { id: 'cx-weekly-digest', name: 'CX Weekly Digest', description: 'Generate automated weekly CX intelligence digest', persona: 'CX Director', startPage: 'command-center.html', source: 'ai', data: FLOW_CX_WEEKLY_DIGEST },

  // ── Group J: Data & Reporting ─────────────────────────────────────
  { id: 'analytics-dashboard-migration', name: 'Analytics Dashboard Migration', description: 'Migrate legacy analytics dashboards to Unified Analytics', persona: 'Analytics Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_ANALYTICS_DASHBOARD_MIGRATION },
  { id: 'social-roi-report', name: 'Social ROI Report', description: 'Build end-to-end social ROI attribution report', persona: 'Marketing Director', startPage: 'command-center.html', source: 'ai', data: FLOW_SOCIAL_ROI_REPORT },
  { id: 'content-performance-audit', name: 'Content Performance Audit', description: 'Audit 6 months of content performance for strategic insights', persona: 'Content Strategist', startPage: 'command-center.html', source: 'ai', data: FLOW_CONTENT_PERFORMANCE_AUDIT },
  { id: 'paid-vs-organic-attribution', name: 'Paid vs Organic Attribution', description: 'Build paid vs. organic performance attribution model', persona: 'Marketing Analyst', startPage: 'command-center.html', source: 'ai', data: FLOW_PAID_VS_ORGANIC_ATTRIBUTION },
  { id: 'real-time-event-tracking', name: 'Real-Time Event Tracking', description: 'Set up live event social monitoring and reporting', persona: 'Event Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_REAL_TIME_EVENT_TRACKING },
  { id: 'data-quality-audit', name: 'Data Quality Audit', description: 'Identify and fix data quality issues across reporting', persona: 'Analytics Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_DATA_QUALITY_AUDIT },
  { id: 'listening-to-ua-board', name: 'Listening to UA Board', description: 'Create Unified Analytics board from listening insights', persona: 'Insights Analyst', startPage: 'command-center.html', source: 'ai', data: FLOW_LISTENING_TO_UA_BOARD },
  { id: 'annual-report-prep', name: 'Annual Report Prep', description: 'Compile annual social media performance report', persona: 'Social Media Director', startPage: 'command-center.html', source: 'ai', data: FLOW_ANNUAL_REPORT_PREP },
  { id: 'sov-tracker-setup', name: 'SOV Tracker Setup', description: 'Set up share of voice competitive tracker', persona: 'Brand Strategist', startPage: 'command-center.html', source: 'ai', data: FLOW_SOV_TRACKER_SETUP },

  // ── Group K: Industry-Specific ────────────────────────────────────
  { id: 'retail-seasonal-campaign', name: 'Retail Seasonal Campaign', description: 'Orchestrate Black Friday social campaign preparation', persona: 'Retail Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_RETAIL_SEASONAL_CAMPAIGN },
  { id: 'finance-compliance-review', name: 'Finance Compliance Review', description: 'Audit social content for financial services compliance', persona: 'Compliance Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_FINANCE_COMPLIANCE_REVIEW },
  { id: 'b2b-linkedin-program', name: 'B2B LinkedIn Program', description: 'Build B2B thought leadership program on LinkedIn', persona: 'B2B Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_B2B_LINKEDIN_PROGRAM },
  { id: 'hospitality-reputation', name: 'Hospitality Reputation', description: 'Manage hotel group reputation across review platforms', persona: 'Reputation Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_HOSPITALITY_REPUTATION },
  { id: 'healthcare-social-monitoring', name: 'Healthcare Social Monitoring', description: 'Set up HIPAA-compliant social monitoring for healthcare', persona: 'Healthcare Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_HEALTHCARE_SOCIAL_MONITORING },
  { id: 'ecommerce-product-launch', name: 'eCommerce Product Launch', description: 'Coordinate social, reviews, and UGC for product launch', persona: 'eCommerce Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_ECOMMERCE_PRODUCT_LAUNCH },
  { id: 'franchise-governance', name: 'Franchise Governance', description: 'Enforce brand standards across 200 franchise social accounts', persona: 'Franchise Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_FRANCHISE_GOVERNANCE },
  { id: 'telco-care-automation', name: 'Telco Care Automation', description: 'Automate telco Care for outage-related social surge', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_TELCO_CARE_AUTOMATION },
  { id: 'cpg-ugc-amplification', name: 'CPG UGC Amplification', description: 'Build systematic UGC amplification pipeline for CPG brand', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_CPG_UGC_AMPLIFICATION },
  { id: 'media-realtime-response', name: 'Media Real-Time Response', description: 'Coordinate 30-minute response to brand mention in major media', persona: 'Communications Director', startPage: 'command-center.html', source: 'ai', data: FLOW_MEDIA_REALTIME_RESPONSE },

  // ── Group L: Strategic & Executive ───────────────────────────────
  { id: 'q3-strategy-kickoff', name: 'Q3 Strategy Kickoff', description: 'Prepare data-driven Q3 social strategy with priorities and targets', persona: 'Social Media Director', startPage: 'command-center.html', source: 'ai', data: FLOW_Q3_STRATEGY_KICKOFF },
  { id: 'board-reporting-package', name: 'Board Reporting Package', description: 'Compile board-ready social and CX performance package', persona: 'Marketing Director', startPage: 'command-center.html', source: 'ai', data: FLOW_BOARD_REPORTING_PACKAGE },
  { id: 'brand-health-quarterly', name: 'Brand Health Quarterly Review', description: 'Analyze quarterly brand health and configure Q3 alerts', persona: 'Brand Director', startPage: 'command-center.html', source: 'ai', data: FLOW_BRAND_HEALTH_QUARTERLY },
  { id: 'team-performance-review', name: 'Team Performance Review', description: 'Generate Q2 team scorecards with burnout detection', persona: 'Social Media Director', startPage: 'command-center.html', source: 'ai', data: FLOW_TEAM_PERFORMANCE_REVIEW },
  { id: 'ai-governance-rollout', name: 'AI Governance Rollout', description: 'Deploy AI governance framework before team-wide AI expansion', persona: 'Marketing Director', startPage: 'command-center.html', source: 'ai', data: FLOW_AI_GOVERNANCE_ROLLOUT },
  { id: 'market-expansion-setup', name: 'Market Expansion Setup', description: 'Configure localized social infrastructure for 3 new SEA markets', persona: 'Global Social Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_MARKET_EXPANSION_SETUP },
  { id: 'budget-reforecast', name: 'Social Budget Reforecast', description: 'Mid-year budget reforecast with $120K channel reallocation', persona: 'Marketing Director', startPage: 'command-center.html', source: 'ai', data: FLOW_BUDGET_REFORECAST },
  { id: 'agency-brief-builder', name: 'Agency Brief Builder', description: 'Generate data-backed agency creative brief for Q3 campaign', persona: 'Marketing Manager', startPage: 'command-center.html', source: 'ai', data: FLOW_AGENCY_BRIEF_BUILDER },
  { id: 'vendor-evaluation', name: 'Social Tech Vendor Evaluation', description: 'Review 3 contract renewals and identify $52K consolidation savings', persona: 'Social Media Director', startPage: 'command-center.html', source: 'ai', data: FLOW_VENDOR_EVALUATION },
  { id: 'crisis-preparedness-audit', name: 'Crisis Preparedness Audit', description: 'Audit and close 4 critical crisis preparedness gaps', persona: 'Communications Director', startPage: 'command-center.html', source: 'ai', data: FLOW_CRISIS_PREPAREDNESS_AUDIT }
];

function getFlowById(id) {
  return FLOWS_REGISTRY.find(f => f.id === id) || FLOWS_REGISTRY[0];
}

function getFlowData(id) {
  const flow = getFlowById(id);
  return flow ? flow.data : null;
}
