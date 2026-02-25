/* ============================================================
   FLOW: After-Call Work Autofill

   Demo scenario: Configure AI to auto-fill case disposition
   from conversation transcript
   Persona: Care Operations
   ============================================================ */

const FLOW_ACW_AUTOFILL_CONFIG = {
  id: 'acw-autofill-config',
  name: 'After-Call Work Autofill',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'ACW Autofill: Save 5+ hours daily',
    description: [
      '<strong>After-Call Work Autofill:</strong> AI can auto-fill case disposition forms from conversation transcripts.',
      'Estimated savings: 4 min per case × 80 cases/day = <strong>5+ hours saved daily</strong> for your team.',
      'Recommended actions:'
    ],
    completedDescription: [
      'ACW Autofill configured. 4 min saved per case, 5+ hours daily.'
    ],
    footer: 'This supports your goal: Reduce agent workload and improve case documentation',

    checkboxItems: [
      { action: 'enable-autofill', label: 'Enable AI disposition autofill for Care cases' },
      { action: 'map-fields', label: 'Map disposition fields (resolution type, category, tags)' },
      { action: 'agent-review', label: 'Require agent review before case close' },
      { action: 'pilot-team', label: 'Pilot with 5 agents for 2 weeks' }
    ],

    moreIdeasPool: [
      { action: 'custom-fields', label: 'Add custom fields to autofill' },
      { action: 'confidence-threshold', label: 'Set confidence threshold for auto-suggest' }
    ]
  },

  decisionItems: [
    { key: 'autofill-enabled', label: 'ACW Autofill enabled', href: 'care-inbox.html' },
    { key: 'pilot-started', label: 'Pilot with 5 agents started', href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> enabled ACW Autofill for Care cases', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> mapped resolution type, category, and tags', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> estimated 5+ hours daily savings', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>ACW Autofill:</strong> 4 min/case × 80 cases = 5+ hours saved daily.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Configuration complete. Pilot ready for 5 agents.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>After-Call Work Autofill:</strong> I can configure AI to auto-fill case disposition forms from conversation transcripts.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Estimated impact: <strong>4 min saved per case</strong> × 80 cases/day = <strong>5+ hours saved daily</strong> for your team. Agents can review and adjust before closing.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['enable-autofill', 'map-fields', 'agent-review', 'pilot-team'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'ACW Autofill is active. Disposition fields will auto-populate as agents complete conversations.', delay: 2500 }
  ]
};
