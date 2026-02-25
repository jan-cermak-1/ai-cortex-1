const FLOW_POST_PURCHASE_CARE = {
  id: 'post-purchase-care',
  name: 'Post-Purchase Care Automation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Post-purchase care gap: no touchpoints in first 14 days',
    description: [
      'I analyzed your customer journey and found a significant gap: after purchase, customers receive zero proactive touchpoints in the first 14 days — the highest-risk window for product issues and returns.',
      '<strong>48% of returns</strong> happen because customers couldn\'t figure out how to use the product. A post-purchase care sequence would address this proactively.'
    ],
    completedDescription: ['Post-purchase care sequence configured — 3-touchpoint journey active for all new purchasers (Days 1, 7, 14).'],
    footer: 'This supports your goal: Reduce 30-day return rate by 20% through proactive post-purchase customer care',
    checkboxItems: [
      { action: 'setup-sequence', label: 'Configure 3-touchpoint post-purchase sequence (Days 1, 7, 14)' },
      { action: 'day1-content', label: 'Create Day 1 "getting started" content with product tips' },
      { action: 'setup-sentiment', label: 'Set up sentiment monitoring on post-purchase messages' },
      { action: 'escalate-rules', label: 'Configure escalation rules: route frustrated customers to senior Care agents' }
    ],
    moreIdeasPool: [
      { action: 'video-tips', label: 'Add video "how to use" content from UGC library to Day 1 message' },
      { action: 'community-invite', label: 'Invite new purchasers to brand community at Day 7 for peer support' },
      { action: 'review-request', label: 'Include review request in Day 14 touchpoint (after positive experience established)' }
    ]
  },
  decisionItems: [
    { key: 'sequence', label: 'Post-purchase care sequence configured (Days 1, 7, 14)', href: 'care-inbox.html' },
    { key: 'content', label: 'Day 1 getting-started content created', href: 'publisher-calendar.html' },
    { key: 'monitoring', label: 'Post-purchase sentiment monitoring active', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured 3-touchpoint post-purchase care sequence', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created Day 1 product tips content for new purchasers', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified post-purchase care gap in customer journey', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Post-purchase care active</strong> — 3-touchpoint sequence live for all new purchasers.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected return rate reduction: 20% based on similar post-purchase care programs.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found a gap: after purchase, customers get zero proactive touchpoints in the first 14 days — the highest-risk period for returns. 48% of returns happen because customers can\'t figure out how to use the product. I can fix this now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['setup-sequence', 'day1-content', 'setup-sentiment', 'escalate-rules'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
