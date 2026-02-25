const FLOW_THREE_CLOUD_CAMPAIGN = {
  id: 'three-cloud-campaign',
  name: 'Three-Cloud Campaign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Campaign across all three Emplifi clouds',
    description: [
      'Launch a campaign that runs across Social Marketing, Commerce, and Service simultaneously: Social drives awareness, Commerce boosts product reviews and social proof, Service deflects support volume with FAQ content.',
      'Cortex coordinates timing and measurement. Last campaign: 340K social reach, 2,400 new reviews, 23% support deflection.'
    ],
    completedDescription: ['Three-cloud campaign coordinated — Social, Commerce, Service aligned. Timing and measurement unified.'],
    footer: 'This supports your goal: Maximize campaign impact across the full customer journey',
    checkboxItems: [
      { action: 'align-social', label: 'Align Social Marketing content and timing' },
      { action: 'boost-reviews', label: 'Activate Commerce review collection' },
      { action: 'deploy-faq', label: 'Deploy Service FAQ content for deflection' }
    ],
    moreIdeasPool: [
      { action: 'unified-report', label: 'Build three-cloud campaign report' }
    ]
  },
  decisionItems: [
    { key: 'social', label: 'Social content aligned', href: 'publisher-calendar.html' },
    { key: 'commerce', label: 'Commerce review boost active', href: 'unified-analytics.html' },
    { key: 'service', label: 'FAQ deflection deployed', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> coordinated three-cloud campaign timing', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> aligned Social, Commerce, Service measurement', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Three-cloud campaign:</strong> Social 340K reach, 2.4K reviews, 23% support deflection. Coordinated.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I coordinated your three-cloud campaign: Social Marketing drives awareness, Commerce boosts reviews, Service deflects with FAQ. Last run: 340K social reach, 2,400 new reviews, 23% support deflection. Timing and measurement unified.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['align-social', 'boost-reviews', 'deploy-faq'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
