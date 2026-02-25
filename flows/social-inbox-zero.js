const FLOW_SOCIAL_INBOX_ZERO = {
  id: 'social-inbox-zero',
  name: 'Social Inbox Zero',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '1,247 unread social messages — weekend backlog',
    description: [
      '<strong>1,247 unread social messages</strong> accumulated over the weekend.',
      'Cortex categorized, prioritized, and suggested responses for all. <strong>8 urgent brand reputation items</strong> flagged for immediate human attention.'
    ],
    completedDescription: ['Inbox zero achieved: 1,247 messages categorized, 8 urgent items escalated, response suggestions applied.'],
    footer: 'This supports your goal: Respond to all social messages within 24 hours',
    checkboxItems: [
      { action: 'flag-urgent', label: 'Flag 8 urgent brand reputation items for immediate response' },
      { action: 'apply-suggestions', label: 'Apply AI response suggestions to 892 routine messages' },
      { action: 'categorize-remaining', label: 'Categorize remaining 347 messages by intent' }
    ],
    moreIdeasPool: [
      { action: 'weekend-coverage', label: 'Set up weekend triage automation' },
      { action: 'reputation-alerts', label: 'Configure brand reputation alerts' }
    ]
  },
  decisionItems: [
    { key: 'urgent-flagged', label: '8 urgent items flagged', href: 'care-inbox.html' },
    { key: 'suggestions-applied', label: '892 response suggestions applied', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> flagged 8 urgent brand reputation items', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> applied response suggestions to 892 messages', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> categorized 1,247 weekend messages', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Weekend Backlog</strong> — 1,247 messages, 8 urgent brand items need attention', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your social inbox has 1,247 unread messages from the weekend. I categorized and prioritized them — 8 are urgent brand reputation items that need immediate attention.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-urgent', 'apply-suggestions', 'categorize-remaining'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
