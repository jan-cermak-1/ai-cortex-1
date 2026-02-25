/* ============================================================
   FLOW: Agent Nudge Setup

   Demo scenario: Configure AI coaching nudges for Care agents
   Persona: Care Supervisor
   ============================================================ */

const FLOW_AGENT_NUDGE_SETUP = {
  id: 'agent-nudge-setup',
  name: 'Agent Nudge Setup',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Configure AI coaching nudges',
    description: [
      '<strong>Agent Nudge Setup:</strong> Set up real-time AI coaching for Care agents.',
      'Triggers: negative sentiment, response time >3 min, or VIP customer detected.',
      'Recommended actions:'
    ],
    completedDescription: [
      'Agent nudge configuration complete. 3 triggers active in Care.'
    ],
    footer: 'This supports your goal: Improve agent performance and customer satisfaction',

    checkboxItems: [
      { action: 'sentiment-nudge', label: 'Enable nudge when conversation sentiment turns negative' },
      { action: 'response-time-nudge', label: 'Enable nudge when response time exceeds 3 minutes' },
      { action: 'vip-nudge', label: 'Enable nudge when VIP customer is detected' },
      { action: 'suggest-actions', label: 'Show suggested actions (KB article, empathy phrase) in nudge' }
    ],

    moreIdeasPool: [
      { action: 'escalation-nudge', label: 'Nudge when escalation may be needed' },
      { action: 'tone-nudge', label: 'Nudge when tone may deviate from brand voice' }
    ]
  },

  decisionItems: [
    { key: 'nudges-enabled', label: '3 nudge triggers enabled', href: 'care-inbox.html' },
    { key: 'config-saved', label: 'Configuration saved', href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> enabled sentiment, response time, and VIP nudges', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured suggested actions in nudge', time: '2 minutes ago' },
    { text: '<strong>You</strong> approved agent nudge configuration', time: '3 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Agent Nudge Setup:</strong> 3 triggers configured. Ready to activate.', time: '3 min ago', unread: true },
    { icon: 'activity', text: 'Nudges will appear in Care agent workspace when conditions are met.', time: '5 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Agent Nudge Setup:</strong> I can configure real-time AI coaching for your Care agents.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Recommended triggers: negative sentiment, response time >3 min, or VIP customer detected. Each nudge can show suggested actions like KB articles or empathy phrases.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['sentiment-nudge', 'response-time-nudge', 'vip-nudge', 'suggest-actions'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Agent nudges are active. Agents will see coaching when sentiment turns negative, response time exceeds 3 min, or a VIP is detected.', delay: 2500 }
  ]
};
