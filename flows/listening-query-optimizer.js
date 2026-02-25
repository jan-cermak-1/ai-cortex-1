const FLOW_LISTENING_QUERY_OPTIMIZER = {
  id: 'listening-query-optimizer',
  name: 'Listening Query Optimizer',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '6 of 23 queries returning noisy data — 60% noise reduction proposed',
    description: [
      'Cortex reviewed your <strong>23 active listening queries</strong> and found 6 returning noisy irrelevant data.',
      'Proposed optimized boolean queries reduce noise by an estimated 60% while maintaining signal coverage. Affected queries: #brand-mentions (42% irrelevant), #product-feedback (38% spam), #competitor-watch (31% off-topic), #support-issues (29% duplicate), #influencer-mentions (35% bot traffic), #industry-trends (27% low-quality).'
    ],
    completedDescription: ['Optimization applied — 6 queries updated, noise reduced 58%, signal coverage maintained at 94%.'],
    footer: 'This supports your goal: Maximize listening signal quality and reduce analyst time on noise filtering',
    checkboxItems: [
      { action: 'apply-optimizations', label: 'Apply optimized boolean queries to 6 affected queries' },
      { action: 'create-baseline', label: 'Create baseline metrics before/after for validation' },
      { action: 'schedule-audit', label: 'Schedule monthly query quality audit' }
    ],
    moreIdeasPool: [
      { action: 'merge-queries', label: 'Merge 2 overlapping queries to reduce redundancy' },
      { action: 'add-exclusions', label: 'Add exclusion rules for known spam sources' }
    ]
  },
  decisionItems: [
    { key: 'optimized', label: '6 queries optimized', href: 'listening.html' },
    { key: 'baseline', label: 'Before/after metrics documented', href: 'unified-analytics.html' },
    { key: 'audit', label: 'Monthly audit scheduled', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> applied optimized queries to 6 listening queries', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created before/after baseline metrics', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 6 noisy queries — 60% reduction proposed', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Query optimizer:</strong> 6 of 23 queries noisy. 60% noise reduction proposed.', time: '4 min ago', unread: true },
    { icon: 'activity', text: 'Worst: #brand-mentions 42% irrelevant, #product-feedback 38% spam.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I reviewed your 23 listening queries and found 6 with high noise. #brand-mentions has 42% irrelevant, #product-feedback 38% spam, #competitor-watch 31% off-topic. I\'ve proposed optimized boolean queries that reduce noise by 60% while keeping 94% signal coverage.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-optimizations', 'create-baseline', 'schedule-audit'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
