const FLOW_TIKTOK_PRIMETIME_BOOST = {
  id: 'tiktok-primetime-boost',
  name: 'TikTok PrimeTime Boost',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '6 TikTok videos scheduled at suboptimal times',
    description: [
      'I analyzed 7 days of your TikTok audience engagement data and found <strong>6 upcoming videos</strong> scheduled outside your peak engagement windows.',
      'Rescheduling to optimal times could improve average reach by an estimated <strong>34%</strong> based on your historical data.'
    ],
    completedDescription: ['TikTok schedule optimized — 6 videos rescheduled to peak engagement windows with projected +34% reach improvement.'],
    footer: 'This supports your goal: Achieve 500K TikTok views per month by optimizing content timing',
    checkboxItems: [
      { action: 'reschedule-videos', label: 'Reschedule all 6 videos to peak engagement windows' },
      { action: 'add-sounds', label: 'Add trending audio tracks to 3 videos without sound' },
      { action: 'update-hashtags', label: 'Update hashtag sets with current TikTok trending tags' },
      { action: 'create-analytics', label: 'Create TikTok performance tracking board' }
    ],
    moreIdeasPool: [
      { action: 'duet-strategy', label: 'Identify top creators to invite for Duet collaboration' },
      { action: 'series-format', label: 'Format 6 videos as a content series with consistent intro' },
      { action: 'cross-post-reels', label: 'Prepare Instagram Reels versions of all 6 videos' }
    ]
  },
  decisionItems: [
    { key: 'rescheduled', label: '6 videos rescheduled to peak times', href: 'publisher-calendar.html' },
    { key: 'hashtags', label: 'Trending hashtags updated on all posts', href: 'publisher-calendar.html' },
    { key: 'board', label: 'TikTok analytics board created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> rescheduled 6 TikTok videos to peak engagement windows', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> analyzed 7-day audience engagement patterns', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified optimal posting windows: Tue/Thu 7-9pm, Sat 11am-1pm', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>TikTok timing optimized</strong> — 6 videos rescheduled. Projected +34% reach.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'First optimized video scheduled for Thursday 8pm.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I spotted an opportunity: 6 TikTok videos are scheduled at low-engagement times. Moving them to peak windows could boost reach by ~34%.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['reschedule-videos', 'update-hashtags', 'create-analytics'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
