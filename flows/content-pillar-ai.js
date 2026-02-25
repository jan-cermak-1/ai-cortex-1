const FLOW_CONTENT_PILLAR_AI = {
  id: 'content-pillar-ai',
  name: 'Content Pillar AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '5 content pillars drive 80% of engagement',
    description: [
      'Based on your top 100 posts from the past year, Cortex identified <strong>5 content pillars</strong> driving 80% of engagement.',
      'Recommendation: increase Educational (18%→30%), reduce Promotional (35%→20%).'
    ],
    completedDescription: ['Content mix adjusted: Educational +12%, Promotional -15%.'],
    footer: 'This supports your goal: Optimize content mix for engagement',
    checkboxItems: [
      { action: 'increase-educational', label: 'Increase Educational content 18%→30%' },
      { action: 'reduce-promotional', label: 'Reduce Promotional content 35%→20%' },
      { action: 'create-calendar', label: 'Create pillar-balanced content calendar' }
    ],
    moreIdeasPool: [
      { action: 'pillar-breakdown', label: 'View full pillar performance breakdown' },
      { action: 'platform-pillars', label: 'Pillar mix by platform' }
    ]
  },
  decisionItems: [
    { key: 'mix-adjusted', label: 'Content mix adjusted per pillars', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 5 content pillars driving 80% engagement', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> adjusted content mix: Educational +12%, Promotional -15%', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Content Pillars</strong> — 5 pillars → 80% engagement, mix recommended', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'From your top 100 posts this year, I found 5 content pillars driving 80% of engagement. I recommend increasing Educational from 18% to 30% and reducing Promotional from 35% to 20%.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['increase-educational', 'reduce-promotional', 'create-calendar'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
