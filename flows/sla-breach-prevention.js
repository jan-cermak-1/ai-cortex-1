const FLOW_SLA_BREACH_PREVENTION = {
  id: 'sla-breach-prevention',
  name: 'SLA Breach Prevention',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '23 cases approaching SLA deadline in the next 2 hours',
    description: [
      '<strong>23 open cases</strong> will breach SLA within the next 2 hours. 5 of them are Tier 1 customers.',
      'Based on agent availability and case complexity, here\'s what I can do to prevent breaches:'
    ],
    completedDescription: ['SLA breach prevented — 23 cases redistributed, 5 Tier 1 cases prioritized, and customer notifications sent.'],
    footer: 'This supports your goal: Maintain 98% SLA compliance rate across all Care channels',
    checkboxItems: [
      { action: 'redistribute-cases', label: 'Redistribute 18 standard cases to available agents' },
      { action: 'prioritize-tier1', label: 'Flag 5 Tier 1 customer cases for senior agent priority queue' },
      { action: 'notify-customers', label: 'Send proactive status updates to customers with cases near SLA' },
      { action: 'alert-supervisor', label: 'Alert Care Supervisor with SLA risk dashboard' }
    ],
    moreIdeasPool: [
      { action: 'overtime-alert', label: 'Notify agents available for overtime if SLA breach risk remains' },
      { action: 'auto-escalate', label: 'Set up automatic escalation rules for Tier 1 cases going forward' },
      { action: 'sla-report', label: 'Generate SLA breach root cause analysis report' }
    ]
  },
  decisionItems: [
    { key: 'redistributed', label: '18 cases redistributed to available agents', href: 'care-inbox.html' },
    { key: 'tier1', label: '5 Tier 1 cases prioritized in queue', href: 'care-inbox.html' },
    { key: 'notifications', label: 'Proactive status updates sent to 23 customers', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> redistributed 18 cases to available agents', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> prioritized 5 Tier 1 cases in senior agent queue', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent proactive updates to 23 customers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected 23 cases approaching SLA deadline', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>SLA ALERT:</strong> 23 cases within 2-hour breach window — action taken.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '5 Tier 1 cases flagged and assigned to senior agents.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Urgent: 23 cases will breach SLA within 2 hours — 5 of them are Tier 1 customers. I can prevent breaches by redistributing load and sending proactive updates.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['redistribute-cases', 'prioritize-tier1', 'notify-customers', 'alert-supervisor'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
