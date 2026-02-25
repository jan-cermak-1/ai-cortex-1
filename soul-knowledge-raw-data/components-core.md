# SOUL Components (Core)

## Accordion

An accordion is a graphical interface component comprising a series of panels, each displaying information or options.

# Overview

We use the accordion wherever we need to save space. Think of the accordion as an organized summary for a lot of information. It provides a brief overview at the top, and users can explore specific sections by clicking on titles. This way, users have the flexibility to decide which parts they want to delve into.

While accordions are great for helping users process information and find what they need, keep in mind that hiding content may result in some users missing out. If the expectation is that users will read everything, it may be more effective to stick to a regular scrolling page with clear headers instead of making them click extra times in an accordion.

## Best use cases for accordions

- Where space is limited and displaying complete content at once is not feasible
- To avoid endless scrolling when the complete content isn't essential for all users to read
- When users are likely to engage with specific sections rather than all content at once
- When you have content that can be grouped logically

# Composition

## Anatomy

#### Prioritize important information

Place crucial information in the accordion headers or the first section to ensure users see key details without expanding every section.

1. Body: Contains the section content associated with an accordion title.
2. Chevron: Indicates whether the item is open or closed.
3. Title: Contains the section title and is controlled for revealing the item.

## Alignment

Typically, the chevron icon is positioned at the end of the header, allowing the initial title to align seamlessly with other elements on the page—a conventional practice. However, in exceptional circumstances, one may opt to place the icon in front of the title, providing a more hierarchical, tree-like structure.

It's recommended that you stick to the default end alignment, especially for straightforward content or documentation. If placing an icon in front of the title, consistency is crucial: it's necessary to maintain a uniform placement of the icon throughout the page, without variations.

# Content

## Title

- Text elements should not exceed two lines in any case. It's recommended to use text truncation for a clean presentation of longer texts.
- Titles may include elements in addition to text (e.g., an avatar or link).
- Keep titles as brief as possible while still being clear and descriptive.

## Body

The body of an accordion can contain a wide range of elements—subnavigation, form items, text, tables, and pretty much any other element you can think of.

Scrolling content

When the accordion content is longer than the viewport, let the entire accordion scroll vertically. Content should never scroll horizontally in an accordion.

# Behavior

## States

The accordion has two main states: collapsed and expanded. Look at the chevron icon at the end—it tells you whether the accordion is open or closed. A downward-pointing chevron indicates a collapsed state, while an upward-pointing one indicates an expanded state.

When a user first sees an accordion, it usually collapses, meaning all the content panels are closed. This setup gives users a quick sneak peek at the information contained within.

Designers can decide if it is appropriate for elements (e.g., buttons) to remain visible even when the accordion is closed.

## Interactions

Users can trigger a state change by clicking on the chevron or clicking anywhere in the header area.

## Keyboard

Users can navigate between accordion headers by pressing Tab or Shift-Tab. Users can trigger a state change by pressing Enter or Space while the header area has focus.

## Motion

- Set the duration to --motion-duration-quick-1 for both cases
- For collapsing, use --motion-easing-entry easing
- For expanding, use --motion-easing-entry easing

For detailed information about motion in the Soul Design System, visit UI Motion.

# Summary

Accordion components are versatile for saving space in the UI, offering a condensed view with expandable details. Best for logically grouped content, accordions should prioritize key information in headers. Accordions can be placed alongside the main content or in containers. Titles should be brief; content can vary, with scrolling for longer content. Accordions have collapsed and expanded states, indicated by a chevron icon. Motion and easing effects ensure a smooth user experience. Choose between closing or keeping other sections open based on user focus needs.

---

## Avatar

The avatar serves as a visual element representing the user, profile, chatbot, or team.

# Types

There are four avatar variations: user, profile, chatbot, and user group. If none of these fit your needs, you have the option to use a custom avatar.

User avatar is used to represent a person. Depending on the context, the user avatar displays either the user's photo, initials, or remains in an empty state.

- Custom avatar is used for the identity of another entity. For the custom avatar, use our UI icons page.
- Team avatar is used only for the "User group" section.
- Chatbot avatar is used only for Emplifi Bot.
- Profile avatar is used for the image or logo of a company. Depending on the context, the profile avatar displays the profile image or remains in an empty state.

# Sizes

The avatar is available in five sizes. The size of the avatar depends on the context. The recommended sizes are as follows: Medium or Small.

- xxSmall: Use the micro size when there is not enough space for the tiny avatar. Micro is not available for the custom avatar.
- xSmall: Use the tiny size when there is limited space (e.g. list items).
- Small: Use the small size for interactive elements or when you need to save space (e.g. user list, profile list, accordions, widgets).
- Medium: Use medium as the default size for posts, content or inspiration cards, tables, tooltips, widgets, and chat bubbles.
- Large: In a spacious interface, use the large avatar size.

# Variants

There are different variants available for the user and profile avatars.

- Profile: There is an option to choose between image or empty, depending on the situation in which you want to use it.
- User: There is an option to choose between image, initials, or empty, depending on the situation in which you want to use it. Use initials when the user hasn't uploaded an image in Emplifi Settings. Use the empty state when the social media account doesn't have a profile image uploaded to the native platform.

# Initials

Depending on the data the user provided in Settings, there are two options for initials: full name or email only.

- Email-only: (e.g., murphy.m@toutique.io) In case the user has provided only their email in Settings, we will show the first letter of the email address.
- Full name: (e.g., Marvin Murphy) In case the user has provided their full name in Settings, we will show the first letters of the name and surname without a space between. If the user has a preposition in the name, e.g., Johann von Trauttenberg, we will ignore the preposition and follow the same rule.

# Badge

## Indicator/Status

The color circle located at the bottom right corner indicates the status of the avatar. Options are online, offline, or away.

## Progress

The border around the avatar indicates human interaction.

## Badge with number or icon

- Sizes: Avatar badges are available in four sizes. The recommended sizes are as follows: Medium or Small.
- With icon: if you have limited space, you can perform a specific action for the avatar (e.g. to indicate that the user/profile or group is locked for editing).
- With number: Use the number for notification

---

## Avatar group

The Avatar group is a collection of Avatars stacked one over the other to cover cases where more than one avatar needs to be displayed.

# Usage

For cases when more than one avatar is needed, Soul defines an Avata group. Avatar group is a horizontal stack of Avatar with a 1px border to separate them. Each avatar contains a hover interaction to populate a tooltip with information about the user or profile.

# Overflow

We display a maximum of up to five avatars at a time. If there are six or more, we use a numbered avatar to represent the additional ones. For more information, see the documentation on overflow.

On hover of that number, the rest of the hidden elements are displayed in a tooltip.

# Sizes

Avatar group can be displayed in five different sizes. The size should be responsibly chosen by context and space. As a default size, Soul defines Medium.

---

## Avatar info

If we need to include text information with the avatar, we can use a avatar info. This is commonly used in tables, list items, or select inputs.

# Variants

## User profile

For the user profile, there are two naming options: using the user's name or email.

There is an option to choose between an image, initials, or without an image, depending on the situation in which you want to use it. Use the initials avatar when the user hasn't uploaded an image in the Emplifi settings. Use the empty avatar when the account in other tools doesn't have an image filled in the profile settings.

Depending on the context, you have the option to include additional details or not

## Social profile

Soul differentiates three tag variants used in social profile info avatars: regular, narrow, and short. Usage depends on the context. The recommended tag variant is regular. If there is limited space, use short. In tables, use narrow.

In case social profile social profilehas dedicated color, use a colored indicator to promote it.

## User group

Depending on the context, you have the option to include additional details or not

# Sizes

The labeled avatar size depends on the context. The recommended sizes are medium and small, and they should be used in most of cases. However, when there is limited space, Soul allows to use the tiny or micro size. For a spacious interface, consider using the large size.

---

## Badge

A badge is a label or decorative indicator used to communicate information within the UI in a highly visual way. We categorize badges into three types: those that communicate the status of a piece of content, those that provide non-actionable information, and special cases that have been designed for a specific issue.

# Types

1. Special—Special badges have been designed for specific problems, such as designating priority levels, customer sentiment, and other product-related information.
2. Non-actionable—We should use this type of badge wherever we need to show information about an item, such as its origin or any other information that does not belong to the status category.
3. Status—Use this badge when you need to represent the status of a process, message, or other type of item in the application. Items with status can also change over time.

## Status

A status badge is used when we need to show the status of a process, message, or other type of item in the application. Items with status can also change over time.

The badge has six visual options to identify the main purpose.

