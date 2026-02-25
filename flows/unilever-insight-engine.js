const FLOW_UNILEVER_INSIGHT_ENGINE = {
  id: 'unilever-insight-engine',
  name: 'Multi-Brand Insight Engine',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '22 brands, 67 markets — cross-brand intelligence',
    description: [
      'Monitor <strong>22 Unilever brands</strong> across <strong>67 markets</strong> in real time.',
      'Cortex surfaces cross-brand trends, detects early reputation risks, and identifies cross-sell opportunities by correlating data from multiple brand listening streams.'
    ],
    completedDescription: ['Multi-brand insight engine active — cross-brand trends, reputation risks, and cross-sell opportunities surfaced.'],
    footer: 'This supports your goal: Unified intelligence across portfolio for strategic decisions',
    checkboxItems: [
      { action: 'cross-brand-trends', label: 'Surface cross-brand trends from 67 markets' },
      { action: 'reputation-alerts', label: 'Configure early reputation risk alerts' },
      { action: 'cross-sell-ops', label: 'Identify cross-sell opportunities from listening data' }
    ],
    moreIdeasPool: [
      { action: 'brand-benchmark', label: 'Benchmark brand performance across portfolio' },
      { action: 'market-correlation', label: 'Correlate market-level insights' }
    ]
  },
  decisionItems: [
    { key: 'trends', label: 'Cross-brand trends surfaced', href: 'listening.html' },
    { key: 'alerts', label: 'Reputation risk alerts configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> correlated data from 22 brands across 67 markets', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> surfaced 3 cross-brand trends and 2 reputation risks', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Insight Engine</strong> — 22 brands, 67 markets. Cross-brand trends and risks.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '22 Unilever brands across 67 markets. I surface cross-brand trends, detect early reputation risks, and identify cross-sell opportunities by correlating data from multiple brand listening streams.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['cross-brand-trends', 'reputation-alerts', 'cross-sell-ops'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
