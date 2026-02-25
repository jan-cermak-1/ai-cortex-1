const FLOW_AI_AUDIT_TRAIL = {
  id: 'ai-audit-trail',
  name: 'AI Audit Trail',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Complete AI decision logging — GDPR-compliant export',
    description: [
      'Enable complete AI decision logging — every Cortex recommendation, action taken, content generated, and human override is recorded with timestamp, rationale, and model version.',
      'GDPR-compliant audit export available. 47,230 decisions logged this month. Export formats: CSV, JSON.'
    ],
    completedDescription: ['AI audit trail enabled — all recommendations, actions, overrides logged. GDPR-compliant export.'],
    footer: 'This supports your goal: Meet compliance and explainability requirements',
    checkboxItems: [
      { action: 'enable-logging', label: 'Enable logging for all AI decisions' },
      { action: 'capture-metadata', label: 'Capture timestamp, rationale, model version' },
      { action: 'enable-export', label: 'Enable GDPR-compliant audit export' }
    ],
    moreIdeasPool: [
      { action: 'retention-policy', label: 'Configure log retention policy' }
    ]
  },
  decisionItems: [
    { key: 'logging', label: 'AI logging active', href: 'settings-users.html' },
    { key: 'export', label: 'Audit export available', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> enabled complete AI decision logging', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured GDPR-compliant export', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>AI audit trail:</strong> 47,230 decisions logged. GDPR export: CSV, JSON.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I enabled complete AI decision logging. Every Cortex recommendation, action, content generated, and human override is recorded with timestamp, rationale, and model version. GDPR-compliant audit export available — 47,230 decisions logged this month. Export formats: CSV, JSON.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-logging', 'capture-metadata', 'enable-export'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 }
  ]
};
