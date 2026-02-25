const FLOW_DATA_QUALITY_AUDIT = {
  id: 'data-quality-audit',
  name: 'Data Quality Audit',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Data quality issues found — 3 sources with gaps',
    description: [
      'I audited your connected data sources and found <strong>3 sources with quality issues</strong> that are affecting your reporting accuracy.',
      'Issues: (1) Instagram data missing for Aug 12-15 (API outage not detected), (2) Listening source "Brandwatch" showing 34% more data than should be licensed, (3) 12 social profiles sending duplicate data.'
    ],
    completedDescription: ['Data quality issues resolved — gaps backfilled, duplicate profiles deduplicated, and automated quality monitoring enabled.'],
    footer: 'This supports your goal: Maintain 99%+ data accuracy across all reporting to ensure reliable business decisions',
    checkboxItems: [
      { action: 'backfill-instagram', label: 'Trigger Instagram data backfill for Aug 12-15 gap' },
      { action: 'fix-listening', label: 'Investigate and fix Brandwatch data volume anomaly' },
      { action: 'deduplicate-profiles', label: 'Deduplicate 12 social profiles sending duplicate data' },
      { action: 'setup-monitoring', label: 'Set up automated data quality monitoring with daily alerts' }
    ],
    moreIdeasPool: [
      { action: 'historical-check', label: 'Run 90-day historical data quality scan for additional gaps' },
      { action: 'docs', label: 'Generate data dictionary documenting known quality caveats' },
      { action: 'qa-schedule', label: 'Schedule weekly automated data quality audit' }
    ]
  },
  decisionItems: [
    { key: 'backfilled', label: 'Instagram data gap backfilled (Aug 12-15)', href: 'unified-analytics.html' },
    { key: 'deduplicated', label: '12 duplicate profiles cleaned up', href: 'settings-users.html' },
    { key: 'monitoring', label: 'Daily data quality monitoring with alerts enabled', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> triggered Instagram data backfill for Aug 12-15', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> deduplicated 12 social profiles sending duplicate data', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> audited all data sources — 3 quality issues identified', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Data quality audit complete</strong> — 3 issues identified and resolved.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Daily monitoring enabled. Next audit report: tomorrow 9am.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I ran a data quality audit and found 3 issues: an Instagram gap from an API outage you didn\'t know about, a Brandwatch anomaly, and 12 profiles sending duplicate data. These affect your reporting accuracy. Let me fix them.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['backfill-instagram', 'fix-listening', 'deduplicate-profiles', 'setup-monitoring'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