1. Newly added –– This is an indication of new things coming into the app e.g. new posts, new comments in the list, etc...
2. Success –– Use to indicate a successful, completed, or desirable state when it's important to provide a positive message to the user.
3. Danger –– It is a state where we want to say something's wrong.
4. Incomplete –– Use to indicate when a given task has not yet been completed. For example, when the user has scheduled a post or moved the item state to In progress.
5. Common –– You probably want to use this one unless you fall into a specific use case.
6. Active –– It is used to indicate the active state that is currently running or active.

An example of case coming into care:- the case arrives = status Newly added - an agent is working on it = status Incomplete - an error appeares in case = status Danger - the case is finished = status Done

## Non-actionable

The Non-actionable badge displays information about the content below it. It is focused more on content than status. In any case, we do not use leading icons for information badges. The only customization allowed here is color on the badge text. This combination must pass the contrast checker.

Difference between Status and Non-actionableStatus badges represent status or progress, e.g., active or error. Non-actionable badges refer to content, e.g., the given widget shows statistics from the Community = widget has a "Community" badge.

## Special

A specially created set of badges specifically designed for a specific problem, for example, to designate priority levels, customer sentiment, and other product-related information.

# Sizes

Soul defines two sizes of the badge: small as a default size and medium for a case badge that needs to be more prominent. To choose the right one, consider the context of the situation.

# Usage

## Inline

This type of badge placement can be found, for example, on widgets, posts in the content feed or inspiration, content in the community and all kinds of other cards that have more than one badge on them. When placed side by side, we select a specific order based on the priority of badges.

1. Informative
2. Special
3. Status
4. Icon only

## Header

Use badges in combination with headers that require additional information, for example, in panels, modals, etc.

## Table

Always align the badge to the left in a table for better readability when visually scanning the page. Only one badge is allowed per row. See more about how to align elements in the table.

---

## Breadcrumb

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

# Overview

Breadcrumbs show users their current location relative to the information architecture and enable them to quickly move up to a parent level or previous step.

### When to use

- When the user may need to navigate back to a higher level
- When you need to inform the user of where they are.
- When the page has more than two layers in a hierarchy.

### When not to use

Breadcrumbs are always treated as secondary and should never entirely replace primary navigation. They shouldn't be used for single-level navigation products because they create unnecessary clutter.

# Anatomy

1. List of options - The list is populated once a user clicks on the field and displays all possible actions the user can provide.
2. Current page - Displays the current page where you are. If there is a possibility of selecting more options on this page, we will place a select with the possibility of opening a dropdown. If this is the final state, we use only the headline.
3. Main level (Overview) - Click to get to level 1. Most of the time, there is an overview. You can use the icon if there is no space on the viewport.

# Variants

Soul defines three breadcrumb variants, two by style and one by placement.

#### By the style

- Icon
- Link

#### By placement

- In header

## Link

The default variant of the breadcrumbs is used in most cases. Depending on the visual space, you can choose between several sizes.

## Icon

This option is enabled only if breadcrumbs are used as a content headline and a part of the main navigation (Size H2). It is assumed that in certain cases, there may not be enough space for the full name, which in this variant is hidden in the tooltip after the icon has hovered over.

## In header

In this case, breadcrumbs are visible only if the user hides the main navigation to keep the user's location visible and allow the user to get back to the previous or main location. This variant is used mainly in the header, and it appears under the headline.

# Sizes and Placement

You can use different typo font sizes considering hierarchy.

1. Tertiary and Additional - Users are found in the last level of navigation, such as dropdown, etc.
2. Secondary - Secondary breadcrumbs are placed in modals, panels, dialogues, and places where we want to tell the user where he is and how he can go back, but it is not the main way.
3. Main - Breadcrumbs are placed in the top left portion of the page. They sit underneath the header and navigation but above the page title.

# Overflow content

When space becomes limited, use an overflow menu to truncate the breadcrumbs. The first and last two page links should be shown, but the remaining breadcrumbs in between are condensed into an overflow menu. Breadcrumbs should never wrap onto a second line.

---

## Button

Buttons allow users to perform actions or to navigate to other pages. Generally, they should catch the users' attention and direct them to complete an action that needs to be done.

# Types

There are various types of buttons. To choose the right one, consider the context of the situation.

## Primary

The primary button is used for the most important call-to-action on a page.

On any given page, use only one primary button. In inevitable cases where you must use two or more primary buttons, place them in the application header, in a modal dialog, or in a panel. Not every screen requires a primary button.

## Secondary (Light)

The secondary or light button is used for general actions. Due to its neutral visual weight, it's the preferred choice for most cases.

Close or Cancel button - Use a light version as a Close or Cancel button in modal dialogs and panels with a grey background.

## Secondary (Ghost)

The secondary ghost button is an alternative to the light button. Choose this button in cases where the light button would dominate the interface.

Close or Cancel button - Use a ghost version as a Close or Cancel button in modal dialogs and panels with a white background.

## Tertiary (Invisible)

Use this button to avoid clutter around borders, for example, in bars or search bars.

## Danger

The danger button grabs users' attention and asks them for confirmation before completing a destructive action, such as removing or deleting.

The danger button is mainly used in confirmation modals.

## Request

The request button allows users to request a demo, contact their account manager, or buy new features.

## Link

Use the link button for alternative actions. The link button should be located near the main button (the primary or secondary one).

You can use the link button as a standalone button in table rows if there are more actions, such as show details and remove.

## Inverse

The inverse button should be used only on high-contrast backgrounds such as explanatory/guide tooltips or snackbars.

In the case of a high-contrast background, use this inverse variant as a primary button and use the link variant as a secondary button.

# Variations

There are several variations of buttons. As with the button type, consider the context of the situation when selection the appropriate variation.

1. Icon-only - Use an icon-only button (without text) for actions that are clear from the icon, especially when there's not enough space for a text button. In most cases, you must complement an icon-only button with a brief tooltip explaining the button's action.
2. Right Icon - Place an icon on the right side of the button to indicate movement or shift, such as an arrow to the right of the Next button.
3. Left Icon - Place an icon on the left side of the button to support a call to action visually.
4. Text only - Default variation of the button.

# Badge

Use a badge on a button to give users visual information that a selection has been applied.

In most cases, buttons' badges are combined with a label selection or user assignment when there is no space in the design to display labels or users.

A badge can be applied to each button variation. Its position is always in the same place (top right).

As with content in a badge, Soul allows you to use numbers or text up to four characters.

In the case of numbers, you should always shorten bigger values.

# Emphasis

You don't necessarily need to use the buttons in the order that their labels imply. For example, you don't always need to use the secondary button as the second button in your layout. The most important thing is to establish a visual hierarchy between the buttons in your UI. Keep these best practices in mind:

A single, high-emphasis button

As a general rule, a layout should contain a single high-emphasis button that makes it clear that other buttons have less importance in the hierarchy. This high-emphasis button commands the most attention.

Multiple button emphasis

A high-emphasis button can be accompanied by medium- and low-emphasis buttons that perform less important actions. Remember that you should only group calls to action that are related to one another.

Although secondary buttons have less visual prominence because they are less saturated than their primary counterparts, they are still tonally heavy. If your layout requires multiple actions—as is the case with some toolbars, data lists, and dashboards—low-emphasis buttons (tertiary or ghost) may be a better choice.

---

## Button group

Button groups offer users quick access to actions related to each other and often performed together.

# Preview

When facing a radio-style button group, users can select only one button. It's usually located at the top of the page or panel and serves to switch visualizations.

# Variations

There are several variations of button groups. To choose the right one, consider the context of the situation.

1. Icon-onlyUse an icon-only button (without text) for actions that are clearly stated by the icon, especially when there's not enough space for a text button. In most cases, you will need to complement an icon-only button with a brief tooltip explaining the button's action.
2. Left iconPlace an icon on the left side of the button to support the options visually.
3. Text onlyDefault variation of the button.

# Justifying button groups

By default, each button in the group can keep its original size depending on the label and/or icon size.

When you need to justify the buttons in a group, we suggest using the width of the widest button in the group or taking the width of the available space and dividing it equally between the buttons in the group.

---

## Checkbox

Checkbox offer users quick access to actions related to each other and often performed together.

# Types

1. Checkbox with a text label: Use a checkbox with a text label when you need to explain or specify what ticking the box does. Clicking the text label should check the box.
2. Simple checkbox: Use a simple checkbox when there's a complex element next to it.

# Usage

### When to use checkboxes

- Lists selections –– Use Checkboxes to let the user choose multiple items within data tables or lists.
- In forms –– Checkboxes can be used in forms, both on full-page or in the side panels.

