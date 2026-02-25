const FLOW_AI_GOVERNANCE_SETUP = {
  id: 'ai-governance-setup',
  name: 'AI Governance Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Enterprise AI governance: Approval, bias, explainability, human-in-loop',
    description: [
      'Configure enterprise AI governance: approval workflows for AI-generated content, bias detection for AI suggestions, explainability logging for all AI decisions, and human-in-loop requirements per risk level.',
      'Risk levels defined: Low (auto-approve), Medium (single approver), High (dual approval + audit). 100% of AI decisions now logged.'
    ],
    completedDescription: ['AI governance configured — approval workflows, bias detection, explainability logging, human-in-loop per risk level.'],
    footer: 'This supports your goal: Deploy AI responsibly with enterprise controls',
    checkboxItems: [
      { action: 'approval-workflows', label: 'Configure approval workflows for AI content' },
      { action: 'bias-detection', label: 'Enable bias detection for AI suggestions' },
      { action: 'explainability-log', label: 'Enable explainability logging for all AI decisions' }
    ],
    moreIdeasPool: [
      { action: 'risk-matrix', label: 'Customize risk level matrix' }
    ]
  },
  decisionItems: [
    { key: 'governance', label: 'Governance configured', href: 'settings-users.html' },
    { key: 'logging', label: '100% AI decisions logged', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured AI approval workflows', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> enabled explainability logging', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>AI governance:</strong> Approval, bias, explainability, human-in-loop. 100% decisions logged.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I configured enterprise AI governance: approval workflows for AI content, bias detection for suggestions, explainability logging for all decisions, and human-in-loop per risk level. Low = auto-approve, Medium = single approver, High = dual approval + audit. 100% of AI decisions now logged.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['approval-workflows', 'bias-detection', 'explainability-log'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 }
  ]
};
