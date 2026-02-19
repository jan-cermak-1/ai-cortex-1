/* ============================================================
   FLOW: Competitor Alert
   
   Demo scenario: Brand Manager reacts to competitor campaign launch
   Persona: Brand Manager
   ============================================================ */

const FLOW_COMPETITOR_ALERT = {
  id: 'competitor-alert',
  name: 'Competitor Alert',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Competitor campaign detected',
    description: [
      '<strong>CompetitorX</strong> just launched a major campaign targeting your audience segment.',
      'Their "#SummerSavings" campaign is generating significant engagement. I recommend:'
    ],
    completedDescription: [
      'Competitive response strategy activated for CompetitorX\'s #SummerSavings campaign.'
    ],
    footer: 'This supports your goal: Maintain market share leadership with 48-hour competitive response time',
    
    checkboxItems: [
      { action: 'analyze-campaign',  label: 'Deep analyze competitor campaign strategy' },
      { action: 'counter-content',   label: 'Generate counter-content ideas for our channels' },
      { action: 'boost-budget',      label: 'Recommend paid boost for our competing posts' },
      { action: 'audience-protect',  label: 'Set up retargeting for our engaged audience' }
    ],
    
    moreIdeasPool: [
      { action: 'share-voice',      label: 'Calculate share of voice impact' },
      { action: 'influencer-check', label: 'Check if they\'re using influencers we should engage' },
      { action: 'price-monitor',    label: 'Monitor for pricing or promotion changes' },
      { action: 'sentiment-track',  label: 'Track audience sentiment toward their campaign' },
      { action: 'press-coverage',   label: 'Monitor press coverage of their campaign' },
      { action: 'exec-alert',       label: 'Prepare executive briefing on competitive threat' }
    ]
  },

  decisionItems: [
    { key: 'analysis',  label: 'Campaign analysis report ready',         href: 'unified-analytics.html' },
    { key: 'content',   label: '6 counter-content ideas generated',      href: 'content-feed.html' },
    { key: 'boost',     label: 'Boost recommendations ($2,500 budget)',  href: 'publisher-calendar.html' },
    { key: 'retarget',  label: 'Retargeting audience created',           href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> completed competitor campaign analysis', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated 6 counter-content ideas', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> prepared paid boost recommendations', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created retargeting audience segment', time: '3 minutes ago' },
    { text: '<strong>You</strong> approved competitive response strategy', time: '4 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected CompetitorX #SummerSavings campaign launch', time: '10 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Competitor alert:</strong> CompetitorX launched #SummerSavings campaign.', time: '10 min ago', unread: true },
    { icon: 'ai', text: 'Competitive analysis ready. Their engagement up <strong>+45%</strong> today.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Share of voice monitoring activated for 72 hours.', time: '5 min ago', unread: false },
    { icon: 'activity', text: 'Retargeting audience includes 125K high-value users.', time: '3 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', delay: 1500 },
    { type: 'message', sender: 'ai', text: '<strong>Competitor Alert:</strong> CompetitorX just launched a major campaign targeting your audience segment.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Their <strong>#SummerSavings</strong> campaign is generating +45% engagement spike. I recommend a counter-strategy.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I can analyze their campaign, generate counter-content, recommend paid boosts, and set up audience retargeting.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['analyze-campaign', 'counter-content', 'boost-budget', 'audience-protect'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Competitive response activated! Analysis ready, 6 counter-content ideas generated, $2,500 boost budget recommended.', delay: 2500 },
    { type: 'navigate', page: 'unified-analytics.html', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Here\'s the detailed campaign analysis report with share of voice comparison.', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Boost recommendations ready. Retargeting audience of 125K high-value users created. Demo complete!', delay: 2000 }
  ]
};
