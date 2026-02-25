const FLOW_AUTONOMOUS_CARE_RESOLVER = {
  id: 'autonomous-care-resolver',
  name: 'Autonomous Care Resolver',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '28% deflection via autonomous resolution',
    description: [
      'Cortex identified <strong>34 low-complexity case types</strong> (order status, FAQ, password reset) suitable for bot automation.',
      'Expected deflection: <strong>28% of total care volume</strong> — freeing agents for complex issues.'
    ],
    completedDescription: ['Autonomous resolver configured: 34 case types automated, 28% volume deflection expected.'],
    footer: 'This supports your goal: Reduce average handle time by 25%',
    checkboxItems: [
      { action: 'enable-order-status', label: 'Enable bot for order status inquiries (12% of volume)' },
      { action: 'enable-faq', label: 'Enable bot for FAQ-type questions (9% of volume)' },
      { action: 'enable-password', label: 'Enable bot for password reset flows (7% of volume)' }
    ],
    moreIdeasPool: [
      { action: 'expand-types', label: 'Add 6 more case types to autonomous resolution' },
      { action: 'deflection-dashboard', label: 'Create deflection tracking dashboard' }
    ]
  },
  decisionItems: [
    { key: 'configured', label: '34 case types configured for automation', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured autonomous resolution for 34 case types', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> calculated 28% expected deflection', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Autonomous Care Ready</strong> — 28% deflection expected from 34 case types', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed your care volume and found 34 case types — order status, FAQ, password reset — that can be resolved autonomously. This would deflect 28% of total volume.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-order-status', 'enable-faq', 'enable-password'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
