const FLOW_UGC_GALLERY_REFRESH = {
  id: 'ugc-gallery-refresh',
  name: 'UGC Gallery Refresh',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Product page UGC gallery is 62 days old — refresh ready',
    description: [
      'Your top 3 product pages have UGC galleries that haven\'t been refreshed in <strong>62 days</strong>. You have 94 new approved UGC submissions that could replace the aging content.',
      'Fresh UGC increases product page conversion rates by an average of 8-12%.'
    ],
    completedDescription: ['UGC galleries refreshed — 18 new submissions published across 3 product pages, old content archived.'],
    footer: 'This supports your goal: Keep product page UGC fresh (refresh every 30 days) to maximize conversion rates',
    checkboxItems: [
      { action: 'select-best', label: 'Select top 6 highest-quality UGC submissions per product page' },
      { action: 'update-galleries', label: 'Update UGC galleries on 3 product pages with selected submissions' },
      { action: 'archive-old', label: 'Archive old UGC submissions to Content Hub "Archive" album' },
      { action: 'schedule-refresh', label: 'Set up automatic 30-day UGC refresh reminder' }
    ],
    moreIdeasPool: [
      { action: 'ab-test', label: 'A/B test new UGC gallery against old to measure conversion impact' },
      { action: 'request-more', label: 'Send permission requests to 20 high-quality recent reviewers' },
      { action: 'video-priority', label: 'Prioritize video UGC submissions for gallery slots' }
    ]
  },
  decisionItems: [
    { key: 'galleries', label: '3 product page UGC galleries refreshed', href: 'ugc-albums.html' },
    { key: 'archived', label: 'Old UGC archived in Content Hub', href: 'content-feed.html' },
    { key: 'scheduled', label: '30-day refresh reminder configured', href: 'ugc-albums.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> updated UGC galleries on 3 product pages', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> selected best 6 UGC submissions per product page', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> archived old UGC to Content Hub archive', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC galleries refreshed</strong> — 18 new submissions live on product pages.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected conversion rate improvement: 8-12% based on industry benchmarks.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your top 3 product page UGC galleries haven\'t been refreshed in 62 days — but you have 94 new approved submissions ready. Fresh UGC can boost conversions 8-12%.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['select-best', 'update-galleries', 'archive-old', 'schedule-refresh'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 1500 }
  ]
};
