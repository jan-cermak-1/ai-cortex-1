---
name: soul-design-system
description: Comprehensive SOUL Design System knowledge for Emplifi products including design tokens, 200+ components, patterns, and guidelines. Use when designing or building UI for Emplifi, working with SOUL components, applying design tokens, questions about SOUL design system, Emplifi design patterns, UI implementation, button types, form elements, modal dialogs, badges, avatars, spacing scale, color palette, typography styles, or accessibility standards.
---

# SOUL Design System

Comprehensive guide to Emplifi's SOUL Design System for building consistent, accessible user interfaces.

## Overview

**SOUL** is Emplifi's design system providing pre-built components, design tokens, patterns, and guidelines for the CX platform.

**Key Resources:**
- **Documentation**: https://soul.emplifi.io/
- **Storybook**: https://soul.dev.emplifi.io/
- **Package**: `@emplifi/soul` (private npm)
- **Figma**: Global Library + Product Library
- **Contact**: soul@emplifi.io | Slack: #soul-design-system

**Tech Stack:**
- React-first, Web Components support
- Font: Inter (Google Fonts)
- Framework-agnostic design tokens via CSS custom properties

## Quick Reference

### When to Use This Skill

Use SOUL when:
- Building UI for Emplifi products
- Implementing components (buttons, forms, modals, tables)
- Applying design tokens (colors, spacing, typography)
- Following Emplifi design patterns
- Writing in-product copy
- Ensuring accessibility compliance

---

## Design Tokens

### Colors

#### Layer Colors (Backgrounds)
| Token | Value | Use |
|-------|-------|-----|
| `--color-layer-level-0` | #f3f3f5 | Page/dialog background |
| `--color-layer-level-1` | #ffffff | Container on level 0 |
| `--color-layer-level-2` | #f3f3f5 | Container on level 1 |
| `--color-layer-hover` | rgba(0,0,0,0.05) | Hover state |

#### Text Colors (On-Layer)
| Token | Value | Use |
|-------|-------|-----|
| `--color-on-layer-primary` | #24242b | Primary text/icons |
| `--color-on-layer-secondary` | #505057 | Secondary text/icons |
| `--color-on-layer-tertiary` | #9d9da0 | Placeholder text |

#### Button Colors
| Token | Value | Use |
|-------|-------|-----|
| `--color-button-primary` | #0f62fe | Primary CTA |
| `--color-button-primary-hover` | #0353e9 | Primary hover |
| `--color-button-ghost` | transparent | Ghost button |
| `--color-button-ghost-hover` | rgba(0,0,0,0.05) | Ghost hover |

#### Status Colors
| Token | Value | Use |
|-------|-------|-----|
| `--color-status-success` | #20c54f | Success states |
| `--color-status-error` | #da1e28 | Error states |
| `--color-status-warning` | #f5a623 | Warning states |
| `--color-status-info` | #0f62fe | Info states |

#### AI Gradient
| Token | Value |
|-------|-------|
| `--color-ai-gradient-start` | rgb(0,161,154) (teal) |
| `--color-ai-gradient-end` | rgb(124,45,240) (purple) |

