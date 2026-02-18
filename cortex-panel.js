/* ============================================================
   CORTEX AI PANEL - Persistent stateful side panel
   
   Rendered once into the SPA shell (#cortex-panel-root).
   State persists across page navigations.
   Includes: AI Chat, Activity Log, Notifications views.
   Right bar acts as tab switcher.
   ============================================================ */

// --- Persistent state (survives across route changes) ---
const cortexState = {
  messages: [],
  currentPage: null,
  activeView: 'ai-chat',
  isCollapsed: false,
  mode: 'completed',
  pageSpecificTabs: [],
  scrollPositions: {},
  visitedDecisions: {},
};

// --- Decision items config ---
const DECISION_ITEMS = [
  { key: 'collection', label: 'Collection "Labubu"',          href: 'content-collection.html' },
  { key: 'campaign',   label: 'Publisher campaign "Labubu"',   href: 'publisher-campaign.html' },
  { key: 'listening',  label: 'Listening query "Labubu"',      href: 'settings-listening.html' },
  { key: 'analytics',  label: 'Analytics custom board "Labubu"', href: 'unified-analytics.html' },
];

// --- Checkbox items for Command Center initial state ---
const CHECKBOX_ITEMS = [
  { action: 'campaign',  label: 'Create campaign + collection with content ideas' },
  { action: 'listening', label: 'Create listening query on this trend' },
  { action: 'analytics', label: 'Create custom board in Unified analytics on this trend with data from listening query' },
  { action: 'ugc',       label: 'Check UGC content' },
];

const MORE_IDEAS_POOL = [
  { action: 'benchmark',   label: 'Run competitor benchmark analysis on this trend' },
  { action: 'influencer',  label: 'Find top influencers posting about Labubu' },
  { action: 'sentiment',   label: 'Analyze audience sentiment around this trend' },
  { action: 'schedule',    label: 'Schedule optimal posting times based on trend peaks' },
  { action: 'hashtags',    label: 'Generate trending hashtag recommendations' },
  { action: 'report',      label: 'Create weekly trend performance report' },
];

// --- Global tab definitions ---
const PANEL_VIEWS = {
  'ai-chat':       { icon: 'ai-sparkle.svg',  label: 'Cortex AI',     global: true, position: 'bottom' },
  'notifications': { icon: 'bell.svg',         label: 'Notifications', global: true, badge: '33' },
  'activity':      { icon: 'activity.svg',     label: 'Activity',      global: true },
};

// ============================================================
//  RENDER FUNCTIONS
// ============================================================

function renderCortexPanelFull() {
  return `
    <div class="cortex-panel-wrapper${cortexState.isCollapsed ? ' panel-collapsed' : ''}">
      <div class="cortex-panel" id="cortex-panel">
        ${renderCortexHeader()}
        <div class="cortex-views-container">
          ${renderAIChatView()}
          ${renderActivityView()}
          ${renderNotificationsView()}
        </div>
        ${renderCortexInput()}
      </div>
      ${renderCortexRightBar()}
    </div>`;
}

function renderCortexHeader() {
  return `
        <div class="cortex-header">
          <div class="cortex-title">
            <img class="ai-icon" src="assets/cortex/ai-sparkle-filled.svg" alt="" width="18" height="18">
            <span class="cortex-title-text" id="cortex-header-title">Cortex</span>
          </div>
          <div class="header-btn" title="New chat" role="button" tabindex="0" onclick="startNewChat()">
            <img class="header-btn-icon" src="assets/cortex/chat-history.svg" alt="New chat">
          </div>
        </div>`;
}

function renderAIChatView() {
  const isActive = cortexState.activeView === 'ai-chat';
  return `
          <div class="cortex-view${isActive ? ' active' : ''}" id="cortex-view-ai-chat">
            <div class="cortex-messages" id="cortex-messages">
              <div class="cortex-intelligence-area" id="cortex-intelligence-area"></div>
              <div class="cortex-chat-messages" id="cortex-chat-messages"></div>
            </div>
          </div>`;
}

