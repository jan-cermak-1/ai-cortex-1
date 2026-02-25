const FLOW_BARCLAYS_FINANCIAL_SOCIAL = {
  id: 'barclays-financial-social',
  name: 'Financial Services Social Compliance',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 violation types detected — pre-publish block',
    description: [
      'Detect and prevent <strong>12 types</strong> of regulated content violations common in financial services social media.',
      'Cortex flags "guaranteed returns" language, unlicensed advice, and non-standard disclaimers <strong>before publishing</strong>.'
    ],
    completedDescription: ['Financial compliance shield active — 12 violation types blocked pre-publish.'],
    footer: 'This supports your goal: Zero regulatory violations in social content',
    checkboxItems: [
      { action: 'violation-scan', label: 'Scan all content for 12 violation types' },
      { action: 'block-guarantees', label: 'Block "guaranteed returns" and similar language' },
      { action: 'disclaimer-check', label: 'Enforce standard disclaimer requirements' }
    ],
    moreIdeasPool: [
      { action: 'advice-detection', label: 'Detect unlicensed financial advice' },
      { action: 'compliance-report', label: 'Weekly compliance report for risk team' }
    ]
  },
  decisionItems: [
    { key: 'blocked', label: 'Violations blocked pre-publish', href: 'publisher-calendar.html' },
    { key: 'report', label: 'Compliance report generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured 12 violation type detectors', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> blocked 7 posts with non-compliant language this week', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Financial Compliance</strong> — 12 violation types. 7 posts blocked this week.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I detect 12 types of regulated content violations — "guaranteed returns," unlicensed advice, non-standard disclaimers. All flagged <strong>before publishing</strong>. 7 posts blocked this week.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['violation-scan', 'block-guarantees', 'disclaimer-check'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