**Complete color system** (100+ tokens): See [tokens-reference.md](tokens-reference.md#colors)

### Spacing

SOUL uses a 14-step spacing scale:

| Token | Value | Common Use |
|-------|-------|------------|
| `--space-0` | 0px | Reset |
| `--space-1` | 3px | Tight spacing |
| `--space-2` | 6px | Associated elements (default) |
| `--space-3` | 9px | Small components |
| `--space-4` | 12px | Between elements |
| `--space-5` | 18px | Component spacing |
| `--space-6` | 24px | Form elements, app padding ≤1559px |
| `--space-7` | 30px | Smaller interactive elements |
| `--space-8` | 36px | Default button height, app padding ≥1560px |
| `--space-9` | 48px | Larger interactive |
| `--space-10` | 60px | Bar height |
| `--space-11` | 72px | Below empty state |
| `--space-12` | 96px | Large sections |
| `--space-13` | 120px | Extra large sections |

**Guidelines:**
- 6px: Associated elements (button + label, checkbox + text)
- 12px: Between related/unrelated elements
- 24px: Form spacing, small viewports
- 36px: Large viewports, empty state spacing
- 72px: Below empty states

### Typography

**Font Family**: `--font-family: 'Inter', sans-serif`  
**Features**: Tabular numbers, slashed zero, contextual alternates, cv08

#### Type Scale

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| **Headline 1** | 26px | 500 | 36px | Main page title (one per page) |
| **Headline 2** | 20px | 500 | 30px | Section title |
| **Headline 3** | 16px | 500 | 24px | Subsection title |
| **Headline 4** | 13px | 700 | 18px | Fourth-level title |
| **Headline 5** | 10px | 700 | 12px | Small blocks (uppercase) |
| **Body Medium** | 13px | 400 | 18px | Default body text |
| **Body Small** | 11px | 400 | 16px | Compact text |
| **Helper** | 10px | 400 | 12px | Help text |
| **Button Label** | 13px | 600 | 18px | Button text |
| **Field Label** | 11px | 600 | 18px | Input labels |
| **Badge Label** | 10px | 700 | 12px | Badge text (uppercase) |

**Typography Rules:**
- One H1 per page
- Use primary color (`--color-on-layer-primary`) for default text
- Use secondary color for supplemental text
- Use interactive color for primary actions

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--border-radius-small` | 2px | Subtle rounding |
| `--border-radius-medium` | 6px | Default (most components) |
| `--border-radius-large` | 8px | Containers |
| `--border-radius-pill` | 999px | Pill-shaped |
| `--border-radius-full` | 50% | Circles (avatars) |

### Shadows (Elevation)

| Token | Use |
|-------|-----|
| `--box-shadow-100` | Default containers on level 1 |
| `--box-shadow-200` | Hover on level 1 |
| `--box-shadow-300` | Popovers, select lists |
| `--box-shadow-400` | Floating elements, dialogs |
| `--box-shadow-inner` | Inset shadows |

### Motion

**Durations:**
| Token | Value | Use |
|-------|-------|-----|
| `--motion-duration-instant` | 0ms | Text changes |
| `--motion-duration-quick-1` | 80ms | Checkboxes, radio |
| `--motion-duration-quick-2` | 120ms | Toggles, tabs, buttons |
| `--motion-duration-moderate-1` | 180ms | Dropdowns, tooltips |
| `--motion-duration-moderate-2` | 270ms | Modals, snackbars |

**Easing:**
- `--motion-easing-ease`: General use
- `--motion-easing-entry`: ease-out (elements entering)
- `--motion-easing-exit`: ease-in (elements leaving)
- `--motion-easing-linear`: Constant speed

---

## Component Quick Reference

### Navigation

#### AppHeader
**Use**: Main application header with branding, navigation, actions  
**Variants**: Default, with breadcrumbs, with menu, with content  
**Key Props**: `hasMenu`, `breadcrumbs`, `actions`  
[Details →](components-catalog.md#appheader)

#### Breadcrumb
**Use**: Hierarchical navigation showing user location  
**Guidelines**: Max 4 levels, truncate middle items if needed  
[Details →](components-catalog.md#breadcrumb)

#### Link
**Use**: Inline navigation  
**Types**: Default, External (with icon)  
**Color**: `--color-link` (#0f62fe)  
[Details →](components-catalog.md#link)

#### Tab / TabList
**Use**: Switch between views in same context  
**Guidelines**: 2-7 tabs, short labels, one active tab  
[Details →](components-catalog.md#tab)

### Forms

#### Button
**8 Types:**
1. **Primary**: Main CTA (one per layout), blue background
2. **Secondary (Light)**: General actions, Cancel/Close on grey
3. **Secondary (Ghost)**: Lighter alternative, Cancel/Close on white
4. **Tertiary (Invisible)**: Minimal emphasis (toolbars, tables)
5. **Danger**: Destructive actions (delete, remove)
6. **Request**: Demo/contact/buy requests
7. **Link**: Secondary actions near main button
8. **Inverse**: High-contrast backgrounds (tooltips, snackbars)

**Sizes**: Small, Medium (default), Large  
**Variants**: Text only, icon-only, left-icon, right-icon, with-badge  
**Emphasis Rule**: One high-emphasis button per layout  
[Details →](components-catalog.md#button)

#### Checkbox
**Use**: Multi-select options  
**States**: Unchecked, checked, indeterminate, disabled  
**Variants**: CheckboxButton (toggle-style), CheckboxButtonGroup  
[Details →](components-catalog.md#checkbox)

#### Radio Button
**Use**: Single-select from options  
**Variants**: RadioButtonCard (larger, with description)  
**Guidelines**: 2-7 options, use Select for 8+  
[Details →](components-catalog.md#radio)

#### Toggle
**Use**: On/off switch for single setting  
**States**: On, Off, Indeterminate, Disabled  
**Guidelines**: Immediate effect, no confirmation needed  
[Details →](components-catalog.md#toggle)

#### TextInput / TextArea
**Use**: Text entry (single-line / multi-line)  
**Anatomy**: Title, input area, error message, explanation icon  
**Validation**: Real-time for format, on-blur for availability  
**Height**: 36px (TextInput), variable (TextArea)  
[Details →](components-catalog.md#textinput)

#### NumberInput
**Use**: Numeric entry with stepper controls  
**Features**: Min/max, step, keyboard arrows  
[Details →](components-catalog.md#numberinput)

#### Select
**Use**: Choose from dropdown list  
**Types**: Single-select, multi-select, searchable  
**Guidelines**: 8+ options, use Radio for 2-7  
[Details →](components-catalog.md#select)

#### SearchInput
**Use**: Search/filter functionality  
**Features**: Clear button, search icon, debounced input  
[Details →](components-catalog.md#searchinput)

### Data Display

#### Badge
**3 Types:**
1. **Status**: Process/message status (success, danger, incomplete)
2. **Non-actionable**: Content info (no icons)
3. **Special**: Priority, sentiment, AI, propagation

**Sizes**: Small (default), Medium  
**Placement**: Inline (widgets, cards), header (panels), table (one per row)  
[Details →](components-catalog.md#badge)

#### Avatar
**Types:**
- **Avatar**: Base avatar (image, initials, or default)
- **AvatarProfile**: Social media profiles
- **AvatarTeam**: Team/workspace avatars
- **AvatarUser**: User avatars
- **AvatarChatbot**: AI chatbot avatar

**Sizes**: 16px, 24px, 32px, 40px, 48px  
**With**: Status indicator, badge, progress ring  
[Details →](components-catalog.md#avatar)

#### AvatarGroup
**Use**: Display multiple avatars (overlapping)  
**Overflow**: Show "+N" for remaining  
**Max Display**: 3-5 avatars before overflow  
[Details →](components-catalog.md#avatargroup)

#### AvatarInfo
**Use**: Avatar + text (name, description)  
**Variants**: AvatarProfileInfo, AvatarTeamInfo, AvatarUserInfo  
[Details →](components-catalog.md#avatarinfo)

#### DataTable
**Use**: Tabular data display  
**Features**: Sort, filter, pagination, row selection  
**Performance**: Virtualization for 1000+ rows  
[Details →](components-catalog.md#datatable)

#### ProgressBar
**Use**: Show completion/progress  
**Variants**: Determinate (0-100%), indeterminate (loading)  
[Details →](components-catalog.md#progressbar)

#### ItemCount
**Use**: Display count of items (selected, total)  
**Format**: "N items", "N of M", "N selected"  
[Details →](components-catalog.md#itemcount)

#### PlatformTag
**Use**: Social platform indicators  
**Platforms**: Facebook, Instagram, Twitter, YouTube, etc.  
**Colors**: Platform brand colors  
[Details →](components-catalog.md#platformtag)

### Feedback

#### Modal
**3 Types:**
1. **Confirmation**: Confirm/dismiss actions (e.g., delete)
2. **Informative**: Inform only (e.g., "I understand")
3. **Advanced**: Complex flows (create, edit, multi-step)

**Anatomy (Confirmation/Informative):**
- Close button (top-right)
- Illustration (optional)
- Headline
- Content
- Actions (CTA + optional secondary)

**Behavior:**
- Overlay, centered, 200ms dissolve
- Dismiss: ESC, close button, Cancel, click outside
- Confirm: Enter (when CTA focused), CTA click

[Details →](components-catalog.md#modal)

#### SidePanel
**Use**: Overlay for multiple tasks without losing context  
**Width**: Fixed (360px, 480px, 600px)  
**Position**: Right edge  
**Use When**: Multiple related actions, detail view, wizard  
[Details →](components-catalog.md#sidepanel)

#### Snackbar
**Use**: Short-lived messages (3-5 seconds)  
**Types**: Success, error, warning, info  
**Position**: Bottom-center  
**Action**: Optional action button (undo, retry)  
[Details →](components-catalog.md#snackbar)

#### Tooltip
**Types:**
- **Brief**: Short supplemental info (1-3 words)
- **Explanatory**: Define terms, clarify actions
- **Guiding**: First-time user guidance
- **Caveat**: Warnings, limitations

**Trigger**: Hover, focus  
**Delay**: 300ms  
**Max Width**: 240px  
[Details →](components-catalog.md#tooltip)

#### EmptyState
**2 Attention Levels:**
- **High**: First use, error, action required (illustration + CTA)
- **Low**: No data yet, filtered out (icon + text)

**Anatomy**: Illustration/icon, headline, description, optional CTA  
[Details →](components-catalog.md#emptystate)

#### Banner
**Use**: Persistent messages at page/section top  
**Types**: Info, warning, error, success  
**Dismissible**: Optional close button  
[Details →](components-catalog.md#banner)

#### Loaders
**Types:**
- **Spinner**: Short waits (<3s), indeterminate
- **SkeletonLoader**: Page/section loading, shows structure
- **AppLoader**: Full app initialization
- **ProgressBar**: Determinate progress (uploads, exports)

**Guidelines:**
- Use skeleton for initial page load
- Use spinner for button/inline actions
- Show progress percentage when available
[Details →](components-catalog.md#loaders)

### Layout

#### Container
**Use**: Divide content into sections  
**Padding**: Min `--space-4` (12px)  
**Spacing**: Min `--space-4` between containers  
**Background**: Default white (`--color-layer-level-1`)  
[Details →](components-catalog.md#container)

#### Divider
**Use**: Separate content sections  
**Types**: Horizontal, vertical  
**Weight**: 1px, `--color-border-secondary`  
[Details →](components-catalog.md#divider)

### Utility

#### Icon
**Library**: 500+ icons  
**Sizes**: 12px, 16px, 18px, 24px, 32px  
**Color**: Inherit from parent or explicit token  
[Details →](components-catalog.md#icon)

#### IconAI
**Use**: AI-specific features  
**Style**: Gradient (teal to purple)  
**Animation**: Optional pulsing/shimmer  
[Details →](components-catalog.md#iconai)

#### Illustration
**Types**: Simple (spot), Complex (empty state, onboarding)  
**Style**: Consistent with SOUL visual language  
[Details →](components-catalog.md#illustration)

#### Highlight
**Use**: Emphasize text (search results, mentions)  
**Color**: `--color-layer-highlight` (#f6d84e)  
[Details →](components-catalog.md#highlight)

#### Dropdown / DropdownMenu
**Use**: Contextual actions menu  
**Trigger**: Button, icon, three-dot menu  
**Max Items**: 10 (use search/group for more)  
[Details →](components-catalog.md#dropdown)

#### Ellipsis
**Use**: Truncate long text  
**Types**: End-line (...), mid-line, front-line  
**Tooltip**: Show full text on hover  
[Details →](components-catalog.md#ellipsis)

**Full component catalog** (200+ components): [components-catalog.md](components-catalog.md)

---

## Design Patterns

### Button Emphasis Hierarchy

1. **One high-emphasis button per layout** (primary)
2. Use medium/low emphasis for secondary actions
3. Use tertiary/invisible when many actions (toolbars, tables, dashboards)
4. **Emphasis by type**: Primary > Danger > Request > Secondary > Tertiary

### Color Usage Principles

- **Gray**: Main palette for structure
- **Blue**: Primary actions, interactive elements
- **Semantic roles**: Red (danger), green (success), yellow (warning), blue (info), purple (news/offers)
- **Decorative color**: Only in illustrations, not for meaning

### Typography Hierarchy

- **One H1 per page** (main title)
- Consistent use of semantic heading levels (H1-H5)
- Body medium (13px) for default text
- Body small (11px) for compact layouts

### Modal Usage

| Type | Use | Actions | Dismiss |
|------|-----|---------|---------|
| **Confirmation** | Confirm/cancel destructive actions | Primary + Cancel | Outside click, ESC, Cancel |
| **Informative** | Show information | Single action | Outside click, ESC |
| **Advanced** | Complex forms, multi-step | Contextual | Close button only |

### Empty States

| Level | Use | Visual | CTA |
|-------|-----|--------|-----|
| **High Attention** | First use, error, action required | Illustration | Required |
| **Low Attention** | No data yet, filtered out | Icon only | Optional |

### Loading States

- **Initial page load**: Skeleton loader
- **Button action**: Spinner (disable button)
- **Inline content**: Spinner (small)
- **Determinate progress**: ProgressBar with percentage
- **Infinite scroll**: Spinner at bottom

### Remove vs Delete vs Disconnect

- **Remove**: Reversible, item still exists elsewhere
- **Delete**: Permanent, item destroyed
- **Disconnect**: Break connection, both items remain

**Confirmation level:**
- High-impact: Modal
- Low-impact: DropdownConfirm or inline confirmation

### Overflow Handling

- **End-line ellipsis**: `...` at end (most common)
- **Mid-line ellipsis**: `start...end` (file names, URLs)
- **Show more**: Expandable sections for long content
- **Tooltip**: Full text on hover for truncated

**Detailed patterns**: [patterns-guide.md](patterns-guide.md)

---

## Content Guidelines

### Voice & Tone

**Voice** (consistent):
- Friendly, professional, inclusive
- Clear, supportive, user-focused

**Tone** (adaptive):
- Empathetic, confident, expert
- Not fluffy, jokey, blunt, arrogant, or bossy

### Key Word Choices

| Situation | Use | Avoid |
|-----------|-----|-------|
| Existing item | **Add** | Create |
| New item | **Create** | Add |
| Reversible | **Remove** | Delete |
| Permanent | **Delete** | Remove |
| Break connection | **Disconnect** | Delete, Remove |
| Button action | **View**, **Edit**, **Manage** | See, Show, Change |
| General viewing | **See** | View |
| Toggle visibility | **Show** / **Hide** | Display |

### Grammar Rules

- **Sentence case** for buttons, headings, labels
- **Active voice**: "Delete 3 items" not "3 items will be deleted"
- **Plain language**: Avoid jargon, speak like a human
- **Short sentences**: Scannable, focused
- **Global audience**: Avoid idioms, colloquialisms

### Button Labels

- Action-oriented: "Create campaign", not "New campaign"
- Specific: "Delete 3 items", not "Delete items"
- Concise: 1-3 words ideal
- Sentence case: "Save changes", not "Save Changes"

### Error Messages

- Full sentence with punctuation
- Explain what happened and how to fix
- Empathetic tone, not blaming
- Example: "This email is already in use. Try another email or sign in."

**Full content guide**: [content-guidelines.md](content-guidelines.md)

---

## Accessibility

### Target

**WCAG 2.2 Level AA**

### Contrast

- **Normal text** (< 18px): ≥4.5:1
- **Large text** (≥ 18px): ≥3:1
- **UI components**: ≥3:1

**Tools**: WebAIM Contrast Checker, Figma plugins (Stark, A11y Color Contrast)

### Keyboard Navigation

- All interactive elements reachable via Tab
- Visible focus indicators
- Enter/Space for activation
- ESC for dismissal (modals, dropdowns)
- Arrow keys for navigation (dropdowns, tabs)

### Screen Readers

- Semantic HTML (`<button>`, `<nav>`, `<main>`)
- ARIA labels for icons/icon-only buttons
- ARIA live regions for dynamic content
- Alt text for images

### Forms

- Labels visible when focused
- Error messages associated with fields
- Required fields indicated
- Clear instructions before form

---

## Implementation

### Using Design Tokens

Import `soul-tokens.css` or use the SOUL package:

```css
/* Direct token usage */
.button {
  background: var(--color-button-primary);
  color: var(--color-on-button-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--border-radius-medium);
  font-size: var(--text-button-size);
  font-weight: var(--text-button-weight);
}
```

### Component Import

```javascript
import { Button, Modal, Badge } from '@emplifi/soul';

// Usage
<Button variant="primary">Create campaign</Button>
```

### Figma Libraries

1. **Global Library**: Colors, icons, illustrations, effects, text styles
2. **Product Library**: Components, templates

### Storybook URL Pattern

```
https://soul.dev.emplifi.io/?path=/docs/components-{component}--overview
```

Examples:
- Button: `/docs/components-button--overview`
- Modal: `/docs/components-modal--overview`
- Badge: `/docs/components-badge--overview`

---

## Additional Resources

- **Design tokens**: [tokens-reference.md](tokens-reference.md) — Complete token enumeration
- **Components**: [components-catalog.md](components-catalog.md) — Full component documentation
- **Patterns**: [patterns-guide.md](patterns-guide.md) — Design patterns and best practices
- **Content**: [content-guidelines.md](content-guidelines.md) — UX writing standards
- **Icons**: [assets/ICONS-INDEX.md](assets/ICONS-INDEX.md) — 462 SVG icons with usage guide

**Community:**
- Figma: https://figma.com/@emplifi
- Blog: https://medium.com/emplifi-design
- Team: https://emplifi.design/
