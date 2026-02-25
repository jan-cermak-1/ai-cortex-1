const FLOW_AI_CONTENT_MODERATION = {
  id: 'ai-content-moderation',
  name: 'AI Content Moderation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '50,000 comments/day — 98.4% classification accuracy',
    description: [
      'Configure AI content moderation for your community channels: detect hate speech, spam, competitor mentions, and policy violations in real time.',
      'Processing 50,000 comments/day with 98.4% classification accuracy. 2,340 policy violations flagged today. Auto-action rules: hide, flag, or escalate.'
    ],
    completedDescription: ['AI content moderation active — hate speech, spam, competitor, policy violations. 50K comments/day, 98.4% accuracy.'],
    footer: 'This supports your goal: Keep community safe at scale',
    checkboxItems: [
      { action: 'enable-moderation', label: 'Enable AI content moderation' },
      { action: 'configure-rules', label: 'Configure detection: hate speech, spam, competitor, policy' },
      { action: 'set-actions', label: 'Set auto-actions: hide, flag, escalate' }
    ],
    moreIdeasPool: [
      { action: 'custom-policy', label: 'Add custom policy rules' }
    ]
  },
  decisionItems: [
    { key: 'moderation', label: 'Moderation active', href: 'care-inbox.html' },
    { key: 'accuracy', label: '98.4% accuracy', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured AI content moderation', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> processing 50,000 comments/day', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Content moderation:</strong> 50K comments/day. 98.4% accuracy. 2,340 violations flagged today.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I configured AI content moderation for your community: hate speech, spam, competitor mentions, policy violations — real-time detection. Processing 50,000 comments/day with 98.4% classification accuracy. 2,340 policy violations flagged today. Auto-actions: hide, flag, or escalate.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-moderation', 'configure-rules', 'set-actions'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
