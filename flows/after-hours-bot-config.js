const FLOW_AFTER_HOURS_BOT_CONFIG = {
  id: 'after-hours-bot-config',
  name: 'After-Hours Bot Config',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34% of messages arrive when agents are offline',
    description: [
      'I analyzed your message arrival patterns and found that <strong>34% of messages arrive between 10pm and 8am</strong> — your current off-hours window.',
      'These messages have an average first response time of 9.2 hours. Setting up an after-hours bot flow would reduce this to under 3 minutes.'
    ],
    completedDescription: ['After-hours bot flow configured — 24/7 coverage active with intelligent handoff at 8am daily.'],
    footer: 'This supports your goal: Provide 24/7 customer coverage and reduce after-hours first response time to under 5 minutes',
    checkboxItems: [
      { action: 'configure-schedule', label: 'Configure bot to activate automatically from 10pm to 8am daily' },
      { action: 'create-flow', label: 'Create after-hours welcome flow with FAQ handling and issue capture' },
      { action: 'setup-handoff', label: 'Set up morning handoff: summarize overnight conversations for agents' },
      { action: 'set-expectations', label: 'Configure honest messaging about response time for complex issues' }
    ],
    moreIdeasPool: [
      { action: 'weekend-coverage', label: 'Extend bot coverage for weekends with expanded FAQ scope' },
      { action: 'urgent-escalation', label: 'Configure urgent case detection (keywords: "urgent", "emergency")' },
      { action: 'multi-language', label: 'Enable multilingual after-hours bot in top 3 non-English languages' }
    ]
  },
  decisionItems: [
    { key: 'schedule', label: 'After-hours bot schedule configured (10pm-8am)', href: 'bot-builder.html' },
    { key: 'flow', label: 'After-hours welcome and FAQ flow created', href: 'bot-builder.html' },
    { key: 'handoff', label: 'Morning handoff summary configured for agents', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured after-hours bot schedule 10pm-8am', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created after-hours welcome and FAQ flow', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up morning handoff summary for Care agents', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>After-hours coverage live</strong> — bot active 10pm-8am, handoff summary at 8am daily.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected first response improvement: 9.2 hours → under 3 minutes.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '34% of your messages arrive when agents are offline — and they wait an average of 9.2 hours for a first response. An after-hours bot would cut that to under 3 minutes with zero additional staffing cost.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['configure-schedule', 'create-flow', 'setup-handoff', 'set-expectations'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 1500 }
  ]
};
