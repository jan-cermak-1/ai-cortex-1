const FLOW_CONTENT_REPURPOSER = {
  id: 'content-repurposer',
  name: 'Content Repurposer',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Top 12 blog articles → social micro-content',
    description: [
      'Cortex identified your <strong>top 12 blog articles</strong> and transformed each into social-ready micro-content.',
      'Output: 3 Twitter threads, 4 LinkedIn carousels, 5 Instagram caption series. Publishes to draft in one action.'
    ],
    completedDescription: ['12 articles repurposed: 3 Twitter threads, 4 LinkedIn carousels, 5 IG series in drafts.'],
    footer: 'This supports your goal: Maximize content ROI',
    checkboxItems: [
      { action: 'create-twitter', label: 'Create 3 Twitter threads from top articles' },
      { action: 'create-linkedin', label: 'Create 4 LinkedIn carousels' },
      { action: 'create-instagram', label: 'Create 5 Instagram caption series' }
    ],
    moreIdeasPool: [
      { action: 'custom-format', label: 'Customize output format per platform' },
      { action: 'schedule-batch', label: 'Schedule all repurposed content' }
    ]
  },
  decisionItems: [
    { key: 'drafts-created', label: '12 repurposed drafts in Publisher', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 12 repurposed drafts in Publisher', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> transformed top 12 blog articles to micro-content', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Content Repurposed</strong> — 3 Twitter threads, 4 LinkedIn carousels, 5 IG series in drafts', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I took your top 12 blog articles and turned them into social micro-content: 3 Twitter threads, 4 LinkedIn carousels, 5 Instagram caption series. All ready in Publisher drafts.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-twitter', 'create-linkedin', 'create-instagram'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
