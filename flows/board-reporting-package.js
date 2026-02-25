const FLOW_BOARD_REPORTING_PACKAGE = {
  id: 'board-reporting-package',
  name: 'Board Reporting Package',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Board meeting in 48h — social & CX report data ready',
    description: [
      'Your board meeting is in 48 hours. I\'ve compiled <strong>social media ROI, brand health, and CX performance data</strong> into an executive-ready reporting package.',
      'Key highlights: +28% YoY brand reach, NPS improved from 34 to 41, social-attributed revenue up $2.1M. One area of concern: response time SLA missed in 3 markets.'
    ],
    completedDescription: ['Board reporting package complete — executive summary, data appendix, and action plan prepared for the meeting.'],
    footer: 'This supports your goal: Present a compelling, data-backed social and CX performance story to the board',
    checkboxItems: [
      { action: 'compile-report', label: 'Compile full board report with social ROI, brand health, and CX metrics' },
      { action: 'exec-summary', label: 'Generate executive summary: 3 wins, 1 challenge, 2 priorities for H2' },
      { action: 'prepare-appendix', label: 'Prepare data appendix with charts for all key metrics' },
      { action: 'schedule-rehearsal', label: 'Add board prep rehearsal to calendar 24h before meeting' }
    ],
    moreIdeasPool: [
      { action: 'competitor-slide', label: 'Add competitive benchmarking slide to board report' },
      { action: 'investment-case', label: 'Include investment case for Q3 headcount or technology request' },
      { action: 'risk-register', label: 'Add emerging risk section: regulatory, platform, reputational' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Full board report compiled and ready', href: 'unified-analytics.html' },
    { key: 'summary', label: 'Executive summary: 3 wins, 1 challenge, 2 H2 priorities', href: 'unified-analytics.html' },
    { key: 'rehearsal', label: 'Board prep rehearsal added to calendar', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> compiled board report from 6 months of performance data', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated executive summary highlighting 3 wins and 2 H2 priorities', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> scheduled board prep rehearsal 24h before meeting', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Board reporting package ready</strong> — report, exec summary, and appendix compiled.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Key headline: Social-attributed revenue up $2.1M YoY. NPS improved from 34 → 41.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Board meeting is in 48 hours. I\'ve compiled your social ROI, brand health, and CX data into a board-ready package. Headline story: +28% brand reach YoY, NPS up to 41, $2.1M social-attributed revenue. One SLA concern in 3 markets to address.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['compile-report', 'exec-summary', 'prepare-appendix', 'schedule-rehearsal'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
