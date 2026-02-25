const FLOW_SMART_ESCALATION_PATHS = {
  id: 'smart-escalation-paths',
  name: 'Smart Escalation Paths',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '6 AI-powered escalation rules ready',
    description: [
      'Configure <strong>6 AI-powered escalation rules</strong>: VIP customer detection, sentiment cliff, repeat contact ID, legal keyword detection, executive mention alerts, SLA breach prediction.',
      'Each rule routes cases to the right team before they become critical.'
    ],
    completedDescription: ['6 escalation rules configured and active.'],
    footer: 'This supports your goal: Zero SLA breaches on high-priority cases',
    checkboxItems: [
      { action: 'vip-rule', label: 'Enable VIP customer detection → senior agent queue' },
      { action: 'sentiment-rule', label: 'Enable sentiment cliff detection → escalation team' },
      { action: 'repeat-rule', label: 'Enable repeat contact identification → retention queue' },
      { action: 'legal-rule', label: 'Enable legal keyword detection → compliance team' },
      { action: 'exec-rule', label: 'Enable executive mention alerts → priority inbox' },
      { action: 'sla-rule', label: 'Enable SLA breach prediction → supervisor alert' }
    ],
    moreIdeasPool: [
      { action: 'custom-rule', label: 'Add custom escalation rule' },
      { action: 'rule-analytics', label: 'View escalation rule performance' }
    ]
  },
  decisionItems: [
    { key: 'rules-active', label: '6 escalation rules active', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured 6 smart escalation rules', time: '1 minute ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Escalation Rules Ready</strong> — 6 AI-powered rules configured', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I set up 6 AI-powered escalation rules: VIP detection, sentiment cliff, repeat contacts, legal keywords, executive mentions, and SLA breach prediction. Each routes cases before they become critical.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['vip-rule', 'sentiment-rule', 'repeat-rule', 'legal-rule', 'exec-rule', 'sla-rule'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
