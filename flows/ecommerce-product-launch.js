const FLOW_ECOMMERCE_PRODUCT_LAUNCH = {
  id: 'ecommerce-product-launch',
  name: 'eCommerce Product Launch',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Product launch in 72 hours — social + review infrastructure not ready',
    description: [
      'New product launches tomorrow in 72 hours. Social campaign, review collection, and community infrastructure aren\'t configured yet.',
      'A proper launch setup — UGC collection, review request flow, influencer activation, and hashtag tracking — can increase launch-day revenue by an estimated <strong>35-45%</strong>.'
    ],
    completedDescription: ['Product launch infrastructure configured — social campaign live, review flow active, influencer briefs sent, hashtag tracking on.'],
    footer: 'This supports your goal: Maximize day-1 product launch reach and first-week review velocity',
    checkboxItems: [
      { action: 'launch-campaign', label: 'Create launch content calendar: countdown, launch day, post-launch (2 weeks)' },
      { action: 'review-flow', label: 'Set up post-purchase review request flow starting from order Day 3' },
      { action: 'influencer-briefs', label: 'Send launch briefs to 6 confirmed influencer partners' },
      { action: 'hashtag-tracking', label: 'Set up hashtag Listening for launch day social monitoring' }
    ],
    moreIdeasPool: [
      { action: 'early-access', label: 'Create social-exclusive early access offer for followers' },
      { action: 'ugc-contest', label: 'Launch UGC contest: share your unboxing for a prize' },
      { action: 'care-faq', label: 'Set up product FAQ in Care for expected launch questions' }
    ]
  },
  decisionItems: [
    { key: 'campaign', label: 'Launch content calendar created (2 weeks)', href: 'publisher-calendar.html' },
    { key: 'reviews', label: 'Post-purchase review flow configured', href: 'community-inbox.html' },
    { key: 'monitoring', label: 'Launch hashtag monitoring active', href: 'settings-listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 2-week launch content calendar with countdown posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent launch briefs to 6 influencer partners', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up hashtag Listening for launch day monitoring', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Launch infrastructure ready</strong> — campaign, reviews, influencer briefs, and monitoring configured.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Launch in 72 hours. 6 influencer briefs confirmed. Hashtag monitoring active.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Product launches in 72 hours but social campaign, review flow, and influencer briefs aren\'t configured. A proper launch setup can increase day-1 revenue by 35-45%. Let me get everything ready now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['launch-campaign', 'review-flow', 'influencer-briefs', 'hashtag-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
