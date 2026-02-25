const FLOW_SPORTS_TEAM_FAN_CARE = {
  id: 'sports-team-fan-care',
  name: 'Sports Fan Engagement',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Match day: 45,000 fan interactions prioritized',
    description: [
      'Match day generated 45,000 fan interactions. Cortex prioritizes genuine fan questions over bots/spam, auto-replies to common queries (ticket info, stadium rules, match schedules), and flags VIP fans for personal engagement.',
      'Bot/spam filtered: 12,400. Auto-replied: 18,200. VIP flags: 340. Human queue reduced to 14,060 genuine questions.'
    ],
    completedDescription: ['45,000 match day interactions — bots filtered, common queries auto-replied, 340 VIP fans flagged for personal engagement.'],
    footer: 'This supports your goal: Deliver great fan experience at scale on match days',
    checkboxItems: [
      { action: 'filter-bots', label: 'Filter 12,400 bot/spam interactions' },
      { action: 'auto-reply', label: 'Auto-reply to ticket, stadium, schedule queries' },
      { action: 'flag-vip', label: 'Flag 340 VIP fans for personal engagement' }
    ],
    moreIdeasPool: [
      { action: 'match-day-dashboard', label: 'Build real-time match day care dashboard' }
    ]
  },
  decisionItems: [
    { key: 'filtered', label: 'Bots filtered', href: 'care-inbox.html' },
    { key: 'vip', label: 'VIP fans flagged', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> filtered 12,400 bot/spam from 45K interactions', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> flagged 340 VIP fans for personal engagement', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Match day handled:</strong> 45K interactions. 12.4K bots filtered. 18.2K auto-replied. 340 VIPs flagged.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Match day: 45,000 fan interactions. I filtered 12,400 bots and spam, auto-replied to 18,200 common queries (tickets, stadium rules, schedules), and flagged 340 VIP fans for personal engagement. Human queue reduced to 14,060 genuine questions.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['filter-bots', 'auto-reply', 'flag-vip'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
