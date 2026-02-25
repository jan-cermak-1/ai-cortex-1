const FLOW_LINKEDIN_DOCUMENT_CAMPAIGN = {
  id: 'linkedin-document-campaign',
  name: 'LinkedIn Document Campaign',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '3 whitepapers ready for LinkedIn document posts',
    description: [
      'I found <strong>3 PDF whitepapers</strong> in your Content Hub that would perform well as LinkedIn document posts.',
      'LinkedIn document posts in your industry get 3x higher engagement than standard image posts. I can set up a complete campaign:'
    ],
    completedDescription: ['LinkedIn document campaign created — 3 posts scheduled with optimized copy, UTM tracking, and lead capture setup.'],
    footer: 'This supports your goal: Generate 150 B2B leads per month from LinkedIn organic content',
    checkboxItems: [
      { action: 'create-posts', label: 'Create LinkedIn document posts for all 3 whitepapers' },
      { action: 'write-hooks', label: 'Write engagement-optimized headlines and hook copy' },
      { action: 'add-utm', label: 'Add UTM tracking links for lead attribution' },
      { action: 'schedule-campaign', label: 'Schedule across 3 weeks (Mon/Wed/Fri pattern)' }
    ],
    moreIdeasPool: [
      { action: 'carousel-versions', label: 'Create carousel image versions for Instagram and X' },
      { action: 'newsletter-sync', label: 'Sync with email newsletter for cross-channel distribution' },
      { action: 'retarget-ads', label: 'Set up LinkedIn retargeting for document downloaders' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '3 LinkedIn document posts scheduled', href: 'publisher-calendar.html' },
    { key: 'assets', label: 'PDFs added to Content Hub campaign', href: 'content-feed.html' },
    { key: 'analytics', label: 'UTM tracking configured for lead attribution', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> scheduled 3 LinkedIn document posts with UTM tracking', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated hook copy for all 3 whitepapers', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> identified 3 whitepapers suitable for LinkedIn campaign', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>LinkedIn campaign ready</strong> — 3 document posts scheduled over 3 weeks.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'UTM links created. Attribution reporting active in Analytics.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 3 whitepapers in your Content Hub that would work great as LinkedIn document posts — this format gets 3x higher engagement in B2B.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-posts', 'write-hooks', 'add-utm', 'schedule-campaign'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
