const FLOW_B2B_SOCIAL_SELLING = {
  id: 'b2b-social-selling',
  name: 'B2B Social Selling',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '23 warm B2B leads identified from LinkedIn intent signals',
    description: [
      'Cortex monitored LinkedIn and identified 23 warm B2B leads based on intent: engaged with 3+ pieces of content, mentioned a competitor, asked industry questions.',
      'Each lead routed to Sales with full context and suggested outreach. 12 already in active conversations.'
    ],
    completedDescription: ['23 warm B2B leads identified and routed to Sales with context and suggested outreach.'],
    footer: 'This supports your goal: Convert social engagement into qualified sales pipeline',
    checkboxItems: [
      { action: 'route-to-sales', label: 'Route 23 leads to Sales with context' },
      { action: 'add-outreach', label: 'Include suggested outreach for each lead' },
      { action: 'enable-monitoring', label: 'Enable continuous LinkedIn intent monitoring' }
    ],
    moreIdeasPool: [
      { action: 'crm-sync', label: 'Sync leads to Salesforce/CRM' }
    ]
  },
  decisionItems: [
    { key: 'leads', label: 'Leads routed to Sales', href: 'care-inbox.html' },
    { key: 'monitoring', label: 'Intent monitoring active', href: 'listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 23 warm B2B leads from LinkedIn', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> routed leads with context to Sales', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>23 warm leads:</strong> Intent signals — 3+ content engagements, competitor mentions. 12 in active conversations.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I identified 23 warm B2B leads on LinkedIn from intent signals: engaged with 3+ pieces of content, mentioned competitors, asked industry questions. Routed each to Sales with full context and suggested outreach. 12 are already in active conversations.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['route-to-sales', 'add-outreach', 'enable-monitoring'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
