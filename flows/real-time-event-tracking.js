const FLOW_REAL_TIME_EVENT_TRACKING = {
  id: 'real-time-event-tracking',
  name: 'Real-Time Event Tracking',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Annual conference in 48 hours — social tracking not set up',
    description: [
      'Your annual conference starts in 48 hours. I can set up complete real-time social tracking for the event — hashtag monitoring, speaker mention tracking, audience sentiment, and live engagement dashboard.',
      'Last year\'s conference generated <strong>12,400 social posts</strong> that went mostly unmonitored and unengaged.'
    ],
    completedDescription: ['Event tracking live — hashtag monitoring active, speaker alerts configured, and real-time engagement dashboard ready for event team.'],
    footer: 'This supports your goal: Maximize social engagement at live events with real-time monitoring and response capability',
    checkboxItems: [
      { action: 'hashtag-monitoring', label: 'Set up real-time monitoring for 3 event hashtags' },
      { action: 'speaker-mentions', label: 'Configure speaker mention alerts for 12 keynote speakers' },
      { action: 'live-dashboard', label: 'Create live event dashboard for social media team on-site' },
      { action: 'content-schedule', label: 'Schedule live social coverage posts for key conference moments' }
    ],
    moreIdeasPool: [
      { action: 'ugc-capture', label: 'Set up automated UGC capture for all event hashtag posts' },
      { action: 'attendee-engagement', label: 'Create engagement automation: like and respond to attendee posts' },
      { action: 'post-event', label: 'Pre-schedule post-event recap content using conference highlights' }
    ]
  },
  decisionItems: [
    { key: 'hashtags', label: 'Event hashtag monitoring live (3 hashtags)', href: 'settings-listening.html' },
    { key: 'dashboard', label: 'Live event dashboard ready for social team', href: 'unified-analytics.html' },
    { key: 'coverage', label: 'Social coverage schedule published in Publisher', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> set up real-time monitoring for 3 event hashtags', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured speaker mention alerts for 12 keynote speakers', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created live event dashboard and scheduled coverage posts', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Event tracking ready</strong> — monitoring, alerts, and dashboard set up for conference.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Conference starts in 48 hours. Social team dashboard link sent to 4 on-site members.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your conference starts in 48 hours — social tracking isn\'t set up yet. Last year 12,400 event posts went mostly unmonitored. I can set up complete event tracking: hashtags, speaker mentions, live dashboard, and coverage schedule.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['hashtag-monitoring', 'speaker-mentions', 'live-dashboard', 'content-schedule'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
