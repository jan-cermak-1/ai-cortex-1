const FLOW_CREATOR_CONTENT_AMPLIFIER = {
  id: 'creator-content-amplifier',
  name: 'Creator Content Amplifier',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '4 viral posts — +2.3M reach with $8K budget',
    description: [
      '<strong>4 influencer posts</strong> went viral (>500K reach each). I recommend whitelisting all 4 for paid amplification.',
      'Estimated <strong>+2.3M incremental reach</strong> with $8,000 budget. Lookalike targeting configured.'
    ],
    completedDescription: ['Creator content amplification configured — 4 posts whitelisted, +2.3M reach estimated with $8K budget.'],
    footer: 'This supports your goal: Maximize ROI from viral creator content with paid boost',
    checkboxItems: [
      { action: 'whitelist-all', label: 'Whitelist all 4 viral posts for paid amplification' },
      { action: 'set-budget', label: 'Allocate $8K budget and set lookalike targeting' },
      { action: 'track-performance', label: 'Create amplification performance dashboard' }
    ],
    moreIdeasPool: [
      { action: 'creative-variants', label: 'Create ad creative variants from top-performing frames' },
      { action: 'audience-segments', label: 'Build lookalike audiences from engagers' }
    ]
  },
  decisionItems: [
    { key: 'whitelisted', label: '4 posts whitelisted for amplification', href: 'content-collection.html' },
    { key: 'dashboard', label: 'Amplification dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 4 viral posts (>500K reach each)', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> estimated +2.3M reach with $8K budget', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Viral opportunity</strong> — 4 posts ready for amplification. +2.3M reach, $8K.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '4 influencer posts went viral — each over 500K reach. I recommend whitelisting all 4 for paid amplification. Estimated <strong>+2.3M incremental reach</strong> with $8,000 budget. Lookalike targeting ready.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['whitelist-all', 'set-budget', 'track-performance'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
