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
const USERS_TABLE_DATA = (function() {
  const firstNames = ['Jan','Abhiraj','Adam','Adéla','Adil','Adrian','Adrien','Aeri','Ahmed','Akhil','Alaa','Alban','Alberto','Aleksandr','Aleš','Alex','Alexandra','Alice','Amit','Amy','Andrea','Andrew','Angela','Anna','Anton','Anya','Arjun','Ashley','Barbara','Ben','Boris','Brandon','Brian','Camila','Carl','Carlos','Carmen','Carolina','Catherine','Charlie','Chen','Chris','Clara','Claudia','Colin','Connor','Dana','Daniel','David','Dean','Diana','Diego','Dmitri','Elena','Elias','Emily','Emma','Eric','Eva','Faye','Felix','Fiona','Florence','Floyd','Frank','Gabriel','Gina','Grace','Hannah','Hans','Helen','Henry','Hugo','Irene','Isaac','Ivan','Jack','Jacob','James','Jana','Jane','Jason','Jennifer','Jessica','Jiří','Joe','John','Jonathan','Jordan','Josef','Julia','Julian','Juliette','Karen','Karl','Kate','Katrina','Kevin','Kim','Klára','Kyle','Laura','Leon','Liam','Lily','Linda','Lisa','Lucia','Lucie','Luis','Luke','Macy','Maja','Mara','Marco','Marcus','Maria','Marie','Marina','Mark','Martin','Mary','Matt','Maya','Michael','Michelle','Milan','Milo','Monica','Nadia','Nathan','Nicolas','Nina','Noah','Nora','Oliver','Oscar','Pablo','Patricia','Patrick','Paul','Petra','Philip','Rachel','Rafael','Rebecca','Ricardo','Rita','Robert','Robin','Roman','Rosa','Ruby','Ryan','Sam','Samuel','Sandra','Sarah','Scott','Sebastian','Simon','Sofia','Sonia','Sophie','Stefan','Stephanie','Steve','Susan','Tanya','Teresa','Thomas','Tim','Tomas','Tyler','Valentina','Vanessa','Vera','Victoria','Viktor','Vincent','William','Yuki','Zara','Zoe'];
  const lastNames = ['Čermák','Dayal','Vejrych','Paroulková','Alimullah','Lo','Mauriac','Moreau','Miller','Mohieddin','Vishaka','Zaki','Tapprest','Pellizzato','Mylnikov','Menzel','Bills','Voss','Anderson','Baker','Brown','Campbell','Carter','Chen','Clark','Collins','Cooper','Cruz','Davis','Evans','Fisher','Garcia','González','Green','Hall','Harris','Hill','Howard','Jackson','James','Johnson','Jones','Kim','King','Lee','Lewis','López','Martin','Martinez','Mitchell','Moore','Morris','Murphy','Nelson','Nguyen','Ortiz','Parker','Patel','Perez','Phillips','Reed','Rivera','Roberts','Robinson','Rodriguez','Ross','Russell','Sánchez','Scott','Singh','Smith','Stewart','Sullivan','Taylor','Thomas','Thompson','Torres','Turner','Walker','Wang','Ward','Watson','Webb','White','Williams','Wilson','Wood','Wright','Yang','Young','Zhang'];
  const roles = ['Account Admin','Account Admin','Account Admin','Account User','Account User','Account Admin','Account Admin','Client (External User)'];
  const groups = [['Customer Care','Design Team'],['Customer Care','Design Team'],['Customer Care'],['Design Team'],['Social Media','Support'],['Customer Care','Social Media'],[]];
  const moreVals = [0,0,7,7,7,8,5,3];

  function initials(first, last) {
    return (first[0] + last[0]).toUpperCase();
  }

  var data = [];
  data.push({ name: 'Jan Čermák', org: 'Emplifi', email: 'jan.cermak@emplifi.io', auth: 'SSO', role: 'Account Admin', groups: ['Customer Care', 'Design Team'], groupsMore: 7, avatar: 'JČ', isCurrentUser: true });

  var used = new Set();
  used.add('jan.cermak@emplifi.io');
  for (var i = 0; i < 250 && data.length < 200; i++) {
    var fi = (i * 7 + 3) % firstNames.length;
    var li = (i * 13 + 5) % lastNames.length;
    var fn = firstNames[fi];
    var ln = lastNames[li];
    var email = fn.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]/g,'') + '.' + ln.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]/g,'') + '@emplifi.io';
    if (used.has(email)) continue;
    used.add(email);
    var ri = data.length % roles.length;
    var gi = data.length % groups.length;
    var mi = data.length % moreVals.length;
    data.push({
      name: fn + ' ' + ln,
      org: data.length % 12 === 0 ? null : 'Emplifi',
      email: email,
      auth: data.length % 15 === 0 ? null : 'SSO',
      role: roles[ri],
      groups: groups[gi],
      groupsMore: moreVals[mi],
      avatar: initials(fn, ln)
    });
  }
  return data;
})();

