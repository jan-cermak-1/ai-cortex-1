const FLOW_REVIEW_INCENTIVE_CAMPAIGN = {
  id: 'review-incentive-campaign',
  name: 'Review Incentive Campaign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Review volume dropped 40% — 3 products below 25 reviews',
    description: [
      'Your overall review submission rate dropped 40% in the past 60 days. <strong>3 key products now have fewer than 25 reviews</strong>, falling below the threshold for credible social proof.',
      'A targeted review incentive campaign can recover volume within 4-6 weeks.'
    ],
    completedDescription: ['Review incentive campaign launched — post-purchase email flow configured, 3 products targeted, and tracking set up.'],
    footer: 'This supports your goal: Maintain 50+ reviews per key product with 4.5+ average rating',
    checkboxItems: [
      { action: 'setup-email-flow', label: 'Configure post-purchase review request email flow (Day 3 and Day 7)' },
      { action: 'target-products', label: 'Prioritize the 3 low-review products for first campaign wave' },
      { action: 'create-incentive', label: 'Set up 10% next-purchase discount incentive for verified reviewers' },
      { action: 'track-campaign', label: 'Create review volume tracking dashboard for campaign performance' }
    ],
    moreIdeasPool: [
      { action: 'sms-touchpoint', label: 'Add SMS review request as a 3rd touchpoint for non-email openers' },
      { action: 'vip-segment', label: 'Prioritize loyalty program members for review requests' },
      { action: 'content-hub', label: 'Create Content Hub album for UGC gathered from this campaign' }
    ]
  },
  decisionItems: [
    { key: 'email-flow', label: 'Post-purchase review email flow configured', href: 'community-inbox.html' },
    { key: 'campaign', label: 'Review incentive campaign active for 3 products', href: 'community-inbox.html' },
    { key: 'tracking', label: 'Review volume tracking dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured post-purchase review request email flow', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up 10% discount incentive for verified reviewers', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 3 products below 25-review threshold', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Review campaign launched</strong> — post-purchase emails configured for 3 products.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected review volume recovery: 4-6 weeks based on historical rates.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Review volume dropped 40% in the past 60 days. Three key products now have fewer than 25 reviews — that\'s below the credibility threshold for most shoppers. I can launch a recovery campaign now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['setup-email-flow', 'target-products', 'create-incentive', 'track-campaign'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
