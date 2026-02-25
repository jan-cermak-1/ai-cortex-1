const FLOW_SHIFT_HANDOVER_SUMMARY = {
  id: 'shift-handover-summary',
  name: 'Shift Handover Summary',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'End-of-shift handover brief ready',
    description: [
      'Cortex generated a comprehensive handover brief for the incoming team.',
      'Includes: open cases, escalation status, trending topics, SLA risk items, and priority actions for the next 4 hours.'
    ],
    completedDescription: ['Handover brief generated and shared with incoming team.'],
    footer: 'This supports your goal: Zero knowledge loss between shifts',
    checkboxItems: [
      { action: 'generate-brief', label: 'Generate handover brief' },
      { action: 'include-sla-risk', label: 'Include 12 SLA-at-risk cases' },
      { action: 'share-team', label: 'Share with incoming shift team' }
    ],
    moreIdeasPool: [
      { action: 'schedule-handover', label: 'Schedule automatic handover at shift end' },
      { action: 'trending-deep-dive', label: 'Deep-dive on trending topics' }
    ]
  },
  decisionItems: [
    { key: 'brief-shared', label: 'Handover brief shared with team', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated shift handover brief', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 12 SLA-at-risk cases', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Handover Ready</strong> — Brief with open cases, SLA risks, and next 4h priorities', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'End of shift — I generated a handover brief with open cases, escalation status, trending topics, and 12 SLA-at-risk items. Priority actions for the next 4 hours are included.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-brief', 'include-sla-risk', 'share-team'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
