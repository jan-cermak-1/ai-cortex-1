const FLOW_LOOKALIKE_AUDIENCE_BUILDER = {
  id: 'lookalike-audience-builder',
  name: 'Lookalike Audience Builder',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'High-value customer segment ready for lookalike expansion',
    description: [
      'I identified a <strong>high-value customer segment</strong>: 2,400 customers with LTV > $500 who converted via social media in the past 12 months.',
      'This is an ideal seed audience for lookalike expansion on Meta and TikTok — typically delivers 2-3x better conversion rates than broad targeting.'
    ],
    completedDescription: ['Lookalike audiences created — 2 audiences built (Meta + TikTok), test campaigns configured.'],
    footer: 'This supports your goal: Reduce paid social CPA by 30% through better audience targeting',
    checkboxItems: [
      { action: 'export-segment', label: 'Export high-value customer list for audience upload' },
      { action: 'create-meta-lookalike', label: 'Create 1% and 2% lookalike audiences on Meta from the seed list' },
      { action: 'create-tiktok-lookalike', label: 'Create Value-Based lookalike audience on TikTok' },
      { action: 'launch-test', label: 'Launch test campaigns targeting new lookalike audiences' }
    ],
    moreIdeasPool: [
      { action: 'exclude-customers', label: 'Create exclusion audience to prevent ads reaching existing customers' },
      { action: 'interest-layers', label: 'Layer interest targeting on top of lookalike for higher precision' },
      { action: 'creative-match', label: 'Generate ad creative tailored to lookalike audience profile' }
    ]
  },
  decisionItems: [
    { key: 'audiences', label: 'Lookalike audiences created (Meta + TikTok)', href: 'unified-analytics.html' },
    { key: 'campaigns', label: 'Test campaigns launched targeting lookalike audiences', href: 'unified-analytics.html' },
    { key: 'tracking', label: 'Audience performance tracking configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> exported 2,400-customer seed audience for upload', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created 1% and 2% lookalike audiences on Meta', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created value-based lookalike audience on TikTok', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Lookalike audiences live</strong> — Meta and TikTok audiences created from 2,400 HVCs.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Test campaigns targeting lookalike audiences. Results expected in 7 days.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 2,400 high-value customers (LTV > $500) who converted via social — a perfect seed for lookalike expansion. This audience type typically achieves 2-3x better conversion than broad targeting.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['export-segment', 'create-meta-lookalike', 'create-tiktok-lookalike', 'launch-test'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
