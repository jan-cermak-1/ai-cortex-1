const FLOW_MICROSOFT_SCALE_CARE = {
  id: 'microsoft-scale-care',
  name: 'Enterprise Care Scale',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Care scale ready for 3x volume surge',
    description: [
      'Your care team handles <strong>45,000 messages/month</strong> across 12 channels.',
      'Product launch event incoming. I configured auto-routing, bot containment, and priority queuing to handle <strong>3x volume surge</strong>.'
    ],
    completedDescription: ['Enterprise care scale configured — auto-routing, bot containment, and priority queuing active for 3x surge.'],
    footer: 'This supports your goal: Handle product launch volume without SLA degradation',
    checkboxItems: [
      { action: 'auto-routing', label: 'Configure auto-routing rules for 12 channels' },
      { action: 'bot-containment', label: 'Tune bot containment for launch FAQs' },
      { action: 'priority-queue', label: 'Set up priority queuing for high-value customers' }
    ],
    moreIdeasPool: [
      { action: 'capacity-forecast', label: 'Forecast agent capacity for surge period' },
      { action: 'escalation-rules', label: 'Configure escalation rules for overflow' }
    ]
  },
  decisionItems: [
    { key: 'routing', label: 'Auto-routing configured for 12 channels', href: 'care-inbox.html' },
    { key: 'queue', label: 'Priority queuing active', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured auto-routing for 12 channels', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> tuned bot containment for launch FAQs', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Care Scale</strong> — Ready for 3x surge. 45K/month baseline, 12 channels.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your care team handles 45,000 messages/month across 12 channels. Product launch in 48 hours — I configured auto-routing, bot containment, and priority queuing to handle a <strong>3x volume surge</strong>.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['auto-routing', 'bot-containment', 'priority-queue'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
