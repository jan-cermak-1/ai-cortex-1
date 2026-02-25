/* ============================================================
   FLOW: Statistical Stories

   Demo scenario: Cortex detects anomalous complaint spike
   with root cause analysis
   Persona: Care Analytics
   ============================================================ */

const FLOW_STATISTICAL_STORIES = {
  id: 'statistical-stories',
  name: 'Statistical Stories',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Anomaly: +47% shipping delay complaints',
    description: [
      '<strong>Statistical anomaly detected:</strong> "Shipping delay" complaints up 47% this week vs last month baseline.',
      'Root cause: Regional carrier outage in Midwest (US) — 3-day backlog affecting 12,000 orders.',
      'Recommended actions:'
    ],
    completedDescription: [
      'Statistical story investigated. Root cause identified and response actions deployed.'
    ],
    footer: 'This supports your goal: Proactive care response and customer satisfaction',

    checkboxItems: [
      { action: 'create-alert', label: 'Create Listening spike alert for shipping delays' },
      { action: 'draft-response', label: 'Draft proactive response template for affected customers' },
      { action: 'care-board', label: 'Create Care anomaly dashboard in Unified Analytics' },
      { action: 'escalate-ops', label: 'Notify ops team of carrier backlog' }
    ],

    moreIdeasPool: [
      { action: 'historical-compare', label: 'Compare to similar past incidents' },
      { action: 'forecast-volume', label: 'Forecast expected complaint volume next 48h' }
    ]
  },

  decisionItems: [
    { key: 'alert-created', label: 'Spike alert created', href: 'settings-listening.html' },
    { key: 'board-created', label: 'Anomaly dashboard created', href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created shipping delay spike alert', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified root cause: Midwest carrier outage', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected +47% shipping delay complaints', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Anomaly:</strong> +47% shipping delay complaints. Root cause: Midwest carrier outage.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Response template drafted. 12,000 orders affected.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Statistical anomaly detected:</strong> "Shipping delay" complaints are up <strong>47%</strong> this week vs last month baseline.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Root cause analysis: Regional carrier outage in Midwest (US) — 3-day backlog affecting 12,000 orders. I recommend proactive response actions.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-alert', 'draft-response', 'care-board', 'escalate-ops'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-listening.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Spike alert active. Monitor Unified Analytics for complaint volume trends.', delay: 2500 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Care anomaly dashboard shows real-time shipping delay volume. Demo complete!', delay: 2000 }
  ]
};
