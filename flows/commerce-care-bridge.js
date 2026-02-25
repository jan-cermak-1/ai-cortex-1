const FLOW_COMMERCE_CARE_BRIDGE = {
  id: 'commerce-care-bridge',
  name: 'Commerce-Care Bridge',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Commerce + Care: Defective product complaint resolved',
    description: [
      'A customer complained on Instagram about a defective product. Cortex bridged Commerce and Care clouds: pulled purchase history, checked return policy, initiated return process, and sent proactive care response — all in one automated workflow.',
      'Resolution time: 4 minutes. Customer received return label and apology before agent even opened the case.'
    ],
    completedDescription: ['Commerce-Care bridge active — purchase history, return policy, return initiation, and proactive response in one workflow.'],
    footer: 'This supports your goal: Resolve commerce-related care issues without handoffs',
    checkboxItems: [
      { action: 'enable-bridge', label: 'Enable Commerce-Care bridge for product complaints' },
      { action: 'auto-return', label: 'Auto-initiate return for eligible defective claims' },
      { action: 'proactive-response', label: 'Send proactive response with return label' }
    ],
    moreIdeasPool: [
      { action: 'refund-flow', label: 'Add refund eligibility check to bridge' }
    ]
  },
  decisionItems: [
    { key: 'bridge', label: 'Commerce-Care bridge enabled', href: 'care-inbox.html' },
    { key: 'return', label: 'Return auto-initiation configured', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> bridged Commerce and Care for defective product complaint', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> initiated return and sent proactive response in 4 min', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Commerce-Care bridge:</strong> Defective product complaint — purchase pulled, return initiated, response sent in 4 min.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Instagram complaint about defective product. I bridged Commerce and Care: pulled purchase history, checked return policy, initiated return, and sent proactive response with return label. Resolution in 4 minutes — before the agent opened the case.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-bridge', 'auto-return', 'proactive-response'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
