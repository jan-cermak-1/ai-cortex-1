const FLOW_SEASONAL_REVIEW_SURGE = {
  id: 'seasonal-review-surge',
  name: 'Seasonal Review Surge',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Review volume up 340% — Black Friday surge incoming',
    description: [
      'Black Friday is 3 days away. Based on last year\'s data, your review volume will increase by <strong>340%</strong> over the next 2 weeks.',
      'Last year, unanswered reviews during this period drove 1.2 rating drop. I can prepare your response infrastructure now.'
    ],
    completedDescription: ['Seasonal review surge prepared — templates deployed, automation configured, and team capacity plan ready.'],
    footer: 'This supports your goal: Maintain 4.6+ rating during peak seasonal periods with sub-24h review response time',
    checkboxItems: [
      { action: 'seasonal-templates', label: 'Generate seasonal response templates (positive, negative, neutral)' },
      { action: 'auto-positive', label: 'Configure auto-response for positive reviews during peak period' },
      { action: 'alert-thresholds', label: 'Set alert thresholds for negative review spikes' },
      { action: 'team-capacity', label: 'Generate peak period staffing recommendations for review team' }
    ],
    moreIdeasPool: [
      { action: 'review-incentive', label: 'Set up post-purchase review request flow for Black Friday orders' },
      { action: 'competitor-watch', label: 'Monitor competitor review performance during peak period' },
      { action: 'real-time-dashboard', label: 'Create real-time review monitoring dashboard for peak period' }
    ]
  },
  decisionItems: [
    { key: 'templates', label: 'Seasonal response templates deployed', href: 'community-inbox.html' },
    { key: 'automation', label: 'Auto-response configured for positive reviews', href: 'community-inbox.html' },
    { key: 'staffing', label: 'Peak period staffing plan generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated seasonal response templates for peak period', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured auto-response for positive reviews during Black Friday', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> predicted 340% review volume increase based on last year\'s data', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Seasonal surge prep complete</strong> — templates deployed, automation active for peak period.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Black Friday starts in 3 days. Review response infrastructure ready.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Black Friday is 3 days away. Based on last year\'s data, your review volume will surge 340%. Last year that caused a 1.2-point rating drop from slow responses. I can prepare your infrastructure now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['seasonal-templates', 'auto-positive', 'alert-thresholds', 'team-capacity'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 2000 }
  ]
};
