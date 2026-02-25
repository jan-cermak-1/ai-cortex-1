const FLOW_MULTI_BRAND_CONTENT_SYNC = {
  id: 'multi-brand-content-sync',
  name: 'Multi-Brand Content Sync',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '8 regional profiles — 4 duplicates, 2 conflicting messages',
    description: [
      'Managing 8 regional brand profiles, each publishing independently. Cortex identified <strong>4 content duplicates</strong> and <strong>2 conflicting messages</strong> across profiles.',
      'Duplicates: US/UK posted same hero image 3 days apart; DE/FR ran identical campaign copy. Conflicts: APAC vs EMEA on product launch timing; US vs EU on sustainability claim. Proposing unified content calendar with regional slots and approval workflow.'
    ],
    completedDescription: ['Sync complete — unified calendar proposed, 4 duplicates flagged and merged, 2 conflicts resolved with approved messaging.'],
    footer: 'This supports your goal: Maintain brand consistency across regional profiles while allowing local flexibility',
    checkboxItems: [
      { action: 'create-calendar', label: 'Create unified content calendar with regional slots' },
      { action: 'merge-duplicates', label: 'Merge 4 duplicate posts into single approved assets' },
      { action: 'resolve-conflicts', label: 'Apply approved messaging for 2 conflicting posts' }
    ],
    moreIdeasPool: [
      { action: 'approval-workflow', label: 'Set up regional approval workflow for shared content' },
      { action: 'brand-guidelines', label: 'Update brand guidelines with conflict resolution rules' }
    ]
  },
  decisionItems: [
    { key: 'calendar', label: 'Unified calendar created', href: 'publisher-calendar.html' },
    { key: 'merged', label: '4 duplicates merged', href: 'publisher-calendar.html' },
    { key: 'resolved', label: '2 conflicts resolved', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created unified content calendar', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> merged 4 duplicate posts across regions', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 4 duplicates and 2 conflicts across 8 profiles', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Multi-brand sync:</strong> 8 profiles. 4 duplicates, 2 conflicting messages.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'US/UK same hero. DE/FR same copy. APAC vs EMEA timing. US vs EU claim.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Across your 8 regional profiles I found 4 content duplicates — US and UK posted the same hero 3 days apart, DE and FR ran identical copy — and 2 conflicting messages: APAC vs EMEA on launch timing, US vs EU on sustainability claim. I\'m proposing a unified calendar with regional slots.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-calendar', 'merge-duplicates', 'resolve-conflicts'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
