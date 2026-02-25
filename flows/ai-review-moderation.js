const FLOW_AI_REVIEW_MODERATION = {
  id: 'ai-review-moderation',
  name: 'AI Review Moderation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '4,200 new reviews — 47 need response',
    description: [
      '<strong>4,200 new product reviews</strong> accumulated since last month.',
      'Cortex classified them into <strong>8 sentiment themes</strong>, flagged <strong>47 requiring response</strong>, and drafted personalized reply templates for each theme.'
    ],
    completedDescription: ['Review moderation complete: 47 responses drafted, 8 themes classified.'],
    footer: 'This supports your goal: Respond to all negative reviews within 48 hours',
    checkboxItems: [
      { action: 'apply-themes', label: 'Apply 8 sentiment theme classifications' },
      { action: 'flag-47', label: 'Flag 47 reviews requiring response' },
      { action: 'draft-templates', label: 'Draft personalized reply templates per theme' }
    ],
    moreIdeasPool: [
      { action: 'theme-report', label: 'Generate sentiment theme report' },
      { action: 'auto-respond', label: 'Configure auto-response for positive reviews' }
    ]
  },
  decisionItems: [
    { key: 'themes-applied', label: '8 themes applied to 4,200 reviews', href: 'content-collection.html' },
    { key: '47-flagged', label: '47 reviews flagged for response', href: 'content-collection.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> classified 4,200 reviews into 8 sentiment themes', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> drafted reply templates for 47 flagged reviews', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Review Moderation</strong> — 4,200 reviews, 47 need response, templates ready', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '4,200 new product reviews since last month. I classified them into 8 sentiment themes, flagged 47 that need a response, and drafted personalized reply templates for each theme.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-themes', 'flag-47', 'draft-templates'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
