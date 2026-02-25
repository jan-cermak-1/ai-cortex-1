const FLOW_SMART_BUDGET_REALLOCATION = {
  id: 'smart-budget-reallocation',
  name: 'Smart Budget Reallocation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Real-time performance data suggests budget reallocation',
    description: [
      'I\'m continuously monitoring your campaign performance. Current data shows: <strong>Campaign A (LinkedIn) is at 2.1x ROAS</strong> and running out of budget by 3pm daily, while Campaign C (Meta) has 40% budget unspent at end of day.',
      'Reallocating $2,400/day from C to A would capitalize on Campaign A\'s strong performance while it\'s in peak season.'
    ],
    completedDescription: ['Smart budget reallocation applied — $2,400/day moved from Campaign C to Campaign A, with daily performance monitoring.'],
    footer: 'This supports your goal: Maximize blended ROAS above 3.5 by continuously optimizing budget allocation across campaigns',
    checkboxItems: [
      { action: 'reallocate-budget', label: 'Reallocate $2,400/day from Campaign C to Campaign A' },
      { action: 'set-daily-review', label: 'Set up daily automated performance review with reallocation trigger' },
      { action: 'define-guardrails', label: 'Define reallocation guardrails: min/max budget per campaign' },
      { action: 'track-impact', label: 'Create performance tracking to measure impact of reallocation' }
    ],
    moreIdeasPool: [
      { action: 'dayparting-optimize', label: 'Enable dayparting optimization alongside budget reallocation' },
      { action: 'campaign-d', label: 'Analyze Campaign D as additional reallocation source' },
      { action: 'forecast-model', label: 'Run 30-day forecast model at new budget allocation levels' }
    ]
  },
  decisionItems: [
    { key: 'reallocated', label: '$2,400/day reallocated to Campaign A', href: 'unified-analytics.html' },
    { key: 'guardrails', label: 'Budget guardrails defined (min/max per campaign)', href: 'unified-analytics.html' },
    { key: 'tracking', label: 'Impact tracking board created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> reallocated $2,400/day from Campaign C to Campaign A', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> set up daily automated performance review trigger', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> defined budget guardrails with min/max constraints', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Budget reallocated</strong> — $2,400/day shifted to Campaign A (2.1x ROAS). Change live.', time: '30 sec ago', unread: true },
    { icon: 'activity', text: 'Daily automated review active. Next reallocation check: tomorrow 9am.', time: '1 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'m monitoring your campaigns in real time. Campaign A on LinkedIn is hitting 2.1x ROAS but runs out of budget by 3pm. Campaign C on Meta has 40% unspent daily. Moving $2,400/day between them would significantly improve blended ROAS.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['reallocate-budget', 'set-daily-review', 'define-guardrails', 'track-impact'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
