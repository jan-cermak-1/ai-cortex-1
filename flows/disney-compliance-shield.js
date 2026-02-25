const FLOW_DISNEY_COMPLIANCE_SHIELD = {
  id: 'disney-compliance-shield',
  name: 'Enterprise Compliance Shield',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34 problematic posts blocked this week',
    description: [
      '<strong>180 social media managers</strong> across 24 brands publishing daily.',
      'Cortex pre-screens all content for legal risk, IP infringement, and regulatory compliance — <strong>blocked 34 problematic posts</strong> this week before they went live.'
    ],
    completedDescription: ['Enterprise compliance shield active — 34 posts blocked this week. Legal, IP, and regulatory checks enforced.'],
    footer: 'This supports your goal: Zero compliance incidents across 24 brands',
    checkboxItems: [
      { action: 'pre-screen', label: 'Pre-screen all scheduled content for legal and IP risk' },
      { action: 'block-flagged', label: 'Block 34 flagged posts and notify authors' },
      { action: 'compliance-report', label: 'Generate weekly compliance report for legal' }
    ],
    moreIdeasPool: [
      { action: 'ip-whitelist', label: 'Configure IP and trademark whitelist' },
      { action: 'approval-escalation', label: 'Escalate high-risk content to legal review' }
    ]
  },
  decisionItems: [
    { key: 'blocked', label: '34 posts blocked and authors notified', href: 'publisher-calendar.html' },
    { key: 'report', label: 'Weekly compliance report generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> pre-screened content across 24 brands', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> blocked 34 posts for legal and IP risk', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Compliance Shield</strong> — 34 posts blocked this week. 180 managers, 24 brands.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '180 social media managers across 24 brands. I pre-screen all content for legal risk, IP infringement, and regulatory compliance — <strong>blocked 34 problematic posts</strong> this week before they went live.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['pre-screen', 'block-flagged', 'compliance-report'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
