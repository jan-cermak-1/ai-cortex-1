const FLOW_INFLUENCER_CAMPAIGN_LAUNCH = {
  id: 'influencer-campaign-launch',
  name: 'Influencer Campaign Launch',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Influencer campaign ready — 8 creators confirmed',
    description: [
      '<strong>8 influencers</strong> have confirmed participation in your Q2 product campaign. Contracts are signed and briefs need to be sent.',
      'I can automate the entire campaign launch: brief delivery, tracking setup, and performance monitoring.'
    ],
    completedDescription: ['Influencer campaign launched — 8 creator briefs sent, tracking links generated, and performance monitoring active.'],
    footer: 'This supports your goal: Launch Q2 influencer campaign reaching 2.4M combined audience within 48 hours',
    checkboxItems: [
      { action: 'send-briefs', label: 'Send personalized campaign briefs and assets to all 8 creators' },
      { action: 'generate-links', label: 'Generate unique UTM tracking links for each influencer' },
      { action: 'setup-monitoring', label: 'Set up campaign performance monitoring with content alerts' },
      { action: 'create-dashboard', label: 'Create influencer campaign dashboard in Unified Analytics' }
    ],
    moreIdeasPool: [
      { action: 'posting-reminders', label: 'Set up automated posting deadline reminders to creators' },
      { action: 'ugc-rights', label: 'Pre-configure usage rights requests for all creator content' },
      { action: 'paid-amplification', label: 'Identify top 2 creator posts to amplify as paid boosted content' }
    ]
  },
  decisionItems: [
    { key: 'briefs', label: '8 creator briefs sent with campaign assets', href: 'influencer-management.html' },
    { key: 'links', label: 'UTM tracking links generated for all 8 creators', href: 'unified-analytics.html' },
    { key: 'dashboard', label: 'Campaign performance dashboard created', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> sent personalized briefs to 8 confirmed influencers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated unique UTM tracking links for each creator', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up campaign monitoring with content detection alerts', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Campaign launched</strong> — 8 briefs sent, tracking active, dashboard ready.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '2 creators already confirmed receipt. First content expected in 5 days.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'influencer-management.html', cursorTarget: '[data-nav-id="influencers"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '8 influencers have confirmed and contracts are signed. I can send all 8 personalized briefs, generate tracking links, and set up the performance dashboard — ready to launch?', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['send-briefs', 'generate-links', 'setup-monitoring', 'create-dashboard'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
