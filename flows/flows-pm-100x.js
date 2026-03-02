/* ============================================================
   FLOWS: 100x Opportunities (Emplifi PM — Anton's table)
   
   Based on 100X-OPPORTUNITIES-CONTEXT.md
   Each flow represents a high-impact AI agent opportunity.
   ============================================================ */

function makePmFlow(opts) {
  const {
    id,
    name,
    persona,
    description,
    painShort,
    outcomeShort,
    promptShort,
    why100x,
    checkboxLabels = [],
    moreIdeasPool = [],
    decisionKey = 'done',
    decisionLabel = 'Flow completed',
    decisionHref = 'command-center.html'
  } = opts;

  const descLines = [
    painShort ? `<strong>Pain:</strong> ${painShort}` : null,
    outcomeShort ? `<strong>Outcome:</strong> ${outcomeShort}` : null,
    promptShort ? `<strong>Prompt:</strong> "${promptShort}"` : null
  ].filter(Boolean);

  const checkboxItems = checkboxLabels.map((label, i) => ({
    action: `action-${i}`,
    label
  }));

  const actionIds = checkboxItems.map(c => c.action);
  const navTarget = decisionHref === 'unified-analytics.html' ? '[data-nav-id="unified-analytics"]'
    : decisionHref === 'publisher-campaign.html' ? '[data-nav-id="publisher"]'
    : decisionHref === 'care-inbox.html' ? '[data-nav-id="care"]'
    : decisionHref === 'community-inbox.html' ? '[data-nav-id="community"]'
    : decisionHref === 'reviews-moderate.html' ? '[data-nav-id="rating-reviews"]'
    : decisionHref === 'settings-users.html' ? '[data-nav-id="settings"]'
    : decisionHref === 'settings-listening.html' ? '[data-nav-id="settings"]'
    : decisionHref === 'ugc-albums.html' ? '[data-nav-id="ugc"]'
    : decisionHref === 'bot-overview.html' ? '[data-nav-id="bot"]'
    : '[data-nav-id="command-center"]';

  const playbackSteps = [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1500 },
    { type: 'message', sender: 'ai', text: `<strong>${name}</strong> — 100x opportunity. ${painShort || ''}`, delay: 2000 },
    { type: 'message', sender: 'ai', text: outcomeShort ? `Outcome: ${outcomeShort} ${promptShort ? `Prompt: "${promptShort}"` : ''}` : description, delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: `Recommended actions for this agent workflow:`, delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: actionIds, delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: `${name} — agent workflow executed. ${decisionLabel}`, delay: 2500 }
  ];
  if (decisionHref !== 'command-center.html') {
    playbackSteps.push(
      { type: 'navigate', page: decisionHref, cursorTarget: navTarget, delay: 2000 },
      { type: 'message', sender: 'ai', text: `Output ready: ${decisionLabel}. Demo complete.`, delay: 2000 }
    );
  }

  return {
    id,
    name,
    initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
    intelligenceBox: {
      title: name,
      description: descLines.length ? descLines : [description],
      completedDescription: [`${name} — 100x opportunity activated.`],
      footer: why100x ? `Why 100x: ${why100x}` : 'High-impact AI agent opportunity.',
      checkboxItems: checkboxItems.length ? checkboxItems : [
        { action: 'execute', label: 'Execute agent workflow' },
        { action: 'review', label: 'Review output and approve' }
      ],
      moreIdeasPool: moreIdeasPool.length ? moreIdeasPool.map((l, i) => ({ action: `idea-${i}`, label: l })) : [
        { action: 'customize', label: 'Customize agent parameters' },
        { action: 'schedule', label: 'Schedule recurring run' }
      ]
    },
    decisionItems: [
      { key: decisionKey, label: decisionLabel, href: decisionHref }
    ],
    activityItems: [
      { text: `<strong>Cortex AI</strong> processed ${name}`, time: '1 minute ago' }
    ],
    notifications: [
      { icon: 'ai', text: `<strong>${name}</strong> — 100x opportunity ready`, time: '1 min ago', unread: true }
    ],
    playbackSteps
  };
}

