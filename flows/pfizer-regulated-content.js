const FLOW_PFIZER_REGULATED_CONTENT = {
  id: 'pfizer-regulated-content',
  name: 'Regulated Content AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Approval cycle: 8 days → 2.5 days',
    description: [
      'Pharmaceutical content requires multi-layer approval: legal, medical, regulatory.',
      'Cortex automates the review workflow — reducing approval cycle from <strong>8 days to 2.5 days</strong>.'
    ],
    completedDescription: ['Regulated content workflow automated — approval cycle reduced from 8 days to 2.5 days.'],
    footer: 'This supports your goal: Publish compliant pharma content faster',
    checkboxItems: [
      { action: 'workflow-automate', label: 'Automate legal, medical, regulatory review workflow' },
      { action: 'parallel-review', label: 'Enable parallel review where regulations allow' },
      { action: 'compliance-tracking', label: 'Track compliance status per asset' }
    ],
    moreIdeasPool: [
      { action: 'template-library', label: 'Build pre-approved template library' },
      { action: 'audit-trail', label: 'Generate audit trail for regulatory inspection' }
    ]
  },
  decisionItems: [
    { key: 'workflow', label: 'Approval workflow automated', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'Compliance tracking active', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured multi-layer approval workflow', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> reduced approval cycle from 8 to 2.5 days', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Regulated Content</strong> — Approval 8 days → 2.5 days. Workflow automated.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Pharma content needs legal, medical, and regulatory sign-offs. I automated the review workflow — approval cycle drops from <strong>8 days to 2.5 days</strong>.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['workflow-automate', 'parallel-review', 'compliance-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
