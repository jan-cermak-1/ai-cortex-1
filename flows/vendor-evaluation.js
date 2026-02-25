const FLOW_VENDOR_EVALUATION = {
  id: 'vendor-evaluation',
  name: 'Social Tech Vendor Evaluation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Annual tech stack review — 3 contract renewals due in 60 days',
    description: [
      'Three social media tool contracts renew in 60 days. I analyzed <strong>usage data, feature overlap, and cost efficiency</strong> across your current tech stack to identify consolidation and renegotiation opportunities.',
      'Finding: 40% feature overlap between two listening tools you\'re paying $84K/year for. Consolidating to Emplifi could save $52K annually while improving coverage.'
    ],
    completedDescription: ['Tech stack review complete — vendor scorecards, consolidation recommendation, and renewal strategy ready.'],
    footer: 'This supports your goal: Rationalize the social tech stack before renewals to reduce costs without losing capability',
    checkboxItems: [
      { action: 'vendor-scorecards', label: 'Generate vendor scorecards for all 3 tools up for renewal' },
      { action: 'usage-analysis', label: 'Analyze feature utilization rates and identify unused capabilities' },
      { action: 'consolidation-plan', label: 'Model consolidation scenarios with cost savings and migration effort' },
      { action: 'renewal-strategy', label: 'Prepare renewal negotiation strategy for each vendor' }
    ],
    moreIdeasPool: [
      { action: 'benchmark-pricing', label: 'Benchmark current contract pricing against industry norms' },
      { action: 'migration-timeline', label: 'Build migration timeline if consolidation is approved' },
      { action: 'cfo-brief', label: 'Prepare CFO briefing on tech stack consolidation ROI case' }
    ]
  },
  decisionItems: [
    { key: 'scorecards', label: 'Vendor scorecards for 3 renewal contracts', href: 'unified-analytics.html' },
    { key: 'consolidation', label: 'Consolidation scenario: $52K savings identified', href: 'unified-analytics.html' },
    { key: 'strategy', label: 'Renewal negotiation strategy for each vendor', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated vendor scorecards from usage and feature analysis', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified $52K annual savings via listening tool consolidation', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> prepared renewal negotiation strategy for 3 vendors', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Tech stack review ready</strong> — $52K consolidation opportunity. 3 renewals due in 60 days.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Feature utilization: Your second listening tool has 31% usage rate. Consolidation recommended.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Three vendor contracts renew in 60 days. I found a $52K annual savings opportunity: you\'re paying $84K for two listening tools with 40% feature overlap. Consolidating and renegotiating now would save the budget without losing capability.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['vendor-scorecards', 'usage-analysis', 'consolidation-plan', 'renewal-strategy'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