// ─── Analytics ─────────────────────────────────────────────────
const FLOW_PM_360_ANALYTICS = makePmFlow({
  id: 'pm-360-analytics',
  name: '360 Analytics',
  persona: 'VP Marketing',
  description: 'Execute 360 analysis of marketing data across all areas.',
  painShort: 'Asking team leaders for reports; hoping for consistent data; relying on scarce specialists.',
  outcomeShort: 'Quick access to team results to adjust strategy without investing team time.',
  promptShort: 'Execute a 360 analysis of our marketing data and tell me which areas bring good results.',
  why100x: 'Cross-dataset reasoning + narrative building automated; removes specialist dependency; reduces decision latency.',
  checkboxLabels: [
    'Build Unified Analytics Board with metrics per area',
    'Generate executive summary (exportable)',
    'Compare areas against benchmark data'
  ],
  decisionLabel: 'Unified Analytics Board + Executive Summary created',
  decisionHref: 'unified-analytics.html'
});

const FLOW_PM_DYNAMIC_ROI_MARKETING_MIX = makePmFlow({
  id: 'pm-dynamic-roi-marketing-mix',
  name: 'Dynamic ROI & Marketing Mix Re-Alignment',
  persona: 'VP Marketing / CMO',
  description: 'Re-calibrate KPIs and budget allocation when marketing objectives change.',
  painShort: 'Manual data wrangling; siloed reports; "Should I invest more in ads or content?" takes weeks.',
  outcomeShort: 'Instantly re-calibrated tracking + data-backed budget allocation recommendation.',
  promptShort: 'Our objective changed to [X]. Re-evaluate cross-channel ROI and recommend budget reallocation.',
  why100x: 'Multi-week project → instant on-demand query; bypasses siloed team biases.',
  checkboxLabels: [
    'Update Objective vs. ROI Dashboard',
    'Generate Budget Reallocation Proposal',
    'Channel Contribution Breakdown'
  ],
  decisionLabel: 'Dashboard + Reallocation Proposal ready',
  decisionHref: 'unified-analytics.html'
});

// ─── Social / Content Publishing ───────────────────────────────
const FLOW_PM_SOCIAL_MEDIA_CAMPAIGN = makePmFlow({
  id: 'pm-social-media-campaign',
  name: 'Social Media Campaign (Organic)',
  persona: 'Social Media Manager',
  description: 'Draft cross-platform organic campaign aligned with brand voice.',
  painShort: 'Context switching; adapting copy per platform; researching past BF performance; hours brainstorming hooks.',
  outcomeShort: 'Platform-optimized multi-week content calendar based on historical winners.',
  promptShort: 'Draft a cross-platform organic campaign to prepare our customers for next Black Friday.',
  why100x: 'One SMM = creative agency; data-driven posts based on what worked last year.',
  checkboxLabels: [
    'Create Campaign Calendar (Tease → Educate → Hype)',
    'Draft unique copy per platform (IG, X, LinkedIn)',
    'Generate Creative Brief for design team'
  ],
  decisionLabel: 'Campaign Calendar + Bulk Review view ready',
  decisionHref: 'publisher-campaign.html'
});

const FLOW_PM_SOCIAL_MEDIA_SCHEDULE = makePmFlow({
  id: 'pm-social-media-schedule',
  name: 'Social Media Schedule',
  persona: 'Social Media Manager',
  description: 'Detect scheduling gaps, off-peak times, insufficient coverage.',
  painShort: 'Spotting gaps in 100+ profiles; schedules off best times; uneven content across days.',
  outcomeShort: 'Automatic detection of shortcomings; popup/notification when issues found.',
  promptShort: 'Daily scheduled trigger — check editorial calendar health.',
  why100x: 'One SMM scales; ensures even message spread and important day coverage.',
  checkboxLabels: [
    'Run daily schedule health check',
    'Compare Primetime spots vs. populated content',
    'Alert on content gaps per profile/campaign'
  ],
  decisionLabel: 'Schedule health report / notification delivered'
});

