const FLOW_PRODUCT_LAUNCH_CAMPAIGN = {
  id: 'product-launch-campaign',
  name: 'Product Launch Campaign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'New product launch detected — campaign setup ready',
    description: [
      'I see you uploaded assets for <strong>"AquaFlow Pro"</strong>. Based on your previous product launches, I\'ve prepared a full launch campaign setup.',
      'This covers all the key components: content calendar, listening monitoring, and audience tracking.'
    ],
    completedDescription: ['Product launch campaign set up — 12 posts scheduled, listening query active, Publisher campaign created.'],
    footer: 'This supports your goal: Achieve 1M impressions and 500 pre-orders in the first 2 weeks of launch',
    checkboxItems: [
      { action: 'create-calendar', label: 'Create 4-week launch content calendar (12 posts, 4 platforms)' },
      { action: 'setup-listening', label: 'Set up Listening query for product name + competitor keywords' },
      { action: 'create-campaign', label: 'Create Publisher campaign "AquaFlow Pro Launch"' },
      { action: 'setup-analytics', label: 'Set up launch performance board in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'influencer-list', label: 'Generate list of relevant influencers for seeding' },
      { action: 'ugc-hashtag', label: 'Set up UGC campaign hashtag for launch day' },
      { action: 'care-faq', label: 'Create Care FAQ templates for expected product questions' }
    ]
  },
  decisionItems: [
    { key: 'calendar', label: '12-post launch calendar created', href: 'publisher-calendar.html' },
    { key: 'listening', label: 'Listening query active for AquaFlow Pro', href: 'settings-listening.html' },
    { key: 'analytics', label: 'Launch performance board live', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 12-post launch calendar across 4 platforms', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up Listening query for AquaFlow Pro', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created Publisher campaign and analytics board', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Launch campaign ready</strong> — 12 posts scheduled, monitoring active.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'AquaFlow Pro Listening query set up with 8 keyword clusters.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I detected new product assets for "AquaFlow Pro" in your Content Hub. Based on your previous launches, I\'ve prepared a complete campaign setup.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-calendar', 'setup-listening', 'create-campaign', 'setup-analytics'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
