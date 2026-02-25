const FLOW_CORTEX_SKILL_BUILDER = {
  id: 'cortex-skill-builder',
  name: 'Cortex Skill Builder',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Custom brand intelligence model from playbook + 500 posts',
    description: [
      'Train a custom Cortex skill: upload your brand playbook, competitor analysis, and 500 best-performing posts. Cortex creates a proprietary brand intelligence model that powers all future AI suggestions.',
      'Model training: 2.4 hours. Validation accuracy: 91%. Ready to deploy across Publisher, Care, and Content Hub.'
    ],
    completedDescription: ['Custom Cortex skill trained — brand playbook, competitor analysis, 500 posts. 91% validation accuracy.'],
    footer: 'This supports your goal: Make Cortex speak your brand, not generic AI',
    checkboxItems: [
      { action: 'upload-playbook', label: 'Upload brand playbook and competitor analysis' },
      { action: 'train-model', label: 'Train model on 500 best-performing posts' },
      { action: 'deploy-skill', label: 'Deploy skill to Publisher, Care, Content Hub' }
    ],
    moreIdeasPool: [
      { action: 'refresh-training', label: 'Schedule quarterly model refresh' }
    ]
  },
  decisionItems: [
    { key: 'model', label: 'Brand model trained', href: 'settings-users.html' },
    { key: 'deploy', label: 'Skill deployed', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> trained brand intelligence model', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> achieved 91% validation accuracy', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Custom skill ready:</strong> Playbook + 500 posts. 91% accuracy. Deploy to Publisher, Care, Content Hub.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I trained a custom Cortex skill from your brand playbook, competitor analysis, and 500 best-performing posts. Training took 2.4 hours. Validation accuracy: 91%. The proprietary brand intelligence model is ready to power all future AI suggestions across Publisher, Care, and Content Hub.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['upload-playbook', 'train-model', 'deploy-skill'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 }
  ]
};
