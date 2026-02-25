const FLOW_HOSPITALITY_REPUTATION = {
  id: 'hospitality-reputation',
  name: 'Hospitality Reputation Management',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Hotel reputation score dropped 0.4 — TripAdvisor spike detected',
    description: [
      'Your TripAdvisor score dropped from 4.6 to 4.2 this month — primarily driven by 18 reviews mentioning the same issue: <strong>"air conditioning problems in south wing rooms."</strong>',
      'Reputation management response now, combined with engineering fix, can recover your score within 4-6 weeks.'
    ],
    completedDescription: ['Reputation management response activated — 18 guest outreach messages sent, engineering issue flagged, and recovery plan initiated.'],
    footer: 'This supports your goal: Maintain TripAdvisor score above 4.5 and respond to all reviews within 24 hours',
    checkboxItems: [
      { action: 'respond-reviews', label: 'Draft and send personalized responses to all 18 air-con complaint reviews' },
      { action: 'guest-outreach', label: 'Reach out to 18 guests with apology and complimentary upgrade offer' },
      { action: 'flag-engineering', label: 'Send technical issue report to hotel engineering team' },
      { action: 'monitor-recovery', label: 'Set up reputation score recovery tracking dashboard' }
    ],
    moreIdeasPool: [
      { action: 'positive-push', label: 'Activate positive review request campaign among recent satisfied guests' },
      { action: 'staff-response', label: 'Brief front desk staff on issue and apology script for walk-in complaints' },
      { action: 'competitive-benchmark', label: 'Compare your TripAdvisor score with top 5 competitor hotels in your area' }
    ]
  },
  decisionItems: [
    { key: 'reviews', label: '18 complaint reviews responded to with personalized messages', href: 'community-inbox.html' },
    { key: 'outreach', label: 'Guest outreach with upgrade offer sent to 18 guests', href: 'care-inbox.html' },
    { key: 'monitoring', label: 'Reputation recovery tracking dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted and sent responses to 18 TripAdvisor reviews', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent guest outreach with complimentary upgrade offer', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 18-review cluster around air conditioning issue', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Reputation response activated</strong> — 18 reviews addressed, engineering notified.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Projected score recovery: 4.2 → 4.5+ within 4-6 weeks with fix and response.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'TripAdvisor score dropped from 4.6 to 4.2 — 18 reviews mention air conditioning in south wing rooms. This is a systemic issue. Proper response now, combined with an engineering fix, can recover your score within 4-6 weeks.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['respond-reviews', 'guest-outreach', 'flag-engineering', 'monitor-recovery'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
