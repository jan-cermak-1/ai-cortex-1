const FLOW_SOCIAL_PROOF_ENGINE = {
  id: 'social-proof-engine',
  name: 'Social Proof Engine',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '3 best quotes per SKU for 847 product pages',
    description: [
      'Cortex scanned your review database for the 3 best quotes per product SKU and created dynamic social proof widgets for 847 product pages.',
      'Filtered by recency, rating, and verified purchase status. 2,541 quotes selected. Widget refresh: every 24 hours.'
    ],
    completedDescription: ['Social proof widgets created — 3 best quotes per SKU for 847 product pages. Filtered by recency, rating, verified purchase.'],
    footer: 'This supports your goal: Maximize conversion with dynamic, trustworthy social proof',
    checkboxItems: [
      { action: 'select-quotes', label: 'Select 3 best quotes per SKU (2,541 total)' },
      { action: 'create-widgets', label: 'Create dynamic widgets for 847 product pages' },
      { action: 'set-refresh', label: 'Set 24-hour widget refresh' }
    ],
    moreIdeasPool: [
      { action: 'ab-test', label: 'A/B test widget placement' }
    ]
  },
  decisionItems: [
    { key: 'widgets', label: 'Widgets on 847 product pages', href: 'content-collection.html' },
    { key: 'quotes', label: '2,541 quotes selected', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> selected 2,541 best quotes across SKUs', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created widgets for 847 product pages', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Social proof engine:</strong> 3 quotes/SKU for 847 pages. Recency, rating, verified. 24h refresh.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I scanned your review database and selected the 3 best quotes per product SKU — filtered by recency, rating, and verified purchase. 2,541 quotes for 847 product pages. Dynamic widgets refresh every 24 hours.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['select-quotes', 'create-widgets', 'set-refresh'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
