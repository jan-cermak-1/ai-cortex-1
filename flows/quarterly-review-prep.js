const FLOW_QUARTERLY_REVIEW_PREP = {
  id: 'quarterly-review-prep',
  name: 'Quarterly Review Prep',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q2 business review is in 5 days — data ready to compile',
    description: [
      'Your quarterly business review is in 5 days. I\'ve identified all the data sources needed and can compile the <strong>complete Q2 social media performance package</strong> automatically.',
      'Last quarter this compilation took your team 3 days. I can do it in 10 minutes.'
    ],
    completedDescription: ['Q2 performance package ready — executive deck, detailed report, and competitive benchmark all compiled.'],
    footer: 'This supports your goal: Present data-driven QBR that connects social media performance to business outcomes',
    checkboxItems: [
      { action: 'compile-kpis', label: 'Compile Q2 KPIs across all channels: reach, engagement, SOV, sentiment' },
      { action: 'vs-targets', label: 'Compare Q2 actuals vs targets with variance explanation' },
      { action: 'competitive-benchmarks', label: 'Pull competitive benchmarks for all key metrics' },
      { action: 'exec-deck', label: 'Generate executive slide deck with Q2 narrative and Q3 priorities' }
    ],
    moreIdeasPool: [
      { action: 'yoy-comparison', label: 'Add year-over-year comparison for all headline metrics' },
      { action: 'roi-calculation', label: 'Calculate social media attribution ROI for Q2' },
      { action: 'q3-forecast', label: 'Generate Q3 performance forecast based on Q2 trends' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Q2 performance report compiled (all KPIs)', href: 'unified-analytics.html' },
    { key: 'deck', label: 'Executive slide deck generated', href: 'unified-analytics.html' },
    { key: 'benchmarks', label: 'Competitive benchmarks included', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> compiled Q2 KPIs across all channels', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated executive slide deck with Q2 narrative', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> pulled competitive benchmarks for all key metrics', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>QBR package ready</strong> — Q2 report, exec deck, and benchmarks compiled.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Q2 review is in 5 days. All materials ready for final review.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your Q2 business review is in 5 days. Last quarter this data compilation took your team 3 days. I can compile the complete performance package — KPIs, competitive benchmarks, and executive deck — in 10 minutes.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['compile-kpis', 'vs-targets', 'competitive-benchmarks', 'exec-deck'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
