const FLOW_CAMPAIGN_LIFT_ANALYSIS = {
  id: 'campaign-lift-analysis',
  name: 'Campaign Lift Analysis',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Post-campaign lift: +34% mentions, +8% SOV',
    description: [
      'Cortex measured lift across 6 weeks: <strong>brand mentions +34%</strong>, share of voice +8%, and sentiment improved 12 points.',
      'Attribution report links paid + organic social to awareness metrics. Top drivers: Instagram Reels (+42% reach), paid amplification of hero creative (+28% SOV contribution), and influencer posts (19% of total mentions).'
    ],
    completedDescription: ['Attribution report created — lift metrics documented, paid/organic split visualized, and recommendations for next campaign generated.'],
    footer: 'This supports your goal: Prove campaign ROI and optimize future paid + organic mix',
    checkboxItems: [
      { action: 'create-report', label: 'Create full attribution report with paid vs organic split' },
      { action: 'update-dashboard', label: 'Add campaign lift metrics to Unified Analytics dashboard' },
      { action: 'next-campaign', label: 'Generate recommendations for next campaign based on top drivers' }
    ],
    moreIdeasPool: [
      { action: 'reels-budget', label: 'Propose Reels budget increase based on +42% reach' },
      { action: 'influencer-scale', label: 'Scale influencer program — 19% of mentions from 8 creators' }
    ]
  },
  decisionItems: [
    { key: 'report', label: 'Attribution report created', href: 'unified-analytics.html' },
    { key: 'dashboard', label: 'Lift metrics added to dashboard', href: 'unified-analytics.html' },
    { key: 'recommendations', label: 'Next campaign recommendations ready', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created attribution report with paid vs organic split', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> added campaign lift metrics to dashboard', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> measured +34% mentions and +8% SOV over 6 weeks', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Campaign lift:</strong> +34% mentions, +8% SOV, +12 sentiment points over 6 weeks.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'Top driver: Reels +42% reach. Paid hero creative +28% SOV.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Post-campaign lift analysis complete. Brand mentions up 34%, share of voice up 8%, sentiment improved 12 points over 6 weeks. Top drivers: Reels +42% reach, paid hero creative +28% SOV contribution, influencer posts 19% of total mentions.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-report', 'update-dashboard', 'next-campaign'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
