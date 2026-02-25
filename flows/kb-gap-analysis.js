/* ============================================================
   FLOW: KB Gap Analysis

   Demo scenario: Cortex identifies knowledge base gaps from
   unanswered customer questions
   Persona: Knowledge Manager
   ============================================================ */

const FLOW_KB_GAP_ANALYSIS = {
  id: 'kb-gap-analysis',
  name: 'KB Gap Analysis',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: '23 knowledge base gaps identified',
    description: [
      '<strong>Gap analysis complete:</strong> Cortex analyzed which customer questions agents could not answer using existing KB articles.',
      '23 distinct gaps found — agents searched but found no match in 4,200+ cases last month.',
      'Recommended actions:'
    ],
    completedDescription: [
      'KB gap analysis complete. 23 new article proposals ready for authoring.'
    ],
    footer: 'This supports your goal: Improve first-contact resolution and bot containment',

    checkboxItems: [
      { action: 'create-articles', label: 'Create draft articles for all 23 gaps' },
      { action: 'prioritize-gaps', label: 'Prioritize top 10 highest-impact gaps' },
      { action: 'assign-authors', label: 'Assign article owners from Care team' },
      { action: 'bot-sync', label: 'Sync new articles to Bot knowledge base when ready' }
    ],

    moreIdeasPool: [
      { action: 'search-log-review', label: 'Review agent search logs for patterns' },
      { action: 'duplicate-check', label: 'Check for overlap with existing articles' }
    ]
  },

  decisionItems: [
    { key: 'articles-drafted', label: '23 draft articles created', href: 'content-collection.html' },
    { key: 'priorities-set', label: 'Top 10 gaps prioritized', href: 'care-inbox.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created 23 draft KB article outlines', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified top gap: "international shipping delays" (890 searches)', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 4,200 agent search failures', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>KB Gap Analysis:</strong> 23 gaps found. 4,200 cases had no KB match last month.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Draft articles ready. Top gap: international shipping delays.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>KB Gap Analysis complete:</strong> I analyzed which customer questions your agents could not answer using the Knowledge Base.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Found <strong>23 distinct gaps</strong> — 4,200+ cases last month where agents searched but found no match. Top gap: "international shipping delays" (890 searches). I propose new articles for each.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-articles', 'prioritize-gaps', 'assign-authors', 'bot-sync'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="content"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: '23 draft article outlines created. Address the top 10 gaps first to reduce 67% of search failures.', delay: 2500 }
  ]
};
