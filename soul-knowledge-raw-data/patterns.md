# SOUL Design System — Patterns

> Fetched from https://soul.emplifi.io — Patterns section

---

## 1. AI guidelines

By following these patterns and guidelines, designers and developers can create AI-enhanced applications that provide significant value to users, improve their workflow, and ensure a seamless, intuitive user experience.

### Pattern 1: User-Initiated AI with Custom Input

- Selection from template options
- Text input
- User needs to tell it what to do.

- Versions
- Works with it further
- User receives the result.

### Pattern 2: User-Initiated AI with Automatic Output

- Versions
- Works with it further
- User receives the result.

### Pattern 3: AI offers recommendations over content

1. User uses the result.
2. AI offers recommendations over content.
3. User uses the result.

### Pattern 4: Continuous AI Assistance

- Contextually relevant advice
- Dynamic content analysis
- User works with the content and AI continuously provides recommendations or suggestions.

### Pattern 5: AI-driven Automation

- Parameter configuration
- Text input
- User defines parameters and rules for automation.

- Notification of task completion
- AI automatically performs actions according to the set rules.

### Pattern 6: Predictive AI Insights

- Text input
- Data file upload
- User provides relevant data or parameters.

- Predictive models
- Trend analysis
- AI performs predictive analysis.

### Pattern 7: Conversational AI Interface

- Voice assistant
- Chatbot
- User interacts with AI through a conversational interface.

### Pattern 8: AI-Enhanced Search and Retrieval

1. User uses the results for further work.
2. User receives relevant results with contextual recommendations.
3. AI searches and analyzes the database/content.
4. User specifies criteria or keywords.
5. User activates AI search.
6. User uses the information or result.

---

## 2. Common actions

Common actions often appear across various components and workflows. To maintain platform consistency, apply these actions only in the ways outlined below.

### Add or Create

**Add** inserts an existing object to a list, set or system. For example, adding a new social profile.

**Create** produces and insert a new object to a list, set or system. For example, creating content in Publisher.

#### Hierarchy and placement

There are three degrees of emphasis depending on the importance of the add action on the page: high, medium or low. For example, a high-emphasis action uses a single primary button placed on the upper right-hand side, while all other buttons are secondary.

### Cancel

**Cancel** prevents the action in progress and closes the component or item. Always warn the user in case of any collateral consequences such as data corruption or data loss.

For cancel actions in a ghost variant, use a secondary button. The button is positioned on the left side and is usually paired with the primary action.

### Close

**Close** terminates the current page, dialog or menu. Close is also used to dismiss information such as notifications.

#### Using the button with a close icon

- For full-screen dialogs, the button is typically placed inside of the box on the upper left side of the element
- For panels, the button is placed outside of the box on the upper left side of the element
- For modal dialogs, the button is placed outside of the box on the upper right side of the element
- For information banners, the typical placement is on the upper right side of the element

#### Using the button with a label

- Use a close instead of cancel button if the user's previous actions are immediately done, eg. advanced options in a search

### Clear

**Clear** removes selections or data from a field. Clear also deletes the contents in a document, such as a log. The default selection or value is reset for controls with a default selection or value, such as radio buttons.

Use the button with a close icon on the right side of a field or a close icon on the right side of an item or value.

### Delete

**Delete** destroys an object. Delete actions are typically permanent or can't be easily undone.

Always warn the user of any collateral damage if an object is destroyed, such as loss of data. Use either the delete or trash icon, a danger button, or a danger option in a menu.

Discover the differences between delete and remove and what type of dialogs you can use in the Remove, Delete or Disconnect pattern.

### Disconnect

**Disconnect** destroys a connection between data. Disconnect actions can be easily undone by reconnecting.

This is typically used to relate the platform and connected data sources, such as social profiles.

### Edit

**Edit** allows the user to change data or values. Edit usually triggers a state change to the targeted object or input item.

Use edit as an option in a menu or as a button with an edit icon.

### Error

**Errors** occur when an action or process does not succeed. Error notifications can occupy full pages, form fields, notifications and modals.

