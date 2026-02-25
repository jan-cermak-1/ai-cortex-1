const FLOW_REVIEW_SYNDICATION_SETUP = {
  id: 'review-syndication-setup',
  name: 'Review Syndication Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '1,240 reviews sitting in your database — not syndicated',
    description: [
      'You have <strong>1,240 approved customer reviews</strong> that could be syndicated to retailer product pages (Amazon, Target, Walmart) but syndication hasn\'t been configured.',
      'Products with syndicated reviews see an average of 23% higher conversion on retailer sites.'
    ],
    completedDescription: ['Review syndication configured — 1,240 reviews queued for syndication to 3 retailer partners.'],
    footer: 'This supports your goal: Maximize review coverage across all sales channels to improve retailer conversion rates',
    checkboxItems: [
      { action: 'configure-syndication', label: 'Configure syndication connections for Amazon, Target, Walmart' },
      { action: 'map-products', label: 'Map your SKUs to retailer product IDs for accurate matching' },
      { action: 'queue-reviews', label: 'Queue all 1,240 approved reviews for initial syndication push' },
      { action: 'setup-auto-sync', label: 'Enable automatic daily sync of new approved reviews' }
    ],
    moreIdeasPool: [
      { action: 'prioritize-negative', label: 'Exclude reviews below 3 stars from initial syndication' },
      { action: 'track-performance', label: 'Set up cross-channel review performance tracking' },
      { action: 'content-check', label: 'Run content compliance check before syndication to retailer specs' }
    ]
  },
  decisionItems: [
    { key: 'syndication', label: 'Syndication configured for 3 retailers', href: 'community-inbox.html' },
    { key: 'queued', label: '1,240 reviews queued for syndication', href: 'community-inbox.html' },
    { key: 'auto-sync', label: 'Daily auto-sync enabled for new reviews', href: 'community-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured syndication for Amazon, Target, Walmart', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> mapped SKUs to retailer product IDs', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> queued 1,240 reviews for initial syndication push', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Syndication configured</strong> — 1,240 reviews queued for 3 retailers.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Projected conversion improvement: +23% on syndicated retailer pages.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'You have 1,240 approved reviews that could be on Amazon, Target, and Walmart product pages — but syndication hasn\'t been set up. Products with syndicated reviews convert 23% better on retailer sites.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['configure-syndication', 'map-products', 'queue-reviews', 'setup-auto-sync'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1500 }
  ]
};
