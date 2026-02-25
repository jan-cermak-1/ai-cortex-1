const FLOW_HEALTHCARE_SOCIAL_MONITORING = {
  id: 'healthcare-social-monitoring',
  name: 'Healthcare Social Monitoring',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Health misinformation trending related to your product category',
    description: [
      'I detected health misinformation about your product category spreading on TikTok and X — currently at 840K views and growing fast.',
      '<strong>2 posts directly mention your brand name</strong> with inaccurate claims. This requires a measured, evidence-based response — not an emotional one.'
    ],
    completedDescription: ['Healthcare misinformation response activated — evidence post published, Care briefed, and medical affairs notified.'],
    footer: 'This supports your goal: Protect brand and public health reputation by responding to misinformation within 2 hours',
    checkboxItems: [
      { action: 'monitor-spread', label: 'Set up real-time monitoring for the misinformation spread velocity' },
      { action: 'draft-response', label: 'Draft evidence-based response with approved medical communications framework' },
      { action: 'alert-medical', label: 'Alert Medical Affairs/Legal team for response review' },
      { action: 'brief-care', label: 'Brief Care team with FAQ responses for concerned customer inquiries' }
    ],
    moreIdeasPool: [
      { action: 'influencer-counter', label: 'Identify credible healthcare influencers for organic counter-messaging' },
      { action: 'factcheck-collab', label: 'Initiate collaboration with fact-checking organizations' },
      { action: 'media-prep', label: 'Prepare media statement in case story is picked up by press' }
    ]
  },
  decisionItems: [
    { key: 'monitoring', label: 'Misinformation spread tracking active', href: 'unified-analytics.html' },
    { key: 'response', label: 'Evidence-based response draft ready for medical review', href: 'publisher-calendar.html' },
    { key: 'care', label: 'Care team briefed with FAQ on misinformation claims', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> set up real-time monitoring for misinformation spread', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> drafted evidence-based response for medical team review', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected health misinformation featuring brand name — 840K views', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>ALERT: Health misinformation featuring brand at 840K views and growing.', time: '3 min ago', unread: true },
    { icon: 'activity', text: 'Medical Affairs notified. Response draft ready. Care briefed on customer inquiries.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Alert: Health misinformation about your product category is trending — 840K views and 2 posts mention your brand directly. This requires a careful, evidence-based response coordinated with Medical Affairs. I\'ve prepared the actions.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['monitor-spread', 'draft-response', 'alert-medical', 'brief-care'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