### When to avoid checkboxes

If the user can select only one option, use Radio buttons instead of Checkboxes. Radio buttons are used to select only one item in a set, while checkboxes are used to choose unlimited options at once.

If there are more than five options to choose from, use Multiselect instead of the Checkboxes to deliver users a better experience with a less overwhelmed UI.

# Formatting

## Anatomy

The checkbox consists of clickable inputs (square) with text labels located to their right. If there is a group of checkboxes, you can add a group title.

1. Checkbox label (optional) — The label informs about the select options. An icon can visually support this information. Checkbox labels are positioned to the right of the inputs.
2. Checkbox input — The checkbox indicates the selection state.
3. Group title (optional) — The title describes the options or provides guidance for choosing the best option.

## Alignment

You can choose a horizontal or vertical layout for grouped checkboxes, depending on the use case and the UI structure. However, the vertical arrangement is preferred for easier reading.

# Composition

## Group title (optional)

When necessary, complement a set of checkboxes with a heading to provide further context or clarification.

- Even though you decide the title isn't necessary for the interface, it is always needed in code.
- When a set of radio buttons is part of a component with a title, it's unnecessary to add a title for the radio button group.
- Write the title in sentence case.
- A group title can either state the category of the grouping or explain what to select.

## Checkbox labels

- Place the label to the right of the checkbox inputs.
- The label explicitly says what effect the selection has.
- The copy is clear and concise. If you're lacking space, try to reword the label. It is not recommended to truncate checkbox label text with an ellipsis.

## Overflow content

- The text should be aligned with the upper part of the checkbox
- Long text labels can break into a second line; avoid truncation

# Error state

In case of error needs to be populated, Soul defines two situations. If the checkbox is alone, the error message is connected directly to it. For cases where checkboxes are grouped, the error is connected to the whole group and not to each checkbox separately.

---

## Checkbox button

Checkbox buttons offer users quick access to actions related to each other and often performed together.

# Preview

When facing a checkbox button, users can select more than one button. Typical usage of this pattern is in filter panel. Do not combine the checkbox button with other components. Use a different component, such as a toggle or checkbox.

# Variations

There are several variations of button groups. In order to choose the right one, consider the context of the situation.

1. Icon-onlyUse an icon-only button (without text) for actions that are clearly stated by the icon, especially when there's not enough space for a text button. In most cases, you will need to complement an icon-only button with a brief tooltip explaining the button's action.
2. Leading iconPlace an icon on the left side of the button, to visually support the options.
3. Text onlyDefault variation of the button.

# Sizes

There are several sizes of buttons. In order to choose the right one, consider the context of the situation.

1. SmallUse the small button when the interface lacks space or when the button's action is secondary to the page content.
2. MediumMedium size is the default option, use it in most cases.

# Justifying button groups

By default, each button in the group can keep its original size depending on the label and/or icon size.

When you need to justify the buttons in a group, we suggest:

- or taking the width of the available space and dividing it equally between the buttons in the group
- using the width of the widest button in the group

---

## Container

A container divides content into meaningful sections. It is the fundamental foundation of most of our components.

# When to use

Use a container in the following cases

- To create a scannable UI
- To display multiple subjects and functions on a screen
- To group content

# Style

The container is the area that can hold any content. It is the keystone of widgets, posts, community content, cards, etc...

# Behavior

Easily align content in columns or stack them (or as a grid if there are more elements than columns). Usually, a with defined columns wraps several components.

Important note: Do not use spacing between containers less than --space-4. Find out more about spacing here: Spacing.

## Content safe zone

The minimum padding for content elements inside the container is --space-4. Never use smaller.

## Background color

The recommended color is white. In exceptional cases, a different color may be used. But it must make sense in the case.

---

## Data table

Data tables are used to organize and display data within the UI. A data table always contains column headers that sort data in ascending or descending order and table rows with actionable data.

# Overview

Data tables provide an excellent way to organize and present data in a user interface. The column headers allow the sorting of data in ascending or descending order. Rows can be expanded to reveal additional information gradually, and individual or multiple actions can be performed on rows.

# Formatting

## Anatomy

A table typically comprises three fundamental elements, namely Header, Row, and Cell. In addition, Soul offers an optional feature to include a summary bar as the table's footer.

1. Summary bar: A summary bar provides a quick overview or summary of the data or content presented, such as totals, averages, or key metrics. It helps users understand the data at a glance without having through the entire dataset.
2. Table cell: A table cell is the basic unit for data entry in a table, used to display individual pieces of information corresponding to a row and column.
3. Table row: A table row represents a single record or unit of data in a table. Each row consists of multiple cells aligned horizontally, with each cell corresponding to a column header.
4. Table header: The table header is the top section of a table that labels each column. It is essential for understanding the type of data presented in each column of the table.

## Sizing

The data table is available in three different row sizes: Large, Medium, and Small. By default, the table is set to medium size which should suffice for most use cases.

# Behavior

## Interactions

The data table's rows follow interaction conventions found in other Soul components. Buttons, checkboxes, radio buttons, dropdown menu, select, toggle, and inputs are used in the data table, and all behave according to their guidelines.

The data table rows' hover state should always be enabled to help the user visually scan columns even if the row is not interactive.

## Inline actions

Each row in the table can have specific actions associated with the data context. These inline actions are located in the first column of the data table and only become visible when you hover over the row. If the content is too long, the action buttons can overflow, ensuring that they remain fully visible.

## Bulk actions

Users can perform bulk actions on one or more items within a table. Once a table row is selected, the bulk action bar appears at the bottom of the page, presenting a set of possible actions to apply to all select items. This feature can increase user efficiency compared to the effort of repetitively performing the same inline action across multiple table rows.

When the bulk mode is active, single action buttons and dropdown menus on the row should be disabled.

To exit the bulk action mode, the user can click on the cancel button on the far right of the bar or deselect all items.

## Sorting

You have the option to sort columns in either ascending or descending order. To do so, you can access the sorting controls located in the column headers.

When you want to demonstrate that a column in a table is sortable, you can use a link in the table header. An arrow-up or arrow-down will indicate which column is currently sorted. Please note that only one column can be sorted at a time.

## Pagination

Soul suggests using lazy load as an alternative to numbered pagination in Emplifi UI. With this approach, the table data is loaded automatically by a predefined amount every time the user reaches the end of the table. The design specifies the number of data rows to load to achieve maximum performance.

Use a skeleton loading animation to provide the user with visual feedback that additional data is being loaded.

## Loading

Use skeleton loading as a visual cue when you need to load data. This pattern can also be employed to let the user know that only a single row or column has been loaded.

## Vertical scrolling

When a table exceeds the height of a user's viewport, it is imperative to display the vertical scrollbar outside the table. This way, users can effortlessly scroll through the entire screen, not just the table, for a seamless experience.

When dealing with a table that is part of an element, like a widget, it's best to keep the scrollbar within the element.

## Horizontal scrolling

When the table exceeds the width of the user's viewport, a horizontal scrollbar appears within the table. The table size dictates the options available for scrolling.

The first column always stays fixed, while the horizontal scrollbar appears to the right of it. This is a recommended approach to help users keep track of the origin of the data when scrolling.

When utilizing a horizontal scrollbar, it's recommended to incorporate a shadow effect on the sides of the scrollable content to provide a visible indication of the direction in which the user can navigate the content. This will help enhance the user's experience and make it easier for them to navigate through the content without any confusion.

# Content

## Alignment

- Center alignment: If a column contains the same type of visual elements of the same or similar size, you can use center alignment, e.g., checkboxes, platform tags, or predicted grades.
- Right alignment: Use right alignment in cases when numbers align to the right, as this makes it easier to compare data.
- Left alignment: Use left alignment in cases of elements of a text character (text information, hyperlinks, profiles, users, labels), a group of two and more visual elements in one column, and headers.

## Column titles

- Column titles should use sentence-case capitalization.
- In cases where a column title is too long, wrap the text to two lines and then truncate the rest of the text. The full text should be shown in a tooltip when hovering.
- Column headings should be concise and descriptive, using one or two words to represent the data in that column.

## Truncation

- The full content should be shown in a tooltip on hover.
- If the information entered in a cell surpasses its allotted space, abbreviate it using the following pattern to make sure it fits within the cell.

## Data placeholders

In some specific cases, data in a cell cannot be displayed. For this case, Soul defines two types of placeholders complemented by a tooltip to explain why data is missing.

#### N/A placeholder

Use the N/A (Not Applicable) placeholder in every case when the field does not apply to the current item or entry. "N/A" should be easily understood by users as indicating non-relevance.

