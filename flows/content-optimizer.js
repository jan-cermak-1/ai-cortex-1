/* ============================================================
   FLOW: Content Optimizer
   
   Demo scenario: Content Lead optimizes scheduled posts based on AI analysis
   Persona: Content Lead
   ============================================================ */

const FLOW_CONTENT_OPTIMIZER = {
  id: 'content-optimizer',
  name: 'Content Optimizer',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Content optimization opportunities',
    description: [
      'I analyzed your <strong>23 scheduled posts</strong> for next week.',
      'Found optimization opportunities based on audience behavior and competitor activity:'
    ],
    completedDescription: [
      'Content optimization complete. 23 posts enhanced for better performance.'
    ],
    footer: 'This supports your goal: Increase average engagement rate by 25% through AI-optimized content',
    
    checkboxItems: [
      { action: 'optimal-times',   label: 'Reschedule 8 posts to optimal engagement windows' },
      { action: 'copy-enhance',    label: 'Enhance captions with AI-generated improvements' },
      { action: 'hashtag-update',  label: 'Update hashtags based on current trending data' },
      { action: 'visual-suggest',  label: 'Suggest visual improvements for underperforming formats' }
    ],
    
    moreIdeasPool: [
      { action: 'ab-test',         label: 'Set up A/B tests for top 5 posts' },
      { action: 'audience-split',  label: 'Segment content by audience demographics' },
      { action: 'competitor-gap',  label: 'Identify content gaps vs competitors' },
      { action: 'repurpose-top',   label: 'Suggest repurposing for top-performing past content' },
      { action: 'video-cuts',      label: 'Generate short-form video cuts from long content' },
      { action: 'localization',    label: 'Localize content for different markets' }
    ]
  },

  decisionItems: [
    { key: 'rescheduled', label: '8 posts rescheduled to optimal times', href: 'publisher-calendar.html' },
    { key: 'captions',    label: '23 captions enhanced',                 href: 'publisher-calendar.html' },
    { key: 'hashtags',    label: 'Hashtags updated for all posts',       href: 'publisher-calendar.html' },
    { key: 'visuals',     label: '5 visual improvement suggestions',     href: 'content-collection.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> rescheduled 8 posts to optimal time slots', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> enhanced captions for 23 posts', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> updated hashtags based on trending analysis', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated 5 visual improvement recommendations', time: '3 minutes ago' },
    { text: '<strong>You</strong> approved content optimization batch', time: '4 minutes ago' },
    { text: '<strong>Cortex AI</strong> completed content analysis for 23 scheduled posts', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>23 posts</strong> analyzed. Optimization opportunities found.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Predicted <strong>+32% engagement</strong> with optimized schedule.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Monday\'s posts now scheduled for 9:30 AM (peak engagement).', time: '2 min ago', unread: false },
    { icon: 'activity', text: 'Hashtag #SpringLaunch trending — added to 4 relevant posts.', time: '3 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I analyzed your <strong>23 scheduled posts</strong> for next week.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Found optimization opportunities based on audience behavior and trending data. Predicted <strong>+32% engagement</strong> possible.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I can reschedule to optimal times, enhance captions, update hashtags, and suggest visual improvements.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['optimal-times', 'copy-enhance', 'hashtag-update', 'visual-suggest'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Optimization complete! 8 posts rescheduled, 23 captions enhanced, hashtags updated, 5 visual suggestions ready.', delay: 2500 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Your optimized content calendar. Monday posts now scheduled for 9:30 AM peak engagement.', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="content"]', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Visual improvement suggestions are in your collection. Demo complete!', delay: 2000 }
  ]
};