Error notifications should explain the context of what happened to the user and demonstrate a clear path to continue.

Make sure the error message is straightforward and supportive. For example, consider offering recommendations or redirecting the user to a previous state or support page.

Some components, such as text input and form field errors, are relatively small and demand a more considered approach to how the space and placement of the error are handled. For these instances, use inline error notifications.

### Remove

**Remove** is distinct from delete, as the removed object is not destroyed. The object is removed from a list or item. Multiple objects can be removed at once.

Discover the differences between delete and remove and what type of dialogs you can use in the Remove, Delete or Disconnect pattern.

---

## 3. Disabled states

A disabled state is applied when the user is not allowed to interact with a component because of permissions, dependencies or pre-requisites.

Disabled states altogether remove the interactive function of a component.

### Disabled variations

1. **Hidden**: In the hidden, disabled variation, the component is completely hidden from view. The user does not know the option is there.
2. **Read-only**: The user can't interact with the read-only state, but the content is still accessible. The visual style should not include interactive indicators, such as hover states or text embellishments (e.g., underlines). This state is mostly used with text input components.
3. **Default disabled**: A default disabled state doesn't involve visual interactions and can't be clicked or selected. It takes on the default disabled visual style and is always supported by an explanatory tooltip shown on the hover of the component.

### Default disabled

Use a default disabled state when a component is temporarily disabled due to prerequisites or dependencies—when one part of an action relies on another.

- The component in a disabled state is always supported by an explanatory tooltip shown on the hover.
- The user should still be able to see the component temporarily disabled.
- The default disabled component becomes enabled once the dependencies are resolved and/or the pre-requisites are achieved.
- Default disabled states are temporary and most commonly activated by a user's action or inaction.

#### Style

Style default disabled states by decreasing opacity to 50% with no hover state change and applying a not-allowed cursor. Apply the correct disabled state according to each component.

### Read-only

Use the read-only variation in cases where the content of a disabled component or element remains relevant or is essential for the user to complete the task.

This state allows the user to read the information without changing or interacting with it.

#### Style

The visual style of the read-only states depends on the individual component but never contains any interactive indicators.

### Hidden

Use the hidden, disabled variation when the user doesn't have permission to view, interact with, or take action on a UI feature.

You can enable the hidden element and make it visible on the UI by changing the assigned permission.

An exception might be when you want to promote a new feature or when it is necessary to show a specific action to users who do not have permission. In this case, the default disabled state can be used.

---

## 4. Empty states

Empty states arise when there is no data to display in a section of a digital product. Users often encounter empty states when interacting with a product or page for the first time and when data isn't available or has been removed.

### Overview

Empty states present a basic but unique opportunity to support and enhance the user experience by providing useful information and direction. For example, empty states can be used to inform the user about what data would be displayed if it were available, as well as to guide the user about what steps to take next. Empty states can be particularly helpful when unexpected errors come up.

#### The empty states pattern covers the following functions:

- Teasing pages for first-use empty states, including in-line documentation and in-app promotion
- Starter content for first-use states to provide pre-created samples
- Basic empty state for when there is no data, user action confirmations, and error empty states

### Basic empty state

The basic empty state is the most common type in the Emplifi platform. We differentiate several types of basic empty states.

#### Basic empty state by usage

- Error empty states
- User action empty states
- No data empty states

#### Basic empty state by attention level

- Low attention
- High attention

### Empty state by usage

#### No data empty states

No data empty states are the most common basic empty states used to explain what data is missing from the page and to communicate which steps the user can take to populate the page with data when using it for the first time.

#### User action empty states

User action empty states are displayed after a user has taken an action.

**Examples:**

- A message informing the user that there are no issues to address
- A message indicating that no search results were found

**A message showing there are no search results**

Always explain why the message is being displayed and offer guidance to help the user take the next productive step. For instance, suggest adjusting the keywords or filters if no search results have been found.

**A message informing the user that there are no issues to address**

In situations with no issues to address and no next steps to take, try to think about what other information could be useful for the user.

