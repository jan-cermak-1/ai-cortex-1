const FLOW_NONPROFIT_COMMUNITY = {
  id: 'nonprofit-community',
  name: 'Nonprofit Community AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Fundraising campaign: 12,000 conversations monitored',
    description: [
      'Annual fundraising campaign live. Cortex monitored 12,000 community conversations — identified donor friction points, surfaced top 50 most engaged supporters for personal outreach, and optimized content for emotional resonance.',
      'Friction analysis: 34% confused about donation matching, 22% asked about tax receipts. Content tweaks increased conversion intent by 18%.'
    ],
    completedDescription: ['12,000 conversations monitored — friction points identified, top 50 supporters surfaced, content optimized for emotional resonance.'],
    footer: 'This supports your goal: Maximize fundraising impact through community intelligence',
    checkboxItems: [
      { action: 'surface-supporters', label: 'Surface top 50 engaged supporters for outreach' },
      { action: 'fix-friction', label: 'Address donation matching and tax receipt confusion' },
      { action: 'optimize-content', label: 'Apply emotional resonance optimizations to content' }
    ],
    moreIdeasPool: [
      { action: 'donor-segments', label: 'Build donor segment profiles from engagement' }
    ]
  },
  decisionItems: [
    { key: 'supporters', label: 'Top 50 supporters surfaced', href: 'listening.html' },
    { key: 'content', label: 'Content optimized', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> monitored 12,000 fundraising conversations', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified donor friction points', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Fundraising intel:</strong> 12K conversations. 34% matching confusion, 22% tax receipts. Top 50 supporters ready. +18% conversion intent.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your fundraising campaign: I monitored 12,000 conversations. Found friction — 34% confused about donation matching, 22% asked about tax receipts. Surfaced top 50 most engaged supporters for personal outreach. Content optimizations increased conversion intent by 18%.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['surface-supporters', 'fix-friction', 'optimize-content'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
