const FLOW_HEALTHCARE_PATIENT_CARE = {
  id: 'healthcare-patient-care',
  name: 'Healthcare Patient Care AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Healthcare social routing with HIPAA compliance',
    description: [
      'Cortex routes inbound healthcare social messages by intent: non-urgent questions → FAQ bot, appointment requests → scheduling bot, urgent care inquiries → human agent within 5 minutes.',
      'HIPAA compliance enforced automatically — no PHI in logs, all routing decisions explainable. 94% of non-urgent queries deflected to bot.'
    ],
    completedDescription: ['Routing configured — FAQ bot, scheduling bot, and 5-min human escalation for urgent care. HIPAA compliance enforced.'],
    footer: 'This supports your goal: Deliver timely patient care while maintaining compliance',
    checkboxItems: [
      { action: 'configure-routing', label: 'Configure intent-based routing rules' },
      { action: 'enable-hipaa', label: 'Enable HIPAA compliance mode (no PHI logging)' },
      { action: 'set-sla', label: 'Set 5-minute SLA for urgent care escalation' }
    ],
    moreIdeasPool: [
      { action: 'audit-trail', label: 'Add compliance audit trail export' }
    ]
  },
  decisionItems: [
    { key: 'routing', label: 'Intent routing configured', href: 'care-inbox.html' },
    { key: 'hipaa', label: 'HIPAA mode enabled', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured intent-based routing for healthcare', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> enabled HIPAA compliance mode', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Healthcare routing ready:</strong> 94% non-urgent deflected to bot. Urgent → human in under 5 min. HIPAA enforced.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I configured healthcare social routing: non-urgent → FAQ bot, appointments → scheduling bot, urgent → human in under 5 minutes. HIPAA compliance enforced — no PHI in logs. 94% of non-urgent queries deflected to bot.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['configure-routing', 'enable-hipaa', 'set-sla'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
