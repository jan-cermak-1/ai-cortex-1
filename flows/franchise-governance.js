const FLOW_FRANCHISE_GOVERNANCE = {
  id: 'franchise-governance',
  name: 'Franchise Social Governance',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '8 franchise locations posting off-brand content',
    description: [
      'I monitored social activity across your 47 franchise locations and found <strong>8 franchisees posting content</strong> that significantly deviates from brand guidelines — 3 of them are using unauthorized promotions.',
      'Consistent brand presence across all locations directly impacts customer trust and same-store revenue.'
    ],
    completedDescription: ['Franchise governance actions taken — 8 locations notified, 3 unauthorized promotions removed, and monitoring system deployed.'],
    footer: 'This supports your goal: Maintain brand consistency across all 47 franchise locations with continuous monitoring',
    checkboxItems: [
      { action: 'flag-locations', label: 'Flag 8 non-compliant franchise locations with specific violation summary' },
      { action: 'notify-franchisees', label: 'Send personalized compliance notification to each franchise owner' },
      { action: 'remove-unauthorized', label: 'Coordinate removal of 3 unauthorized promotional posts' },
      { action: 'setup-monitoring', label: 'Enable continuous brand compliance monitoring across all 47 locations' }
    ],
    moreIdeasPool: [
      { action: 'content-library', label: 'Create approved content library for franchisees to use' },
      { action: 'brand-guidelines', label: 'Send updated brand guidelines with examples to all franchise owners' },
      { action: 'regional-check', label: 'Identify which regional markets have highest non-compliance rates' }
    ]
  },
  decisionItems: [
    { key: 'notified', label: '8 franchise locations notified with violation details', href: 'settings-users.html' },
    { key: 'removed', label: '3 unauthorized promotions removal coordinated', href: 'community-inbox.html' },
    { key: 'monitoring', label: 'Brand compliance monitoring active for all 47 locations', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> flagged 8 non-compliant franchise locations', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent compliance notifications to 8 franchise owners', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> enabled brand compliance monitoring for all 47 locations', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Brand compliance alert:</strong> 8 franchise locations with guideline deviations.', time: '2 min ago', unread: true },
    { icon: 'activity', text: '3 unauthorized promotions flagged for removal. Franchise owners notified.', time: '1 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I monitored social activity across your 47 franchise locations and found 8 posting off-brand content — 3 using unauthorized promotions. Brand inconsistency across locations directly impacts customer trust. Here\'s my response plan.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-locations', 'notify-franchisees', 'remove-unauthorized', 'setup-monitoring'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
