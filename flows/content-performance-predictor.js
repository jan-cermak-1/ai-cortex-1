const FLOW_CONTENT_PERFORMANCE_PREDICTOR = {
  id: 'content-performance-predictor',
  name: 'Content Performance Predictor',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '5 posts scored before publish — 2 need optimization',
    description: [
      'Cortex scored each of your 5 campaign posts for predicted engagement (Low/Medium/High) based on historical patterns.',
      'Results: Post 1 High (4.2% predicted), Post 2 Medium (2.8%), Post 3 Low (1.4%), Post 4 High (3.9%), Post 5 Low (1.2%). Recommend optimizing Posts 3 and 5 before publishing — weak headline clarity, low visual contrast, and suboptimal posting time.'
    ],
    completedDescription: ['Scoring complete — 2 posts optimized, 5 posts ready for publish with predicted performance.'],
    footer: 'This supports your goal: Publish only high-quality content with predicted engagement',
    checkboxItems: [
      { action: 'optimize-post3', label: 'Apply AI suggestions to optimize Post 3 (headline, visual)' },
      { action: 'optimize-post5', label: 'Apply AI suggestions to optimize Post 5 (time, CTA)' },
      { action: 'reschedule-posts', label: 'Reschedule Posts 3 and 5 to optimal posting times' }
    ],
    moreIdeasPool: [
      { action: 'ab-test', label: 'A/B test Post 3 headline before full publish' },
      { action: 'visual-refresh', label: 'Request new visual for Post 5 from creative team' }
    ]
  },
  decisionItems: [
    { key: 'optimized', label: '2 posts optimized', href: 'publisher-calendar.html' },
    { key: 'rescheduled', label: 'Posts rescheduled to optimal times', href: 'publisher-calendar.html' },
    { key: 'scores', label: '5 posts scored and ready', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> optimized Posts 3 and 5 before publish', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> rescheduled 2 posts to optimal times', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> scored 5 posts — 2 Low, 2 Medium, 2 High predicted', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Pre-publish scores:</strong> 5 posts. 2 Low (Posts 3, 5). Optimize before publish.', time: '4 min ago', unread: true },
    { icon: 'activity', text: 'Post 3: 1.4% predicted. Post 5: 1.2%. Weak headline, visual, timing.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I scored your 5 campaign posts before publish. Post 1 and 4 predicted High — 4.2% and 3.9%. Posts 3 and 5 predicted Low — 1.4% and 1.2%. Weak headline clarity, visual contrast, and suboptimal timing. I recommend optimizing those two before publishing.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['optimize-post3', 'optimize-post5', 'reschedule-posts'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
