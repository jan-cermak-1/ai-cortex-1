# SOUL Design Tokens — Complete Reference

Complete enumeration of all SOUL Design System tokens organized by category.

## Colors

### Layer Colors (Backgrounds)

Background colors for different elevation levels in the UI.

| Token | Value | Use |
|-------|-------|-----|
| `--color-layer-level-0` | #f3f3f5 | Page/dialog background (base level) |
| `--color-layer-level-1` | #ffffff | Container on level 0 (cards, panels) |
| `--color-layer-level-2` | #f3f3f5 | Container on level 1 (nested containers) |
| `--color-layer-level-3` | #e7e7e7 | Container on level 1 (alternate) |
| `--color-layer-main-navigation` | #111114 | Main navigation background |
| `--color-layer-highlight` | #f6d84e | Text highlight (search results) |
| `--color-layer-hover` | rgba(0,0,0,0.05) | Hover state overlay |

### On-Layer Colors (Text & Icons)

Colors for content placed on layer backgrounds.

| Token | Value | Use |
|-------|-------|-----|
| `--color-on-layer-primary` | #24242b | Primary text and icons |
| `--color-on-layer-secondary` | #505057 | Secondary text and icons |
| `--color-on-layer-tertiary` | #9d9da0 | Tertiary text, placeholders |
| `--color-on-layer-inverse` | #f9f9fa | High-contrast (tooltips, dark backgrounds) |
| `--color-on-layer-interactive` | #003beb | Interactive elements, links |
| `--color-on-layer-warning` | #e1ab11 | Warning state text |
| `--color-on-layer-danger` | #da2828 | Error/danger text |
| `--color-on-layer-success` | #15a43e | Success state text |
| `--color-on-layer-recent` | #691cd4 | Recent/new indicators |

### Border Colors

| Token | Value | Use |
|-------|-------|-----|
| `--color-border-primary` | rgba(0,0,0,0.2) | Default borders |
| `--color-border-secondary` | rgba(0,0,0,0.1) | Subtle borders |
| `--color-border-focus-ring` | #003beb | Focus indicator |
| `--color-border-success` | #20c54f | Success state border |
| `--color-border-success-emphasis` | #20c54f | Emphasized success |
| `--color-border-error` | #da1e28 | Error state border |
| `--color-border-error-emphasis` | #da1e28 | Emphasized error |
| `--color-border-warning` | #f5a623 | Warning state border |
| `--color-border-warning-emphasis` | #f5a623 | Emphasized warning |
| `--color-border-info` | #0f62fe | Info state border |
| `--color-border-info-emphasis` | #0f62fe | Emphasized info |
| `--color-border-recent` | #691cd4 | Recent/new border |
| `--color-border-recent-emphasis` | #691cd4 | Emphasized recent |

### Button Colors

| Token | Value | Use |
|-------|-------|-----|
| `--color-button-primary` | #0f62fe | Primary button background |
| `--color-button-primary-hover` | #0353e9 | Primary button hover |
| `--color-button-primary-active` | #0353e9 | Primary button active |
| `--color-button-request` | #15a43e | Request button background |
| `--color-button-request-hover` | #12a03b | Request button hover |
| `--color-button-danger` | #da2828 | Danger button background |
| `--color-button-danger-hover` | #c91f1f | Danger button hover |
| `--color-button-purchase` | #f6d84e | Purchase button background |
| `--color-button-ghost` | rgba(255,255,255,0) | Ghost button background |
| `--color-button-ghost-hover` | rgba(0,0,0,0.05) | Ghost button hover |
| `--color-button-ghost-active` | rgba(0,0,0,0.1) | Ghost button active |
| `--color-button-invisible` | rgba(255,255,255,0) | Invisible button background |
| `--color-button-invisible-hover` | rgba(0,0,0,0.05) | Invisible button hover |
| `--color-button-invisible-active` | rgba(0,0,0,0.1) | Invisible button active |

