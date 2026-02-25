/* ============================================================
   FLOW: AI Quality Management

   Demo scenario: Enable automated QA scoring for care
   conversations
   Persona: Care Director
   ============================================================ */

const FLOW_QUALITY_MANAGEMENT_AI = {
  id: 'quality-management-ai',
  name: 'AI Quality Management',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Automated QA scoring ready',
    description: [
      '<strong>Quality Management:</strong> Cortex can enable automated QA scoring for all Care conversations.',
      'Scoring criteria: tone, resolution, compliance, brand voice. Weekly QA reports per agent.',
      'Recommended actions:'
    ],
    completedDescription: [
      'AI Quality Management configured. Automated QA scoring and weekly reports active.'
    ],
    footer: 'This supports your goal: Consistent quality and coaching opportunities',

    checkboxItems: [
      { action: 'enable-qa', label: 'Enable automated QA scoring for Care conversations' },
      { action: 'set-criteria', label: 'Configure scoring criteria (tone, resolution, compliance, brand voice)' },
      { action: 'weekly-reports', label: 'Set up weekly QA reports per agent' },
      { action: 'calibration', label: 'Run calibration on 50 sample cases' }
    ],

    moreIdeasPool: [
      { action: 'coaching-alerts', label: 'Alert supervisors on low-scoring conversations' },
      { action: 'trend-dashboard', label: 'Create QA trend dashboard in Unified Analytics' }
    ]
  },

  decisionItems: [
    { key: 'qa-enabled', label: 'Automated QA scoring enabled', href: 'care-inbox.html' },
    { key: 'reports-scheduled', label: 'Weekly reports scheduled', href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> enabled automated QA scoring', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured tone, resolution, compliance, brand voice criteria', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> scheduled weekly QA reports per agent', time: '3 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>AI Quality Management:</strong> Automated QA scoring ready. 4 criteria configured.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Weekly QA reports scheduled. Calibration complete on 50 cases.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>AI Quality Management:</strong> I can enable automated QA scoring for all Care conversations.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Scoring criteria: tone, resolution, compliance, brand voice. I recommend weekly QA reports per agent and calibration on 50 sample cases first.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-qa', 'set-criteria', 'weekly-reports', 'calibration'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'QA scoring is live. Weekly reports will appear in Unified Analytics. Supervisors can drill into low-scoring conversations for coaching.', delay: 2500 }
  ]
};
