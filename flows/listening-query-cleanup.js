const FLOW_LISTENING_QUERY_CLEANUP = {
  id: 'listening-query-cleanup',
  name: 'Listening Query Cleanup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '4 Listening queries need cleanup — 28% noise rate',
    description: [
      'I audited your active Listening queries and found <strong>4 queries with high noise rates</strong> (28% irrelevant mentions on average).',
      'This noise is distorting your sentiment scores and burying real brand conversations. I can clean this up:'
    ],
    completedDescription: ['Listening queries cleaned up — exclusion lists updated, queries refined, and noise rate projected to drop below 5%.'],
    footer: 'This supports your goal: Maintain accurate brand listening data with less than 5% noise rate',
    checkboxItems: [
      { action: 'add-exclusions', label: 'Add exclusion keywords reducing noise by estimated 23 points' },
      { action: 'refine-queries', label: 'Refine Boolean logic in all 4 queries to improve precision' },
      { action: 'merge-duplicates', label: 'Merge 3 overlapping queries to reduce redundancy' },
      { action: 'test-accuracy', label: 'Run accuracy test on revised queries against last 7 days of data' }
    ],
    moreIdeasPool: [
      { action: 'add-competitors', label: 'Add competitor keyword monitoring to 2 existing queries' },
      { action: 'spike-thresholds', label: 'Calibrate spike alert thresholds based on cleaned data' },
      { action: 'documentation', label: 'Generate query documentation for team knowledge base' }
    ]
  },
  decisionItems: [
    { key: 'cleaned', label: '4 queries cleaned with updated exclusion lists', href: 'settings-listening.html' },
    { key: 'merged', label: '3 duplicate queries merged', href: 'settings-listening.html' },
    { key: 'tested', label: 'Accuracy test run — projected noise rate: 4.8%', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> updated exclusion lists for 4 Listening queries', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> merged 3 overlapping queries', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> audited queries and found 28% average noise rate', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Listening audit complete</strong> — 4 queries cleaned, noise projected to drop to 4.8%.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '3 duplicate queries merged. Historical data preserved.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I audited your Listening queries and found a 28% noise rate — that means more than 1 in 4 mentions is irrelevant, which is distorting your sentiment scores. I can clean this up now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['add-exclusions', 'refine-queries', 'merge-duplicates', 'test-accuracy'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1500 }
  ]
};
