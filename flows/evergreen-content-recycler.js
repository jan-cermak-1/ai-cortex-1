const FLOW_EVERGREEN_CONTENT_RECYCLER = {
  id: 'evergreen-content-recycler',
  name: 'Evergreen Content Recycler',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '10 top-performing posts ready for a refresh',
    description: [
      'I identified your <strong>10 best-performing posts from the last 12 months</strong> — these evergreen topics are still relevant and would benefit from a refresh.',
      'Recycling top content with updated copy typically delivers 60-80% of the original post\'s engagement with near-zero production cost.'
    ],
    completedDescription: ['10 evergreen posts refreshed and rescheduled — updated copy, new hashtags, and staggered schedule across next 10 weeks.'],
    footer: 'This supports your goal: Maintain publishing consistency of 5+ posts per week without increasing production budget',
    checkboxItems: [
      { action: 'refresh-copy', label: 'Refresh copy for all 10 posts (updated language, new hooks)' },
      { action: 'update-hashtags', label: 'Update hashtag sets with current trending tags' },
      { action: 'schedule-recycled', label: 'Schedule 1 recycled post per week over next 10 weeks' },
      { action: 'update-assets', label: 'Flag 3 posts where assets need visual refresh' }
    ],
    moreIdeasPool: [
      { action: 'cross-channel', label: 'Adapt top 5 posts for platforms they haven\'t been published on' },
      { action: 'series-format', label: 'Combine related posts into a "Best of" series' },
      { action: 'performance-tracking', label: 'Set up tracking to compare recycled vs original performance' }
    ]
  },
  decisionItems: [
    { key: 'refreshed', label: '10 posts refreshed with new copy and hashtags', href: 'publisher-calendar.html' },
    { key: 'scheduled', label: '10-week schedule created in Publisher', href: 'publisher-calendar.html' },
    { key: 'flagged', label: '3 posts flagged for visual asset update', href: 'content-feed.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> refreshed copy and hashtags for 10 evergreen posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> scheduled recycled posts across 10 weeks', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 12 months of content to identify top performers', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Evergreen batch ready</strong> — 10 refreshed posts scheduled over 10 weeks.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Top performer: "5 things you didn\'t know about..." — 8.2% engagement rate.', time: '5 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found your 10 best-performing posts from the past year. These evergreen topics are still relevant — refreshing them would maintain your publishing pace at near-zero cost.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['refresh-copy', 'update-hashtags', 'schedule-recycled'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
