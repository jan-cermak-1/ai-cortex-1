const FLOW_NIKE_CREATOR_NETWORK = {
  id: 'nike-creator-network',
  name: 'Creator Network Intelligence',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '450 creator partnerships — 8 misaligned, 12 upgrade, 34 recruit',
    description: [
      'Managing <strong>450 creator partnerships</strong> globally.',
      'Cortex detected: <strong>8 creators</strong> with early brand misalignment signals, <strong>12 ready</strong> for tier upgrade, <strong>34 high-potential</strong> micro-creators to recruit for next season.'
    ],
    completedDescription: ['Creator network intelligence applied — 8 flagged, 12 upgrade candidates, 34 recruitment targets.'],
    footer: 'This supports your goal: Proactively manage global creator network health',
    checkboxItems: [
      { action: 'flag-misaligned', label: 'Flag 8 creators with misalignment signals for review' },
      { action: 'upgrade-12', label: 'Prepare tier upgrade offers for 12 creators' },
      { action: 'recruit-34', label: 'Add 34 micro-creators to recruitment pipeline' }
    ],
    moreIdeasPool: [
      { action: 'misalignment-report', label: 'Generate misalignment risk report for legal' },
      { action: 'season-brief', label: 'Create next-season recruitment brief' }
    ]
  },
  decisionItems: [
    { key: 'flagged', label: '8 creators flagged for review', href: 'content-collection.html' },
    { key: 'pipeline', label: '34 micro-creators in recruitment pipeline', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> analyzed 450 creator partnerships globally', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 8 misaligned, 12 upgrade, 34 recruit', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Creator Network</strong> — 450 partners: 8 misaligned, 12 upgrade, 34 recruit.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '450 creator partnerships globally. I detected <strong>8 creators</strong> with early brand misalignment signals, <strong>12 ready</strong> for tier upgrade, and <strong>34 high-potential</strong> micro-creators to recruit for next season.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-misaligned', 'upgrade-12', 'recruit-34'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