function renderActivityView() {
  const isActive = cortexState.activeView === 'activity';
  return `
          <div class="cortex-view${isActive ? ' active' : ''}" id="cortex-view-activity">
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text"><strong>Cortex AI</strong> created Collection "Labubu"</div>
                  <div class="activity-time">2 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text"><strong>Cortex AI</strong> created Publisher campaign "Labubu"</div>
                  <div class="activity-time">2 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text"><strong>Cortex AI</strong> created Listening query "Labubu"</div>
                  <div class="activity-time">3 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text"><strong>Cortex AI</strong> created Analytics board "Labubu"</div>
                  <div class="activity-time">3 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text"><strong>You</strong> approved trend "Labubu" actions</div>
                  <div class="activity-time">5 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text"><strong>Cortex AI</strong> detected trending topic "Labubu"</div>
                  <div class="activity-time">10 minutes ago</div>
                </div>
              </div>
            </div>
          </div>`;
}

function renderNotificationsView() {
  const isActive = cortexState.activeView === 'notifications';
  return `
          <div class="cortex-view${isActive ? ' active' : ''}" id="cortex-view-notifications">
            <div class="notification-list">
              <div class="notification-item unread">
                <div class="notification-icon">
                  <img src="assets/cortex/ai-sparkle-filled.svg" alt="" width="16" height="16">
                </div>
                <div class="notification-content">
                  <div class="notification-text"><strong>Labubu trend</strong> is gaining momentum in Germany. Your competitors published 12 new posts.</div>
                  <div class="notification-time">5 min ago</div>
                </div>
              </div>
              <div class="notification-item unread">
                <div class="notification-icon">
                  <img src="assets/cortex/ai-sparkle-filled.svg" alt="" width="16" height="16">
                </div>
                <div class="notification-content">
                  <div class="notification-text">Campaign <strong>"Labubu"</strong> content ideas are ready for review.</div>
                  <div class="notification-time">12 min ago</div>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon">
                  <img src="assets/cortex/activity.svg" alt="" width="16" height="16">
                </div>
                <div class="notification-content">
                  <div class="notification-text">Your listening query <strong>"Labubu"</strong> collected 687 new mentions today.</div>
                  <div class="notification-time">1 hour ago</div>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon">
                  <img src="assets/cortex/activity.svg" alt="" width="16" height="16">
                </div>
                <div class="notification-content">
                  <div class="notification-text">Analytics board <strong>"Labubu"</strong> has new data available.</div>
                  <div class="notification-time">2 hours ago</div>
                </div>
              </div>
            </div>
          </div>`;
}

