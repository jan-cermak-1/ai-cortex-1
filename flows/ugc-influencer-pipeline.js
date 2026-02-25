const FLOW_UGC_INFLUENCER_PIPELINE = {
  id: 'ugc-influencer-pipeline',
  name: 'UGC Influencer Pipeline',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '18 creators with high-performing UGC — not in your program',
    description: [
      'I found <strong>18 creators</strong> outside your current influencer program who have organically posted about your brand with above-average engagement rates (avg 7.8%).',
      'These are strong candidates for a micro-influencer UGC program — high authenticity, lower cost than traditional influencers.'
    ],
    completedDescription: ['UGC influencer pipeline created — 18 creators identified, outreach drafted, and UGC program framework set up.'],
    footer: 'This supports your goal: Build a cost-effective UGC pipeline with 25+ active micro-influencer partners',
    checkboxItems: [
      { action: 'create-profiles', label: 'Create influencer profiles for all 18 creators in IM module' },
      { action: 'draft-outreach', label: 'Draft personalized outreach for each creator (UGC program invite)' },
      { action: 'setup-program', label: 'Set up UGC program framework: deliverables, compensation, rights' },
      { action: 'request-rights', label: 'Request usage rights for existing organic posts from top 8 creators' }
    ],
    moreIdeasPool: [
      { action: 'seed-products', label: 'Create product seeding plan for the 18 identified creators' },
      { action: 'brand-community', label: 'Invite top 5 creators to exclusive brand community group' },
      { action: 'ambassador-track', label: 'Identify 3 creators suitable for brand ambassador upgrade' }
    ]
  },
  decisionItems: [
    { key: 'profiles', label: '18 creator profiles added to IM module', href: 'influencer-management.html' },
    { key: 'outreach', label: 'Outreach drafts ready for 18 creators', href: 'influencer-management.html' },
    { key: 'program', label: 'UGC program framework configured', href: 'influencer-management.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 18 influencer profiles from organic UGC creators', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> drafted personalized outreach for all 18 creators', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> set up UGC program framework with deliverables and compensation', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC pipeline ready</strong> — 18 organic creators profiled, outreach drafted.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Average engagement rate for identified creators: 7.8% (2x your paid average).', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'influencer-management.html', cursorTarget: '[data-nav-id="influencers"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 18 creators who post about your brand organically with 7.8% average engagement — twice your paid influencer average. They\'re not in your program yet. I can build a UGC pipeline around them.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-profiles', 'draft-outreach', 'setup-program', 'request-rights'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'influencer-management.html', cursorTarget: '[data-nav-id="influencers"]', delay: 1500 }
  ]
};
