/* ============================================================
   SHARED COMPONENTS - Platform Navigation
   
   Edit this file to change the nav bar across ALL pages.
   Figma closed state: 7968:9500
   Figma open state:   7968:9668
   ============================================================ */

/**
 * Platform Navigation
 * Two states: collapsed (60px) and expanded (204px on hover)
 * @param {Object} options
 * @param {string} options.active - Which nav item is active
 */
function renderNav(options = {}) {
  const active = options.active || '';

  /* ── Navigation items (order matches Figma) ── */
  const items = [
    { id: 'command-center', icon: 'command-center.svg', title: 'Command Center', label: 'COMMAND CENTER', href: 'command-center.html' },
    { id: 'unified-analytics', icon: 'unified-analytics.svg', title: 'Unified Analytics', label: 'UNIFIED ANALYTICS', href: 'unified-analytics.html' },
    { id: 'publisher', icon: 'publisher.svg', title: 'Publisher', label: 'PUBLISHER', href: 'publisher-campaign.html' },
    { id: 'community', icon: 'community.svg', title: 'Community', label: 'COMMUNITY', href: null },
    { id: 'care', icon: 'care.svg', title: 'Care', label: 'CARE', href: null },
    { id: 'content', icon: 'content.svg', title: 'Content', label: 'CONTENT', href: 'content-collection.html' },
    { id: 'ugc', icon: 'ucg.svg', title: 'UGC', label: 'UGC', href: null },
    { id: 'bot', icon: 'bot.svg', title: 'Bot', label: 'BOT', href: null },
    { id: 'rating-reviews', icon: 'rating-reviews.svg', title: 'Rating & Reviews', label: 'RATING & REVIEWS', href: null },
    { id: 'agent', icon: 'agent.svg', title: 'Agent', label: 'AGENT', href: null },
  ];

  /* ── Build nav item rows ── */
  const navItems = items.map(item => {
    const cls = item.id === active ? ' active' : '';
    const onclick = item.href ? ` onclick="window.location.href='${item.href}'"` : '';
    return `<div class="nav-item${cls}" title="${item.title}"${onclick}>
          <div class="nav-item-icon"><img src="assets/nav/${item.icon}" alt="${item.title}"></div>
          <span class="nav-item-label">${item.label}</span>
        </div>`;
  }).join('\n        ');

  /* ── Full nav HTML ── */
  return `
    <nav class="platform-nav">
      <div class="nav-inner">
        <!-- Logo area -->
        <div class="nav-logo-area">
          <a href="command-center.html" class="nav-logo-link">
            <img src="assets/nav/logo.svg" alt="Emplifi" class="nav-logo-icon">
            <span class="nav-logo-text">emplifi</span>
          </a>
        </div>

        <div class="nav-divider"></div>

        <!-- Scrollable apps area -->
        <div class="nav-scroll-area">
          ${navItems}
        </div>

        <!-- Bottom section -->
        <div class="nav-bottom">
          <div class="nav-add-btn" title="Add Data Sources">
            <div class="nav-add-icon">
              <img src="assets/nav/plus.svg" alt="+">
            </div>
            <span class="nav-add-label">ADD DATA SOURCES</span>
          </div>

          <div class="nav-divider"></div>

          <div class="nav-general">
            <div class="nav-item" title="Help">
              <div class="nav-item-icon"><img src="assets/nav/help.svg" alt="Help"></div>
              <span class="nav-item-label">HELP</span>
            </div>
            <div class="nav-item${active === 'settings' ? ' active' : ''}" title="Settings" onclick="window.location.href='settings-listening.html'">
              <div class="nav-item-icon"><img src="assets/nav/settings.svg" alt="Settings"></div>
              <span class="nav-item-label">SETTINGS</span>
            </div>
            <div class="nav-profile" title="Profile">
              <div class="profile-avatar-wrap">
                <div class="profile-avatar"><img src="assets/nav/avatar.png" alt="Profile"></div>
                <div class="profile-badge"><span>12</span></div>
              </div>
              <span class="nav-item-label">KRISTIN WATSON</span>
            </div>
          </div>
        </div>
      </div>
    </nav>`;
}

/**
 * Initialize nav - reads data-active from #nav-slot and injects the nav.
 * Also sets up mouseenter/mouseleave for expand/collapse.
 */
function initNav() {
  const navSlot = document.getElementById('nav-slot');
  if (!navSlot) return;
  const activeNav = navSlot.dataset.active || '';
  navSlot.outerHTML = renderNav({ active: activeNav });

  // Set up hover expand/collapse on the inner container
  const navInner = document.querySelector('.platform-nav .nav-inner');
  if (navInner) {
    navInner.addEventListener('mouseenter', () => {
      navInner.classList.add('expanded');
    });
    navInner.addEventListener('mouseleave', () => {
      navInner.classList.remove('expanded');
    });
  }
}
