const FLOW_HASHTAG_INTELLIGENCE = {
  id: 'hashtag-intelligence',
  name: 'Hashtag Intelligence',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '90-day hashtag performance analyzed',
    description: [
      'Cortex analyzed <strong>90 days</strong> of your hashtag performance across all platforms.',
      'Retire 12 underperforming tags, promote 6 rising tags, discovered <strong>4 niche hashtags</strong> your audience already uses.'
    ],
    completedDescription: ['Hashtag strategy updated: 12 retired, 6 promoted, 4 new niche tags added.'],
    footer: 'This supports your goal: Improve discoverability and reach',
    checkboxItems: [
      { action: 'retire-12', label: 'Retire 12 underperforming hashtags' },
      { action: 'promote-6', label: 'Promote 6 rising hashtags to primary set' },
      { action: 'add-4-niche', label: 'Add 4 discovered niche hashtags' }
    ],
    moreIdeasPool: [
      { action: 'competitor-tags', label: 'Analyze competitor hashtag performance' },
      { action: 'platform-breakdown', label: 'View hashtag performance by platform' }
    ]
  },
  decisionItems: [
    { key: 'hashtags-updated', label: 'Hashtag strategy updated', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> retired 12 underperforming hashtags', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> promoted 6 rising hashtags', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> discovered 4 niche hashtags your audience uses', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Hashtag Intelligence</strong> — 12 retired, 6 promoted, 4 new niche tags', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed 90 days of your hashtag performance. Retire 12 underperforming tags, promote 6 rising ones, and I found 4 niche hashtags your audience already uses that you\'re not leveraging.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['retire-12', 'promote-6', 'add-4-niche'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
