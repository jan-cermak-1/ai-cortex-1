/* ============================================================
   FLOW: Voice Bot TTS Setup

   Demo scenario: Configure Text-to-Speech for voice bot channel
   Persona: Bot Manager
   ============================================================ */

const FLOW_VOICE_BOT_TTS_SETUP = {
  id: 'voice-bot-tts-setup',
  name: 'Voice Bot TTS Setup',

  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Configure Voice Bot TTS',
    description: [
      '<strong>Voice Bot TTS Setup:</strong> Configure Text-to-Speech for the voice bot channel.',
      'Test 3 voice profiles, select the most natural-sounding one, and deploy to phone support.',
      'Recommended actions:'
    ],
    completedDescription: [
      'Voice Bot TTS configured. Natural voice profile deployed to phone support.'
    ],
    footer: 'This supports your goal: Professional phone support experience',

    checkboxItems: [
      { action: 'test-voices', label: 'Test 3 voice profiles (Emma, James, Sophia)' },
      { action: 'select-voice', label: 'Select most natural-sounding profile' },
      { action: 'deploy-phone', label: 'Deploy to phone support channel' },
      { action: 'configure-speed', label: 'Configure speech rate and pitch' }
    ],

    moreIdeasPool: [
      { action: 'language-variants', label: 'Set up language-specific voice variants' },
      { action: 'fallback-voice', label: 'Configure fallback voice for edge cases' }
    ]
  },

  decisionItems: [
    { key: 'voice-selected', label: 'Voice profile selected and deployed', href: 'care-inbox.html' },
    { key: 'phone-configured', label: 'Phone support channel configured', href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> deployed Sophia voice to phone support', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> tested 3 voice profiles (Emma, James, Sophia)', time: '2 minutes ago' },
    { text: '<strong>You</strong> selected Sophia as most natural-sounding', time: '3 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Voice Bot TTS:</strong> 3 voice profiles ready for testing.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Sophia voice deployed to phone support channel.', time: '1 min ago', unread: true }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '<strong>Voice Bot TTS Setup:</strong> I can configure Text-to-Speech for your voice bot channel.', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Three voice profiles available: Emma (warm), James (professional), Sophia (natural). Test each and select the best fit for your brand. Deploy to phone support when ready.', delay: 2800 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['test-voices', 'select-voice', 'deploy-phone', 'configure-speed'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Voice Bot TTS is live. Sophia voice deployed to phone support. Callers will hear natural-sounding AI responses.', delay: 2500 }
  ]
};
