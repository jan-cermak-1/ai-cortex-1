const FLOW_CHANNEL_MIX_OPTIMIZER = {
  id: 'channel-mix-optimizer',
  name: 'Channel Mix Optimizer',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Budget reallocation: -30% Twitter, +20% Instagram Stories — +12% ROAS',
    description: [
      'Cortex analyzed 6 months of campaign data and recommends reallocating budget: <strong>reduce Twitter by 30%</strong>, boost Instagram Stories by 20%, and test LinkedIn for B2B segment.',
      'Expected outcome: +12% ROAS. Twitter ROAS declined 18% over 6 months; Stories up 24%. LinkedIn test: $8K for 2-week pilot, projected 2.1x ROAS for B2B intent audience.'
    ],
    completedDescription: ['Recommendations applied — budget reallocated, LinkedIn pilot configured, and ROAS tracking dashboard updated.'],
    footer: 'This supports your goal: Maximize paid social ROAS through data-driven channel mix',
    checkboxItems: [
      { action: 'apply-reallocation', label: 'Apply budget reallocation across 4 ad sets' },
      { action: 'configure-linkedin', label: 'Configure $8K LinkedIn B2B pilot for 2 weeks' },
      { action: 'update-dashboard', label: 'Update ROAS tracking dashboard with new targets' }
    ],
    moreIdeasPool: [
      { action: 'twitter-audit', label: 'Deep-dive why Twitter ROAS declined 18%' },
      { action: 'stories-creative', label: 'Generate Stories-specific creative for +20% budget' }
    ]
  },
  decisionItems: [
    { key: 'reallocation', label: 'Budget reallocated across ad sets', href: 'unified-analytics.html' },
    { key: 'linkedin', label: 'LinkedIn B2B pilot configured', href: 'unified-analytics.html' },
    { key: 'dashboard', label: 'ROAS dashboard updated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> applied budget reallocation', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured $8K LinkedIn B2B pilot', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 6 months — Twitter -30%, Stories +20%, LinkedIn test', time: '6 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Channel mix:</strong> -30% Twitter, +20% Stories, LinkedIn test. +12% ROAS expected.', time: '6 min ago', unread: true },
    { icon: 'activity', text: 'Twitter ROAS -18% in 6mo. Stories +24%. LinkedIn pilot: $8K, 2.1x projected.', time: '5 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed 6 months of campaign data. Recommendation: cut Twitter 30% — ROAS down 18% — boost Instagram Stories 20% — up 24%. Add LinkedIn B2B pilot: $8K for 2 weeks, 2.1x projected ROAS. Expected +12% overall ROAS.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-reallocation', 'configure-linkedin', 'update-dashboard'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
