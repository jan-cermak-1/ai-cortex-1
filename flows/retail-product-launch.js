const FLOW_RETAIL_PRODUCT_LAUNCH = {
  id: 'retail-product-launch',
  name: 'Retail Product Launch',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Launch in 72 hours — protocol activated',
    description: [
      'New product launches in <strong>72 hours</strong>. Cortex activates launch protocol.',
      'Pre-scheduled 34 posts across 8 channels, configured listening alerts, set care priority rules, enabled launch-specific bot FAQs.'
    ],
    completedDescription: ['Launch protocol activated — 34 posts scheduled, listening alerts and care rules configured.'],
    footer: 'This supports your goal: Flawless product launch across all touchpoints',
    checkboxItems: [
      { action: 'schedule-posts', label: 'Pre-schedule 34 posts across 8 channels' },
      { action: 'listening-alerts', label: 'Configure listening alerts for launch keywords' },
      { action: 'care-priority', label: 'Set care priority rules for launch-related queries' },
      { action: 'bot-faqs', label: 'Enable launch-specific bot FAQs' }
    ],
    moreIdeasPool: [
      { action: 'influencer-briefs', label: 'Send launch briefs to influencer partners' },
      { action: 'ugc-monitoring', label: 'Monitor UGC with product hashtags' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '34 posts scheduled across 8 channels', href: 'publisher-calendar.html' },
    { key: 'alerts', label: 'Listening alerts configured', href: 'listening.html' },
    { key: 'care', label: 'Care priority rules active', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> pre-scheduled 34 posts across 8 channels', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured listening alerts and care priority rules', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Launch Protocol</strong> — 72 hrs to launch. 34 posts, alerts, care rules ready.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Product launch in 72 hours. I activated launch protocol: <strong>34 posts</strong> pre-scheduled across 8 channels, listening alerts configured, care priority rules set, launch-specific bot FAQs enabled.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['schedule-posts', 'listening-alerts', 'care-priority', 'bot-faqs'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
