const FLOW_WHATSAPP_TEMPLATES = {
  id: 'whatsapp-templates',
  name: 'WhatsApp Response Templates',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 recurring WhatsApp question patterns detected',
    description: [
      'I analyzed your WhatsApp Business inbox for the past 30 days and found <strong>12 recurring question patterns</strong> that account for 67% of all incoming messages.',
      'Creating approved response templates for these categories would cut average response time from 42 minutes to under 5 minutes.'
    ],
    completedDescription: ['12 WhatsApp response templates created and deployed — covering order status, returns, product info, and store hours.'],
    footer: 'This supports your goal: Reduce WhatsApp average response time to under 5 minutes and achieve 95% first-contact resolution',
    checkboxItems: [
      { action: 'generate-templates', label: 'Generate 12 response templates based on actual message patterns' },
      { action: 'set-tone', label: 'Apply brand tone: friendly, empathetic, solution-focused' },
      { action: 'add-quick-replies', label: 'Configure quick-reply buttons for top 5 template categories' },
      { action: 'deploy-templates', label: 'Deploy templates to WhatsApp Business inbox with agent notes' }
    ],
    moreIdeasPool: [
      { action: 'bot-handoff', label: 'Configure bot to suggest templates when agent is offline' },
      { action: 'multilingual', label: 'Translate templates into Spanish and Portuguese' },
      { action: 'performance-tracking', label: 'Set up template usage and CSAT tracking' }
    ]
  },
  decisionItems: [
    { key: 'templates', label: '12 response templates deployed in WhatsApp inbox', href: 'care-inbox.html' },
    { key: 'quickreplies', label: 'Quick-reply buttons configured for top 5 categories', href: 'care-inbox.html' },
    { key: 'analytics', label: 'Template performance tracking enabled', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated 12 WhatsApp response templates', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured quick-reply buttons for top categories', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 30 days of WhatsApp message patterns', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>WhatsApp templates ready</strong> — 12 templates deployed for 67% of incoming messages.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected response time improvement: 42min → under 5min.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed your WhatsApp inbox and found 12 recurring question types covering 67% of messages. Creating templates for these would drop response time from 42 minutes to under 5.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-templates', 'set-tone', 'add-quick-replies', 'deploy-templates'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
