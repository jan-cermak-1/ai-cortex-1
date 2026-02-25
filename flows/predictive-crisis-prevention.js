const FLOW_PREDICTIVE_CRISIS_PREVENTION = {
  id: 'predictive-crisis-prevention',
  name: 'Predictive Crisis Prevention',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '6 early warning signals detected — 4-hour advance notice',
    description: [
      'Cortex\'s predictive model detected 6 early warning signals that preceded your last 3 crises. Running continuously, it gave 4-hour advance notice of today\'s potential issue.',
      'Proactive response enabled before it went viral. Signal strength: 87% confidence. Recommended actions: pre-draft response, alert comms team, monitor 3 keywords.'
    ],
    completedDescription: ['Predictive crisis model active — 6 signals from past crises. 4-hour advance notice. Proactive response enabled.'],
    footer: 'This supports your goal: Prevent crises before they escalate',
    checkboxItems: [
      { action: 'enable-model', label: 'Enable predictive crisis model' },
      { action: 'set-alerts', label: 'Set 4-hour advance alert threshold' },
      { action: 'pre-draft', label: 'Pre-draft response and alert comms team' }
    ],
    moreIdeasPool: [
      { action: 'signal-tune', label: 'Tune signal sensitivity' }
    ]
  },
  decisionItems: [
    { key: 'alert', label: '4-hour advance alert sent', href: 'listening.html' },
    { key: 'response', label: 'Proactive response enabled', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> detected 6 early warning signals', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent 4-hour advance notice', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Crisis prevention:</strong> 6 signals, 87% confidence. 4-hour notice. Proactive response enabled.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'My predictive model detected 6 early warning signals that preceded your last 3 crises. I gave you 4-hour advance notice of today\'s potential issue — 87% confidence. Proactive response enabled before it went viral. Recommended: pre-draft response, alert comms team, monitor 3 keywords.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-model', 'set-alerts', 'pre-draft'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 2000 }
  ]
};