function renderCortexInput() {
  const pageTitles = {
    'command-center.html': 'Command center',
    'unified-analytics.html': 'Unified analytics',
    'publisher-campaign.html': 'Publisher campaign',
    'content-collection.html': 'Content collection',
    'settings-listening.html': 'Settings / Listening',
  };
  const contextLabel = pageTitles[cortexState.currentPage] || 'Command center';

  return `
        <div class="cortex-input-area" id="cortex-input-area">
          <div class="cortex-input-box">
            <div class="cortex-input-context" id="cortex-input-context">
              <div class="context-label">Context</div>
              <div class="context-value">
                <span class="context-page-name" id="cortex-context-page">${contextLabel}</span>
                <div class="context-close" onclick="removeInputContext()">
                  <svg viewBox="0 0 36 36" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 10.2929L18 18L10.2929 25.7071L11.7071 27.1213L19.4142 19.4142L27.1213 27.1213L28.5355 25.7071L20.8284 18L28.5355 10.2929L27.1213 8.87868L19.4142 16.5858L11.7071 8.87868L10.2929 10.2929Z"/></svg>
                </div>
              </div>
            </div>
            <textarea class="cortex-input-field" id="cortex-input-field" placeholder="Write message or type / for more" rows="1"></textarea>
            <div class="cortex-input-footer">
              <div class="attachment-btn" onclick="toggleAttachmentMenu(this, event)">
                <img src="assets/cortex/attachment.svg" alt="Attach">
                <div class="attachment-dropdown">
                  <div class="attachment-dropdown-item"><svg viewBox="0 0 36 36" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 4.23858 8.23858 2 11 2H25C27.7614 2 30 4.23858 30 7V10H28V7C28 5.34315 26.6569 4 25 4H11C9.34315 4 8 5.34315 8 7V10H6V7ZM18 8.58581L28.7071 19.2929L27.2929 20.7071L19 12.4142V34H17V12.4142L8.70711 20.7071L7.29289 19.2929L18 8.58581Z"/></svg>Upload file</div>
                  <div class="attachment-dropdown-item"><svg viewBox="0 0 36 36" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2426 7.75736C25.8994 5.41421 22.1004 5.41421 19.7573 7.75736L19.7484 7.76624L15.6982 11.7159L14.3018 10.284L18.3477 6.33857C21.4722 3.21895 26.5341 3.22048 29.6568 6.34315C32.7795 9.46582 32.781 14.5277 29.6613 17.6523L25.7159 21.6981L24.2841 20.3018L28.2425 16.2426C30.5857 13.8994 30.5857 10.1005 28.2426 7.75736ZM12.2928 22.2929L22.2928 12.2929L23.707 13.7071L13.707 23.7071L12.2928 22.2929ZM11.7159 15.6982L7.75742 19.7574C5.41427 22.1006 5.41421 25.8995 7.75736 28.2426C10.1005 30.5858 13.8995 30.5858 16.2426 28.2426L16.2515 28.2338L20.3017 24.2841L21.6981 25.7159L17.6523 29.6614C14.5277 32.781 9.46581 32.7795 6.34315 29.6569C3.22049 26.5342 3.21895 21.4723 6.33854 18.3478L10.284 14.3018L11.7159 15.6982Z"/></svg>Add a link</div>
                  <div class="attachment-dropdown-item"><svg viewBox="0 0 36 36" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C12 6.68629 14.6863 4 18 4C21.3137 4 24 6.68629 24 10C24 13.3137 21.3137 16 18 16C14.6863 16 12 13.3137 12 10ZM18 2C13.5817 2 10 5.58172 10 10C10 14.4183 13.5817 18 18 18C22.4183 18 26 14.4183 26 10C26 5.58172 22.4183 2 18 2ZM17 20C10.9249 20 6 24.9249 6 31V34H8V31C8 26.0294 12.0294 22 17 22H19C20.41 22 21.7416 22.3235 22.9272 22.8995L23.8011 21.1005C22.3491 20.3952 20.7193 20 19 20H17ZM28 24V28H24V30H28V34H30V30H34V28H30V24H28Z"/></svg>Mention someone</div>
                </div>
              </div>
              <div class="send-btn" id="cortex-send-btn"><img src="assets/cortex/send-arrow.svg" alt="Send"></div>
            </div>
          </div>
          <div class="cortex-input-meta">
            <span class="cortex-input-powered">Get instant answers powered by Emplifi AI</span>
          </div>
        </div>`;
}

function renderCortexRightBar() {
  const activeView = cortexState.activeView;
  return `
      <div class="cortex-right-bar">
        <div class="cortex-right-bar-header">
          <div class="toggle-btn" id="cortex-toggle-btn" title="Toggle Cortex panel">
            <img class="toggle-icon" src="assets/cortex/${cortexState.isCollapsed ? 'toggle-expand' : 'toggle-collapse'}.svg" alt="Toggle">
          </div>
          <div class="bar-divider"></div>
        </div>
        <div class="cortex-right-bar-nav">
          <div class="bar-btn${activeView === 'notifications' ? ' active' : ''}" data-view="notifications" title="Notifications">
            <span class="badge">33</span>
            <img src="assets/cortex/bell.svg" alt="Notifications">
          </div>
          <div class="bar-btn${activeView === 'activity' ? ' active' : ''}" data-view="activity" title="Activity">
            <img src="assets/cortex/activity.svg" alt="Activity">
          </div>
        </div>
        <div class="cortex-right-bar-bottom">
          <div class="ai-btn${activeView === 'ai-chat' ? ' active' : ''}" data-view="ai-chat" title="Cortex AI">
            <img src="assets/cortex/ai-sparkle.svg" alt="Cortex AI">
          </div>
        </div>
      </div>`;
}

