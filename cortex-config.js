/* ============================================================
   CORTEX UI CONFIG - Editable UI configuration
   
   Edit this file to change icons, labels, and UI elements.
   Changes apply to all flows automatically.
   ============================================================ */

const CORTEX_UI_CONFIG = {
  header: {
    icon: 'assets/cortex/ai-sparkle-filled.svg',
    title: 'Cortex',
    actions: [
      { id: 'history', icon: 'assets/cortex/33d5f0820a9fe6b4c62e05a1ab23de7241725a64.svg', title: 'History' },
      { id: 'new-chat', icon: 'assets/cortex/aa41e39cb4b9c529bd2b2713c491db00d8b5fd74.svg', title: 'New chat', onClick: 'startNewChat' }
    ]
  },

  rightBar: {
    toggleIcons: {
      collapse: 'assets/cortex/toggle-collapse.svg',
      expand: 'assets/cortex/toggle-expand.svg'
    },
    tabs: [
      { id: 'notifications', icon: 'assets/cortex/bell.svg', label: 'Notifications', badge: '33' },
      { id: 'activity', icon: 'assets/cortex/activity.svg', label: 'Activity' }
    ],
    aiButton: {
      id: 'ai-chat',
      icon: 'assets/cortex/ai-sparkle.svg',
      label: 'Cortex AI'
    }
  },

  input: {
    placeholder: 'Write message or type / for more',
    contextLabel: 'Context',
    poweredByText: 'Get instant answers powered by Emplifi AI',
    attachmentMenu: [
      { id: 'upload', icon: 'assets/icons/upload.svg', label: 'Upload file' },
      { id: 'link', icon: 'assets/icons/link.svg', label: 'Add a link' },
      { id: 'mention', icon: 'assets/icons/user.svg', label: 'Mention someone' }
    ],
    attachmentIcon: 'assets/icons/plus.svg',
    sendIcon: 'assets/cortex/send-arrow.svg'
  },

  chat: {
    aiAvatar: 'assets/cortex/ai-sparkle-filled.svg'
  },

  viewTitles: {
    'ai-chat': 'Cortex',
    'activity': 'Activity Log',
    'notifications': 'Notifications'
  },

  pageTitles: {
    'command-center.html': 'Command center',
    'unified-analytics.html': 'Unified analytics',
    'publisher-campaign.html': 'Publisher campaign',
    'content-collection.html': 'Content collection',
    'settings-listening.html': 'Settings / Listening'
  }
};