Example: In a data table where a "video length" metric is not applicable to an image.

#### Em dash (––) placeholder

Use an em dash (––) placeholder when the data is missing, unknown, or not yet available.

Example: A field for "Listening mentions" where the number of mentions has not been provided or recorded yet.

## Incomplete data

For cases where some data is missing or incomplete, Soul is defined to show an alert icon to inform the user about his case.

Complement the icon with an Informative tooltip shown when hovering over the cell, which provides related information and actions the user can take to get the compiled data set.

Example: In the summary bar use tooltip text to display why data is missing in the column.

# Variants

Soul presents two fundamental versions of the table, differing in the way users can interact with the data.

## Static

The default variant for displaying data without any additional actions is the "static" data table. This type of table allows users to focus on a single row at a time. It provides a simple way to work with data in its current state without the need for any further manipulation.

When dealing with tasks that require handling multiple rows concurrently, opt for the "selectable" variant of the data table.

## Selectable

The "selectable" data table enables users to select one or multiple rows in a data table at the same time. To select a row, simply check the box associated with it. Users also have the option to select all rows at once by clicking the checkbox in the column header.

Checkboxes in rows have two states: checked and unchecked. However, the "check all" checkbox in the column header has three states: checked, unchecked, and indeterminate.

## Summary bar

Consider adding a summary bar to the data table to provide a more comprehensive view of the information in the column.

The summary bar can either sum the data or display the average value. Optionally, the table can have a group button that allows the user to switch between the two options. This will improve the user experience and make it easier to access the desired information.

## Breakdowns

Breakdowns are a handy way to classify data in a table. You can choose to view or hide the categories as needed.

In order to establish a breakdown, a specific component is usually placed on top of the table. This component can be either a select or multi-select in most cases. If there are only a few options available, typically two or three, it is recommended to use the group button instead of select.

---

## Dropdown confirm

Dropdown confirm helps, as an alternative to high-impact dialogs (e.g. modals), to focus the user's attention on one task or piece of information without losing focus on the page content.

# Basics

A dropdown confirm is an alternative modal that appears on demand to provide the user with extra information, usually including an actionable item.

Dropdown confirm data is low-impact, providing a short amount of information and only takes one step for the user to complete the action. For example, a confirmation dropdown can appear for the user to ask the user to confirm if they want to remove or delete content.

The dropdown confirm appears on user demand, for example, when the user clicks on a button or an item from a dropdown menu.

If the user triggers the dropdown confirm by clicking on an item in a dropdown menu, the dropdown confirm replaces the whole dropdown menu. When the user dismisses the popover, the dropdown menu reappears to replace the confirmation dropdown.

Once triggered, the dropdown confirm disables all app functionality and remains on the screen until the user confirms or dismisses the required action.

Aim to use one dropdown confirm at a time. There is no exception to stacking multiple dropdown confirms over each other or combining them with other dialogs, such as modals.

# Anatomy

The dropdown confirm is defined by its content and actions.

1. Actions—The action is always expressed with one primary call-to-action button. This main action can be complemented with a secondary link, such as "Cancel" or "Learn more."
2. Content—A confirmation dropdown may consist of a headline and a short block of text, although the headline is optional. The copy should be short, easy to understand, and actionable.

# Behavior

The dropdown confirm is triggered when the user clicks a button or item in a dropdown menu. The container appears over the interface and page contents, including the main navigation.

By default, the confirmation dropdown is either positioned on top of the trigger button or respects the position of the dropdown menu it replaces.

#### The popover is dismissed when

- Pressing the Enter key if the "Cancel" button is focused
- Pressing the ESC key
- Pressing the "Cancel" button
- Pressing outside of the dialogue

#### The popover is confirmed when

- Pressing the Enter key if the CTA button is focused
- Pressing the CTA button

---

## Dropdown menu

A dropdown menu presents a list of options from which the user can select one. The selected option is a step towards taking action, such as saving, editing, or deleting.

# Overview

Dropdowns allow the user to select one option from a list of many.

#### When to use

- Dropdowns can be used in forms, modals, side panels, or within more complex components to select one action only.

#### When not to use

- Consider using a select or multi-select if most of your experience is form-based.
- Do not nest dropdowns or use them to display overly complex information. Keep option selections as straightforward as possible.
- It is best practice not to use a dropdown if only two options exist. In this case, use buttons instead.

# Formatting

## Anatomy

1. Divider: The divider is used to differentiate destructive or important actions on the list like create, remove, archive, etc.
2. Submenu indicator: A chevron icon that indicates a submenu.
3. List of options: The list is populated once a user clicks on the field and displays all possible actions the user can provide. It is shown by default under the field. However, if there is not enough space, it can be shown above.
4. Dropdown trigger: The trigger is usually represented by an icon-only button with a meatballs icon to show more options under it. The button has inSelected state if the dropdown is open.

## Sizes

We use two sizes of dropdown buttons: medium and small. To choose the right one, consider the context of the situation.

1. Small—Use the small field size only in cases where there is a lack of space in the UI.
2. Medium—Use the medium field for most cases. This is the default size.

# Submenus

A submenu is a menu item with the chevron icon on the right that offers additional related controls that appear next to the main dropdown menu.

By default, the submenu opens down and overlaps the main menu. The first item is aligned with the parent item from the main menu.

While submenus can help tidy up a context menu and make its options clearer, introducing multiple levels of submenus can make the user experience more complex and complicated to navigate.

We recommend avoiding multiple levels of nesting when it comes to submenus.

#### Actions associated with a shared item label

Consider removing recurring terms in submenu labels to improve predictability and scanning.

# Keyboard

- Users can close the dropdown menu by pressing Escape or Enter
- Users can open the dropdown menu by pressing Space or Enter
- Users can move the highlighted option to the previous option by pressing the Up arrow
- Users can move the highlighted option to the next option by pressing the Down arrow
- The dropdown field is the element that receives focus. All keyboard interactions happen from this element.

---

## Highlight

The Highlight component is designed to visually emphasize parts of text that match user input, typically during interactions with search fields or filter options. Its primary function is to help users quickly identify relevant information in response to their queries, enhancing overall usability and efficiency.

# Overview

The Highlight component offers a focused visual preview of how matching segments of text are emphasized within the user interface. It is designed to visually mark text that aligns with user input, particularly in search and filtering contexts, helping users quickly identify relevant results. With an emphasis on clarity, consistency, and usability, the component ensures a smooth and intuitive experience by presenting highlighted content in a clean and accessible way.

# Guidelines

## When to use

Use the Highlight component in the following scenarios:

- When you want to improve user experience by providing immediate visual feedback in data-heavy or content-rich interfaces.
- To make it easier for users to visually scan and identify relevant results from a list of items.
- When you must emphasize matching text segments based on user input, such as during search queries or when applying filters.

Avoid using this component for general decoration or unrelated emphasis, as its primary function is to reflect dynamic user interaction.

## Best practices

Do

Use the Highlight component to draw attention to matching keywords in filtered or searched content.

Don't

Don't apply multiple highlighting layers or overload it with additional visual elements that may reduce clarity.

Don't

Don't use Highlight as a generic callout for unrelated UI elements.

# Accessibility

The component adheres to WCAG 2.2 guidelines regarding contrast and semantic structure. To guarantee readability, all text highlighted by the component maintains at least an AA contrast ratio (4.5:1) against the background.

Icons used within the component are decorative by default and do not interfere with assistive technologies, but they can be enhanced with accessible labels when necessary to convey meaning. These practices ensure a consistent and inclusive experience across diverse user groups.

---

## Link

Links are navigational elements that may appear independently within a sentence or paragraph or directly after content.

# Overview

Links are navigational elements with two variations: standalone and inline. Whether they are separate or used in line with text, links serve as a useful option for navigation depending on the context.

When using links, be economical. Remember that too many links, and inline links in particular, can overwhelm the user and make it harder for them to understand what action to take next on the page.

## Variants

We differentiate two types of links according to their position amid the rest of the page content.

1. Inline links are used within a sentence or paragraph. In most cases, they should not be paired with an icon.
2. Standalone links are a default variant used on their own or directly after the content. A standalone link can be supported by an icon.

#### When to use

Use links when you want users to:

- Connect to an email or phone number
- Jump to another element on the page
- Go to a different website
- Go to another page within the platform

#### When not to use

Use a link button instead of a text-based link for actions that will manipulate data itself or how it is displayed, alter a state, or lead to an action.

# Formatting

## Anatomy

1. Icon: Visually supports standalone links to help users better understand the context and recognize the action that will be triggered.
2. Label: Communicates what is being linked to, or describes the action that will be triggered.

