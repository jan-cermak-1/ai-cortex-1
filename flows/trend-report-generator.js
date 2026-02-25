const FLOW_TREND_REPORT_GENERATOR = {
  id: 'trend-report-generator',
  name: 'Trend Report Generator',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Weekly trend intelligence report ready',
    description: [
      'Cortex auto-generated your <strong>weekly trend intelligence report</strong> — covering your brand, industry, and top 3 competitors.',
      'AI translated raw listening data into 5 actionable insights: rising demand for sustainability (+23% mentions), competitor product launch buzz, emerging TikTok hashtag opportunity, sentiment recovery in EU market, and influencer controversy risk.'
    ],
    completedDescription: ['Report generated — 5 insights documented, PDF exported, and Listening board updated with trend queries.'],
    footer: 'This supports your goal: Stay ahead of industry trends and translate data into weekly action',
    checkboxItems: [
      { action: 'export-pdf', label: 'Export report as PDF for leadership' },
      { action: 'update-listening', label: 'Add 3 new trend queries to Listening based on insights' },
      { action: 'share-slack', label: 'Share top 3 insights to #marketing-insights channel' }
    ],
    moreIdeasPool: [
      { action: 'sustainability-brief', label: 'Create sustainability content brief from +23% demand insight' },
      { action: 'competitor-deep-dive', label: 'Deep-dive on competitor product launch buzz' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Weekly trend report generated', href: 'unified-analytics.html' },
    { key: 'listening', label: '3 trend queries added to Listening', href: 'listening.html' },
    { key: 'insights', label: '5 actionable insights documented', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated weekly trend intelligence report', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> translated listening data into 5 actionable insights', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> added 3 trend queries to Listening', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Trend report ready:</strong> 5 insights from brand, industry, and 3 competitors.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Top insight: Sustainability mentions +23%. TikTok hashtag opportunity detected.', time: '1 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your weekly trend intelligence report is ready. I translated raw listening data into 5 actionable insights: sustainability demand up 23%, competitor product launch buzz, emerging TikTok hashtag opportunity, EU sentiment recovery, and influencer controversy risk.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['export-pdf', 'update-listening', 'share-slack'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
