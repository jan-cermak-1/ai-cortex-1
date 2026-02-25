const FLOW_LABEL_TAXONOMY_CLEANUP = {
  id: 'label-taxonomy-cleanup',
  name: 'Label Taxonomy Cleanup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '847 labels in use — 62% are redundant or unused',
    description: [
      'I audited your labeling system and found <strong>847 active labels</strong> — but 62% are either duplicates, have fewer than 5 uses in 90 days, or are semantically overlapping.',
      'A clean label taxonomy will significantly improve your reporting accuracy and team consistency.'
    ],
    completedDescription: ['Label taxonomy cleaned — 523 redundant labels archived, 45 key labels standardized, and team guidelines published.'],
    footer: 'This supports your goal: Maintain a clean, consistent label taxonomy across all modules for accurate reporting',
    checkboxItems: [
      { action: 'archive-unused', label: 'Archive 523 labels with fewer than 5 uses in the last 90 days' },
      { action: 'merge-duplicates', label: 'Merge 78 semantically duplicate labels into canonical versions' },
      { action: 'standardize-naming', label: 'Apply standardized naming convention to remaining 45 key labels' },
      { action: 'publish-guide', label: 'Generate and publish label usage guide for all team members' }
    ],
    moreIdeasPool: [
      { action: 'auto-tagging', label: 'Set up AI auto-tagging for standardized labels to prevent drift' },
      { action: 'quarterly-audit', label: 'Schedule quarterly label taxonomy audit automatically' },
      { action: 'reporting-update', label: 'Update all saved reports to use new canonical label names' }
    ]
  },
  decisionItems: [
    { key: 'archived', label: '523 unused labels archived', href: 'settings-users.html' },
    { key: 'merged', label: '78 duplicate labels merged', href: 'settings-users.html' },
    { key: 'guide', label: 'Label usage guide published to team', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> archived 523 unused labels (< 5 uses in 90 days)', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> merged 78 semantically duplicate labels', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> audited all 847 labels in use', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Label cleanup complete</strong> — 847 labels reduced to 246 canonical labels.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Label usage guide published. All team members notified.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I audited your labeling system. You have 847 active labels but 62% are redundant or essentially unused. Cleaning this up will significantly improve your reporting accuracy.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['archive-unused', 'merge-duplicates', 'standardize-naming', 'publish-guide'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
