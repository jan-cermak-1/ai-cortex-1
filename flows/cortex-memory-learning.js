const FLOW_CORTEX_MEMORY_LEARNING = {
  id: 'cortex-memory-learning',
  name: 'Cortex Memory & Learning',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '90-day Cortex performance: 14 new patterns, 67%→84% accuracy',
    description: [
      'Cortex reviewed its own 90-day performance — learned 14 new brand-specific patterns, improved response suggestion accuracy from 67% to 84%, and built a personalized brand voice model from your top 200 posts.',
      'Learning report available. Brand voice model now powers all AI suggestions across Publisher and Care.'
    ],
    completedDescription: ['Cortex 90-day learning: 14 new patterns, 67%→84% accuracy, brand voice from top 200 posts.'],
    footer: 'This supports your goal: Cortex gets smarter the more you use it',
    checkboxItems: [
      { action: 'review-learning', label: 'Review 90-day learning report' },
      { action: 'apply-brand-voice', label: 'Apply brand voice model to all AI suggestions' },
      { action: 'track-accuracy', label: 'Set accuracy tracking for next quarter' }
    ],
    moreIdeasPool: [
      { action: 'export-learning', label: 'Export learning report for stakeholders' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Learning report available', href: 'unified-analytics.html' },
    { key: 'brand-voice', label: 'Brand voice model active', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> learned 14 new brand-specific patterns', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> improved suggestion accuracy 67%→84%', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Cortex learning:</strong> 90 days — 14 patterns, 67%→84% accuracy. Brand voice from top 200 posts.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I reviewed my 90-day performance. I learned 14 new brand-specific patterns, improved response suggestion accuracy from 67% to 84%, and built a personalized brand voice model from your top 200 posts. The model now powers all AI suggestions across Publisher and Care.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['review-learning', 'apply-brand-voice', 'track-accuracy'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
