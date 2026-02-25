const FLOW_SOV_TRACKER_SETUP = {
  id: 'sov-tracker-setup',
  name: 'SOV Tracker Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Share of voice not being tracked vs 5 key competitors',
    description: [
      'You\'re tracking your own brand performance but not measuring <strong>share of voice against your 5 key competitors</strong>. Without this, you can\'t tell if your brand is growing faster or slower than the market.',
      'I can set up a complete competitive SOV tracker with weekly alerts and executive reporting.'
    ],
    completedDescription: ['SOV tracker configured — 5 competitors added, weekly SOV dashboard live, and executive alert thresholds set.'],
    footer: 'This supports your goal: Track and grow share of voice to 35%+ in your category by year-end',
    checkboxItems: [
      { action: 'configure-competitors', label: 'Add 5 competitors to competitive listening tracker' },
      { action: 'build-sov-dashboard', label: 'Build weekly SOV dashboard: you vs each competitor, category total' },
      { action: 'set-alerts', label: 'Set alert thresholds: notify when SOV drops by 3+ points week-over-week' },
      { action: 'executive-digest', label: 'Configure weekly SOV digest to send to Marketing leadership' }
    ],
    moreIdeasPool: [
      { action: 'historical-baseline', label: 'Build 12-month historical SOV baseline before starting fresh tracking' },
      { action: 'sov-by-topic', label: 'Break SOV down by topic: product mentions, brand values, industry topics' },
      { action: 'sentiment-weight', label: 'Create quality-weighted SOV: weight positive mentions higher than negative' }
    ]
  },
  decisionItems: [
    { key: 'tracker', label: '5 competitors configured in SOV tracker', href: 'settings-listening.html' },
    { key: 'dashboard', label: 'Weekly SOV dashboard live', href: 'unified-analytics.html' },
    { key: 'alerts', label: 'SOV alert thresholds set (3-point drop trigger)', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> added 5 competitors to competitive listening tracker', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> built weekly SOV dashboard with competitive breakdown', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set alert thresholds and executive digest schedule', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>SOV tracker live</strong> — 5 competitors tracked. First report available Monday.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Current estimated SOV: 31%. Target: 35%. Gap: 4 points.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'You\'re tracking your own brand performance but not share of voice against competitors — so you can\'t tell if you\'re growing faster or slower than the market. Setting up SOV tracking now gives you that competitive context.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['configure-competitors', 'build-sov-dashboard', 'set-alerts', 'executive-digest'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
