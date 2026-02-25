const FLOW_INFLUENCER_ROI_TRACKER = {
  id: 'influencer-roi-tracker',
  name: 'Influencer ROI Tracker',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q1 ROI analysis — 3 over-performers, 5 underperformers',
    description: [
      'Q1 campaign wrapped. Calculated ROI per influencer: <strong>3 over-performed</strong> (CPE $0.12 vs $0.45 benchmark).',
      '<strong>5 underperformed</strong>. Recommend renewing top 3 and replacing bottom 2 for Q2.'
    ],
    completedDescription: ['Q1 influencer ROI analyzed — top 3 recommended for renewal, bottom 2 for replacement. CPE benchmarks applied.'],
    footer: 'This supports your goal: Optimize Q2 influencer roster based on proven ROI',
    checkboxItems: [
      { action: 'renew-top3', label: 'Flag top 3 over-performers for Q2 renewal' },
      { action: 'replace-bottom2', label: 'Remove bottom 2 from Q2 roster' },
      { action: 'roi-dashboard', label: 'Create influencer ROI dashboard in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'benchmark-report', label: 'Generate CPE benchmark report for stakeholders' },
      { action: 'replacement-search', label: 'Find replacement creators for bottom 2' }
    ]
  },
  decisionItems: [
    { key: 'renewals', label: 'Top 3 flagged for Q2 renewal', href: 'content-collection.html' },
    { key: 'dashboard', label: 'Influencer ROI dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> calculated ROI for all Q1 influencers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 3 over-performers (CPE $0.12 vs $0.45)', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Q1 ROI</strong> — 3 over-performers, 5 under. Renew top 3, replace bottom 2.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Q1 campaign wrapped. ROI by influencer: <strong>3 over-performed</strong> — CPE $0.12 vs $0.45 benchmark. <strong>5 underperformed</strong>. I recommend renewing top 3 and replacing bottom 2 for Q2.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['renew-top3', 'replace-bottom2', 'roi-dashboard'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
