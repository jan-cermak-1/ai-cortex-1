/* ============================================================
   CORTEX AI FLOW PROTOTYPE - PAGE-SPECIFIC LOGIC
   
   Each page's init logic is wrapped in a callable function.
   The router calls the appropriate function after injecting content.
   ============================================================ */

// --- Wizard backdrop: event delegation (fixes click-to-close) ---
(function initWizardBackdropDelegation() {
  document.addEventListener('click', function(e) {
    if (e.target.id === 'wizard-backdrop') {
      hideWizard();
    }
  });
})();

// --- Intelligence box: event delegation for checkboxes (fixes Labubu flow clicks) ---
(function initIntelligenceBoxDelegation() {
  function handleCheckboxClick(checkbox) {
    if (checkbox.classList.contains('checkbox-select-all')) {
      toggleSelectAll(checkbox);
    } else {
      toggleCheckbox(checkbox);
    }
  }

  document.addEventListener('click', function(e) {
    const checkbox = e.target.closest('.intelligence-box-actions .checkbox');
    if (!checkbox) return;
    handleCheckboxClick(checkbox);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    const checkbox = e.target.closest('.intelligence-box-actions .checkbox');
    if (!checkbox) return;
    e.preventDefault();
    handleCheckboxClick(checkbox);
  });
})();

// --- Command Center page logic ---
function initCommandCenter() {
  updateExecuteButton();
}

function toggleCheckbox(el) {
  el.classList.toggle('checked');
  el.setAttribute('aria-checked', el.classList.contains('checked') ? 'true' : 'false');
  updateSelectAllState();
  updateExecuteButton();
}

function toggleSelectAll(el) {
  var container = document.getElementById('intelligence-box-initial');
  if (!container) return;
  var items = container.querySelectorAll('.checkbox:not(.checkbox-select-all)');
  var allChecked = Array.from(items).every(function(cb) { return cb.classList.contains('checked'); });

  items.forEach(function(cb) {
    if (allChecked) {
      cb.classList.remove('checked');
      cb.setAttribute('aria-checked', 'false');
    } else {
      cb.classList.add('checked');
      cb.setAttribute('aria-checked', 'true');
    }
  });

  updateSelectAllState();
  updateExecuteButton();
}

function updateSelectAllState() {
  var container = document.getElementById('intelligence-box-initial');
  if (!container) return;
  var selectAll = container.querySelector('.checkbox-select-all');
  if (!selectAll) return;

  var items = container.querySelectorAll('.checkbox:not(.checkbox-select-all)');
  var checked = Array.from(items).filter(function(cb) { return cb.classList.contains('checked'); });
  var allChecked = checked.length === items.length && items.length > 0;
  var someChecked = checked.length > 0 && !allChecked;

  selectAll.classList.toggle('checked', allChecked);
  selectAll.classList.toggle('indeterminate', someChecked);
  selectAll.setAttribute('aria-checked', allChecked ? 'true' : someChecked ? 'mixed' : 'false');
}

function updateExecuteButton() {
  const checkboxes = document.querySelectorAll('#intelligence-box-initial .checkbox');
  if (!checkboxes.length) return;

  const anyChecked = Array.from(checkboxes).some(cb => cb.classList.contains('checked'));
  const executeBtn = document.getElementById('execute-btn');
  if (!executeBtn) return;

  if (anyChecked) {
    executeBtn.classList.remove('disabled');
    executeBtn.disabled = false;
  } else {
    executeBtn.classList.add('disabled');
    executeBtn.disabled = true;
  }
}

function executeSelected() {
  var executeBtn = document.getElementById('execute-btn');
  if (!executeBtn || executeBtn.classList.contains('disabled')) return;

  var initialBox = document.getElementById('intelligence-box-initial');
  if (!initialBox) return;

  var area = document.getElementById('cortex-intelligence-area');
  if (!area) return;

  area.innerHTML = renderExecuteSkeleton();

  setTimeout(function() {
    cortexState.mode = 'completed';
    area.innerHTML = renderIntelligenceCompleted('');
    initDecisionItemListeners();

    var newCompletedBox = document.getElementById('intelligence-box-completed');
    if (newCompletedBox) {
      var items = newCompletedBox.querySelectorAll('.decision-item');
      items.forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(6px)';
        setTimeout(function() {
          item.style.transition = 'all 0.3s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
      });
    }

  }, 2000);
}