// ─── Social / UGC ───────────────────────────────────────────────
const FLOW_PM_UGC_VETTING_AUTOPERMISSION = makePmFlow({
  id: 'pm-ugc-vetting-autopermission',
  name: 'UGC Vetting and Autopermissioning',
  persona: 'Influencer Marketing Manager',
  description: 'Auto-sort UGC by quality; auto-request permissions.',
  painShort: 'Going one-by-one through UGC albums; then manually asking for permissions.',
  outcomeShort: 'Automatic sorting/filtering based on album memo; human-like permission comments.',
  promptShort: 'Periodic vetting + automatic permissioning when UGC approved.',
  why100x: 'Tool automatically yields UGC ready for use.',
  checkboxLabels: [
    'Analyze UGC album and vote for top quality assets',
    'Auto-request permissions for approved assets'
  ],
  decisionLabel: 'UGC ready for use with permissions',
  decisionHref: 'ugc-albums.html'
});

// ─── Social Analytics ───────────────────────────────────────────
const FLOW_PM_BRAND_GUARDIAN = makePmFlow({
  id: 'pm-brand-guardian',
  name: 'The Brand Guardian (Recovery & Action)',
  persona: 'PR Director',
  description: 'Diagnose follower churn and generate recovery plan.',
  painShort: 'Finding "why" followers drop — forensic nightmare; scanning 1000+ comments; gut-feel decisions.',
  outcomeShort: 'Immediate diagnosis + pre-written recovery plan executable in one click.',
  promptShort: 'Trigger: Net followers for [Account] decrease by >[Threshold] in 4-hour window.',
  why100x: 'Replaces 6 hours of data sleuthing with 30-second audit; turns panic into calculated leadership.',
  checkboxLabels: [
    'Correlate drop with activities (posts, ad spend)',
    'Run Sentiment Audit on last 500 comments',
    'Generate Diagnosis Report + Action Plan',
    'Draft 3-bullet Stakeholder Briefing'
  ],
  decisionLabel: 'Diagnosis Report + Recovery Plan ready',
  decisionHref: 'community-inbox.html'
});

const FLOW_PM_GLOBAL_AD_AUTO_LABELING = makePmFlow({
  id: 'pm-global-ad-auto-labeling',
  name: 'Intelligent Auto-Labeling for Global Ad Campaigns',
  persona: 'Global Head of Social',
  description: 'Globally consistent auto-labeling across 130+ ad accounts.',
  painShort: 'Manually tagging ads across 130+ accounts; regional formats = inconsistent reporting.',
  outcomeShort: 'Zero manual tagging; standardized reporting; global control without slowing regions.',
  promptShort: 'Audit campaigns across all 137 ad accounts and auto-apply standardized labels.',
  why100x: 'Thousands of ads across 137 accounts → instant automated process; single source of truth.',
  checkboxLabels: [
    'Ingest ad/campaign data from all accounts',
    'NLP analysis of naming conventions',
    'Auto-apply labels (Region, Format, Funnel Stage)',
    'Flag orphan ads for human review'
  ],
  decisionLabel: 'Global Labeling Rule Engine + Taxonomy Health Dashboard',
  decisionHref: 'unified-analytics.html'
});

// ─── Automation (Bot/Care) ──────────────────────────────────────
const FLOW_PM_AUTOMATION_ASSESSMENT = makePmFlow({
  id: 'pm-automation-assessment',
  name: 'Automation Assessment',
  persona: 'Customer Care Director',
  description: 'Analyze Bot performance and recommend improvements.',
  painShort: 'Understanding automation improvement requires deep setup knowledge.',
  outcomeShort: 'Assessment of abandonment areas + recommended actionable measures.',
  promptShort: 'Analyse abandonment areas and recommend steps to rectify',
  why100x: 'Identifying friction areas becomes accessible without vague instructions.',
  checkboxLabels: [
    'Review automation goal and performance metrics',
    'Identify drop-off/abandonment areas',
    'Generate one-click optimisation suggestions',
    'Create changes for validation + approval'
  ],
  decisionLabel: 'Automation assessment + rectification plan ready',
  decisionHref: 'bot-overview.html'
});

