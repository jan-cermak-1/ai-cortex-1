const FLOW_FINANCE_COMPLIANCE_REVIEW = {
  id: 'finance-compliance-review',
  name: 'Finance Compliance Review',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 scheduled posts need compliance review before publishing',
    description: [
      'I flagged <strong>12 upcoming posts</strong> that mention financial figures, investment performance, or regulatory-adjacent language — these require compliance review before publishing under FINRA/SEC guidelines.',
      '3 of them are scheduled to publish within 24 hours. Routing now prevents costly post-publication compliance issues.'
    ],
    completedDescription: ['Compliance review workflow activated — 12 posts routed to compliance, urgent 3 escalated for same-day review.'],
    footer: 'This supports your goal: Ensure 100% of financial content is compliance-reviewed before publishing',
    checkboxItems: [
      { action: 'flag-posts', label: 'Flag 12 compliance-sensitive posts and remove from publish queue' },
      { action: 'route-urgent', label: 'Route 3 urgent posts (24-hour deadline) to senior compliance officer' },
      { action: 'setup-auto-flag', label: 'Set up automated compliance keyword flagging for all future posts' },
      { action: 'compliance-templates', label: 'Generate pre-approved financial content templates for common scenarios' }
    ],
    moreIdeasPool: [
      { action: 'audit-history', label: 'Run compliance audit on last 6 months of published financial content' },
      { action: 'training', label: 'Generate compliance training guide for social media team' },
      { action: 'approved-vocabulary', label: 'Create approved financial vocabulary list for content creators' }
    ]
  },
  decisionItems: [
    { key: 'flagged', label: '12 posts flagged and held from publishing queue', href: 'publisher-calendar.html' },
    { key: 'urgent', label: '3 urgent posts with senior compliance officer', href: 'publisher-calendar.html' },
    { key: 'automation', label: 'Compliance keyword flagging automation enabled', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> flagged and held 12 compliance-sensitive posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> routed 3 urgent posts to senior compliance officer', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> enabled automated compliance keyword flagging for future posts', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Compliance review required:</strong> 12 posts flagged. 3 urgent (24h deadline).', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Auto-flagging enabled. Financial content now automatically reviewed before publishing.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I flagged 12 upcoming posts with financial figures or regulatory-adjacent language that need compliance review under FINRA/SEC guidelines. Three publish within 24 hours — routing those now prevents a costly post-publication compliance issue.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-posts', 'route-urgent', 'setup-auto-flag', 'compliance-templates'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 1500 }
  ]
};
