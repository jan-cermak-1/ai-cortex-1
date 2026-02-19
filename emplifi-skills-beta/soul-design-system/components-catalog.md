# SOUL Component Catalog

Comprehensive documentation of all SOUL Design System components organized by category.

**Quick Navigation:**
- [Navigation](#navigation)
- [Forms](#forms)  
- [Data Display](#data-display)
- [Feedback](#feedback)
- [Layout](#layout)
- [Utility](#utility)
- [Complete Index](#component-index)

---

## Navigation

### AppHeader

**Purpose**: Main application header providing branding, primary navigation, and global actions.

**When to Use**: As the top-level navigation for the application, to provide consistent branding across views, for global actions (notifications, user menu, search).

**Anatomy**:
1. Logo/branding (left)
2. Primary navigation or breadcrumbs (center)
3. Global actions (right)
4. Optional menu toggle
5. Optional bottom content slot

**Variants**: Default, With breadcrumbs, With menu, With content, Complex

**Height**: 60px (fixed)

**Key Props**: `hasMenu` (boolean), `breadcrumbs` (array), `actions` (node)

**Accessibility**: Use `<header>` semantic element, `role="banner"`, keyboard navigation for all actions

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-appheader--overview

---

### Breadcrumb

**Purpose**: Show hierarchical location in site/app structure.

**When to Use**: Multi-level navigation structures, show user's current location, allow quick navigation to parent levels

**When NOT to Use**: Flat information architecture, single-page apps without hierarchy, mobile

**Guidelines**:
- Maximum 4 levels displayed
- Truncate middle items if >4 levels
- Last item (current page) not clickable
- Use chevron (>) separator
- Start with Home or app name

**Accessibility**: Use `<nav>` with `aria-label="Breadcrumb"`, use `<ol>`, current page: `aria-current="page"`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-breadcrumb--overview

---

### Link

**Purpose**: Navigate to different pages or sections.

**Types**: Default (standard inline link), External (link to external site with icon)

**Styling**:
- Color: `--color-link` (#0f62fe)
- Hover: `--color-link-hover` (#0353e9)
- Visited: `--color-link-visited` (#8a3ffc)
- Underline: On hover
- External icon: 16px, inline

**Accessibility**: Use `<a>` element, descriptive link text, external links: `rel="noopener noreferrer"` + icon

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-link--overview

---

### Tab / TabList

**Purpose**: Switch between related views in the same context.

**When to Use**: Multiple views of same content, logically grouped content, preserve context when switching

**Guidelines**: 2-7 tabs ideal, short labels (1-2 words), one active tab at a time, first tab active by default

**States**: Default, Hover, Active/Selected, Disabled

**Accessibility**: Use `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected="true"`, arrow keys for navigation

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-tab--overview

---

## Forms

### Button

**Purpose**: Trigger actions, submit forms, navigate.

**8 Button Types**:

1. **Primary** - Main CTA, blue background, white text, one per layout
2. **Secondary (Light)** - General actions, light gray background
3. **Secondary (Ghost)** - Lighter secondary, transparent background
4. **Tertiary (Invisible)** - Minimal, subtle hover
5. **Danger** - Destructive, red background
6. **Request** - Requests, green background
7. **Link** - Link-style button
8. **Inverse** - High-contrast for dark backgrounds

**Sizes**: Small (30px), Medium (36px, default), Large (48px)

**Variants**: Text only, Icon-only, Left icon + text, Text + right icon, With badge

**States**: Enabled, Hover, Focus, Active, Disabled, Loading

**Badge**: Optional notification badge, top-right, max 4 characters

**Typography**: 13px, Semi-Bold (600), Sentence case

**Guidelines**: One high-emphasis per layout, action-oriented labels, sentence case

**Accessibility**: Use `<button>` element, descriptive label or `aria-label` for icon-only

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-button--overview

---

### ButtonAdd

**Purpose**: Specialized button for "Add" actions.

**Variants**: Icon-only (+ icon), With text ("Add item")

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-buttonadd--overview

---

### ButtonAI

**Purpose**: Trigger AI-powered features.

**Style**: AI gradient background (teal to purple), white text, optional sparkle/AI icon

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-buttonai--overview

---

### ButtonGroup

**Purpose**: Group related buttons together.

**Layout**: Horizontal (default), Vertical

**Spacing**: 6px (`--space-2`) between buttons

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-buttongroup--overview

---

### Checkbox

**Purpose**: Multi-select from list of options.

**When to Use**: Select multiple items, toggle single setting, agree to terms

**States**: Unchecked, Checked, Indeterminate, Disabled

**Anatomy**: Checkbox input (16x16px), Label (right, 6px spacing), Optional help text

**Accessibility**: Use `<input type="checkbox">`, associate label, group with `<fieldset>` + `<legend>`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-checkbox--overview

---

### CheckboxButton

**Purpose**: Checkbox styled as button (toggle appearance).

**When to Use**: Visual prominence needed, toolbar selections, filter chips

**Variants**: Single, Group (CheckboxButtonGroup)

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-checkboxbutton--overview

---

### Radio / RadioButton

**Purpose**: Single-select from list of options.

**When to Use**: Choose one option from 2-7 choices, mutually exclusive options

**States**: Unselected, Selected, Disabled

**Anatomy**: Radio input (16x16px circle), Label, Optional description

**Variants**: Radio (standard), RadioButtonCard (larger, with description)

**Accessibility**: Use `<input type="radio">`, group with `<fieldset>`, same `name` attribute, arrow keys to navigate

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-radio--overview

---

### Toggle

**Purpose**: On/off switch for single setting.

**When to Use**: Binary state, immediate effect, settings and preferences

**States**: Off, On, Indeterminate, Disabled

**Anatomy**: Toggle track (40x20px), Toggle thumb (16x16px circle), Label

**Behavior**: Click anywhere to toggle, immediate effect, smooth animation (120ms)

**Accessibility**: Use `role="switch"`, `aria-checked="true/false"`, keyboard: Space to toggle

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-toggle--overview

---

### TextInput

**Purpose**: Single-line text entry.

**When to Use**: Short text (name, email, search), known length content, structured data

**Anatomy**: Label, Input field (36px height), Placeholder, Help text, Error message, Prefix/suffix, Icon

**States**: Default, Filled, Focus, Error, Disabled, Read-only

**Validation**: Real-time for format, on-blur for availability, show error after user input

**Accessibility**: Use `<input type="text">`, associate label, required: `aria-required="true"`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-textinput--overview

---

### TextArea

**Purpose**: Multi-line text entry.

**When to Use**: Long text, unknown length content, multiple paragraphs

**Height**: Min 3 rows (72px), max defined or auto-expand, resize: vertical only

**Character Counter**: Optional, show remaining/total, warning at 90% capacity

**Accessibility**: Use `<textarea>`, label association

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-textarea--overview

---

### NumberInput

**Purpose**: Numeric entry with stepper controls.

**Features**: Stepper buttons, keyboard arrows, min/max values, step increment, decimal support

**Validation**: Enforce min/max on blur, disable stepper at boundaries

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-numberinput--overview

---

### Select

**Purpose**: Choose option(s) from dropdown list.

**When to Use**: 8+ options, space-constrained, searchable options

**Types**: Single-select, Multi-select, Searchable

**Anatomy**: Label, Select trigger, Dropdown icon, Dropdown list, Options, Search field

**Behavior**: Click to open, type to search, click option to select, click outside to close

**Accessibility**: Use native `<select>` or ARIA combobox, `aria-expanded`, keyboard support

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-select--overview

---

### SearchInput

**Purpose**: Search/filter functionality.

**Features**: Search icon (left), Clear button (right), Debounced input (300ms), Optional dropdown results

**Accessibility**: `type="search"`, `role="search"`, label

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-searchinput--overview

---

## Data Display

### Badge

**Purpose**: Label, categorize, or show status.

**3 Types**: Status (process status with colors), Non-actionable (content info), Special (priority, sentiment, AI)

**Sizes**: Small (18px height, default), Medium (24px height)

**Typography**: 10px, Bold (700), UPPERCASE, Max 20 characters

**Placement**: Inline (widgets, cards), Header (panels, modals), Table (one per row)

**Variants**: Badge, BadgeAI, BadgePPD, BadgePriority, BadgePropagation, BadgeSentiment

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-badge--overview

---

### Avatar

**Purpose**: Represent users, teams, profiles, or chatbots.

**Types**: Avatar (base), AvatarProfile, AvatarTeam, AvatarUser, AvatarChatbot

**Sizes**: 16px, 24px, 32px, 40px, 48px

**Fallback Priority**: Image → Initials → Default icon

**Additional Elements**: Status indicator, Badge, Progress ring

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-avatar--overview

---

### AvatarGroup

**Purpose**: Display multiple avatars (overlapping).

**Variants**: AvatarGroup, AvatarInfoGroup, AvatarProfileGroup, AvatarTeamGroup, AvatarUserGroup

**Layout**: Overlapping circles, left to right, Z-index stacking

**Overflow**: Max 3-5 avatars, remaining count: "+N"

**Spacing**: Overlap: 6px

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-avatargroup--overview

---

### AvatarInfo

**Purpose**: Avatar + text (name, description).

**Variants**: AvatarInfo, AvatarProfileInfo, AvatarTeamInfo, AvatarUserInfo

**Layout**: Avatar (left), Name (right, bold), Description (right, below name, gray)

**Spacing**: Avatar to text: 12px, Name to description: 3px

**Text Truncation**: Single line, ellipsis if long, tooltip on hover

**Sizes**: Small (24px), Medium (32px, default), Large (40px)

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-avatarinfo--overview

---

### DataTable

**Purpose**: Display tabular data with features.

**Features**: Sorting, Filtering, Pagination, Row selection, Row actions, Bulk actions, Column resize, Column reorder, Fixed columns, Virtualization

**Column Types**: Text, Number, Date/Time, Status, Avatar + name, Actions

**States**: Default, Hover, Selected, Disabled, Empty, Loading, Error

**Best Practices**: Left-align text, right-align numbers, row height 48px minimum, max 10 columns visible

**Accessibility**: Semantic `<table>`, `<th scope="col">`, `aria-sort`, keyboard navigation

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-datatable--overview

---

### ProgressBar

**Purpose**: Show completion or loading progress.

**Types**: Determinate (0-100%), Indeterminate (unknown duration)

**Variants**: Linear (bar, default), Circular (ring)

**Sizing**: Height: 4px or 8px (default), Width: 100% of container

**Colors**: Default (blue), Success (green), Warning (yellow), Error (red)

**Behavior**: Smooth animation, update in real-time, auto-hide when complete

**Accessibility**: `role="progressbar"`, `aria-valuenow`, `aria-valuemin/max`, `aria-label`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-progressbar--overview

---

### ItemCount

**Purpose**: Display count of items (selected, total, filtered).

**Formats**: "N items", "N of M", "N selected", "Showing N of M"

**Placement**: Top of list/table, footer, bulk action bar

**Typography**: 13px, Regular, gray color

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-itemcount--overview

---

### PlatformTag

**Purpose**: Indicate social media platform.

**Platforms**: Facebook, Instagram, Twitter/X, YouTube, LinkedIn, TikTok

**Variants**: Icon only (16px or 24px), Icon + text, Text only (uppercase, 8px, bold)

**Colors**: Platform brand colors (from tokens)

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-platformtag--overview

---

## Feedback

### Modal

**Purpose**: Focused task or decision requiring user attention.

**3 Types**: Confirmation (confirm/cancel action), Informative (show information), Advanced (complex forms/wizards)

**Anatomy (Confirmation/Informative)**: Close button, Illustration, Headline, Content, Actions

**Sizing**: Small (400px), Medium (600px, default), Large (800px), Full (90vw)

**Behavior**: 200ms dissolve, overlay, ESC to close, Enter to submit, focus trap

**Dismissal**: X button, Cancel button, ESC key, Click outside

**Best Practices**: Use sparingly, clear headline, action-oriented labels, avoid nested modals

**Accessibility**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus management

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-modal--overview

---

### SidePanel

**Purpose**: Overlay for auxiliary content without losing main context.

**When to Use**: Detail view, multi-step form, contextual help, secondary workflows

**Sizes**: Small (360px), Medium (480px), Large (600px)

**Position**: Right edge of screen

**Anatomy**: Header (title, close button, optional tabs), Content area (scrollable), Footer (optional actions)

**Behavior**: Slide in from right (270ms), optional overlay, ESC to close

**Accessibility**: `role="dialog"`, `aria-modal="true"`, focus management

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-sidepanel--overview

---

### Snackbar

**Purpose**: Brief messages about app processes (non-critical feedback).

**When to Use**: Success confirmation, info notification, non-blocking error

**Duration**: 3-5 seconds (auto-dismiss)

**Position**: Bottom-center (desktop), Bottom full-width (mobile)

**Types**: Success, Error, Warning, Info

**Anatomy**: Icon (left), Message (center), Action button (right), Close button (right)

**Behavior**: Slide up + fade in (270ms), auto-dismiss, pause on hover, queue multiple

**Accessibility**: `role="status"` or `role="alert"`, `aria-live="polite"` or `"assertive"`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-snackbar--overview

---

### Tooltip

**Purpose**: Provide supplemental information on hover/focus.

**5 Types**: Brief (1-3 words), Explanatory (define term), Guiding (first-time guidance), Caveat (warning), TooltipEllipsis (show full text)

**Trigger**: Hover (300ms delay), Focus (keyboard)

**Position**: Auto (optimal position), adjusts to viewport

**Sizing**: Max width: 240px, multi-line allowed

**Styling**: Dark background, white text, 6px border-radius, shadow, arrow

**Accessibility**: Not read by screen readers unless critical, use `aria-label` on trigger for critical info

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-tooltip--overview

---

### EmptyState

**Purpose**: Indicate absence of content with guidance.

**2 Attention Levels**: High (first use, error, action required), Low (no data yet, filtered out)

**Anatomy (High)**: Illustration, Headline, Description, Primary action, Optional secondary action

**Anatomy (Low)**: Icon, Headline, Description

**Spacing**: Internal: 36px between elements, External: 72px below

**Variants**: EmptyState, EmptySearch, EmptyStateError, EmptyStateFolder

**Content Guidelines**: Concise headline (3-5 words), helpful description (1-2 sentences), specific CTA

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-emptystate--overview

---

### Banner

**Purpose**: Persistent message at page/section top.

**When to Use**: System-wide announcements, persistent warnings, important information

**Types**: Info, Warning, Error, Success

**Anatomy**: Icon (left), Message (center/left), Action button (right), Close button (right)

**Position**: Top of page or section

**Behavior**: Slide down on appear, persist until dismissed, push content down

**Accessibility**: `role="banner"` or `role="region"`, `aria-live="polite"`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-banner--overview

---

### Loaders

**Purpose**: Indicate loading state.

**4 Types**:

1. **Spinner** - Short waits (<3s), indeterminate, button actions (16px, 24px, 32px)
2. **SkeletonLoader** - Page/section initial load, shows structure, shimmer animation
3. **AppLoader** - Full application initialization, full-screen overlay, large spinner + logo
4. **ProgressBar** - Determinate progress, file uploads, shows percentage

**When to Use**:
- Initial page load: SkeletonLoader
- Button click: Spinner (in button)
- Inline content: Spinner (inline)
- File upload: ProgressBar
- App startup: AppLoader

**Accessibility**: `role="status"` or `role="progressbar"`, `aria-live="polite"`, `aria-label`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-loaders--overview

---

## Layout

### Container

**Purpose**: Divide content into meaningful sections.

**Styling**: Background (white or gray), Border radius: 8px, Shadow: optional, Padding: min 12px

**Spacing**: Between containers: min 12px

**Content Safe Zone**: Minimum padding: 12px all sides

**Nesting**: Alternate background colors

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-container--overview

---

### Divider

**Purpose**: Separate content sections visually.

**Types**: Horizontal (default), Vertical

**Styling**: 1px solid, color: `--color-border-secondary`

**Usage**: Between list items, sections, in dropdown menus, in sidebars

**Spacing**: Margin: 12-24px around divider

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-divider--overview

---

## Utility

### Icon

**Purpose**: Visual symbols for actions, status, objects.

**Library**: 500+ icons

**Sizes**: 12px, 16px, 18px (default), 24px, 32px

**Colors**: Inherit from parent or explicit token

**Usage**: Icon-only buttons, leading/trailing icon, status indicators, navigation, empty states

**Accessibility**: Decorative: `aria-hidden="true"`, Meaningful: `aria-label` or `title`

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-icon--overview

---

### IconAI

**Purpose**: Indicate AI-powered features.

**Styling**: AI gradient (teal to purple), optional animation (pulse/shimmer)

**Sizes**: Same as Icon (12-32px)

**Usage**: AI feature buttons, AI-generated content markers, AI assistant indicators

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-iconai--overview

---

### Illustration

**Purpose**: Visual elements for communication and engagement.

**Types**: Simple (spot, 120px), Complex (hero, 200-400px)

**Style**: Consistent visual language, Emplifi brand colors, simple clean lines

**Usage**: Empty states, onboarding flows, error pages, feature introduction

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-illustration--overview

---

### Highlight

**Purpose**: Emphasize text (search results, mentions).

**Styling**: Background: yellow (#f6d84e), text: inherit, padding: subtle (2px horizontal)

**Usage**: Search term highlighting, @mentions, matched text in filters

**Accessibility**: Use `<mark>` element, ensure sufficient contrast

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-highlight--overview

---

### KeyboardShortcut

**Purpose**: Display keyboard shortcuts.

**Styling**: Key badges (rounded, gray background), monospace font, uppercase letters

**Format**: Single key: "F", Modifier + key: "Cmd + S", Multiple: "Shift + Alt + F"

**Common Modifiers**: Cmd/Ctrl, Shift, Alt/Option, Enter, Esc, Tab

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-keyboardshortcut--overview

---

### Dropdown / DropdownMenu

**Purpose**: Contextual actions menu.

**Trigger**: Button, icon button (three-dot menu), right-click

**Anatomy**: Trigger, Popover, Menu items, Dividers, Icons, Keyboard shortcuts

**Menu Items**: Action items, Sub-menus, Dividers, Disabled items, Destructive items (red)

**Sizing**: Min width: 160px, Max width: 320px, Height: auto (scrollable if >10 items)

**Behavior**: Click to open, click outside to close, ESC to close, arrow keys to navigate

**Best Practices**: Max 10 items, group related actions, destructive at bottom

**Accessibility**: `role="menu"`, `role="menuitem"`, `aria-expanded`, keyboard navigation

**Variants**: Dropdown (base), DropdownMenu, DropdownConfirm

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-dropdown--overview

---

### Ellipsis

**Purpose**: Truncate long text with ellipsis (...).

**Types**: End-line (default), Mid-line, Front-line

**Behavior**: CSS truncation, tooltip showing full text on hover

**Usage**: Table cells, card titles, list items, file names

**Accessibility**: Full text in `title` attribute or tooltip

**Storybook**: https://soul.dev.emplifi.io/?path=/docs/components-ellipsis--overview

---

## Component Index

### Complete List (Alphabetical)

AdsSourcePicker, AppHeader, AppLoader, Avatar, AvatarProfile, AvatarTeam, AvatarUser, AvatarChatbot, AvatarGroup, AvatarInfoGroup, AvatarProfileGroup, AvatarTeamGroup, AvatarUserGroup, AvatarInfo, AvatarProfileInfo, AvatarTeamInfo, AvatarUserInfo, AvatarLoader, Badge, BadgeAI, BadgePPD, BadgePriority, BadgePropagation, BadgeSentiment, Banner, Breadcrumb, BulkActionBar, Button, ButtonAdd, ButtonAI, ButtonGroup, ButtonReload, ButtonRemove, ButtonSentiment, SplitButton, ChartColor, Checkbox, CheckboxButton, CheckboxButtonExclude, CheckboxButtonGroup, CheckboxGroup, CheckboxInput, CheckboxWithIndeterminate, CheckboxTristate, ColorPicker, ColorPickerDropdown, ColorPickerItem, ColorPickerPopover, ColorPickerTrigger, ColorPickerTriggerButton, ColorPickerTriggerCaret, ComponentRenderer, Container, Countdown, DataTable, Divider, Dropdown, DropdownCaret, DropdownChevron, DropdownConfirm, DropdownMenu, Ellipsis, EllipsisAlt, EllipsisMiddle, EmptyState, EmptySearch, EmptyStateContent, EmptyStateError, EmptyStateFolder, EmptyStateSectionDown, EmptyStateWithAction, ErrorBoundary, FloatingPanel, FormCounter, FormError, FormHelp, FormInput, FormLabel, Highlight, HighlightText, Icon, IconAI, IconAnimation, IconAnimationAI, Illustration, InfoText, Input, InputGroup, InputGroupDecorator, ItemCount, KeyboardShortcut, LabelTag, LegacyIconPicker, LegacySelect, Link, LinkExt, ListItem, AppLoader, AvatarLoader, SkeletonLoader, Spinner, MenuButton, Modal, ModalAdvanced, ModalButton, ModalButtonCancel, ModalButtonClose, ModalButtons, ModalConfirmation, ModalContent, ModalHeader, ModalHeaderAutoCloseProgress, ModalInformative, ModalLabel, ModalLibrarian, ModalOverlay, Navigation, NumberInput, PlatformTag, Popper, Portal, PortalOverlay, PortalProvider, ProgressBar, Radio, RadioButtonCard, RadioGroup, RadioInput, SearchInput, SegmentedControl, SegmentedControlButton, Select, SidePanel, SkeletonLoader, Snackbar, Spinner, SplitButton, Tab, TabList, TabPanel, TeasingPage, TextArea, TextInput, Toggle, ToggleDefaultIndeterminate, ToggleTristate, Tooltip, TooltipBrief, TooltipCaveat, TooltipEllipsis, TooltipExplanatory, TooltipGuiding, URLInput, Utilities

---

## Additional Resources

- **SOUL Documentation**: https://soul.emplifi.io/
- **SOUL Storybook**: https://soul.dev.emplifi.io/
- **Figma Community**: https://figma.com/@emplifi
- **Design Blog**: https://medium.com/emplifi-design

For detailed design tokens, see [tokens-reference.md](tokens-reference.md).  
For design patterns, see [patterns-guide.md](patterns-guide.md).  
For content guidelines, see [content-guidelines.md](content-guidelines.md).
