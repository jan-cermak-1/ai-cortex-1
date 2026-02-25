const FLOW_PAID_CAMPAIGN_ALERT = {
  id: 'paid-campaign-alert',
  name: 'Paid Campaign Alert',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'CPA spiked 47% in the last 6 hours — anomaly detected',
    description: [
      'Your Meta campaign CPA jumped from $8.40 to $12.35 in the last 6 hours — a <strong>47% spike</strong> above baseline.',
      'I identified the likely cause: creative fatigue on your top-spend ad set (frequency reached 6.2). I can fix this before you waste more budget.'
    ],
    completedDescription: ['Paid campaign issue resolved — fatigued creative swapped, budget redistributed, and monitoring alert configured.'],
    footer: 'This supports your goal: Maintain CPA below $10 across all paid social campaigns',
    checkboxItems: [
      { action: 'pause-fatigued', label: 'Pause the fatigued ad set (frequency 6.2 — well above 3.0 threshold)' },
      { action: 'swap-creative', label: 'Swap in top 2 backup creatives for immediate A/B test' },
      { action: 'redistribute-budget', label: 'Redistribute fatigued ad set budget to top 3 performing ad sets' },
      { action: 'setup-alert', label: 'Set up CPA alert: notify when any ad set exceeds $11' }
    ],
    moreIdeasPool: [
      { action: 'audience-expand', label: 'Expand audience targeting to combat saturation' },
      { action: 'generate-creative', label: 'Generate 3 new creative concepts using top-performing message angles' },
      { action: 'dayparting', label: 'Enable dayparting to concentrate spend in highest-converting hours' }
    ]
  },
  decisionItems: [
    { key: 'paused', label: 'Fatigued ad set paused (saved estimated $840/day)', href: 'unified-analytics.html' },
    { key: 'creative', label: '2 backup creatives live in A/B test', href: 'unified-analytics.html' },
    { key: 'alert', label: 'CPA alert configured at $11 threshold', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> paused fatigued ad set (frequency 6.2)', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> activated 2 backup creatives for A/B test', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> redistributed budget to top 3 performing ad sets', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 47% CPA spike — creative fatigue identified as cause', time: '6 hours ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>CPA spike alert:</strong> +47% in 6 hours — creative fatigue. Action taken.', time: '6h ago', unread: true },
    { icon: 'activity', text: 'Fatigued ad set paused. Budget redistributed. Backup creatives live.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Alert: Meta campaign CPA jumped 47% in the last 6 hours — from $8.40 to $12.35. Likely cause: creative fatigue on your top ad set (frequency hit 6.2). I can fix this now before more budget is wasted.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['pause-fatigued', 'swap-creative', 'redistribute-budget', 'setup-alert'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
