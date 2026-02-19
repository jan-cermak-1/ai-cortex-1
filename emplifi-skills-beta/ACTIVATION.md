# How to Activate Emplifi Skills

This folder is located at `~/.cursor/emplifi-skills-beta/` and is available for all Cursor projects.

## Option 1: Attach in Chat (on demand)

When working with Emplifi, reference files in chat:

```
@emplifi-skills-beta/context/product-reference.md
@emplifi-skills-beta/roles/product-manager.md
@emplifi-skills-beta/soul-design-system/SKILL.md
```

If the folder is not in your workspace, use the full path:
`/Users/jancermak/.cursor/emplifi-skills-beta/context/product-reference.md`

## Option 2: Add Folder to Workspace (recommended for Emplifi projects)

1. **File → Add Folder to Workspace...**
2. Select: `/Users/jancermak/.cursor/emplifi-skills-beta`
3. Save the workspace (File → Save Workspace As...)

Now you can use `@emplifi-skills-beta/...` in chat without full paths.

## Option 3: Use the Global Rule

A rule is in `~/.cursor/rules/emplifi-skills.mdc`. To attach it:

1. In Cursor chat, click the **@** button or type `@`
2. Choose **Rules** (or **Cursor Rules**)
3. Select **emplifi-skills**

The rule tells the AI to read from this folder when doing Emplifi work.

## Option 4: Always Apply (for Emplifi-heavy work)

To always load Emplifi context in every project:

1. Open `~/.cursor/rules/emplifi-skills.mdc`
2. Change `alwaysApply: false` to `alwaysApply: true`
3. Save

The AI will then use Emplifi knowledge in all conversations.

## Option 5: Project-Specific Rule

For projects that are always Emplifi-related, copy the rule to the project:

```bash
cp ~/.cursor/rules/emplifi-skills.mdc .cursor/rules/
```

Then edit `.cursor/rules/emplifi-skills.mdc` and set `alwaysApply: true` so it applies to that project only.
