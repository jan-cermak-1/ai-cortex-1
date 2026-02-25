const FLOW_SHARE_OF_VOICE_BATTLE = {
  id: 'share-of-voice-battle',
  name: 'Share of Voice Battle',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Competitor gained 8 points of SOV this week',
    description: [
      'Your main competitor just launched a campaign that gave them an <strong>8-point SOV increase</strong> in 5 days — your SOV dropped from 34% to 28% in your category.',
      'Based on their content patterns, I can help you respond strategically:'
    ],
    completedDescription: ['SOV recovery plan activated — 5 response posts scheduled, listening expanded, and competitive tracking board updated.'],
    footer: 'This supports your goal: Maintain 35%+ share of voice in your category and respond to competitive moves within 48 hours',
    checkboxItems: [
      { action: 'create-response', label: 'Schedule 5 high-visibility posts targeting the same keywords' },
      { action: 'expand-listening', label: 'Expand Listening query to track competitor campaign keywords' },
      { action: 'update-sov-board', label: 'Update SOV tracking board with weekly competitive benchmarks' },
      { action: 'brief-team', label: 'Send competitive intelligence brief to content and marketing teams' }
    ],
    moreIdeasPool: [
      { action: 'influencer-counter', label: 'Activate 3 partner influencers to amplify your counter-message' },
      { action: 'paid-boost', label: 'Boost your top 2 organic posts as paid ads to increase reach' },
      { action: 'pr-pitch', label: 'Generate media pitch to secure coverage that matches competitor press' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '5 response posts scheduled in Publisher', href: 'publisher-calendar.html' },
    { key: 'listening', label: 'Listening query expanded with competitor keywords', href: 'settings-listening.html' },
    { key: 'board', label: 'SOV tracking board updated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> scheduled 5 high-visibility response posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> expanded Listening query with 12 competitor keywords', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> updated SOV tracking board with weekly competitive data', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>SOV alert:</strong> Competitor gained 8 points this week. Counter-strategy activated.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Your current SOV: 28% (down from 34%). Target: 35%.', time: '5 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Competitive alert: Your main competitor launched a campaign and gained 8 points of share of voice this week — your SOV dropped from 34% to 28%. I\'ve prepared a counter-strategy.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-response', 'expand-listening', 'update-sov-board', 'brief-team'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
