/* ============================================================
   FLOW: KB Refinement

   Demo scenario: Cortex finds duplicate and ambiguous KB articles
   for merge and cleanup
   Persona: Knowledge Manager
   ============================================================ */

const FLOW_KB_REFINEMENT = {
  id: 'kb-refinement',
  name: 'KB Refinement',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'KB cleanup opportunity: 23 articles to merge',
    description: [
      '<strong>Refinement analysis:</strong> Cortex analyzed 340 total KB articles.',
      'Found 14 duplicate and 8 ambiguous articles — reducing bot containment and agent response quality.',
      'Recommended actions:'
    ],
    completedDescription: [
      'KB refinement plan created. 14 duplicates and 8 ambiguous articles flagged for merge.'
    ],
    footer: 'This supports your goal: Improve bot containment and agent response quality',

    checkboxItems: [
      { action: 'merge-duplicates', label: 'Merge 14 duplicate articles into canonical versions' },
      { action: 'disambiguate', label: 'Refine 8 ambiguous articles with clearer structure' },
      { action: 'update-bot', label: 'Update Bot knowledge base after merge' },
      { action: 'redirect-old', label: 'Set up redirects from old article URLs' }
    ],

    moreIdeasPool: [
      { action: 'outdated-audit', label: 'Audit for outdated product references' },
      { action: 'usage-stats', label: 'Review article usage before merge' }
    ]
  },

  decisionItems: [
    { key: 'merged', label: '14 duplicates merged', href: 'content-collection.html' },
    { key: 'refined', label: '8 ambiguous articles refined', href: 'care-inbox.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created merge plan for 14 duplicate articles', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 8 ambiguous articles (e.g. "Returns" vs "Refunds")', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 340 KB articles', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>KB Refinement:</strong> 14 duplicates + 8 ambiguous articles — merge plan ready.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Merge plan created. Estimated 12% containment gain after cleanup.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>KB Refinement:</strong> I analyzed your 340 Knowledge Base articles and found <strong>14 duplicates</strong> and <strong>8 ambiguous</strong> articles.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Example: "Returns Policy" and "Refund Process" overlap 78%. Merging these could improve bot containment by ~12%. I recommend a merge and cleanup plan.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['merge-duplicates', 'disambiguate', 'update-bot', 'redirect-old'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="content"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Merge plan ready. Start with the 5 highest-traffic duplicate pairs first.', delay: 2500 }
  ]
};
