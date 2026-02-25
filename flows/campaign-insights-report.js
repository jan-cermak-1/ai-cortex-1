const FLOW_CAMPAIGN_INSIGHTS_REPORT = {
  id: 'campaign-insights-report',
  name: 'Campaign Insights Report',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q1 campaign analysis ready — 3 key insights found',
    description: [
      'I analyzed all 4 Q1 campaigns across 6 platforms and synthesized the data into actionable insights.',
      '<strong>Key findings:</strong> Video content outperformed images by 3.2x. Wednesday 7pm was your single highest-performing post time. LinkedIn drove 62% of B2B conversions despite only 18% of your publishing budget.'
    ],
    completedDescription: ['Q1 campaign report generated — executive summary ready, recommendations applied to Q2 content strategy.'],
    footer: 'This supports your goal: Continuously improve content ROI based on data-driven insights from each campaign cycle',
    checkboxItems: [
      { action: 'generate-report', label: 'Generate full Q1 campaign report with executive summary' },
      { action: 'apply-q2-learnings', label: 'Apply top 5 Q1 learnings to Q2 content strategy settings' },
      { action: 'update-analytics', label: 'Update Unified Analytics benchmark targets based on Q1 data' },
      { action: 'schedule-review', label: 'Schedule Q1 review meeting with content and leadership teams' }
    ],
    moreIdeasPool: [
      { action: 'competitor-compare', label: 'Add competitor performance benchmarks to the Q1 report' },
      { action: 'channel-recommendations', label: 'Generate channel budget reallocation recommendation for Q2' },
      { action: 'share-report', label: 'Export report as PDF and share with stakeholders' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Q1 campaign report generated', href: 'unified-analytics.html' },
    { key: 'strategy', label: 'Q2 strategy updated with Q1 learnings', href: 'publisher-calendar.html' },
    { key: 'benchmarks', label: 'Analytics benchmarks updated for Q2', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated Q1 campaign analysis report', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> applied Q1 learnings to Q2 strategy settings', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 4 campaigns across 6 platforms (Q1 data)', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Q1 report ready</strong> — executive summary and Q2 recommendations generated.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Top insight: LinkedIn drove 62% of B2B conversions on 18% of budget.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'ve analyzed all 4 Q1 campaigns. Top finding: LinkedIn drove 62% of B2B conversions on just 18% of your publishing budget — and video outperformed images 3.2x across all platforms.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-report', 'apply-q2-learnings', 'update-analytics'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
