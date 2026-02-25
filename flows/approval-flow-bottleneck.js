const FLOW_APPROVAL_FLOW_BOTTLENECK = {
  id: 'approval-flow-bottleneck',
  name: 'Approval Bottleneck Fix',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '14 posts stuck in approval for 48+ hours',
    description: [
      'I detected <strong>14 scheduled posts</strong> that have been waiting for approval for more than 48 hours — 6 of them are due to publish in the next 24 hours.',
      'The bottleneck is in the second approval stage. Here\'s what I can do:'
    ],
    completedDescription: ['Approval bottleneck resolved — approvers notified, posts rescheduled, and workflow streamlined.'],
    footer: 'This supports your goal: Maintain publishing consistency and reduce approval cycle time below 24 hours',
    checkboxItems: [
      { action: 'escalate-approvers', label: 'Send urgent notification to all pending approvers' },
      { action: 'reschedule-urgent', label: 'Reschedule the 6 urgent posts to next available slots' },
      { action: 'bypass-stage2', label: 'Propose bypassing stage 2 for pre-approved content types' },
      { action: 'report-bottleneck', label: 'Generate approval flow analytics report for leadership' }
    ],
    moreIdeasPool: [
      { action: 'add-backup-approver', label: 'Add backup approvers to stage 2 workflow' },
      { action: 'auto-approve-rule', label: 'Create auto-approval rule for content below risk threshold' },
      { action: 'sla-alert', label: 'Set up SLA alerts when posts wait more than 12 hours' }
    ]
  },
  decisionItems: [
    { key: 'notified', label: '5 approvers notified (urgent)', href: 'publisher-calendar.html' },
    { key: 'rescheduled', label: '6 urgent posts rescheduled', href: 'publisher-calendar.html' },
    { key: 'report', label: 'Approval analytics report generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> sent urgent notifications to 5 approvers', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> rescheduled 6 posts to next optimal slots', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected 14 posts stuck in approval queue', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Approval bottleneck detected</strong> — 14 posts waiting 48h+.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Approvers notified. 2 of 5 have already responded.', time: '5 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I flagged an issue: 14 posts have been waiting for approval over 48 hours. 6 are due to publish within 24 hours.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['escalate-approvers', 'reschedule-urgent', 'report-bottleneck'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
