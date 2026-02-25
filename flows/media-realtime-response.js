const FLOW_MEDIA_REALTIME_RESPONSE = {
  id: 'media-realtime-response',
  name: 'Media Real-Time Response',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Breaking news story: brand mentioned in Reuters report',
    description: [
      'A Reuters article about regulatory developments in your industry just published — <strong>your brand is mentioned twice</strong> in a context that requires a measured response.',
      'Social mentions of your brand in relation to the article are growing rapidly. A coordinated response across social and Care is needed within the next 30 minutes.'
    ],
    completedDescription: ['Media response coordinated — social response published, Care team briefed, and press monitoring active.'],
    footer: 'This supports your goal: Respond to brand mentions in major media coverage within 30 minutes',
    checkboxItems: [
      { action: 'monitor-coverage', label: 'Activate press and social monitoring for the Reuters story' },
      { action: 'draft-response', label: 'Draft factual social media clarification for PR team review' },
      { action: 'brief-care', label: 'Brief Care team with Q&A for expected customer inquiries' },
      { action: 'alert-leadership', label: 'Alert Communications Director and CEO comms advisor immediately' }
    ],
    moreIdeasPool: [
      { action: 'media-statement', label: 'Prepare full media statement for press inquiries' },
      { action: 'monitor-journalists', label: 'Set up monitoring for key journalists covering this story' },
      { action: 'dark-site', label: 'Activate crisis dark site with holding statement if story escalates' }
    ]
  },
  decisionItems: [
    { key: 'monitoring', label: 'Press and social monitoring active for story', href: 'unified-analytics.html' },
    { key: 'response', label: 'Social clarification drafted — awaiting PR approval', href: 'publisher-calendar.html' },
    { key: 'care', label: 'Care team briefed with media inquiry Q&A', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> activated press monitoring for Reuters regulatory story', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> drafted factual social clarification for PR review', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> briefed Care team with expected media inquiry Q&A', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected Reuters article with 2 brand mentions — social mentions growing', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>MEDIA ALERT:</strong> Reuters regulatory story with brand mention. Response in 30min window.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'Social mentions growing at 47/hour. Response draft ready for PR review.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Breaking: Reuters published a regulatory story that mentions your brand twice. Social mentions are growing at 47 per hour. You have a 30-minute window for a coordinated response across social, Care, and leadership. Here\'s the plan.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['monitor-coverage', 'draft-response', 'brief-care', 'alert-leadership'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
