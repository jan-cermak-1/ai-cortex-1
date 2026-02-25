const FLOW_AGENCY_BRIEF_BUILDER = {
  id: 'agency-brief-builder',
  name: 'Agency Brief Builder',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Agency brief for Q3 campaign ready to draft',
    description: [
      'Your Q3 campaign brief for the creative agency is due Friday. I can generate a <strong>comprehensive agency brief</strong> using Q2 performance data, audience insights, competitive benchmarks, and your brand positioning.',
      'The brief will cover campaign objectives, audience personas, creative direction, channel mix, KPIs, and timeline — everything the agency needs to start creative development.'
    ],
    completedDescription: ['Agency brief drafted and delivered — Q3 campaign objectives, audience insights, creative direction, and KPIs included.'],
    footer: 'This supports your goal: Brief the creative agency with data-backed Q3 campaign parameters by Friday',
    checkboxItems: [
      { action: 'draft-brief', label: 'Draft full agency creative brief with objectives, audience, and direction' },
      { action: 'audience-insights', label: 'Include audience persona insights from listening and analytics data' },
      { action: 'competitive-benchmarks', label: 'Add competitive creative benchmarks to inspire differentiation' },
      { action: 'kpi-framework', label: 'Define measurement framework and success KPIs for the campaign' }
    ],
    moreIdeasPool: [
      { action: 'content-calendar', label: 'Include draft content calendar with key campaign moments' },
      { action: 'influencer-tier', label: 'Add influencer tier recommendations for campaign amplification' },
      { action: 'ugc-strategy', label: 'Include UGC strategy to extend agency creative investment' }
    ]
  },
  decisionItems: [
    { key: 'brief', label: 'Full agency creative brief generated', href: 'unified-analytics.html' },
    { key: 'insights', label: 'Audience persona insights included from data', href: 'listening.html' },
    { key: 'kpis', label: 'Campaign KPI measurement framework defined', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted full agency brief using Q2 data and audience insights', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> added competitive creative benchmarks from 5 competitor campaigns', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> defined campaign KPI framework with measurement approach', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Agency brief ready</strong> — objectives, audience, creative direction, and KPIs included.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Creative direction insight: Your audience responds 2.8x more to problem-solution format vs. lifestyle.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Agency brief is due Friday. I can generate the full brief from your Q2 data: campaign objectives, audience insights, competitive creative benchmarks, and KPIs. Your data shows audiences respond 2.8x more to problem-solution format — that should be the creative direction.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['draft-brief', 'audience-insights', 'competitive-benchmarks', 'kpi-framework'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
