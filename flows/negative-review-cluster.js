const FLOW_NEGATIVE_REVIEW_CLUSTER = {
  id: 'negative-review-cluster',
  name: 'Negative Review Cluster',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Negative review cluster identified — 47 reviews, same issue',
    description: [
      'I detected a cluster of <strong>47 negative reviews in the past 2 weeks</strong> all describing the same issue: "packaging damaged on arrival."',
      'This is a systemic product quality issue — not a response problem. I can help on both the communications and product side.'
    ],
    completedDescription: ['Review cluster addressed — product team notified, affected customers offered resolution, and monitoring set up.'],
    footer: 'This supports your goal: Identify and escalate systemic product issues detected via review data within 48 hours',
    checkboxItems: [
      { action: 'respond-affected', label: 'Draft personalized resolution offers for all 47 affected customers' },
      { action: 'notify-ops', label: 'Send packaging issue report to Operations/Product team' },
      { action: 'setup-monitoring', label: 'Set up monitoring query to track if issue resolves after fix' },
      { action: 'proactive-post', label: 'Draft proactive social post acknowledging the issue' }
    ],
    moreIdeasPool: [
      { action: 'refund-workflow', label: 'Set up automatic refund offer workflow for packaging complaints' },
      { action: 'followup-request', label: 'Send post-resolution review update request to customers who accepted fix' },
      { action: 'cluster-report', label: 'Generate monthly product quality cluster analysis report' }
    ]
  },
  decisionItems: [
    { key: 'responses', label: '47 resolution offer drafts ready for review', href: 'community-inbox.html' },
    { key: 'ops', label: 'Packaging issue report sent to Operations', href: 'unified-analytics.html' },
    { key: 'monitoring', label: 'Issue resolution monitoring query active', href: 'settings-listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted 47 resolution offers for packaging complaint customers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent packaging issue report to Operations team', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 47-review cluster around same packaging issue', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Review cluster detected:</strong> 47 reviews, same issue — Operations notified.', time: '2 min ago', unread: true },
    { icon: 'activity', text: '47 resolution offers ready. Customer responses expected within 24h.', time: '1 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I detected a cluster of 47 negative reviews in 2 weeks all describing "packaging damaged on arrival." This is a systemic operations issue — not just a customer service one. I can address both angles.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['respond-affected', 'notify-ops', 'setup-monitoring', 'proactive-post'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