You may decide that a supplementary text isn't necessary. For example, if the user has set up queues and no complaint has been received, it's not a case of queues not being set up but that there is nothing that requires the user's attention. In this case, there's no need to add supplementary text.

#### Error empty states

Empty states may also occur when data is present but can't be accessed by the user. In these situations, it's useful to provide the user with more specific information to explain the situation and help them solve the issue smoothly.

| Error | Explain the situation | Provide the solution |
|-------|------------------------|----------------------|
| No permission | The user doesn't have permission to access the data | Suggest how the user can request access and show who can provide it |
| System problem | A problem with the feature's system is stopping the data from being accessed. | Guide the user about what steps they can take to learn more about the given problem. |
| Configuration issues | A change of configuration may be needed to be able to access the data | Explain the first step the user can take to achieve the required configuration |
| Action not possible | The app does not support the user's actions. For example, the file size is too large to upload. | Explain what the user can do to overcome the problem. For example, suggest reducing the file to a certain size before re-uploading. |

Always support the user by explaining why there is no data, as well as what the user can do to overcome the inaccessible or missing data or explain what conditions are needed for the data to become accessible.

### Empty state by attention

#### High-attention

Use high-attention empty states in cases where the design needs to grab the user's attention, such as if the whole platform is down or an essential part of the feature has no data. The high-attention empty state should be designed with enough space around it so that it is instantly visible to the user.

High-attention empty states involve a Complex illustration with a headline and explanation. Except in some cases, there should also be at least one action to help users with the next step.

#### Low-attention

Use low-attention empty states in cases where there is already one high-attention empty state in space or if the size of the area without data is too small for a high-attention empty state design.

Low-attention empty states involve a Simple illustration supported by a headline and, in some cases, an explanation.

#### Best practices

- If all data areas on the page are empty, we recommend using just one empty state for the whole page. The exception is the dashboard, where we want to show an empty state for each widget.
- The number of low-attention empty states per page is unlimited
- A page should contain only one high-attention empty state, and it should represent the main data area for that page.

### Starter content

Another way to approach a space is to populate it with pre-created content and sample data to help a new user become familiar with a feature.

This starter content offers users a practical chance to learn about the feature and review and delete content without any issues. We recommend personalizing starter content to create the best user experience possible.

