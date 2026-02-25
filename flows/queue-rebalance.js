const FLOW_QUEUE_REBALANCE = {
  id: 'queue-rebalance',
  name: 'Agent Queue Rebalance',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Agent queue imbalance detected — 3 agents overwhelmed',
    description: [
      'I\'m seeing a significant queue imbalance: <strong>3 agents each have 40+ open cases</strong> while 4 agents have fewer than 10.',
      'This imbalance is causing delayed responses for 87 customers. I can rebalance workload automatically:'
    ],
    completedDescription: ['Queue rebalanced — 62 cases redistributed, all agents now within 15-25 case range, overflow bot activated.'],
    footer: 'This supports your goal: Maintain balanced agent workload and ensure equal response quality across the team',
    checkboxItems: [
      { action: 'rebalance-cases', label: 'Redistribute 62 cases from overloaded to available agents' },
      { action: 'activate-bot', label: 'Activate bot overflow for next 2 hours to absorb new volume' },
      { action: 'set-capacity-rules', label: 'Set maximum case limit per agent with auto-routing overflow' },
      { action: 'notify-supervisor', label: 'Send queue status report to Care Supervisor' }
    ],
    moreIdeasPool: [
      { action: 'skill-routing', label: 'Implement skill-based routing to better match cases to agents' },
      { action: 'workload-predict', label: 'Set up predictive workload alerts for high-volume periods' },
      { action: 'staffing-report', label: 'Generate staffing recommendation report for next quarter' }
    ]
  },
  decisionItems: [
    { key: 'rebalanced', label: '62 cases redistributed across 4 available agents', href: 'care-inbox.html' },
    { key: 'bot', label: 'Bot overflow active for next 2 hours', href: 'care-inbox.html' },
    { key: 'rules', label: 'Capacity rules configured with auto-routing', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> redistributed 62 cases to balance agent workloads', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> activated bot overflow for 2-hour coverage', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected queue imbalance: 3 agents with 40+ cases each', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Queue rebalanced</strong> — 62 cases redistributed. All agents now at 15-25 cases.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Bot overflow active. 12 new messages handled by bot so far.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Queue imbalance detected: 3 agents each have 40+ cases while 4 others have fewer than 10. This is delaying 87 customers. I can rebalance this right now.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['rebalance-cases', 'activate-bot', 'set-capacity-rules', 'notify-supervisor'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
