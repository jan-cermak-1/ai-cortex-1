const FLOW_CRISIS_PREPAREDNESS_AUDIT = {
  id: 'crisis-preparedness-audit',
  name: 'Crisis Preparedness Audit',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Crisis preparedness gaps identified — 4 vulnerabilities',
    description: [
      'I audited your current crisis preparedness based on your social infrastructure, listening coverage, and response protocols. I found <strong>4 critical gaps</strong> that would slow your response in a real crisis.',
      'Gaps: No pre-approved dark posts for product safety scenarios, care team lacks crisis escalation protocol, listening doesn\'t cover 3 industry-specific forums where crises typically start, and no executive comms playbook.'
    ],
    completedDescription: ['Crisis preparedness gaps resolved — dark posts drafted, escalation protocol configured, listening expanded, and comms playbook created.'],
    footer: 'This supports your goal: Achieve full crisis preparedness so any scenario can be responded to within 30 minutes',
    checkboxItems: [
      { action: 'dark-posts', label: 'Draft pre-approved dark posts for 5 most likely crisis scenarios' },
      { action: 'escalation-protocol', label: 'Configure care team crisis escalation protocol and decision tree' },
      { action: 'listening-expansion', label: 'Add 3 industry forums to listening coverage for early crisis detection' },
      { action: 'comms-playbook', label: 'Create executive communications playbook for crisis scenarios' }
    ],
    moreIdeasPool: [
      { action: 'crisis-simulation', label: 'Schedule crisis simulation exercise for leadership and social team' },
      { action: 'holding-statements', label: 'Create holding statement templates for 8 crisis categories' },
      { action: 'media-contacts', label: 'Build and maintain media contact list for crisis-time outreach' }
    ]
  },
  decisionItems: [
    { key: 'dark-posts', label: 'Pre-approved dark posts for 5 crisis scenarios', href: 'publisher-calendar.html' },
    { key: 'protocol', label: 'Care team crisis escalation protocol configured', href: 'care-inbox.html' },
    { key: 'listening', label: 'Listening expanded to 3 new industry forums', href: 'listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted pre-approved dark posts for 5 crisis scenarios', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured care team crisis escalation protocol and decision tree', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> expanded listening to 3 additional industry forums', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Crisis preparedness updated</strong> — 4 gaps resolved. Response capability significantly improved.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Crisis listening now covers 94% of typical crisis origin sources for your industry.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I audited your crisis preparedness and found 4 gaps: no pre-approved dark posts, no care escalation protocol, incomplete listening coverage, and no executive comms playbook. Any of these gaps could add hours to your crisis response. I can resolve all four now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['dark-posts', 'escalation-protocol', 'listening-expansion', 'comms-playbook'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'listening.html', cursorTarget: '[data-nav-id="listening"]', delay: 1500 }
  ]
};
