const FLOW_BRAND_HEALTH_QUARTERLY = {
  id: 'brand-health-quarterly',
  name: 'Brand Health Quarterly Review',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q2 brand health report ready — 4 strategic signals',
    description: [
      'I analyzed 90 days of listening data, sentiment trends, share of voice, and brand mentions to compile your <strong>Q2 brand health review</strong>.',
      'Net sentiment is up +8 points, but share of voice dropped 4% while a competitor gained. Brand associations with "innovation" are declining — a potential positioning risk.'
    ],
    completedDescription: ['Q2 brand health review complete — executive summary, trend report, and strategic recommendations prepared.'],
    footer: 'This supports your goal: Track and improve brand health metrics each quarter with actionable recommendations',
    checkboxItems: [
      { action: 'generate-health-report', label: 'Generate full Q2 brand health report with trend analysis' },
      { action: 'brand-alerts', label: 'Configure Q3 brand health early warning alerts in Listening' },
      { action: 'positioning-audit', label: 'Create brand positioning audit based on association drift detected' },
      { action: 'competitive-brief', label: 'Prepare competitive brand health brief for strategy team' }
    ],
    moreIdeasPool: [
      { action: 'panel-study', label: 'Launch social brand sentiment panel study for Q3 baseline' },
      { action: 'influencer-alignment', label: 'Audit top influencer content for alignment with brand positioning' },
      { action: 'brand-narrative', label: 'Build Q3 brand narrative refresh plan to reclaim innovation association' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Q2 brand health report with trend analysis', href: 'unified-analytics.html' },
    { key: 'alerts', label: 'Q3 brand health early warning alerts active', href: 'listening.html' },
    { key: 'brief', label: 'Competitive brand health brief delivered to strategy team', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated Q2 brand health report from 90 days of listening data', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> configured Q3 brand health early warning alerts', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> prepared competitive brand health brief', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Brand health alert</strong> — "innovation" association declining, SOV down 4% vs. competitor.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Net sentiment improved +8 points in Q2. Positive drivers: product quality, customer support.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Q2 brand health analysis is ready. Net sentiment is up +8 points, but your share of voice dropped 4% to a competitor and "innovation" brand associations are declining. This needs a strategic response before Q3.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-health-report', 'brand-alerts', 'positioning-audit', 'competitive-brief'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
