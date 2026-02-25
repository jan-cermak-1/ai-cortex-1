const FLOW_SHARE_OF_VOICE_TRACKER = {
  id: 'share-of-voice-tracker',
  name: 'Share of Voice Tracker',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'SOV dropped 34% → 27% — Competitor A gained 6 points',
    description: [
      'Your brand\'s share of voice dropped from <strong>34% to 27%</strong> this month while Competitor A gained 6 points.',
      'Cortex diagnosed the cause: Competitor A\'s PR push around their sustainability initiative drove 2.3x normal mention volume. I\'ve proposed a response content strategy: 5 thought-leadership posts on your ESG program, 3 UGC amplifications, and a paid boost recommendation for $4,200 to reclaim reach.'
    ],
    completedDescription: ['Response strategy activated — 5 posts drafted, listening query updated, and SOV tracking board refreshed.'],
    footer: 'This supports your goal: Maintain category leadership and respond to competitor SOV gains within 1 week',
    checkboxItems: [
      { action: 'draft-posts', label: 'Draft 5 thought-leadership posts on ESG program' },
      { action: 'update-listening', label: 'Update Listening query to track competitor sustainability mentions' },
      { action: 'refresh-board', label: 'Refresh SOV tracking board with weekly benchmarks' }
    ],
    moreIdeasPool: [
      { action: 'paid-boost', label: 'Create paid boost plan ($4,200) for SOV recovery' },
      { action: 'ugc-amplify', label: 'Amplify 3 UGC posts with sustainability angle' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '5 response posts drafted', href: 'publisher-calendar.html' },
    { key: 'listening', label: 'Listening query updated', href: 'listening.html' },
    { key: 'board', label: 'SOV board refreshed', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted 5 ESG thought-leadership posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> updated Listening for competitor sustainability tracking', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> diagnosed SOV drop — Competitor A PR push drove 2.3x mentions', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>SOV alert:</strong> 34% → 27%. Competitor A +6 points from sustainability PR.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'Response strategy: 5 ESG posts, 3 UGC amplifications, $4,200 paid boost.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your share of voice dropped from 34% to 27% this month — Competitor A gained 6 points. Root cause: their sustainability PR push drove 2.3x normal mention volume. I\'ve proposed a response: 5 ESG thought-leadership posts, 3 UGC amplifications, and a $4,200 paid boost to reclaim reach.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['draft-posts', 'update-listening', 'refresh-board'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
