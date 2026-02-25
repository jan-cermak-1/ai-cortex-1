const FLOW_UGC_TO_PUBLISHER = {
  id: 'ugc-to-publisher',
  name: 'UGC to Publisher',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '23 new UGC submissions with usage rights approved',
    description: [
      'I found <strong>23 new UGC submissions</strong> where customers have granted usage rights. 8 of them feature your hero products and would perform well as organic content.',
      'Here\'s how I can turn them into a publisher-ready content pipeline:'
    ],
    completedDescription: ['UGC pipeline set up — top 5 submissions added to Publisher queue, collection created in Content Hub.'],
    footer: 'This supports your goal: Publish 30% UGC content mix to increase authenticity and reduce production costs',
    checkboxItems: [
      { action: 'create-collection', label: 'Create UGC collection "Customer Stories Q2" in Content Hub' },
      { action: 'select-top5', label: 'Add top 5 highest-quality submissions to Publisher queue' },
      { action: 'add-captions', label: 'Generate captions crediting original creators (@handle)' },
      { action: 'tag-products', label: 'Add product tags to submissions featuring hero products' }
    ],
    moreIdeasPool: [
      { action: 'request-more', label: 'Send permission requests to 10 more high-quality UGC creators' },
      { action: 'ugc-campaign', label: 'Launch UGC campaign hashtag to drive more submissions' },
      { action: 'email-sync', label: 'Export top UGC for email newsletter content' }
    ]
  },
  decisionItems: [
    { key: 'queue', label: '5 UGC posts added to Publisher queue', href: 'publisher-calendar.html' },
    { key: 'collection', label: 'Content Hub collection created (23 items)', href: 'content-feed.html' },
    { key: 'ugc', label: 'All submissions with rights in UGC module', href: 'ugc-albums.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> added 5 top UGC posts to Publisher queue', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created "Customer Stories Q2" collection', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 23 UGC submissions with usage rights', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC pipeline ready</strong> — 5 posts queued, collection created.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '23 UGC submissions with usage rights found this week.', time: '5 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Good news — 23 customers have submitted UGC and granted usage rights this week. 8 feature your hero products and are ready for the feed.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-collection', 'select-top5', 'add-captions', 'tag-products'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
