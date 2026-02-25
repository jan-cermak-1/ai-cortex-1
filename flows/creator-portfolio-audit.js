const FLOW_CREATOR_PORTFOLIO_AUDIT = {
  id: 'creator-portfolio-audit',
  name: 'Creator Portfolio Audit',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '87-creator roster audited — 12 offboard, 8 upgrade, 4 new',
    description: [
      'Your roster of <strong>87 active influencers</strong> hasn\'t been audited in 12 months.',
      'Cortex graded each on performance, audience health, and brand alignment. <strong>12 offboard</strong>, <strong>8 upgrade tier</strong>, <strong>4 new categories</strong> to recruit.'
    ],
    completedDescription: ['Creator portfolio audit complete — 12 offboard, 8 tier upgrades, 4 new category recruits recommended.'],
    footer: 'This supports your goal: Optimize creator roster for performance and brand fit',
    checkboxItems: [
      { action: 'offboard-12', label: 'Generate offboarding plan for 12 underperformers' },
      { action: 'upgrade-8', label: 'Flag 8 creators for tier upgrade and renegotiation' },
      { action: 'recruit-4', label: 'Create brief for 4 new category recruits' }
    ],
    moreIdeasPool: [
      { action: 'audit-report', label: 'Export full audit report for leadership' },
      { action: 'quarterly-cadence', label: 'Set up quarterly audit cadence' }
    ]
  },
  decisionItems: [
    { key: 'offboard', label: '12 offboarding plans generated', href: 'content-collection.html' },
    { key: 'upgrades', label: '8 tier upgrades flagged', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> audited 87 creators on performance and brand alignment', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> recommended 12 offboard, 8 upgrade, 4 new recruits', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Portfolio Audit</strong> — 87 creators: 12 offboard, 8 upgrade, 4 new categories.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your 87-creator roster hasn\'t been audited in 12 months. I graded each on performance, audience health, and brand alignment. Recommend: <strong>12 offboard</strong>, <strong>8 upgrade tier</strong>, <strong>4 new categories</strong> to recruit.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['offboard-12', 'upgrade-8', 'recruit-4'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
