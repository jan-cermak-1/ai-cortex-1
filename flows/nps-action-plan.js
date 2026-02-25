const FLOW_NPS_ACTION_PLAN = {
  id: 'nps-action-plan',
  name: 'NPS Action Plan',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'NPS dropped 8 points — social signals explain why',
    description: [
      'Your NPS just dropped from 52 to 44 — an 8-point decline. I cross-referenced with social listening data and found a clear correlation: <strong>3 recurring complaint themes</strong> in social over the past 45 days directly correspond to NPS detractor comments.',
      'Social listening has diagnosed the "why" — here\'s how to act on it:'
    ],
    completedDescription: ['NPS action plan activated — 3 complaint themes addressed across Care, Product, and Publisher modules.'],
    footer: 'This supports your goal: Improve NPS to 60+ by Q4 through systematic resolution of top customer friction points',
    checkboxItems: [
      { action: 'map-themes', label: 'Map 3 social complaint themes to specific product/service friction points' },
      { action: 'brief-product', label: 'Send issue brief to Product team with social evidence and frequency data' },
      { action: 'care-faq', label: 'Create Care FAQ responses for the 3 top complaint categories' },
      { action: 'acknowledgment-post', label: 'Draft social acknowledgment post: "We hear you and here\'s what we\'re doing"' }
    ],
    moreIdeasPool: [
      { action: 'promoter-amplification', label: 'Identify and amplify promoter voices (high NPS score customers on social)' },
      { action: 'track-nps-correlation', label: 'Set up ongoing social-to-NPS correlation tracking' },
      { action: 'follow-up-survey', label: 'Send follow-up survey to detractors to validate friction point hypotheses' }
    ]
  },
  decisionItems: [
    { key: 'brief', label: 'Issue brief sent to Product team with social evidence', href: 'unified-analytics.html' },
    { key: 'care', label: 'Care FAQ templates for 3 complaint themes deployed', href: 'care-inbox.html' },
    { key: 'post', label: 'Acknowledgment post draft ready for approval', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> mapped 3 social complaint themes to NPS decline drivers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent issue brief with social evidence to Product team', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 8-point NPS drop correlated with social complaint themes', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>NPS action plan:</strong> 3 friction themes identified — product briefed, Care updated.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Social listening diagnosed the NPS drop before the quarterly survey was analyzed.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'NPS dropped 8 points. I cross-referenced with social listening and found 3 recurring complaint themes that directly explain the detractor comments. Social diagnosed the "why" — here\'s how to act on it across your modules.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['map-themes', 'brief-product', 'care-faq', 'acknowledgment-post'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