### On-Button Colors (Text on buttons)

| Token | Value | Use |
|-------|-------|-----|
| `--color-on-button-primary` | #ffffff | Text on primary button |
| `--color-on-button-request` | #ffffff | Text on request button |
| `--color-on-button-danger` | #ffffff | Text on danger button |
| `--color-on-button-purchase` | #24242b | Text on purchase button |
| `--color-on-button-ghost` | #24242b | Text on ghost button |
| `--color-on-button-invisible` | #24242b | Text on invisible button |

### Status / Semantic Colors

| Category | Token | Value | Use |
|----------|-------|-------|-----|
| **Success** | `--color-status-success` | #20c54f | Success indicators |
| | `--color-status-success-light` | #e8f5e9 | Success background |
| | `--color-status-success-text` | #15a43e | Success text |
| **Error** | `--color-status-error` | #da1e28 | Error indicators |
| | `--color-status-error-light` | #ffebee | Error background |
| | `--color-status-error-text` | #e53935 | Error text |
| **Warning** | `--color-status-warning` | #f5a623 | Warning indicators |
| | `--color-status-warning-light` | #fff8e1 | Warning background |
| | `--color-status-warning-text` | #e1ab11 | Warning text |
| **Info** | `--color-status-info` | #0f62fe | Info indicators |
| | `--color-status-info-light` | #d0e2ff | Info background |
| | `--color-status-info-text` | #0f62fe | Info text |

### Navigation Colors

| Token | Value | Use |
|-------|-------|-----|
| `--color-nav-dark` | #111114 | Navigation background |
| `--color-nav-item-hover` | rgba(255,255,255,0.1) | Navigation item hover |
| `--color-nav-item-active` | rgba(255,255,255,0.12) | Navigation item active |
| `--color-nav-text` | #ffffff | Navigation text |

### AI Gradient

| Token | Value |
|-------|-------|
| `--color-ai-gradient-start` | rgb(0,161,154) |
| `--color-ai-gradient-end` | rgb(124,45,240) |

**Usage**: Apply as linear gradient for AI features:
```css
background: linear-gradient(135deg, var(--color-ai-gradient-start), var(--color-ai-gradient-end));
```

### Message Colors (Banner backgrounds)

| Token | Value | Use |
|-------|-------|-----|
| `--color-message-success` | #e8f5e9 | Success message background |
| `--color-message-error` | #ffebee | Error message background |
| `--color-message-warning` | #fff8e1 | Warning message background |
| `--color-message-info` | #d0e2ff | Info message background |

### Component-Specific Colors

| Component | Token | Value | Use |
|-----------|-------|-------|-----|
| **Tooltip** | `--color-tooltip-background` | #24242b | Tooltip background |
| | `--color-tooltip-text` | #ffffff | Tooltip text |
| **Badge** | `--color-badge-error` | #e53935 | Error badge |
| | `--color-badge-text` | #ffffff | Badge text |
| **Link** | `--color-link` | #0f62fe | Link color |
| | `--color-link-hover` | #0353e9 | Link hover |
| | `--color-link-visited` | #8a3ffc | Visited link |
| **Overlay** | `--color-overlay` | rgba(0,0,0,0.3) | Modal overlay |
| | `--color-overlay-heavy` | rgba(0,0,0,0.5) | Heavy overlay |
| **Scrollbar** | `--color-scrollbar-thumb` | rgba(0,0,0,0.15) | Scrollbar thumb |
| | `--color-scrollbar-thumb-hover` | rgba(0,0,0,0.25) | Scrollbar hover |
| | `--color-scrollbar-track` | transparent | Scrollbar track |

### Platform Brand Colors

| Token | Value | Platform |
|-------|-------|----------|
| `--color-platform-facebook` | #0866ff | Facebook |
| `--color-platform-instagram` | #d73676 | Instagram |
| `--color-platform-twitter` | #24242b | Twitter/X |
| `--color-platform-youtube` | #ff0000 | YouTube |

