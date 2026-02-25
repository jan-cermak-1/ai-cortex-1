const FLOW_SENTIMENT_SHIFT_ALERT = {
  id: 'sentiment-shift-alert',
  name: 'Sentiment Shift Alert',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Brand sentiment dropped -18 points in 6 hours',
    description: [
      'Cortex detected a <strong>-18 point sentiment drop</strong> across Instagram and X in the past 6 hours — correlated with your PR event.',
      'I\'ve surfaced 47 affected posts, top negative themes (product quality 34%, pricing 28%, support 22%), and recommended immediate response actions.'
    ],
    completedDescription: ['Response activated — affected posts surfaced, Care briefed, and monitoring board configured for real-time tracking.'],
    footer: 'This supports your goal: Detect and respond to sentiment shifts within 2 hours to protect brand reputation',
    checkboxItems: [
      { action: 'surface-posts', label: 'Surface top 20 affected posts for Care team review' },
      { action: 'brief-care', label: 'Brief Care team with negative theme summary and response guidelines' },
      { action: 'create-monitor', label: 'Create real-time sentiment monitoring board' },
      { action: 'draft-responses', label: 'Generate AI draft responses for top 5 negative themes' }
    ],
    moreIdeasPool: [
      { action: 'exec-brief', label: 'Generate executive briefing for PR team' },
      { action: 'pause-promo', label: 'Pause scheduled promotional content during recovery' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '47 affected posts surfaced', href: 'care-inbox.html' },
    { key: 'monitor', label: 'Sentiment monitoring board live', href: 'unified-analytics.html' },
    { key: 'care', label: 'Care team briefed with theme summary', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> surfaced 47 affected posts for review', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> briefed Care team with negative theme breakdown', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected -18 point sentiment drop across Instagram and X', time: '6 hours ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Sentiment alert:</strong> -18 points in 6 hours post-PR event. 47 posts affected.', time: '6h ago', unread: true },
    { icon: 'activity', text: 'Top themes: product quality 34%, pricing 28%, support 22%.', time: '5h ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Alert: Brand sentiment dropped 18 points in 6 hours across Instagram and X after your PR event. I\'ve identified 47 affected posts and the top negative themes — product quality 34%, pricing 28%, support 22%.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['surface-posts', 'brief-care', 'create-monitor', 'draft-responses'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
