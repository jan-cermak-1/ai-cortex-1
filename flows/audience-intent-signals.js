const FLOW_AUDIENCE_INTENT_SIGNALS = {
  id: 'audience-intent-signals',
  name: 'Audience Intent Signals',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '8,400 conversations with purchase intent — 3 high-intent clusters',
    description: [
      'Cortex identified purchase intent signals in <strong>8,400 brand conversations</strong> — segmented by product category.',
      'Surfaced 3 high-intent audience clusters for retargeting in paid social: Cluster A — 2,100 users, "ready to buy" language, 78% match to product catalog; Cluster B — 1,800 users, comparison-shopping signals; Cluster C — 1,200 users, post-purchase upsell intent.'
    ],
    completedDescription: ['Intent analysis complete — 3 clusters exported to paid social, audience segments created, and retargeting recommendations generated.'],
    footer: 'This supports your goal: Convert high-intent social conversations into paid retargeting audiences',
    checkboxItems: [
      { action: 'export-clusters', label: 'Export 3 clusters as custom audiences for Meta/Google' },
      { action: 'create-segments', label: 'Create audience segments in Unified Analytics' },
      { action: 'retargeting-brief', label: 'Generate retargeting campaign brief with budget recommendations' }
    ],
    moreIdeasPool: [
      { action: 'lookalike-build', label: 'Build lookalike audiences from Cluster A' },
      { action: 'creative-brief', label: 'Create intent-specific creative brief for each cluster' }
    ]
  },
  decisionItems: [
    { key: 'export', label: '3 clusters exported to paid platforms', href: 'unified-analytics.html' },
    { key: 'segments', label: 'Audience segments created', href: 'unified-analytics.html' },
    { key: 'brief', label: 'Retargeting brief generated', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> exported 3 intent clusters to Meta and Google', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created audience segments in Unified Analytics', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 8,400 conversations with purchase intent', time: '6 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Intent signals:</strong> 8,400 conversations. 3 high-intent clusters for retargeting.', time: '6 min ago', unread: true },
    { icon: 'activity', text: 'Cluster A: 2,100 users, 78% product match. Ready for paid amplification.', time: '5 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found purchase intent signals in 8,400 brand conversations. Three high-intent clusters for retargeting: Cluster A has 2,100 users with "ready to buy" language and 78% product match; Cluster B has 1,800 comparison-shoppers; Cluster C has 1,200 with upsell intent.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['export-clusters', 'create-segments', 'retargeting-brief'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
