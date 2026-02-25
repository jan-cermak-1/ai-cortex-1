const FLOW_PLATFORM_HEALTH_AUDIT = {
  id: 'platform-health-audit',
  name: 'Platform Health Audit',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Platform health audit complete — 7 configuration issues found',
    description: [
      'I ran a health audit of your Emplifi instance and found <strong>7 configuration issues</strong> that are likely reducing your team\'s efficiency and data accuracy.',
      'Issues include: 3 disconnected social profiles, 2 stale API tokens, 1 unused data source consuming quota, 1 misconfigured alert rule generating noise.'
    ],
    completedDescription: ['Platform health audit resolved — 7 issues fixed, 3 profiles reconnected, 2 tokens refreshed, alert rules cleaned up.'],
    footer: 'This supports your goal: Maintain optimal platform configuration with zero data gaps or connectivity issues',
    checkboxItems: [
      { action: 'reconnect-profiles', label: 'Reconnect 3 disconnected social profiles to restore data flow' },
      { action: 'refresh-tokens', label: 'Refresh 2 expired API tokens (scheduled for auto-renewal)' },
      { action: 'remove-unused', label: 'Remove 1 unused data source to free up quota allocation' },
      { action: 'fix-alerts', label: 'Fix misconfigured alert rule generating false-positive noise' }
    ],
    moreIdeasPool: [
      { action: 'schedule-audit', label: 'Schedule monthly platform health audit automatically' },
      { action: 'data-gaps-report', label: 'Generate data gap report showing what\'s missing from the past 30 days' },
      { action: 'permission-review', label: 'Review all active API connection permissions for security' }
        ]
  },
  decisionItems: [
    { key: 'profiles', label: '3 social profiles reconnected', href: 'settings-users.html' },
    { key: 'tokens', label: '2 API tokens refreshed with auto-renewal', href: 'settings-users.html' },
    { key: 'cleaned', label: 'Alert rules cleaned up — noise reduced', href: 'settings-listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> reconnected 3 disconnected social profiles', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> refreshed 2 expired API tokens with auto-renewal', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> ran platform health audit — 7 issues identified and resolved', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Health audit complete</strong> — 7 issues resolved. Platform at 100% connectivity.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Monthly health audit scheduled. Next check: Mar 20.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I ran a platform health audit and found 7 issues: 3 disconnected social profiles, 2 stale API tokens, 1 unused data source, and 1 misconfigured alert. Let me fix all of these now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['reconnect-profiles', 'refresh-tokens', 'remove-unused', 'fix-alerts'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1500 }
  ]
};
