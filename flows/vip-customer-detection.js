const FLOW_VIP_CUSTOMER_DETECTION = {
  id: 'vip-customer-detection',
  name: 'VIP Customer Detection',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 high-value customers identified in your inbox',
    description: [
      'I cross-referenced your inbox with CRM data and found <strong>12 high-value customers</strong> (LTV > $10K) who have open unresolved cases.',
      '3 of them have been waiting for more than 24 hours without a response — this puts their accounts at churn risk.'
    ],
    completedDescription: ['VIP customers prioritized — 12 cases flagged, 3 urgent accounts escalated with priority handling enabled.'],
    footer: 'This supports your goal: Maintain 99% retention rate for high-value accounts and provide white-glove care experience',
    checkboxItems: [
      { action: 'flag-vip-cases', label: 'Flag all 12 VIP customer cases in the Care inbox' },
      { action: 'escalate-urgent', label: 'Immediately escalate 3 accounts waiting 24h+ to senior agents' },
      { action: 'send-apology', label: 'Send personalized apology messages to the 3 urgent accounts' },
      { action: 'setup-vip-rules', label: 'Set up VIP routing rules (CRM LTV threshold: $5K+)' }
    ],
    moreIdeasPool: [
      { action: 'account-manager', label: 'Notify account managers for the 3 at-risk accounts' },
      { action: 'vip-sla', label: 'Create a dedicated VIP SLA profile (1-hour response target)' },
      { action: 'churn-prediction', label: 'Run churn risk score for all flagged accounts' }
    ]
  },
  decisionItems: [
    { key: 'flagged', label: '12 VIP cases flagged in Care inbox', href: 'care-inbox.html' },
    { key: 'escalated', label: '3 urgent accounts with senior agents', href: 'care-inbox.html' },
    { key: 'rules', label: 'VIP routing rules configured (LTV $5K+)', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 12 high-value customers in open cases', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> escalated 3 at-risk VIP accounts to senior agents', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up VIP routing rules based on CRM LTV data', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>VIP alert:</strong> 3 high-value customers waiting 24h+ — escalated now.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'VIP routing rules active. All LTV $5K+ accounts get priority queue.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I cross-referenced your inbox with CRM data and found 12 high-value customers (LTV > $10K) with open cases — 3 have been waiting over 24 hours. This is a churn risk.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-vip-cases', 'escalate-urgent', 'send-apology', 'setup-vip-rules'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
