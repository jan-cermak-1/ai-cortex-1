const FLOW_TELCO_CARE_AUTOMATION = {
  id: 'telco-care-automation',
  name: 'Telco Care Automation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Network outage driving 400% care volume spike',
    description: [
      'A regional network outage is causing a <strong>400% spike in Care contacts</strong> — 847 new messages in the past 90 minutes, all about the same outage.',
      'I can deploy an automated triage system to handle this surge: acknowledge the issue, provide status updates, and free agents for complex edge cases.'
    ],
    completedDescription: ['Outage care automation deployed — status message active, auto-acknowledgments sending, and agent capacity focused on edge cases.'],
    footer: 'This supports your goal: Handle service outages with automated response to maintain CSAT above 3.8 during incidents',
    checkboxItems: [
      { action: 'deploy-status-message', label: 'Deploy automated status message to all incoming contacts about the outage' },
      { action: 'activate-bot', label: 'Activate outage-specific bot flow with real-time network status link' },
      { action: 'reserve-agents', label: 'Reserve 5 agents for complex/VIP cases — route standard contacts to bot' },
      { action: 'setup-alerts', label: 'Set up stakeholder notifications with live volume and resolution metrics' }
    ],
    moreIdeasPool: [
      { action: 'social-post', label: 'Publish proactive outage acknowledgment on social channels' },
      { action: 'compensation-flow', label: 'Prepare automatic compensation offer flow for affected customers' },
      { action: 'post-mortem', label: 'Set up post-incident review workflow after outage resolution' }
    ]
  },
  decisionItems: [
    { key: 'automation', label: 'Outage automation deployed — status messages active', href: 'care-inbox.html' },
    { key: 'bot', label: 'Outage bot flow active with network status link', href: 'bot-builder.html' },
    { key: 'social', label: 'Proactive outage acknowledgment published on social', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> deployed automated outage status messages to all incoming contacts', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> activated outage bot flow handling 847 contacts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected 400% care volume spike from regional network outage', time: '90 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Outage automation live:</strong> 847 contacts being handled by bot. 5 agents on VIP.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Bot containment rate for outage contacts: 78%. Agent queue: 12 complex cases.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Network outage is causing a 400% care volume spike — 847 new messages in 90 minutes, all about the same issue. I can deploy automated triage: status messages, outage bot, and reserve agents for complex cases only.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['deploy-status-message', 'activate-bot', 'reserve-agents', 'setup-alerts'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
