const FLOW_SOCIAL_ROI_REPORT = {
  id: 'social-roi-report',
  name: 'Social ROI Attribution Report',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Social ROI report requested — attribution model ready',
    description: [
      'Leadership is asking for social media ROI. I can generate a comprehensive attribution report connecting social activity to business outcomes using multi-touch attribution across <strong>4 revenue-linked data sources</strong>.',
      'Bottom line from last quarter: Social-influenced revenue = $2.4M (14% of total). Cost of social = $180K. ROI = 13.3x.'
    ],
    completedDescription: ['Social ROI attribution report generated — multi-touch model applied, executive summary ready.'],
    footer: 'This supports your goal: Quantify and communicate social media ROI to secure continued investment',
    checkboxItems: [
      { action: 'run-attribution', label: 'Run multi-touch attribution model across 4 data sources' },
      { action: 'generate-report', label: 'Generate executive ROI report with methodology and findings' },
      { action: 'channel-breakdown', label: 'Break down ROI by channel: organic, paid, influencer, community' },
      { action: 'share-leadership', label: 'Share report with CMO and Finance with interactive dashboard link' }
    ],
    moreIdeasPool: [
      { action: 'yoy-comparison', label: 'Include YoY ROI comparison to show investment growth story' },
      { action: 'cost-per-outcome', label: 'Calculate cost-per-outcome for each channel (leads, conversions, retention)' },
      { action: 'forecast-roi', label: 'Model ROI forecast for next 2 quarters at current investment levels' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Social ROI attribution report generated', href: 'unified-analytics.html' },
    { key: 'dashboard', label: 'Interactive ROI dashboard created', href: 'unified-analytics.html' },
    { key: 'shared', label: 'Report shared with CMO and Finance', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> ran multi-touch attribution model across 4 revenue data sources', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated executive ROI report with channel breakdown', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> shared report with CMO and Finance team', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>ROI report ready</strong> — Social-influenced revenue: $2.4M (13.3x ROI). Shared with leadership.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Channel with highest ROI: Influencer (18.2x). Lowest: Organic Twitter (4.1x).', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Leadership wants social ROI numbers. I can generate a full multi-touch attribution report connecting social to revenue. Last quarter\'s bottom line: $2.4M social-influenced revenue on $180K spend — that\'s 13.3x ROI.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['run-attribution', 'generate-report', 'channel-breakdown', 'share-leadership'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
