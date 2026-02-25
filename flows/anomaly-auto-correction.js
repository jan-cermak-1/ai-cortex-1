const FLOW_ANOMALY_AUTO_CORRECTION = {
  id: 'anomaly-auto-correction',
  name: 'Anomaly Auto-Correction',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Multiple metric anomalies detected — auto-correction recommended',
    description: [
      'I\'m tracking your key metrics in real time and detected <strong>3 simultaneous anomalies</strong> this morning: (1) CPC up 62% vs 7-day average, (2) engagement rate down 38% vs baseline, (3) Care response time up 45% — all outside normal variance.',
      'These are likely connected — a technical or content issue affecting multiple channels simultaneously.'
    ],
    completedDescription: ['Anomaly auto-correction applied — root cause identified (API rate limiting), ad pause triggered, Care team alerted.'],
    footer: 'This supports your goal: Detect and respond to performance anomalies within 15 minutes with automated correction where safe',
    checkboxItems: [
      { action: 'root-cause-analysis', label: 'Run root cause analysis across all connected data sources' },
      { action: 'pause-affected', label: 'Pause affected campaigns to prevent budget waste during anomaly' },
      { action: 'alert-teams', label: 'Alert Content, Paid, and Care teams with anomaly summary' },
      { action: 'create-incident', label: 'Create incident record with timestamp and corrective actions taken' }
    ],
    moreIdeasPool: [
      { action: 'rollback-option', label: 'Prepare rollback options if anomaly is traced to recent change' },
      { action: 'vendor-check', label: 'Check platform status pages for any reported API or ad serving issues' },
      { action: 'post-mortem', label: 'Schedule post-mortem review for 48 hours after resolution' }
    ]
  },
  decisionItems: [
    { key: 'analysis', label: 'Root cause analysis complete — API rate limit identified', href: 'unified-analytics.html' },
    { key: 'paused', label: 'Affected campaigns paused pending investigation', href: 'unified-analytics.html' },
    { key: 'incident', label: 'Incident record created with corrective actions', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> ran root cause analysis — API rate limiting identified', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> paused 4 affected campaigns pending investigation', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected 3 simultaneous anomalies: CPC +62%, engagement -38%, care +45%', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Anomaly detected:</strong> 3 metrics outside normal range — root cause: API rate limiting.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Campaigns paused. Engineering notified. Estimated resolution: 2-3 hours.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'m detecting 3 simultaneous anomalies this morning: CPC is up 62%, engagement rate down 38%, and Care response times up 45% — all outside normal variance. These are likely connected. Running root cause analysis now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['root-cause-analysis', 'pause-affected', 'alert-teams', 'create-incident'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
