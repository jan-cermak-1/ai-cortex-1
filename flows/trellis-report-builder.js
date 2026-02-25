const FLOW_TRELLIS_REPORT_BUILDER = {
  id: 'trellis-report-builder',
  name: 'AI Report Builder',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'C-suite social ROI report for Monday',
    description: [
      'Cortex gathered data from Care, Publishing, and Listening.',
      'Structured into <strong>6-slide executive narrative</strong> with key metrics, YoY trends, and recommended actions.'
    ],
    completedDescription: ['Executive report generated: 6 slides with metrics, YoY trends, and recommended actions.'],
    footer: 'This supports your goal: Demonstrate social ROI to leadership',
    checkboxItems: [
      { action: 'generate-slides', label: 'Generate 6-slide executive deck' },
      { action: 'add-metrics', label: 'Include key metrics from Care, Publishing, Listening' },
      { action: 'add-recommendations', label: 'Add recommended actions for next quarter' }
    ],
    moreIdeasPool: [
      { action: 'custom-slides', label: 'Customize slide content' },
      { action: 'schedule-report', label: 'Schedule weekly report generation' }
    ]
  },
  decisionItems: [
    { key: 'report-ready', label: '6-slide report ready for Monday', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated 6-slide executive report', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> pulled data from Care, Publishing, Listening', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Report Ready</strong> — C-suite social ROI report for Monday', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I gathered data from Care, Publishing, and Listening and built a 6-slide executive narrative with key metrics, YoY trends, and recommended actions — ready for your Monday C-suite meeting.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-slides', 'add-metrics', 'add-recommendations'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
