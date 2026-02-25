const FLOW_AI_GOVERNANCE_ROLLOUT = {
  id: 'ai-governance-rollout',
  name: 'AI Governance Rollout',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'AI governance framework ready for team rollout',
    description: [
      'You\'ve decided to expand AI usage across your 40-person marketing organization. Before scaling, I\'ve prepared an <strong>AI governance framework</strong> covering usage policies, prompt guidelines, and approval workflows.',
      'Key governance needs: AI content must be reviewed before publishing, sensitive topics need human approval, and all AI-generated claims must be fact-checked by a human.'
    ],
    completedDescription: ['AI governance framework deployed — approval workflows configured, team trained, and monitoring dashboards active.'],
    footer: 'This supports your goal: Scale AI usage responsibly across the marketing organization with appropriate oversight',
    checkboxItems: [
      { action: 'configure-approvals', label: 'Configure AI content approval workflows in publishing' },
      { action: 'sensitive-topics', label: 'Set up sensitive topic detection requiring human review before publish' },
      { action: 'usage-policy', label: 'Generate team AI usage policy and acceptable use guidelines document' },
      { action: 'governance-dashboard', label: 'Create AI usage monitoring dashboard for compliance oversight' }
    ],
    moreIdeasPool: [
      { action: 'ai-training', label: 'Schedule AI literacy training sessions for all team members' },
      { action: 'brand-guardrails', label: 'Configure brand voice guardrails for AI content generation' },
      { action: 'audit-log', label: 'Enable full audit log for all AI-generated content decisions' }
    ]
  },
  decisionItems: [
    { key: 'approvals', label: 'AI content approval workflows configured', href: 'settings-users.html' },
    { key: 'policy', label: 'AI usage policy document generated', href: 'settings-users.html' },
    { key: 'dashboard', label: 'AI usage monitoring dashboard active', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured AI content approval workflows', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up sensitive topic detection requiring human review', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated AI usage policy for 40-person team', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>AI governance active</strong> — approval workflows, sensitive topics, and monitoring configured.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'AI governance framework covers 6 risk categories and 4 approval tiers.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Ready to scale AI across your 40-person team. Before expanding access, you need governance guardrails: approval workflows for AI content, sensitive topic detection, and a usage policy. I can configure all of this now to ensure responsible AI deployment.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['configure-approvals', 'sensitive-topics', 'usage-policy', 'governance-dashboard'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