## Sizing

The link element has several size variants that Soul has defined for text. The size should match the text type size it is in line with or the default text size (body medium) when using links separately from other content.

# Link variants

## Standalone link

Standalone links are used on their own, directly following the content. They should not be used within sentences or paragraphs. Standalone links are the default link style.

An icon can support a standalone link. The default size for the icon is medium, but you can use large if you use a larger link size.

## Inline link

Inline links are used in sentences or paragraphs of text. The inline link behaves the same as the standalone link.

Inline links should not be used on their own and should not be paired with icons in most cases.

---

## List item

List items are a base for the lists in the selects or modals representing selectable parts.

## Anatomy

Each item is a user's choice. The items are shown together in a list.

1. Trailing icon is usually used to show the item's visibility, for example, if the content label is private or shared across the whole account. In the case of multilevel selects, there is an arrow icon or a button to open the next level.
2. Content area represents the space where the content of the item is shown. Despite the item type, there can be only the text or, for example, profile name with profile tag and URL.
3. Leading icon represents what kind of content the item is. The icon can be changed to a visual element, e.g. a profile or user image.
4. Checkbox is shown only in case of multi-select to indicate the possibility of selecting more than one item.

## Variations

We differentiate several types of items by their content or purpose. Each variant, except the headline and divider, can contain leading and trailing icons or a button in some specific cases.

1. Divider is used to split the item list into logical groups.
2. Sometimes, the headline can be enriched with an option to create a new source. A simple link represents this option.
3. Headline is a unique item used only on top of the group of items with the same kind of content or on top of the list. It is always used in case select all option exists.
4. User group/team items are specially designed items used only to represent the groups/teams of users.
5. User items are specially designed items used only to represent the Emplifi Platform users. The additional information is optional.
6. Profile items are specially designed items used only to represent the social profile.
7. Text with Additional info item is based on the text item and enriched by an extra row of the text. This usually informs the user about the structure, role, creation date, team, or any additional information that helps users to recognize the main text.
8. Text is the core item variation. It usually represents folders, groups, labels, interests, or any data sources without special visual needs.

---

## Modal

Modal helps to focus the user's attention on one task or piece of information via a window that sits on top of the page content.

# Basics

Use modals to focus the user's attention on an essential piece of information or action required for the further function of the platform.

#### When the modal appears

- It has a close button in the top right corner.
- It appears with an overlay covering the whole interface (except the modal).
- It disables all app functionality and remains on the screen until the user confirms, dismisses, or performs the required action.

Aim to use one modal at a time. Exceptionally, it's possible to stack multiple modals one over the other. However, this is not a recommended behavior.

In case you need to use multiple modals, make sure they're all the same size.

# Modal variants

We differentiate three main types of modals: two simple modals—confirmative and informative—and an advanced modal that helps users to perform more complex actions.

## Confirmation modal

The confirmation modal is the simplest modal that informs the user that something happened and it needs a user's attention.

The confirmation modal is used to confirm or dismiss actions. It's necessary to perform the proposed action to resolve the issue that triggered the modal. The required action could involve removing or deleting something, so you may use the "Delete" or "Remove" button. By dismissing the proposed action, the user gets returned to the screen or step that leads to opening the modal.

## Informative modal

A simple modal informs the user that something happened, but usually, the user can only confirm that they understand.

The informative modal informs the users about something that may have happened in the product without their knowledge. Usually, the only action the user can do is acknowledge that something changed. Therefore, the button usually says "I understand".

## Advanced modal

The advanced modal is used for more advanced actions, such as creating and editing multiple items in one place or adding or selecting a profile.

# Anatomy

The modal is defined by its content and its action.

Content - The content could consist of a headline, a paragraph of text, or a combination of both, and it can be supported by illustration.

Action - The action is always expressed with one CTA button. However, the main action can be complemented by a secondary and tertiary button.

## Confirmation and Informative modals

The confirmation and informative modals consist of the following parts.

1. Close buttonEach modal has a close button as a default option for closing it. This button has the same function as a cancel button if it is available.
2. IllustrationIf there's an illustration, it's usually an empty state illustration that helps the users better understand the context of the message.
3. ActionThe modal always has at least one CTA button. It can be complemented by a secondary action, for example, by canceling or checkbox element.
4. ContentThe content area includes a description, banner, or a combination of visual elements that describe what needs to be confirmed.
5. HeadlineThe headline provides guidance about what the modal is about.

## Advanced modal

The advanced modals consist of the following parts.

1. Close buttonEach modal has a close button as a default option for closing it. This button has the same function as a cancel button if it is available.
2. ActionsThe modal always has at least one CTA button. It can be complemented by a secondary action, for example, by canceling or checkbox element.
3. ContentThe content area contains elements that the users need to interact with, for example, inputs, selects, lists of users, profiles, or labels.
4. HeaderThe header area contains always a title and it can be supplemented by tabs, select, input, or another component.

# Behavior

- It's possible to stack multiple modals one over each other. However, this is an unrecommended behavior. In case you go with this option, the modal has to be the same size.
- There's an animation when the modal appears. By default, it's 200ms dissolve, ease in and out effect.
- It's always positioned in the middle of the screen.
- The modal always appears over the whole interface, even over the main navigation, and it's supported by an overlay to increase the focus on the modal.

#### Modal is dismissed when

- Pressing the Enter key if the "Cancel" button is focused
- Pressing the ESC key
- Pressing close button
- Pressing the "Cancel" button
- Pressing outside of the dialogue

#### Modal is confirmed when

- Pressing the Enter key if the CTA button is focused
- Pressing the CTA button

---

## Number input

Number input allows users to enter a numeric value and incrementally increase or decrease this value with two controls.

# Overview

Number inputs are similar to text inputs except they are used to designate numerical values only. Number inputs incrementally increase or decrease the value using two controls and reduce input efforts for adjusting small values.

#### When to use

- When users may not know exact values and only want to change the values that are relative to their current state.
- Adjusting small values when increasing or decreasing them requires only a few clicks.
- The user needs to input a numeric value.

# Formatting

## Anatomy

1. Error messageThe error message communicates pertinent information that assists the user in completing a field in the right way. Error message appears when the inputted value is wrong and the input loses its focus state. The error message appears underneath the input area. For error messages, use sentence-style capitalization, and in most cases, write the text in full sentences with punctuation according to the content guidelines.
2. Add buttonThis icon triggers incremental values.
3. Subtract buttonThis icon triggers decremental values.
4. Numeric valueThe value changes when a user enters a value into the field or uses the subtract or add controls.
5. Input areaThe input area is a space to provide users to enter a numeric value.
6. Title (optional)The title helps users understand what information to enter into a number input. It is recommended unless you get an approved accessibility exemption. It can be supported by a help icon showing an explanatory tooltip on hover with more detailed information.

# Behaviors

## Interactions

- KeyboardUsers can navigate to the number input field by pressing Tab. Users can then increase the value by pressing Up arrow or decrease the value by pressing Down arrow.
- MouseUsers can click on the input field and change the value by typing inside the input field. Users can also increase or decrease the values by pressing the add or subtract button controls.

## Validation

An error state is triggered if the data is invalid or a required field is left empty. Error states have two visual indicators to signify invalid content: a red border and an error message.

## Default values

Numeric input should always have a default. The default will usually be '1'. Sometimes, you will have the input value defaulted to '0'. For example, when there is an option to set up a custom button style, the default number of border width may be '1' and the default number of border-radius '0'.

---

## Progress bar

The progress bar is a visual element that provides information about the status of a submission or collecting process. For example, progress bars can be used to display how much time is left for a task to be completed or how much data is left to process, to inform the user how long they will have to wait.

# Overview

A progress bar indicates that the user's request has been received and the application is progressing toward completing the requested action.

The progress bar also informs users about the status of ongoing processes, the estimated time of how long a process will take, or if a request is being executed.

# Anatomy

1. Error message (optional)The message helps streamline the process and keep data clean when the user fills out forms.
2. Bar indicatorIndicates how much the process has been done.
3. TrackThe static area that the bar indicator moves on top of and acts as a fixed visual reference of the total length and duration of the process.
4. Helper text (optional)The helper text provides extra details regarding the procedure.
5. Count infoTypically, the count info presents progress as a percentage, fraction, ratio, or numerical value for a determinate situation.
6. TitleThe text describes the process that the progress bar refers to. The title can be visually hidden but must be defined to be accessible.

# States

