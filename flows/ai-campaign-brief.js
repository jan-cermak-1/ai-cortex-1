const FLOW_AI_CAMPAIGN_BRIEF = {
  id: 'ai-campaign-brief',
  name: 'AI Campaign Brief',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Complete campaign brief generated from top-performing history',
    description: [
      'Cortex generated a complete campaign brief from scratch — objective, target personas, channel mix, messaging pillars, creative direction, and KPIs.',
      'All based on your historical top-performing campaigns: best engagement from Reels (4.2% avg), Stories (3.1%), and carousel (2.8%). Target: Gen Z 18–24, 60% female. Recommended mix: Instagram 45%, TikTok 30%, Meta 25%.'
    ],
    completedDescription: ['Campaign brief created — objective, personas, channel mix, messaging pillars, and KPIs documented in Publisher.'],
    footer: 'This supports your goal: Launch data-driven campaigns faster with AI-generated briefs',
    checkboxItems: [
      { action: 'create-brief', label: 'Create campaign brief document in Publisher' },
      { action: 'set-kpis', label: 'Set KPIs: 2.5% engagement, 120K reach, 4.2% conversion' },
      { action: 'schedule-kickoff', label: 'Add brief to content calendar as campaign kickoff asset' }
    ],
    moreIdeasPool: [
      { action: 'persona-deep-dive', label: 'Generate detailed persona profiles for Gen Z 18–24' },
      { action: 'creative-moodboard', label: 'Create AI moodboard from top-performing creative' }
    ]
  },
  decisionItems: [
    { key: 'brief', label: 'Campaign brief in Publisher', href: 'publisher-calendar.html' },
    { key: 'kpis', label: 'KPIs configured', href: 'unified-analytics.html' },
    { key: 'calendar', label: 'Kickoff added to calendar', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created campaign brief with objective and personas', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set KPIs based on historical benchmarks', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated brief from top-performing campaign patterns', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Campaign brief ready:</strong> Objective, personas, channel mix, KPIs from your best campaigns.', time: '4 min ago', unread: true },
    { icon: 'activity', text: 'Recommended mix: Instagram 45%, TikTok 30%, Meta 25%. Target: Gen Z 18–24.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I generated a complete campaign brief from your top-performing history. Best engagement: Reels 4.2%, Stories 3.1%, carousel 2.8%. Target Gen Z 18–24, 60% female. Recommended mix: Instagram 45%, TikTok 30%, Meta 25%. KPIs: 2.5% engagement, 120K reach.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-brief', 'set-kpis', 'schedule-kickoff'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
