/* ============================================================
   FLOW: Care Team Onboarding
   
   Demo scenario: Care Supervisor onboards new team with CSV import
   Persona: Care Supervisor
   ============================================================ */

const FLOW_CARE_ONBOARDING = {
  id: 'care-onboarding',
  name: 'Care Team Onboarding',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'New Care agents ready for setup',
    description: [
      'I processed your agent roster file. <strong>8 new Care agents</strong> are ready for onboarding.',
      'Based on their assigned channels and skills, I recommend:'
    ],
    completedDescription: [
      'Care team onboarding complete. 8 agents configured and ready.'
    ],
    footer: 'This supports your goal: Reduce new agent ramp-up time from 2 weeks to 3 days',
    
    checkboxItems: [
      { action: 'create-agents',    label: 'Create agent accounts with channel assignments' },
      { action: 'assign-queues',    label: 'Assign agents to appropriate case queues' },
      { action: 'setup-schedule',   label: 'Configure shift schedules based on roster' },
      { action: 'enable-macros',    label: 'Enable starter macro library for new agents' }
    ],
    
    moreIdeasPool: [
      { action: 'skill-training',   label: 'Assign skill-specific training modules' },
      { action: 'buddy-system',     label: 'Pair new agents with experienced mentors' },
      { action: 'sla-alerts',       label: 'Set up SLA warning alerts for supervisors' },
      { action: 'perf-dashboard',   label: 'Create performance tracking board in Analytics' },
      { action: 'escalation-rules', label: 'Configure escalation rules for new agents' },
      { action: 'qa-sampling',      label: 'Set up QA sampling for first 100 interactions' }
    ]
  },

  decisionItems: [
    { key: 'agents',   label: '8 agent accounts created',             href: 'settings-users.html' },
    { key: 'queues',   label: 'Queue assignments configured',         href: 'care-inbox.html' },
    { key: 'schedule', label: 'Shift schedules published',            href: 'care-inbox.html' },
    { key: 'macros',   label: 'Macro library enabled for team',       href: 'care-inbox.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created 8 new Care agent accounts', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> assigned agents to 4 case queues', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> configured shift schedules for the team', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> enabled macro library (42 macros) for new agents', time: '3 minutes ago' },
    { text: '<strong>You</strong> uploaded care-team-roster.csv', time: '4 minutes ago' },
    { text: '<strong>Cortex AI</strong> validated roster data and skill mappings', time: '4 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>8 new agents</strong> ready for onboarding from uploaded roster.', time: '4 min ago', unread: true },
    { icon: 'ai', text: 'Team onboarding complete. All agents have inbox access.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'New agent <strong>Sarah M.</strong> logged in for first time.', time: '10 min ago', unread: false },
    { icon: 'activity', text: 'Care team capacity increased by 40% with new hires.', time: '15 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I processed your agent roster file: <strong>care-team-roster.csv</strong>.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Found <strong>8 new Care agents</strong> ready for onboarding with channel and skill assignments.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I can create accounts, assign queues, configure schedules, and enable the macro library for faster onboarding.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-agents', 'assign-queues', 'setup-schedule', 'enable-macros'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Onboarding complete! 8 agent accounts created, queues assigned, schedules configured, 42 macros enabled.', delay: 2500 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Here are the newly created agent accounts with their assigned roles.', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Agents now have inbox access and are ready to handle cases. Team capacity increased by 40%! Demo complete.', delay: 2000 }
  ]
};