// ============================================================
//  INTELLIGENCE BOX (page-context content inside AI Chat view)
// ============================================================

function renderIntelligenceInitial() {
  const checkboxes = CHECKBOX_ITEMS.map(item => `
              <div class="checkbox" data-action="${item.action}" role="checkbox" tabindex="0" aria-checked="false" aria-label="${item.label}" onclick="toggleCheckbox(this)">
                <div class="checkbox-box">
                  <img src="assets/cortex/checkbox-checked.svg" alt="">
                </div>
                <span class="checkbox-label">${item.label}</span>
              </div>`).join('');

  return `
          <div class="intelligence-box" id="intelligence-box-initial">
            <div class="intelligence-box-header">
              <span class="intelligence-box-title">Labubu trend in your country</span>
              <div class="intelligence-box-close" role="button" tabindex="0" aria-label="Close intelligence box" onclick="closeIntelligenceBox(this)">
                <img src="assets/cortex/close-x.svg" alt="">
              </div>
            </div>
            <div class="intelligence-box-description">
              <p>Labubu is trending in your country &mdash; your competitors are publishing content related to this trend.</p>
              <p>Do you want to:</p>
            </div>
            <div class="intelligence-box-actions">${checkboxes}
            </div>
            <div class="intelligence-box-buttons">
              <button class="btn btn-s btn-ghost disabled" id="execute-btn" onclick="executeSelected()">Execute selected</button>
              <span class="or-text">or</span>
              <button class="btn btn-s btn-ghost" onclick="generateMoreIdeas(this)">More ideas</button>
            </div>
            <div class="intelligence-box-footer">
              This actions helping reach goal of your team objective: Increase social engagement with trending content by 30% in Q2
            </div>
          </div>`;
}

function renderIntelligenceCompleted(highlight) {
  var visited = cortexState.visitedDecisions || {};
  var decisionItems = DECISION_ITEMS.map(function(item) {
    var isCurrent = item.key === highlight;
    var isVisited = visited[item.key];
    var cls = 'decision-item' + (isVisited ? ' visited' : '');
    var icon = isVisited ? 'assets/cortex/decision-done.svg' : 'assets/cortex/decision-pending.svg';
    var onclick = isCurrent ? '' : ' onclick="visitDecisionItem(this, \'' + item.key + '\', \'' + item.href + '\')"';
    return '<div class="' + cls + '" role="link" tabindex="0" aria-label="' + item.label + '"' + onclick + '>' +
      '<div class="check-icon"><img src="' + icon + '" alt=""></div>' +
      '<span class="decision-label">' + item.label + '</span>' +
    '</div>';
  }).join('\n              ');

  return '\
          <div class="intelligence-box no-bg" id="intelligence-box-completed">\
            <div class="intelligence-box-header">\
              <span class="intelligence-box-title">Labubu trend in your country</span>\
              <div class="intelligence-box-close" role="button" tabindex="0" aria-label="Close intelligence box" onclick="closeIntelligenceBox(this)">\
                <img src="assets/cortex/close-x.svg" alt="">\
              </div>\
            </div>\
            <div class="intelligence-box-description">\
              <p>Labubu is trending in your country &mdash; your competitors are publishing content related to this trend.</p>\
            </div>\
            <div class="decision-completed">\
              <div class="decision-header">Based on your decision I created:</div>\
              ' + decisionItems + '\
            </div>\
          </div>';
}

// ============================================================
//  CHAT MESSAGE SYSTEM
// ============================================================

function addChatMessage(type, content, options = {}) {
  const msg = {
    id: Date.now() + Math.random(),
    type,
    content,
    timestamp: new Date(),
    ...options,
  };
  cortexState.messages.push(msg);
  renderChatMessage(msg);
  scrollChatToBottom();
  return msg;
}