// ─── Community / Label Governance ───────────────────────────────
const FLOW_PM_AUTONOMOUS_LABEL_GOVERNANCE = makePmFlow({
  id: 'pm-autonomous-label-governance',
  name: 'Autonomous Label Governance Agent',
  persona: 'Community Manager',
  description: 'Autonomous labeling; filter noise; ensure reporting-ready data.',
  painShort: 'Manual, inconsistent labeling; rule-based fails at scale; no intelligent noise filtering.',
  outcomeShort: 'Eliminate manual labeling; intelligent noise filter; consistent structured data.',
  promptShort: 'Run autonomous label governance — filter noise, detect risk, ensure complete labeling.',
  why100x: 'Eliminates manual labeling roles; scales to millions; reporting-grade data integrity.',
  checkboxLabels: [
    'Taxonomy & Structural Analysis',
    'Content Analysis & Label Adjustment',
    'Reasoning & Confidence Scoring',
    'Executive Summary & Impact Report'
  ],
  decisionLabel: 'Labelling setup updated; content labelled with confidence scores'
});

// ─── Agent (Care) ───────────────────────────────────────────────
const FLOW_PM_TIER1_CASE_RESOLVER = makePmFlow({
  id: 'pm-tier1-case-resolver',
  name: 'Autonomous Tier-1 Case Resolver',
  persona: 'Head of Customer Service',
  description: 'AI autonomously resolves repetitive Tier-1 cases within guardrails.',
  painShort: 'High volume of repetitive cases (password resets, order status, refunds) handled manually.',
  outcomeShort: 'Resolve and close repetitive cases autonomously with audit trail.',
  promptShort: 'Resolve all Tier-1 cases that meet autonomy confidence threshold.',
  why100x: 'Removes up to 30% manual workload; shifts AI from assistant to executor.',
  checkboxLabels: [
    'Classify case → Retrieve KB → Draft response',
    'Validate policy → Execute workflow → Close with audit log'
  ],
  decisionLabel: 'Cases closed with full audit trail + confidence score',
  decisionHref: 'care-inbox.html'
});

const FLOW_PM_SLA_BREACH_PREVENTION = makePmFlow({
  id: 'pm-sla-breach-prevention',
  name: 'SLA Breach Prevention Operator',
  persona: 'Contact Center Supervisor',
  description: 'AI proactively prevents SLA breaches before they happen.',
  painShort: 'Manual SLA monitoring leads to reactive firefighting.',
  outcomeShort: 'Predict breach risk; reprioritize queue; auto-escalate or notify.',
  promptShort: 'Detect risk of SLA breach in next 60 minutes.',
  why100x: 'Prevents penalties; reduces operational stress.',
  checkboxLabels: [
    'Predict breach risk',
    'Reprioritize queue',
    'Auto-escalate or notify',
    'Log prevention action'
  ],
  decisionLabel: 'Reordered queue + alert + prevention log',
  decisionHref: 'care-inbox.html'
});

const FLOW_PM_AI_WORKFLOW_BUILDER = makePmFlow({
  id: 'pm-ai-workflow-builder',
  name: 'AI Workflow Builder from Plain English',
  persona: 'Operations Manager',
  description: 'Generate fully configured workflow from natural language.',
  painShort: 'Workflow configuration requires technical admins and weeks of effort.',
  outcomeShort: 'Fully configured workflow from natural language input.',
  promptShort: 'Create workflow for VIP customers with refund auto-approval under $50.',
  why100x: 'Eliminates cross-functional dependency and setup delays.',
  checkboxLabels: [
    'Interpret intent → Map components',
    'Generate config → Validate dependencies',
    'Present for approval (human gate)'
  ],
  decisionLabel: 'Draft workflow ready for activation'
});

const FLOW_PM_CONVERSATION_AUTO_COACH = makePmFlow({
  id: 'pm-conversation-auto-coach',
  name: 'Conversation Intelligence Auto-Coach',
  persona: 'Team Lead',
  description: 'AI continuously evaluates and coaches agents.',
  painShort: 'Manual QA reviews are slow and inconsistent.',
  outcomeShort: 'Continuous evaluation and coaching insights.',
  promptShort: 'Analyze last 100 cases for coaching insights.',
  why100x: 'Transforms QA from reactive sampling to continuous intelligence.',
  checkboxLabels: [
    'Score conversations → Detect patterns',
    'Generate coaching tips',
    'Recommend training'
  ],
  decisionLabel: 'Coaching dashboard + feedback summaries',
  decisionHref: 'care-inbox.html'
});

