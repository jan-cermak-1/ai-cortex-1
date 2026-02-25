const FLOW_SOCIAL_COMMERCE_DASHBOARD = {
  id: 'social-commerce-dashboard',
  name: 'Social Commerce Dashboard',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Unified Social Commerce view: Top 5 drivers, 3 blockers',
    description: [
      'Built a unified Social Commerce performance view — combining social engagement, link clicks, product views, add-to-carts, and purchases.',
      'Cortex identified the top 5 social commerce drivers and 3 conversion blockers. Driver #1: Instagram Reels product tags — 34% of attributed revenue.'
    ],
    completedDescription: ['Social Commerce dashboard built — engagement to purchase funnel. Top 5 drivers and 3 blockers identified.'],
    footer: 'This supports your goal: Optimize social commerce funnel with data-driven insights',
    checkboxItems: [
      { action: 'build-dashboard', label: 'Build unified Social Commerce dashboard' },
      { action: 'identify-drivers', label: 'Identify top 5 social commerce drivers' },
      { action: 'flag-blockers', label: 'Flag 3 conversion blockers' }
    ],
    moreIdeasPool: [
      { action: 'ab-test-drivers', label: 'A/B test top driver optimizations' }
    ]
  },
  decisionItems: [
    { key: 'dashboard', label: 'Dashboard built', href: 'unified-analytics.html' },
    { key: 'drivers', label: 'Top 5 drivers identified', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> built Social Commerce performance view', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified top 5 drivers and 3 blockers', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Social Commerce:</strong> Top driver — IG Reels product tags, 34% of revenue. 3 blockers flagged.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I built a unified Social Commerce view — engagement, link clicks, product views, add-to-cart, purchases. Identified top 5 drivers and 3 conversion blockers. Driver #1: Instagram Reels product tags — 34% of attributed revenue.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['build-dashboard', 'identify-drivers', 'flag-blockers'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
