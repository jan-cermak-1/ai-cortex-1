const FLOW_ECOMMERCE_SOCIAL_CARE = {
  id: 'ecommerce-social-care',
  name: 'eCommerce Social Care',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Order context surfaced for social care conversations',
    description: [
      'Cortex connected 47 Instagram DMs to order data — agents now see order status, delivery date, and purchase history directly in the Care inbox.',
      'Average handle time dropped 40% in pilot: from 8.2 min to 4.9 min per conversation. 89% of "where is my order" queries resolved without agent lookup.'
    ],
    completedDescription: ['Order integration active — agents see order status, delivery date, and purchase history while responding on Instagram.'],
    footer: 'This supports your goal: Reduce AHT and improve first-contact resolution for eCommerce care',
    checkboxItems: [
      { action: 'enable-order-widget', label: 'Enable order context widget in Care inbox' },
      { action: 'train-agents', label: 'Add order lookup training to agent playbook' },
      { action: 'track-aht', label: 'Set AHT baseline and 30-day improvement target' }
    ],
    moreIdeasPool: [
      { action: 'return-flow', label: 'Add return/refund status to order widget' }
    ]
  },
  decisionItems: [
    { key: 'order-widget', label: 'Order widget enabled in Care', href: 'care-inbox.html' },
    { key: 'playbook', label: 'Agent playbook updated', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> connected 47 DMs to order data', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> surfaced order status for 89% of "where is my order" queries', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Order integration ready:</strong> AHT down 40% in pilot — 8.2 min to 4.9 min per conversation.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I connected 47 Instagram DMs to order data. Agents now see order status, delivery date, and purchase history in Care. Pilot results: AHT dropped 40% — from 8.2 min to 4.9 min. 89% of "where is my order" queries resolved without lookup.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-order-widget', 'train-agents', 'track-aht'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
