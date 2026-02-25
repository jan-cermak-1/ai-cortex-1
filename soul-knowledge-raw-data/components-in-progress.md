# SOUL Components (In Progress)

## Accordion Box

#### Component checklist

Design: Planned | React: Planned

### Box

### Overview

The accordion is placed in the [container](https://soul.emplifi.io/latest/components/components/container/usage-BuQm277V).

### Anatomy

1. Body: the section of content associated with an accordion title. Any type of content can be placed here
2. Description: Description can be shown in open state or placed in [?] after headline
3. Chevron: Indicates if the item is open or closed.
4. Actions: A place reserved for actions. The maximum number that can be here are 2.
5. Title: contains the section title and is control for revealing the item. Anything from text title to Avatar to link can be placed here. There is also the possibility to place a badge, icon etc..

### Behavior

#### Triggers

The accordion can be opened both by clicking on the whole box (1) and by clicking on the arrow(2). It is also possible to open the accordion using the toggle (3).

#### Scrollbar

If the user has not started scrolling, the content is aligned without padding just below the box (1). The moment he starts scrolling, a divider (2) appears under the box.

#### Counter

When there is some possibility of adding content inside the body, so if the designer wants, he can show the number of items inside the body in the closed state.

#### Truncation

If there is a text or link in the title, it cannot be two lines. In this case, use a truncation at the end of the text.

### States

### Dimensions

### Examples

Here are interactive examples of the use and behavior of the accordion:

---

## Accordion Group

#### Component checklist

Design: Planned | React: Planned

An Accordion Group is a set of accordion components that work together to enhance the user interface's navigation and organization. This section describes how accordions behave when grouped together in a UI context, such as in navigation menus or content sections.

### Behavior

### Single Open Accordion

Only one accordion can be open at a time within the group. When a new accordion is opened, the currently open accordion automatically closes.

#### Use case

When you want users to focus on one section at a time.

#### Advantages

Promotes a more streamlined and focused reading or interaction experience, and helps prevent information overload.

### Multiple Open Accordions

Multiple accordions can be open simultaneously within the group. Each accordion operates independently of the others.

#### Use case

When users may need to reference multiple sections simultaneously.

#### Advantages

Allows users to see and compare content across multiple sections without closing others. This is useful when information in different sections is related or complementary.

## Nested accordions

In some complex UI scenarios, you may need to nest an accordion within another accordion. This section describes how nested accordions behave and how to manage their interactions to ensure a seamless user experience

### Individual Operation

- The opening and closing of a nested accordion do not affect the state of the parent accordion or any sibling accordions
- Each nested accordion operates independently of its parent accordion.

### Controlled State

- This allows for precise control over which accordions are open or closed, providing flexibility in complex UI structures.
- The state of both the parent and nested accordions can be managed by a parent component or external state management.

## Additional Tips

- Visual Hierarchy: Use multiple open accordions if you want users to see and compare more information at once. Use a single open accordion if you want to emphasize the sequence or hierarchy of information.
- Information Availability: Consider how much information you want to display to users at once. If there is a lot of information, a single open accordion might be better.
- Consistency: Ensure the behavior of accordions is consistent throughout the application so that users know what to expect.
- Usability Testing: Test both variants with users to determine which variant is more user-friendly for the given context.

---

## Banner

#### Component checklist

Design: Review required | React: Planned

The documentation page is in progress

---

## Brief Tooltip

#### Component checklist

Design: In development | React: In development

Provides a brief, contextual explanation of a button's action to help users understand what will happen when they click.

Tooltips are text containers that provide users with additional information about a particular product area. They appear when the user hovers or focuses on a UI element, such as a button, an icon, or an underlined word.

The message inside the tooltip should be helpful and provide additional context. Tooltips shouldn't be relied on for essential information.

### Variants

We differentiate tooltips based on the following:

1. their function: brief tooltip, explanatory tooltip, guiding tooltip, caveat tooltip, and chart tooltip.
2. their interactivity: definition tooltip and interactive tooltip.

---

## Tooltips based on interactivity

### Definition tooltip

The definition tooltip provides additional help or explains terms or items. You may use it to extend the information of a UI element or explain a word embedded in a longer text.

Guide to definition tooltips

- Only use them with text elements that are compounds of two letters or more.
- Use the definition tooltips to explain proper nouns, technical terms, or acronyms.
- Make the definition tooltip brief and read-only plain text.

Types

- Chart tooltips
- Caveat tooltips
- Explanatory tooltips
- Brief tooltips

### Interactive tooltip

Interactive tooltips may include rich text and contain interactive elements such as buttons or links.

The best use of the interactive tooltip is for onboarding experiences and product tours. In other cases, avoid using interactive content in tooltips.

Guide to interactive tooltips

- Never use only interactive elements, and always consider the context the user needs before clicking a link or a button.
- Use the interactive tooltips to lead the user to additional content, for example, when explaining how a metric is calculated or data acquired.

Types of interactive tooltips

- Guiding tooltip
- Caveat tooltip with a button or link
- Explanatory tooltip with a button or a link

---

## Tooltips based on function

Given a tooltip's complexity or usual usage, we differentiate the types of tooltips listed below. Use the one that best fits your context.

### Brief tooltip

Use brief tooltips to explain icons and buttons with icons.

Brief tooltips consist of one or two words; if you need longer, more complex tooltips, use the explanatory tooltip.

### Explanatory tooltip

Use explanatory tooltips when there's a need for comprehensive information, for example, to explain metrics or disabled components. When defining a button with an icon or an icon, use the brief tooltip.

The explanatory tooltip can't include an interactive element (link, button, etc.).

Technical aspects of explanatory tooltips

- The text inside a tooltip is always aligned to the left.
- The maximum width of a tooltip is 480 px, but the actual width should always be defined by the design of the area and depend on content and context.

### Guiding tooltip

Use guiding tooltips to explain or highlight new features, and to walk users through the product.

For walkthroughs and onboarding, use the guiding tooltips together with a pulsar element.

Depending on the context, you can use a single tooltip or design a multi-step tooltip combined with buttons.

### Caveat tooltip

Use caveat tooltips to draw attention to changes that may have happened without the users' knowledge.

Use caveat tooltips together with a label or icon.

The tooltip should automatically appear a few seconds after a change is made.

### Chart tooltip (TBD)

Use chart tooltips to provide users with explanations and additional information in charts.

When adding a tooltip to charts, always use a white container.

---

## Chip

#### Component checklist

Design: Planned | React: Planned

---

## Color Picker

#### Component checklist

Design: In development | React: Planned

---

## Date Picker

#### Component checklist

Design: In development | React: In development

---

## Empty State

#### Component checklist

Design: Up to date | React: Review required

---

## Floating Panel

#### Component checklist

Design: Up to date | React: In development

Each floating panel has a header and a body area. The header contains a Dock to Side icon. Body content may be organized with tabs, accordions, and static sections. The body has a minimum height of 310 pixels; floating panels can be resized vertically.

Accessibility Note: If floating panels can be dragged and resized, include a keyboard equivalent for these actions.

---

## Fullscreen Dialog

#### Component checklist

Design: In development | React: Planned

---

## Icon Picker

#### Component checklist

Design: Up to date | React: Review required

---

## Keyboard Shortcut

#### Component checklist

Design: Up to date | React: Review required

### Resources

Figma component: Created with Figma

### Placement

Here are a few examples where the Keyboard shortcut tags can be used.

- In tooltips
- In banners or as a part of the body text
- In modals or panels
- In navigations
- In dropdown menus

---

## Label Tag

#### Component checklist

Design: Up to date | React: Up to date

Truncation in the middle

Width is flexible, up to 180px.

Max width can be change in case it is needed.

---

## Label Tag Group

#### Component checklist

Design: Planned | React: Planned

---

## Loaders (Spinner)

Loaders are used to retrieve data or perform slow computations and notify users that loading is underway.

### Overview

Loaders are utilized when fetching data or carrying out time-consuming computations. They inform users that their request is being processed. While they don't give specific details about what is happening on the backend, they reassure the user that their action is being taken care of. Use a loader if the expected wait time is longer than three seconds.

### Formatting

Loading spinners may be scaled down if the loading experience is contextual to a certain item on the page.

---

## Message Bubble

#### Component checklist

Design: Review required | React: Planned

---

## Navigation

#### Component checklist

Design: In development | React: In development

---

## Platform Tag

#### Component checklist

Design: Up to date | React: Up to date

---

## Product Header

#### Component checklist

Design: In development | React: Planned

---

## Search Input

#### Component checklist

Design: Review required | React: Review required

---

## Segment Control

#### Component checklist

Design: Up to date | React: Up to date

A segmented control is a group of two or more segmented control buttons with related content. By applying it, we can immediately switch the view of the linked content.

### Overview

Segment control displays a horizontal set of segmented buttons. The usage of segment control should be clearly defined so that users can easily identify each segmented buttons. Explanation tooltip, help icon, select trigger or any other interactions are not allowed.

### Visual documentation

1. Variants
2. Composition
3. Anatomy

### Anatomy

1. Divider
2. Label text (optional)
3. Leading icon (optional)
4. Segmented control button

### Composition

1. Justified - When you need to justify segmented control buttons, use either the width of the widest button or take the width of the available space and divide it equally between the segmented control buttons.
2. Not justified - By default, each segmented control button keeps its original size based on the label and/or icon.

### Variants

There are several variations of segment control. To choose the right one, consider the context of the situation.

1. Icon-only - Displays only an icon, suitable for actions clearly represented by the icon, especially when space is limited. Always complement an icon-only segment control with a brief tooltip explaining the segment's action.
2. Leading icon - Displays a descriptive icon before the text label to visually support the segmented control button.
3. Text only - Displays only a text label.

### Usage guidelines

#### When to use

- To filter content (e.g. Daily, Weekly, Monthly, Yearly)
- When changing the visual style of data presentations (e.g. Bar chart, Column chart, Pie chart)
- To switch between different view formats (e.g. List view, Content view)
- When you want to allow users to choose one option
- For a more visually attractive choice between two to five options

#### When not to use

- Do not use segment control for activating or deactivating items, use toggle instead
- When multiple options need to be selected at the same time, use checkbox instead
- For more than five options, use radio button, or select instead
- When switching between different sections, use tab instead

#### Tab vs Segmented control

| Use cases | Tab | Segmented control |
|-----------|-----|-------------------|
| Navigation between different sections. | ✅ Use | ❌ Don't use |
| Switch to a different section of the application, which will have its own content. | ✅ Use | ❌ Don't use |
| Switch between views or filter within the same section. | ❌ Don't use | ✅ Use |

#### Content Guidelines

Make sure your text labels are short, clear and always written in the same format. Use text labels that are either all nouns (e.g. Desktop, Mobile, Tablet) or all adjectives (e.g. Daily, Weekly, Monthly, Yearly).

Don't write unnecessary long texts that need to be shortened with ellipsis (...).

### Technical documentation

#### Interaction & behavior

##### Keyboard & Mouse Interactions

- Clicking the segmented control button selects it and updates the selected state. If the selected segmented control button is clicked again, it doesn't deselect.
- Pressing Space or Enter to select the focused segmented control button. If the active segmented control button is in focus, pressing Space or Enter will not deselect it.
- Press Tab again to continue navigating through the other segmented control buttons.
- Press Tab to focus on the first segmented control button.

### Accessibility

- Keyboard navigation is fully supported, with clear focus indicators.
- Segmented control provides sufficient color contrast between states (Enabled, Hover, Active, Selected) to meet WCAG 2.2 AA standards requirements.

### Related components

- Tab - Tabs are used to organize content by allowing the user to switch views.
- Select - Select is used to choose one or more options from a list.
- Radio button - Radio buttons allow users to select a single option from mutually exclusive choices.

---

## Select

#### Component checklist

Design: In development | React: In development

Select is a type of input we use in forms where a user chooses one or more options from a list.

### Types

Depending on the number of items the user can choose, you'll use a simple select or a multi-select.

#### Select

Use the simple select when the user can only choose one item from a list.

The characteristics of a simple select

- The list closes by clicking one of the fields or outside the select
- The options list appears upon clicking
- By default, and as long as the options list is closed, the select displays a placeholder text

#### Multi-select

Use the multi-select when the user can choose multiple items from a list.

The characteristics of a multi-select

- The list stays open while the user selects items. The list closes by clicking the Apply button or outside of the select
- The options list appears with a click. Each item in the list can consist of a piece of text, or a piece of text and an icon, with a checkbox on the left side.
- By default, and as long as the options list is closed, the multi-select displays a placeholder text

### Formatting

#### Anatomy

Our selects are composed of several elements:

1. List: The list combines a header, items the user can choose from, and a footer in case of multi-select.
2. Trigger: The trigger is always shown in the UI, whether the select is open or closed, and is a combination of a title, trigger area, and error message.

#### Trigger anatomy

The trigger is always shown in the UI, whether the select is open or closed, and combines a title, trigger area, and error message.

1. Error message: The error text is a short message that helps users finish the required selection if they do something wrong.
2. For simple selects, there is usually a default value instead.
3. For multi-selects, the default content in the trigger is usually represented by placeholder text that provides hints or examples of what to enter. It disappears after the user selects data.
4. Content: Use sentence-style capitalization; in most cases, write the text as a direct statement without punctuation.
5. Trigger area: The trigger is always shown in the UI, whether the select is open or closed.
6. Shortcut: Select may have predefined content as a default state. Use the shortcut to help users quickly reset the select to the default state.
7. Counter: Selects may have a selection limit represented by the counter. Use the counter to let users know how many items can be selected.
8. Title: The title is a text informing the users about what to expect in the options list. Keep the title as short as possible; limit it to a single line of text. It is optional to include a help icon with a tooltip explaining the select's meaning on the right side of the title.

#### List anatomy

The list is the combination of a header, items the user can choose from, and a footer in case of multi-select.

1. Footer: The footer is visible only in case of multi-select. It contains only the apply button by default.
2. Items: Items represent each one of the user's choices. All items are shown together in the list.
3. Header: The header is shown on top of the items and is a fixed part of the select list. It contains a search field by default, but in case the select includes multiple levels the name of the category must be displayed with an action to go back to the previous level.

#### Variations

##### Trigger variations

We differentiate three variations of the select triggers by the position and visibility of the title.

1. The title is not visible: Avoid using select without a title. Use it only in combination with a headline or as a part of a sentence when it's clear what the user can select.
2. The title is inside: The select with a title inside the trigger is ideal for dense interfaces. Only use it when you lack space.
3. The title is above: The select with a title above the trigger is the default variant that should work in most cases. It is optional to include a help icon with a tooltip explaining the select's meaning on the right side of the title.

##### List variations

We differentiate two variations of the select lists by their complexity. The simple variant is the default one and is used in most cases. A list with a side menu is used in cases where the design needs to split a list into several categories.

Each variation can be represented as a simple select or multi-select.

1. With a side menu: Use the list with a side menu when the select contains several categories that need to be displayed separately. For example, it can be used to select social profiles by platform. The menu with the categories is always located outside the regular list field. By default, the categories menu is located on the right side. When there is no space on the right (e.g. side panels), the menu should be located on the left side to respect the condition of being located out of the regular list field.
2. Simple: Use a simple list if there's only one item category to select.

Note: If there are more categories, for example, social platforms and ownership, the side category menu should be divided into subcategories. Headlines and lines are separate subcategories.

#### Validation and errors

Validation helps streamline the process and keep data clean when the user fills out forms.

#### Selection counter

Selects may have a selection limit represented by the counter. Use the counter to let users know how many items can be selected.

### Behavior

#### Search

We allow users to full-text search over the list of items to give them quick access to their needs.

- We show an empty state if the user starts the search with 0 results
- Matches are highlighted
- The search runs automatically after the first letter is typed
- The search is focused immediately after the list is shown
- A search is available only if there are ten or more items

#### Apply button & footer

- The button is shown over the list if the height is more than 251px
- If the height of the list is less than 250px, the footer is shown under the list
- Its default state is disabled until the user selects at least one item
- The apply button is located at the bottom of the list in the footer

#### Recently used

Use the recently used items if the user often selects the same items in a row or a short period.

- There is no checkbox to select all recently used items
- There are a maximum of four recently used items displayed
- The recently used items are always on the top of the list

#### Nesting and grouping

Use nested items or item groups in case you need to visualize similar items together grouped by type or origin.

##### Nesting

- Nested items are differentiated by increasing the left padding to 18px for each level.
- Use nesting to visualize a subset of items for the main one to give a user the option to specify selection better.

##### Grouping

- Groups should be separated ideally by the divider.
- Use grouping to display items with the same or similar origin. This group should start with a headline item to display the group name.

#### Selection

##### Select

- The "Reset to default" option can be shown to help the user get back to the default state.
- The selected item is in the first position when the select reopens.
- The selected item appears in the field.
- The selection is canceled: hitting Escape, clicking to the field, by clicking outside of the box
- The selection is confirmed immediately after the user: hits Space, hits Enter, clicks an item by mouse
- Users can always select only one item.
- There is always a default option selected, and users can select another one from the list to change it.

##### Multiselect

- The items are grouped in a new section called "Selected." The section is visible only if at least one item is selected and confirmed by the apply button.
- The selected items are in the first position when the select is reopened as a separate section.
- If the total count of the letters exceeds the space in the field, we show the number of the selected items and the name of the category of the selected items: e.g., 12 content labels selected.
- We show the total value if the total count of letters can fit in the field.
- The selected items appear in the field and follow these conditions
- The selection is canceled: by Escape, by clicking outside the box or on the field
- The selection is confirmed: by Space, by double Enter, by clicking the apply button
- An item in the multi-select is selected: hitting Enter, clicking an item by mouse
- Don't use it if it could cause performance issues or make the user experience worse.
- Use Select all when the user may need to select everything in the list.
- The possibility to Select all is optional.
- "items" should be replaced by the name of the origin of items, e.g. profiles, labels, colors, etc...
- "X" represents a number of selected items
- In case the value of the selected item(s) fits into the trigger, we display the whole value. Once the selection hits the trigger's width, value(s) are replaced by "X items selected" info.
- The user sees selected items in the trigger immediately.
- The user can select multiple items individually or "select all" if available.

#### Keyboard

##### Select

- Once the field is focused, the user can show a list by Enter or Space
- Users can close the select by pressing Space or Enter to provide a selection, pressing Escape to cancel a selection
- Users can move the highlighted item to the previous option by pressing the Up arrow.
- Users can move the highlighted item to the next option by pressing the Down arrow.
- The select field is the element that receives focus. All keyboard interactions happen from this element.

##### Multiselect

- Once the field is focused, user can show a list by Enter or Space
- Users can close the select by pressing Escape to cancel a selection, pressing Space or double Enter to provide a selection
- Once an item in the select is focused, users can press Enter to select or deselect the item.

---

## Slider

#### Component checklist

Design: In development | React: Planned

---

## Split Button

#### Component checklist

Design: Up to date | React: Up to date

The split button is the button component that can be especially useful in situations where there is limited screen space and one of the actions holds particular importance.

### Preview

A split button has two parts. The left part is the default option, the most commonly used selection. The right part, represented by an icon-only button with a caret icon, shows the rest of the options in the dropdown menu. The purpose of a split button is to provide quick access to a default, primary action while presenting a list of related actions or options.

The split button is likely to be used less frequently than the menu button, as its additional actions are more concealed. However, this button can be handy when there is limited screen space, and one of the actions is particularly important.

### Notes

- as a popover can be used in the dropdown menu or select
- there should always be one action as a primary (visible with a label) and X secondary actions hidden under the dropdown menu

---

## Structured List

#### Component checklist

Design: Planned | React: Planned

---

## Teasing Page

#### Component checklist

Design: Review required | React: Review required

---

## Time Picker

#### Component checklist

Design: Review required | React: Planned

---

## Toggle

#### Component checklist

Design: Up to date | React: Review required

A toggle is used to switch between two opposing states in the UI, usually on vs. off.

### Anatomy

1. Clarifying caption
2. Track
3. Handle

### Sizes

There are two sizes of toggles. In order to choose the right one, consider the context of the situation.

| Size | Description |
|------|-------------|
| Standard | Use the standard toggle for most cases. This is the default size. |
| Small | Use the small toggle only in cases where there is a lack of space in the UI, or when the toggle's action is secondary to the page content. The small toggle does not include a clarifying caption and is usually used in tables. |

---

## Toggletip

#### Component checklist

Design: Planned | React: Planned

### Overview

Toggletip is a type of tooltip that appears on click instead of hover. It can contain interactive elements, such as links to documentation or related resources.

### Visual documentation

1. States
2. Variants
3. Composition
4. Anatomy

### Anatomy

1. Toggletip popover: It displays additional information. This information can include interactive elements, such as links.
2. Toggletip trigger: The Toggletip opens when the trigger is clicked. The trigger is an icon button. Soul recommends using "?" or "i" icon.

### Composition

- Alignment: Explain how elements are aligned within the component.
- Structure: Explain how the component is built (container, subcomponents, nesting).

### Variants

List and describe the different variations of the components available in the system. Purpose: Documents the flexibility of the component and helps teams select the right variant for their use case.

### Usage guidelines

#### Content Guidelines
#### Best Practices
#### When to Use

Provide clear guidance on when, where, and how to use the component. Purpose: Helps teams use components consistently and appropriately, preventing misuse and ensuring a cohesive user experience.

#### Best practices

- Keep labels concise and consistent.
- Use the component for [specific use case].
- Do's:
- Don'ts:
  - Don't use the component when a full-page scroll is more appropriate.
  - Avoid overcrowding the component with too much content.

#### Content guidelines

- Briefly explain the content writing practice with a link to related pages from our guidelines.

### Technical documentation

#### Modifiers
#### Properties
#### Interaction & behavior

- Keyboard & Mouse Interactions: Explain how users interact via clicks, keyboard navigation, and focus management.
- Transitions/Motion: Include details on easing functions, durations, and animation (e.g., "Use --motion-duration-quick-1 for smooth transitions").

Best practice: Clearly document interactive behaviors and states so developers can reproduce consistent interactions across platforms.

#### Properties

Document the customizable options, props (React), or parameters available for the component. Purpose: As a technical reference for developers implementing the component, ensuring proper usage and customization.

#### Modifiers

- Size variations (e.g., small, medium, large).
- Alternate color schemes or icon alignments.
- Style:
- Overrides:
  - Additional states include error, loading, or focused.
- Usage Examples:
  - Provide annotated examples showing how a modifier changes appearance or behavior.

### Accessibility

Document accessibility considerations and requirements. Purpose: To ensure the component is accessible to everyone, including people with disabilities, and meets legal and ethical accessibility standards.

### References

- Link for the external article that can explain any part of the component more deeply.

### Related components

List and briefly describe components that are related or can be used in conjunction with this one. Purpose: Helps teams understand the component ecosystem and decide which components to use together.

---

## Tooltip

#### Component checklist

Design: In development | React: In development

Shows additional information on hover, click or focus.

Tooltips are text containers that provide users with additional information about a particular area of the product. They appear when the user hovers, clicks, or focuses on a UI element, such as a button, an icon, or an underlined word.

The message inside the tooltip should be helpful and provide additional context. Tooltips shouldn't be relied on for essential information.

### Variants

We differentiate tooltips based on the following:

1. their function: brief tooltip, explanatory tooltip, guiding tooltip, caveat tooltip, and chart tooltip.
2. their interactivity: definition tooltip and interactive tooltip.

### Tooltips based on interactivity

#### Definition tooltip

The definition tooltip provides additional help or explains terms or items. You may use it to extend the information of a UI element or explain a word embedded in a longer text.

Guide to definition tooltips

- Only use them with text elements that are compounds of two letters or more.
- Use the definition tooltips to explain proper nouns, technical terms, or acronyms.
- Make the definition tooltip brief and read-only plain text.

Types

- Chart tooltips
- Caveat tooltips
- Explanatory tooltips
- Brief tooltips

#### Interactive tooltip

Interactive tooltips may include rich text and contain interactive elements such as buttons or links.

The best use of the interactive tooltip is for onboarding experiences and product tours. In other cases, avoid using interactive content in tooltips.

Guide to interactive tooltips

- Never use only interactive elements, and always consider the context the user needs before clicking a link or a button.
- Use the interactive tooltips to lead the user to additional content, for example, when explaining how a metric is calculated or data acquired.

Types of interactive tooltips

- Guiding tooltip
- Caveat tooltip with a button or link
- Explanatory tooltip with a button or a link

### Tooltips based on function

Given a tooltip's complexity or usual usage, we differentiate the types of tooltips listed below. Use the one that best fits your context.

#### Brief tooltip

Use brief tooltips to explain icons and buttons with icons.

Brief tooltips consist of one or two words; if you need longer, more complex tooltips, use the explanatory tooltip.

#### Explanatory tooltip

Use explanatory tooltips when there's a need for comprehensive information, for example, to explain metrics or disabled components. When defining a button with an icon or an icon, use the brief tooltip.

The explanatory tooltip can't include an interactive element (link, button, etc.).

Technical aspects of explanatory tooltips

- The text inside a tooltip is always aligned to the left.
- The maximum width of a tooltip is 480 px, but the actual width should always be defined by the design of the area and depend on content and context.

#### Guiding tooltip

Use guiding tooltips to explain or highlight new features, and to walk users through the product.

For walkthroughs and onboarding, use the guiding tooltips together with a pulsar element.

Depending on the context, you can use a single tooltip or design a multi-step tooltip combined with buttons.

#### Caveat tooltip

Use caveat tooltips to draw attention to changes that may have happened without the users' knowledge.

Use caveat tooltips together with a label or icon.

The tooltip should automatically appear a few seconds after a change is made.

#### Chart tooltip (TBD)

Use chart tooltips to provide users with explanations and additional information in charts.

When adding a tooltip to charts, always use a white container.

---

## URL Input

#### Component checklist

Design: Review required | React: Planned

---

## Wizard

#### Component checklist

Design: In development | React: Planned
