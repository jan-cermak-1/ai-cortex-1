const FLOW_SOCIAL_ROI_ATTRIBUTION = {
  id: 'social-roi-attribution',
  name: 'Social ROI Attribution',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '847 conversions, $234K revenue attributed to social',
    description: [
      'Cortex built a social ROI attribution model connecting social engagement to <strong>847 website conversions</strong> and <strong>$234K revenue</strong> last quarter.',
      'Breaks down contribution by channel, content type, and campaign.'
    ],
    completedDescription: ['ROI attribution model built: 847 conversions, $234K revenue by channel.'],
    footer: 'This supports your goal: Prove social ROI to leadership',
    checkboxItems: [
      { action: 'build-model', label: 'Build attribution model (847 conversions, $234K)' },
      { action: 'channel-breakdown', label: 'Break down by channel (IG, FB, LinkedIn, X)' },
      { action: 'content-breakdown', label: 'Break down by content type' },
      { action: 'campaign-breakdown', label: 'Break down by campaign' }
    ],
    moreIdeasPool: [
      { action: 'export-report', label: 'Export ROI report for executive' },
      { action: 'forecast-next-quarter', label: 'Forecast next quarter attribution' }
    ]
  },
  decisionItems: [
    { key: 'model-ready', label: 'Attribution model in Unified Analytics', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> built social ROI attribution model', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> attributed 847 conversions and $234K to social', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Social ROI</strong> — 847 conversions, $234K revenue attributed to social', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I built a social ROI attribution model connecting social engagement to 847 website conversions and $234K revenue last quarter. I can break it down by channel, content type, and campaign.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['build-model', 'channel-breakdown', 'content-breakdown', 'campaign-breakdown'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
