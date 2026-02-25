const FLOW_VISUAL_UGC_BRAND_DETECTION = {
  id: 'visual-ugc-brand-detection',
  name: 'Visual UGC Brand Detection',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '340 untagged brand mentions in user images detected',
    description: [
      'I scanned social media images using visual AI and found <strong>340 posts featuring your logo or products</strong> that don\'t mention your brand in text — meaning they\'re not captured by your keyword-based Listening.',
      'This is "dark mentions" — real brand visibility you\'re missing. These could be UGC opportunities or early product feedback.'
    ],
    completedDescription: ['Visual brand detection set up — 340 posts catalogued, usage rights requested for top 40, and visual monitoring active.'],
    footer: 'This supports your goal: Capture 100% of brand visibility across social media including visual-only mentions',
    checkboxItems: [
      { action: 'catalogue-posts', label: 'Catalogue all 340 visually detected posts in Content Hub' },
      { action: 'request-rights', label: 'Send usage rights requests to creators of top 40 highest-quality posts' },
      { action: 'setup-visual-monitoring', label: 'Set up continuous visual brand monitoring for new detections' },
      { action: 'sentiment-categorize', label: 'Categorize posts by context: positive usage, neutral, negative' }
    ],
    moreIdeasPool: [
      { action: 'competitor-visual', label: 'Run visual scan to detect competitor products in same UGC pool' },
      { action: 'retail-detection', label: 'Detect which retail environments your products appear in most' },
      { action: 'performance-track', label: 'Track engagement on posts featuring your product vs non-product posts' }
    ]
  },
  decisionItems: [
    { key: 'catalogue', label: '340 visually detected posts catalogued in Content Hub', href: 'content-feed.html' },
    { key: 'rights', label: 'Usage rights requests sent to 40 creators', href: 'ugc-albums.html' },
    { key: 'monitoring', label: 'Visual brand monitoring active (ongoing)', href: 'settings-listening.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> catalogued 340 visually detected brand posts in Content Hub', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent usage rights requests to 40 top UGC creators', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> scanned social media images — 340 untagged brand mentions found', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Visual detection complete</strong> — 340 untagged brand posts found. Rights requests sent.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Visual monitoring active. New brand image detections will alert daily.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I used visual AI to scan social media images and found 340 posts featuring your logo or products — but with no text mention of your brand. These "dark mentions" are invisible to your keyword-based listening. Here\'s what I can do with them.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['catalogue-posts', 'request-rights', 'setup-visual-monitoring', 'sentiment-categorize'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-feed.html', cursorTarget: '[data-nav-id="content"]', delay: 2000 }
  ]
};
