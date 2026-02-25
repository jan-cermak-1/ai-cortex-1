const FLOW_MEDIA_MONITORING_SETUP = {
  id: 'media-monitoring-setup',
  name: 'Media Monitoring Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Real-time media monitoring configured for product launch',
    description: [
      'Cortex set up real-time media monitoring for your product launch — configured brand, product, and executive name queries.',
      'Alerts will trigger when coverage exceeds <strong>50 mentions/hour</strong>. Current baseline: 12 mentions/hour. Monitoring covers 2,400+ news sources, 180K+ social accounts, and 34 broadcast transcripts.'
    ],
    completedDescription: ['Media monitoring live — brand, product, and executive queries active. 50 mentions/hour alert configured.'],
    footer: 'This supports your goal: Track product launch coverage in real time and respond to media spikes',
    checkboxItems: [
      { action: 'activate-queries', label: 'Activate brand, product, and executive name queries' },
      { action: 'set-alert', label: 'Set 50 mentions/hour alert threshold' },
      { action: 'create-dashboard', label: 'Create real-time coverage dashboard in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'competitor-monitor', label: 'Add competitor product mention monitoring' },
      { action: 'exec-brief', label: 'Configure daily executive briefing from top coverage' }
    ]
  },
  decisionItems: [
    { key: 'queries', label: '3 monitoring queries active', href: 'listening.html' },
    { key: 'alert', label: '50 mentions/hour alert configured', href: 'command-center.html' },
    { key: 'dashboard', label: 'Coverage dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> activated brand, product, and executive queries', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set 50 mentions/hour alert threshold', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> configured media monitoring for product launch', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Media monitoring ready:</strong> Brand, product, exec queries. Alert at 50 mentions/hour.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'Baseline: 12 mentions/hour. 2,400+ news sources, 180K+ social accounts.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Media monitoring is configured for your product launch. I\'ve set up brand, product, and executive name queries across 2,400+ news sources. Alerts will trigger when coverage exceeds 50 mentions per hour — current baseline is 12.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['activate-queries', 'set-alert', 'create-dashboard'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
