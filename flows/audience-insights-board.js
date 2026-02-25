const FLOW_AUDIENCE_INSIGHTS_BOARD = {
  id: 'audience-insights-board',
  name: 'Audience Insights Board',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Audience shift detected — new demographic emerging',
    description: [
      'I analyzed 90 days of engagement data and detected a significant shift: <strong>users aged 25-34</strong> now represent 38% of your engaged audience (up from 21% last quarter).',
      'This group engages most with how-to video content and educational posts — a gap in your current content mix.'
    ],
    completedDescription: ['Audience insights board created — demographic shifts documented, content recommendations applied, and segmented tracking configured.'],
    footer: 'This supports your goal: Understand your evolving audience and adapt content strategy to maximize engagement',
    checkboxItems: [
      { action: 'create-board', label: 'Create audience insights board with demographic breakdown' },
      { action: 'content-recs', label: 'Generate content recommendations for the emerging 25-34 segment' },
      { action: 'update-personas', label: 'Update audience personas in content strategy settings' },
      { action: 'setup-tracking', label: 'Set up segmented performance tracking by age group' }
    ],
    moreIdeasPool: [
      { action: 'competitor-audience', label: 'Compare audience profile with competitor audiences' },
      { action: 'ab-segment', label: 'Set up A/B content test targeting 25-34 segment vs existing persona' },
      { action: 'platform-shift', label: 'Analyze which platforms drive most 25-34 engagement' }
    ]
  },
  decisionItems: [
    { key: 'board', label: 'Audience insights board created', href: 'unified-analytics.html' },
    { key: 'recommendations', label: 'Content recommendations for 25-34 segment ready', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'Segmented tracking configured by age group', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created audience insights board with demographic shifts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated content recommendations for emerging 25-34 segment', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 17-point demographic shift in engaged audience', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Audience shift:</strong> 25-34 age group grew from 21% to 38% this quarter.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Content gap identified: how-to video and educational posts.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I spotted a significant audience shift: users aged 25-34 grew from 21% to 38% of your engaged audience this quarter. This segment loves how-to videos — a format you\'re underusing.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-board', 'content-recs', 'update-personas', 'setup-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
