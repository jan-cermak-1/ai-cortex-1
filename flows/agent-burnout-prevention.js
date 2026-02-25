const FLOW_AGENT_BURNOUT_PREVENTION = {
  id: 'agent-burnout-prevention',
  name: 'Agent Burnout Prevention',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '2 agents showing high burnout risk signals',
    description: [
      'I detected early burnout signals for <strong>2 agents</strong>: response time has increased 45% this week, satisfaction scores dropped 0.8 points, and case handle time is up 20%.',
      'Early intervention can prevent performance deterioration and potential attrition. Here\'s what I recommend:'
    ],
    completedDescription: ['Burnout prevention actions taken — case load reduced, break schedule adjusted, and supervisor notified.'],
    footer: 'This supports your goal: Maintain agent satisfaction above 4.0 and reduce Care team attrition below 15%',
    checkboxItems: [
      { action: 'reduce-caseload', label: 'Reduce case load for the 2 at-risk agents by 30% for 3 days' },
      { action: 'reassign-complex', label: 'Reassign 8 high-complexity cases to senior agents' },
      { action: 'notify-supervisor', label: 'Alert Care Supervisor with agent wellbeing report' },
      { action: 'suggest-breaks', label: 'Adjust break schedule to include micro-breaks every 90 minutes' }
    ],
    moreIdeasPool: [
      { action: 'training-break', label: 'Schedule micro-training session as active recovery during low-volume period' },
      { action: 'positive-feedback', label: 'Surface positive customer feedback for the at-risk agents (morale boost)' },
      { action: 'monthly-report', label: 'Generate monthly agent wellbeing trends report for HR' }
    ]
  },
  decisionItems: [
    { key: 'caseload', label: 'Case load reduced by 30% for 2 agents', href: 'care-inbox.html' },
    { key: 'reassigned', label: '8 complex cases reassigned', href: 'care-inbox.html' },
    { key: 'report', label: 'Agent wellbeing report sent to supervisor', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> reduced case load for 2 at-risk agents', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> reassigned 8 complex cases to senior agents', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected burnout signals in 2 agent performance trends', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Burnout alert:</strong> 2 agents showing elevated stress signals — action taken.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Supervisor notified. Case load adjustments in effect for 3 days.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'m detecting early burnout signals for 2 agents — their response times are up 45%, CSAT dropped, and handle times are climbing. Early intervention now prevents bigger problems later.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['reduce-caseload', 'reassign-complex', 'notify-supervisor', 'suggest-breaks'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
