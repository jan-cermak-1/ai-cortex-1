const FLOW_AI_CAPTION_OPTIMIZER = {
  id: 'ai-caption-optimizer',
  name: 'Caption Optimizer',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '28 scheduled posts — 8 need caption rewrite',
    description: [
      'You have <strong>28 scheduled posts</strong> for next week. Cortex scored captions for predicted engagement.',
      'Rewrote the <strong>bottom 8</strong> with platform-native language: casual for TikTok, professional for LinkedIn, visual-first for Instagram.'
    ],
    completedDescription: ['8 captions rewritten with platform-native language: +23% predicted engagement.'],
    footer: 'This supports your goal: Maximize engagement per post',
    checkboxItems: [
      { action: 'rewrite-tiktok', label: 'Rewrite 3 TikTok captions (casual tone)' },
      { action: 'rewrite-linkedin', label: 'Rewrite 2 LinkedIn captions (professional tone)' },
      { action: 'rewrite-instagram', label: 'Rewrite 3 Instagram captions (visual-first)' }
    ],
    moreIdeasPool: [
      { action: 'score-all', label: 'Score all 28 captions for engagement' },
      { action: 'apply-brand-voice', label: 'Apply brand voice to rewrites' }
    ]
  },
  decisionItems: [
    { key: 'captions-updated', label: '8 captions rewritten', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> rewrote 8 captions for platform-native engagement', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> scored 28 scheduled posts', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Caption Optimization</strong> — 8 of 28 posts rewritten, +23% predicted engagement', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I scored your 28 scheduled posts for next week. The bottom 8 captions underperform — I rewrote them with platform-native language: casual for TikTok, professional for LinkedIn, visual-first for Instagram.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['rewrite-tiktok', 'rewrite-linkedin', 'rewrite-instagram'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