function renderExecuteSkeleton() {
  return '<div class="intelligence-box" id="intelligence-box-initial">' +
    '<div class="intelligence-box-header">' +
      '<span class="intelligence-box-title">Labubu trend in your country</span>' +
      '<div class="intelligence-box-close" role="button" tabindex="0" aria-label="Close intelligence box" onclick="closeIntelligenceBox(this)">' +
        '<img src="assets/cortex/close-x.svg" alt="">' +
      '</div>' +
    '</div>' +
    '<div class="intelligence-box-description">' +
      '<p>Labubu is trending in your country &mdash; your competitors are publishing content related to this trend.</p>' +
      '<p>Based on your decision I created:</p>' +
    '</div>' +
    '<div style="display:flex;flex-direction:column;gap:12px;width:100%;padding:6px 0;">' +
      '<div style="display:flex;gap:6px;align-items:center;">' +
        '<div class="skeleton-row" style="width:18px;height:18px;min-width:18px;border-radius:50%;"></div>' +
        '<div class="skeleton-row" style="flex:1;height:18px;"></div>' +
      '</div>' +
      '<div style="display:flex;gap:6px;align-items:center;">' +
        '<div class="skeleton-row" style="width:18px;height:18px;min-width:18px;border-radius:50%;"></div>' +
        '<div class="skeleton-row" style="flex:1;height:18px;width:70%;"></div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// --- Settings / Listening page logic ---
function initSettingsListening() {
  const backdrop = document.getElementById('wizard-backdrop');
  const container = document.getElementById('wizard-container');

  // Wizard overlay uses position: fixed to cover the entire viewport
  // (nav + page content). Cortex panel stays above via z-index: 10000.
  // Sync wizard container right padding with Cortex panel width
  // so the wizard panel ends where the Cortex panel starts.
  const cortexRoot = document.getElementById('cortex-panel-root');
  if (cortexRoot && container) {
    function syncWizardPosition() {
      container.style.paddingRight = cortexRoot.offsetWidth + 'px';
    }
    syncWizardPosition();
    const observer = new ResizeObserver(syncWizardPosition);
    observer.observe(cortexRoot);

    // Clean up when navigating away from settings
    function cleanup() {
      observer.disconnect();
      window.removeEventListener('route:changed', cleanup);
    }
    window.addEventListener('route:changed', cleanup);
  }
}

function showWizard() {
  const backdrop = document.getElementById('wizard-backdrop');
  const container = document.getElementById('wizard-container');
  if (backdrop) backdrop.style.display = 'block';
  if (container) container.style.display = 'flex';
}

function hideWizard() {
  const backdrop = document.getElementById('wizard-backdrop');
  const container = document.getElementById('wizard-container');
  if (backdrop) backdrop.style.display = 'none';
  if (container) container.style.display = 'none';
}

// --- Settings / Users page logic ---
/* Figma Users phase2 (736:4937) — sample data */
const USERS_TABLE_DATA = (function() {
  const users = [
    { name: 'Devon Lane', org: null, org2: null, email: null, auth: 'SSO', role: 'Account user', groups: ['Team A'], groupsMore: 0, avatar: 'DL', selected: true },
    { name: 'Cody Fisher', org: null, org2: null, email: null, auth: 'SSO', role: 'Account user', groups: ['Team A'], groupsMore: 0, avatar: 'CF' },
    { name: 'Theresa Webb', org: null, org2: null, email: null, auth: 'SSO', role: 'Account user', groups: ['Team A'], groupsMore: 0, avatar: 'TW' },
    { name: 'Floyd Miles', org: null, org2: null, email: null, auth: 'SSO', role: 'Account user', groups: ['Team A'], groupsMore: 0, avatar: 'FM' },
    { name: 'Dianne Russell', org: null, org2: null, email: null, auth: 'SSO', role: 'Account user', groups: ['Team A'], groupsMore: 0, avatar: 'DR' },
  ];
  const firstNames = ['Emma','Liam','Olivia','Noah','Ava','Oliver','Sophia','Elijah','Isabella','James','Mia','William','Charlotte','Benjamin','Amelia'];
  const lastNames = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Wilson','Anderson','Taylor','Thomas'];
  for (let i = 0; i < 15; i++) {
    const fn = firstNames[i % firstNames.length];
    const ln = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
    users.push({
      name: fn + ' ' + ln,
      org: null,
      org2: null,
      email: null,
      auth: i % 2 === 0 ? 'SSO' : '-',
      role: 'Account user',
      groups: ['Team A'],
      groupsMore: 0,
      avatar: (fn[0] + ln[0]).toUpperCase(),
      selected: false
    });
  }
  return users;
})();

function initSettingsUsers() {
  const tbody = document.getElementById('users-tbody');
  const searchInput = document.getElementById('users-search');
  const selectAll = document.getElementById('users-select-all');
  if (!tbody) return;

  let searchQuery = '';

  /* SOUL Avatar colors: semantic layer backgrounds + on-layer text */
  const avatarColors = ['var(--color-layer-info)', 'var(--color-layer-success)', 'var(--color-layer-warning)', 'var(--color-layer-level-3)'];
  const avatarColorText = ['var(--color-status-info)', 'var(--color-status-success-text)', 'var(--color-status-warning)', 'var(--color-on-layer-secondary)'];

  function renderUserCell(u, idx) {
    const displayName = u.name || u.email || '-';
    const orgLabel = (u.org || u.org2) ? (u.org2 ? (u.org || '') + ', ' + u.org2 : (u.org || u.org2)) : '';
    const colorIdx = (u.avatar ? (u.avatar.charCodeAt(0) + (u.avatar.charCodeAt(1) || 0)) : idx) % 4;
    const avatarHtml = u.avatar
      ? '<div class="users-avatar users-avatar-initials" style="background:' + avatarColors[colorIdx] + ';color:' + avatarColorText[colorIdx] + '">' + u.avatar + '</div>'
      : '<div class="users-avatar users-avatar-img"><img src="assets/nav/avatar.png" alt=""></div>';
    return '<div class="users-cell-user">' +
      avatarHtml +
      '<div class="users-cell-info">' +
        '<span class="users-cell-name">' + (u.name || '') + '</span>' +
        (orgLabel ? '<span class="users-cell-org">' + orgLabel + '</span>' : '') +
        (u.email && !u.name ? '<span class="users-cell-email">' + u.email + '</span>' : '') +
      '</div></div>';
  }

  function renderSecurityCell(u) {
    if (!u.auth || u.auth === '-') return '-';
    return '<span class="users-security-pill">' + u.auth + '</span>';
  }

  function renderGroupsCell(u) {
    if (!u.groups || u.groups.length === 0) return '-';
    const pills = u.groups.map(g => '<span class="users-group-pill">' + g + '</span>').join('');
    const more = u.groupsMore > 0 ? '<span class="users-group-more">+' + u.groupsMore + '</span>' : '';
    return '<div class="users-groups-cell"><div class="users-groups-pills">' + pills + more + '</div></div>';
  }

  function renderRows() {
    const filtered = !searchQuery
      ? USERS_TABLE_DATA
      : USERS_TABLE_DATA.filter(u => {
          const q = searchQuery.toLowerCase();
          return (u.name && u.name.toLowerCase().includes(q)) ||
                 (u.email && u.email.toLowerCase().includes(q)) ||
                 (u.org && u.org.toLowerCase().includes(q));
        });

    tbody.innerHTML = '';
    filtered.forEach((u, idx) => {
      const tr = document.createElement('tr');
      tr.className = 'user-row' + (u.selected ? ' user-row-selected' : '');
      tr.dataset.index = idx;
      tr.setAttribute('role', 'row');
      const actionsHtml = '';
      tr.innerHTML = '<td class="users-col-checkbox"><input type="checkbox" class="user-checkbox users-checkbox" aria-label="Select ' + (u.name || u.email || 'user') + '"></td>' +
        '<td class="users-col-user">' + renderUserCell(u, idx) + '</td>' +
        '<td class="users-col-security">' + renderSecurityCell(u) + '</td>' +
        '<td class="users-col-role">' + u.role + '</td>' +
        '<td class="users-col-groups">' + renderGroupsCell(u) + '</td>';
      tbody.appendChild(tr);

      tr.addEventListener('click', function(e) {
        if (e.target.closest('.user-checkbox')) return;
        tbody.querySelectorAll('.user-row').forEach(r => r.classList.remove('user-row-selected'));
        tr.classList.add('user-row-selected');
      });
    });

  }

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim();
      renderRows();
    });
  }

  const toolbarSelect = document.getElementById('users-toolbar-select');
  if (selectAll) {
    selectAll.addEventListener('change', function() {
      const checked = this.checked;
      tbody.querySelectorAll('.user-checkbox').forEach(cb => { cb.checked = checked; });
    });
  }
  if (toolbarSelect) {
    toolbarSelect.addEventListener('change', function() {
      const checked = this.checked;
      tbody.querySelectorAll('.user-checkbox').forEach(cb => { cb.checked = checked; });
      if (selectAll) selectAll.checked = checked;
    });
  }

  const filterBtn = document.getElementById('users-filter-btn');
  if (filterBtn) {
    filterBtn.addEventListener('click', function() {
      this.classList.toggle('has-active');
    });
  }

  renderRows();
}

// --- Register page init functions with router ---
if (typeof registerPageInit === 'function') {
  registerPageInit('command-center.html', initCommandCenter);
  registerPageInit('settings-listening.html', initSettingsListening);
  registerPageInit('settings-users.html', initSettingsUsers);
}