const FLOW_PM_CASE_SUMMARIZATION_HANDOFF = makePmFlow({
  id: 'pm-case-summarization-handoff',
  name: 'Autonomous Case Summarization & Handoff',
  persona: 'Contact Center Agent',
  description: 'Instant structured case handoff summaries.',
  painShort: 'Manual case summaries during shift handoff cause delays and errors.',
  outcomeShort: 'Handoff-ready structured summary with key facts, open tasks, risks.',
  promptShort: 'Summarize and prepare handoff for open cases.',
  why100x: 'Reduces cognitive load; prevents handoff mistakes.',
  checkboxLabels: [
    'Extract key facts → Identify open tasks',
    'Generate structured summary',
    'Flag risks'
  ],
  decisionLabel: 'Handoff-ready structured summary',
  decisionHref: 'care-inbox.html'
});

// ─── Knowledge ──────────────────────────────────────────────────
const FLOW_PM_SELF_HEALING_KB = makePmFlow({
  id: 'pm-self-healing-kb',
  name: 'Self-Healing Knowledge Base',
  persona: 'Knowledge Manager',
  description: 'AI detects outdated content and drafts improved versions.',
  painShort: 'Outdated articles lead to incorrect responses and rework.',
  outcomeShort: 'Detect low-performing articles; draft improved version.',
  promptShort: 'Audit KB for outdated or conflicting content.',
  why100x: 'Improves resolution rate; fuels autonomous case solving.',
  checkboxLabels: [
    'Detect low-performing articles',
    'Compare to successful cases',
    'Draft improved version with impact estimate'
  ],
  decisionLabel: 'Rewritten KB draft (requires editorial approval)'
});

const FLOW_PM_KNOWLEDGE_GAP_DETECTOR = makePmFlow({
  id: 'pm-knowledge-gap-detector',
  name: 'Knowledge Gap Detector',
  persona: 'Head of CS',
  description: 'AI identifies and drafts missing KB articles.',
  painShort: 'Recurring case types lack proper documentation.',
  outcomeShort: 'Identify theme → Draft new article → Suggest taxonomy placement.',
  promptShort: 'Identify top recurring unresolved intents.',
  why100x: 'Turns recurring friction into structured institutional knowledge.',
  checkboxLabels: [
    'Cluster unresolved cases',
    'Identify theme',
    'Draft new KB article',
    'Suggest taxonomy placement'
  ],
  decisionLabel: 'Draft KB article + impact forecast'
});

// ─── Agent + Knowledge ──────────────────────────────────────────
const FLOW_PM_CONFIDENCE_AUTO_RESOLUTION = makePmFlow({
  id: 'pm-confidence-auto-resolution',
  name: 'Confidence-Based Auto Resolution Engine',
  persona: 'CX Director',
  description: 'Allow autonomous resolution only when confidence threshold met.',
  painShort: 'Low trust in AI automation due to hallucination risk.',
  outcomeShort: 'Resolve when confidence > 90%; else escalate for review.',
  promptShort: 'Resolve case if confidence > 90%.',
  why100x: 'Balances autonomy with enterprise risk control.',
  checkboxLabels: [
    'Retrieve KB → Score confidence',
    'If above threshold: respond & close',
    'Else: escalate for review',
    'Log result (transparency mandatory)'
  ],
  decisionLabel: 'Closed case or escalated for review',
  decisionHref: 'care-inbox.html'
});

const FLOW_PM_CONTINUOUS_LEARNING_LOOP = makePmFlow({
  id: 'pm-continuous-learning-loop',
  name: 'Continuous Learning Loop Agent',
  persona: 'VP Customer Experience',
  description: 'Closed-loop system that improves autonomy monthly.',
  painShort: 'AI does not systematically improve over time.',
  outcomeShort: 'Compare AI vs human resolutions → Update KB → Adjust thresholds.',
  promptShort: 'Analyze all resolved cases this month for learning.',
  why100x: 'Creates compounding intelligence instead of static automation.',
  checkboxLabels: [
    'Compare AI vs human resolutions',
    'Identify gaps',
    'Update KB',
    'Adjust thresholds'
  ],
  decisionLabel: 'Monthly autonomy improvement report'
});