### Gray Scale

Complete gray scale for custom use:

| Token | Value |
|-------|-------|
| `--color-gray-100` | #f3f3f5 |
| `--color-gray-200` | #e7e7e9 |
| `--color-gray-300` | #d7d8d9 |
| `--color-gray-400` | #b4b4b6 |
| `--color-gray-500` | #9d9da0 |
| `--color-gray-600` | #717578 |
| `--color-gray-700` | #505057 |
| `--color-gray-800` | #24242b |
| `--color-gray-900` | #111114 |

### Shadow Colors

Used internally by shadow definitions:

| Token | Value |
|-------|-------|
| `--color-shadow-drop-10` | rgba(0,0,0,0.1) |
| `--color-shadow-drop-20` | rgba(0,0,0,0.2) |
| `--color-shadow-drop-30` | rgba(0,0,0,0.3) |
| `--color-shadow-inner` | rgba(0,0,0,0.05) |

---

## Spacing

SOUL uses a 14-step spacing scale based on multiples of 3px.

| Token | Value | Equivalent | Common Use |
|-------|-------|------------|------------|
| `--space-0` | 0px | 0rem | Reset spacing |
| `--space-1` | 3px | 0.1875rem | Tight spacing (rare) |
| `--space-2` | 6px | 0.375rem | Associated elements (default) |
| `--space-3` | 9px | 0.5625rem | Small component spacing |
| `--space-4` | 12px | 0.75rem | Between related/unrelated elements |
| `--space-5` | 18px | 1.125rem | Component internal spacing |
| `--space-6` | 24px | 1.5rem | Form elements, app padding (small) |
| `--space-7` | 30px | 1.875rem | Smaller interactive elements height |
| `--space-8` | 36px | 2.25rem | Default button/input height, app padding (large) |
| `--space-9` | 48px | 3rem | Larger interactive elements |
| `--space-10` | 60px | 3.75rem | Bar height (header, bulk action) |
| `--space-11` | 72px | 4.5rem | Below empty states, large sections |
| `--space-12` | 96px | 6rem | Extra large sections |
| `--space-13` | 120px | 7.5rem | Maximum spacing |

### Spacing Guidelines

**Associated elements** (6px / `--space-2`):
- Checkbox + label
- Radio button + label
- Icon + text in button
- Form field + help text

**Between elements** (12px / `--space-4`):
- Minimum container padding
- Between form fields
- Between related components
- Minimum spacing between containers

**Form spacing** (24px / `--space-6`):
- Between form sections
- App padding on viewports ≤1559px

**Large viewport spacing** (36px / `--space-8`):
- App padding on viewports ≥1560px
- Empty state internal spacing
- Default interactive element height

**Section spacing** (72px / `--space-11`):
- Below empty states
- Between major page sections
- "Go to top" button area

---

## Typography

### Font Family

```css
--font-family: 'Inter', sans-serif;
```

**OpenType Features:**
```css
--font-feature-settings: 'zero' 1, 'ss04' 1, 'cv08' 1, 'cv05' 1;
```

Features enabled:
- `zero`: Slashed zero
- `ss04`: Tabular numbers (for tables)
- `cv08`: Character variant 08
- `cv05`: Contextual alternates

### Type Scale Tokens

#### Headline 1 (Main page title)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-headline-1-size` | 26px |
| **Weight** | `--text-headline-1-weight` | 500 |
| **Line Height** | `--text-headline-1-line-height` | 36px |
| **Letter Spacing** | `--text-headline-1-letter-spacing` | -0.021px |

**Use**: Main page title (one per page)

#### Headline 2 (Section title)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-headline-2-size` | 20px |
| **Weight** | `--text-headline-2-weight` | 500 |
| **Line Height** | `--text-headline-2-line-height` | 30px |
| **Letter Spacing** | `--text-headline-2-letter-spacing` | -0.017px |

