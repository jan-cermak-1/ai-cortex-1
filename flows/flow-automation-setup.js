const FLOW_FLOW_AUTOMATION_SETUP = {
  id: 'flow-automation-setup',
  name: 'Flow Automation Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '5 repetitive manual workflows ready for automation',
    description: [
      'I identified <strong>5 repetitive workflows</strong> your team performs manually every day that are strong candidates for automation.',
      'Combined, these tasks consume approximately <strong>2.5 agent-hours per day</strong>. Setting up automation would free your team for higher-value interactions.'
    ],
    completedDescription: ['5 automation flows configured and active — estimated time savings: 2.5 hours per day.'],
    footer: 'This supports your goal: Automate all repetitive tier-1 workflows and redirect agent time to complex, high-value interactions',
    checkboxItems: [
      { action: 'auto-tagging', label: 'Auto-tag and route incoming messages by keyword and sentiment' },
      { action: 'auto-close', label: 'Auto-close resolved cases after 72-hour inactivity with follow-up message' },
      { action: 'auto-routing', label: 'Auto-route language-specific messages to correct agent queues' },
      { action: 'sla-reminder', label: 'Auto-send internal SLA reminder when cases approach deadline' }
    ],
    moreIdeasPool: [
      { action: 'auto-report', label: 'Auto-generate daily team performance report every morning at 8am' },
      { action: 'satisfaction-survey', label: 'Auto-send satisfaction survey 24h after case closure' },
      { action: 'escalation-auto', label: 'Auto-escalate VIP customer cases to senior agent queue' }
    ]
  },
  decisionItems: [
    { key: 'tagging', label: 'Auto-tagging and routing automation active', href: 'care-inbox.html' },
    { key: 'close', label: 'Auto-close flow configured (72h inactivity)', href: 'care-inbox.html' },
    { key: 'sla', label: 'SLA reminder automation enabled', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured auto-tagging and routing automation', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up auto-close flow with customer follow-up', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> enabled SLA deadline reminder automation', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>5 automations active</strong> — estimated 2.5 agent-hours saved daily.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Auto-tagging already processed 47 messages in the last hour.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I identified 5 workflows your team repeats manually every day, consuming about 2.5 hours of agent time. Setting up automation for these would free your team for complex, high-value conversations.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['auto-tagging', 'auto-close', 'auto-routing', 'sla-reminder'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
