const FLOW_APPROVAL_WORKFLOW_REDESIGN = {
  id: 'approval-workflow-redesign',
  name: 'Approval Workflow Redesign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Approval flow analysis: 3 unnecessary stages slowing publishing',
    description: [
      'I analyzed your content approval workflows and found <strong>3 review stages</strong> that add an average of 28 hours to publish time but have a <99% pass-through rate — meaning they almost never block content.',
      'Streamlining the approval chain could reduce time-to-publish by 58% without meaningful increase in risk.'
    ],
    completedDescription: ['Approval workflow redesigned — 3 redundant stages removed, content categorization rules applied, and new workflow deployed.'],
    footer: 'This supports your goal: Reduce average time-to-publish below 24 hours while maintaining brand safety',
    checkboxItems: [
      { action: 'identify-redundant', label: 'Remove 3 identified redundant approval stages from all workflows' },
      { action: 'risk-categorization', label: 'Implement content risk categorization (auto-approve low-risk)' },
      { action: 'backup-approvers', label: 'Add backup approvers to all remaining critical stages' },
      { action: 'pilot-workflow', label: 'Run redesigned workflow in pilot with 1 brand for 2 weeks' }
    ],
    moreIdeasPool: [
      { action: 'sla-enforcement', label: 'Set 4-hour SLA on each approval stage with auto-escalation' },
      { action: 'mobile-approval', label: 'Enable mobile push notifications for approvers when action needed' },
      { action: 'workflow-analytics', label: 'Create workflow performance dashboard to track approval cycle times' }
    ]
  },
  decisionItems: [
    { key: 'redesigned', label: 'Approval workflow redesigned (3 stages removed)', href: 'publisher-calendar.html' },
    { key: 'categorization', label: 'Content risk categorization rules applied', href: 'publisher-calendar.html' },
    { key: 'pilot', label: 'Pilot workflow active for Brand A', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> removed 3 redundant stages from approval workflow', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> implemented content risk categorization rules', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed approval workflows: 3 redundant stages identified', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Workflow redesigned</strong> — projected 58% reduction in time-to-publish.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Pilot active for Brand A. Full rollout after 2-week review.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed your approval workflows and found 3 stages that add 28 hours but almost never block any content — 99%+ pass-through rate. Removing them would cut time-to-publish by 58% with minimal risk.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['identify-redundant', 'risk-categorization', 'backup-approvers', 'pilot-workflow'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 1500 }
  ]
};
