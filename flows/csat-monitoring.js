const FLOW_CSAT_MONITORING = {
  id: 'csat-monitoring',
  name: 'CSAT Real-Time Monitoring',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'CSAT score dipped below threshold — real-time monitoring needed',
    description: [
      'Your Care CSAT score dropped from 4.3 to 3.8 this week — below your 4.0 threshold. I analyzed the low-score responses and identified <strong>2 root causes</strong>: long wait times (62% of negative feedback) and unhelpful first responses (28%).',
      'Setting up real-time monitoring will help you catch drops before they compound.'
    ],
    completedDescription: ['CSAT monitoring configured — real-time dashboard active, alert thresholds set, and root cause action plan sent.'],
    footer: 'This supports your goal: Maintain CSAT score above 4.2 at all times with proactive response when score drops',
    checkboxItems: [
      { action: 'realtime-dashboard', label: 'Create real-time CSAT monitoring dashboard with hourly updates' },
      { action: 'set-alerts', label: 'Set CSAT alert thresholds: notify supervisor when score drops below 4.0' },
      { action: 'root-cause-fix', label: 'Address root cause 1: update SLA targets to reduce wait times' },
      { action: 'agent-coaching', label: 'Generate agent coaching plan addressing "unhelpful first responses"' }
    ],
    moreIdeasPool: [
      { action: 'low-score-review', label: 'Auto-flag all cases with CSAT below 3 for supervisory review' },
      { action: 'nps-correlation', label: 'Set up CSAT-to-NPS correlation tracking' },
      { action: 'weekly-digest', label: 'Send weekly CSAT trend digest to Care leadership team' }
    ]
  },
  decisionItems: [
    { key: 'dashboard', label: 'Real-time CSAT monitoring dashboard created', href: 'unified-analytics.html' },
    { key: 'alerts', label: 'CSAT alert configured at 4.0 threshold', href: 'unified-analytics.html' },
    { key: 'coaching', label: 'Agent coaching plan generated', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created real-time CSAT monitoring dashboard', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set alert threshold at 4.0 with supervisor notification', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed CSAT drop: 62% wait time, 28% response quality', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>CSAT monitoring live</strong> — dashboard active, alerts set. Root causes identified.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Current CSAT: 3.8. Alert threshold: 4.0. Coaching plan generated for agents.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'CSAT dropped from 4.3 to 3.8 this week — below your 4.0 threshold. I analyzed the low scores: 62% cite wait times, 28% cite unhelpful first responses. Let me set up real-time monitoring and address both root causes.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['realtime-dashboard', 'set-alerts', 'root-cause-fix', 'agent-coaching'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
