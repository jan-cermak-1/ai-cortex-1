/* ============================================================
   FLOW: Content Calendar Import
   
   Demo scenario: Social Media Manager uploads an Excel content
   calendar and Cortex creates Publisher drafts + Content Hub
   collection with linked assets.
   Persona: Social Media Manager
   ============================================================ */

const FLOW_CONTENT_CALENDAR_IMPORT = {
  id: 'content-calendar-import',
  name: 'Content Calendar Import',

  initialState: {
    mode: 'empty',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Content calendar detected',
    description: [
      'I found a publishing plan with <strong>20 posts</strong> scheduled across Instagram, Facebook, LinkedIn, and X.',
      'The file includes post copy, publish times, platform tags, and links to creative assets. I can set everything up in Publisher for you:',
      '<em>Works with Excel files and Google Sheets — you can also paste a Google Sheet link directly into the chat.</em>'
    ],
    completedDescription: [
      'Successfully processed your content calendar. 20 post drafts are ready in Publisher, assets are uploaded to a new collection.'
    ],
    footer: 'This action supports your goal: Publish consistently across all channels and increase content output by 40% in Q2',

    checkboxItems: [
      { action: 'create-drafts',    label: 'Create 20 post drafts in Publisher calendar' },
      { action: 'create-collection', label: 'Create Content Hub collection "Q2 Campaign Assets"' },
      { action: 'upload-assets',    label: 'Fetch and upload assets from links in the file' },
      { action: 'link-assets',      label: 'Link collection assets to matching post drafts' }
    ],

    moreIdeasPool: [
      { action: 'optimize-times',  label: 'Reschedule posts to AI-recommended optimal times' },
      { action: 'hashtag-suggest', label: 'Add trending hashtag recommendations to each draft' },
      { action: 'approval-flow',   label: 'Set up approval flow for all 20 drafts' },
      { action: 'listening-query', label: 'Create listening query to track campaign performance' },
      { action: 'campaign-wrap',   label: 'Create a Publisher campaign to group all posts' },
      { action: 'analytics-board', label: 'Create analytics board to monitor post performance' }
    ]
  },

  decisionItems: [
    { key: 'calendar',    label: 'Publisher Calendar — 20 drafts ready (filtered)',  href: 'publisher-calendar.html?filter=cortex-import' },
    { key: 'collection',  label: 'Content Hub collection "Q2 Campaign Assets"',       href: 'content-collection.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> linked assets to 20 Publisher drafts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> uploaded 20 assets to collection "Q2 Campaign Assets"', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created Content Hub collection "Q2 Campaign Assets"', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created 20 post drafts in Publisher calendar', time: '2 minutes ago' },
    { text: '<strong>You</strong> uploaded content-calendar-q2.xlsx', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected publishing plan with 20 posts across 4 platforms', time: '3 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Content calendar imported</strong> — 20 drafts created, assets linked.', time: '1 min ago', unread: true },
    { icon: 'ai', text: '<strong>20 assets uploaded</strong> to collection "Q2 Campaign Assets".', time: '2 min ago', unread: true },
    { icon: 'activity', text: '5 posts scheduled for next Monday — approval pending.', time: '4 min ago', unread: false },
    { icon: 'activity', text: 'Publisher campaign <strong>"Q2 Campaign"</strong> is ready for review.', time: '8 min ago', unread: false }
  ],

  playbackSteps: [
    // 1. Cursor appears, moves into Cortex panel chatbox area
    { type: 'action', action: 'positionCursorAtStart', delay: 600 },
    // 2. Click + (attachment) button → dropdown opens
    { type: 'action', action: 'clickAttachmentBtn', delay: 1200 },
    // 3. Click "Upload file" → Finder modal opens
    { type: 'action', action: 'clickUploadFile', delay: 1000 },
    // 4. Select content-calendar-q2.xlsx in Finder
    { type: 'action', action: 'selectFinderFile', fileName: 'content-calendar-q2.xlsx', fileSize: 94000, delay: 1500 },
    // 5. Click send → user bubble with green XLS chip + "schedule these posts"
    { type: 'action', action: 'submitChat', text: 'schedule these posts', delay: 1200 },
    // 6. Thinking animation
    { type: 'action', action: 'showThinking', delay: 2500 },
    // 7. Intelligence box with 4 checkboxes — thinking disappears
    { type: 'action', action: 'showIntelligenceBox', delay: 0 },
    // 8. Cursor selects all 4 checkboxes one by one
    { type: 'action', action: 'selectCheckboxes', items: ['create-drafts', 'create-collection', 'upload-assets', 'link-assets'], delay: 1800 },
    // 9. Cursor clicks Execute selected → completed state with 2 decision items
    { type: 'action', action: 'executeSelected', delay: 1500 },
    // 10. Cursor clicks Publisher Calendar decision item → navigates to publisher-calendar.html
    { type: 'action', action: 'clickDecisionItem', item: 'calendar', cursorTarget: '.decision-item[data-decision-key="calendar"] .decision-label', cursorOffset: 'start', delay: 3000 }
  ]
};
