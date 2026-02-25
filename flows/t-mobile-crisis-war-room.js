const FLOW_T_MOBILE_CRISIS_WAR_ROOM = {
  id: 't-mobile-crisis-war-room',
  name: 'Crisis War Room',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '340K posts in 2 hours — crisis war room activated',
    description: [
      'Network outage affecting <strong>2M customers</strong> triggered <strong>340K social posts</strong> in 2 hours.',
      'Cortex activated crisis war room: prioritizes care queue, deploys empathy bot, drafts executive statement, monitors sentiment recovery in real time.'
    ],
    completedDescription: ['Crisis war room active — care prioritized, empathy bot deployed, executive statement drafted, sentiment monitored.'],
    footer: 'This supports your goal: Contain crisis impact and restore sentiment',
    checkboxItems: [
      { action: 'prioritize-care', label: 'Prioritize care queue for outage-related messages' },
      { action: 'empathy-bot', label: 'Deploy empathy bot for automated acknowledgment' },
      { action: 'exec-statement', label: 'Draft executive statement for approval' },
      { action: 'sentiment-board', label: 'Create real-time sentiment recovery board' }
    ],
    moreIdeasPool: [
      { action: 'press-briefing', label: 'Prepare press briefing talking points' },
      { action: 'recovery-milestones', label: 'Set sentiment recovery milestones' }
    ]
  },
  decisionItems: [
    { key: 'care', label: 'Care queue prioritized', href: 'care-inbox.html' },
    { key: 'statement', label: 'Executive statement drafted', href: 'publisher-calendar.html' },
    { key: 'board', label: 'Sentiment recovery board active', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> activated crisis war room mode', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> prioritized care queue and deployed empathy bot', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> drafted executive statement', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>CRISIS</strong> — 340K posts in 2 hrs. War room active. 2M affected.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>CRISIS:</strong> Network outage affecting 2M customers. 340K social posts in 2 hours. I activated crisis war room: care queue prioritized, empathy bot deployed, executive statement drafted. Monitoring sentiment recovery.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['prioritize-care', 'empathy-bot', 'exec-statement', 'sentiment-board'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
