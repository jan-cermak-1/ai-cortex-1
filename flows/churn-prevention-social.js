const FLOW_CHURN_PREVENTION_SOCIAL = {
  id: 'churn-prevention-social',
  name: 'Churn Prevention via Social',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '128 at-risk customers showing social churn signals',
    description: [
      'I cross-referenced your CRM churn risk scores with social behavior data and found <strong>128 customers</strong> with high churn probability who are also showing social disengagement signals (unfollowed social pages, stopped engaging with content).',
      'Social disengagement is often an early indicator of churn. Proactive intervention now saves an estimated $94K in ARR.'
    ],
    completedDescription: ['Churn prevention campaign activated — 128 at-risk customers in personalized win-back journey.'],
    footer: 'This supports your goal: Reduce monthly churn rate below 2% using early social signal detection',
    checkboxItems: [
      { action: 'segment-at-risk', label: 'Segment 128 at-risk customers for targeted intervention' },
      { action: 'personalized-content', label: 'Create personalized win-back social content for this segment' },
      { action: 'care-outreach', label: 'Trigger proactive Care outreach for top 20 highest-value at-risk accounts' },
      { action: 'track-outcomes', label: 'Set up churn prevention campaign tracking in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'loyalty-offer', label: 'Generate loyalty retention offer for the top 20 at-risk VIP accounts' },
      { action: 'feedback-collect', label: 'Send micro-survey to understand dissatisfaction drivers' },
      { action: 'social-reconnect', label: 'Create re-engagement social post targeting disconnected audience segment' }
    ]
  },
  decisionItems: [
    { key: 'segmented', label: '128 at-risk customers in win-back journey', href: 'publisher-calendar.html' },
    { key: 'care', label: 'Proactive Care outreach triggered for top 20 accounts', href: 'care-inbox.html' },
    { key: 'tracking', label: 'Churn prevention tracking configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> enrolled 128 at-risk customers in win-back journey', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> triggered proactive Care outreach for 20 high-value at-risk accounts', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> correlated CRM churn scores with social disengagement signals', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Churn risk detected:</strong> 128 customers showing combined CRM + social churn signals.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Win-back campaign active. Top 20 VIP accounts in personal Care outreach queue.', time: '1 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I cross-referenced CRM churn risk scores with social behavior and found 128 at-risk customers also showing social disengagement. Social unfollowing often precedes cancellation. Intervening now saves an estimated $94K ARR.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['segment-at-risk', 'personalized-content', 'care-outreach', 'track-outcomes'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
