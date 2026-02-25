const FLOW_HOLIDAY_SEASON_SCALING = {
  id: 'holiday-season-scaling',
  name: 'Holiday Season Scaling',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Black Friday in 3 weeks — 8x care spike forecast',
    description: [
      'Black Friday is <strong>3 weeks away</strong>. Cortex forecasts <strong>8x care volume spike</strong>.',
      'Prepared 45 FAQ bot flows for holiday-specific queries, pre-scheduled 120 promotional posts, configured escalation rules for high-value cart abandonment.'
    ],
    completedDescription: ['Holiday scaling complete — 45 FAQ flows, 120 posts scheduled, escalation rules configured.'],
    footer: 'This supports your goal: Handle Black Friday without service degradation',
    checkboxItems: [
      { action: 'faq-flows', label: 'Deploy 45 holiday-specific FAQ bot flows' },
      { action: 'schedule-posts', label: 'Pre-schedule 120 promotional posts' },
      { action: 'escalation-rules', label: 'Configure escalation for high-value cart abandonment' }
    ],
    moreIdeasPool: [
      { action: 'capacity-planning', label: 'Forecast agent capacity for peak days' },
      { action: 'inventory-alerts', label: 'Link care to inventory for out-of-stock messaging' }
    ]
  },
  decisionItems: [
    { key: 'faq', label: '45 FAQ flows deployed', href: 'care-inbox.html' },
    { key: 'posts', label: '120 posts pre-scheduled', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> forecast 8x care volume for Black Friday', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> prepared 45 FAQ flows and 120 posts', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Holiday Scaling</strong> — 3 weeks to Black Friday. 8x spike forecast. Ready.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Black Friday in 3 weeks. I forecast an <strong>8x care volume spike</strong>. Prepared 45 FAQ bot flows for holiday queries, pre-scheduled 120 promotional posts, and configured escalation rules for high-value cart abandonment.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['faq-flows', 'schedule-posts', 'escalation-rules'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
