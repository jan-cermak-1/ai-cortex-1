/* ============================================================
   FLOW: Case Routing Automation

   Demo scenario: Configure zero-shot intent detection for
   automatic case classification and routing
   Persona: Care Operations
   ============================================================ */

const FLOW_CASE_ROUTING_AUTOMATION = {
  id: 'case-routing-automation',
  name: 'Case Routing Automation',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Zero-shot intent detection for 12 case types',
    description: [
      '<strong>Case Routing Automation:</strong> Configure AI to automatically classify and route cases without manual tagging.',
      '12 case types: returns, shipping, billing, complaints, compliments, technical, account, product, warranty, refund, order status, general.',
      'Recommended actions:'
    ],
    completedDescription: [
      'Case routing automation configured. 12 intents auto-classified and routed.'
    ],
    footer: 'This supports your goal: Faster triage and skills-based routing',

    checkboxItems: [
      { action: 'enable-routing', label: 'Enable zero-shot intent detection for incoming cases' },
      { action: 'define-12-types', label: 'Define 12 case types (returns, shipping, billing, etc.)' },
      { action: 'map-skills', label: 'Map intents to agent skills for auto-assignment' },
      { action: 'remove-manual-tag', label: 'Remove manual tagging requirement for agents' }
    ],

    moreIdeasPool: [
      { action: 'confidence-threshold', label: 'Set confidence threshold for auto-route vs human review' },
      { action: 'fallback-queue', label: 'Configure fallback queue for low-confidence cases' }
    ]
  },

  decisionItems: [
    { key: 'routing-enabled', label: 'Case routing automation enabled', href: 'care-inbox.html' },
    { key: 'skills-mapped', label: '12 intents mapped to skills', href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> enabled zero-shot intent detection', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> mapped 12 case types to agent skills', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> removed manual tagging for agents', time: '3 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Case Routing:</strong> Zero-shot detection for 12 case types. No manual tagging.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Skills-based routing active. Cases auto-assigned by intent.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Case Routing Automation:</strong> I can configure zero-shot intent detection to automatically classify and route cases.', delay: 2500 },
    { type: 'message', sender: 'ai', text: '12 case types: returns, shipping, billing, complaints, compliments, technical, account, product, warranty, refund, order status, general. No manual tagging required — cases route by intent.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-routing', 'define-12-types', 'map-skills', 'remove-manual-tag'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Case routing is live. New cases are auto-classified and routed to the right skill group. Manual tagging eliminated.', delay: 2500 }
  ]
};
