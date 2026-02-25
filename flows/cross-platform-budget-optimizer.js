const FLOW_CROSS_PLATFORM_BUDGET_OPTIMIZER = {
  id: 'cross-platform-budget-optimizer',
  name: 'Cross-Platform Budget Optimizer',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Budget allocation misaligned with performance data',
    description: [
      'I analyzed your Q2 paid media spend across Meta, TikTok, and LinkedIn. <strong>LinkedIn is generating 3.2x the ROI</strong> of TikTok for your B2B objectives — but TikTok is receiving 45% of your budget vs LinkedIn\'s 18%.',
      'Realigning budget to match performance could increase overall campaign ROI by an estimated 28%.'
    ],
    completedDescription: ['Budget optimization recommendations generated — reallocation proposal ready for approval and A/B test configured.'],
    footer: 'This supports your goal: Maximize blended ROAS above 4.0 across all paid social channels',
    checkboxItems: [
      { action: 'generate-proposal', label: 'Generate budget reallocation proposal based on ROI data' },
      { action: 'model-impact', label: 'Model projected impact of reallocation on total campaign ROI' },
      { action: 'setup-ab', label: 'Configure A/B test: run new allocation on 30% of budget for 2 weeks' },
      { action: 'create-dashboard', label: 'Create cross-platform ROI comparison dashboard' }
    ],
    moreIdeasPool: [
      { action: 'daily-optimization', label: 'Enable daily automated budget shifts based on real-time performance' },
      { action: 'cpa-targets', label: 'Set individual CPA targets per platform to guide optimization' },
      { action: 'channel-forecast', label: 'Forecast next-quarter performance at proposed allocation levels' }
    ]
  },
  decisionItems: [
    { key: 'proposal', label: 'Budget reallocation proposal generated', href: 'unified-analytics.html' },
    { key: 'ab-test', label: 'A/B test configured (30% of budget)', href: 'unified-analytics.html' },
    { key: 'dashboard', label: 'Cross-platform ROI dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated budget reallocation proposal with ROI impact model', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured 2-week A/B test at proposed allocation levels', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed cross-platform performance: LinkedIn 3.2x ROI vs TikTok', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Budget opportunity:</strong> +28% projected ROI from reallocation. Proposal ready.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'A/B test starts Monday on 30% of budget. Results expected in 2 weeks.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed your Q2 paid spend. LinkedIn generates 3.2x the ROI of TikTok for your B2B objectives — but gets less than half the budget. Realigning allocation could boost overall ROI by 28%.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-proposal', 'model-impact', 'setup-ab', 'create-dashboard'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
