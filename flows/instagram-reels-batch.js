const FLOW_INSTAGRAM_REELS_BATCH = {
  id: 'instagram-reels-batch',
  name: 'Instagram Reels Batch',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '8 unused video assets detected',
    description: [
      'I found <strong>8 video assets</strong> in your Content Hub that haven\'t been published yet and are a strong fit for Instagram Reels.',
      'Based on your top-performing content, I can turn them into a full Reels batch:'
    ],
    completedDescription: ['Instagram Reels batch created — 8 posts scheduled across optimal time slots with AI-generated captions and hashtags.'],
    footer: 'This supports your goal: Increase Instagram reach by 40% in Q2 through consistent Reels publishing',
    checkboxItems: [
      { action: 'generate-captions', label: 'Generate AI captions for all 8 Reels (brand voice matched)' },
      { action: 'add-hashtags', label: 'Add optimal hashtag sets (trending + evergreen mix)' },
      { action: 'schedule-optimal', label: 'Schedule across 4 weeks at peak engagement times' },
      { action: 'create-thumbnails', label: 'Generate thumbnail suggestions for each Reel' }
    ],
    moreIdeasPool: [
      { action: 'add-subtitles', label: 'Generate subtitles for all videos (accessibility)' },
      { action: 'ab-captions', label: 'A/B test 2 caption variants for top 3 Reels' },
      { action: 'cross-post-tiktok', label: 'Prepare TikTok versions with adjusted aspect ratios' },
      { action: 'notify-team', label: 'Notify content team about scheduled batch' }
    ]
  },
  decisionItems: [
    { key: 'reels', label: '8 Reels scheduled in Publisher Calendar', href: 'publisher-calendar.html' },
    { key: 'captions', label: 'AI captions generated and approved', href: 'publisher-calendar.html' },
    { key: 'hashtags', label: 'Hashtag sets added to all 8 posts', href: 'publisher-calendar.html' },
    { key: 'assets', label: 'Assets organized in Content Hub', href: 'content-feed.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> scheduled 8 Instagram Reels across 4 weeks', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> generated captions matching brand voice', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> added optimized hashtag sets to all posts', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 8 unused video assets in Content Hub', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Reels batch ready</strong> — 8 posts scheduled over 4 weeks.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'First Reel scheduled for Tuesday 6pm — peak engagement window.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I noticed 8 video assets in your Content Hub that haven\'t been used yet — they\'re a perfect fit for Instagram Reels.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-captions', 'add-hashtags', 'schedule-optimal', 'create-thumbnails'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