function renderChatMessage(msg) {
  const container = document.getElementById('cortex-chat-messages');
  if (!container) return;

  const el = document.createElement('div');
  el.className = `chat-message chat-message--${msg.type}`;
  el.dataset.msgId = msg.id;

  if (msg.type === 'ai') {
    el.innerHTML = `
      <div class="chat-message-avatar">
        <img src="assets/cortex/ai-sparkle-filled.svg" alt="AI" width="16" height="16">
      </div>
      <div class="chat-message-bubble">${msg.content}</div>`;
  } else if (msg.type === 'user') {
    el.innerHTML = `
      <div class="chat-message-bubble">${msg.content}</div>`;
  } else if (msg.type === 'system') {
    el.innerHTML = `
      <div class="chat-message-system">${msg.content}</div>`;
  }

  container.appendChild(el);
}

function scrollChatToBottom() {
  const messages = document.getElementById('cortex-messages');
  if (messages) {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }
}

function renderAllChatMessages() {
  const container = document.getElementById('cortex-chat-messages');
  if (!container) return;
  container.innerHTML = '';
  cortexState.messages.forEach(msg => renderChatMessage(msg));
  scrollChatToBottom();
}

function simulateAIResponse(userMessage) {
  const responses = [
    "I'll look into that for you. Based on the current data, here's what I found...",
    "Great question! Let me analyze the trends and get back to you with insights.",
    "I've processed your request. Here are the key findings from your data sources.",
    "Based on your listening queries and analytics, here's a summary of the relevant data.",
    "I can help with that. Let me pull up the relevant information from your connected profiles.",
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(() => {
    addChatMessage('ai', response);
  }, 800 + Math.random() * 1200);
}

// ============================================================
//  VIEW SWITCHING (Right Bar Tab System)
// ============================================================

function switchPanelView(viewId) {
  // Save current scroll position
  const currentView = document.getElementById('cortex-view-' + cortexState.activeView);
  if (currentView) {
    cortexState.scrollPositions[cortexState.activeView] = currentView.scrollTop;
  }

  // Hide all views, show the target one
  document.querySelectorAll('.cortex-view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('cortex-view-' + viewId);
  if (target) {
    target.classList.add('active');
    const savedScroll = cortexState.scrollPositions[viewId];
    if (savedScroll) target.scrollTop = savedScroll;
  }

  // Update right bar active state
  document.querySelectorAll('.bar-btn, .ai-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-view="${viewId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // Show/hide input area (only for AI chat)
  const inputArea = document.getElementById('cortex-input-area');
  if (inputArea) {
    inputArea.style.display = viewId === 'ai-chat' ? '' : 'none';
  }

  // Update header title
  const headerTitle = document.getElementById('cortex-header-title');
  if (headerTitle) {
    const titles = { 'ai-chat': 'Cortex', 'activity': 'Activity Log', 'notifications': 'Notifications' };
    headerTitle.textContent = titles[viewId] || 'Cortex';
  }

  cortexState.activeView = viewId;

  // If switching back to AI chat and panel is collapsed, expand it
  if (viewId === 'ai-chat' && cortexState.isCollapsed) {
    toggleCortexPanel();
  }
}

// ============================================================
//  PANEL TOGGLE
// ============================================================

function toggleCortexPanel() {
  const wrapper = document.querySelector('.cortex-panel-wrapper');
  if (!wrapper) return;

  cortexState.isCollapsed = !cortexState.isCollapsed;
  wrapper.classList.toggle('panel-collapsed', cortexState.isCollapsed);

  const toggleIcon = document.querySelector('#cortex-toggle-btn .toggle-icon');
  if (toggleIcon) {
    toggleIcon.src = cortexState.isCollapsed ? 'assets/cortex/toggle-expand.svg' : 'assets/cortex/toggle-collapse.svg';
  }
}

// ============================================================
//  ROUTE CHANGE HANDLER
// ============================================================

function onRouteChange(page, config) {
  cortexState.currentPage = page;
  updateInputContext(page);

  const area = document.getElementById('cortex-intelligence-area');
  if (!area) return;

  if (config.mode === 'initial') {
    cortexState.mode = 'initial';
    area.innerHTML = renderIntelligenceInitial();
  } else {
    cortexState.mode = 'completed';
    area.innerHTML = renderIntelligenceCompleted(config.highlight);
    initDecisionItemListeners();
  }

  // Add navigation context message (skip first load)
  if (cortexState.messages.length > 0) {
    const pageTitles = {
      'command-center.html': 'Command Center',
      'unified-analytics.html': 'Unified Analytics',
      'publisher-campaign.html': 'Publisher Campaign',
      'content-collection.html': 'Content Collection',
      'settings-listening.html': 'Settings / Listening',
    };
    const title = pageTitles[page] || page;
    addChatMessage('system', `Navigated to ${title}`);
  }
}

// ============================================================
//  INIT & INTERACTION
// ============================================================

function initCortexPanel() {
  const root = document.getElementById('cortex-panel-root');
  if (!root) return;

  root.innerHTML = renderCortexPanelFull();
  initCortexListeners();
  renderAllChatMessages();
}

function initCortexListeners() {
  // Close attachment dropdowns on outside click
  document.addEventListener('click', function(e) {
    document.querySelectorAll('.attachment-dropdown.open').forEach(dropdown => {
      if (!dropdown.parentElement.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  // Toggle panel
  const toggleBtn = document.getElementById('cortex-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleCortexPanel);
  }

  // Right bar view switching
  document.querySelectorAll('.bar-btn[data-view], .ai-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', function() {
      const viewId = this.dataset.view;
      if (viewId === cortexState.activeView && viewId === 'ai-chat') {
        // AI button also toggles panel open
        if (cortexState.isCollapsed) toggleCortexPanel();
      } else {
        switchPanelView(viewId);
        if (cortexState.isCollapsed) toggleCortexPanel();
      }
    });
  });

  // Chat input handling
  const inputField = document.getElementById('cortex-input-field');
  const sendBtn = document.getElementById('cortex-send-btn');

  if (inputField) {
    inputField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey && this.value.trim()) {
        e.preventDefault();
        sendChatMessage(this.value.trim());
        this.value = '';
        autoResizeInput(this);
      }
    });
    inputField.addEventListener('input', function() {
      autoResizeInput(this);
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', function() {
      const field = document.getElementById('cortex-input-field');
      if (field && field.value.trim()) {
        sendChatMessage(field.value.trim());
        field.value = '';
        autoResizeInput(field);
      }
    });
  }

  // Decision item hover effects
  initDecisionItemListeners();

  // Listen for route changes
  window.addEventListener('route:changed', function(e) {
    onRouteChange(e.detail.page, e.detail.config);
  });
}

function visitDecisionItem(el, key, href) {
  cortexState.visitedDecisions[key] = true;
  el.classList.add('visited');
  if (typeof navigateTo === 'function') navigateTo(href);
}

function initDecisionItemListeners() {
  // kept for backwards compatibility; inline onclick handles clicks now
}

function sendChatMessage(text) {
  addChatMessage('user', text);
  simulateAIResponse(text);
}

function generateMoreIdeas(btn) {
  const box = btn.closest('.intelligence-box');
  if (!box) return;
  const actionsContainer = box.querySelector('.intelligence-box-actions');
  if (!actionsContainer) return;

  const existing = Array.from(actionsContainer.querySelectorAll('.checkbox')).map(
    el => el.dataset.action
  );
  const available = MORE_IDEAS_POOL.filter(item => !existing.includes(item.action));

  if (available.length === 0) {
    btn.textContent = 'No more ideas';
    btn.disabled = true;
    btn.classList.add('disabled');
    return;
  }

  btn.disabled = true;
  btn.classList.add('disabled');

  var buttonsArea = box.querySelector('.intelligence-box-buttons');
  if (buttonsArea) buttonsArea.style.display = 'none';

  var skeletonWrap = document.createElement('div');
  skeletonWrap.className = 'intelligence-box-skeleton';
  skeletonWrap.style.cssText = 'display:flex;flex-direction:column;gap:6px;width:100%;padding:6px 0;';
  skeletonWrap.innerHTML = '<div class="skeleton-row"></div><div class="skeleton-row"></div>';
  actionsContainer.after(skeletonWrap);

  var count = Math.min(2, available.length);
  var picked = available.slice(0, count);

  setTimeout(function() {
    skeletonWrap.remove();
    if (buttonsArea) buttonsArea.style.display = '';

    if (!actionsContainer.querySelector('.checkbox-select-all')) {
      var selectAllDiv = document.createElement('div');
      selectAllDiv.className = 'checkbox checkbox-select-all';
      selectAllDiv.setAttribute('role', 'checkbox');
      selectAllDiv.setAttribute('tabindex', '0');
      selectAllDiv.setAttribute('aria-checked', 'false');
      selectAllDiv.setAttribute('aria-label', 'Select all');
      selectAllDiv.setAttribute('onclick', 'toggleSelectAll(this)');
      selectAllDiv.innerHTML =
        '<div class="checkbox-box">' +
          '<img src="assets/cortex/checkbox-checked.svg" alt="">' +
          '<svg class="indeterminate-icon" viewBox="0 0 18 18"><rect x="4" y="8" width="10" height="2" rx="1" fill="white"/></svg>' +
        '</div>' +
        '<span class="checkbox-label" style="font-weight:400;">Select all</span>';
      selectAllDiv.style.opacity = '0';
      actionsContainer.insertBefore(selectAllDiv, actionsContainer.firstChild);
      requestAnimationFrame(function() {
        selectAllDiv.style.transition = 'opacity 0.3s ease';
        selectAllDiv.style.opacity = '1';
      });
    }

    picked.forEach(function(item) {
      var div = document.createElement('div');
      div.className = 'checkbox';
      div.dataset.action = item.action;
      div.setAttribute('role', 'checkbox');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-checked', 'false');
      div.setAttribute('aria-label', item.label);
      div.setAttribute('onclick', 'toggleCheckbox(this)');
      div.innerHTML =
        '<div class="checkbox-box">' +
          '<img src="assets/cortex/checkbox-checked.svg" alt="">' +
        '</div>' +
        '<span class="checkbox-label">' + item.label + '</span>';
      div.style.opacity = '0';
      actionsContainer.appendChild(div);
      requestAnimationFrame(function() {
        div.style.transition = 'opacity 0.3s ease';
        div.style.opacity = '1';
      });
    });

    var remaining = available.length - count;
    if (remaining === 0) {
      var orText = buttonsArea ? buttonsArea.querySelector('.or-text') : null;
      if (orText) orText.style.display = 'none';
      btn.style.display = 'none';
    } else {
      btn.disabled = false;
      btn.classList.remove('disabled');
    }
    updateExecuteButton();
  }, 1500);
}

function closeIntelligenceBox(el) {
  var box = el.parentElement;
  while (box && !box.classList.contains('intelligence-box')) {
    box = box.parentElement;
  }
  if (box) {
    box.style.display = 'none';
  }
}

function startNewChat() {
  cortexState.messages = [];
  cortexState.mode = 'initial';

  var chatContainer = document.getElementById('cortex-chat-messages');
  if (chatContainer) chatContainer.innerHTML = '';

  var area = document.getElementById('cortex-intelligence-area');
  if (area) area.innerHTML = '';

  var field = document.getElementById('cortex-input-field');
  if (field) {
    field.value = '';
    autoResizeInput(field);
  }

  updateInputContext(cortexState.currentPage);
  switchPanelView('ai-chat');
}

// --- Auto-resize textarea to fit content, up to max-height ---
function autoResizeInput(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 300) + 'px';
}

// --- Remove Input Context chip ---
function removeInputContext() {
  const ctx = document.getElementById('cortex-input-context');
  if (ctx) ctx.style.display = 'none';
}

// --- Update Input Context label on route change ---
function updateInputContext(page) {
  const pageTitles = {
    'command-center.html': 'Command center',
    'unified-analytics.html': 'Unified analytics',
    'publisher-campaign.html': 'Publisher campaign',
    'content-collection.html': 'Content collection',
    'settings-listening.html': 'Settings / Listening',
  };
  const ctx = document.getElementById('cortex-input-context');
  const label = document.getElementById('cortex-context-page');
  if (ctx) ctx.style.display = '';
  if (label) label.textContent = pageTitles[page] || page;
}

// --- Toggle Attachment Menu ---
function toggleAttachmentMenu(el, e) {
  const dropdown = el.querySelector('.attachment-dropdown');
  if (dropdown) dropdown.classList.toggle('open');
  if (e) e.stopPropagation();
}