**Use**: Section titles, panel headers

#### Headline 3 (Subsection title)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-headline-3-size` | 16px |
| **Weight** | `--text-headline-3-weight` | 500 |
| **Line Height** | `--text-headline-3-line-height` | 24px |
| **Letter Spacing** | `--text-headline-3-letter-spacing` | -0.011px |

**Use**: Subsection titles, modal headers

#### Headline 4 (Fourth-level title)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-headline-4-size` | 13px |
| **Weight** | `--text-headline-4-weight` | 700 |
| **Line Height** | `--text-headline-4-line-height` | 18px |
| **Letter Spacing** | `--text-headline-4-letter-spacing` | 0px |

**Use**: Fourth-level titles, section labels

#### Headline 5 (Small blocks)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-headline-5-size` | 10px |
| **Weight** | `--text-headline-5-weight` | 700 |
| **Line Height** | `--text-headline-5-line-height` | 12px |
| **Letter Spacing** | `--text-headline-5-letter-spacing` | 0.01px |

**Use**: Small blocks, overline text (UPPERCASE)

#### Body Medium (Default body text)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-body-medium-size` | 13px |
| **Weight** | `--text-body-medium-weight` | 400 |
| **Line Height** | `--text-body-medium-line-height` | 18px |
| **Letter Spacing** | `--text-body-medium-letter-spacing` | 0px |
| **Bold Weight** | `--text-body-medium-bold-weight` | 700 |

**Use**: Default body text, descriptions, content

#### Body Small (Compact text)

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-body-small-size` | 11px |
| **Weight** | `--text-body-small-weight` | 400 |
| **Line Height** | `--text-body-small-line-height` | 16px |
| **Letter Spacing** | `--text-body-small-letter-spacing` | 0.005px |
| **Bold Weight** | `--text-body-small-bold-weight` | 700 |

**Use**: Compact layouts, table cells, secondary descriptions

#### Helper Text

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-helper-size` | 10px |
| **Weight** | `--text-helper-weight` | 400 |
| **Line Height** | `--text-helper-line-height` | 12px |
| **Letter Spacing** | `--text-helper-letter-spacing` | 0.01px |

**Use**: Help text, tooltips, captions

#### Button Label

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-button-size` | 13px |
| **Weight** | `--text-button-weight` | 600 |
| **Line Height** | `--text-button-line-height` | 18px |

**Use**: Button text

#### Field Label

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-field-label-size` | 11px |
| **Weight** | `--text-field-label-weight` | 600 |
| **Line Height** | `--text-field-label-line-height` | 18px |

**Use**: Input labels, form field labels

#### Badge Label

| Property | Token | Value |
|----------|-------|-------|
| **Size** | `--text-badge-size` | 10px |
| **Weight** | `--text-badge-weight` | 700 |
| **Line Height** | `--text-badge-line-height` | 12px |
| **Letter Spacing** | `--text-badge-letter-spacing` | 0.01px |

**Use**: Badge text (UPPERCASE)

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--border-radius-small` | 2px | Subtle rounding (rare) |
| `--border-radius-medium` | 6px | Default (most components) |
| `--border-radius-large` | 8px | Large containers, panels |
| `--border-radius-pill` | 999px | Pill-shaped buttons, badges |
| `--border-radius-full` | 50% | Circles (avatars, icon buttons) |

**Legacy Aliases** (for backward compatibility):
- `--radius-small` = `--border-radius-small`
- `--radius-medium` = `--border-radius-medium`
- `--radius-large` = `--border-radius-large`
- `--radius-pill` = `--border-radius-pill`
- `--radius-full` = `--border-radius-full`

---

## Shadows (Elevation)

SOUL uses a 4-level elevation system plus inner shadows.

### Box Shadows

#### Level 100 (Default containers)

```css
--box-shadow-100: 
  0px 0px 0.5px 0px rgba(0,0,0,0.3),
  0px 1px 3px 0px rgba(0,0,0,0.2);
