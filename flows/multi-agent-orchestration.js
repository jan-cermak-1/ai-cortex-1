const FLOW_MULTI_AGENT_ORCHESTRATION = {
  id: 'multi-agent-orchestration',
  name: 'Multi-Agent Orchestration',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '5 specialized Cortex sub-agents + master Orchestrator',
    description: [
      'Set up 5 specialized Cortex sub-agents: Care Agent, Content Agent, Insights Agent, Commerce Agent, Influencer Agent — with defined roles, escalation paths, and a master Orchestrator that coordinates them on complex cross-cloud tasks.',
      'First orchestrated task: Commerce-Care handoff for defective product — resolved in 3 min with zero manual routing.'
    ],
    completedDescription: ['5 sub-agents + Orchestrator configured — Care, Content, Insights, Commerce, Influencer. Cross-cloud coordination active.'],
    footer: 'This supports your goal: Handle complex tasks that span multiple clouds',
    checkboxItems: [
      { action: 'create-agents', label: 'Create 5 specialized sub-agents' },
      { action: 'define-escalation', label: 'Define escalation paths between agents' },
      { action: 'enable-orchestrator', label: 'Enable master Orchestrator for cross-cloud tasks' }
    ],
    moreIdeasPool: [
      { action: 'custom-agent', label: 'Add custom agent for specific use case' }
    ]
  },
  decisionItems: [
    { key: 'agents', label: '5 sub-agents created', href: 'settings-users.html' },
    { key: 'orchestrator', label: 'Orchestrator active', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 5 specialized sub-agents', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> enabled master Orchestrator', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Multi-agent:</strong> Care, Content, Insights, Commerce, Influencer + Orchestrator. First cross-cloud task: 3 min.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I set up 5 specialized Cortex sub-agents — Care, Content, Insights, Commerce, Influencer — with defined roles and escalation paths. The master Orchestrator coordinates them on complex cross-cloud tasks. First run: Commerce-Care handoff for defective product, resolved in 3 minutes with zero manual routing.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-agents', 'define-escalation', 'enable-orchestrator'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 }
  ]
};
