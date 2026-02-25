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
  { id: 'crisis-preparedness-audit', name: 'Crisis Preparedness Audit', description: 'Audit and close 4 critical crisis preparedness gaps', persona: 'Communications Director', startPage: 'command-center.html', source: 'ai', data: FLOW_CRISIS_PREPAREDNESS_AUDIT },

  // ── Sprinklr-inspired Service AI flows ────────────────────────
  { id: 'contact-driver-discovery', name: 'Contact Driver Discovery', description: 'Discover 8 unhandled intents from 10K care conversations', persona: 'Bot Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CONTACT_DRIVER_DISCOVERY },
  { id: 'kb-gap-analysis', name: 'KB Gap Analysis', description: 'Identify 23 KB gaps from unanswered agent searches', persona: 'Knowledge Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_KB_GAP_ANALYSIS },
  { id: 'kb-refinement', name: 'KB Refinement', description: 'Merge 14 duplicates and refine 8 ambiguous KB articles', persona: 'Knowledge Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_KB_REFINEMENT },
  { id: 'statistical-stories', name: 'Statistical Stories', description: 'Detect +47% shipping delay anomaly with root cause', persona: 'Care Analytics', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_STATISTICAL_STORIES },
  { id: 'agent-nudge-setup', name: 'Agent Nudge Setup', description: 'Configure AI coaching nudges for Care agents', persona: 'Care Supervisor', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AGENT_NUDGE_SETUP },
  { id: 'acw-autofill-config', name: 'After-Call Work Autofill', description: 'Auto-fill case disposition from transcript — 5+ hours saved daily', persona: 'Care Operations', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_ACW_AUTOFILL_CONFIG },
  { id: 'smart-response-training', name: 'Smart Response Training', description: 'Train RAG model from top 500 agent responses', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SMART_RESPONSE_TRAINING },
  { id: 'care-agent-onboarding-ai', name: 'AI-Powered Agent Onboarding', description: 'Onboard 6 new agents with personalized plans', persona: 'Care Supervisor', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CARE_AGENT_ONBOARDING_AI },
  { id: 'quality-management-ai', name: 'AI Quality Management', description: 'Automated QA scoring and weekly reports', persona: 'Care Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_QUALITY_MANAGEMENT_AI },
  { id: 'case-routing-automation', name: 'Case Routing Automation', description: 'Zero-shot intent detection for 12 case types', persona: 'Care Operations', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CASE_ROUTING_AUTOMATION },
  { id: 'voice-bot-tts-setup', name: 'Voice Bot TTS Setup', description: 'Configure TTS voice for phone support channel', persona: 'Bot Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_VOICE_BOT_TTS_SETUP },
  { id: 'dynamic-workflow-builder', name: 'Dynamic Workflow Builder', description: 'Build 5 guided workflows for complex care scenarios', persona: 'Care Operations', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_DYNAMIC_WORKFLOW_BUILDER },

  // ── Group N: Sprinklr Insights AI ────────────────────────────────
  { id: 'sentiment-shift-alert', name: 'Sentiment Shift Alert', description: 'Brand sentiment dropped -18 pts in 6h after PR event', persona: 'Brand Analyst', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SENTIMENT_SHIFT_ALERT },
  { id: 'competitor-benchmark-ai', name: 'Competitor Benchmark AI', description: 'Automated benchmarking vs 5 rivals — 3 strategic gaps', persona: 'Brand Strategist', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_COMPETITOR_BENCHMARK_AI },
  { id: 'trend-report-generator', name: 'Trend Report Generator', description: 'Auto-generate weekly trend intelligence report', persona: 'Research Analyst', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_TREND_REPORT_GENERATOR },
  { id: 'campaign-lift-analysis', name: 'Campaign Lift Analysis', description: 'Post-campaign lift: +34% mentions, +8% share of voice', persona: 'Campaign Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CAMPAIGN_LIFT_ANALYSIS },
  { id: 'custom-taxonomy-builder', name: 'Custom Taxonomy Builder', description: 'Build topic taxonomy from 50K posts — 8 themes, 34 subtopics', persona: 'Research Analyst', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CUSTOM_TAXONOMY_BUILDER },
  { id: 'media-monitoring-setup', name: 'Media Monitoring Setup', description: 'Real-time media monitoring for product launch', persona: 'PR Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MEDIA_MONITORING_SETUP },
  { id: 'influencer-sentiment-scan', name: 'Influencer Sentiment Scan', description: '4 of 120 influencers showing negative brand alignment', persona: 'Influencer Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_INFLUENCER_SENTIMENT_SCAN },
  { id: 'audience-intent-signals', name: 'Audience Intent Signals', description: '3 high-intent purchase clusters from 8,400 conversations', persona: 'Brand Strategist', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AUDIENCE_INTENT_SIGNALS },
  { id: 'share-of-voice-tracker', name: 'Share of Voice Tracker', description: 'SOV dropped 34%→27% — diagnose and respond', persona: 'Marketing Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SHARE_OF_VOICE_TRACKER },
  { id: 'listening-query-optimizer', name: 'Listening Query Optimizer', description: 'Optimize 6 noisy queries — 60% less noise, same signal', persona: 'Research Analyst', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_LISTENING_QUERY_OPTIMIZER },

  // ── Group O: Sprinklr Marketing AI ───────────────────────────────
  { id: 'ai-campaign-brief', name: 'AI Campaign Brief', description: 'Generate full campaign brief from historical top performers', persona: 'Campaign Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_CAMPAIGN_BRIEF },
  { id: 'content-localizer', name: 'Content Localizer', description: 'Localize campaign for 7 markets — 3 days of work in minutes', persona: 'Global Marketing Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CONTENT_LOCALIZER },
  { id: 'channel-mix-optimizer', name: 'Channel Mix Optimizer', description: 'Reallocate budget for +12% ROAS based on 6-month data', persona: 'Performance Marketing Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CHANNEL_MIX_OPTIMIZER },
  { id: 'ad-creative-rotator', name: 'Ad Creative Rotator', description: 'CTR dropped 35% — auto-generate 4 creative variations', persona: 'Paid Social Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AD_CREATIVE_ROTATOR },
  { id: 'compliance-content-shield', name: 'Compliance Content Shield', description: 'Pre-publish scan flags 3 regulatory risk posts', persona: 'Compliance Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_COMPLIANCE_CONTENT_SHIELD },
  { id: 'budget-pacing-alert', name: 'Budget Pacing Alert', description: '68% budget used but only 41% through flight — fix overpacing', persona: 'Campaign Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_BUDGET_PACING_ALERT },
  { id: 'content-performance-predictor', name: 'Content Performance Predictor', description: 'Pre-publish score 5 posts — optimize 2 before going live', persona: 'Content Strategist', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CONTENT_PERFORMANCE_PREDICTOR },
  { id: 'multi-brand-content-sync', name: 'Multi-Brand Content Sync', description: '4 duplicate + 2 conflicting posts across 8 brand profiles', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MULTI_BRAND_CONTENT_SYNC },
  { id: 'paid-organic-amplifier', name: 'Paid-Organic Amplifier', description: 'Boost top 3 organic posts — 10x reach for $2,500', persona: 'Growth Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_PAID_ORGANIC_AMPLIFIER },
  { id: 'creative-brand-voice-check', name: 'Brand Voice Consistency Check', description: '11 of 62 posts deviate from brand voice guidelines', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CREATIVE_BRAND_VOICE_CHECK },

  // ── Group P: Trellis-Inspired Flows ──────────────────────────────
  { id: 'trellis-case-triage', name: 'Intelligent Case Triage', description: 'Triage 847 messages — 23 critical escalated, 340 routed', persona: 'Care Team Lead', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_TRELLIS_CASE_TRIAGE },
  { id: 'autonomous-care-resolver', name: 'Autonomous Care Resolver', description: 'Auto-resolve 34 low-complexity case types — 28% deflection', persona: 'Care Operations Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AUTONOMOUS_CARE_RESOLVER },
  { id: 'social-inbox-zero', name: 'Social Inbox Zero', description: 'Process 1,247 weekend messages — 8 critical flagged', persona: 'Community Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SOCIAL_INBOX_ZERO },
  { id: 'smart-escalation-paths', name: 'Smart Escalation Paths', description: 'Configure 6 AI escalation rules: VIP, sentiment, legal', persona: 'Care Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SMART_ESCALATION_PATHS },
  { id: 'trellis-report-builder', name: 'AI Report Builder', description: 'C-suite social ROI report from 3 clouds in minutes', persona: 'Analytics Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_TRELLIS_REPORT_BUILDER },
  { id: 'cross-channel-care-view', name: 'Cross-Channel Care View', description: '156 customers contacted via multiple channels in 30 days', persona: 'Head of CX', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CROSS_CHANNEL_CARE_VIEW },
  { id: 'proactive-care-trigger', name: 'Proactive Care Triggers', description: 'Reach 12 customers before they open a formal ticket', persona: 'Care Innovator', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_PROACTIVE_CARE_TRIGGER },
  { id: 'ai-review-moderation', name: 'AI Review Moderation', description: '4,200 reviews → 8 themes, 47 need response', persona: 'Brand Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_REVIEW_MODERATION },
  { id: 'shift-handover-summary', name: 'Shift Handover Summary', description: 'AI-generated shift brief — open cases, risks, priorities', persona: 'Care Team Lead', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SHIFT_HANDOVER_SUMMARY },
  { id: 'care-capacity-forecasting', name: 'Care Capacity Forecasting', description: '+45% volume spike forecast Monday — staff accordingly', persona: 'Care Operations Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CARE_CAPACITY_FORECASTING },

  // ── Group Q: Sprout AI Assist Flows ──────────────────────────────
  { id: 'ai-caption-optimizer', name: 'Caption Optimizer', description: 'Rewrite bottom 8 of 28 scheduled posts by platform tone', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_CAPTION_OPTIMIZER },
  { id: 'hashtag-intelligence', name: 'Hashtag Intelligence', description: 'Retire 12 dead tags, promote 6 rising, discover 4 niche', persona: 'Content Creator', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_HASHTAG_INTELLIGENCE },
  { id: 'best-time-to-post', name: 'Best Time to Post', description: 'Per-platform optimal windows from 6-month engagement data', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_BEST_TIME_TO_POST },
  { id: 'content-repurposer', name: 'Content Repurposer', description: 'Turn 12 blog posts into 12 social content series', persona: 'Content Strategist', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CONTENT_REPURPOSER },
  { id: 'ai-listening-insights', name: 'AI Listening Insights', description: '34K mentions → 7 actionable insight cards', persona: 'Brand Analyst', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_LISTENING_INSIGHTS },
  { id: 'engagement-rate-recovery', name: 'Engagement Rate Recovery', description: 'ER dropped 3.2%→1.8% — diagnose 3 causes, fix plan', persona: 'Social Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_ENGAGEMENT_RATE_RECOVERY },
  { id: 'ugc-curation-automation', name: 'UGC Curation Automation', description: '234 high-quality UGC from 8,400 — rights auto-requested', persona: 'Content Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_UGC_CURATION_AUTOMATION },
  { id: 'social-customer-profiles', name: 'Social Customer Profiles', description: 'Enrich 1,200 care contacts with social data for CRM', persona: 'CRM Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SOCIAL_CUSTOMER_PROFILES },
  { id: 'content-pillar-ai', name: 'Content Pillar AI', description: '5 pillars drive 80% engagement — optimize mix', persona: 'Content Strategist', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CONTENT_PILLAR_AI },
  { id: 'social-roi-attribution', name: 'Social ROI Attribution', description: 'Connect social to 847 conversions and $234K revenue', persona: 'CMO', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SOCIAL_ROI_ATTRIBUTION },

  // ── Group R: Sprout Influencer & Creator AI ───────────────────────
  { id: 'creator-discovery-ai', name: 'Creator Discovery AI', description: 'Find 34 micro-influencers with 73% audience match', persona: 'Influencer Marketing Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CREATOR_DISCOVERY_AI },
  { id: 'influencer-fraud-detection', name: 'Influencer Fraud Detection', description: 'Flag 2 fake-follower profiles — save $18K in wasted budget', persona: 'Influencer Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_INFLUENCER_FRAUD_DETECTION },
  { id: 'creator-brief-generator', name: 'Creator Brief Generator', description: 'Auto-generate personalized briefs for 12 creators in 4 days', persona: 'Influencer Campaign Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CREATOR_BRIEF_GENERATOR },
  { id: 'influencer-roi-tracker', name: 'Influencer ROI Tracker', description: 'Q1 ROI per influencer — top 3 renew, bottom 2 replace', persona: 'Marketing Analytics Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_INFLUENCER_ROI_TRACKER },
  { id: 'ugc-rights-campaign', name: 'UGC Rights Campaign', description: '156 best UGC from 3,400 tagged — auto rights requests', persona: 'Content Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_UGC_RIGHTS_CAMPAIGN },
  { id: 'creator-content-amplifier', name: 'Creator Content Amplifier', description: '4 viral posts → whitelist for +2.3M reach at $8K', persona: 'Performance Marketing Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CREATOR_CONTENT_AMPLIFIER },
  { id: 'creator-portfolio-audit', name: 'Creator Portfolio Audit', description: 'Grade 87 creators — 12 offboard, 8 upgrade, 4 new', persona: 'Influencer Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CREATOR_PORTFOLIO_AUDIT },
  { id: 'ambassador-program-ai', name: 'Ambassador Program AI', description: 'Find top 20 brand advocates from 180K followers', persona: 'Community Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AMBASSADOR_PROGRAM_AI },

  // ── Group S: Sprinklr Enterprise Case Study Flows ─────────────────
  { id: 'microsoft-scale-care', name: 'Enterprise Care Scale', description: 'Handle 3x volume surge — 45K/month across 12 channels', persona: 'Head of Digital CX', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MICROSOFT_SCALE_CARE },
  { id: 'samsung-global-social', name: 'Global Social Coordination', description: 'Sync 28 regional teams, 340 profiles, 14 time zones', persona: 'Global Social Media Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SAMSUNG_GLOBAL_SOCIAL },
  { id: 'mcdonalds-ugc-scale', name: 'UGC at Scale', description: 'Curate 500 best from 120K monthly customer photos', persona: 'Digital Content Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MCDONALDS_UGC_SCALE },
  { id: 'nike-creator-network', name: 'Creator Network Intelligence', description: 'Monitor 450 global creator partnerships — flag 8 risks', persona: 'Creator Marketing VP', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_NIKE_CREATOR_NETWORK },
  { id: 'disney-compliance-shield', name: 'Enterprise Compliance Shield', description: '180 managers, 24 brands — blocked 34 risk posts this week', persona: 'Legal & Compliance Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_DISNEY_COMPLIANCE_SHIELD },
  { id: 'unilever-insight-engine', name: 'Multi-Brand Insight Engine', description: '22 brands, 67 markets — cross-brand trend intelligence', persona: 'Global Insights Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_UNILEVER_INSIGHT_ENGINE },
  { id: 't-mobile-crisis-war-room', name: 'Crisis War Room', description: '340K posts in 2h — activate crisis mode across all channels', persona: 'Crisis Communications Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_T_MOBILE_CRISIS_WAR_ROOM },
  { id: 'pfizer-regulated-content', name: 'Regulated Content AI', description: 'Pharma approval cycle: 8 days → 2.5 days', persona: 'Healthcare Marketing Compliance', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_PFIZER_REGULATED_CONTENT },
  { id: 'barclays-financial-social', name: 'Financial Services Social Compliance', description: 'Detect 12 violation types before publish — financial services', persona: 'Financial Services Social Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_BARCLAYS_FINANCIAL_SOCIAL },
  { id: 'holiday-season-scaling', name: 'Holiday Season Scaling', description: 'Black Friday prep: 8x spike, 45 bot FAQs, 120 posts', persona: 'Retail Social Media Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_HOLIDAY_SEASON_SCALING },
  { id: 'agency-client-reporting', name: 'Agency Client Reporting', description: '12 client reports auto-generated and personalized for Friday', persona: 'Agency Account Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AGENCY_CLIENT_REPORTING },
  { id: 'retail-product-launch', name: 'Retail Product Launch', description: '34 posts, listening alerts, care rules — launch in 72h', persona: 'Brand Launch Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_RETAIL_PRODUCT_LAUNCH },

  // ── Group T: Sprout Real Customer Flows ──────────────────────────
  { id: 'ecommerce-social-care', name: 'eCommerce Social Care', description: 'Order data in Care responses — 40% AHT reduction', persona: 'eCommerce Customer Service Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_ECOMMERCE_SOCIAL_CARE },
  { id: 'healthcare-patient-care', name: 'Healthcare Patient Care AI', description: 'HIPAA-compliant care routing — urgent within 5 minutes', persona: 'Patient Experience Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_HEALTHCARE_PATIENT_CARE },
  { id: 'automotive-care-ai', name: 'Automotive Care AI', description: '2,400 test drive DMs classified and routed to dealers', persona: 'Automotive Digital Marketing Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AUTOMOTIVE_CARE_AI },
  { id: 'b2b-social-selling', name: 'B2B Social Selling', description: '23 warm LinkedIn leads from intent signals → Sales', persona: 'B2B Social Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_B2B_SOCIAL_SELLING },
  { id: 'media-company-social', name: 'Media Company Social', description: '47 shows, 312 posts auto-generated from episode summaries', persona: 'Digital Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MEDIA_COMPANY_SOCIAL },
  { id: 'nonprofit-community', name: 'Nonprofit Community AI', description: '12K fundraising conversations — 50 top supporters identified', persona: 'Community Engagement Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_NONPROFIT_COMMUNITY },
  { id: 'sports-team-fan-care', name: 'Sports Fan Engagement', description: '45K match-day interactions — VIP fans personally engaged', persona: 'Sports Digital Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SPORTS_TEAM_FAN_CARE },
  { id: 'restaurant-chain-social', name: 'Restaurant Chain Social AI', description: '12 of 340 locations below 3.8★ — root cause and escalation', persona: 'Franchise Social Media Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_RESTAURANT_CHAIN_SOCIAL },

  // ── Group U: Emplifi Three-Cloud Differentiator Flows ─────────────
  { id: 'commerce-care-bridge', name: 'Commerce-Care Bridge', description: 'Instagram complaint → return initiated in one workflow', persona: 'Head of Digital CX', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_COMMERCE_CARE_BRIDGE },
  { id: 'ratings-review-response-ai', name: 'Ratings & Review Response AI', description: '1,240 reviews — personalized responses calibrated by rating', persona: 'E-Commerce Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_RATINGS_REVIEW_RESPONSE_AI },
  { id: 'three-cloud-campaign', name: 'Three-Cloud Campaign', description: 'Social + Commerce + Service coordinated launch campaign', persona: 'VP Marketing', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_THREE_CLOUD_CAMPAIGN },
  { id: 'ugc-to-commerce', name: 'UGC to Commerce', description: '89 UGC posts → shoppable PDPs, +14% conversion lift', persona: 'eCommerce Content Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_UGC_TO_COMMERCE },
  { id: 'social-proof-engine', name: 'Social Proof Engine', description: 'Best review quotes for 847 product pages — dynamic widgets', persona: 'eCommerce Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SOCIAL_PROOF_ENGINE },
  { id: 'cx-360-view', name: 'CX 360° View', description: '3 churn-risk segments identified from unified CX score', persona: 'Chief Customer Officer', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CX_360_VIEW },
  { id: 'care-to-commerce-recovery', name: 'Care-to-Commerce Recovery', description: '456 post-complaint customers — recovery campaign for top 50', persona: 'Customer Success Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CARE_TO_COMMERCE_RECOVERY },
  { id: 'review-velocity-alert', name: 'Review Velocity Alert', description: 'SKU #8847 negative reviews +340% — alert product + care', persona: 'Brand Reputation Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_REVIEW_VELOCITY_ALERT },
  { id: 'influencer-commerce-tie', name: 'Influencer Commerce Tie', description: '34 influencer links → 1,240 conversions, $89K revenue', persona: 'Influencer Marketing Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_INFLUENCER_COMMERCE_TIE },
  { id: 'content-hub-ai-curation', name: 'Content Hub AI Curation', description: 'Tag 3,200 untagged assets — 12 campaign collections created', persona: 'Content Operations Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CONTENT_HUB_AI_CURATION },
  { id: 'social-commerce-dashboard', name: 'Social Commerce Dashboard', description: 'Top 5 social commerce drivers + 3 conversion blockers', persona: 'Social Commerce Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_SOCIAL_COMMERCE_DASHBOARD },
  { id: 'multi-cloud-roi', name: 'Multi-Cloud ROI Report', description: '$340K earned media + 23% care savings + $1.2M commerce lift', persona: 'CMO', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MULTI_CLOUD_ROI },

  // ── Group V: Future Cortex Agent & Governance Flows ───────────────
  { id: 'cortex-memory-learning', name: 'Cortex Memory & Learning', description: 'Response accuracy improved 67%→84% in 90 days', persona: 'Head of Social Innovation', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CORTEX_MEMORY_LEARNING },
  { id: 'ai-governance-setup', name: 'AI Governance Setup', description: 'Configure approval flows, bias detection, explainability logging', persona: 'Chief Digital Officer', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_GOVERNANCE_SETUP },
  { id: 'cortex-skill-builder', name: 'Cortex Skill Builder', description: 'Train custom brand intelligence model from your playbook', persona: 'Social Innovation Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CORTEX_SKILL_BUILDER },
  { id: 'multi-agent-orchestration', name: 'Multi-Agent Orchestration', description: '5 specialized agents + Orchestrator for cross-cloud tasks', persona: 'Digital Operations Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_MULTI_AGENT_ORCHESTRATION },
  { id: 'ai-audit-trail', name: 'AI Audit Trail', description: '47,230 AI decisions logged — GDPR-compliant audit export', persona: 'Compliance Director', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_AUDIT_TRAIL },
  { id: 'predictive-crisis-prevention', name: 'Predictive Crisis Prevention', description: '4-hour advance warning — act before the crisis goes viral', persona: 'Head of Communications', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_PREDICTIVE_CRISIS_PREVENTION },
  { id: 'ai-content-moderation', name: 'AI Content Moderation', description: '50K comments/day, 98.4% accuracy — hate speech + spam', persona: 'Trust & Safety Manager', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_AI_CONTENT_MODERATION },
  { id: 'cortex-roi-dashboard', name: 'Cortex ROI Dashboard', description: '3.2x productivity gain — $2.1M annualized AI value', persona: 'VP Digital Strategy', startPage: 'command-center.html', source: 'ai-competitor', data: FLOW_CORTEX_ROI_DASHBOARD }
];

function getFlowById(id) {
  return FLOWS_REGISTRY.find(f => f.id === id) || FLOWS_REGISTRY[0];
}

function getFlowData(id) {
  const flow = getFlowById(id);
  return flow ? flow.data : null;
}
