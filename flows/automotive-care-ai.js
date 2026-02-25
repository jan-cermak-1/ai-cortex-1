const FLOW_AUTOMOTIVE_CARE_AI = {
  id: 'automotive-care-ai',
  name: 'Automotive Care AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Test drive campaign: 2,400 DMs classified and routed',
    description: [
      'Your 3-day test drive campaign generated 2,400 social DMs and comments. Cortex classified each by intent: 847 booking requests, 612 price inquiries, 234 complaints, 707 general interest.',
      'Each routed to the right team — dealer for bookings, national for complaints, sales for price. 78% responded within 2 hours.'
    ],
    completedDescription: ['2,400 test drive DMs classified and routed — booking, price, complaint, general interest. 78% responded within 2 hours.'],
    footer: 'This supports your goal: Scale test drive campaigns without drowning in manual triage',
    checkboxItems: [
      { action: 'apply-classification', label: 'Apply intent classification to all test drive DMs' },
      { action: 'route-dealer', label: 'Route booking requests to dealer network' },
      { action: 'escalate-complaints', label: 'Escalate complaints to national team' }
    ],
    moreIdeasPool: [
      { action: 'dealer-dashboard', label: 'Build dealer-specific response dashboard' }
    ]
  },
  decisionItems: [
    { key: 'classification', label: 'Intent classification active', href: 'care-inbox.html' },
    { key: 'routing', label: 'Dealer/national routing configured', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> classified 2,400 DMs by intent', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> routed 847 booking requests to dealers', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Test drive surge handled:</strong> 2,400 DMs — 847 bookings, 612 price, 234 complaints. 78% responded in 2 hours.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your 3-day test drive campaign generated 2,400 DMs. I classified them: 847 booking requests, 612 price inquiries, 234 complaints, 707 general interest. Routed each to the right team — dealer, national, or sales. 78% responded within 2 hours.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-classification', 'route-dealer', 'escalate-complaints'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
