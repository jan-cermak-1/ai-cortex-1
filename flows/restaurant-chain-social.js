const FLOW_RESTAURANT_CHAIN_SOCIAL = {
  id: 'restaurant-chain-social',
  name: 'Restaurant Chain Social AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 locations flagged: low reviews + high complaints',
    description: [
      '340 restaurant locations, each with social profiles. Cortex detected 12 locations with review scores below 3.8★ and high complaint volume.',
      'Root causes surfaced: delivery (5 locations), quality (4), service (3). Escalations auto-routed to franchise ops. 8 locations already have action plans.'
    ],
    completedDescription: ['12 at-risk locations identified — delivery, quality, service root causes. Escalations routed to franchise ops.'],
    footer: 'This supports your goal: Protect brand reputation across franchise network',
    checkboxItems: [
      { action: 'flag-locations', label: 'Flag 12 locations to franchise ops' },
      { action: 'surface-causes', label: 'Surface root causes: delivery, quality, service' },
      { action: 'route-escalations', label: 'Auto-route escalations to franchise ops' }
    ],
    moreIdeasPool: [
      { action: 'location-dashboard', label: 'Build location-level reputation dashboard' }
    ]
  },
  decisionItems: [
    { key: 'locations', label: '12 locations flagged', href: 'care-inbox.html' },
    { key: 'ops', label: 'Escalations routed to ops', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> detected 12 locations below 3.8★', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> surfaced root causes: delivery, quality, service', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>12 at-risk locations:</strong> Below 3.8★ + high complaints. Root causes: delivery (5), quality (4), service (3).', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Across 340 locations, I detected 12 with review scores below 3.8★ and high complaint volume. Root causes: delivery (5 locations), quality (4), service (3). Escalations auto-routed to franchise ops. 8 locations already have action plans.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-locations', 'surface-causes', 'route-escalations'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
