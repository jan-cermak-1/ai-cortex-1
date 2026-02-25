/* ============================================================
   FLOW: Contact Driver Discovery

   Demo scenario: Cortex analyzes care conversations to discover
   unhandled customer intents for bot expansion
   Persona: Bot Manager
   ============================================================ */

const FLOW_CONTACT_DRIVER_DISCOVERY = {
  id: 'contact-driver-discovery',
  name: 'Contact Driver Discovery',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: '8 new unhandled intents discovered',
    description: [
      '<strong>Analysis complete:</strong> Cortex analyzed 10,000 Care conversations using unsupervised AI.',
      'Found 8 recurring customer intents that your Bot currently cannot handle — causing 23% unnecessary escalations.',
      'Recommended actions:'
    ],
    completedDescription: [
      'Contact driver discovery complete. 8 new bot flows recommended for implementation.'
    ],
    footer: 'This supports your goal: Increase bot containment rate and reduce agent workload',

    checkboxItems: [
      { action: 'create-flows', label: 'Create bot flow templates for all 8 intents' },
      { action: 'prioritize-top3', label: 'Prioritize top 3 highest-volume intents first' },
      { action: 'kb-articles', label: 'Draft Knowledge Base articles for each intent' },
      { action: 'test-utterances', label: 'Generate training utterances for intent recognition' }
    ],

    moreIdeasPool: [
      { action: 'escalation-review', label: 'Review current escalation paths for overlap' },
      { action: 'agent-feedback', label: 'Survey agents on most common unhandled questions' }
    ]
  },

  decisionItems: [
    { key: 'flows-created', label: '8 bot flow templates created', href: 'care-inbox.html' },
    { key: 'kb-drafted', label: 'KB articles drafted for 8 intents', href: 'content-collection.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created 8 bot flow templates', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified top 3 intents: order status, refund policy, warranty claims', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 10,000 Care conversations', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Contact Driver Discovery:</strong> 8 new intents found. 23% of escalations could be automated.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Bot flow templates ready for review in Care.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Contact Driver Discovery complete:</strong> I analyzed 10,000 Care conversations and found <strong>8 new unhandled customer intents</strong> that your Bot cannot currently handle.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'These intents drive 23% of unnecessary escalations. Top 3: order status (2,340 cases), refund policy (1,890), warranty claims (1,120). I recommend creating new bot flows for each.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-flows', 'prioritize-top3', 'kb-articles', 'test-utterances'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: '8 bot flow templates are ready. Start with order status, refund policy, and warranty claims — they represent 47% of the opportunity.', delay: 2500 }
  ]
};
