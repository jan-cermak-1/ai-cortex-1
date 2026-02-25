const FLOW_BRAND_VOICE_REFRESH = {
  id: 'brand-voice-refresh',
  name: 'Brand Voice Refresh',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Brand voice inconsistency detected',
    description: [
      'I analyzed your last <strong>100 published posts</strong> and found that 23% deviate from your defined brand voice guidelines — especially on LinkedIn and X.',
      'Common patterns: overly formal tone on Instagram, inconsistent use of product terminology, missing brand personality markers.',
      'Here\'s how I can fix this:'
    ],
    completedDescription: ['Brand voice analysis complete — 5 upcoming posts regenerated and brand voice guidelines updated in AI settings.'],
    footer: 'This supports your goal: Maintain a consistent brand voice score above 90% across all channels',
    checkboxItems: [
      { action: 'regenerate-posts', label: 'Regenerate 5 upcoming scheduled posts with correct brand voice' },
      { action: 'update-guidelines', label: 'Update AI generation guidelines with latest brand voice rules' },
      { action: 'flag-deviations', label: 'Flag the 23 non-compliant posts for manual review' },
      { action: 'voice-report', label: 'Generate brand voice consistency report for CMO' }
    ],
    moreIdeasPool: [
      { action: 'tone-templates', label: 'Create per-channel tone templates (IG vs LinkedIn vs X)' },
      { action: 'approval-rule', label: 'Add brand voice check to approval workflow' },
      { action: 'team-training', label: 'Generate brand voice quick-reference guide for team' }
    ]
  },
  decisionItems: [
    { key: 'posts', label: '5 posts regenerated with brand voice', href: 'publisher-calendar.html' },
    { key: 'flagged', label: '23 posts flagged for review', href: 'publisher-calendar.html' },
    { key: 'report', label: 'Brand voice consistency report ready', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> regenerated 5 scheduled posts with brand voice', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> flagged 23 posts for brand voice review', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 100 published posts for voice consistency', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Brand voice drift detected</strong> — 23% of recent posts deviate from guidelines.', time: '2 min ago', unread: true },
    { icon: 'activity', text: '5 upcoming posts regenerated and ready for review.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I ran a brand voice analysis on your last 100 posts. I found that 23% deviate from your defined guidelines — mainly on LinkedIn and X.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['regenerate-posts', 'update-guidelines', 'flag-deviations', 'voice-report'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
