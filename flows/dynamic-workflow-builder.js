/* ============================================================
   FLOW: Dynamic Workflow Builder

   Demo scenario: Build guided workflows for complex care
   scenarios with AI-assisted flow design
   Persona: Care Operations
   ============================================================ */

const FLOW_DYNAMIC_WORKFLOW_BUILDER = {
  id: 'dynamic-workflow-builder',
  name: 'Dynamic Workflow Builder',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: '5 guided workflows for complex scenarios',
    description: [
      '<strong>Dynamic Workflow Builder:</strong> Build AI-assisted guided workflows for the most complex Care scenarios.',
      '5 workflows: product returns, account closures, escalations, billing disputes, technical issues.',
      'Recommended actions:'
    ],
    completedDescription: [
      '5 dynamic guided workflows created. Agents have step-by-step guidance for complex cases.'
    ],
    footer: 'This supports your goal: Consistent handling of complex cases',

    checkboxItems: [
      { action: 'create-returns', label: 'Create product returns workflow (steps, approvals, SLA)' },
      { action: 'create-closures', label: 'Create account closure workflow (retention steps)' },
      { action: 'create-escalations', label: 'Create escalation workflow (triage, routing)' },
      { action: 'create-billing', label: 'Create billing dispute workflow (evidence, resolution)' },
      { action: 'create-technical', label: 'Create technical issue workflow (troubleshooting steps)' }
    ],

    moreIdeasPool: [
      { action: 'ai-suggest-steps', label: 'Use AI to suggest workflow steps from past cases' },
      { action: 'integrate-flow-automations', label: 'Connect to Flow Automations for triggers' }
    ]
  },

  decisionItems: [
    { key: 'workflows-created', label: '5 guided workflows created', href: 'care-inbox.html' },
    { key: 'flows-connected', label: 'Workflows connected to Flow Automations', href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created 5 guided workflows', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> built product returns workflow (8 steps)', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 2,400 complex cases for workflow design', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Workflow Builder:</strong> 5 workflows for returns, closures, escalations, billing, technical.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Guided workflows deployed. Agents see step-by-step guidance.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Dynamic Workflow Builder:</strong> I analyzed your most complex Care scenarios and can build 5 guided workflows.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Workflows: product returns (8 steps), account closures (retention flow), escalations (triage), billing disputes (evidence collection), technical issues (troubleshooting). AI-assisted flow design from 2,400 past cases.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-returns', 'create-closures', 'create-escalations', 'create-billing', 'create-technical'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: '5 guided workflows are live. Agents will see step-by-step guidance for returns, closures, escalations, billing, and technical cases.', delay: 2500 }
  ]
};
