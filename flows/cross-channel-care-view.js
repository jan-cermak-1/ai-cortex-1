const FLOW_CROSS_CHANNEL_CARE_VIEW = {
  id: 'cross-channel-care-view',
  name: 'Cross-Channel Care View',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '156 customers contacted via multiple channels',
    description: [
      'Cortex correlated care conversations across Instagram, X, Facebook Messenger, and email.',
      'Created <strong>unified customer journey view</strong>. Identified <strong>156 customers</strong> who contacted via 2+ channels in the past 30 days.'
    ],
    completedDescription: ['Cross-channel view built: 156 multi-channel customers identified with unified journey.'],
    footer: 'This supports your goal: Deliver seamless omni-channel CX',
    checkboxItems: [
      { action: 'build-journey', label: 'Build unified journey view for 156 customers' },
      { action: 'flag-frustrated', label: 'Flag 34 customers with 3+ channel contacts (likely frustrated)' },
      { action: 'sync-crm', label: 'Sync enriched profiles to CRM' }
    ],
    moreIdeasPool: [
      { action: 'journey-analytics', label: 'Create cross-channel journey analytics board' },
      { action: 'handoff-optimization', label: 'Optimize handoff between channels' }
    ]
  },
  decisionItems: [
    { key: 'journey-built', label: '156 unified journeys created', href: 'care-inbox.html' },
    { key: 'crm-synced', label: 'Profiles synced to CRM', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> built unified journey view for 156 customers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> flagged 34 frustrated multi-channel customers', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Cross-Channel Insight</strong> — 156 customers used 2+ channels in 30 days', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I correlated care conversations across Instagram, X, Facebook Messenger, and email. Found 156 customers who contacted via multiple channels in the past 30 days — 34 of them used 3+ channels and may be frustrated.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['build-journey', 'flag-frustrated', 'sync-crm'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
