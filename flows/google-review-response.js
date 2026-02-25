const FLOW_GOOGLE_REVIEW_RESPONSE = {
  id: 'google-review-response',
  name: 'Google Review Response Blitz',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '156 unanswered Google reviews — average 4.2 days old',
    description: [
      'Your Google Business Profile has <strong>156 unanswered reviews</strong> — 42 are negative (below 3 stars). Average wait time is 4.2 days, which impacts your local SEO ranking.',
      'Businesses that respond to reviews within 24 hours see 12% higher review volume. I can help:'
    ],
    completedDescription: ['Google review response blitz complete — 156 reviews responded to, negative reviews escalated, and daily automation enabled.'],
    footer: 'This supports your goal: Achieve 4.7+ Google rating and respond to all reviews within 24 hours',
    checkboxItems: [
      { action: 'respond-positive', label: 'Generate and send responses to 114 positive reviews (4-5 stars)' },
      { action: 'draft-negative', label: 'Draft empathetic responses for 42 negative reviews for approval' },
      { action: 'escalate-critical', label: 'Escalate 8 reviews mentioning specific complaints to Care team' },
      { action: 'setup-automation', label: 'Set up daily Google review response automation' }
    ],
    moreIdeasPool: [
      { action: 'request-reviews', label: 'Create post-purchase review request flow for top customers' },
      { action: 'insights-report', label: 'Analyze review themes and generate product improvement report' },
      { action: 'competitor-compare', label: 'Compare your review score with 3 main local competitors' }
    ]
  },
  decisionItems: [
    { key: 'positive', label: '114 positive reviews responded to', href: 'community-inbox.html' },
    { key: 'negative', label: '42 negative review responses ready for approval', href: 'community-inbox.html' },
    { key: 'escalated', label: '8 complaint reviews sent to Care team', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> sent responses to 114 positive Google reviews', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> drafted responses for 42 negative reviews', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> escalated 8 complaint reviews to Care team', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Google review blitz complete</strong> — 114 sent, 42 drafted for approval.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Daily automation enabled: new reviews will be responded to within 2 hours.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'You have 156 unanswered Google reviews — 42 negative — with an average wait of 4.2 days. This is hurting your local SEO. I can clear this backlog now.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['respond-positive', 'draft-negative', 'escalate-critical', 'setup-automation'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
