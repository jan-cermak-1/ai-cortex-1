const FLOW_UGC_RIGHTS_CAMPAIGN = {
  id: 'ugc-rights-campaign',
  name: 'UGC Rights Campaign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '156 UGC pieces selected — rights requests in progress',
    description: [
      'New product launch generated <strong>3,400 tagged posts</strong>. I selected <strong>156 highest-quality</strong> UGC pieces.',
      'Auto-sending rights request DMs to each creator and tracking approval status in real time.'
    ],
    completedDescription: ['UGC rights campaign active — 156 rights requests sent, approval status tracked in real time.'],
    footer: 'This supports your goal: Secure rights for top UGC to use in marketing',
    checkboxItems: [
      { action: 'send-requests', label: 'Send rights request DMs to 156 creators' },
      { action: 'track-approvals', label: 'Track approval status in real-time dashboard' },
      { action: 'follow-up-pending', label: 'Schedule follow-up for non-responders after 5 days' }
    ],
    moreIdeasPool: [
      { action: 'approval-templates', label: 'Create approval workflow templates for different use cases' },
      { action: 'ugc-gallery', label: 'Add approved UGC to brand gallery' }
    ]
  },
  decisionItems: [
    { key: 'requests-sent', label: '156 rights requests sent', href: 'ugc-albums.html' },
    { key: 'dashboard', label: 'Approval tracking dashboard active', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> selected 156 top UGC from 3,400 tagged posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent rights request DMs to all 156 creators', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC Rights</strong> — 156 requests sent from 3,400 posts. Tracking approvals.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Product launch generated 3,400 tagged posts. I selected <strong>156 highest-quality</strong> pieces and am auto-sending rights request DMs. Approval status tracked in real time.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['send-requests', 'track-approvals', 'follow-up-pending'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
