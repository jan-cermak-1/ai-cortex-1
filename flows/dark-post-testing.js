const FLOW_DARK_POST_TESTING = {
  id: 'dark-post-testing',
  name: 'Dark Post A/B Testing',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'A/B test opportunity: 4 high-traffic ad sets',
    description: [
      'I analyzed your active paid campaigns and found <strong>4 ad sets</strong> with significant spend but no creative variation testing.',
      'Dark post A/B testing on creative and copy for these ad sets could reduce your CPA by an estimated 15-25% based on industry benchmarks.'
    ],
    completedDescription: ['A/B tests set up — 4 ad sets now have 2 creative variants each, with automatic winner promotion configured.'],
    footer: 'This supports your goal: Reduce cost per acquisition below $12 across all paid social campaigns',
    checkboxItems: [
      { action: 'create-variants', label: 'Create 2 dark post variants for each of the 4 ad sets' },
      { action: 'audience-split', label: 'Configure 50/50 audience split for clean test results' },
      { action: 'auto-promote', label: 'Set up auto-promotion: push budget to winner after 7 days' },
      { action: 'tracking-board', label: 'Create A/B test performance board in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'copy-variants', label: 'Also test copy variants (not just creative) for top ad set' },
      { action: 'cta-test', label: 'Test CTA button variants: "Shop Now" vs "Learn More"' },
      { action: 'audience-test', label: 'Set up parallel lookalike audience test alongside creative test' }
    ]
  },
  decisionItems: [
    { key: 'variants', label: '8 dark post variants created (4 sets × 2)', href: 'unified-analytics.html' },
    { key: 'tests', label: 'A/B tests live with auto-promotion configured', href: 'unified-analytics.html' },
    { key: 'board', label: 'A/B test performance board ready', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 8 dark post variants across 4 ad sets', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured 50/50 audience splits for clean testing', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up auto-promotion for test winners after 7 days', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>A/B tests live</strong> — 8 variants testing across 4 ad sets.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Auto-promotion configured: winner gets full budget after Day 7.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 4 ad sets with significant spend and no creative testing. Running dark post A/B tests could cut your CPA by 15-25% based on similar campaigns.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-variants', 'audience-split', 'auto-promote', 'tracking-board'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
