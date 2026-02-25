/* ============================================================
   FLOW: AI-Powered Agent Onboarding

   Demo scenario: Cortex creates personalized onboarding for
   new care agents
   Persona: Care Supervisor
   ============================================================ */

const FLOW_CARE_AGENT_ONBOARDING_AI = {
  id: 'care-agent-onboarding-ai',
  name: 'AI-Powered Agent Onboarding',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: '6 new agents onboarding next week',
    description: [
      '<strong>Onboarding plan:</strong> Cortex created personalized onboarding for 6 new Care agents joining next week.',
      'Configured queues, skills, and enabled AI reply assistance to compensate for lack of social media tone knowledge.',
      'Recommended actions:'
    ],
    completedDescription: [
      'AI-powered onboarding complete for 6 new Care agents.'
    ],
    footer: 'This supports your goal: Fast ramp-up and consistent quality',

    checkboxItems: [
      { action: 'create-plans', label: 'Create personalized onboarding plans per agent' },
      { action: 'configure-queues', label: 'Configure queue assignments and skills' },
      { action: 'enable-ai-assist', label: 'Enable AI Reply Assistant for new agents' },
      { action: 'kb-access', label: 'Grant Knowledge Base access and bookmark top articles' }
    ],

    moreIdeasPool: [
      { action: 'shadow-schedule', label: 'Schedule shadow sessions with top performers' },
      { action: 'progress-dashboard', label: 'Create onboarding progress dashboard' }
    ]
  },

  decisionItems: [
    { key: 'plans-created', label: '6 onboarding plans created', href: 'care-inbox.html' },
    { key: 'queues-configured', label: 'Queues and skills configured', href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created 6 personalized onboarding plans', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured queues and enabled AI Reply Assistant', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 6 new agents joining next week', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Agent Onboarding:</strong> 6 new agents next week. Onboarding plans ready.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'AI Reply Assistant enabled for new agents to compensate for experience gap.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Agent Onboarding:</strong> I see 6 new Care agents joining next week.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'I created personalized onboarding plans, configured their queues, and enabled AI Reply Assistant to compensate for their lack of social media tone knowledge. Ready to deploy?', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-plans', 'configure-queues', 'enable-ai-assist', 'kb-access'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Onboarding complete. New agents have queue access, AI assistance, and KB bookmarks. They can start Monday.', delay: 2500 }
  ]
};
