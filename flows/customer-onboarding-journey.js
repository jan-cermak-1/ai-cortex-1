const FLOW_CUSTOMER_ONBOARDING_JOURNEY = {
  id: 'customer-onboarding-journey',
  name: 'Customer Onboarding Journey',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'New customer cohort (847) needs social onboarding journey',
    description: [
      '<strong>847 new customers</strong> signed up last month and have not yet engaged with your social channels.',
      'Customers who engage socially within their first 30 days show 2.8x higher 12-month LTV and 34% lower churn rate. Setting up a social onboarding journey now captures this window.'
    ],
    completedDescription: ['Social onboarding journey configured — 847 new customers enrolled in 4-step social engagement sequence.'],
    footer: 'This supports your goal: Convert 60% of new customers into social media followers within 30 days of signup',
    checkboxItems: [
      { action: 'segment-cohort', label: 'Segment the 847 new customers into the onboarding journey' },
      { action: 'create-welcome-content', label: 'Create welcome social content tailored for new customers' },
      { action: 'setup-email-sequence', label: 'Set up 4-step email sequence linking to your social channels' },
      { action: 'track-conversion', label: 'Set up social follow conversion tracking for this cohort' }
    ],
    moreIdeasPool: [
      { action: 'community-group', label: 'Create new customer community group/hashtag for peer connection' },
      { action: 'product-tips', label: 'Schedule 4 "product tip" posts specifically for new user education' },
      { action: 'satisfaction-check', label: 'Send satisfaction check-in at Day 7 and Day 30' }
    ]
  },
  decisionItems: [
    { key: 'journey', label: '847 customers enrolled in social onboarding journey', href: 'publisher-calendar.html' },
    { key: 'content', label: 'Welcome content created for new customer sequence', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'Social follow conversion tracking configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> enrolled 847 new customers in social onboarding journey', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created 4-step welcome email sequence with social links', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up social follow conversion tracking for cohort', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Onboarding journey active</strong> — 847 customers enrolled in 4-step social sequence.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected 30-day social follow rate: 60% based on journey performance benchmarks.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '847 new customers from last month haven\'t engaged socially yet. Customers who engage within Day 30 show 2.8x higher LTV. I can enroll them in a social onboarding journey before that window closes.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['segment-cohort', 'create-welcome-content', 'setup-email-sequence', 'track-conversion'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
