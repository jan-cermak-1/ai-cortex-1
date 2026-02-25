const FLOW_PRODUCT_FEEDBACK_LOOP = {
  id: 'product-feedback-loop',
  name: 'Product Feedback Loop',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '234 social mentions contain actionable product feedback',
    description: [
      'I analyzed your social listening data and identified <strong>234 mentions this month</strong> containing specific, actionable product feedback — feature requests, usability issues, and competitive comparisons.',
      'This is voice-of-customer data your product team doesn\'t currently receive. I can package it for them.'
    ],
    completedDescription: ['Product feedback report sent — 234 mentions categorized, top 3 themes extracted, and monthly feedback loop established.'],
    footer: 'This supports your goal: Create a systematic social listening to product feedback pipeline',
    checkboxItems: [
      { action: 'categorize-feedback', label: 'Categorize 234 mentions into feature requests, bugs, and UX feedback' },
      { action: 'generate-report', label: 'Generate product insights report with top 3 themes and evidence' },
      { action: 'send-product-team', label: 'Share report with product team via Slack and email' },
      { action: 'setup-monthly', label: 'Set up monthly product feedback digest to run automatically' }
    ],
    moreIdeasPool: [
      { action: 'competitive-compare', label: 'Add section on features mentioned in competitor comparison mentions' },
      { action: 'sentiment-by-feature', label: 'Provide sentiment breakdown per product feature mentioned' },
      { action: 'track-changes', label: 'Set up tracking to see if feedback leads to sentiment improvement after releases' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Product feedback report generated (234 mentions)', href: 'unified-analytics.html' },
    { key: 'shared', label: 'Report shared with product team', href: 'unified-analytics.html' },
    { key: 'digest', label: 'Monthly feedback digest scheduled', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> categorized 234 social mentions by feedback type', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated product insights report with top 3 themes', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> shared report with product team via Slack and email', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Product feedback ready:</strong> 234 mentions categorized and sent to product team.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Top feedback theme: "Search functionality needs improvement" (67 mentions).', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 234 social mentions this month with actionable product feedback — feature requests, usability issues, comparisons with competitors. Your product team doesn\'t see this data currently.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['categorize-feedback', 'generate-report', 'send-product-team', 'setup-monthly'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
