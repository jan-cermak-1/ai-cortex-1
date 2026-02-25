const FLOW_INFLUENCER_SPIKE_DETECTION = {
  id: 'influencer-spike-detection',
  name: 'Influencer Spike Detection',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Micro-influencer driving unexpected brand spike',
    description: [
      'A micro-influencer with 48K followers posted about your product organically and it\'s driving an <strong>850% spike in brand mentions</strong> in the past 4 hours.',
      'The post has 12K likes and is being reshared widely. This is a partnership opportunity you shouldn\'t miss.'
    ],
    completedDescription: ['Influencer identified and outreach initiated — partnership opportunity documented and team notified.'],
    footer: 'This supports your goal: Identify and activate organic brand advocates within 24 hours of detection',
    checkboxItems: [
      { action: 'capture-data', label: 'Capture full performance data for the influencer post' },
      { action: 'draft-outreach', label: 'Draft personalized partnership outreach message' },
      { action: 'create-profile', label: 'Create influencer profile in Influencer Management module' },
      { action: 'brief-team', label: 'Brief influencer marketing team about the opportunity' }
    ],
    moreIdeasPool: [
      { action: 'boost-post', label: 'Request approval to boost the influencer post as a paid partnership' },
      { action: 'find-similar', label: 'Find 5 similar micro-influencers with same audience profile' },
      { action: 'usc-rights', label: 'Request usage rights for the post content for brand channels' }
    ]
  },
  decisionItems: [
    { key: 'profile', label: 'Influencer profile created in IM module', href: 'influencer-management.html' },
    { key: 'outreach', label: 'Partnership outreach draft ready for approval', href: 'influencer-management.html' },
    { key: 'data', label: 'Performance data captured for brand spike report', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> captured influencer post performance data', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> drafted personalized partnership outreach message', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created influencer profile in IM module', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 850% brand mention spike from organic influencer post', time: '4 hours ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Influencer spike detected:</strong> Organic post driving 850% brand mention increase.', time: '4h ago', unread: true },
    { icon: 'activity', text: 'Partnership outreach ready. Influencer has 48K followers, 8.2% engagement rate.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'A micro-influencer with 48K followers posted about your product organically — it\'s driving an 850% spike in brand mentions. 12K likes and growing. This is a partnership window.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['capture-data', 'draft-outreach', 'create-profile', 'brief-team'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'influencer-management.html', cursorTarget: '[data-nav-id="influencers"]', delay: 2000 }
  ]
};
