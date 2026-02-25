const FLOW_MARKET_EXPANSION_SETUP = {
  id: 'market-expansion-setup',
  name: 'Market Expansion Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Market expansion to Southeast Asia — 5-step social setup',
    description: [
      'You\'re expanding to 3 new Southeast Asian markets: Vietnam, Thailand, and Indonesia. Each requires <strong>localized social infrastructure</strong>: platform selection, local account setup guidance, language-specific care routing, and localized content strategy.',
      'Primary platforms differ by market: LINE dominates Thailand, Zalo/Facebook in Vietnam, WhatsApp/Instagram in Indonesia. Starting with a generic global strategy will underperform by 40-60%.'
    ],
    completedDescription: ['Southeast Asia market expansion configured — localized listening, care routing, and content framework ready for each market.'],
    footer: 'This supports your goal: Launch in 3 SEA markets with a locally-relevant social presence by Q3 end',
    checkboxItems: [
      { action: 'platform-matrix', label: 'Build platform-market matrix for Vietnam, Thailand, Indonesia' },
      { action: 'listening-queries', label: 'Create local-language listening queries for each market' },
      { action: 'care-routing', label: 'Configure language-based care routing and team assignment' },
      { action: 'content-framework', label: 'Generate local content strategy framework for each market' }
    ],
    moreIdeasPool: [
      { action: 'local-influencers', label: 'Identify top micro-influencers in each SEA market by category' },
      { action: 'competitor-map', label: 'Map competitor social presence across all 3 new markets' },
      { action: 'crisis-plan', label: 'Create market-specific crisis response plan for each region' }
    ]
  },
  decisionItems: [
    { key: 'platform-matrix', label: 'Platform-market matrix for 3 SEA markets', href: 'unified-analytics.html' },
    { key: 'listening', label: 'Local-language listening queries active for each market', href: 'listening.html' },
    { key: 'routing', label: 'Language-based care routing configured', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> built platform-market matrix: LINE/Thailand, Zalo/Vietnam, Instagram/Indonesia', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created local-language listening queries for all 3 markets', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> configured language-based care routing and team assignments', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>SEA expansion setup complete</strong> — listening, routing, and content framework ready.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Platform insight: LINE is used by 82% of Thai internet users — must-have for Thailand market.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'You\'re launching in Vietnam, Thailand, and Indonesia. Each market has different dominant platforms — LINE in Thailand, Zalo in Vietnam, WhatsApp and Instagram in Indonesia. Using a generic global strategy will underperform by 40-60%. I can set up market-specific infrastructure for all three now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['platform-matrix', 'listening-queries', 'care-routing', 'content-framework'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1500 }
  ]
};
