const FLOW_ENGAGEMENT_RATE_RECOVERY = {
  id: 'engagement-rate-recovery',
  name: 'Engagement Rate Recovery',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Instagram engagement: 3.2% → 1.8% in 6 weeks',
    description: [
      'Your Instagram engagement rate dropped from <strong>3.2% to 1.8%</strong> over 6 weeks.',
      'Cortex diagnosed 3 root causes: posting frequency, content mix, caption length. Proposed a recovery content plan.'
    ],
    completedDescription: ['Recovery plan applied: 3 root causes addressed, content plan created.'],
    footer: 'This supports your goal: Restore engagement to 3%+',
    checkboxItems: [
      { action: 'fix-frequency', label: 'Adjust posting frequency (recommend 5–6/week)' },
      { action: 'rebalance-mix', label: 'Rebalance content mix (more Reels, less static)' },
      { action: 'optimize-captions', label: 'Optimize caption length (shorter, punchier)' }
    ],
    moreIdeasPool: [
      { action: 'recovery-calendar', label: 'Generate 4-week recovery content calendar' },
      { action: 'benchmark-compare', label: 'Compare to industry benchmark' }
    ]
  },
  decisionItems: [
    { key: 'plan-applied', label: 'Recovery plan applied', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> diagnosed 3 root causes of engagement drop', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created recovery content plan', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Engagement Alert</strong> — IG dropped 3.2%→1.8%, recovery plan ready', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your Instagram engagement dropped from 3.2% to 1.8% over 6 weeks. I diagnosed 3 root causes: posting frequency, content mix, and caption length. Here\'s a recovery plan.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['fix-frequency', 'rebalance-mix', 'optimize-captions'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
