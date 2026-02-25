const FLOW_MULTI_AGENT_CARE_RESOLUTION = {
  id: 'multi-agent-care-resolution',
  name: 'Multi-Agent Care Resolution',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Complex multi-system case: order + payment + logistics',
    description: [
      'A high-value customer (LTV: $12,400) has a complex case involving 3 systems: their order shows "delivered" in OMS but they claim non-receipt; payment was charged; and 2 previous contacts went unresolved.',
      'This requires coordinated resolution across Order Management, Payment, and Logistics — plus proactive retention actions. I can orchestrate this end-to-end.'
    ],
    completedDescription: ['Multi-system case resolved — OMS discrepancy found, replacement ordered, payment reviewed, and loyalty gesture applied.'],
    footer: 'This supports your goal: Resolve high-value customer cases end-to-end within 2 hours with full cross-system orchestration',
    checkboxItems: [
      { action: 'investigate-oms', label: 'Pull full delivery history from OMS and logistics provider' },
      { action: 'payment-review', label: 'Review payment record and flag for potential credit/refund' },
      { action: 'order-replacement', label: 'Initiate replacement order with expedited shipping' },
      { action: 'retention-gesture', label: 'Apply loyalty gesture: $50 credit + handwritten apology card' }
    ],
    moreIdeasPool: [
      { action: 'escalate-manager', label: 'Escalate to Customer Success Manager for personal follow-up call' },
      { action: 'case-summary', label: 'Generate complete case summary for customer and internal audit trail' },
      { action: 'prevent-recurrence', label: 'Flag account for enhanced monitoring to prevent future service failures' }
    ]
  },
  decisionItems: [
    { key: 'replacement', label: 'Replacement order initiated with expedited shipping', href: 'care-inbox.html' },
    { key: 'credit', label: '$50 loyalty credit applied to account', href: 'care-inbox.html' },
    { key: 'summary', label: 'Case summary generated for audit trail', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> investigated OMS — GPS shows delivery to wrong address', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> initiated replacement order with 2-day expedited shipping', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> applied $50 loyalty credit to customer account', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> orchestrated resolution across OMS, Payment, and Logistics systems', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Complex case resolved</strong> — replacement shipped, $50 credit applied, customer notified.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'OMS investigation found: GPS data shows delivery to neighbor\'s address.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'High-value customer ($12,400 LTV) has a complex case spanning 3 systems: OMS shows delivered, customer says non-received, 2 previous contacts went unresolved. I can orchestrate end-to-end resolution across all connected systems.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['investigate-oms', 'payment-review', 'order-replacement', 'retention-gesture'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
