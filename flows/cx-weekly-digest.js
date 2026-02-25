const FLOW_CX_WEEKLY_DIGEST = {
  id: 'cx-weekly-digest',
  name: 'CX Weekly Digest',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'CX weekly digest ready — 5 key signals this week',
    description: [
      'I synthesized this week\'s customer experience data across all touchpoints and identified <strong>5 signals worth your attention</strong>.',
      '<strong>This week\'s headline:</strong> CSAT improved +0.3 points. Community response time hit 1.8h average (personal record). One emerging complaint theme needs monitoring: shipping delay mentions up 34%.'
    ],
    completedDescription: ['CX weekly digest published — insights shared with leadership, actions triggered, and recurring schedule set up.'],
    footer: 'This supports your goal: Maintain full visibility into CX health across all channels with weekly leadership reporting',
    checkboxItems: [
      { action: 'generate-digest', label: 'Generate full CX weekly digest with data from all modules' },
      { action: 'share-leadership', label: 'Share digest with CX leadership and relevant stakeholders' },
      { action: 'action-shipping', label: 'Create monitoring query for shipping delay mentions (emerging theme)' },
      { action: 'schedule-recurring', label: 'Set up weekly recurring CX digest every Friday 3pm' }
    ],
    moreIdeasPool: [
      { action: 'trend-analysis', label: 'Add 4-week trend analysis to contextualize this week\'s metrics' },
      { action: 'competitive-cx', label: 'Add competitive CX benchmark data for context' },
      { action: 'action-items', label: 'Auto-generate prioritized action items based on digest insights' }
    ]
  },
  decisionItems: [
    { key: 'digest', label: 'CX weekly digest generated and published', href: 'unified-analytics.html' },
    { key: 'monitoring', label: 'Shipping delay monitoring query created', href: 'settings-listening.html' },
    { key: 'recurring', label: 'Weekly digest scheduled every Friday 3pm', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated CX weekly digest with 5 key signals', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> shared digest with CX leadership and stakeholders', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created monitoring query for shipping delay mentions', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>CX digest ready</strong> — CSAT +0.3, response record set, 1 emerging theme flagged.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Next weekly digest: Friday 3pm. Recurring schedule confirmed.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'CX weekly digest is ready. Good news: CSAT improved and community response time hit a personal record. But shipping delay mentions are up 34% — worth monitoring. I\'ll share the full digest with leadership and set up recurring delivery.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-digest', 'share-leadership', 'action-shipping', 'schedule-recurring'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
