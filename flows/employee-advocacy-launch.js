const FLOW_EMPLOYEE_ADVOCACY_LAUNCH = {
  id: 'employee-advocacy-launch',
  name: 'Employee Advocacy Launch',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Employee advocacy program opportunity — 340 potential advocates',
    description: [
      'I analyzed your employee database and LinkedIn profiles and identified <strong>340 employees</strong> who are likely to participate in a brand advocacy program based on their social activity and engagement.',
      'Employee content typically gets 8x more engagement than brand content and is perceived as 3x more credible. This is an untapped channel.'
    ],
    completedDescription: ['Employee advocacy program launched — 85 pilot participants onboarded, content library ready, and tracking configured.'],
    footer: 'This supports your goal: Build an authentic employee advocacy channel that amplifies brand reach organically',
    checkboxItems: [
      { action: 'identify-advocates', label: 'Score and rank 340 potential advocates by engagement propensity' },
      { action: 'create-content-library', label: 'Create curated content library with pre-approved shareable posts' },
      { action: 'onboard-pilot', label: 'Invite and onboard 85 highest-score employees for pilot program' },
      { action: 'setup-tracking', label: 'Set up advocacy program performance tracking (reach, shares, attribution)' }
    ],
    moreIdeasPool: [
      { action: 'gamification', label: 'Add gamification: leaderboard and recognition for top advocates' },
      { action: 'ai-personalization', label: 'Enable AI post personalization: adapt brand posts to each employee\'s voice' },
      { action: 'executive-track', label: 'Create separate executive visibility track for C-suite thought leadership' }
    ]
  },
  decisionItems: [
    { key: 'advocates', label: '340 employees scored and ranked by advocacy fit', href: 'settings-users.html' },
    { key: 'library', label: 'Content library created with 30 shareable posts', href: 'content-feed.html' },
    { key: 'pilot', label: '85 employees invited to advocacy pilot', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> scored and ranked 340 employees for advocacy potential', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created content library with 30 pre-approved shareable posts', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> sent invites to 85 highest-potential employees', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Advocacy program launched</strong> — 85 pilot invites sent, content library ready.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Potential reach amplification: 340 employees × avg 800 connections = 272K additional reach.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I identified 340 employees with strong advocacy potential based on their social activity. Employee content gets 8x more engagement than brand posts and is 3x more credible. This is an untapped organic channel for you.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['identify-advocates', 'create-content-library', 'onboard-pilot', 'setup-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 }
  ]
};
