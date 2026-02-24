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
  }
];

function getFlowById(id) {
  return FLOWS_REGISTRY.find(f => f.id === id) || FLOWS_REGISTRY[0];
}

function getFlowData(id) {
  const flow = getFlowById(id);
  return flow ? flow.data : null;
}
