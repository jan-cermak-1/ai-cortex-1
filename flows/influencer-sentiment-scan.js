const FLOW_INFLUENCER_SENTIMENT_SCAN = {
  id: 'influencer-sentiment-scan',
  name: 'Influencer Sentiment Scan',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '4 of 120 influencers show negative brand alignment',
    description: [
      'Cortex scanned content from your <strong>120 active influencers</strong> and detected 4 whose recent posts show negative brand alignment.',
      'Risk level: 2 high (recent critical posts), 2 medium (declining sentiment trend). I recommend review before next campaign activation. Affected creators: @creator_a (2.1M), @creator_b (890K), @creator_c (420K), @creator_d (310K).'
    ],
    completedDescription: ['Scan complete — 4 influencers flagged for review, risk report generated, and campaign roster updated.'],
    footer: 'This supports your goal: Protect brand reputation by vetting influencers before campaign activation',
    checkboxItems: [
      { action: 'flag-influencers', label: 'Flag 4 influencers for manual review in Influencers module' },
      { action: 'generate-report', label: 'Generate risk report with post examples and sentiment scores' },
      { action: 'update-roster', label: 'Temporarily exclude flagged influencers from next campaign roster' }
    ],
    moreIdeasPool: [
      { action: 'reach-out', label: 'Draft outreach to 2 medium-risk influencers for alignment check' },
      { action: 'contract-review', label: 'Flag contracts for legal review if breach suspected' }
    ]
  },
  decisionItems: [
    { key: 'flagged', label: '4 influencers flagged for review', href: 'ugc-albums.html' },
    { key: 'report', label: 'Risk report with post examples', href: 'unified-analytics.html' },
    { key: 'roster', label: 'Campaign roster updated', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> flagged 4 influencers for review', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated risk report with sentiment scores', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> scanned 120 influencers for brand alignment', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Influencer scan:</strong> 4 of 120 show negative alignment. Review before next campaign.', time: '4 min ago', unread: true },
    { icon: 'activity', text: '2 high-risk, 2 medium-risk. Combined reach: 3.7M.', time: '3 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I scanned your 120 active influencers and found 4 with negative brand alignment in recent posts. Two high-risk with critical posts, two medium-risk with declining sentiment. Combined reach 3.7M — I recommend review before next campaign activation.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['flag-influencers', 'generate-report', 'update-roster'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'ugc-albums.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
