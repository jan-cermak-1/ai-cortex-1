const FLOW_CARE_TO_COMMERCE_RECOVERY = {
  id: 'care-to-commerce-recovery',
  name: 'Care-to-Commerce Recovery',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '456 negative-care customers: Recovery campaign triggered',
    description: [
      'Cortex identified 456 customers who had negative care experiences in the past 30 days and didn\'t repurchase. Triggers a recovery campaign: personalized offer + dedicated care agent follow-up for the top 50 high-value accounts.',
      'Estimated recovery: $89K in 90 days based on similar campaigns. Top 50 already in outreach queue.'
    ],
    completedDescription: ['456 negative-care customers identified — recovery campaign with personalized offer. Top 50 high-value in dedicated follow-up.'],
    footer: 'This supports your goal: Recover revenue from customers harmed by poor care',
    checkboxItems: [
      { action: 'identify-customers', label: 'Identify 456 negative-care, no-repurchase customers' },
      { action: 'create-offer', label: 'Create personalized recovery offer' },
      { action: 'prioritize-top50', label: 'Assign top 50 high-value to dedicated agent follow-up' }
    ],
    moreIdeasPool: [
      { action: 'recovery-dashboard', label: 'Build recovery campaign performance dashboard' }
    ]
  },
  decisionItems: [
    { key: 'customers', label: '456 customers in recovery', href: 'care-inbox.html' },
    { key: 'top50', label: 'Top 50 in agent queue', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> identified 456 negative-care customers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> queued top 50 for dedicated follow-up', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Recovery campaign:</strong> 456 negative-care, no repurchase. Top 50 in queue. Est. $89K recovery in 90 days.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 456 customers with negative care experiences in the past 30 days who didn\'t repurchase. I triggered a recovery campaign: personalized offer plus dedicated care agent follow-up for the top 50 high-value accounts. Estimated recovery: $89K in 90 days. Top 50 already in outreach queue.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['identify-customers', 'create-offer', 'prioritize-top50'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