const FLOW_PM_NL_REPORTING_OPERATOR = makePmFlow({
  id: 'pm-nl-reporting-operator',
  name: 'Natural Language Reporting Operator',
  persona: 'Operations Director',
  description: 'Generate executive-ready report from natural language.',
  painShort: 'Reporting requires specialists and cross-dataset analysis.',
  outcomeShort: 'Dashboard + executive summary from plain-language request.',
  promptShort: 'Generate weekly performance report across queues.',
  why100x: 'Reduces hours of reporting work to seconds.',
  checkboxLabels: [
    'Interpret request → Pull metrics',
    'Generate insights → Format narrative'
  ],
  decisionLabel: 'Dashboard + executive summary document',
  decisionHref: 'unified-analytics.html'
});

// ─── Governance (Teams) ─────────────────────────────────────────
const FLOW_PM_AUTONOMOUS_GOVERNANCE_ARCHITECT = makePmFlow({
  id: 'pm-autonomous-governance-architect',
  name: 'Autonomous Governance Architect',
  persona: 'Platform Admin',
  description: 'Design optimal Teams structure based on org, regions, workflows.',
  painShort: 'Governance in workshops/spreadsheets; complex, error-prone; every restructuring = rethinking permissions.',
  outcomeShort: 'Right people, right access; optimal Teams structure that adapts dynamically.',
  promptShort: 'Design optimal Teams structure for our departments, regions, and workflows.',
  why100x: 'Eliminates weeks of governance workshops; turns static into adaptive governance.',
  checkboxLabels: [
    'Analyze org hierarchy',
    'Cluster users by role, collaboration, resource usage',
    'Detect governance risks',
    'Propose Team structure, roles, access segmentation',
    'Simulate impact; present migration plan'
  ],
  decisionLabel: 'Access summary + risk assessment + provisioning',
  decisionHref: 'settings-users.html'
});

const FLOW_PM_INTELLIGENT_ONBOARDING_CONCIERGE = makePmFlow({
  id: 'pm-intelligent-onboarding-concierge',
  name: 'Intelligent Onboarding Concierge',
  persona: 'Team Admin',
  description: 'Auto-provision correct teams and roles for new/changing users.',
  painShort: 'Onboarding manual; managers don\'t know what access someone needs; under/over-permissioned risks.',
  outcomeShort: 'New team member has everything on day one.',
  promptShort: 'Onboard user A as Social Media Manager in X region/brand/department.',
  why100x: 'Cuts onboarding from days to minutes; decreases security drift.',
  checkboxLabels: [
    'Identify job function',
    'Find similar profiles in system',
    'Map platform access, team memberships, team roles',
    'Check compliance conflicts → Provision'
  ],
  decisionLabel: 'Governance health score + risk dashboard',
  decisionHref: 'settings-users.html'
});

const FLOW_PM_CONTINUOUS_GOVERNANCE_GUARDIAN = makePmFlow({
  id: 'pm-continuous-governance-guardian',
  name: 'Continuous Governance Guardian',
  persona: 'Platform Admin',
  description: 'Full visibility of governance health; auto-correct risks.',
  painShort: 'No visibility into governance health; permission creep; compliance reporting manual.',
  outcomeShort: 'Real-time understanding and automatic correction of risks.',
  promptShort: 'Evaluate our governance health and fix critical risks.',
  why100x: 'Governance becomes continuous; compliance prep from weeks to minutes.',
  checkboxLabels: [
    'Map Teams and role relationships',
    'Detect over-permissioned roles, dormant users, anomalies',
    'Compare to compliance frameworks',
    'Suggest revocations, role adjustments',
    'Optionally execute'
  ],
  decisionLabel: 'Governance health report + remediation actions',
  decisionHref: 'settings-users.html'
});

