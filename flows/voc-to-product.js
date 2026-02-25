const FLOW_VOC_TO_PRODUCT = {
  id: 'voc-to-product',
  name: 'Voice of Customer to Product',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q2 VoC analysis: 3 high-frequency feature requests ready',
    description: [
      'I synthesized 6 weeks of social mentions, Care tickets, reviews, and community posts into a <strong>Q2 Voice of Customer analysis</strong>.',
      'Top 3 feature requests by frequency: (1) Mobile app offline mode — 234 mentions, (2) Dark mode — 189 mentions, (3) API export — 145 mentions. This data is actionable for product roadmap planning.'
    ],
    completedDescription: ['VoC report sent to Product team — 3 feature requests documented with full social evidence and business case.'],
    footer: 'This supports your goal: Systematically convert social listening and care data into product roadmap inputs monthly',
    checkboxItems: [
      { action: 'generate-voc-report', label: 'Generate Q2 VoC report with evidence for each feature request' },
      { action: 'business-case', label: 'Build business case: frequency + NPS impact + competitor feature parity' },
      { action: 'share-product', label: 'Share VoC report with Product team with Jira integration' },
      { action: 'setup-monthly', label: 'Set up monthly VoC digest to run automatically' }
    ],
    moreIdeasPool: [
      { action: 'customer-quotes', label: 'Extract most compelling customer quotes for each feature request' },
      { action: 'segment-by-persona', label: 'Break down feature requests by customer segment (SMB vs Enterprise)' },
      { action: 'competitor-compare', label: 'Add competitive gap analysis: which competitors already have these features' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Q2 VoC report generated with 3 feature requests', href: 'unified-analytics.html' },
    { key: 'shared', label: 'Report shared with Product team', href: 'unified-analytics.html' },
    { key: 'digest', label: 'Monthly VoC digest configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> synthesized Q2 VoC from social, care, and review data', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> built business cases for top 3 feature requests', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> shared VoC report with Product team', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>VoC report ready:</strong> 3 feature requests with full evidence sent to Product.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Top request: Mobile offline mode (234 mentions across 6 weeks).', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I synthesized 6 weeks of social mentions, care tickets, and reviews into a Q2 VoC analysis. Three feature requests are significantly overrepresented: offline mode (234 mentions), dark mode (189), and API export (145). Ready to send to Product.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-voc-report', 'business-case', 'share-product', 'setup-monthly'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
