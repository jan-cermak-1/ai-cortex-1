const FLOW_BUDGET_REFORECAST = {
  id: 'budget-reforecast',
  name: 'Social Budget Reforecast',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Mid-year budget reforecast — $120K reallocation opportunity',
    description: [
      'I analyzed H1 spend vs. performance across all channels. LinkedIn is outperforming forecast by 2.4x but is underfunded. TikTok spend is $40K over plan with underperformance.',
      'Recommendation: Reallocate <strong>$120K from TikTok and Twitter to LinkedIn and Influencer</strong> in H2. Projected outcome: +34% improvement in cost-per-engagement and +$1.8M additional pipeline.'
    ],
    completedDescription: ['H2 budget reforecast complete — reallocation plan submitted, updated channel mix configured, and finance briefed.'],
    footer: 'This supports your goal: Maximize social media ROI in H2 by reallocating budget to best-performing channels',
    checkboxItems: [
      { action: 'reforecast-model', label: 'Generate H2 budget reforecast model with channel reallocation' },
      { action: 'update-targets', label: 'Update H2 channel performance targets to reflect reallocation' },
      { action: 'brief-finance', label: 'Prepare budget reforecast summary for Finance team' },
      { action: 'linkedin-scaling', label: 'Configure LinkedIn campaign scaling parameters for additional $60K' }
    ],
    moreIdeasPool: [
      { action: 'contingency-budget', label: 'Set aside 10% contingency budget for Q3 trend response opportunities' },
      { action: 'attribution-model', label: 'Update attribution model to reflect new channel mix and objectives' },
      { action: 'vendor-renegotiation', label: 'Flag TikTok underperformance for agency contract review' }
    ]
  },
  decisionItems: [
    { key: 'reforecast', label: 'H2 budget reforecast model with reallocation plan', href: 'unified-analytics.html' },
    { key: 'targets', label: 'H2 channel targets updated in Unified Analytics', href: 'unified-analytics.html' },
    { key: 'finance', label: 'Budget reforecast summary prepared for Finance', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated H2 budget reforecast: $120K reallocation recommended', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> updated H2 performance targets to reflect new channel mix', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> configured LinkedIn campaign scaling for additional $60K', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Reforecast ready</strong> — $120K reallocation: LinkedIn +$60K, Influencer +$60K, TikTok -$80K, Twitter -$40K.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Projected impact: +34% lower cost-per-engagement, +$1.8M additional pipeline in H2.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'H1 budget analysis is complete. LinkedIn is delivering 2.4x forecast but is underfunded. TikTok is $40K over budget with underperformance. I recommend reallocating $120K to LinkedIn and Influencer in H2 — projected to add $1.8M additional pipeline.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['reforecast-model', 'update-targets', 'brief-finance', 'linkedin-scaling'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
