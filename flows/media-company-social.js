const FLOW_MEDIA_COMPANY_SOCIAL = {
  id: 'media-company-social',
  name: 'Media Company Social',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '47 show accounts: AI content from episode summaries',
    description: [
      'Managing 47 show accounts across 6 platforms. Cortex auto-generates show-specific social content from episode summaries, schedules optimal posting times per show\'s audience, and tracks engagement per episode.',
      'Last week: 312 posts generated from 89 episode summaries. Avg engagement up 23% vs manual scheduling.'
    ],
    completedDescription: ['47 show accounts — AI content from episode summaries, optimal scheduling per show, engagement tracking per episode.'],
    footer: 'This supports your goal: Scale social across many shows without proportional headcount',
    checkboxItems: [
      { action: 'generate-content', label: 'Generate content from 89 episode summaries' },
      { action: 'schedule-optimal', label: 'Schedule at optimal times per show audience' },
      { action: 'track-engagement', label: 'Track engagement per episode in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'episode-report', label: 'Build weekly episode engagement report' }
    ]
  },
  decisionItems: [
    { key: 'content', label: 'Content generated', href: 'publisher-calendar.html' },
    { key: 'analytics', label: 'Engagement tracked per episode', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated 312 posts from 89 episode summaries', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> scheduled at optimal times per show', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>47 shows, 6 platforms:</strong> 312 posts from 89 episodes. Engagement +23% vs manual.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'m managing your 47 show accounts across 6 platforms. Last week I generated 312 posts from 89 episode summaries, scheduled at optimal times per show\'s audience, and tracked engagement per episode. Avg engagement up 23% vs manual scheduling.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-content', 'schedule-optimal', 'track-engagement'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
