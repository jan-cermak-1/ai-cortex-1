const FLOW_RETAIL_SEASONAL_CAMPAIGN = {
  id: 'retail-seasonal-campaign',
  name: 'Retail Seasonal Campaign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Back-to-school season starts in 3 weeks — campaign not planned',
    description: [
      'Back-to-school is your second-largest revenue season. It starts in 3 weeks and no social campaign is planned yet.',
      'Last year\'s B2S campaign drove <strong>$1.2M in revenue with 18% social attribution</strong>. I can set up a complete campaign now based on last year\'s playbook.'
    ],
    completedDescription: ['Back-to-school campaign ready — 6-week content calendar, influencer activation list, and performance tracking configured.'],
    footer: 'This supports your goal: Drive $1.4M in B2S season revenue with 20%+ social attribution',
    checkboxItems: [
      { action: 'create-calendar', label: 'Create 6-week B2S content calendar based on last year\'s top performers' },
      { action: 'influencer-shortlist', label: 'Generate influencer shortlist for B2S campaign (mom, student, teacher segments)' },
      { action: 'setup-listening', label: 'Set up B2S keyword Listening query to track category trends' },
      { action: 'configure-tracking', label: 'Configure campaign tracking with UTM parameters and conversion pixels' }
    ],
    moreIdeasPool: [
      { action: 'competitor-watch', label: 'Set up competitor B2S campaign monitoring to respond quickly' },
      { action: 'paid-strategy', label: 'Generate paid social strategy recommendation for B2S budget' },
      { action: 'ugc-campaign', label: 'Launch UGC campaign: "Show us your B2S setup" with branded hashtag' }
    ]
  },
  decisionItems: [
    { key: 'calendar', label: '6-week B2S content calendar created', href: 'publisher-calendar.html' },
    { key: 'influencers', label: 'Influencer shortlist generated (3 segments)', href: 'influencer-management.html' },
    { key: 'listening', label: 'B2S keyword Listening query active', href: 'settings-listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 6-week Back-to-School content calendar', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated influencer shortlist for mom, student, teacher segments', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up B2S keyword Listening with trend tracking', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>B2S campaign ready</strong> — 6-week calendar, influencer list, and tracking configured.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Campaign kickoff: 3 weeks. Last year\'s B2S: $1.2M revenue, 18% social attribution.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Back-to-school season is your second-largest revenue event and it starts in 3 weeks — but no social campaign is planned. Last year the B2S campaign drove $1.2M in revenue with 18% social attribution. I can set up this year\'s campaign now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-calendar', 'influencer-shortlist', 'setup-listening', 'configure-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
