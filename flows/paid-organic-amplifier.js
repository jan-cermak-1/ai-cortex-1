const FLOW_PAID_ORGANIC_AMPLIFIER = {
  id: 'paid-organic-amplifier',
  name: 'Paid-Organic Amplifier',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Top 5 organic posts — boost 3 for 10x reach with $2,500',
    description: [
      'Cortex identified your top 5 organic posts from the past month and recommends boosting <strong>3 for paid amplification</strong>.',
      'Predicted 10x reach increase with $2,500 incremental budget. Posts: #1 Reels unboxing (4.8% engagement, 12K reach) — $1,200 boost; #2 UGC testimonial (4.2%, 8K) — $800; #3 Carousel how-to (3.9%, 6K) — $500. Combined projected reach: 320K vs 26K organic.'
    ],
    completedDescription: ['Amplification configured — 3 posts boosted, $2,500 budget allocated, 10x reach projection active.'],
    footer: 'This supports your goal: Maximize ROI by amplifying proven organic content with paid',
    checkboxItems: [
      { action: 'boost-posts', label: 'Boost 3 posts with recommended budget allocation' },
      { action: 'create-campaigns', label: 'Create paid campaigns for each post in Publisher' },
      { action: 'set-tracking', label: 'Set up reach and conversion tracking for amplified posts' }
    ],
    moreIdeasPool: [
      { action: 'audience-targeting', label: 'Apply lookalike audience targeting to boosted posts' },
      { action: 'creative-variants', label: 'Create 2 ad variants per post for A/B test' }
    ]
  },
  decisionItems: [
    { key: 'boosted', label: '3 posts boosted', href: 'publisher-calendar.html' },
    { key: 'campaigns', label: 'Paid campaigns created', href: 'unified-analytics.html' },
    { key: 'tracking', label: 'Reach tracking active', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> boosted 3 top organic posts with $2,500', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created paid campaigns for each post', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified top 5 organic — 3 recommended for 10x reach', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Paid-organic:</strong> 3 of 5 top posts. $2,500 → 10x reach. 320K projected.', time: '4 min ago', unread: true },
    { icon: 'activity', text: 'Reels $1,200, UGC $800, Carousel $500. 26K → 320K reach.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I identified your top 5 organic posts and recommend boosting 3 for paid amplification. Reels unboxing 4.8% engagement — $1,200 boost; UGC testimonial 4.2% — $800; Carousel how-to 3.9% — $500. Combined $2,500 gets you 10x reach: 26K organic to 320K projected.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['boost-posts', 'create-campaigns', 'set-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
