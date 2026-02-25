const FLOW_LOYALTY_CAMPAIGN = {
  id: 'loyalty-campaign',
  name: 'Loyalty Campaign via Social',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '1,200 high-LTV customers with no social connection to your brand',
    description: [
      'I found <strong>1,200 high-LTV customers</strong> (avg LTV: $2,400) who are not connected to any of your social channels — they\'re loyal buyers but invisible in your social ecosystem.',
      'Converting these customers to social followers creates a direct owned channel with your most valuable segment.'
    ],
    completedDescription: ['Loyalty social campaign configured — 1,200 high-LTV customers enrolled in exclusive social follower acquisition journey.'],
    footer: 'This supports your goal: Build a direct social channel with your highest-value customer segment',
    checkboxItems: [
      { action: 'identify-segment', label: 'Identify and segment 1,200 high-LTV, non-social customers' },
      { action: 'exclusive-offer', label: 'Create exclusive "VIP social community" offer for this segment' },
      { action: 'email-campaign', label: 'Set up targeted email campaign inviting them to follow across channels' },
      { action: 'vip-content', label: 'Create VIP-only content series to give social following tangible value' }
    ],
    moreIdeasPool: [
      { action: 'loyalty-program', label: 'Link social following to loyalty program points for additional incentive' },
      { action: 'private-community', label: 'Create private community group for VIP customers (Facebook Group / Discord)' },
      { action: 'early-access', label: 'Offer early access to new products/features as a social follower benefit' }
    ]
  },
  decisionItems: [
    { key: 'campaign', label: 'Loyalty social campaign configured for 1,200 HVCs', href: 'publisher-calendar.html' },
    { key: 'email', label: 'Email campaign scheduled to 1,200 customers', href: 'publisher-calendar.html' },
    { key: 'vip-content', label: 'VIP content series created and scheduled', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 1,200 high-LTV customers not connected socially', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured VIP social community offer and email campaign', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created VIP-only content series for social follower incentive', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Loyalty campaign active</strong> — 1,200 high-LTV customers invited to VIP social community.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Email campaign launches tomorrow. VIP content series ready in Publisher.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 1,200 of your highest-LTV customers who aren\'t connected to any of your social channels — loyal buyers but invisible socially. Converting them to followers creates a direct owned channel with your most valuable segment.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['identify-segment', 'exclusive-offer', 'email-campaign', 'vip-content'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
