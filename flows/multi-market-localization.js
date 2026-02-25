const FLOW_MULTI_MARKET_LOCALIZATION = {
  id: 'multi-market-localization',
  name: 'Multi-Market Localization',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '5 posts ready for global market adaptation',
    description: [
      'I detected <strong>5 high-performing English posts</strong> that would be valuable in your other active markets.',
      'I can adapt them for German, French, Spanish, and Brazilian Portuguese — including cultural context adjustments, not just translation.'
    ],
    completedDescription: ['Multi-market content created — 20 adapted posts (5 × 4 markets) scheduled across market-specific profiles.'],
    footer: 'This supports your goal: Increase international market engagement by 50% while maintaining brand consistency',
    checkboxItems: [
      { action: 'translate-adapt', label: 'Translate and culturally adapt all 5 posts for 4 markets' },
      { action: 'assign-profiles', label: 'Assign adapted posts to correct market profiles' },
      { action: 'schedule-timezone', label: 'Schedule in each market\'s local peak time zone' },
      { action: 'add-local-hashtags', label: 'Add market-relevant hashtags and local trending tags' }
    ],
    moreIdeasPool: [
      { action: 'local-review', label: 'Flag posts for native speaker review in each market' },
      { action: 'local-assets', label: 'Identify posts where local imagery would improve performance' },
      { action: 'market-analytics', label: 'Set up per-market performance tracking board' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '20 localized posts scheduled (5 × 4 markets)', href: 'publisher-calendar.html' },
    { key: 'profiles', label: 'Posts assigned to correct market profiles', href: 'publisher-calendar.html' },
    { key: 'analytics', label: 'Market performance tracking configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 20 localized posts across 4 markets', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> scheduled posts in local peak time zones', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 5 posts suitable for global adaptation', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Localization complete</strong> — 20 posts ready across 4 markets.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'German market posts scheduled. Spanish market review pending.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 5 English posts that performed well and should reach your international markets. I can adapt them for German, French, Spanish, and Portuguese with cultural adjustments — not just translation.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['translate-adapt', 'assign-profiles', 'schedule-timezone', 'add-local-hashtags'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