```

**Use**: Default containers on level 1, cards

#### Level 200 (Hover state)

```css
--box-shadow-200: 
  0px 0px 0.5px 0px rgba(0,0,0,0.3),
  0px 1px 3px 0px rgba(0,0,0,0.2),
  0px 5px 12px 0px rgba(0,0,0,0.1);
```

**Use**: Hover on level 1, interactive cards

#### Level 300 (Popovers)

```css
--box-shadow-300: 
  0px 0px 0.5px 0px rgba(0,0,0,0.3),
  0px 1px 5px 0px rgba(0,0,0,0.2),
  0px 10px 16px 0px rgba(0,0,0,0.1);
```

**Use**: Popovers, dropdown menus, select lists

#### Level 400 (Floating elements)

```css
--box-shadow-400: 
  0px 0px 0.5px 0px rgba(0,0,0,0.3),
  0px 2px 8px 0px rgba(0,0,0,0.2),
  0px 16px 24px 0px rgba(0,0,0,0.1);
```

**Use**: Modals, floating panels, dialogs without overlay

#### Inner Shadow

```css
--box-shadow-inner: 
  inset 0px 0.25px 0px 0.25px rgba(0,0,0,0.05),
  inset 0px 0px 1px 0px rgba(0,0,0,0.05);
```

**Use**: Inset shadows, pressed states

**Legacy Aliases**:
- `--shadow-100` = `--box-shadow-100`
- `--shadow-200` = `--box-shadow-200`
- `--shadow-300` = `--box-shadow-300`
- `--shadow-inner` = `--box-shadow-inner`

---

## Motion

### Duration Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--motion-duration-instant` | 0ms | Text changes, no animation |
| `--motion-duration-quick-1` | 80ms | Checkbox, radio button |
| `--motion-duration-quick-2` | 120ms | Toggle, tabs, chips, buttons |
| `--motion-duration-moderate-1` | 180ms | Dropdown, tooltip, popover |
| `--motion-duration-moderate-2` | 270ms | Modal, snackbar, side panel |

### Easing Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--motion-easing-ease` | ease | General animations |
| `--motion-easing-entry` | ease-out | Elements entering view |
| `--motion-easing-exit` | ease-in | Elements leaving view |
| `--motion-easing-linear` | linear | Constant speed (progress) |

### Position Tokens (Slide transforms)

| Token | Value | Use |
|-------|-------|-----|
| `--motion-slide-up` | translateY(-12px) | Slide up animation |
| `--motion-slide-down` | translateY(12px) | Slide down animation |

### Animation Examples

**Fade in:**
```css
.fade-in {
  animation: fadeIn var(--motion-duration-moderate-1) var(--motion-easing-entry);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide up fade:**
```css
.slide-up-fade {
  animation: slideUpFade var(--motion-duration-moderate-1) var(--motion-easing-entry);
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: var(--motion-slide-up);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Usage Patterns

### Applying Tokens

**Direct usage:**
```css
.button-primary {
  background: var(--color-button-primary);
  color: var(--color-on-button-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--border-radius-medium);
  font-size: var(--text-button-size);
  font-weight: var(--text-button-weight);
  line-height: var(--text-button-line-height);
}
```

**Composition:**
```css
.card {
  background: var(--color-layer-level-1);
  padding: var(--space-6);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-100);
}

.card:hover {
  box-shadow: var(--box-shadow-200);
  transition: box-shadow var(--motion-duration-quick-2) var(--motion-easing-ease);
}
```

### Semantic Usage

Always prefer semantic tokens over primitive values:

**✅ Good:**
```css
color: var(--color-on-layer-primary);
background: var(--color-button-primary);
padding: var(--space-4);
```

**❌ Avoid:**
```css
color: #24242b;
background: #0f62fe;
padding: 12px;
```

This ensures consistency and allows theme customization.
