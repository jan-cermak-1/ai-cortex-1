const FLOW_MCDONALDS_UGC_SCALE = {
  id: 'mcdonalds-ugc-scale',
  name: 'UGC at Scale',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '120K monthly food photos — top 500 curated',
    description: [
      '<strong>120,000 customer food photos</strong> posted monthly with your hashtags.',
      'Cortex classifies by product, sentiment, and visual quality — curated <strong>top 500</strong> for website galleries, rights requests sent, best UGC auto-published to brand channels.'
    ],
    completedDescription: ['UGC at scale active — top 500 curated, rights requested, best content auto-published to brand channels.'],
    footer: 'This supports your goal: Turn customer content into scalable marketing asset',
    checkboxItems: [
      { action: 'classify-ugc', label: 'Classify 120K posts by product, sentiment, quality' },
      { action: 'curate-500', label: 'Curate top 500 for website galleries' },
      { action: 'rights-publish', label: 'Request rights and auto-publish best UGC to brand channels' }
    ],
    moreIdeasPool: [
      { action: 'product-tags', label: 'Auto-tag UGC by product for campaign use' },
      { action: 'sentiment-alerts', label: 'Alert on negative UGC requiring response' }
    ]
  },
  decisionItems: [
    { key: 'curated', label: 'Top 500 UGC curated for galleries', href: 'ugc-albums.html' },
    { key: 'published', label: 'Best UGC auto-published to channels', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> classified 120K monthly posts by product and quality', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> curated top 500 and sent rights requests', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC at Scale</strong> — 120K/month. Top 500 curated, rights in progress.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '120,000 customer food photos posted monthly with your hashtags. I classified by product, sentiment, and visual quality — curated <strong>top 500</strong> for galleries, sent rights requests, and auto-publish best UGC to brand channels.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['classify-ugc', 'curate-500', 'rights-publish'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
