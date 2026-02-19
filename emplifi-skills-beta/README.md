# Emplifi Skills Beta

> Shared knowledge base for working with the Emplifi platform — for Cursor and AI assistants

This folder is meant to be shared with colleagues. Anyone can add it to their Cursor project and the AI will have access to product knowledge, design system, and roles.

## Structure

```
emplifi-skills-beta/
├── README.md              ← this file
├── INDEX.md               ← quick overview
├── soul-design-system/   ← everything about design (SOUL)
│   ├── SKILL.md
│   ├── tokens-reference.md
│   ├── components-catalog.md
│   ├── patterns-guide.md
│   ├── content-guidelines.md
│   └── assets/icons/      ← 1,014 icons
├── roles/                 ← roles for AI
│   ├── product-manager.md
│   ├── product-designer.md
│   └── developer.md
└── context/               ← contextual information
    ├── product-reference.md
    ├── pm-workflows.md
    ├── roadmap-strategy/
    └── workflow-scenarios/
```

## How to use in Cursor

### If installed globally (`~/.cursor/emplifi-skills-beta/`)

See **[ACTIVATION.md](ACTIVATION.md)** for activation options:
- Attach in chat with `@`
- Add folder to workspace
- Use the global rule `emplifi-skills`
- Set `alwaysApply: true` for always-on

### If copied into a project

1. Add a rule in `.cursor/rules/` that references this folder
2. Reference files in chat: `@emplifi-skills-beta/context/product-reference.md`

## Quick start by role

| I am… | Start with… |
|-------|--------------|
| **Product Manager** | `roles/product-manager.md` + `context/pm-workflows.md` |
| **Product Designer** | `roles/product-designer.md` + `soul-design-system/SKILL.md` |
| **Developer** | `roles/developer.md` + `soul-design-system/tokens-reference.md` |

## Resources

- [docs.emplifi.io](https://docs.emplifi.io/)
- [app.emplifi.io](https://app.emplifi.io/)
- [soul.emplifi.io](https://soul.emplifi.io/)

---

**Last updated:** 2026-02-19
