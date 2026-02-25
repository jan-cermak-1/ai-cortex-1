const FLOW_CROSS_MODULE_SPIKE_RESPONSE = {
  id: 'cross-module-spike-response',
  name: 'Cross-Module Spike Response',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Coordinated cross-module response needed — spike + inbox surge',
    description: [
      'I\'m detecting a coordinated situation: <strong>Listening shows a 320% negative mention spike</strong> while Community inbox just hit 400+ unprocessed messages — both about the same product issue.',
      'This requires a cross-module response strategy that addresses social, care, and publishing simultaneously.'
    ],
    completedDescription: ['Cross-module crisis response activated — Listening monitoring live, Care escalated, Publisher paused, and unified response strategy deployed.'],
    footer: 'This supports your goal: Coordinate cross-team response to brand crises within 30 minutes across all channels',
    checkboxItems: [
      { action: 'listening-monitor', label: 'Activate crisis monitoring board in Listening for real-time tracking' },
      { action: 'care-escalate', label: 'Escalate all product-related Care cases to priority queue' },
      { action: 'publisher-pause', label: 'Pause all promotional Publisher posts until crisis resolves' },
      { action: 'unified-strategy', label: 'Generate unified response strategy brief for all teams' }
    ],
    moreIdeasPool: [
      { action: 'influencer-check', label: 'Check if brand influencers are posting about the issue' },
      { action: 'bot-takeover', label: 'Switch bot to crisis mode: acknowledge issue + direct to Care' },
      { action: 'exec-notify', label: 'Send executive notification with real-time crisis dashboard link' }
    ]
  },
  decisionItems: [
    { key: 'monitoring', label: 'Crisis monitoring board live in Listening', href: 'unified-analytics.html' },
    { key: 'care', label: 'Care team on priority mode for product issues', href: 'care-inbox.html' },
    { key: 'publisher', label: 'Promotional posts paused pending resolution', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> activated cross-module crisis response protocol', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> escalated 134 product-related Care cases to priority queue', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> paused 9 promotional posts across Publisher', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected coordinated spike: Listening 320% + inbox surge 400+', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>CROSS-MODULE ALERT:</strong> Coordinated crisis detected — all modules in response mode.', time: '3 min ago', unread: true },
    { icon: 'activity', text: 'Listening, Care, and Publisher all coordinated. Unified brief shared with all teams.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'m detecting a coordinated situation: Listening shows a 320% negative mention spike and your Community inbox just hit 400+ unprocessed messages — both about the same product issue. I\'m initiating a cross-module response.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['listening-monitor', 'care-escalate', 'publisher-pause', 'unified-strategy'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