There are three states for the progress bar: active, success, and error. After the process is completed successfully or unsuccessfully, a progress bar can either remain persistent as confirmation or validation or automatically be dismissed depending on the most suitable use case.

1. OverloadedIf data can overload the progress bar's maximum and the amount of data is 200% and more, use the overloaded state. Data visualization is not reflected from this point.
2. OverloadIn specific cases, the progress bar can be visualized with an overload bar indicator to show that the data is over the limit.
3. ErrorThe error state indicates that the action was not completed. If an error occurs, an inline notification or error handling should appear within the frame. When a process fails, the indicator bar's progress spans full width, turns red, and remains visible.
4. SuccessThe success state, represented by a full-width green progress bar, indicates that the action was completed successfully.
5. Data processingThe data processing state, represented by a bar indicator, indicates that the action is still in progress.
6. DefaultThe default state, represented by an animated bar indicator, indicates that the action is still in progress.

# Modifier

## Divided

In specific cases, the progress bar can be visualized with a predicted bar indicator to show the amount of data added after some action typically triggered by the user.

If needed, a divided progress bar can also be combined with an overload modifier. In this case, the color should be changed primarily on the second part of the bar.

# Content

The progress bar has a title and an optional helper text.

## Title

- The title text should never change as the progress bar is loading. It also does not need to be updated when the process ends since the bar indicator color and helper text provide the success or error information.
- Keep the title short and concise by limiting it to a few words or a single line of text.
- The title informs users what information the progress bar is processing.

## Count info

- Common use cases of helper text for a progress bar can either be a generic phrase, for example, "Collecting data…", or it can indicate an exact amount of something to be completed, for example, "45/200" or "12 of 128 profiles".
- Helper text is used to show additional information about the process taking place.

---

## Radio button

Use radio buttons when the user can choose a single option from a list of mutually exclusive choices. Only one radio button can be selected at a time. By default, one radio button is preselected. When the user selects another option, the previous selection is automatically deselected.

## Usage

#### When to use radio buttons

- Lists selections –– Use radio buttons to let the user choose a singular item within data tables or lists.
- In settings –– Use radio buttons to allow the user to switch the settings in a menu, on a page, or in a component.
- In forms –– Radio buttons can be used in forms, both on full-page or in the side panels.

#### When to avoid radio buttons

Use checkboxes instead of radio buttons if the user can select more than one option. Radio buttons are used to select only one item in a set, while checkboxes are used to select unlimited options at once.

If there are more than five options to choose from, use Select instead of the Radio buttons to deliver users a better experience with a less overwhelmed UI.

# Formatting

## Anatomy

A radio button consists of clickable inputs (circles) with text labels located to their right. If there is a group of radio buttons, you can add a group title.

1. Radio button label –– The label informs about the select options. This information can be visually supported by an image icon.
2. Radio button input –– The radio button indicates the selection state. By default, one of the options is preselected.
3. Group title (optional) –– The title describes the options or provides guidance for choosing the best option.

## Alignment

Radio button labels are positioned to the right of the inputs.

You can choose a horizontal or vertical layout for grouped radio buttons, depending on the use case and the UI structure. However, the vertical arrangement is preferred for better readability.

# Composition

## Group title (optional)

When necessary, complement a set of radio buttons with a heading to provide further context or clarification.

- Even though you decide the title isn't necessary for the interface, it is always needed in code.
- When a set of radio buttons is part of a component with a title, it's unnecessary to add a title for the radio button group.
- Write the title in sentence case.
- A group title can either state the category of the grouping or explain what to select.

## Radio button labels

- Place the label to the right of the radio button inputs.
- The label explicitly says what effect the selection has.
- The copy is clear and concise. Aim for 3 words maximum. If you're lacking space, try to reword the label. Do not truncate radio button label text with an ellipsis.

# Overflow content

- The text should wrap beneath the radio button. The radio button input and the label should be top-aligned.
- Long labels may wrap to a second line; avoid truncation.

---

## Side panel

The side panel serves to focus the user's attention on several tasks or pieces of information via a window that sits on top of the page content.

# Basics

Use the side panel to focus the user's attention on a larger amount of information or actions complementing the further function of the platform.

#### When the side panel appears

- it has a close button in the top left corner.
- it appears together with an overlay covering the whole interface (except the side panel).
- it disables all app functionality and remains on the screen until the user confirms, dismisses, or performs the required action.

Aim to use one side panel at a time. Exceptionally, it's possible to stack multiple side panels one over each other. However, this is not a recommended behavior.

# Anatomy

The side panel is defined by the header, content, and actions. The header always contains a title and can be supplemented by components including select or input, among others. The content part is variable. For the action always use one CTA plus a secondary or tertiary button.

1. NavigationIn case the content needs to be split into more categories, you can use the navigation on the left in the side panel.
2. Close buttonEach side panel has a close button as a default option for closing it. This button has the same function as a cancel button.
3. ActionsThe area show always has at least one CTA button. It can be increased by secondary action, e.g. cancel or checkbox element.
4. ContentThe content area contains elements that the users need to interact with, for example, inputs, selects, lists of users, profiles, or labels.
5. HeaderThe header is a variable area containing a title and can be supplemented by components including tabs, select, input, or others. For more details, see header variations.

# Behavior

- It's possible to stack multiple side panels one over the other. However, this is an unrecommended behavior.
- There's an animation when the side panel appears: a 200ms Move in Right, Ease In And Out effect.
- It's by default positioned to the right side of the screen and it fills 100 % height of it.
- The side panel always appears over the whole interface, even over the main navigation, and it's supported by an underlay to increase its focus.

#### The side panel is dismissed when

- Pressing the Enter key if the "Cancel" button is focused
- Pressing the ESC key
- Pressing close button
- Pressing the "Cancel" button
- Pressing outside of the dialogue

#### The side panel is confirmed when

- Pressing the Enter key if the CTA button is focused
- Pressing the CTA button

---

## Snackbar

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily towards the bottom of the screen. When they appear, they shouldn't interrupt the user experience, and in most cases, they don't require user input to disappear.

# Types

We differentiate two types of snackbar according to how much of the user's attention is needed.

## Informative snackbar

The default snackbar informs the user about a process that the platform has performed or will perform. The message in a snackbar can be supplemented by an indicator, button, loading, or a combination of previous.

## Alerting snackbar

The alerting snackbar is a visually more aggressive type of snackbar with two variants used as the background color, red and yellow. Alerting snackbars are mostly used to notify about a critical error or warning that can heavily disturb the user flow.

# Anatomy

1. Confirmation buttonBy default, the confirmation button is used as the primary button, with the default purpose of confirming a previous user action. Use a secondary button in a ghost variant if the action is the opposite (undo action).
2. LoadingLoading indicates that a process is running in the background.
3. IndicatorThe indicator supports the message state and helps users to understand it better.
4. Close buttonThe close button is used to hide the snack bar. Clicking the button does not cancel the running process.
5. MessageThe message should be short and easy to understand. In some cases, it can be supported by a hyperlink to show more information.

# Variants

Despite the type of content and message, we differentiate between several variants of the snackbar.

1. High attentionThe high attention snackbar notifies the user about critical errors and warnings. For this variant, we always used an alerting type of snackbar. The snackbar is closable (i.e. the snackbar does not disappear automatically and requires user action to close). It can be supplemented by a CTA button and/or hyperlink to show detailed information.
2. IndicatorWe use two types of indicators: red and green. The red indicator indicates a failed action or error and should usually contain a close or retry button. The green indicator indicates a successful action, e.g., saving content to collect or publishing content. For this variant, do not use a close button (i.e., the snackbar disappears automatically). You can use the "undo" button that returns the action you just performed.
3. LoadingThe loading snackbar tells the user that there is an action in progress in the background. After the action is done, the snackbar disappears, and a snackbar with a green or red indicator appears. The snackbar must be closable (i.e,. the snackbar must not disappear until the action is done or the user manually closes it).
4. Plain textThe default variant of the snackbar is with a text message. A CTA button can supplement the message. The close button is optional for this variant (i.e., the snackbar can disappear automatically without user action).

# Behavior

## Appearing and disappearing

Snackbars appear without warning and don't require user interaction. They automatically disappear from the screen after a minimum of two seconds.

Maximum visibility time depends on the number of words. Each word should be visible 300ms to give enough time to users to read the whole message.

Example: If the platform shows a snackbar containing 12 words, the visibility time is calculated by the number of words multiplied by 300ms, meaning the snackbar should be visible for 3600ms.

## Position

The snackbar is positioned in the bottom-left corner and is always shown on top of the page content.