> When someone feels like she can explore an interface and not suffer dire consequences, she's likely to learn more—and feel more positive about it—than someone who doesn't explore. Good software allows people to try something unfamiliar, back out, and try something else, all without stress.
> —Jenifer Tidwell, Designing Interfaces, (O'Reilly Media, 2011), 9.

#### Aspects to consider for starter content

- When allowing the user to delete starter content, make sure you have a backup basic empty state to display in case the content is removed.
- Planning starter content needs to involve the full product team to establish the most helpful processes and configurations from the user's perspective.

### Teasing pages

The teasing page is used to promote whole categories or applications within the app, with the goal of convincing the user to try them. It is most helpful when a primary feature is first introduced in the app by providing more detail and highlighting any benefits of the feature. Including an image may help further trigger interest and usage.

We differentiate two types of teasing pages depending on their purpose:

1. First-use teasing page
2. Promotion teasing page

The teasing page should provide a detailed overview of the inaccessible page so the user understands more about the feature and at least one call-to-action to encourage the user to get started.

#### Considerations for teasing pages

- Keep the content limited to one feature. Don't talk about other areas of the app. If there are multiple actions a user could take, pick the most important one and stay focused on that.
- Teasing pages may require a higher level of maintenance than a basic empty state if using product images, as images will need to be kept up-to-date over time.
- If testing results show that users don't understand the feature or concept, providing informative details about the feature may encourage usage.

#### Promotion teasing page

When a feature is not fully included in the account solution but users can request it, use the promotion teasing page. This type of teasing page can market the main application or category to the user by highlighting its main benefits.

The main call-to-action is presented within the request button. A secondary link button can support it to learn more information about the feature, for instance, to the relevant knowledge base page.

#### First-use page

Use the first-use page when the whole feature is a part of the account solution, but the user has not yet created or added any content. The first-use page appears only once. In case users add and later remove all data, we show no data in an empty state.

The main call-to-action is presented within the primary button. A secondary link button can support it to learn more information about the feature, for instance, to the relevant knowledge base page.

### References

- Kathryn Whitenton, 3 Guidelines for Search Engine "No Results" Pages (Nielsen Norman Group, 2014)
- Jakob Nielsen and Page Labuheimer, Top 10 Application-Design Mistakes (Nielsen Norman Group, 2019)
- Jakob Nielsen, Error Message Guidelines (Nielsen Norman Group, 2001)

---

## 5. Export

If the Emplifi Suite allows users to export data, Soul recommends following this pattern to ensure consistent behavior across the product.

The export option can be visualized as a single button for direct export in one format or as a dropdown menu in cases with multiple options, such as formats and scheduling.

The process of exporting data is usually divided into two steps.

1. The process of generating the report is communicated by snackbar, and at the same time, the option to export data is disabled to prevent sending multiple requests.
2. The user requests to generate and download a report by clicking the button.

The generated report is downloaded automatically and there is no action need from a user side.

---

## 6. Layout

An interface's structure is defined by the relation of space and layout sections. Their combination creates room for displaying content in a meaningful way.

### Layout anatomy

The building blocks of an interactive experience are layout sections. These sections are composed of minor elements and components that share a similar function. They can also group smaller containers such as cards.

1. Content
2. Header
3. Section navigation
4. Platform navigation

### Breakpoints and dimensions

Our platform is mainly designed for the desktop. We have defined one breakpoint that changed margins between content and navigation components. This breakpoint is at 1560 px width.

The navigation width does not change.

The width of content should be responsive and range from min-width 932 pixels to max-width 1778 pixels. There are some exceptions:

1. Smaller content sections for which you can use a fixed size of content and center them.
2. The calendar in Publisher or Content Hub table where the usefulness of the full viewport is quite big.

### Content section

The content is used to display most of the app content. It typically contains components such as lists, cards, buttons, and images.

### Hidden section navigation

If a section only has one section, thus one item in the navigation, it's better to hide the navigation and use the space for body content.

The minimum and maximum widths would stay the same.

---

## 7. Loading

Use loading patterns when data takes an extended time to process and appear on the user's screen, in order to demonstrate that the screen is not frozen. There are two visual indicators to show that data is loading: skeleton states and the loading component.

### Overview

Loading states reassure the user that their request is processing.

According to research conducted by the Nielsen Norman Group, skeleton states and other loading indicators improve user satisfaction and may give the illusion of a shorter load time.

### Skeleton states

A skeleton state is a more basic version of a component––one that lacks content, displaying only the "skeleton" of the component––that appears on an initial page load.

Skeleton loading uses motion to demonstrate that the page is not frozen. This serves to show the user that the actual content is still in the process of loading fully.

Skeleton screens should only be displayed for a few seconds, to become replaced by full components and real content as soon as possible.

#### When to use skeleton loading

- Don't use skeleton states to represent snackbar notifications, overflow menus, dropdown items, modals, and loaders. Even when the elements inside a modal have a skeleton state, the modal itself should not.
- Use skeleton loading on container-based and data-based components like selects, structured lists, tables and cards. Action-based components like buttons, input fields, checkboxes or toggles don't usually require a skeleton state.

### Loading indicators

Loading indicators indicate to the user that an action is in progress. Distinct from progress bars, loading indicators only signal that loading is occurring but don't provide any indication of the level of progress.

- Inline indicators show that a specific selection or action is in progress.
- Full-screen loading indicators show that the entire application is in progress

#### Full-screen loading

Use full-screen loading when the entire page is processing. This is usually when the user's action loads or reloads the whole application.

If the wait time is going to be longer than a few minutes, add a notification to inform the user.

#### Inline loading

Use the inline loading component when a single component is processing. For example, when a user engages in a search, inline loading indicates the system is processing the action.

### Load more

Use load more options to extend a list where only a fragment of options is visible. Load more can also be used when the list of options is provided by a database, since it allows the data to load in gradual portions.

#### Load more by button

Use a load more button in places where lists contain sub-lists or if there is a technical limitation, as in a dropdown menu. In such cases, avoid using infinite scroll to make sure that all sub-lists can be made visible.

#### Infinite scroll

Infinite scroll means turning content into a single stream and represents the user's natural browsing behavior.

Use the infinite scroll in cases where options can continue to appear smoothly as one unified list.

---

## 8. Overflow

Overflow is when a text element is too large to fit in a defined area. The overflow pattern involves the option to truncate the text element or expand it so that it flows over the specified area.

The overflow pattern can be created in two ways. The first is to truncate the text element, and the second is to expand the full text using a button or link.

### Truncation

Truncation is used for text and links that do not fit into the container assigned to them. The truncated element is identified by an ellipsis (3 dots). After hovering on the ellipsis, the full-length content's tooltip should appear.

#### End-line Ellipsis

The standard way to truncate content is to use the end-line ellipsis by placing the ellipsis at the end of the truncated content. It works in most cases when the content flows through the container.

#### Mid-line Ellipsis

The mid-line ellipsis involves placing the ellipsis in the middle of the truncated content in cases when it is important for both the beginning and end of the text element to be displayed to the user. Typically these are labels.

#### Front-line Ellipsis

A front-line ellipsis is used at the beginning of the content in cases when it is important for the end of the text element to be displayed to the user. Typically these are profile URLs that have a region at the end.

#### Ellipses as such

An ellipsis on its own may also represent condensed content, such as an element in breadcrumb navigation.

### Show more

To be able to fully display the truncated content, use the show more option. This also applies to content besides text. Show more involves adding a button or hyperlink that expands the rest of the content as well as the container. In most cases, the user should also be able to collapse the expanded content.

### Group of elements

If you have more of the same elements that do not fit within a container, use the pattern showing a group of truncated elements followed by the number of how many more are hidden. On hover of that number, the rest of the hidden elements are displayed in a tooltip.

If the tooltip container does not have enough space for full-length content, add a hyperlink in the tooltip specifying the number of remaining hidden elements. Clicking on that hyperlink should open a modal, panel or other space where all of the elements are displayed.

---

## 9. Remove, Delete or Disconnect

There are two types of removal: destructive, high-impact removal (deletion) is represented with a modal, and non-destructive, low-impact removal is represented with a confirmation dropdown.

We never use inline removing. It's confusing for the users who often overlook the required confirmation of this action.

### Remove, Delete or Disconnect

In most cases, you'll be considering "remove" or "delete". In some exceptional cases, there might be some other words to choose from.

#### Remove versus Delete

We differentiate between "remove" and "delete". In most cases, "remove" is the word you need.

When the removal is permanent and can't be reversed, we use "delete".

When removing a user or a social profile, we use "remove". You're removing them only from our platform, and you can add them again if you want.

#### Disconnect

To be as clear as possible, when disconnecting data, we "disconnect" data connections.

### High-impact

Destructive, high-impact removal or deletion is represented with a modal dialog.

#### Delete modal dialogue

Delete modal dialogue is a high-impact removal that affects other parts of the product, and users can't reverse it. Once the user deletes the item from the Emplifi Platform, they need to create it again. For this reason, we communicate the removal via a modal dialogue where we explain all the possible effects of the removal.

**Where do we use Delete modal dialogue?**

- Delete the label from the Emplifi Platform
- Delete collection from the archive
- Delete task automation rule
- Delete role & permission from the Emplifi Platform
- Delete group from the Emplifi Platform
- Delete a post from the Publisher

#### Remove modal dialogue

Remove modal dialogue is a high-impact removal that affects other parts of the product, and users can't reverse it. For this reason, we communicate the removal via a modal dialogue where we explain all the possible effects of the removal.

However, unlike the Delete modal dialogue, once you remove the item (usually a profile or a user) from the Emplifi Platform, it still exists in the real world. You can add it back without the necessity of creating it again.

**Where do we use Remove Modal Dialogue?**

- Remove the user from the Emplifi Platform
- Remove profile from the Emplifi Platform

#### Disconnect modal dialogue

Disconnecting data is a high-impact removal communicated via a modal dialogue where we explain all the effects it has on the Emplifi Platform.

To be precise, in our wording, we "disconnect" the data connections.

### Low-impact

Non-destructive, low-impact removal is represented with a confirmation dropdown.

#### Delete confirmation dropdown

The delete confirmation dropdown is a low-impact deletion and we use it for deleting things that don't affect other parts or functions of our platform. We represent it with a confirmation dropdown because it's not necessary to communicate its effects.

However, when you want to reverse the action, you need to create the item again.

**Where do we use the Delete confirmation dropdown?**

- Delete item from Content Collection
- Delete Preset from Paid
- Delete Saved Searches
- Delete Answer Template
- Delete the Widget from the Dashboard

#### Remove confirmation dropdown

The remove confirmation dropdown is a low-impact removal and we use it for removing items that don't affect other parts or functions of our platform. We represent it with a confirmation dropdown because it's not necessary to communicate its effects.

They can be easily reversed (there's no need to create them again).

**Where do we use the Remove confirmation dropdown?**

- Remove the Label from the Profile
- Remove feed from the Community

---

## 10. Selection

This pattern allows users to select multiple items across filtered views, pages, or sections without losing their selection. Selections remain active even when users search, apply filters, or navigate elsewhere. A clear visual indicator shows how many items are selected, and users are given the option to expand the selection to include all matching results. The primary selection control only applies to what's currently visible, helping prevent accidental bulk actions. This approach supports confident, large-scale actions while maintaining clarity and control.

### Key elements

- **Empty View with Active Selection**: If a filtered view shows 0 results, but some items are selected, keep the selection bar visible and actionable.
- **Explicit Count and Visibility Clarity**: Clearly show "N selected of X," and inform the user when some items are hidden.
- **Bulk action bar**: Always visible when selection exists, even when selected items are outside the current view.
- **Additive Selection via Filtered Header Checkbox**: When filtered view is active and header checkbox is indeterminate, clicking it selects all filtered items and adds them to the existing global selection.
- **Persistent Selection**: Selections stay active across filters, searches, and pages unless the user explicitly clears them

### Behaviour

#### Select all

When a user clicks the main checkbox in the unfiltered list, all items in the full dataset are selected. If they then apply a filter, the checkbox switches to the indeterminate state to reflect that some—but not all—of the filtered items are selected. At this point, clicking the checkbox again will select all items matching the current filter, replacing the previous selection with the filtered scope. This approach allows users to start broad and then narrow down their selection intentionally without unexpected side effects. It ensures that the checkbox always represents the scope of what is currently visible and gives users control over adjusting their selection as filters change.

Example: Page size 10, 3 checked rows → header state becomes indeterminate; click the box → all 10 items become selected.

#### Always show the scope of selection, even when items are hidden

When users can select items across a changing or scrollable view (like filtering, searching, or paginated content), always keep the current selection visible and understandable. Clearly communicate how many items are selected out of the total relevant set. If some selected items are outside the current view (e.g., filtered out or on another page), show that explicitly—through a badge, counter, or secondary text. The selection summary should remain visible regardless of scroll or context changes, so users are always aware of what their next action will apply to. This prevents surprises and builds trust when working with large or dynamic content sets.

Example: A user selects 10 visible items. After applying a filter, those 10 files disappear from view, but the selection count remains visible.

#### Never clear the selection automatically

Once an item is selected, it stays there until the user does something explicit:

- Do the action on top of the selection which will close the dialog (Bulk action bar or select popover)
- Use clear or cancel during the flow
- Navigates away from the view, dialog or page

Changing the search text or flipping a filter just changes what is rendered; it must not reset the set. No other implicit event (e.g. changing workspace, applying filters, remove items) should wipe the selection. The user must actively choose "Clear selection" (or navigate away).

Example: Designers call this "preserve user work." If you've ever tagged a dozen emails in Gmail, type a new search, and they vanish from the list but are still tagged, you've experienced this rule.

#### Empty View with Active Selection

If the filtered result = 0, but selection still contains items, the bulk bar must still appear and be actionable. Don't hide the selection just because the current view is empty. It's still valid.

---

## 11. UI Shell

The UI Shell is our dedicated design pattern that isolates specific sections of an interface with a distinct, alternate color mode.

The UI Shell is a dedicated container that visually separates specific areas of an application from the rest of the interface. By applying an alternate color mode, it creates a clear boundary that draws attention to context-specific content like dashboards, sidebars, or focused workflows. This distinctive treatment helps users quickly identify and engage with the most important sections without getting distracted by the overall layout.

Designed with simplicity and accessibility, the UI Shell maintains consistency with our design system through standardized colors, typography, and spacing. It reinforces our brand's identity and improves navigation and interaction by guiding users toward relevant tasks. The UI Shell is a powerful yet straightforward tool that enhances the overall user experience by clearly highlighting where attention is needed.

### Core principles

- **Empathy & Engagement**: By emphasizing essential sections in a friendly, approachable manner, the shell invites users into a more focused and immersive experience.
- **Accessibility**: With a dedicated alternate color mode, the UI Shell is designed to meet and exceed WCAG contrast standards, ensuring all users can easily distinguish and interact with its content.
- **Consistency**: Built on standardized design tokens, the UI Shell maintains visual harmony across components, ensuring that color, spacing, and typography are aligned with the broader Soul Design System.
- **Clarity & Focus**: The shell provides a clear visual separation that guides users to critical or specialized content without overwhelming the primary interface.

### Visual design

#### Color mode

- **Contrast standards**: All colors are selected to ensure clear separation and meet rigorous accessibility guidelines, ensuring that every user finds the interface both beautiful and functional.
- **Dark mode palette**: The UI Shell uses a predefined dark mode set of colors defined by our design tokens. This palette includes specific backgrounds, borders, text, and accent colors tailored for contrast and emphasis.

#### Typography

- **Balanced spacing**: Pre-defined margins and paddings ensure the shell feels open and uncluttered, reinforcing its role as a focused container within the overall UI.
- **Consistent scale**: The text within the UI Shell adheres to our defined typographic hierarchy, using legible fonts and sizes that support clear communication.

### Usage guidelines

#### When to use the UI Shell

- **Task-centric areas**: It is ideal for features or workflows that benefit from reduced visual noise, enabling users to concentrate on key actions without distraction.
- **Contextual isolation**: Use the UI Shell for areas that require clear visual separation—such as bulk action bars or tooltips—where context-specific content demands user focus.

#### Best practices

- **Design documentation**: Each UI Shell implementation should be accompanied by detailed documentation—including design tokens, component states, and usage examples—to facilitate consistent application across projects.
- **Interactive feedback**: Define clear interaction states—hover, active, and focus—that are consistent with the rest of the Soul Design System, ensuring that users receive timely visual cues during interaction.
- **Integration with core components**: Ensure that buttons, forms, and interactive elements within the shell follow the overall design system's guidelines for behavior and accessibility.

### Accessibility

- **Consistent interactions**: Maintain uniform interactive behaviors within the UI Shell to enhance predictability, ease of use, and overall accessibility.
- **User testing**: Regular usability and accessibility testing should be conducted to ensure that the UI Shell meets the needs of all users, fostering an inclusive digital experience.
- **Color contrast**: The color mode is selected to provide sufficient contrast with the primary interface, ensuring readability and clarity for users with visual impairments.

---

## AI Guidelines — Visual Language

(This page is still under construction -- content is placeholder.)

Philosophy: Integrate AI into the UI so that it doesn't stand out above all visual elements, but is seen as AI features themselves.

Planned sections: Colors (fill, stroke, background), UI icons (general, custom feature, colored, dropdown usage), Badge, Buttons, Short description, Focus, Loadings.
