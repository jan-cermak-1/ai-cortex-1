const FLOW_SMART_ESCALATION = {
  id: 'smart-escalation',
  name: 'Smart Escalation Routing',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Escalation pattern analysis: 34% of cases over-escalated',
    description: [
      'I analyzed 90 days of escalation data and found that <strong>34% of escalated cases</strong> were resolved at the escalated level by the same knowledge a Tier 1 agent could have used.',
      'Fixing this would save ~18 agent-hours per week and reduce customer wait time by an average of 40 minutes.'
    ],
    completedDescription: ['Smart escalation configured — new routing logic and decision tree deployed, Tier 1 training plan generated.'],
    footer: 'This supports your goal: Increase Tier 1 first-contact resolution rate to 75% and reduce unnecessary escalations',
    checkboxItems: [
      { action: 'update-routing', label: 'Update escalation routing logic based on 90-day pattern analysis' },
      { action: 'create-decision-tree', label: 'Generate Tier 1 decision tree for top 10 escalation categories' },
      { action: 'knowledge-gaps', label: 'Identify and flag knowledge base articles that need updating' },
      { action: 'training-plan', label: 'Generate Tier 1 training plan to resolve top escalation categories' }
    ],
    moreIdeasPool: [
      { action: 'ai-suggest', label: 'Enable AI resolution suggestions before escalation button appears' },
      { action: 'escalation-dashboard', label: 'Create escalation analytics dashboard for supervisor' },
      { action: 'agent-coaching', label: 'Set up weekly agent coaching report based on escalation patterns' }
    ]
  },
  decisionItems: [
    { key: 'routing', label: 'Escalation routing logic updated', href: 'care-inbox.html' },
    { key: 'decision-tree', label: 'Tier 1 decision tree generated (10 categories)', href: 'care-inbox.html' },
    { key: 'training', label: 'Tier 1 training plan ready for review', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> updated escalation routing logic based on 90-day analysis', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated Tier 1 decision tree for 10 escalation categories', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 90 days of escalation patterns', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Escalation logic updated</strong> — projected 34% reduction in unnecessary escalations.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Tier 1 training plan generated. 6 knowledge gaps identified.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed 90 days of escalations. 34% of escalated cases were resolved using knowledge your Tier 1 agents already have — costing 18 agent-hours per week unnecessarily. I can fix this.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['update-routing', 'create-decision-tree', 'knowledge-gaps', 'training-plan'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
