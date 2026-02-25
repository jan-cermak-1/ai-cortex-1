const FLOW_UGC_TO_COMMERCE = {
  id: 'ugc-to-commerce',
  name: 'UGC to Commerce',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '89 top UGC posts → shoppable content on PDPs',
    description: [
      'Cortex identified 89 top UGC posts featuring your products, requested rights, and published them as shoppable content on PDPs and in email campaigns.',
      'Estimated +14% conversion lift based on similar products. 67 rights requests sent, 34 already approved.'
    ],
    completedDescription: ['89 UGC posts identified — rights requested, shoppable content on PDPs and email. Est. +14% conversion lift.'],
    footer: 'This supports your goal: Turn social proof into commerce conversion',
    checkboxItems: [
      { action: 'request-rights', label: 'Request rights for 89 UGC posts' },
      { action: 'publish-pdp', label: 'Publish shoppable UGC on product pages' },
      { action: 'add-email', label: 'Add UGC to email campaigns' }
    ],
    moreIdeasPool: [
      { action: 'rights-tracker', label: 'Build rights approval tracking dashboard' }
    ]
  },
  decisionItems: [
    { key: 'ugc', label: '89 UGC posts identified', href: 'ugc-albums.html' },
    { key: 'commerce', label: 'Shoppable content on PDPs', href: 'content-collection.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 89 top UGC posts for products', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent 67 rights requests, 34 approved', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>89 UGC → Commerce:</strong> Rights requested. Est. +14% conversion. 34 approved, ready for PDPs.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I identified 89 top UGC posts featuring your products, requested rights, and prepared them as shoppable content for PDPs and email. 67 rights requests sent, 34 approved. Estimated +14% conversion lift based on similar products.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['request-rights', 'publish-pdp', 'add-email'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
