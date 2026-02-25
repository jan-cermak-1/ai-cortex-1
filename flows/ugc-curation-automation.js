const FLOW_UGC_CURATION_AUTOMATION = {
  id: 'ugc-curation-automation',
  name: 'UGC Curation Automation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '234 high-quality UGC pieces across 6 product categories',
    description: [
      'Cortex scanned <strong>8,400 tagged posts</strong> and identified <strong>234 high-quality UGC</strong> pieces across 6 product categories.',
      'Rights-requests sent automatically to 234 creators; <strong>189 approved within 2 days</strong>.'
    ],
    completedDescription: ['UGC curation complete: 234 rights-requests sent, 189 approved in 2 days.'],
    footer: 'This supports your goal: Scale UGC collection by 50%',
    checkboxItems: [
      { action: 'send-rights', label: 'Send rights-requests to 234 creators' },
      { action: 'categorize-6', label: 'Categorize into 6 product categories' },
      { action: 'add-to-collection', label: 'Add approved UGC to collection' }
    ],
    moreIdeasPool: [
      { action: 'quality-score', label: 'View quality score breakdown' },
      { action: 'creator-outreach', label: 'Draft creator outreach templates' }
    ]
  },
  decisionItems: [
    { key: 'rights-sent', label: '234 rights-requests sent', href: 'ugc-albums.html' },
    { key: '189-approved', label: '189 approved in 2 days', href: 'ugc-albums.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> sent rights-requests to 234 creators', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 234 high-quality UGC from 8,400 posts', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC Curation</strong> — 234 high-quality pieces, 189 approved in 2 days', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I scanned 8,400 tagged posts and found 234 high-quality UGC pieces across 6 product categories. Rights-requests sent to all 234 — 189 approved within 2 days.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['send-rights', 'categorize-6', 'add-to-collection'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
