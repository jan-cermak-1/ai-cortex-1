const FLOW_COMPETITIVE_BENCHMARK_ALERT = {
  id: 'competitive-benchmark-alert',
  name: 'Competitive Benchmark Alert',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Competitor benchmark crossed — you\'re now #2 in category',
    description: [
      'I track your top 5 competitors continuously. This week, <strong>Competitor B surpassed you</strong> in 3 key engagement metrics: average post engagement rate, story reach, and community growth rate.',
      'This is the first time in 8 months your brand has dropped to #2. I\'ve identified the gap drivers.'
    ],
    completedDescription: ['Competitive response plan activated — gap analysis complete, response actions scheduled, and weekly benchmark tracking enhanced.'],
    footer: 'This supports your goal: Maintain #1 position in social media performance within your category',
    checkboxItems: [
      { action: 'gap-analysis', label: 'Generate detailed gap analysis: what Competitor B is doing differently' },
      { action: 'content-response', label: 'Schedule 3 high-impact posts targeting categories where gap is largest' },
      { action: 'enhance-tracking', label: 'Enhance weekly competitor benchmark tracking with new alert thresholds' },
      { action: 'brief-leadership', label: 'Send competitive brief to leadership with recommended actions' }
    ],
    moreIdeasPool: [
      { action: 'listening-expand', label: 'Expand Listening to capture Competitor B\'s content performance signals' },
      { action: 'creative-analysis', label: 'Run AI analysis on Competitor B\'s top 20 posts for creative patterns' },
      { action: 'influencer-overlap', label: 'Identify influencers working with Competitor B for potential recruitment' }
    ]
  },
  decisionItems: [
    { key: 'analysis', label: 'Competitive gap analysis generated', href: 'unified-analytics.html' },
    { key: 'posts', label: '3 high-impact response posts scheduled', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'Enhanced benchmark tracking with new alert thresholds', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated competitive gap analysis vs Competitor B', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> scheduled 3 high-impact posts to close engagement gap', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected rank drop: #1 → #2 in category engagement metrics', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Rank alert:</strong> Competitor B surpassed you in 3 metrics — gap analysis ready.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'First time in 8 months at #2. Response plan activated.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Competitive alert: Competitor B just surpassed you in 3 engagement metrics — the first time in 8 months you\'re not #1 in your category. I\'ve identified the gap drivers and prepared a response plan.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['gap-analysis', 'content-response', 'enhance-tracking', 'brief-leadership'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
