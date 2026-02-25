const FLOW_AD_COMMENT_MODERATION = {
  id: 'ad-comment-moderation',
  name: 'Ad Comment Moderation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '1,247 ad comments need moderation — 73 are harmful',
    description: [
      'Your active Meta ads have accumulated <strong>1,247 new comments</strong> in the past 48 hours.',
      '73 contain harmful content (hate speech, spam, competitor links) that should be hidden. 89 are product questions that could be converted to sales.'
    ],
    completedDescription: ['Ad moderation complete — 73 harmful comments hidden, 89 product questions flagged for response, and daily moderation automation enabled.'],
    footer: 'This supports your goal: Maintain brand safety across all paid content and convert ad comments to sales opportunities',
    checkboxItems: [
      { action: 'hide-harmful', label: 'Auto-hide 73 comments flagged as harmful or spam' },
      { action: 'flag-questions', label: 'Flag 89 product questions for sales team response' },
      { action: 'escalate-pr', label: 'Escalate 5 high-risk comments to PR/brand safety team' },
      { action: 'setup-automation', label: 'Set up daily moderation automation for all active ads' }
    ],
    moreIdeasPool: [
      { action: 'competitor-links', label: 'Create rule to auto-hide comments with competitor brand links' },
      { action: 'positive-boost', label: 'Identify and boost most positive comments as social proof' },
      { action: 'sentiment-tracking', label: 'Set up ad comment sentiment tracking in Unified Analytics' }
    ]
  },
  decisionItems: [
    { key: 'hidden', label: '73 harmful comments hidden from ads', href: 'community-inbox.html' },
    { key: 'flagged', label: '89 product questions flagged for sales response', href: 'community-inbox.html' },
    { key: 'automation', label: 'Daily moderation automation active', href: 'community-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> auto-hid 73 harmful comments from active ads', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> flagged 89 product questions for sales team', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up daily automated moderation for all active ads', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Ad comment moderation complete</strong> — 73 hidden, 89 flagged for sales.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Daily automation enabled. Next check: tomorrow 8am.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your active Meta ads have 1,247 new comments — 73 contain harmful content and 89 are product questions your sales team should respond to. I can handle this now.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['hide-harmful', 'flag-questions', 'setup-automation'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1500 }
  ]
};