- If the multi-action bar is opened, the snackbar is moved more to the top to not overlay the bar.
- If the main navigation is expanded on a hover, it is shown over the snackbar.

## Closability

Use the close button only if you really need the user to read the message, e.g. error snackbars, or if there is an action represented by a hyperlink or CTA button.

The only exception to using the close button is when we need to force the user to take an action. In this case, use a CTA button without the possibility of closing.

## Stacking

If we need to show multiple snackbars simultaneously, we use stacking.

#### There are a few rules that have to be followed

- Snackbars increase continuously until the queue is exhausted. If a snack bar has a close or other action, it waits for the user to perform the action before continuing to hide the other snack bars.
- We show only three snackbars simultaneously except in case of an error or warning message. Snackbars with an error or warning message remain visible, and other snackbars are stacked above them.
- Snackbars stack one above the other, and they disappear according to the rules.

---

## Tab & Tab list

Tabs are used to organize content by grouping similar information on the same page while allowing the user to switch views.

# Anatomy

1. Tabs divider (optional)
2. Following informations (optional)Soul allows the use of a trailing icon, notifier, or promotion badge to extend a tab for extra pieces of information.
3. Leading icon (optional)
4. Indicator
5. Tab label

# Variations

There are several variations of tabs. To choose the right one, consider the context of the situation.

1. CombinationSoul also allows using tabs contain leading icon and notifier at the same time.
2. Leading iconPlace a descriptive icon on the leading position of the tab to visually support tab label.
3. NotifierNotifier is a superscript number behind the tab label. This can be used to represent how many elements the tab contains.
4. DefaultTabs in the default state are withou label, icon, or any other visual supplement.

## Promotion badge

A particular variant of the tab is the promotion tab, which uses the promotion badge. Soul defines this variant for cases when the tab represents a new section, or there is new content under the tab.

Use promotion badges only in small sizes.

## Help

Another variant we define is the tab with help, for when we expect users will need explanatory content under the tab or tab itself.

The help icon is placed next to the text value with interaction on hover, showing an explanatory tooltip containing additional information.

# Sizes

There are several sizes of buttons. To choose the right one, consider the context of the situation.

1. LargeUse large tabs if you need to switch between large parts of the UI.
2. MediumUse regular tabs if you need to switch between smaller parts of the UI. For example, in a panel or widgets.

# Alignment

Tabs can be aligned on the left side of the container, or they can be centered.

# Placement

Soul differentiates two types of tabs by their placement. The default variant is mainly used in the context of the page.

The on-header variant is used only in the page header, where we want to align the tab content vertically with the content of the header.

---

## Text input

Inputs enable the user to interact with and input text-based data. This element can be used for long and short-form entries.

# Overview

There are instances, for example, within a web form, where you need users to enter both short and long-form content. In such cases, use the size of the text input box to reflect the length of the content you expect the user to enter.

## Input

Use when the expected user enters a single line of text, as opposed to a paragraph.

## Text area

Use when the expected user enters more than one sentence.

# Formatting

## Anatomy

1. Error messageThe error message communicates pertinent information that assists the user in completing a field in the right way. Error message appears when the inputted value is wrong and the input loses its focus state. The error message appears underneath the input area and, in the case of the input, is supported by icon number 4. For error messages, use sentence-style capitalization, and in most cases, write the text in full sentences with punctuation according to the content guidelines.
2. Explanation iconThe explanation icon complements an error message. It can be used only in combination with text inputs.
3. PlaceholderPlaceholder text provides hints or examples of what to enter. It disappears after the user enters data into the input and should not contain crucial information. Use sentence-style capitalization, and in most cases, write the text as a direct statement without punctuation.
4. Input areaThe input area is a space for users to enter a value.
5. Title (optional)The title helps users understand what information to enter into a text input. Placeholder text in lieu of a title is sometimes used as a space-saving method. However, this is not recommended because it hides context and presents accessibility issues.

## Default values

Where possible, add programmatic assistance. Detect and pre-fill inputs to reduce errors and save time. When the software can't determine the value that belongs in an input, use type-ahead to make suggestions. Use sentence-case for default values and detected values.

## Validation and errors

Validation helps streamline the process and keep data clean when the user fills out forms.

## Character count

Inputs and text areas may have a character limit and counter. Use the character limit and counter to let users know how long their entry can be before they begin typing.

Character count allows users to understand an input error if they surpass the character limit.

# Content

## Titles

Effective form titling helps users understand what information to enter into a text input. Using placeholder text in lieu of a title is sometimes employed as a space-saving method. However, this is not recommended because it hides context and presents accessibility issues.

#### Accessibility best practices for labels

- The title must be visible when an input gets focused.

## Placeholder text

Placeholder text provides hints or examples of what to enter. It disappears after the user begins entering data into the input and should not contain crucial information. For placeholder text, use sentence-style capitalization, and in most cases, write the text as a direct call-to-action statement without punctuation.

---

## Bulk-action bar

The bulk-action bar component allows users to modify attributes of multiple selected items simultaneously.

# Anatomy

1. Close
2. List of options
3. Select all (optional)
4. Select indicator

# Behavior

When the user selects one or more items from a list, table, or similar interface, the bulk-action bar appears at the bottom of the screen. This bar is centered above the content from which the selection was made. If there is a navigation on the left, the bar's placement will adjust by subtracting the width of the navigation to ensure it remains aligned with the main content area.

The bulk-action bar also has a specific minimum and maximum width. Details are available in the Design properties tab on this page.

If actions performed in bulk do not remove the previously selected items from the current selection (e.g. deletion, or setting a status as Done), and only modify attributes like labels, the bulk-action bar remains active. In this case, it will only disappear when the user manually closes it.

## Select all

When a user selects all items in the list, the "Select all" option automatically toggles to "Clear". This allows users to quickly deselect all items with one click.

## Filtered list

This situation occurs when I start filtering above the item list. The bulk action bar then reflects what the user can or cannot select. When a filter dialog (panel, modal) covers the page, the bulk action bar remains open.

When filtered, select all only selects matching filter items. The user can then deselect them again, but the original selection that may already have been there remains the same.

## Close

Users can close the bulk-action bar in 5 ways:

- Altering the original selection (e.g. by deleting, removing, changing status of selected items) will also close the bar
- If only one item is selected, deselecting it will automatically close the bar
- If all items are selected, clicking on [Clear] will deselect all items and close the bar
- Press the [ESC] key as a keyboard shortcut
- Click on the close button [X] within the bulk-action bar

# Overflow

If the number of items do not fit within the bulk-action bar, all items that are not visible are inserted under the meatballs menu (represented by 3 dots).

# Placement

## In-app

The bar is placed in the middle of the content above which it opens. In case there is a navigation on the left, the width of this navigation is subtracted for its placement.

## In dialog

In case the bulk-action bar appears in the space where there is no navigation on the sides, it fills the space to the width with a 24px buffer zone on the sides.

## Overlaps

Bulk-action bar should have reserved space at the end of each window, table, list 108px to avoid covering the last item.

# Snackbars

Snackbars appear 24px above the bulk-action bar. Their behavior does not change. Here is how snackbars behave.

# References

- ARIA: menubar role

---

## Radio button card

Use a radio button card when the user can choose a single option from a list of mutually exclusive choices. Only one radio button card can be selected at a time. By default, one radio button card is preselected. When the user selects another option, the previous selection is automatically deselected.

# Usage

#### When to use the radio button card

Use the radio button card to present information more prominently and clearly explain all the available options to users.

- List selections — Use radio buttons to let users choose a singular item within a list.
- In forms — Radio button cards can be used in forms on the full page and on side panels.

#### When to avoid radio button cards

If the user can select multiple options, use Checkboxes instead of Radio button cards. Radio button cards allow users to choose only one option in a set, while checkboxes allow users to select unlimited options at once.

If there are more than five options to choose from, use Select instead of Radio button cards to deliver a better user experience with a less cluttered UI.

# Formatting

## Anatomy

A radio button consists of clickable inputs (circles) with text labels to their right. If there is a group of radio buttons, you can add a group title.

1. Helper (optional) –– Use a helper if you need to add additional information about the option that cannot be placed in the description, such as a part of the product documentation.
2. Label and description — The label informs about the selectable options. An image icon can visually support this information, and a description can enhance it if an explanation is needed.
3. Radio button input –– The radio button input indicates the selection state. By default, one of the options is preselected.
4. Container –– The container frames the radio button card and, at the same time, indicates the state of the component (e.g. selected, error, hover, etc.).
5. Group title (optional) –– The title describes the options or provides guidance for choosing the best option.

## Alignment

Radio button labels are positioned to the right of the inputs.

