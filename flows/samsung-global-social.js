const FLOW_SAMSUNG_GLOBAL_SOCIAL = {
  id: 'samsung-global-social',
  name: 'Global Social Coordination',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '28 regional teams, 340 profiles — conflicts detected',
    description: [
      'Coordinate <strong>28 regional social teams</strong> publishing across <strong>340 social profiles</strong>.',
      'Cortex detects content conflicts, enforces global brand guidelines, and synchronizes campaign timing across <strong>14 time zones</strong>.'
    ],
    completedDescription: ['Global social coordination active — conflict detection, brand enforcement, and 14-timezone sync configured.'],
    footer: 'This supports your goal: Unified global social presence without conflicts',
    checkboxItems: [
      { action: 'conflict-scan', label: 'Run conflict scan across 340 profiles' },
      { action: 'brand-enforce', label: 'Enforce global brand guidelines on scheduled content' },
      { action: 'timezone-sync', label: 'Synchronize campaign timing across 14 time zones' }
    ],
    moreIdeasPool: [
      { action: 'approval-workflow', label: 'Configure regional approval workflows' },
      { action: 'content-calendar', label: 'Unified content calendar view for all regions' }
    ]
  },
  decisionItems: [
    { key: 'conflicts', label: 'Content conflicts resolved', href: 'publisher-calendar.html' },
    { key: 'sync', label: 'Campaign timing synchronized', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> scanned 340 profiles for content conflicts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> enforced brand guidelines on 23 scheduled posts', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Global Coordination</strong> — 28 teams, 340 profiles. Conflicts detected, sync ready.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '28 regional teams, 340 social profiles. I detected content conflicts and enforced global brand guidelines. Campaign timing synchronized across <strong>14 time zones</strong>.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['conflict-scan', 'brand-enforce', 'timezone-sync'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
