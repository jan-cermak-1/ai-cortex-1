/* ============================================================
   FLOW: Smart Response Training

   Demo scenario: Train AI reply suggestions from top-rated
   agent responses
   Persona: Care Manager
   ============================================================ */

const FLOW_SMART_RESPONSE_TRAINING = {
  id: 'smart-response-training',
  name: 'Smart Response Training',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'RAG-powered reply suggestions ready',
    description: [
      '<strong>Smart Response Training complete:</strong> Cortex analyzed the top 500 best-rated agent responses from the last 6 months.',
      'Identified patterns, clustered by topic, and built the RAG-powered suggestion model.',
      'Recommended actions:'
    ],
    completedDescription: [
      'Smart Response model trained. AI reply suggestions ready for Care agents.'
    ],
    footer: 'This supports your goal: Improve response quality and consistency',

    checkboxItems: [
      { action: 'deploy-model', label: 'Deploy RAG suggestion model to Care Inbox' },
      { action: 'enable-assistant', label: 'Enable AI Reply Assistant for all agents' },
      { action: 'topic-clusters', label: 'Review 12 topic clusters (refunds, shipping, etc.)' },
      { action: 'feedback-loop', label: 'Set up feedback loop to improve suggestions' }
    ],

    moreIdeasPool: [
      { action: 'brand-voice', label: 'Apply brand voice filter to suggestions' },
      { action: 'language-expand', label: 'Expand to 5 additional languages' }
    ]
  },

  decisionItems: [
    { key: 'model-deployed', label: 'RAG model deployed to Care', href: 'care-inbox.html' },
    { key: 'clusters-reviewed', label: '12 topic clusters reviewed', href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> deployed RAG suggestion model to Care', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 12 topic clusters from 500 top responses', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> trained on 6 months of best-rated agent replies', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Smart Response Training:</strong> RAG model built from 500 top-rated responses.', time: '5 min ago', unread: true },
    { icon: 'ai', text: '12 topic clusters ready. AI Reply Assistant enabled.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Smart Response Training complete:</strong> I analyzed the top 500 best-rated agent responses from the last 6 months.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Identified patterns and clustered by topic — 12 clusters (refunds, shipping, billing, etc.). The RAG-powered suggestion model is ready. Enable AI Reply Assistant for your agents?', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['deploy-model', 'enable-assistant', 'topic-clusters', 'feedback-loop'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'AI Reply Assistant is live. Agents will see contextual suggestions as they type.', delay: 2500 }
  ]
};
