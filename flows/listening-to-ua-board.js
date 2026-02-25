const FLOW_LISTENING_TO_UA_BOARD = {
  id: 'listening-to-ua-board',
  name: 'Listening to Analytics Bridge',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Listening insights not connected to Analytics reporting',
    description: [
      'Your Listening module is generating valuable brand intelligence but it\'s completely disconnected from your Unified Analytics dashboards.',
      'Bridging these creates a single view combining social listening signals with performance metrics — enabling you to see <strong>how brand perception influences content performance</strong>.'
    ],
    completedDescription: ['Listening-Analytics bridge created — sentiment and share of voice data now feeding into Unified Analytics boards.'],
    footer: 'This supports your goal: Create a unified view combining social intelligence with performance metrics',
    checkboxItems: [
      { action: 'connect-sentiment', label: 'Connect Listening sentiment scores to Unified Analytics performance view' },
      { action: 'add-sov-tracking', label: 'Add Share of Voice metric to Unified Analytics brand board' },
      { action: 'create-bridge-board', label: 'Create "Brand Intelligence" board combining Listening + Analytics data' },
      { action: 'automate-reporting', label: 'Automate weekly brand intelligence report from combined data' }
    ],
    moreIdeasPool: [
      { action: 'correlation-analysis', label: 'Run correlation analysis: sentiment changes vs engagement rate changes' },
      { action: 'predictive-trigger', label: 'Set up predictive trigger: when sentiment drops, alert content team' },
      { action: 'share-with-team', label: 'Share brand intelligence board with all stakeholders' }
    ]
  },
  decisionItems: [
    { key: 'connected', label: 'Listening sentiment connected to Analytics view', href: 'unified-analytics.html' },
    { key: 'board', label: 'Brand Intelligence board created', href: 'unified-analytics.html' },
    { key: 'reporting', label: 'Weekly brand intelligence report automated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> connected Listening sentiment to Unified Analytics', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created Brand Intelligence board with combined data', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified disconnection between Listening and Analytics modules', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Listening + Analytics connected</strong> — Brand Intelligence board ready.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'First correlation insight: sentiment drop 2 weeks ago preceded engagement decline by 5 days.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your Listening data and Analytics dashboards are completely disconnected — you\'re missing the ability to see how brand sentiment influences content performance. Bridging these creates a unified brand intelligence view.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['connect-sentiment', 'add-sov-tracking', 'create-bridge-board', 'automate-reporting'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