// ─── Competitive Intelligence ───────────────────────────────────
const FLOW_PM_REALTIME_COMPETITIVE_INTELLIGENCE = makePmFlow({
  id: 'pm-realtime-competitive-intelligence',
  name: 'Real-Time Competitive Intelligence & Benchmarking Engine',
  persona: 'Marketing Analyst',
  description: 'Track competitors; identify winning strategies; alert on content gaps.',
  painShort: 'Dedicated analysts; manual monitoring; quarterly reports outdated; miss viral moments.',
  outcomeShort: 'Real-time automated monitoring; proactive alerts on content gaps.',
  promptShort: 'Analyze top 5 competitors over last month; alert on viral campaigns; identify content gaps.',
  why100x: 'Proactive vs reactive; replaces quarterly reporting with real-time insights.',
  checkboxLabels: [
    'Ingest recent posts/campaigns from competitors',
    'Identify winning patterns/formats/topics',
    'Compare to brand + industry benchmarks',
    'Detect anomalies (viral, new campaigns)',
    'Formulate alerts and content recommendations'
  ],
  decisionLabel: 'Competitive Dashboard + Gap Analysis Report',
  decisionHref: 'unified-analytics.html'
});

// ─── Flow Automations ───────────────────────────────────────────
const FLOW_PM_GUIDED_WORKSPACE_ARCHITECT = makePmFlow({
  id: 'pm-guided-workspace-architect',
  name: 'Guided Agentic Workspace Architect',
  persona: 'Implementation Manager',
  description: 'Fully configured, industry-specific workspace in minutes.',
  painShort: 'Manual configuration of fields/labels; messy data architecture from Day 1.',
  outcomeShort: 'Workspace ready for production in minutes, not weeks.',
  promptShort: 'User logs into fresh instance for first time.',
  why100x: 'CAC drops, TTV accelerates; embeds best practices from day one.',
  checkboxLabels: [
    'Analyze industry → Propose Label schema',
    'Suggest Case Fields based on workflows',
    'Offer to import/map CSV/JSON',
    'Draft initial Answer Templates'
  ],
  decisionLabel: 'Configuration Summary + functional workspace shell'
});

const FLOW_PM_AI_LOGIC_GUARDRAIL = makePmFlow({
  id: 'pm-ai-logic-guardrail',
  name: 'AI Logic Guardrail & Flow Optimizer',
  persona: 'Operations Manager',
  description: 'Flag logical dead-ends before Activate is clicked.',
  painShort: 'Silent failures; logical paradoxes; high risk of human error.',
  outcomeShort: 'Error-free automation; real-time Redline alerts.',
  promptShort: 'User adds condition block or attempts to save/activate Flow.',
  why100x: 'Risk mitigation; non-technical users build complex logic with confidence.',
  checkboxLabels: [
    'Parse flow logic for contradictions',
    'Scan for missing Else/Default paths',
    'Verify variable compatibility',
    'Provide Quick Fix suggestions'
  ],
  decisionLabel: 'Inline UI warnings + Quick Fix'
});

const FLOW_PM_PROACTIVE_WORKFLOW_DISCOVERY = makePmFlow({
  id: 'pm-proactive-workflow-discovery',
  name: 'Proactive Workflow Discovery Agent',
  persona: 'Customer Support Agent',
  description: 'Detect repetitive behavior; propose automation.',
  painShort: 'Repetitive manual tasks; users too busy to realize automation possible.',
  outcomeShort: 'Work Smarter toast → pre-configured rule ready for one-click activation.',
  promptShort: 'Trigger: User labels 10 messages with "Refund" manually within 5 minutes.',
  why100x: 'Anti-Churn Engine; platform becomes living system that learns user.',
  checkboxLabels: [
    'Monitor for pattern repetition',
    'Interrupt with Work Smarter toast',
    'Generate rule logic from recent actions'
  ],
  decisionLabel: 'Pre-configured Automation Rule ready'
});

const FLOW_PM_INTELLIGENT_KEYWORD_ANALYZER = makePmFlow({
  id: 'pm-intelligent-keyword-analyzer',
  name: 'Intelligent Keyword Analyzer',
  persona: 'Marketing Analyst',
  description: 'Dynamic keyword lists from real-world user language.',
  painShort: 'Manual auditing of keyword lists; blind spots; outdated filters.',
  outcomeShort: 'Top 10 Ghost Keywords + One-Click Apply with projected accuracy lift.',
  promptShort: 'Analyze the Refund list against last month\'s transcripts.',
  why100x: 'Replaces 20+ hours monthly analysis with 5-second Approve click.',
  checkboxLabels: [
    'Ingest & tokenize text',
    'Linguistic normalization (lemmatization)',
    'Gap analysis: High Freq Terms \\ Existing List',
    'Correlation mapping → Scrubbing'
  ],
  decisionLabel: 'Ghost Keywords + One-Click Apply (+14% coverage)',
  decisionHref: 'settings-listening.html'
});

