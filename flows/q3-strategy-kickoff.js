const FLOW_Q3_STRATEGY_KICKOFF = {
  id: 'q3-strategy-kickoff',
  name: 'Q3 Strategy Kickoff',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q3 strategy planning data ready — 5 key insights',
    description: [
      'I synthesized Q2 performance, competitive intelligence, and market signals to prepare your <strong>Q3 social strategy planning package</strong>.',
      'Key Q3 recommendations: Double down on video content (3.2x your ER vs. static), expand LinkedIn (62% of B2B conversions at 18% of spend), and activate influencer program for July launch window.'
    ],
    completedDescription: ['Q3 strategy package ready — performance analysis, competitive brief, and Q3 priorities delivered to leadership.'],
    footer: 'This supports your goal: Enter Q3 with a data-driven social strategy aligned to business objectives',
    checkboxItems: [
      { action: 'generate-strategy-deck', label: 'Generate Q3 social media strategy presentation with 5 priorities' },
      { action: 'set-q3-targets', label: 'Configure Q3 KPI targets in Unified Analytics based on Q2 actuals + growth plan' },
      { action: 'q3-content-calendar', label: 'Create Q3 content calendar framework based on strategy priorities' },
      { action: 'share-leadership', label: 'Share strategy package with leadership for kickoff meeting' }
    ],
    moreIdeasPool: [
      { action: 'budget-recommendation', label: 'Include Q3 budget allocation recommendation by channel' },
      { action: 'team-briefing', label: 'Create team-level strategy briefing for each functional team' },
      { action: 'oka-framework', label: 'Convert Q3 priorities into OKA framework with measurable key results' }
    ]
  },
  decisionItems: [
    { key: 'deck', label: 'Q3 strategy presentation generated (5 priorities)', href: 'unified-analytics.html' },
    { key: 'targets', label: 'Q3 KPI targets configured in Unified Analytics', href: 'unified-analytics.html' },
    { key: 'calendar', label: 'Q3 content calendar framework created', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated Q3 strategy presentation from Q2 analysis', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured Q3 KPI targets in Unified Analytics', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created Q3 content calendar framework based on strategy', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Q3 strategy ready</strong> — 5 priorities, KPI targets, and content framework configured.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Top Q3 priority: Double video content investment (currently 20% of mix, should be 45%).', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Q2 is over. I\'ve synthesized performance data, competitive intelligence, and market signals into your Q3 strategy planning package. Top recommendation: double your video investment — it\'s delivering 3.2x higher engagement than static content.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-strategy-deck', 'set-q3-targets', 'q3-content-calendar', 'share-leadership'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