function initSettingsUsers() {
  const tbody = document.getElementById('users-tbody');
  const searchInput = document.getElementById('users-search');
  const selectAllCb = document.getElementById('users-select-all');
  if (!tbody) return;

  let searchQuery = '';
  const checkedSet = new Set();

  const avatarColors = [
    { bg: '#dbeafe', text: '#1d4ed8' },
    { bg: '#dcfce7', text: '#15803d' },
    { bg: '#fef3c7', text: '#b45309' },
    { bg: '#f3e8ff', text: '#7e22ce' },
    { bg: '#fee2e2', text: '#b91c1c' },
    { bg: '#e0f2fe', text: '#0369a1' },
  ];

  function avatarColor(u, idx) {
    const seed = u.avatar ? (u.avatar.charCodeAt(0) + (u.avatar.charCodeAt(1) || 0)) : idx;
    return avatarColors[seed % avatarColors.length];
  }

  function renderUserCell(u, idx) {
    const c = avatarColor(u, idx);
    const avatarHtml = u.avatar
      ? '<div class="users-avatar users-avatar-initials" style="background:' + c.bg + ';color:' + c.text + '">' + u.avatar + '</div>'
      : '<div class="users-avatar users-avatar-img"><img src="assets/nav/avatar.png" alt=""></div>';
    const orgBadge = u.org ? '<span class="users-org-badge">' + u.org.toUpperCase() + '</span>' : '';
    const youBadge = u.isCurrentUser ? '<span class="users-you-badge">YOU</span>' : '';
    const displayName = u.name || u.email || '';
    const showEmail = u.email && u.name && u.name !== u.email;
    return '<div class="users-cell-user">' +
      avatarHtml +
      '<div class="users-cell-info">' +
        '<span class="users-cell-name-row"><span class="users-cell-name">' + displayName + '</span>' + orgBadge + youBadge + '</span>' +
        (showEmail ? '<span class="users-cell-email">' + u.email + '</span>' : '') +
      '</div></div>';
  }

  function renderSecurityCell(u) {
    if (!u.auth) return '<span class="users-security-dash">\u2014</span>';
    return '<span class="users-security-badge">' + u.auth + '</span>';
  }

  function renderGroupsCell(u) {
    if (!u.groups || u.groups.length === 0) return '<span class="users-security-dash">\u2014</span>';
    const pills = u.groups.map(g =>
      '<span class="users-group-label"><span class="users-group-label-stripe"></span><span class="users-group-label-text">' + g + '</span></span>'
    ).join('');
    const more = u.groupsMore > 0 ? '<span class="users-group-more">+' + u.groupsMore + '</span>' : '';
    return '<div class="users-groups-cell"><div class="users-groups-pills">' + pills + more + '</div></div>';
  }

  function renderRowActions() {
    return '<button type="button" class="users-row-action-btn" title="Remove user" aria-label="Remove user">' +
      '<img src="assets/icons/delete.svg" alt="" width="18" height="18">' +
    '</button>';
  }

  function updateSelectAllState() {
    if (!selectAllCb) return;
    const rows = tbody.querySelectorAll('.user-checkbox');
    const total = rows.length;
    const checked = tbody.querySelectorAll('.user-checkbox:checked').length;
    if (checked === 0) {
      selectAllCb.checked = false;
      selectAllCb.indeterminate = false;
    } else if (checked === total) {
      selectAllCb.checked = true;
      selectAllCb.indeterminate = false;
    } else {
      selectAllCb.checked = false;
      selectAllCb.indeterminate = true;
    }
  }

  function renderRows() {
    const filtered = !searchQuery
      ? USERS_TABLE_DATA
      : USERS_TABLE_DATA.filter(u => {
          const q = searchQuery.toLowerCase();
          return (u.name && u.name.toLowerCase().includes(q)) ||
                 (u.email && u.email.toLowerCase().includes(q));
        });

    tbody.innerHTML = '';

    const countText = document.getElementById('users-count-text');
    if (countText) {
      countText.textContent = filtered.length + ' Users';
    }

    filtered.forEach((u, idx) => {
      const key = u.email || u.name || idx;
      const isChecked = checkedSet.has(key);
      const tr = document.createElement('tr');
      tr.className = 'user-row' + (isChecked ? ' user-row-selected' : '');
      tr.dataset.key = key;
      tr.setAttribute('role', 'row');
      tr.innerHTML =
        '<td class="users-col-checkbox"><input type="checkbox" class="user-checkbox users-checkbox" aria-label="Select ' + (u.name || u.email || 'user') + '"' + (isChecked ? ' checked' : '') + '></td>' +
        '<td class="users-col-user"><div class="users-col-user-inner">' + renderUserCell(u, idx) + renderRowActions() + '</div></td>' +
        '<td class="users-col-security">' + renderSecurityCell(u) + '</td>' +
        '<td class="users-col-role">' + u.role + '</td>' +
        '<td class="users-col-groups users-col-groups-cell">' + renderGroupsCell(u) + '</td>';
      tbody.appendChild(tr);

      const cb = tr.querySelector('.user-checkbox');

      function syncRowSelection() {
        if (cb.checked) {
          checkedSet.add(key);
          tr.classList.add('user-row-selected');
        } else {
          checkedSet.delete(key);
          tr.classList.remove('user-row-selected');
        }
        updateSelectAllState();
      }

      cb.addEventListener('change', function(e) {
        e.stopPropagation();
        syncRowSelection();
      });

      cb.addEventListener('click', function(e) {
        e.stopPropagation();
        syncRowSelection();
      });

    });

    updateSelectAllState();
  }

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim();
      renderRows();
    });
  }

  if (selectAllCb) {
    function applySelectAll() {
      const rows = tbody.querySelectorAll('.user-row');
      rows.forEach(tr => {
        const cb = tr.querySelector('.user-checkbox');
        if (!cb) return;
        cb.checked = selectAllCb.checked;
        const key = tr.dataset.key;
        if (selectAllCb.checked) {
          checkedSet.add(key);
          tr.classList.add('user-row-selected');
        } else {
          checkedSet.delete(key);
          tr.classList.remove('user-row-selected');
        }
      });
    }
    selectAllCb.addEventListener('change', applySelectAll);
    selectAllCb.addEventListener('click', applySelectAll);
  }

  const filterBtn = document.getElementById('users-filter-btn');
  const filterBackdrop = document.getElementById('users-filter-backdrop');
  const filterOverlay = document.getElementById('users-filter-overlay');

  function openFilterPanel() {
    if (filterBackdrop) filterBackdrop.classList.add('open');
    if (filterOverlay) filterOverlay.classList.add('open');
    if (filterBtn) filterBtn.classList.add('has-active');
  }

  function closeFilterPanel() {
    if (filterBackdrop) filterBackdrop.classList.remove('open');
    if (filterOverlay) filterOverlay.classList.remove('open');
    if (filterBtn) filterBtn.classList.remove('has-active');
  }

  if (filterBtn) {
    filterBtn.addEventListener('click', function() {
      var isOpen = filterOverlay && filterOverlay.classList.contains('open');
      if (isOpen) { closeFilterPanel(); } else { openFilterPanel(); }
    });
  }

  if (filterBackdrop) filterBackdrop.addEventListener('click', closeFilterPanel);

  var filterClose = document.getElementById('users-filter-close');
  if (filterClose) filterClose.addEventListener('click', closeFilterPanel);

  var filterCancel = document.getElementById('users-filter-cancel');
  if (filterCancel) filterCancel.addEventListener('click', closeFilterPanel);

  document.querySelectorAll('.users-filter-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  var filterApply = document.getElementById('users-filter-apply');
  if (filterApply) filterApply.addEventListener('click', closeFilterPanel);

  // Keep filter panel snapped to Cortex panel edge (same pattern as listening wizard)
  var cortexWrapper = document.querySelector('.cortex-panel-wrapper');
  if (cortexWrapper && filterOverlay && filterBackdrop) {
    function syncFilterPosition() {
      var w = cortexWrapper.offsetWidth + 'px';
      filterOverlay.style.right = w;
      filterBackdrop.style.right = w;
    }
    syncFilterPosition();
    new ResizeObserver(syncFilterPosition).observe(cortexWrapper);
  }

  renderRows();
}

// --- Register page init functions with router ---
if (typeof registerPageInit === 'function') {
  registerPageInit('command-center.html', initCommandCenter);
  registerPageInit('settings-listening.html', initSettingsListening);
  registerPageInit('settings-users.html', initSettingsUsers);
}