Depending on the use case and the UI structure, you can choose a horizontal or vertical layout for radio button cards. However, the vertical arrangement is recommended for better readability.

# Overflow content

- In a horizontal layout, containers should be the same height, regardless of whether the content in some of them is shorter.
- The text should wrap beneath the radio button. The radio button input and the label should be top-aligned.
- Long labels may wrap to a second line; avoid truncation.

---

# Design Properties

## Button — Design Properties

# Sizes

There are several sizes of buttons. As with button types and variations, consider the context of the situation when selecting the appropriate size.

1. Small - Use the small button only in cases where there is a lack of space in the interface or when the button's action is secondary to the page content.
2. Medium - Use the medium button for most cases. This is the default size of our buttons.
3. Large - Use the large button for essential actions in a spacious interface.

# States

States are visual representations used to communicate the status of a button as an interactive element.

1. AppliedThe button is in the applied state if there is a need to indicate a completed action based on a user's input. E.g., Applied filters or applied labels.
2. DisabledThe button is Disabled when its action is blocked by something that needs to be completed first, like changing a field value or waiting for a system response. Its opacity is 50%. Add an explanatory tooltip to inform the user why the button is disabled. The on-hover cursor type will be in the 'not-allowed state' to indicate that the requested action will not be executed.
3. LoadingWhen an action is running, the button is in a loading state. All the current buttons support this state, and the width does not need to be changed. The on-hover cursor type will be set to 'in progress' to indicate that the action is being completed.
4. Active / isSelectedThe button is in a Pressed state after it has been clicked. In case the click to button opens a popover related to it, the button is in the selected state.
5. FocusA button is in the focus state when the user targets it via the keyboard.
6. Hover When the user's cursor is on a button, it is in a hover state, but they haven't clicked it yet.
7. Enabled The enabled state of a button is when the user's cursor is not hovering over it, and the button isn't disabled.

# Typography

The button text is written in a sentence case. Only the first word of the button is capitalized unless it includes a proper name or a word we capitalize.

Font-size (px): 13 | Font-weight: Semi-Bold | Button label

---

## Badge — Design Properties

# Anatomy

## Save zone

## Status

## Non-actionable & Propagation

## Icon only

---

## Checkbox — Design Properties

# States

The checkbox allows various states: unselected, selected, and indeterminate. In addition to these states, checkboxes also have a separate state for focus and disability. The default view of a checkbox set is with no option selected.

- DisabledA checkbox in a disabled state indicates that a selection exists but is not available given the circumstances. This can be used to maintain the layout's continuity and communicate that action may become available in the future. A disabled checkbox requires a tooltip explaining why is the option is disabled.
- FocusThe Focus state indicates that an interaction exists. This state is shown on the mouse over checkbox input or label; or on selecting by a keyboard.
- SelectedIt's possible to select multiple checkboxes at a time. Once the user chooses another item, the previous choice is stay selected.
- IndeterminateThe indeterminate state comes into play when the checkbox contains a sublist of selections. When some items are selected and some not, we use the indeterminate checkbox status.
- UnselectedIn most cases, the unchecked state is a default state. An exception could be made when you need to speed up an obvious flow. For example, when you're saving an influencer to a newly created collection, the collection is immediately checked.

# Typography

Checkbox group title and label should be written in a sentence case meaning that only the first word in a phrase and any proper noun is capitalized.

Font-size (px) | Font-weight | Title: 11 | Regular | Label: 13 | Regular

# Interactions

The selection of a checkbox is realized by clicking the checkbox input or clicking the checkbox label. This way it's easier for the user to make the selection.

# Target zone

All interactive targets should take up at least 24×24 CSS pixels of space to ensure that they are big enough and that there's sufficient space between them. This makes it less likely that a user will accidentally activate the wrong control. White space around the target can also be included.

# Parent and child checkboxes

Checkboxes can have a parent-child relationship with other checkboxes.

#### They follow these rules

- If the parent checkbox is in the indeterminate state and the user clicks it, all the child checkboxes are selected. After a second click, all the child checkboxes are deselected.
- If some, but not all, child checkboxes are checked, the parent checkbox is in an indeterminate state.
- If a parent checkbox is unchecked, all child checkboxes are unchecked.
- When the parent checkbox is checked, all child checkboxes are checked.

#### References

- Target Size – Minimum (Level AA) – WCAG 2.5.8

---

## Data table — Design Properties

# Dimensions

## Vertical spacing

## Horizontal spacing

# States

States are visual representations used to communicate the status of a button as an interactive element.

## Column header

- Button hover: The button with a dropdown menu follows all rules described in the button and dropdown menu documentation
- Hover: When the user's cursor is on the header, it goes into a hover state. If the header is sortable, the user will see visual feedback, and the cursor will change to a pointer. If the header is static, there will be no visual change, except if the header contains additional actions. In that case, a button will be visible during hovering.
- Enabled: The header is in an enabled state when the user's cursor is not hovering over it.

## Rows

- Loading: The row is in the loading state when data needs to be loaded. Use skeleton loader as a visual feedback for the user.
- Disable: The row is in the disabled state when its action is blocked by something that needs to be completed first, like changing a field value or waiting for a system response. Its opacity is 50%. Use an explanatory tooltip to explain the situation to the user. The tooltip is shown on hover.
- Hover: A row is in the hover state when the user's cursor is on the row but they haven't clicked on it yet.
- Enabled: A row is in the enabled state when the user's cursor is not hovering over it and the row isn't disabled.

---

## Dropdown menu — Design Properties

# Dimensions

Dimensions of the dropdown list and items are the same as Soul use in selects.

# Submenus

By default, the submenu opens down and overlaps the main menu. The first item is aligned with the parent item from the main menu.

If the dropdown menu is close to the bottom of the screen, the direction is changed, and the submenu opens up. In this case, the last item is aligned with the parent item.

---

## Modal — Design Properties

# Dimensions

Modal's default width is defined by design as 420px (increased by 30px). The height of the modal depends on the volume of content and it's up to 80% of the viewport.

All elements, eg. buttons, inputs, selects, etc., in a modal are always in medium size.

# Advanced modal header

The header area always contains a title, and it can be supplemented by tabs, select, input, or another component.

# Close button states

---

## Side panel — Design Properties

# Dimensions

Width is defined by the designer, it's always fixed, and starts at 420 px (increased by 30 px). The maximum width is 80 % of the viewport.

The height of the side panel is always 100 % of the viewport.

# Header variation

The header is a variable area containing a title and it can be supplemented by tabs, select, input, or another component.

# Close button states

---

## Snackbar — Design Properties

# Dimensions

# Placement

# Typography & copy

The snackbar text is written in a sentence case. Only the first word is capitalized unless it includes a proper name or a word we capitalize.

Font-size (px): 13 | Font-weight: Regular | Snackbar text

# Animation

By default, snackbars are shown and hidden by Slide up fade motion effect.

---

## Tab & Tab list — Design Properties

# Dimensions

# States

1. DisabledThe tab becomes disabled when its action is blocked by a condition that must be completed first, like changing a field value or waiting for a system response. The disabled state has to be supported by an explanatory tooltip to inform the user why the tab is disabled.
2. HoverA tab is in a hover state when the user's cursor is on the tab, but they haven't clicked on it yet.
3. OccupiedOnly one tab can be occupied at a time. By default, the tab that is on the left is occupied.
4. EnabledThe enabled state of a tab is when the user's cursor is not hovering over it, and the button isn't disabled.

---

## Text input — Design Properties

## Sizes

The soul design system provides two input sizes - Medium and small- and only one text area size.

## States

Both text inputs are represented by states helping a user to understand the action he can provide.

1. FilledThe state after a user enters a value and left the text input.
2. DisabledText input in a disabled state indicates that an option exists but is not available given the circumstances. This can be used to maintain the layout's continuity and communicate that action may become available in the future. A disabled text input requires a tooltip explaining why the option is disabled.
3. Not editable (Input only)Not editable state shows to users a specific type of information, eg. URL address, without an option to edit it. It's often combined with a button to copy this information to the clipboard.
4. ErrorAn error state communicates a user or system mistake.
5. FocusA focused state communicates when a user has highlighted an element, using a keyboard or mouse and it is possible to enter a value.
6. EnabledIn most cases, the inactive state is a default state. An exception could be made when you need to speed up an obvious flow. For example, when a user opens a select with a search, the search is immediately focused.

## Typography

Text input title and placeholder text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized. The text input title should be four words or less.

Font-size (px) | Font-weight | Title: 11 | Regular | Placeholder / Content: 13 | Regular