// ─── Commerce ───────────────────────────────────────────────────
const FLOW_PM_UNIFIED_COMMERCE_SIGNAL_AGENT = makePmFlow({
  id: 'pm-unified-commerce-signal-agent',
  name: 'Unified Commerce Signal Agent (UCSA)',
  persona: 'VP of Ecommerce',
  description: 'Detect cross-channel sentiment shifts; predict revenue risk.',
  painShort: 'Reviews, social, care in silos; no unified customer truth; revenue drops without root cause.',
  outcomeShort: 'Single intelligence layer; cross-channel risk alert; revenue at risk forecast.',
  promptShort: 'Triggers: Negative spike in social; 3/2/1-star review surge; care tickets on same issue.',
  why100x: 'Becomes operating system for customer truth; prevents crises; C-suite visible.',
  checkboxLabels: [
    'Cross-Channel Entity Resolution (link SKU across reviews, social, care)',
    'Sentiment Convergence Detection',
    'Root Cause Clustering',
    'Revenue Impact Forecasting (14-30 day GMV risk)',
    'Autonomous Action Routing',
    'Resolution Monitoring Loop'
  ],
  decisionLabel: 'Cross-Channel Risk Alert + Revenue at Risk Forecast',
  decisionHref: 'reviews-moderate.html'
});

// ─── Commerce / R&R ────────────────────────────────────────────
const FLOW_PM_CONVERSION_DRIVING_REVIEW_INTELLIGENCE = makePmFlow({
  id: 'pm-conversion-driving-review-intelligence',
  name: 'Conversion-Driving Review Intelligence Agent',
  persona: 'VP of Ecommerce / CRO Lead',
  description: 'Identify reviews that drive conversion; shape future collection.',
  painShort: 'Star rating ≠ conversion impact; no visibility; generic collection forms.',
  outcomeShort: 'Conversion-driving attributes; optimized collection template; projected lift.',
  promptShort: 'Triggers: High traffic, moderate conversion SKU; new product launch.',
  why100x: 'Reviews become measurable revenue assets; closed-loop Behavior → Insight → Prompt → Revenue.',
  checkboxLabels: [
    'Conversion Attribution Modeling (Review → Add to cart → Purchase)',
    'Attribute Extraction from high-converting reviews',
    'Pattern Clustering (e.g. "true to size" +4.2% conversion)',
    'Review Prompt Optimization',
    'Continuous Learning Loop'
  ],
  decisionLabel: 'Conversion-Driving Attributes report + Optimized template',
  decisionHref: 'reviews-moderate.html'
});

const FLOW_PM_REVENUE_RECOVERY_OBJECTION_INTERCEPT = makePmFlow({
  id: 'pm-revenue-recovery-objection-intercept',
  name: 'Revenue Recovery & Objection Intercept Agent (RROIA)',
  persona: 'VP of Ecommerce / CRO Lead',
  description: 'Intercept buyer objections in real time using review intelligence.',
  painShort: 'High PDP traffic, low conversion; objections in reviews not surfaced; exit intent not contextual.',
  outcomeShort: 'Real-time objection intercept overlays; revenue recovered attribution.',
  promptShort: 'Triggers: Dwell + no add-to-cart; user expands 1-3 star reviews; searches "fit"; exit intent.',
  why100x: 'Recovering 1-3% abandoning traffic = enormous impact; no new traffic spend.',
  checkboxLabels: [
    'Objection Detection (e.g. "fit" → sizing anxiety)',
    'Objection Mapping (structured attribute reassurance)',
    'Dynamic Intervention with confidence scoring',
    'Revenue Impact Learning (track Intervention → Purchase)'
  ],
  decisionLabel: 'Objection intercept overlays + Revenue recovered report',
  decisionHref: 'reviews-moderate.html'
});

