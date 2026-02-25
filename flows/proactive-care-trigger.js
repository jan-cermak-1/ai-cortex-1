const FLOW_PROACTIVE_CARE_TRIGGER = {
  id: 'proactive-care-trigger',
  name: 'Proactive Care Triggers',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 customers tweeted product frustration — no ticket yet',
    description: [
      'Cortex identified <strong>12 customers</strong> who tweeted product frustration before opening a formal ticket.',
      'Proactive care configured: auto-reach out with personalized outreach messages before they escalate.'
    ],
    completedDescription: ['Proactive care active: 12 personalized outreach messages drafted and sent.'],
    footer: 'This supports your goal: Resolve issues before they become formal complaints',
    checkboxItems: [
      { action: 'draft-outreach', label: 'Draft personalized outreach for 12 customers' },
      { action: 'enable-trigger', label: 'Enable proactive care trigger for product frustration' },
      { action: 'review-templates', label: 'Review and approve outreach templates' }
    ],
    moreIdeasPool: [
      { action: 'expand-triggers', label: 'Add more proactive care triggers' },
      { action: 'track-conversion', label: 'Track proactive outreach conversion rate' }
    ]
  },
  decisionItems: [
    { key: 'outreach-sent', label: '12 outreach messages sent', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted 12 personalized outreach messages', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 12 customers with product frustration tweets', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Proactive Care</strong> — 12 customers tweeted frustration, outreach drafted', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 12 customers who tweeted product frustration but haven\'t opened a ticket yet. I drafted personalized outreach messages — we can reach out before they escalate.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['draft-outreach', 'enable-trigger', 'review-templates'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
