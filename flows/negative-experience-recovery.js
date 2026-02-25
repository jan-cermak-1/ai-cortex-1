const FLOW_NEGATIVE_EXPERIENCE_RECOVERY = {
  id: 'negative-experience-recovery',
  name: 'Negative Experience Recovery',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34 customers had negative experiences last week — no follow-up',
    description: [
      'I identified <strong>34 customers</strong> who had documented negative experiences last week (negative social mentions, unresolved Care cases, 1-2 star reviews) but received no follow-up or recovery gesture.',
      'Service recovery done right within 48 hours converts 70% of dissatisfied customers into loyal advocates. The window is closing.'
    ],
    completedDescription: ['Recovery campaign launched — 34 customers received personalized apology and resolution within 48-hour window.'],
    footer: 'This supports your goal: Convert 70% of negative experiences into positive outcomes through proactive service recovery',
    checkboxItems: [
      { action: 'segment-affected', label: 'Segment 34 customers by issue type and value tier' },
      { action: 'personalized-outreach', label: 'Send personalized recovery outreach tailored to each issue type' },
      { action: 'apply-gestures', label: 'Apply appropriate loyalty gestures by tier (discount, credit, replacement)' },
      { action: 'track-recovery', label: 'Set up recovery tracking: did sentiment improve? Did they return?' }
    ],
    moreIdeasPool: [
      { action: 'executive-handwrite', label: 'Identify top 3 VIP accounts for personal executive follow-up' },
      { action: 'prevent-future', label: 'Analyze common failure points to prevent same issues recurring' },
      { action: 'review-flip', label: 'After resolution, send request to update negative review if issue resolved' }
    ]
  },
  decisionItems: [
    { key: 'outreach', label: 'Personalized recovery outreach sent to 34 customers', href: 'care-inbox.html' },
    { key: 'gestures', label: 'Loyalty gestures applied by tier', href: 'care-inbox.html' },
    { key: 'tracking', label: 'Recovery outcome tracking configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> sent personalized recovery outreach to 34 affected customers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> applied tiered loyalty gestures based on customer value', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 34 customers with negative experiences and no follow-up', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Recovery launched:</strong> 34 customers in personalized 48-hour recovery journey.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected recovery rate: 70% based on industry benchmarks for timely follow-up.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '34 customers had documented negative experiences last week with no follow-up. Service recovery within 48 hours converts 70% of dissatisfied customers into loyal advocates — but the window is closing for these 34.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['segment-affected', 'personalized-outreach', 'apply-gestures', 'track-recovery'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
