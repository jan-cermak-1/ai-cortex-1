const FLOW_TRELLIS_CASE_TRIAGE = {
  id: 'trellis-case-triage',
  name: 'Intelligent Case Triage',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '847 unread care messages — triage complete',
    description: [
      'Cortex analyzed <strong>847 unread care messages</strong> from the past 12 hours.',
      'Classified by urgency, sentiment, and intent: 23 critical cases escalated, 340 routed to correct queues, 189 routine cases with macro suggestions.'
    ],
    completedDescription: ['Triage complete: 23 critical cases escalated, 340 routed to queues, 189 macro suggestions applied.'],
    footer: 'This supports your goal: Resolve 95% of care cases within SLA',
    checkboxItems: [
      { action: 'escalate-critical', label: 'Escalate 23 critical cases to senior agents' },
      { action: 'route-queues', label: 'Route 340 cases to correct skill-based queues' },
      { action: 'apply-macros', label: 'Apply suggested macros to 189 routine cases' }
    ],
    moreIdeasPool: [
      { action: 'sentiment-review', label: 'Review sentiment distribution across queues' },
      { action: 'intent-report', label: 'Generate intent breakdown report' }
    ]
  },
  decisionItems: [
    { key: 'escalated', label: '23 critical cases escalated', href: 'care-inbox.html' },
    { key: 'routed', label: '340 cases routed to queues', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> escalated 23 critical cases to senior agents', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> routed 340 cases to correct queues', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> triaged 847 unread care messages', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Case Triage Complete</strong> — 847 messages classified, 23 critical escalated', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I triaged 847 unread care messages from the past 12 hours. 23 are critical and need immediate escalation, 340 are routed to the right queues, and 189 routine cases have macro suggestions ready.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['escalate-critical', 'route-queues', 'apply-macros'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
