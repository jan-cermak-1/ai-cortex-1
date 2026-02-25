const FLOW_AD_CREATIVE_ROTATOR = {
  id: 'ad-creative-rotator',
  name: 'Ad Creative Rotator',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Creative fatigue detected — CTR -35% in 7 days',
    description: [
      'Cortex detected creative fatigue in your Facebook ad set — <strong>CTR dropped 35% in 7 days</strong>.',
      'Auto-generated 4 creative variations from existing brand assets, ready for A/B testing. Variations: V1 — new headline + hero image, V2 — carousel format from single image, V3 — UGC-style overlay, V4 — minimal text + bold CTA. Estimated recovery: 2–3 days to baseline CTR.'
    ],
    completedDescription: ['4 creative variations created — added to ad set for A/B test, fatigue alert configured for future.'],
    footer: 'This supports your goal: Maintain ad performance by rotating creatives before fatigue',
    checkboxItems: [
      { action: 'add-variations', label: 'Add 4 creative variations to ad set for A/B test' },
      { action: 'set-rotation', label: 'Set 7-day creative rotation rule for future' },
      { action: 'configure-alert', label: 'Configure CTR drop alert at 25% threshold' }
    ],
    moreIdeasPool: [
      { action: 'audience-refresh', label: 'Refresh audience exclusions to reduce frequency' },
      { action: 'new-assets', label: 'Request 2 new hero images from creative team' }
    ]
  },
  decisionItems: [
    { key: 'variations', label: '4 variations in ad set', href: 'unified-analytics.html' },
    { key: 'rotation', label: '7-day rotation rule set', href: 'command-center.html' },
    { key: 'alert', label: 'CTR drop alert configured', href: 'command-center.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> added 4 creative variations to ad set', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set 7-day creative rotation rule', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 35% CTR drop and generated 4 variations', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Creative fatigue:</strong> CTR -35% in 7 days. 4 variations ready for A/B test.', time: '4 min ago', unread: true },
    { icon: 'activity', text: 'V1 headline+image, V2 carousel, V3 UGC overlay, V4 minimal CTA. 2–3 days to baseline.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Creative fatigue in your Facebook ad set — CTR dropped 35% in 7 days. I generated 4 variations from your brand assets: new headline+hero, carousel format, UGC-style overlay, minimal CTA. Ready for A/B test. Expected 2–3 days to baseline.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['add-variations', 'set-rotation', 'configure-alert'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
