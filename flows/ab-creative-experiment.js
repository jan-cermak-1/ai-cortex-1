const FLOW_AB_CREATIVE_EXPERIMENT = {
  id: 'ab-creative-experiment',
  name: 'A/B Creative Experiment',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Continuous creative A/B experiment opportunity',
    description: [
      'I analyzed your top 12 posts this quarter and identified 3 distinct message angles that drive above-average engagement.',
      'Running a systematic A/B experiment across these angles — with auto-promotion to winner — is a proven method to improve organic reach by <strong>25-40%</strong> without increasing production volume.'
    ],
    completedDescription: ['A/B creative experiment launched — 6 variant pairs live across 3 message angles, with auto-promotion configured.'],
    footer: 'This supports your goal: Continuously improve organic content performance through data-driven experimentation',
    checkboxItems: [
      { action: 'generate-variants', label: 'Generate 2 variants for each of the 3 message angles (6 posts total)' },
      { action: 'configure-test', label: 'Configure A/B test with equal scheduling across 2-week window' },
      { action: 'auto-promote', label: 'Set up auto-promotion: winner gets 3 more posts in next cycle' },
      { action: 'track-experiment', label: 'Create experiment tracking board with statistical significance alerts' }
    ],
    moreIdeasPool: [
      { action: 'format-test', label: 'Also test format variations: video vs static image for same message angle' },
      { action: 'timing-test', label: 'Vary posting times alongside creative to isolate timing vs creative effect' },
      { action: 'channel-test', label: 'Run parallel experiment across channels to find best angle per platform' }
    ]
  },
  decisionItems: [
    { key: 'variants', label: '6 content variants generated for A/B test', href: 'publisher-calendar.html' },
    { key: 'test', label: 'A/B test scheduled across 2-week window', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'Experiment tracking board with significance alerts', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated 6 content variants across 3 message angles', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> scheduled A/B test across 2-week window', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up auto-promotion to winner with significance threshold', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>A/B experiment live</strong> — 6 variants scheduled, auto-promotion configured.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'First variants post Monday. Results with statistical significance expected by Day 10.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 3 distinct message angles driving above-average engagement in your top posts. Running a systematic A/B experiment — with auto-promotion to the winner — typically improves reach 25-40% without producing more content.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-variants', 'configure-test', 'auto-promote', 'track-experiment'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
