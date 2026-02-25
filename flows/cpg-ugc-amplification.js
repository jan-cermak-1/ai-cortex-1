const FLOW_CPG_UGC_AMPLIFICATION = {
  id: 'cpg-ugc-amplification',
  name: 'CPG UGC Amplification',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '2,400 UGC posts featuring your product — amplification opportunity',
    description: [
      'I detected <strong>2,400 customer posts</strong> featuring your product across Instagram and TikTok this month — but only 180 were reshared by your brand accounts.',
      'CPG brands that systematically reshare customer content see 42% higher engagement than brands that don\'t. The amplification potential here is significant.'
    ],
    completedDescription: ['UGC amplification pipeline configured — top 40 posts selected for resharing, rights requests sent, and monthly cadence set up.'],
    footer: 'This supports your goal: Create an authentic UGC amplification pipeline that showcases real customer usage at scale',
    checkboxItems: [
      { action: 'select-top40', label: 'AI-select top 40 highest-quality UGC posts for amplification' },
      { action: 'request-rights', label: 'Send rights request messages to all 40 creators' },
      { action: 'create-schedule', label: 'Create 8-week resharing schedule (5 UGC posts/week)' },
      { action: 'setup-pipeline', label: 'Set up monthly UGC amplification pipeline to run automatically' }
    ],
    moreIdeasPool: [
      { action: 'stitch-format', label: 'Identify top 10 TikTok posts suitable for Stitch format amplification' },
      { action: 'ugc-contest', label: 'Launch "Featured Customer of the Month" program to incentivize UGC' },
      { action: 'retail-ugc', label: 'Surface product usage UGC to retailer partners for product page content' }
    ]
  },
  decisionItems: [
    { key: 'selected', label: 'Top 40 UGC posts selected for amplification', href: 'ugc-albums.html' },
    { key: 'rights', label: 'Rights requests sent to 40 creators', href: 'ugc-albums.html' },
    { key: 'schedule', label: '8-week resharing schedule in Publisher', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> selected top 40 UGC posts from 2,400 monthly submissions', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent rights request messages to 40 creators', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created 8-week UGC resharing schedule in Publisher', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>UGC pipeline configured</strong> — 40 top posts selected, rights requested, schedule live.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '2,400 UGC posts this month. Top category: cooking recipes (34%). Second: lifestyle (28%).', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '2,400 customers posted about your product this month but only 180 were reshared. CPG brands that systematically amplify UGC see 42% higher engagement. I can select the best 40, request rights, and build the resharing pipeline.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['select-top40', 'request-rights', 'create-schedule', 'setup-pipeline'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
