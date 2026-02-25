const FLOW_BEST_TIME_TO_POST = {
  id: 'best-time-to-post',
  name: 'Best Time to Post',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Top posting windows by platform (6-month data)',
    description: [
      'Cortex identified your top posting windows per platform based on 6-month engagement data.',
      'Instagram: Wed/Fri 6–7pm. LinkedIn: Mon/Thu 8–9am. X: inconsistent — recommends real-time scheduling.'
    ],
    completedDescription: ['Posting schedule optimized: PrimeTime windows applied per platform.'],
    footer: 'This supports your goal: Maximize engagement per post',
    checkboxItems: [
      { action: 'apply-instagram', label: 'Apply Wed/Fri 6–7pm to Instagram schedule' },
      { action: 'apply-linkedin', label: 'Apply Mon/Thu 8–9am to LinkedIn schedule' },
      { action: 'enable-realtime-x', label: 'Enable real-time scheduling for X' }
    ],
    moreIdeasPool: [
      { action: 'prime-time-dashboard', label: 'View PrimeTime dashboard' },
      { action: 'content-type-breakdown', label: 'Best times by content type' }
    ]
  },
  decisionItems: [
    { key: 'schedule-applied', label: 'Optimal posting windows applied', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> applied optimal posting windows to Publisher', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> analyzed 6-month engagement data', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Best Time to Post</strong> — IG Wed/Fri 6–7pm, LinkedIn Mon/Thu 8–9am', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Based on 6 months of engagement data: Instagram peaks Wed/Fri 6–7pm, LinkedIn Mon/Thu 8–9am. X is inconsistent — I recommend real-time scheduling for X.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-instagram', 'apply-linkedin', 'enable-realtime-x'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
