# SOUL Design Patterns Guide

Comprehensive guide to design patterns and best practices in the SOUL Design System.

**Quick Navigation:**
- [Button Patterns](#button-patterns)
- [Color Usage](#color-usage)
- [Typography Patterns](#typography-patterns)
- [Modal Patterns](#modal-patterns)
- [Empty State Patterns](#empty-state-patterns)
- [Loading Patterns](#loading-patterns)
- [Action Patterns](#action-patterns)
- [Overflow Patterns](#overflow-patterns)
- [Layout Patterns](#layout-patterns)
- [AI Patterns](#ai-patterns)

---

## Button Patterns

### Emphasis Hierarchy

**Core Rule**: **One high-emphasis button per layout** (strict)

### Button Hierarchy (Most to Least Emphasis)

1. **Primary** - Highest emphasis
   - Blue background
   - White text
   - ONE per layout
   - Main call-to-action

2. **Danger** - High emphasis (negative)
   - Red background
   - White text
   - Destructive actions
   - Often in confirmation modals

3. **Request** - High emphasis (positive)
   - Green background
   - White text
   - Demo, contact, buy requests

4. **Secondary (Light/Ghost)** - Medium emphasis
   - Light background or transparent
   - Dark text
   - Cancel, Close, alternative actions

5. **Tertiary (Invisible)** - Low emphasis
   - Transparent background
   - Subtle hover
   - Toolbar, table, dashboard actions

6. **Link** - Lowest emphasis
   - No background
   - Link styling
   - Secondary actions

### Layout Examples

**Single action (common)**:
- Primary button only
- Example: "Save" on settings page

**Two actions (very common)**:
- Primary + Secondary
- Example: "Save changes" (primary) + "Cancel" (secondary ghost)

**Multiple actions (complex)**:
- ONE Primary + multiple Secondary/Tertiary
- Example: Bulk action bar with "Delete" (danger) + "Archive" (ghost) + "Export" (ghost)

**Many actions (dashboard/toolbar)**:
- All Tertiary/Invisible
- Example: Table row actions (edit, duplicate, delete all invisible)

### Button Placement

**Modals**:
- Right-aligned
- Primary on right
- Secondary on left of primary
- Spacing: 12px between buttons

**Forms**:
- Bottom of form
- Right-aligned
- Primary submit + secondary cancel

**Toolbars**:
- Left or right aligned
- Tertiary/invisible for all
- Icon-only with tooltips acceptable

### Button Labels

**Do**:
- Action-oriented: "Create campaign"
- Specific: "Delete 3 items"
- Concise: 1-3 words
- Sentence case: "Save changes"

**Don't**:
- Generic: "Submit", "OK"
- Vague: "Continue"
- Long: "Click here to save your changes"
- Title case: "Save Changes"

---

## Color Usage

### Core Principles

1. **Gray as foundation**
   - Main palette for structure
   - Use for backgrounds, borders, text hierarchy

2. **Blue for interaction**
   - Primary actions
   - Links
   - Interactive elements
   - Focus states

3. **Semantic colors have meaning**
   - **Red**: Danger, error, destructive
   - **Green**: Success, positive actions
   - **Yellow**: Warning, caution
   - **Blue**: Info, neutral actions
   - **Purple**: New features, announcements, AI

4. **Decorative color only in illustrations**
   - Don't use color alone to convey meaning
   - Always pair with text/icon

### Color by Context

**Backgrounds**:
- Level 0: Gray (#f3f3f5) - Page background
- Level 1: White (#ffffff) - Cards, panels
- Level 2: Gray (#f3f3f5) - Nested containers
- Navigation: Dark (#111114)

**Text**:
- Primary: Dark gray (#24242b) - Body text
- Secondary: Medium gray (#505057) - Supplemental
- Tertiary: Light gray (#9d9da0) - Placeholders
- Interactive: Blue (#003beb) - Links

**Borders**:
- Primary: rgba(0,0,0,0.2) - Default
- Secondary: rgba(0,0,0,0.1) - Subtle
- Status: Semantic colors (success, error, etc.)

**Status Indicators**:
- Success: Green
- Error: Red
- Warning: Yellow
- Info: Blue
- New/Recent: Purple

### Light vs Dark Modes

**Light Mode** (default):
- Gray backgrounds (10-40)
- Dark text (110-60)
- White containers

**Dark Mode**:
- Dark backgrounds (120-90)
- Light text (10, 70, 80)
- Dark containers

---

## Typography Patterns

### Hierarchy Rules

1. **One H1 per page** (critical rule)
   - Main page title only
   - 26px, Medium weight (500)

2. **Semantic heading structure**
   - H1 → H2 → H3 (don't skip levels)
   - Use for structure, not styling

3. **Body text default**
   - Body Medium (13px) for most content
   - Body Small (11px) for compact layouts

### Type Scale Usage

| Level | Use Case | Example |
|-------|----------|---------|
| **H1** | Page title | "Campaign Settings" |
| **H2** | Section title | "General Information" |
| **H3** | Subsection title | "Targeting Options" |
| **H4** | Small section label | "Advanced Settings" |
| **H5** | Overline text | "STEP 1 OF 3" |
| **Body Medium** | Default text | Descriptions, content |
| **Body Small** | Compact layouts | Table cells, small cards |
| **Helper** | Help text | Hints, captions |

### Content Hierarchy

**Visual hierarchy** (largest to smallest):
1. Page title (H1)
2. Primary content (body medium)
3. Secondary content (body small, gray)
4. Tertiary content (helper, light gray)

**Color hierarchy** (darkest to lightest):
1. Primary text: `--color-on-layer-primary`
2. Secondary text: `--color-on-layer-secondary`
3. Tertiary text: `--color-on-layer-tertiary`

### Special Cases

**Buttons**: 13px, Semi-Bold (600)  
**Input labels**: 11px, Semi-Bold (600)  
**Badges**: 10px, Bold (700), UPPERCASE  
**Platform tags**: 8px, Extra Bold (800), UPPERCASE

---

## Modal Patterns

### When to Use Modals

**Use for**:
- Critical decisions (delete, remove)
- Important information requiring acknowledgment
- Complex forms that need focus
- Multi-step workflows

**Don't use for**:
- Non-critical messages (use Snackbar)
- Auxiliary content (use SidePanel)
- Permanent messages (use Banner)
- Simple confirmations that can be inline

### Modal Types

#### 1. Confirmation Modal

**Purpose**: Confirm or cancel a critical action

**Structure**:
- Headline: Clear, specific ("Delete 3 items?")
- Description: Explain consequences
- Primary action: Danger button ("Delete")
- Secondary action: Ghost button ("Cancel")

**Best for**:
- Destructive actions
- Irreversible operations
- High-risk decisions

**Example**:
```
Headline: "Delete campaign?"
Description: "This action cannot be undone. The campaign and all its data will be permanently deleted."
Actions: [Delete (danger)] [Cancel (ghost)]
```

#### 2. Informative Modal

**Purpose**: Show important information

**Structure**:
- Headline: What user needs to know
- Description: Details
- Single action: Primary button ("I understand", "Got it")

**Best for**:
- Feature announcements
- Important updates
- Policy changes

**Example**:
```
Headline: "New AI features available"
Description: "We've added AI-powered content generation to help you create better posts faster."
Action: [Got it (primary)]
```

#### 3. Advanced Modal

**Purpose**: Complex forms or workflows

**Structure**:
- Header: Title, optional tabs, optional close
- Content: Forms, fields, lists (scrollable)
- Footer: Actions (primary + secondary)

**Best for**:
- Create/edit workflows
- Multi-step forms
- Complex configurations

**Example**:
```
Header: "Create new campaign"
Content: [Form fields...]
Actions: [Create (primary)] [Save as draft (ghost)] [Cancel (ghost)]
```

### Modal Behavior

**Opening**:
- 200ms dissolve fade-in
- Focus first interactive element
- Trap keyboard focus

**Closing**:
- 200ms dissolve fade-out
- Return focus to trigger
- Clear form data (if appropriate)

**Dismissal methods**:
- Close button (X, top-right)
- Cancel button (explicit)
- ESC key
- Click outside (optional, off by default for forms)

---

## Empty State Patterns

### Attention Levels

#### High Attention Empty State

**When to use**:
- First use (onboarding)
- Error state requiring action
- Feature introduction
- Action strongly recommended

**Components**:
- **Illustration** (120-200px) - Engaging visual
- **Headline** (H2, 20px) - Clear, concise (3-5 words)
- **Description** (body, 1-2 sentences) - Helpful, actionable
- **Primary CTA** (button) - Specific action
- **Secondary action** (optional, text link)

**Spacing**:
- Between elements: 36px
- Below empty state: 72px

**Example**:
```
[Illustration: Campaign rocket]
Headline: "Create your first campaign"
Description: "Start reaching your audience with targeted social media campaigns."
CTA: [Create campaign (primary)]
Secondary: "Learn about campaigns"
```

#### Low Attention Empty State

**When to use**:
- No data yet (will populate)
- Filtered results (no matches)
- Temporary state
- Optional content

**Components**:
- **Icon** (48px, gray) - Simple, relevant
- **Headline** (H3, 16px) - Clear statement
- **Description** (optional, body) - Brief explanation

**No CTA**: State will resolve naturally

**Example**:
```
[Icon: Search]
Headline: "No results found"
Description: "Try adjusting your filters or search terms."
```

### Content Guidelines

**Headlines**:
- Concise: 3-5 words
- Clear: "No campaigns yet" not "Nothing here"
- Positive tone: "Create your first..." not "You haven't created..."

**Descriptions**:
- 1-2 sentences maximum
- Helpful: Explain what to do next
- Avoid blame: "No results" not "You didn't find anything"

**CTAs**:
- Specific: "Create campaign" not "Get started"
- Action-oriented: Verb + noun
- Relevant: Match the context

---

## Loading Patterns

### Choosing the Right Loader

| Scenario | Loader Type | Reason |
|----------|-------------|--------|
| **Initial page load** | SkeletonLoader | Shows structure, feels faster |
| **Button click** | Spinner (in button) | Clear feedback, disable button |
| **Inline content** | Spinner (inline, 16px) | Compact, non-blocking |
| **File upload** | ProgressBar | Show progress percentage |
| **Tab switch** | SkeletonLoader or Spinner | Depends on content complexity |
| **App startup** | AppLoader | Full-screen, branded |
| **Infinite scroll** | Spinner (bottom) | Load more indicator |
| **Search results** | SkeletonLoader | Show result structure |

### Skeleton Loader Best Practices

**Structure**:
- Match final content layout
- Gray rectangles for text (varying widths)
- Circles for avatars
- Rectangles for images
- Consistent spacing

**Animation**:
- Shimmer effect (light sweep, left to right)
- Duration: 1.5s per sweep
- Subtle, not distracting

**Usage**:
```
[Avatar circle] [Text line (80%)] [Text line (60%)]
[Avatar circle] [Text line (90%)] [Text line (50%)]
[Avatar circle] [Text line (70%)] [Text line (65%)]
```

### Spinner Patterns

**Sizes**:
- 16px: Inline, buttons
- 24px: Small sections
- 32px: Default, medium sections
- 48px+: Full-screen, app loader

**Colors**:
- Default: Blue (primary)
- On dark: White
- Status-specific: Green (success), red (error)

**Duration guidelines**:
- Show immediately (no delay)
- <3s: Expected duration for spinner
- >3s: Consider progress bar with percentage

### Progress Bar Patterns

**Use when**:
- Progress is measurable (0-100%)
- Operation takes >3 seconds
- User needs to know progress

**Updates**:
- Update frequently (every 100-500ms)
- Smooth animation between values
- Show percentage text if space allows

**Completion**:
- Brief pause at 100% (300ms)
- Success message or auto-dismiss
- Clear indication of completion

---

## Action Patterns

### Remove vs Delete vs Disconnect

Critical distinction for destructive actions.

#### Remove

**Meaning**: Reversible, item still exists elsewhere

**Use for**:
- Remove from list/collection
- Remove tag from post
- Remove user from team

**Confirmation level**: Low  
**UI**: Inline confirmation dropdown or snackbar with undo

**Example**: "Remove from favorites" (item still exists)

#### Delete

**Meaning**: Permanent, item destroyed

**Use for**:
- Delete file
- Delete post
- Delete account

**Confirmation level**: High  
**UI**: Confirmation modal

**Example**: "Delete campaign" (cannot be recovered)

#### Disconnect

**Meaning**: Break connection, both items remain

**Use for**:
- Disconnect social account
- Disconnect integration
- Disconnect data source

**Confirmation level**: Medium  
**UI**: Confirmation modal or dropdown (depends on impact)

**Example**: "Disconnect Facebook account" (account remains, connection breaks)

### Confirmation Patterns

#### High-Impact (Modal)

**When**:
- Permanent deletion
- Affects multiple items
- Cannot be undone
- High risk

**Pattern**:
- Confirmation modal
- Danger button
- Clear explanation of consequences

#### Low-Impact (Dropdown Confirm)

**When**:
- Reversible action
- Single item
- Can be undone
- Low risk

**Pattern**:
- Confirmation dropdown
- Inline confirmation
- Snackbar with undo option

### Common Actions

**Add vs Create**:
- **Add**: Existing item → "Add to favorites"
- **Create**: New item → "Create campaign"

**Save vs Apply**:
- **Save**: Persist changes → "Save changes"
- **Apply**: Apply settings → "Apply filters"

**Cancel vs Close**:
- **Cancel**: Discard changes, return to previous
- **Close**: Acknowledge, no changes to discard

---

## Overflow Patterns

### Text Truncation

#### End-Line Ellipsis (Most Common)

**Pattern**: "Long text that gets truncated at the end..."

**Use for**:
- Single-line text
- Table cells
- Card titles
- List items

**Implementation**:
```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

**Accessibility**: Tooltip showing full text on hover

#### Mid-Line Ellipsis

**Pattern**: "long-filename-that-is...very-long.pdf"

**Use for**:
- File names
- URLs
- Paths

**Keep**: Start (first N chars) + end (last M chars)

**Example**: "extremely-long-file...document.pdf"

#### Front-Line Ellipsis (Rare)

**Pattern**: "...end of text"

**Use for**:
- Timestamps (keep most recent time)
- Sequences where end matters

### Show More Pattern

**When to use**:
- Long descriptions
- Comment threads
- Lists with many items

**Collapsed state**:
- Show first N lines (typically 2-3)
- "Show more" link or button

**Expanded state**:
- Show all content
- "Show less" link or button (optional)

**Implementation notes**:
- Use `max-height` + overflow
- Smooth transition (270ms)
- Remember state (per user or per session)

### Grouped Truncation

**Use for**: Multiple truncated elements

**Pattern**:
- Show first 3-5 items
- "+N more" indicator
- Click to expand or show in tooltip

**Example**: Tags  
"Design, Marketing, Analytics, +3 more"

---

## Layout Patterns

### Breakpoint Strategy

**Breakpoint**: 1560px

**Small viewports** (≤1559px):
- App padding: 24px (`--space-6`)
- Reduced spacing
- Single-column forms
- Collapsed navigation

**Large viewports** (≥1560px):
- App padding: 36px (`--space-8`)
- Comfortable spacing
- Multi-column forms (if appropriate)
- Expanded navigation

### Content Width

**Optimal reading width**: 600-800px (60-75 characters per line)

**Maximum content width**: 1778px  
**Minimum content width**: 932px

**Layout sections**:
1. Platform navigation (60px collapsed, 204px expanded)
2. Section navigation (240px, optional)
3. Content area (responsive)

### Container Patterns

**Padding**:
- Minimum: 12px (`--space-4`)
- Comfortable: 24px (`--space-6`)
- Spacious: 36px (`--space-8`)

**Spacing**:
- Between containers: 12px minimum
- Between sections: 24-36px

**Nesting**:
- Alternate backgrounds (white on gray, gray on white)
- Reduce padding in nested (use --space-4)

### Grid Patterns

**Form grids**:
- 12-column grid
- Responsive (stack on mobile)
- Consistent gutters (24px)

**Card grids**:
- 2-4 columns (based on viewport)
- Equal height cards (flexbox)
- Consistent spacing (24px gaps)

---

## AI Patterns

### 8 AI Pattern Types

Based on Emplifi AI guidelines, documented in SOUL Design System.

#### 1. User-Initiated AI

**Description**: User explicitly triggers AI  
**Examples**: "Generate caption", "Suggest hashtags"

**UI Pattern**:
- AI button (gradient) or menu item
- Clear label: "Generate with AI"
- IconAI for visual distinction

#### 2. AI Recommendations

**Description**: AI suggests options, user chooses  
**Examples**: Content recommendations, optimal post times

**UI Pattern**:
- Recommendation cards/list
- "AI recommended" badge
- Accept/dismiss actions

#### 3. Continuous AI Assistance

**Description**: AI works alongside user  
**Examples**: Real-time grammar check, sentiment analysis

**UI Pattern**:
- Inline indicators
- Unobtrusive placement
- Toggle on/off

#### 4. AI Automation

**Description**: AI performs tasks automatically  
**Examples**: Auto-tagging, auto-scheduling

**UI Pattern**:
- Settings toggle
- "Powered by AI" label
- Review/edit results

#### 5. Predictive AI

**Description**: AI predicts outcomes  
**Examples**: Engagement predictions, performance forecasts

**UI Pattern**:
- Prediction badges/labels
- Confidence indicators
- Explanation tooltips

#### 6. Conversational AI

**Description**: Chat with AI assistant  
**Examples**: Chatbot, AI helper

**UI Pattern**:
- Chat interface
- Avatar (AvatarChatbot)
- Clear AI identification

#### 7. AI Search

**Description**: Natural language search  
**Examples**: "Find posts about summer"

**UI Pattern**:
- Search input with AI badge
- Suggested queries
- Refined results

#### 8. AI Insights

**Description**: AI-generated insights and analysis  
**Examples**: Trend analysis, audience insights

**UI Pattern**:
- Insight cards
- "AI insight" badge
- Data visualization

### AI Visual Language

**Identification**:
- IconAI (gradient: teal to purple)
- BadgeAI component
- "AI" or "Powered by AI" labels

**Colors**:
- AI gradient: `--color-ai-gradient-start` (teal) to `--color-ai-gradient-end` (purple)
- Use for AI-specific features

**Animation**:
- Subtle pulse/shimmer for AI processing
- Smooth transitions

**Tone**:
- Helpful, not intrusive
- Clear when AI is involved
- Explainable (show reasoning when possible)

### AI Principles

1. **Simple**: Easy to understand and use
2. **Safe**: Privacy-first, secure
3. **Explainable**: Show how/why AI made decisions
4. **Right tool**: Use AI where it adds value
5. **Accelerate**: AI assists, doesn't replace humans

---

## Selection Patterns

### Single vs Multiple Selection

**Single selection**:
- Use: Radio buttons (2-7 options) or Select (8+)
- Visual: Only one item highlighted
- Behavior: Selecting new item deselects previous

**Multiple selection**:
- Use: Checkboxes
- Visual: Multiple items highlighted
- Behavior: Independent toggles

### Bulk Selection

**Select all**:
- Checkbox in header (table) or toolbar
- States: Unchecked, checked, indeterminate
- Indeterminate: Some (not all) selected

**Bulk actions**:
- Bulk action bar appears when items selected
- Show count: "3 items selected"
- Actions relevant to selection
- Clear selection option

**Pattern**:
```
[Bulk Action Bar]
"3 items selected"
[Delete (danger)] [Archive (ghost)] [Clear selection (link)]
```

---

## Additional Resources

- **SOUL Documentation**: https://soul.emplifi.io/
- **SOUL Storybook**: https://soul.dev.emplifi.io/
- **AI Guidelines**: https://soul.emplifi.io/latest/ai-and-no-code-guidelines

For design tokens, see [tokens-reference.md](tokens-reference.md).  
For components, see [components-catalog.md](components-catalog.md).  
For content, see [content-guidelines.md](content-guidelines.md).
