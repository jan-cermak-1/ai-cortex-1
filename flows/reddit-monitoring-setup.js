const FLOW_REDDIT_MONITORING_SETUP = {
  id: 'reddit-monitoring-setup',
  name: 'Reddit Monitoring Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Brand mentioned 847 times on Reddit — no monitoring active',
    description: [
      'I found <strong>847 mentions of your brand on Reddit</strong> in the past 30 days across 12 subreddits — but you currently have no Reddit monitoring set up.',
      'Reddit discussions often become the source for viral content and news coverage. Setting up monitoring now is time-sensitive.'
    ],
    completedDescription: ['Reddit monitoring configured — Listening query set up for 12 subreddits, alerts active, priority mentions added to inbox.'],
    footer: 'This supports your goal: Monitor all relevant brand conversations including emerging channels',
    checkboxItems: [
      { action: 'setup-listening', label: 'Set up Reddit Listening query for brand + product keywords' },
      { action: 'configure-alerts', label: 'Configure Spike Alerts for Reddit volume and sentiment changes' },
      { action: 'add-to-inbox', label: 'Route high-priority Reddit mentions to Community inbox' },
      { action: 'identify-subreddits', label: 'Identify top 5 subreddits for brand community engagement' }
    ],
    moreIdeasPool: [
      { action: 'brand-subreddit', label: 'Evaluate opportunity to create a branded subreddit' },
      { action: 'ama-planning', label: 'Identify relevant subreddits for AMA (Ask Me Anything) strategy' },
      { action: 'reddit-ads', label: 'Analyze Reddit ad targeting opportunity based on engaged subreddits' }
    ]
  },
  decisionItems: [
    { key: 'listening', label: 'Reddit Listening query active (12 subreddits)', href: 'settings-listening.html' },
    { key: 'alerts', label: 'Spike alerts configured for Reddit', href: 'settings-listening.html' },
    { key: 'inbox', label: 'Priority Reddit mentions routed to inbox', href: 'community-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> set up Reddit Listening across 12 subreddits', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured spike alerts for Reddit volume and sentiment', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 847 brand mentions on Reddit in past 30 days', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Reddit monitoring live</strong> — 847 missed mentions found. Alerts active.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Top subreddits: r/tech (234 mentions), r/ProductReviews (187), r/CustomerService (98).', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I discovered 847 mentions of your brand on Reddit in the last 30 days — but you have no monitoring set up there. Reddit discussions often become viral content. I can fix this now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['setup-listening', 'configure-alerts', 'add-to-inbox', 'identify-subreddits'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
