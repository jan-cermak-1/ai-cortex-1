# SOUL Design System — Cursor AI Skill

Complete SOUL Design System documentation for AI assistants in Cursor.

## What is this?

This is a **Cursor AI Skill** — a specialized knowledge base that teaches the AI assistant (Claude) everything about Emplifi's SOUL Design System. When you work in Cursor on UI/UX projects, Cursor automatically uses this knowledge.

## Contents

### 📘 [SKILL.md](SKILL.md) (660 lines)
**Main skill file** — Quick reference guide containing:
- SOUL Design System overview
- Design tokens (colors, spacing, typography, shadows, radius, motion)
- Component overview (200+)
- Design patterns and best practices
- Content guidelines
- Accessibility standards
- Links to detailed documentation

**When to use**: Start here! Contains all the essentials in compact form.

### 🎨 [tokens-reference.md](tokens-reference.md) (580 lines)
**Complete design tokens reference** containing:
- All colors (100+ tokens): Layer colors, text colors, border colors, button colors, status colors, AI gradient, platform colors, gray scale
- Spacing scale (14 tokens: 0px to 120px)
- Typography scale (font family, type scale, font features)
- Border radius (5 levels)
- Shadows/elevation (4 levels + inner)
- Motion (duration, easing, position transforms)
- CSS usage examples

**When to use**: When you need exact CSS custom property values or are looking for the right token for specific use.

### 🧩 [components-catalog.md](components-catalog.md) (759 lines)
**Catalog of all SOUL components** (200+ components) organized by categories:
- **Navigation**: AppHeader, Breadcrumb, Link, Tab
- **Forms**: Button (8 types), Checkbox, Radio, Toggle, TextInput, TextArea, NumberInput, Select, SearchInput
- **Data Display**: Badge, Avatar, AvatarGroup, AvatarInfo, DataTable, ProgressBar, ItemCount, PlatformTag
- **Feedback**: Modal (3 types), SidePanel, Snackbar, Tooltip (5 types), EmptyState, Banner, Loaders
- **Layout**: Container, Divider
- **Utility**: Icon, IconAI, Illustration, Highlight, Dropdown, Ellipsis

For each component:
- Purpose and when to use / not use
- Anatomy (component parts)
- Variants and states
- Key props
- Accessibility guidelines
- Storybook link

**When to use**: When implementing UI and need to know which component to use and how to configure it correctly.

### 📐 [patterns-guide.md](patterns-guide.md) (864 lines)
**Design patterns and best practices** covering:
- **Button patterns**: Emphasis hierarchy (IMPORTANT: one high-emphasis button per layout!)
- **Color usage**: When to use which color, semantic colors
- **Typography patterns**: Hierarchy rules (one H1 per page!)
- **Modal patterns**: When to use Confirmation/Informative/Advanced modal
- **Empty state patterns**: High vs low attention
- **Loading patterns**: When to use Spinner vs SkeletonLoader vs ProgressBar
- **Action patterns**: Remove vs Delete vs Disconnect (critical differences!)
- **Overflow patterns**: Truncation, show more, grouped
- **Layout patterns**: Breakpoints, spacing, container nesting
- **AI patterns**: 8 types of AI interaction patterns

**When to use**: When making design decisions, unsure which pattern to use, or need best practice for specific situations.

### ✍️ [content-guidelines.md](content-guidelines.md) (644 lines)
**UX writing and content guidelines** containing:
- **Voice & Tone**: Friendly, professional, inclusive — how to write like Emplifi
- **Word choices**: Add vs Create, Remove vs Delete vs Disconnect, View vs See vs Show, Edit vs Manage, etc.
- **Grammar rules**: Sentence case, active voice, plain language
- **UX writing patterns**: Button labels, error messages, empty states, input fields, success messages, loading states, confirmation dialogs
- **Component-specific guidelines**: How to write for modals, tabs, tooltips, badges, links, breadcrumbs, search placeholders

**When to use**: When writing UI text (button labels, error messages, empty states, tooltips, etc.) and want it to sound professional and consistent.

### 🎨 [assets/](assets/) (1014 SVG icons)
**SOUL icon library** containing:
- **Complete icon collection**: All 1014 UI icons from SOUL Design System
- **Categories**: Navigation, actions, status, social media, content, people, analytics, AI features, grades/ratings
- **Format**: Optimized SVG files (total 4.1MB)
- **Documentation**: [ICONS-INDEX.md](assets/ICONS-INDEX.md) with categorized listing, usage examples, and implementation guidelines

**When to use**: Visual reference for icons, offline access to icon library, sharing with team.

## How to use

### For AI assistant (Cursor)

1. **Automatically**: Cursor automatically detects when you're working on SOUL/Emplifi projects and uses this knowledge
2. **Manually**: You can reference files directly: `@skills/soul-design-system/SKILL.md`

### For humans (team)

1. Open any `.md` file in your editor or on GitHub
2. All files are readable markdown with clear structure
3. Use as reference documentation when implementing UI

## File structure

```
soul-design-system/
├── README.md                   # This file (guide)
├── SKILL.md                    # Main skill file (start here)
├── tokens-reference.md         # All design tokens
├── components-catalog.md       # Catalog of all components
├── patterns-guide.md          # Design patterns and best practices
├── content-guidelines.md      # UX writing guidelines
└── assets/
    ├── ICONS-INDEX.md         # Icon library documentation
    └── icons/                 # 462 SVG icons from SOUL
```

## Statistics

- **Total lines**: 3,507+ (documentation)
- **Components documented**: 200+
- **Design tokens**: 100+
- **Design patterns**: 15+
- **AI patterns**: 8
- **SVG icons**: 1,014 (4.1MB)

## Sources

This documentation is created from:
- **SOUL Docs**: https://soul.emplifi.io/
- **SOUL Storybook**: https://soul.dev.emplifi.io/
- **soul-tokens.css**: Complete design tokens from project
- **EMPLIFI-CONTEXT.md**: Product context

## To install in Cursor

If you want to use this skill in your Cursor:

1. Copy the `soul-design-system/` folder to `~/.cursor/skills/`
2. Cursor will automatically load the skill on next launch
3. Skill activates automatically when working with SOUL components

```bash
# Simple installation
cp -r ./skills/soul-design-system ~/.cursor/skills/
```

## Updates

- **Version**: 1.0 (2026-02-19)
- **Source websites**: soul.emplifi.io, soul.dev.emplifi.io
- **Status**: Complete documentation of all design tokens, components, patterns and guidelines

## Contact

For questions about SOUL Design System:
- **Email**: soul@emplifi.io
- **Slack**: #soul-design-system
- **Docs**: https://soul.emplifi.io/
- **Storybook**: https://soul.dev.emplifi.io/

---

**Tip**: Start with `SKILL.md` for quick overview, then dive into specific files as needed!
