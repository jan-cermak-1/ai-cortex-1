/* ============================================================
   MAIN NAVIGATION - Platform Navigation
   
   Persistent element rendered once into the SPA shell.
   Only the active state changes on route navigation.
   
   Figma closed state: 7968:9500
   Figma open state:   7968:9668
   ============================================================ */

const NAV_ITEMS = [
  { id: 'command-center',    icon: 'command-center.svg',    title: 'Command Center',    label: 'COMMAND CENTER',    href: 'command-center.html' },
  { id: 'unified-analytics', icon: 'unified-analytics.svg', title: 'Unified Analytics', label: 'UNIFIED ANALYTICS', href: 'unified-analytics.html' },
  { id: 'publisher',         icon: 'publisher.svg',         title: 'Publisher',         label: 'PUBLISHER',         href: 'publisher-campaign.html' },
  { id: 'community',         icon: 'community.svg',         title: 'Community',         label: 'COMMUNITY',         href: null },
  { id: 'care',              icon: 'care.svg',              title: 'Care',              label: 'CARE',              href: null },
  { id: 'content',           icon: 'content.svg',           title: 'Content',           label: 'CONTENT',           href: 'content-collection.html' },
  { id: 'ugc',               icon: 'ucg.svg',               title: 'UGC',               label: 'UGC',               href: null },
  { id: 'bot',               icon: 'bot.svg',               title: 'Bot',               label: 'BOT',               href: null },
  { id: 'rating-reviews',    icon: 'rating-reviews.svg',    title: 'Rating & Reviews',  label: 'RATING & REVIEWS',  href: null },
  { id: 'agent',             icon: 'agent.svg',             title: 'Agent',             label: 'AGENT',             href: null },
];

/**
 * Render the full platform nav HTML.
 * Uses data-href for SPA routing instead of onclick window.location.href.
 */
function renderNav(options = {}) {
  const active = options.active || '';

  const navItems = NAV_ITEMS.map(item => {
    const cls = item.id === active ? ' active' : '';
    const dataHref = item.href ? ` data-href="${item.href}"` : '';
    const a11y = item.href ? ' role="button" tabindex="0"' : '';
    return `<div class="nav-item${cls}" data-nav-id="${item.id}" title="${item.title}"${dataHref}${a11y}>
          <div class="nav-item-icon"><img src="assets/nav/${item.icon}" alt="${item.title}"></div>
          <span class="nav-item-label">${item.label}</span>
        </div>`;
  }).join('\n        ');

  return `
    <nav class="platform-nav">
      <div class="nav-inner">
        <div class="nav-logo-area">
          <a href="command-center.html" class="nav-logo-link">
            <img src="assets/nav/logo.svg" alt="Emplifi" class="nav-logo-icon">
            <span class="nav-logo-text">emplifi</span>
          </a>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-scroll-area">
          ${navItems}
        </div>

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
            <div class="nav-item${active === 'settings' ? ' active' : ''}" data-nav-id="settings" title="Settings" data-href="settings-listening.html" role="button" tabindex="0">
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
 * Initialize nav — render once into #nav-root and set up hover expand/collapse.
 */
function initNav(initialActive) {
  const navRoot = document.getElementById('nav-root');
  if (!navRoot) return;

  navRoot.innerHTML = renderNav({ active: initialActive || 'command-center' });

  const navInner = document.querySelector('.platform-nav .nav-inner');
  if (navInner) {
    navInner.addEventListener('mouseenter', () => navInner.classList.add('expanded'));
    navInner.addEventListener('mouseleave', () => navInner.classList.remove('expanded'));
  }
}

/**
 * Update active nav item — called by router on navigation.
 * Only toggles CSS class, no DOM re-render.
 */
function setActiveNavItem(pageId) {
  document.querySelectorAll('.nav-item[data-nav-id]').forEach(item => {
    item.classList.toggle('active', item.dataset.navId === pageId);
  });
}
