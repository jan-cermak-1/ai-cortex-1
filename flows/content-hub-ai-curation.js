const FLOW_CONTENT_HUB_AI_CURATION = {
  id: 'content-hub-ai-curation',
  name: 'Content Hub AI Curation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '8,400 assets: 3,200 untagged, now AI-tagged',
    description: [
      'Content Hub has 8,400 assets. Cortex tagged all 3,200 untagged assets by AI — detects product, theme, channel suitability, and quality score.',
      'Created 12 curated collections for upcoming campaigns. Tagging accuracy: 94% on sample audit.'
    ],
    completedDescription: ['3,200 untagged assets AI-tagged. 12 curated collections created for upcoming campaigns.'],
    footer: 'This supports your goal: Make Content Hub searchable and campaign-ready at scale',
    checkboxItems: [
      { action: 'tag-untagged', label: 'AI-tag 3,200 untagged assets' },
      { action: 'detect-meta', label: 'Detect product, theme, channel, quality per asset' },
      { action: 'create-collections', label: 'Create 12 curated collections for campaigns' }
    ],
    moreIdeasPool: [
      { action: 'quality-filter', label: 'Filter by quality score for campaign selection' }
    ]
  },
  decisionItems: [
    { key: 'tagged', label: '3,200 assets tagged', href: 'content-collection.html' },
    { key: 'collections', label: '12 collections created', href: 'content-collection.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> tagged 3,200 untagged assets', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created 12 curated collections', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Content Hub:</strong> 3,200 untagged → AI-tagged. 12 collections. 94% tagging accuracy.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Content Hub has 8,400 assets — 3,200 were untagged. I AI-tagged all of them: product, theme, channel suitability, quality score. Created 12 curated collections for upcoming campaigns. Tagging accuracy: 94% on sample audit.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['tag-untagged', 'detect-meta', 'create-collections'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
