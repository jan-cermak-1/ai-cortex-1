const FLOW_COMPETITOR_BENCHMARK_AI = {
  id: 'competitor-benchmark-ai',
  name: 'Competitor Benchmark AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Automated benchmark: 5 rivals analyzed',
    description: [
      'Cortex ran automated competitor benchmarking for <strong>5 rivals</strong> — comparing engagement rate, share of voice, and content cadence.',
      'I\'ve surfaced 3 strategic gaps to exploit this quarter: Competitor A has 2.3x your engagement on Reels but weak Stories; Competitor B posts 40% less — opportunity for frequency; Competitor C has 12% SOV lead in your core category.'
    ],
    completedDescription: ['Benchmark complete — competitive dashboard updated, 3 strategic gaps documented, and quarterly action plan generated.'],
    footer: 'This supports your goal: Maintain competitive intelligence and identify quarterly growth opportunities',
    checkboxItems: [
      { action: 'update-dashboard', label: 'Update competitive benchmark dashboard in Unified Analytics' },
      { action: 'document-gaps', label: 'Document 3 strategic gaps with recommended actions' },
      { action: 'create-plan', label: 'Generate quarterly competitive response plan' }
    ],
    moreIdeasPool: [
      { action: 'reels-strategy', label: 'Create Reels content strategy to close engagement gap' },
      { action: 'sov-campaign', label: 'Propose SOV campaign to close 12% gap with Competitor C' }
    ]
  },
  decisionItems: [
    { key: 'dashboard', label: 'Competitive dashboard updated', href: 'unified-analytics.html' },
    { key: 'gaps', label: '3 strategic gaps documented', href: 'unified-analytics.html' },
    { key: 'plan', label: 'Quarterly response plan generated', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> updated competitive benchmark dashboard', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> documented 3 strategic gaps with actions', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> completed benchmark of 5 competitors', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Benchmark complete:</strong> 5 rivals analyzed. 3 strategic gaps to exploit.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'Gap 1: Reels engagement 2.3x yours. Gap 2: Competitor B posts 40% less.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'ve completed automated benchmarking for 5 rivals. Three strategic gaps to exploit: Competitor A has 2.3x your Reels engagement, Competitor B posts 40% less — frequency opportunity — and Competitor C leads by 12% SOV in your core category.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['update-dashboard', 'document-gaps', 'create-plan'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
