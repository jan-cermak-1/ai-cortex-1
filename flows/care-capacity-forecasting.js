const FLOW_CARE_CAPACITY_FORECASTING = {
  id: 'care-capacity-forecasting',
  name: 'Care Capacity Forecasting',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '+45% inbound spike expected Mon–Tue post-promotion',
    description: [
      'Cortex analyzed historical care volume patterns and forecast next week\'s inbound.',
      'Expects <strong>+45% spike Monday–Tuesday</strong> post-promotion. Recommends scheduling <strong>3 extra agents</strong> and enabling overflow bot.'
    ],
    completedDescription: ['Forecast applied: 3 extra agents scheduled, overflow bot enabled for Mon–Tue.'],
    footer: 'This supports your goal: Maintain sub-2-minute first response time',
    checkboxItems: [
      { action: 'schedule-agents', label: 'Schedule 3 extra agents for Mon–Tue' },
      { action: 'enable-overflow', label: 'Enable overflow bot for peak hours' },
      { action: 'create-alert', label: 'Create volume spike alert for next week' }
    ],
    moreIdeasPool: [
      { action: 'capacity-dashboard', label: 'Build capacity forecasting dashboard' },
      { action: 'historical-compare', label: 'Compare to last promotion period' }
    ]
  },
  decisionItems: [
    { key: 'agents-scheduled', label: '3 extra agents scheduled', href: 'settings-users.html' },
    { key: 'overflow-enabled', label: 'Overflow bot enabled', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> forecast +45% inbound spike Mon–Tue', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> recommended 3 extra agents and overflow bot', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Capacity Alert</strong> — +45% spike expected Mon–Tue, 3 agents + overflow bot recommended', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed historical patterns and forecast a +45% inbound spike Monday–Tuesday post-promotion. I recommend scheduling 3 extra agents and enabling the overflow bot.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['schedule-agents', 'enable-overflow', 'create-alert'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
