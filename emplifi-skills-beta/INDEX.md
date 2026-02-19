# Emplifi Skills Beta — Quick Index

> Shared knowledge base for Cursor and AI assistants

## Structure

```
emplifi-skills-beta/
├── soul-design-system/   ← Design (SOUL tokens, components, icons)
├── roles/                 ← Roles (PM, Designer, Developer)
└── context/               ← Context (product, roadmap, scenarios)
```

## Quick file overview

### soul-design-system/ (design)
| File | Content |
|------|---------|
| SKILL.md | Main design system guide |
| tokens-reference.md | Design tokens (colors, spacing, typography) |
| components-catalog.md | 200+ components |
| patterns-guide.md | Design patterns |
| content-guidelines.md | UX writing |
| assets/icons/ | 1,014 SVG icons |

### roles/ (roles)
| File | For |
|------|-----|
| product-manager.md | Product Manager |
| product-designer.md | Product Designer |
| developer.md | Developer |

### context/ (context)
| File/Folder | Content |
|-------------|---------|
| product-reference.md | Modules, data architecture, AI capabilities |
| pm-workflows.md | PM Decision Framework, constraints |
| roadmap-strategy/ | Positioning, releases, ROI, vision 2026 |
| workflow-scenarios/ | UA dashboards, E2E scenarios, Listening |

## When to use what

| I need… | Where to look |
|---------|---------------|
| Design tokens, components | soul-design-system/ |
| PM framework, constraints | context/pm-workflows.md |
| Module details, AI | context/product-reference.md |
| Roadmap, releases | context/roadmap-strategy/ |
| UA dashboards, workflows | context/workflow-scenarios/ |
| Role definition for AI | roles/ |

## Using in Cursor

1. Add the folder to your project
2. Reference files: `@emplifi-skills-beta/...`
3. Set up a rule in `.cursor/rules/` for automatic use

---

**Last updated:** 2026-02-19
