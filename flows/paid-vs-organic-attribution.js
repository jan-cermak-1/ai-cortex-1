const FLOW_PAID_VS_ORGANIC_ATTRIBUTION = {
  id: 'paid-vs-organic-attribution',
  name: 'Paid vs Organic Attribution',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Paid amplification is masking organic performance decline',
    description: [
      'I analyzed your combined paid + organic metrics and found an important signal: <strong>organic reach is down 31% YoY</strong>, but this is being masked by a 45% increase in paid spend.',
      'Separating paid from organic attribution reveals the true health of your organic social strategy — and where investment is actually driving results.'
    ],
    completedDescription: ['Paid vs organic attribution model built — separate dashboards created, true organic performance visible.'],
    footer: 'This supports your goal: Understand the true ROI of organic social vs paid and make informed budget decisions',
    checkboxItems: [
      { action: 'separate-attribution', label: 'Build separate paid and organic attribution models' },
      { action: 'organic-dashboard', label: 'Create pure organic performance dashboard (exclude boosted posts)' },
      { action: 'paid-dashboard', label: 'Create paid-only ROI dashboard with cost-per-engagement and ROAS' },
      { action: 'blended-model', label: 'Build blended model showing synergy between organic and paid' }
    ],
    moreIdeasPool: [
      { action: 'holdout-test', label: 'Design holdout test: run organic-only for 2 weeks to measure true impact' },
      { action: 'budget-recommendation', label: 'Generate organic-vs-paid budget recommendation for Q3' },
      { action: 'content-overlap', label: 'Identify content pieces that perform well organically AND respond to paid boost' }
    ]
  },
  decisionItems: [
    { key: 'organic', label: 'Pure organic performance dashboard created', href: 'unified-analytics.html' },
    { key: 'paid', label: 'Paid ROI dashboard with ROAS and CPE created', href: 'unified-analytics.html' },
    { key: 'blended', label: 'Blended attribution model configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> built separate paid and organic attribution models', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created pure organic and paid-only performance dashboards', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified organic reach decline masked by paid spend increase', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Attribution model built</strong> — organic decline identified. Separate dashboards created.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Organic reach: -31% YoY. Paid ROAS: 4.2x. These are now tracked separately.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Important finding: organic reach is down 31% year-over-year, but this is being masked by 45% more paid spend. Without separating them, you can\'t see where investment is actually making a difference. Let me build the attribution model.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['separate-attribution', 'organic-dashboard', 'paid-dashboard', 'blended-model'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
