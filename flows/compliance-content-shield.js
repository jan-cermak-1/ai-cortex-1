const FLOW_COMPLIANCE_CONTENT_SHIELD = {
  id: 'compliance-content-shield',
  name: 'Compliance Content Shield',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Pre-publish scan: 3 of 18 posts flagged for regulatory risk',
    description: [
      'Cortex ran pre-publish compliance scan across <strong>18 scheduled posts</strong> — flagged 3 for regulatory risk.',
      'Post #7: undisclosed partnership (FTC); Post #12: banned health claim (FDA); Post #14: healthcare language requiring disclaimer. I\'ve suggested approved rewrites for each. Estimated risk: high for #7 and #12, medium for #14.'
    ],
    completedDescription: ['Compliance scan complete — 3 posts flagged, approved rewrites suggested, 15 posts cleared for publish.'],
    footer: 'This supports your goal: Prevent regulatory violations before content goes live',
    checkboxItems: [
      { action: 'apply-rewrites', label: 'Apply suggested approved rewrites to 3 flagged posts' },
      { action: 'hold-flagged', label: 'Hold 3 flagged posts until manual review' },
      { action: 'add-disclaimers', label: 'Add required disclaimers to Post #14' }
    ],
    moreIdeasPool: [
      { action: 'ftc-disclosure', label: 'Add FTC disclosure template for Post #7' },
      { action: 'legal-flag', label: 'Escalate Post #12 to legal for FDA claim review' }
    ]
  },
  decisionItems: [
    { key: 'rewrites', label: '3 rewrites applied', href: 'publisher-calendar.html' },
    { key: 'held', label: '3 posts held for review', href: 'publisher-calendar.html' },
    { key: 'cleared', label: '15 posts cleared for publish', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> applied approved rewrites to 3 flagged posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> held 3 posts for manual compliance review', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> flagged 3 of 18 posts — FTC, FDA, healthcare risks', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Compliance scan:</strong> 3 of 18 posts flagged. FTC, FDA, healthcare risks.', time: '3 min ago', unread: true },
    { icon: 'activity', text: 'Post #7 undisclosed partnership. #12 banned claim. #14 needs disclaimer.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Pre-publish compliance scan: 3 of 18 scheduled posts flagged. Post 7 has undisclosed partnership — FTC risk. Post 12 has banned health claim — FDA. Post 14 needs healthcare disclaimer. I\'ve suggested approved rewrites for each.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-rewrites', 'hold-flagged', 'add-disclaimers'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
