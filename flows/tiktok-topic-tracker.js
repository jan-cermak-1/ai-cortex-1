const FLOW_TIKTOK_TOPIC_TRACKER = {
  id: 'tiktok-topic-tracker',
  name: 'TikTok Topic Tracker',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Trending TikTok topic aligned with your brand',
    description: [
      'A topic related to your product category is trending on TikTok with <strong>4.2M views in 48 hours</strong> — and your brand has not published in this space.',
      'Two competitors have already published Reels/TikToks on this topic with strong engagement. The window to join is closing.'
    ],
    completedDescription: ['TikTok trend response set up — content brief created, tracking query configured, and team notified.'],
    footer: 'This supports your goal: Participate in relevant TikTok trends within 48 hours of detection',
    checkboxItems: [
      { action: 'create-brief', label: 'Generate content brief for a brand-aligned TikTok on this trend' },
      { action: 'setup-tracking', label: 'Set up TikTok Listening query to track trend performance' },
      { action: 'notify-creator', label: 'Notify content creator team with trend details and urgency' },
      { action: 'competitor-analysis', label: 'Analyze competitor TikToks on this trend for differentiation angles' }
    ],
    moreIdeasPool: [
      { action: 'influencer-match', label: 'Identify 3 creators who are already participating in this trend' },
      { action: 'sound-research', label: 'Identify top trending sounds used in this topic' },
      { action: 'predicted-window', label: 'Estimate trend lifespan and optimal publishing window' }
    ]
  },
  decisionItems: [
    { key: 'brief', label: 'Content brief generated and shared with creators', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'TikTok trend tracking query configured', href: 'settings-listening.html' },
    { key: 'analysis', label: 'Competitor analysis report ready', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated content brief for trending TikTok topic', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up TikTok trend Listening query', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected trending TikTok topic with 4.2M views', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>TikTok trend alert:</strong> Relevant topic at 4.2M views — content brief created.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Two competitors already published on this trend. Window closing.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'A TikTok topic in your product category just hit 4.2M views in 48 hours — two competitors have already published. I\'ve prepared a content brief and trend tracking so you can respond fast.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-brief', 'setup-tracking', 'notify-creator', 'competitor-analysis'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
