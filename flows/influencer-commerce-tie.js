const FLOW_INFLUENCER_COMMERCE_TIE = {
  id: 'influencer-commerce-tie',
  name: 'Influencer Commerce Tie',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34 influencer links → 1,240 conversions, $89K revenue',
    description: [
      'Connect influencer campaign performance to actual commerce outcomes. Cortex tracked 34 influencer links and coupon codes to 1,240 conversions and $89K revenue.',
      'Ranks influencers by actual sales impact, not just reach. Top performer: 340 conversions, $28K — 4.2% of total campaign revenue.'
    ],
    completedDescription: ['Influencer-commerce tie active — 34 links tracked to 1,240 conversions, $89K. Ranked by sales impact.'],
    footer: 'This supports your goal: Optimize influencer spend based on real commerce ROI',
    checkboxItems: [
      { action: 'track-links', label: 'Track 34 influencer links and coupon codes' },
      { action: 'attribute-conversions', label: 'Attribute 1,240 conversions to influencers' },
      { action: 'rank-by-revenue', label: 'Rank influencers by sales impact' }
    ],
    moreIdeasPool: [
      { action: 'roi-report', label: 'Build influencer ROI report for renewals' }
    ]
  },
  decisionItems: [
    { key: 'conversions', label: '1,240 conversions attributed', href: 'unified-analytics.html' },
    { key: 'ranking', label: 'Influencers ranked by revenue', href: 'ugc-albums.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> tracked 34 influencer links to $89K revenue', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> ranked influencers by sales impact', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Influencer commerce:</strong> 34 links → 1,240 conversions, $89K. Top: 340 conv, $28K.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I connected influencer campaigns to commerce: 34 links and coupon codes tracked to 1,240 conversions and $89K revenue. Influencers now ranked by actual sales impact, not reach. Top performer: 340 conversions, $28K — 4.2% of total campaign revenue.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['track-links', 'attribute-conversions', 'rank-by-revenue'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
