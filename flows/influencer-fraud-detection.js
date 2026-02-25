const FLOW_INFLUENCER_FRAUD_DETECTION = {
  id: 'influencer-fraud-detection',
  name: 'Influencer Fraud Detection',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Fraud scan complete — 2 profiles flagged, ~$18K saved',
    description: [
      'Scanned 8 new influencer deals for fake followers, engagement pods, and audience authenticity.',
      '<strong>2 profiles flagged</strong> (43% fake followers each). <strong>1 engagement pod member</strong> detected. Estimated savings: ~$18K in wasted budget.'
    ],
    completedDescription: ['Fraud detection complete — 2 profiles blocked (43% fake followers), 1 engagement pod member flagged. ~$18K budget protected.'],
    footer: 'This supports your goal: Protect influencer budget from fake engagement and low-quality partnerships',
    checkboxItems: [
      { action: 'block-flagged', label: 'Block 2 flagged profiles from deal pipeline' },
      { action: 'alert-pod', label: 'Alert team about engagement pod member' },
      { action: 'audit-report', label: 'Generate fraud audit report for stakeholders' }
    ],
    moreIdeasPool: [
      { action: 'replacement-search', label: 'Find replacement creators for blocked profiles' },
      { action: 'ongoing-monitor', label: 'Set up ongoing fraud monitoring for active roster' }
    ]
  },
  decisionItems: [
    { key: 'blocked', label: '2 profiles blocked from pipeline', href: 'content-collection.html' },
    { key: 'report', label: 'Fraud audit report generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> scanned 8 influencer profiles for fraud signals', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> flagged 2 profiles with 43% fake followers', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 1 engagement pod member', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Fraud Alert</strong> — 2 of 8 influencers flagged (43% fake followers). ~$18K saved.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Before signing those 8 influencer deals, I ran a fraud scan. <strong>2 profiles</strong> have 43% fake followers. <strong>1 creator</strong> is in an engagement pod. Blocking them saves ~$18K.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['block-flagged', 'alert-pod', 'audit-report'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
