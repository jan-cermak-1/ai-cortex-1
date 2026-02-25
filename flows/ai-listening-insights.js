const FLOW_AI_LISTENING_INSIGHTS = {
  id: 'ai-listening-insights',
  name: 'AI Listening Insights',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34,000 brand mentions → 7 actionable insight cards',
    description: [
      'Cortex processed <strong>34,000 brand mentions</strong> from the past month.',
      'Distilled into <strong>7 actionable insight cards</strong>: top themes, emerging topics, key influencers, and recommended content opportunities.'
    ],
    completedDescription: ['7 insight cards generated: themes, topics, influencers, content opportunities.'],
    footer: 'This supports your goal: Turn listening data into action',
    checkboxItems: [
      { action: 'create-themes', label: 'Create top themes insight card' },
      { action: 'create-topics', label: 'Create emerging topics card' },
      { action: 'create-influencers', label: 'Create key influencers card' },
      { action: 'create-opportunities', label: 'Create content opportunity recommendations' }
    ],
    moreIdeasPool: [
      { action: 'sentiment-breakdown', label: 'Add sentiment breakdown' },
      { action: 'competitor-compare', label: 'Compare to competitor mentions' }
    ]
  },
  decisionItems: [
    { key: 'insights-ready', label: '7 insight cards in Listening', href: 'listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> processed 34,000 brand mentions', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated 7 actionable insight cards', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Listening Insights</strong> — 34K mentions → 7 actionable cards', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I processed 34,000 brand mentions from the past month and distilled them into 7 actionable insight cards: top themes, emerging topics, key influencers, and content opportunities.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-themes', 'create-topics', 'create-influencers', 'create-opportunities'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
