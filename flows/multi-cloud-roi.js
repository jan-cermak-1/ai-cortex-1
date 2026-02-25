const FLOW_MULTI_CLOUD_ROI = {
  id: 'multi-cloud-roi',
  name: 'Multi-Cloud ROI Report',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Board-ready CX ROI: $340K earned, 23% care savings, +$1.2M commerce',
    description: [
      'Board meeting next week needs a comprehensive CX ROI report. Cortex aggregated data across all three clouds: social engagement ($340K earned media), care efficiency (23% cost reduction), commerce lift (+$1.2M attributed revenue).',
      'Report generated with executive summary, charts, and CFO-ready metrics. Ready for export.'
    ],
    completedDescription: ['Multi-cloud ROI report generated — $340K earned media, 23% care savings, +$1.2M commerce. Board-ready.'],
    footer: 'This supports your goal: Demonstrate platform ROI to leadership',
    checkboxItems: [
      { action: 'aggregate-social', label: 'Aggregate social: $340K earned media value' },
      { action: 'aggregate-care', label: 'Aggregate care: 23% cost reduction' },
      { action: 'aggregate-commerce', label: 'Aggregate commerce: +$1.2M attributed revenue' }
    ],
    moreIdeasPool: [
      { action: 'export-pdf', label: 'Export board-ready PDF' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'ROI report generated', href: 'unified-analytics.html' },
    { key: 'export', label: 'Ready for export', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> aggregated three-cloud ROI data', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated board-ready report', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Board ROI report:</strong> $340K earned, 23% care savings, +$1.2M commerce. Ready for export.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I aggregated CX ROI across all three clouds for your board meeting: $340K earned media from social, 23% care cost reduction, +$1.2M attributed commerce revenue. Report generated with executive summary, charts, and CFO-ready metrics. Ready for export.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['aggregate-social', 'aggregate-care', 'aggregate-commerce'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
