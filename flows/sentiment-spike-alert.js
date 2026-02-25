const FLOW_SENTIMENT_SPIKE_ALERT = {
  id: 'sentiment-spike-alert',
  name: 'Sentiment Spike Alert',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Sentiment spike detected — 280% increase in 3 hours',
    description: [
      'I detected a <strong>280% spike in negative mentions</strong> about your brand in the last 3 hours — primarily on X (Twitter) and Reddit.',
      'The dominant theme is a delivery issue affecting orders placed last week. This has not yet reached press outlets.'
    ],
    completedDescription: ['Spike response activated — care team briefed, monitoring board live, press alerts configured.'],
    footer: 'This supports your goal: Respond to brand sentiment crises within 30 minutes and protect NPS above 45',
    checkboxItems: [
      { action: 'create-monitor', label: 'Create dedicated crisis monitoring board in Unified Analytics' },
      { action: 'brief-care', label: 'Brief Care team with spike summary and response guidelines' },
      { action: 'pause-promo', label: 'Pause all scheduled promotional posts while spike is active' },
      { action: 'press-alerts', label: 'Set up press mention alerts for brand + issue keywords' }
    ],
    moreIdeasPool: [
      { action: 'draft-statement', label: 'Draft brand statement for social media response' },
      { action: 'influencer-check', label: 'Check if any influencers are amplifying the story' },
      { action: 'exec-brief', label: 'Generate executive briefing document for leadership' }
    ]
  },
  decisionItems: [
    { key: 'monitor', label: 'Crisis monitoring board live', href: 'unified-analytics.html' },
    { key: 'care', label: 'Care team briefed (12 agents)', href: 'care-inbox.html' },
    { key: 'paused', label: '8 promotional posts paused', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created crisis monitoring board', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> paused 8 promotional posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> briefed 12 Care agents with crisis summary', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected 280% negative sentiment spike', time: '3 hours ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>URGENT:</strong> Negative sentiment spike 280% above baseline — response activated.', time: '3h ago', unread: true },
    { icon: 'activity', text: 'Monitoring board live. Sentiment score: -42 (normally -8).', time: '2h ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'URGENT: I\'m detecting a 280% spike in negative brand mentions over the past 3 hours — primarily about delivery issues on X and Reddit. It hasn\'t reached press yet.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-monitor', 'brief-care', 'pause-promo', 'press-alerts'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
