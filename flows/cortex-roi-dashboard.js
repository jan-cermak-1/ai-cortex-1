const FLOW_CORTEX_ROI_DASHBOARD = {
  id: 'cortex-roi-dashboard',
  name: 'Cortex ROI Dashboard',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Cortex ROI: 3.2x productivity, 28% care savings, $2.1M annualized',
    description: [
      'Cortex calculates its own ROI: 3.2x productivity gain across publishing, 28% care cost reduction, 14% UGC rights acquisition improvement, and estimated $2.1M annualized value.',
      'Generates CFO-ready business case for AI investment renewal. Dashboard updated daily.'
    ],
    completedDescription: ['Cortex ROI dashboard — 3.2x publishing, 28% care savings, 14% UGC improvement. $2.1M annualized. CFO-ready.'],
    footer: 'This supports your goal: Justify and renew AI investment with hard numbers',
    checkboxItems: [
      { action: 'build-dashboard', label: 'Build Cortex ROI dashboard' },
      { action: 'calculate-metrics', label: 'Calculate productivity, care, UGC metrics' },
      { action: 'generate-brief', label: 'Generate CFO-ready business case' }
    ],
    moreIdeasPool: [
      { action: 'export-brief', label: 'Export business case for renewal' }
    ]
  },
  decisionItems: [
    { key: 'dashboard', label: 'ROI dashboard built', href: 'unified-analytics.html' },
    { key: 'brief', label: 'CFO-ready brief generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> calculated 3.2x publishing productivity', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated $2.1M annualized value estimate', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Cortex ROI:</strong> 3.2x productivity, 28% care savings, 14% UGC. $2.1M annualized. CFO-ready.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I calculated my own ROI: 3.2x productivity gain across publishing, 28% care cost reduction, 14% UGC rights acquisition improvement — $2.1M annualized value. I generated a CFO-ready business case for AI investment renewal. Dashboard updates daily.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['build-dashboard', 'calculate-metrics', 'generate-brief'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
