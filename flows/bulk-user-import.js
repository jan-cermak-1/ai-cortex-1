/* ============================================================
   FLOW: Bulk User Import
   
   Demo scenario: Admin bulk imports users from Excel file
   Persona: Team Admin
   ============================================================ */

const FLOW_BULK_USER_IMPORT = {
  id: 'bulk-user-import',
  name: 'Bulk User Import',
  
  initialState: {
    mode: 'empty',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Bulk user import ready',
    description: [
      'I detected an Excel file with user data. I found <strong>47 valid user records</strong> ready for import.',
      'Based on the file structure, I can:'
    ],
    completedDescription: [
      'Successfully processed your user import file with 47 records.'
    ],
    footer: 'This action supports your goal: Streamline user onboarding and reduce manual admin work by 50%',
    
    checkboxItems: [
      { action: 'import-users',   label: 'Import all 47 users with default permissions' },
      { action: 'create-teams',   label: 'Auto-create teams based on "Department" column' },
      { action: 'send-invites',   label: 'Send invitation emails to all new users' },
      { action: 'assign-roles',   label: 'Assign roles based on "Role" column mapping' }
    ],
    
    moreIdeasPool: [
      { action: 'validate-emails', label: 'Validate all email addresses before import' },
      { action: 'dedup-check',     label: 'Check for duplicate users in existing database' },
      { action: 'preview-import',  label: 'Generate preview report before final import' },
      { action: 'sso-setup',       label: 'Configure SSO settings for imported users' },
      { action: 'notify-managers', label: 'Notify team managers about new team members' },
      { action: 'training-assign', label: 'Auto-assign onboarding training to new users' }
    ]
  },

  decisionItems: [
    { key: 'users',     label: '47 users imported successfully',      href: 'settings-users.html' },
    { key: 'teams',     label: '6 teams created from departments',    href: 'settings-users.html' },
    { key: 'invites',   label: 'Email invitations queued (47)',       href: 'settings-users.html' },
    { key: 'roles',     label: 'Role assignments applied',            href: 'settings-users.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> completed bulk user import (47 users)', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created 6 new teams from departments', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> queued 47 invitation emails', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> applied role assignments to 47 users', time: '2 minutes ago' },
    { text: '<strong>You</strong> uploaded users-import-2026.xlsx', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> validated import file structure', time: '3 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Bulk import complete</strong> — 47 users added, 6 teams created.', time: '1 min ago', unread: true },
    { icon: 'ai', text: '<strong>3 potential duplicates</strong> found during import. Review recommended.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Invitation emails being sent. 12 of 47 delivered.', time: '5 min ago', unread: false },
    { icon: 'activity', text: 'Team <strong>"Marketing"</strong> now has 12 members.', time: '10 min ago', unread: false }
  ],

  playbackSteps: [
    // 1. Cursor appears, moves into Cortex panel chatbox area
    { type: 'action', action: 'positionCursorAtStart', delay: 600 },
    // 2. Click + (attachment) button → dropdown opens
    { type: 'action', action: 'clickAttachmentBtn', delay: 1200 },
    // 3. Click "Upload file" → Finder modal opens
    { type: 'action', action: 'clickUploadFile', delay: 1000 },
    // 4. Select users-import.xlsx in Finder
    { type: 'action', action: 'selectFinderFile', fileName: 'users-import.xlsx', fileSize: 128000, delay: 1500 },
    // 5. Click send → user bubble appears with green XLS chip + "add these users"
    { type: 'action', action: 'submitChat', text: 'add these users', delay: 1200 },
    // 6. Thinking animation
    { type: 'action', action: 'showThinking', delay: 2200 },
    // 7. Intelligence box (grey) with 4 checkboxes — thinking disappears
    { type: 'action', action: 'showIntelligenceBox', delay: 0 },
    // 8. Cursor selects all 4 checkboxes one by one
    { type: 'action', action: 'selectCheckboxes', items: ['import-users', 'create-teams', 'send-invites', 'assign-roles'], delay: 1800 },
    // 9. Cursor clicks Execute selected → completed state
    { type: 'action', action: 'executeSelected', delay: 1500 },
    // 10. After completed box appears, cursor clicks first decision item → Settings/Users
    { type: 'action', action: 'clickDecisionItem', item: 'users', cursorTarget: '.decision-item[data-decision-key="users"]', delay: 3000 }
  ]
};
