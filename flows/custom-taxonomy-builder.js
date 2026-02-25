const FLOW_CUSTOM_TAXONOMY_BUILDER = {
  id: 'custom-taxonomy-builder',
  name: 'Custom Taxonomy Builder',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Custom topic taxonomy built from 50,000 posts',
    description: [
      'Cortex analyzed <strong>50,000 posts</strong> to build a custom topic taxonomy for your industry.',
      'Generated 8 main themes, 34 subtopics, and configured smart classification rules automatically. Top themes: Product Features (22%), Customer Support (18%), Pricing (14%), Sustainability (11%), Competitor Comparison (9%), Brand Values (8%), Events (7%), UGC/Reviews (11%).'
    ],
    completedDescription: ['Taxonomy deployed — 8 themes, 34 subtopics, and classification rules active in Listening.'],
    footer: 'This supports your goal: Structure unstructured social data for actionable insights',
    checkboxItems: [
      { action: 'deploy-taxonomy', label: 'Deploy taxonomy to Listening with classification rules' },
      { action: 'create-dashboard', label: 'Create Unified Analytics dashboard by theme' },
      { action: 'export-schema', label: 'Export taxonomy schema for team review' }
    ],
    moreIdeasPool: [
      { action: 'refine-subtopics', label: 'Refine 5 subtopics with low confidence scores' },
      { action: 'alert-themes', label: 'Set up alerts for theme volume spikes' }
    ]
  },
  decisionItems: [
    { key: 'taxonomy', label: '8 themes, 34 subtopics deployed', href: 'listening.html' },
    { key: 'dashboard', label: 'Theme-based dashboard created', href: 'unified-analytics.html' },
    { key: 'schema', label: 'Taxonomy schema exported', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> deployed taxonomy with 8 themes and 34 subtopics', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created theme-based analytics dashboard', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 50,000 posts to build custom taxonomy', time: '8 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Taxonomy ready:</strong> 8 themes, 34 subtopics from 50K posts. Classification rules configured.', time: '8 min ago', unread: true },
    { icon: 'activity', text: 'Top themes: Product 22%, Support 18%, Pricing 14%, Sustainability 11%.', time: '7 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed 50,000 posts and built a custom topic taxonomy: 8 main themes, 34 subtopics, with smart classification rules. Top themes are Product Features 22%, Customer Support 18%, Pricing 14%, and Sustainability 11%.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['deploy-taxonomy', 'create-dashboard', 'export-schema'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
