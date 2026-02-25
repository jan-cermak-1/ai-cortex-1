const FLOW_REVIEW_VELOCITY_ALERT = {
  id: 'review-velocity-alert',
  name: 'Review Velocity Alert',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Product SKU #8847: Negative reviews +340% in 48 hours',
    description: [
      'Negative review volume for Product SKU #8847 spiked 340% in 48 hours — potential quality issue. Cortex alerted product, quality, and care teams simultaneously.',
      'Coordinated crisis response activated across all channels. 47 new negative reviews in 48h vs 14 in prior 48h. Root cause investigation started.'
    ],
    completedDescription: ['Review velocity alert — SKU #8847. Product, quality, care alerted. Coordinated crisis response activated.'],
    footer: 'This supports your goal: Catch product issues before they become brand crises',
    checkboxItems: [
      { action: 'alert-teams', label: 'Alert product, quality, care teams' },
      { action: 'activate-response', label: 'Activate coordinated crisis response' },
      { action: 'start-investigation', label: 'Start root cause investigation' }
    ],
    moreIdeasPool: [
      { action: 'velocity-thresholds', label: 'Set custom velocity alert thresholds' }
    ]
  },
  decisionItems: [
    { key: 'alert', label: 'Teams alerted', href: 'care-inbox.html' },
    { key: 'response', label: 'Crisis response active', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> detected 340% negative review spike for SKU #8847', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> alerted product, quality, care teams', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Review velocity alert:</strong> SKU #8847 — negative reviews +340% in 48h. 47 vs 14. Crisis response activated.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Negative reviews for Product SKU #8847 spiked 340% in 48 hours — 47 new vs 14 in the prior 48h. Potential quality issue. I alerted product, quality, and care teams and activated coordinated crisis response across all channels. Root cause investigation started.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['alert-teams', 'activate-response', 'start-investigation'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
