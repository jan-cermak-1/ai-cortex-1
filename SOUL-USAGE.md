# SOUL Design System — Usage in This Project

Quick reference for using SOUL design tokens and patterns in the Cortex AI prototype (HTML/CSS).

## Setup

```html
<link rel="stylesheet" href="soul-tokens.css">
<link rel="stylesheet" href="styles.css">
```

`soul-tokens.css` must load **before** `styles.css`. All HTML pages in this project already include both.

---

## Typography Classes

| Class | SOUL Style | Size | Use |
|-------|------------|------|-----|
| `.headline-2` | H2 | 20px/500 | Section titles |
| `.headline-3` | H3 | 16px/500 | Subsection titles |
| `.headline-5` | H5 | 10px/700, uppercase | Labels, small blocks |
| `.body-medium` | Body Medium | 13px/400 | Default text |
| `.body-medium-bold` | Body Medium Bold | 13px/700 | Emphasized body |
| `.body-small` | Body Small | 11px/400 | Compact text |
| `.helper-text` | Helper | 10px/400 | Help text, captions |
| `.button-label` | Button Label | 13px/600 | Button text |
| `.field-label` | Field Label | 11px/600 | Form labels |
| `.badge-label` | Badge Label | 10px/700, uppercase | Badge text |

---

## Button Classes

| Class | SOUL Type | Use |
|-------|-----------|-----|
| `.btn.btn-primary` | Primary | Main CTA (one per layout) |
| `.btn.btn-ghost` | Secondary (Ghost) | Cancel, secondary actions |
| `.btn.btn-light` | Secondary (Light) | General actions on grey |
| `.btn.btn-invisible` | Tertiary | Minimal emphasis (toolbars) |
| `.btn.btn-gradient` | AI Button | AI-specific actions |
| `.btn.btn-m` | Medium | Default height 36px |
| `.btn.btn-s` | Small | Compact buttons |

**Example:**
```html
<button class="btn btn-primary btn-m button-label">Create campaign</button>
<button class="btn btn-ghost btn-m button-label">Cancel</button>
```

---

## Spacing Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--space-2` | 6px | Associated elements (label + input) |
| `--space-4` | 12px | Between elements |
| `--space-6` | 24px | Form spacing, small viewports |
| `--space-8` | 36px | Button height, large viewport padding |

**Example:**
```css
.card-padding { padding: var(--space-6); }
.form-row { margin-bottom: var(--space-4); }
```

---

## Color Tokens (Common)

| Token | Use |
|-------|-----|
| `--color-layer-level-0` | Page background (#f3f3f5) |
| `--color-layer-level-1` | Card/panel background (#ffffff) |
| `--color-layer-level-2` | Nested container (#f3f3f5) |
| `--color-layer-level-3` | Alternate container (#e7e7e9) |
| `--color-layer-hover` / `--color-layer-active` | Hover/active overlays |
| `--color-layer-info/warning/danger/success` | Semantic container backgrounds |
| `--color-on-layer-primary` | Primary text (#24242b) |
| `--color-on-layer-secondary` | Secondary text (#505057) |
| `--color-on-layer-tertiary` | Placeholder (#9d9da0) |
| `--color-button-primary` | Primary button (#0f62fe) |
| `--color-border-primary` | Default borders |
| `--color-status-success/error/warning/info` | Status indicators |
| `--color-ai-gradient-start/end` | AI-specific gradient (teal → purple) |
| `--color-table-row-odd/even/hover` | Table row backgrounds |

---

## Component Patterns (HTML)

### Card
```html
<div class="card card-padding">
  <h3 class="headline-3">Title</h3>
  <p class="body-medium">Content</p>
</div>
```

### Primary Button
```html
<button class="btn btn-primary btn-m button-label">Save changes</button>
```

### Badge (Status)
```html
<span class="badge-success badge-label">Active</span>
<span class="badge-error badge-label">Error</span>
<span class="badge-warning badge-label">Pending</span>
<span class="badge-info badge-label">New</span>
```

Or with inline style for custom colors:
```html
<span class="badge badge-label" style="background: var(--color-status-success); color: var(--color-badge-text); padding: 2px 6px; border-radius: var(--border-radius-small);">Active</span>
```

### Platform Badge
```html
<span class="platform-badge platform-badge-fb badge-label">Fb</span>
<span class="platform-badge platform-badge-ig badge-label">Ig</span>
<span class="platform-badge platform-badge-yt badge-label">Yt</span>
<span class="platform-badge platform-badge-tt badge-label">Tt</span>
<span class="platform-badge platform-badge-sc badge-label">Sc</span>
```

### Form Field
```html
<label class="field-label" style="display: block; margin-bottom: var(--space-2);">Campaign name</label>
<input type="text" class="text-input" style="border: 1px solid var(--color-border-primary); border-radius: var(--border-radius-medium); padding: var(--space-2) var(--space-4);" />
```

---

## SOUL Guidelines (Summary)

- **One H1 per page** — use H2/H3 for sections
- **One high-emphasis button per layout** — prefer primary for main CTA
- **Sentence case** for buttons and labels
- **Action-oriented labels** — "Create campaign", not "New campaign"
- **6px** between associated elements (label + input)
- **12px** between unrelated elements

---

## Resources

| Resource | URL |
|----------|-----|
| SOUL Docs | https://soul.emplifi.io/ |
| Storybook | https://soul.dev.emplifi.io/ |
| Design Tokens | `soul-tokens.css` |
| Full Token Reference | `skills/soul-design-system/tokens-reference.md` |
| Component Catalog | `skills/soul-design-system/components-catalog.md` |
| Content Guidelines | `skills/soul-design-system/content-guidelines.md` |

---

## Soul MCP Integration

This project is validated against **Soul System MCP** (Cursor). Use MCP tools to:

- **`soul_style_get_tokens`** — Browse design tokens by category (colors, spacing, typography, shadows)
- **`soul_style_find_matching_token`** — Find token for a need (e.g. `need: 'primary button color'`)
- **`soul_list_icons`** — List all Soul icons for consistent iconography
- **`soul_refresh_cache`** — Refresh Soul documentation cache when Storybook updates

Token updates in `soul-tokens.css` are aligned with Soul MCP canonical values (platform colors, layer semantics, focus states).
