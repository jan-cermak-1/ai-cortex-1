const FLOW_AGENCY_CLIENT_REPORTING = {
  id: 'agency-client-reporting',
  name: 'Agency Client Reporting',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 client reports due Friday — all ready',
    description: [
      '<strong>12 client reports</strong> due Friday. Cortex pulls data for all 12 accounts.',
      'Generates branded PDF reports with custom KPIs per client and drafts personalized insights email for each account manager.'
    ],
    completedDescription: ['12 client reports generated — branded PDFs and personalized insight emails ready.'],
    footer: 'This supports your goal: Deliver client reports on time with minimal manual work',
    checkboxItems: [
      { action: 'pull-data', label: 'Pull data for all 12 client accounts' },
      { action: 'generate-pdfs', label: 'Generate branded PDF reports with custom KPIs' },
      { action: 'draft-emails', label: 'Draft personalized insights email per account manager' }
    ],
    moreIdeasPool: [
      { action: 'report-templates', label: 'Save client-specific report templates' },
      { action: 'scheduled-reports', label: 'Set up monthly auto-generation' }
    ]
  },
  decisionItems: [
    { key: 'reports', label: '12 branded PDF reports generated', href: 'unified-analytics.html' },
    { key: 'emails', label: 'Personalized insight emails drafted', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> pulled data for all 12 client accounts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated branded PDFs with custom KPIs', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Client Reports</strong> — 12 reports ready. PDFs + insight emails drafted.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '12 client reports due Friday. I pulled data for all 12 accounts, generated branded PDF reports with custom KPIs per client, and drafted personalized insights emails for each account manager.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['pull-data', 'generate-pdfs', 'draft-emails'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
