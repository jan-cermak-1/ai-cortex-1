const FLOW_CREATIVE_BRAND_VOICE_CHECK = {
  id: 'creative-brand-voice-check',
  name: 'Brand Voice Consistency Check',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '11 of 62 posts deviate from brand voice guidelines',
    description: [
      'Cortex scanned all <strong>62 posts published this month</strong> and detected 11 that deviate from brand voice guidelines.',
      'Issues: 5 too formal (corporate tone vs friendly), 4 too casual (slang vs professional), 2 mixed tone within post. Proposes AI-rewrites aligned to brand playbook. Affected posts: #3, #7, #12, #18, #21, #28, #34, #41, #47, #52, #58.'
    ],
    completedDescription: ['Voice audit complete — 11 posts flagged, AI-rewrites proposed, 51 posts confirmed on-brand.'],
    footer: 'This supports your goal: Maintain consistent brand voice across all published content',
    checkboxItems: [
      { action: 'apply-rewrites', label: 'Apply AI-rewrites to 11 flagged posts (as drafts)' },
      { action: 'create-report', label: 'Create brand voice audit report for team' },
      { action: 'update-playbook', label: 'Add 3 new examples to brand voice playbook from audit' }
    ],
    moreIdeasPool: [
      { action: 'pre-publish-check', label: 'Enable pre-publish voice check for future posts' },
      { action: 'team-training', label: 'Generate training snippets from flagged examples' }
    ]
  },
  decisionItems: [
    { key: 'rewrites', label: '11 AI-rewrites as drafts', href: 'publisher-calendar.html' },
    { key: 'report', label: 'Voice audit report created', href: 'unified-analytics.html' },
    { key: 'playbook', label: 'Playbook updated with examples', href: 'content-collection.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created AI-rewrites for 11 flagged posts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated brand voice audit report', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> scanned 62 posts — 11 deviate from brand voice', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Brand voice:</strong> 11 of 62 posts deviate. 5 too formal, 4 too casual, 2 mixed.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'AI-rewrites proposed for posts #3, #7, #12, #18, #21, #28, #34, #41, #47, #52, #58.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I scanned all 62 posts from this month. Eleven deviate from brand voice: 5 too formal, 4 too casual, 2 mixed tone. I\'ve proposed AI-rewrites aligned to your playbook for posts 3, 7, 12, 18, 21, 28, 34, 41, 47, 52, and 58.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-rewrites', 'create-report', 'update-playbook'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
