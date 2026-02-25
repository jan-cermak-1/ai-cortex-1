# SOUL Design System — Home, Processes, Glossary

> Fetched from https://soul.emplifi.io — Home section (intro, processes, glossary, changelog)

---

## 1. Introduction

Welcome to Soul, a design system for Emplifi's products and digital experiences. When you start designing or developing a project, it's the place to go.

Our design system is not open source, but we're making it public to raise awareness, foster collaboration, drive higher-quality content, and champion transparency. Our system comprises four key sections: Foundations, Components, Patterns, and the Product content style guide.

The **Foundations** establish our core design principles—covering colors, typography, spacing, icons, elevations, and illustrations—that are essential building blocks for every project.

The **Components** section offers ready-to-use elements that ensure consistency and efficiency across our interfaces.

**Patterns** provide tested, reusable solutions that combine these elements to address common user needs and workflows.

Our **Product content style guide** sets standards for in-product copy, ensuring that every text is clear, concise, and aligned with our value-focused communication. By sharing these guidelines, we invite valuable feedback and encourage a collective sense of ownership that enhances the overall user experience.

### Foundations

Foundations are the essential building blocks that help you kickstart your projects. This section outlines practical guidelines and assets—including colors, typography, spacing, icons, elevations, and illustrations—that ensure a consistent and cohesive visual language from day one.

Key foundations: Accessibility, Colors, Container, Elevation, Illustrations, Modul icons, Radius, Spacing, Typography, UI Icon, UI Motion.

### Components

Components are the ready-to-use building blocks that bring your interfaces to life. This section offers a curated library of pre-designed elements—such as buttons, forms, data tables, or navigations—that are fully compliant with our style guidelines.

Key components: Avatar, Avatar group, Avatar info, Badge, Breadcrumb, Button, Button group, Checkbox, Checkbox button, Confirmation dropdown, Dropdown menu, Link, Modal, Number input, Progress bar, Radio button, Select, Side panel, Snackbar, Tab, Table, Text input, Toggle, Tooltip.

### Patterns

Patterns are standard and reusable solutions that combine multiple components and templates to address common user challenges. They encapsulate best practices and proven workflows.

Key patterns: AI guidelines, Common actions, Disabled states, Empty states, Export, Layout, Loading, Overflow, Remove/Delete/Disconnect, UI Shell.

### Product content style guide

Product Content Style Guide sets the standards for every piece of in-product copy on the Emplifi Platform. It provides clear, actionable guidelines to craft messages that are easy-to-read, concise, and modern.

---

## 2. Start designing

If you're just starting to design with Soul, you're in the right place. Here's a checklist of everything you need to get up and running.

### Design assets in Figma

We use Figma as our primary tool for building and hosting our UI libraries. Figma grants us access to the latest design features and optimizations, all while ensuring our designs remain consistently aligned.

- **Global Library**: UI colors and icons, illustrations, effects and styles
- **Product Library**: Product typography, components, and templates

These Design assets libraries include all core elements, components, and styles essential for keeping your designs Soul-compliant. Using these libraries, you will automatically receive updates with each new release to keep your designs consistent and up to date.

### Design assets libraries

#### Structure

To streamline our complex system of assets and keep each file as functional as possible, each platform-specific library contains styles and components specific to that platform. These are supplemented by global styles to uphold a consistent visual language.

#### Enabling the libraries

Enable the Design assets libraries through the Libraries dialog in the Assets panel. To ensure the libraries are always accessible in your drafts, automatically enable them in your Account settings.

#### Designing with Soul design assets

Components are organized in the Figma Assets panel and are typically not nested beyond two levels to maintain accessibility.

Each component's library of origin is differentiated by the unique background color of its preview box, with each library distinguished by a dedicated color.

Component properties and variants offer flexibility, allowing you to optimize configurations to your specific needs. These properties available in the UI libraries are directly mapped to the code.

### Typeface

Soul uses the open-source typeface Inter. It has been carefully chosen to meet our needs and reflect our brand, ethos, and design principles. The Inter typeface family can be downloaded from Google Fonts.

### Review our usage guidance

- **Patterns**: Soul also offers a range of key patterns, offering best practice solutions for how a user achieves a goal in the product.
- **Components**: Soul provides in-depth design usage and style guidance for all elements. It's important to be familiar with this additional UX and visual guidance when designing with our elements.

### Resources (Figma plugins)

- A11y - Color Contrast Checker: Ensure your text is readable for users by adhering to WCAG standards.
- A11y - Focus Order: Add accessibility annotations over your designs for the interactive elements.
- Redlines: Annotate your designs with detailed measurements, specs, and intricate redlines.
- EightShapes Specs: Automate production of design specifications of selected components, instances and frames.
- Content Reel: Design layouts more efficiently by pulling text strings, images, and icons from one palette.

### Stay connected

If you have a question about any aspect of the libraries or tools, you can reach out on Slack channel #soul-design-system.

To stay informed about the latest Soul news, ensure you are signed up at #design-soul-releases.

---

## 3. Start developing

If you're just starting to developing with Soul, you're in the right place. Here's a list of everything you need to get up and running.

The design system is accessible only via our private npm scope. If you are part of Emplifi and don't have access, don't hesitate to contact us at soul@emplifi.io.

The Soul Design System is built React first with official support for Web Components.

### First steps

#### Check out our quickstart guide

In the developer's quickstart guide (Soul Storybook), you will find an overview of requirements and action steps that will help you to start working with the Soul Design System quickly.

#### Learn the system

- Orient yourself with usage and style guidance for all of Soul's components and patterns.
- Familiarize yourself with Soul's foundational elements and the usage documentation.

### Connect with us

- **#soul-design-system**: If you have a question about any aspect of the frameworks or tools, you can contact us on Slack.
- **#soul-updates**: Sign up for the latest Soul news.

### Know about what we're doing

You can learn about Soul's latest changes on the Changelog section and future schedules on the Roadmap page.

---

## 4. Recognize a component

Soul defines four acceptance criteria to create clear expectations for a component's standards.

### Acceptance criteria

These criteria allow you to recognize the possible new components and help you to feel comfortable collaborating with the Design System team.

1. Does it meet the accessibility standards?
2. Does it match customers' needs?
3. Does it meet user and business needs across multiple areas?
4. Does the new component solve a problem that can't be solved with the existing one?

If a component candidate meets these criteria, you can be confident that you're at least on the right track. For the next step, ideally, meet one of our design system designers to validate your request before you jump to the flow for component creation.

### 1. Does the new component solve a problem that can't be solved with the existing one?

In many cases, existing components or patterns can easily solve the problem, which can be better than introducing something new, even for users. It is generally recommended that the design be validated with the design system team first, and only if the existing solutions don't fit, continue to prepare new components.

Remember that the final decision regarding the new component may be to prepare it locally and postpone adding it to the design system until it meets other criteria.

### 2. Does it meet user and business needs across multiple areas?

The core of the design system is to bring components and patterns that can be used in multiple areas and create a consistent solution for the same or similar problems.

Components that match this criterion will always be prioritized.

### 3. Does it match customers' needs?

The design should center users and customers in most areas, and component creation is no exception. New components should be designed to solve our customers' problems and needs, ideally in multiple areas.

### 4. Does it meet the accessibility standards?

The soul design system is built to match accessibility standards in all areas, and the components are crucial to this principle. When validating a new component, keep this in mind, be ready to define specific areas of this discipline, and respect the accessibility rules.

---

## 5. Component creation

Follow the flow below to meet our standards and deliver components that are accessible, well-designed, and validated by designers and developers. This flow works the same way for creating a new component as for updating an existing one.

### What to do?

Each component has to be well-defined and documented. This helps us keep components consistent across the platform in every known use case.

This process is set up to bring a straightforward checklist to avoid missing any particular part of the flow.

#### 1. Design flow

- Specify
- Design
- Plan

#### 2. Production flow

- Dev Documentation
- Dev Asset
- Design Asset
- Design Documentation

#### 3. Final release

It doesn't matter if you add a new or update an existing component. In both cases, you should respect the process and be sure everything is specified and documented.

In case of a component updates, you should always update the existing specification (in the dedicated Figma file) and documentation rather then create a new one.

### Design flow

Design flow specifies a continuous process in which the parts follow one another. We recommend respecting the order in which they are built and not skipping any of them.

#### Plan

**Assignees**: Product Manager, Designer, and Developer

Everyone can propose a candidate for the new component or its update.

**Output**: Audits, explorations, and scope

As an output of this part, we expect to complete an audit of existing cases in our platform, a mood board with an exploration of the solution other companies or systems use, and, finally, the complete scope of the version you want to build.

**Objective**: Understand what we want to make, why, and if it's worth it

**Activities**: Audit existing cases and comparative examples (Always); Other research, Design and/or code explorations (Sometimes)

#### Design

**Assignees**: Product or UI designer

There should always be one dedicated designer who takes care of the output and takes responsibility for delivery.

**Output**: Figma concepts, iterated, testing

The expected output is the final version of the design that is tested and also approved by DS Advocates and the Product design team.

**Objective**: Fully explore and validate a design solution

**Activities**: Match accessibility standards and rules (Always); Test the design and concepts internally or externally, Design multiple variants and concepts (Sometimes)

#### Specify

**Assignees**: UI or Product designer

**Output**: A document that describes how an interface is composed, configured, visually designed, behaves, and more, whether a component, page or something else

The final document must be available to the whole team and stored in a dedicated Figma project.

**Objective**: Fully documented a design solution

As a part of the document, there should also be specifications for naming conventions, which should be a source of truth for designers and developers.

### Production flow

Production flow is not continuous, and each part can be completed in different time frame.

#### Design Documentation

**Assignees**: UI Designer & Content Designer

**Output**: Documentation site content

As a final state, there should be a page published on suite.emplifi.io in a particular section.

#### Design Asset

**Assignees**: Design system Designer

**Output**: Figma assets published in the library

As an outcome, a design asset will be placed in our library and published to be available for our design team. This asset will provide the same options and naming conventions as a dev asset.

#### Dev Asset

**Assignees**: Design system Developer

**Output**: Code package(s)

As an outcome, a dev asset will be placed in our repository and available for implementation to the Emplifi's products. This asset will provide the same options and naming conventions as a design asset.

#### Dev Documentation

**Assignees**: Developer & Content Designer

**Output**: Design preview in the storybook; Dev docs, possibly within a code package

As a final state, there should be a documentation page published in our storybook in a particular section. There should also be a design preview that shows the most common cases and helps the designer understand the setup of the component.

### Release

Once all four production parts are completed, we can officially release the component as a complete thing. This will create a clear line between versions.

However, this doesn't mean the component can not be used before it is released. Designers or developers should be confident in using the component once the asset is created.

---

## 6. Naming (Glossary)

Different fields use names defined in the design system to communicate about variables, elements, components, and the rest. Therefore, names must be modular, expressive, and easily pronounceable.

### Sizes

Soul defines sizing using T-shirt sizes for all elements and components and Number scale for spacing.

- **Smaller sizes**: When you want to define a size smaller than M, we use S, xS, or xxS. If it's a component, make it possible to pass the size via a size property.
- **Larger sizes**: When you want to define a size larger than M, we use L, xL, or xxL. If it's a component, make it possible to pass the size via a size property.
- **Default size**: M is always the default or the base value.
- **Keep it consistent and short**: Always use the short-form version (S, M, L, xL) when naming components, tokens, or symbols.

### States

States refer to the different visual representations of a component based on its state or condition.

#### Interactive

- **Focus**: The "Focus" state shows that a component is selected, typically via keyboard navigation.
- **Active**: The "Active" state indicates that a component is currently being engaged, such as during a click.
- **Hover**: The "Hover" state is a component's appearance when the cursor is over it, signaling interactivity.
- **Default**: The "Default" state is a component's default, idle appearance with no interactive effects.

#### Boolean attributes

- Required/Optional
- Error
- Read-only
- Disabled

#### Selected (Open, Filtered)

- Not selected
- Selected

#### Checked

- Checked
- Indeterminate
- Not checked

#### Loading

- Not loading
- Loading

#### Validation

- Success
- Error (can be standalone as a boolean)
- None

#### Dragged

- Dragged
- Not dragged

### Types

Types in the Soul Design System will help designers and developers create consistent and effective designs regardless of the context.

#### Primary

This is the main type representing a page's primary action or element. The primary color typically represents it to help it stand out.

#### Secondary

This type represents secondary actions or elements on a page, such as subheadings or secondary buttons. It has a slightly smaller font size and a less prominent color than the primary type.

#### Tertiary

This type is used for less essential elements or actions, such as captions, footnote text, or supported buttons. It has a smaller font size and a less prominent color than primary and secondary types.

#### Danger

This type represents actions or elements that may have negative consequences or require caution, such as error messages, warning signs, or delete or remove actions. It is represented by a distinctive red color to convey urgency or danger.

#### Request

This type represents actions that require user input or confirmation, such as form fields or buttons that initiate a request. It is represented by a distinctive green color, used as a border or background color, and indicates that it is waiting for user input.

#### Inverse

This type represents text or elements that appear on a dark or colored background, where the default primary and secondary types may not be legible. It has a lighter color and a higher contrast than the other types to ensure it is easily readable.

---

## 7. General terms (Glossary)

Here is an overview of some of the most common terms and naming conventions that we use in Soul Design System.

### Accordion

In UI design, an accordion is a type of menu that vertically stacks items that let the user expand and collapse the content. When a user clicks a label, that section expands to show extended content. One or more labels can be opened at a time, which helps users navigate large amounts of information quickly.

### Breadcrumb

A breadcrumb is a navigation system that shows where a user is currently situated within a website. Usually located at the top of a page, breadcrumbs let users see their current location and the steps they took to get there. As these are clickable links, users can move back to read or edit any information they filled in.

### Call-to-action/CTA

A call-to-action button – or a CTA – encourages users to take a specific action on a website or application. For example: Sign Up, Book Now, Subscribe. CTA buttons exist as a conversion goal, encouraging users to buy, consume or register for a product or service.

### Card

Cards group related content side-by-side so that users don't have to scroll through a list to find the information they are looking for. Square or rectangular-shaped, they have the appearance of a business card and they can include buttons, text and images.

### Components

Components are the building blocks of a design system. They can be small (e.g., buttons, icons) or large (e.g., navigation systems, carousels). A core aspect of components is that they're designed to be as simple yet as flexible as possible so that they can be used in multiple instances.

### Controls/Input controls

Input controls are the interactive elements used on any interface. These include checkboxes, radio buttons, dropdown lists, list boxes, buttons, toggles, plus/minus icons for changing number values, text fields, and date fields.

### Input field

Input fields are simple places where users can enter content into a system. Forms are the most common example, but a search bar is an example of an input field that we use on an hourly basis.

### Margin

The areas sitting left and right of a grid.

### Meatball menu

The meatball menu is a set of three horizontal dots. When the user clicks on the dots, more options are revealed.

### Modal

Message boxes are also known as modal windows and they work in the same way.

### Patterns

Patterns are recurring solutions to common problems. They can be used to solve design challenges in a variety of ways, from layout to interaction. Within most design projects, patterns will be used to help with the structure and flow of the product.

### Primary and secondary button

If there are multiple CTAs on a screen, the primary button lets us know which action is the most important. The secondary button is still an important CTA, but it is less important than the primary button. It should be less visually dominant and should not clash with the image or appearance of the primary.

### Slider controls

A slider allows users to set or change a value. A very common example of this is when you are searching for holiday accommodation, you can set your price range. Another example is changing the brightness levels on the screen of your phone.

### Snackbar

A non-modal, unobtrusive element to display a short message that appears on the screen when an event occurs and usually automatically disappears. It is used to provide feedback or show a message.

### Tooltip

When a user hovers over a certain item, a tooltip appears to explain it further. For example, when asked for your CVV number on an online shop, a tooltip usually tells you where to find the CVV number on your credit or debit card.

### Toggle

Toggle buttons act like an on-and-off switch, allowing users to change a setting between two states. For example, a toggle switch can be used on your phone's settings to switch Wi-Fi or Bluetooth connections on or off.

---

## 8. Status (Changelog)

The current status of each component and foundation within our Soul system.

### Legend

| Status | Description |
|--------|-------------|
| **Up to date** | This component fully complies with our latest design and technical standards. It is safe and recommended for current use. |
| **In development** | This component needs technical or visual updates or may not be connected to design variables. Despite this, it's still valid and should be used and will be iteratively improved. |
| **Review required** | This component needs technical or visual review. Despite this, it's still valid and should be used and progressively improved. |
| **Planned** | This component is not yet ready for use as it is still awaiting further design or development. |
| **Deprecated** | This component is no longer recommended for use and will be removed in future updates. |

### Component status list

Accordion, Accordion box, Accordion group, Avatar, Avatar group, Avatar info, Badge, Banner, Breadcrumb, Bulk-action bar, Button, Button group, Checkbox, Checkbox button, Chip, Color picker, Colors, Confirmation dropdown, Container, Data table, Date picker, Dropdown menu, Elevation, Empty state, Floating panel, Fullscreen dialog, Highlight, Icon picker, Illustrations, Keyboard Shortcut, Label Tag, Label tag group, Link, List item, Message bubble, Modal, Navigation, Number input, Platform Icons, Platform tag, Product header, Progress bar, Radio button, Radio Button Card, Radius, Search input, Segmented control, Select, Side panel, Slider, Snackbar, Spacing, Split button, Structured list, Tab, Teasing page, Text input, Textarea, Time picker, Toggle, Toggletip, Tooltip, Typography, UI Icons, UI Motion, URL input, Wizard.

(Refer to the live SOUL Status page for the current status of each component.)

---

## AI & No-Code Guidelines

A set of guidelines and recommendations that help the team safely explore AI and no-code tools -- boosting speed, sparking ideas, and keeping human judgment at the heart of every design decision.

### Status: Exploration Phase (April 2025)

We're still discovering how AI and no-code tools can best support our design work.

### Quick Principles

- Keep things simple, safe, and explainable.
- Choose the right tool for the right task.
- Use AI to accelerate (not replace) your thinking.
- Think privacy-first.

### Do's

- **Keep it secure** -- Use only approved tools (on MCP or whitelisted).
- **Use no-code when it makes sense** -- Use tools like V0 or Loveable to test flows, not to ship production UI. Rule of thumb: If a prototype takes 1 hour in Loveable vs 1 day in Figma, go for it. Great for dynamic forms, inputs, logic, and dropdown flows.
- **Think before you click** -- Choose a tool based on what you want to learn, not what's trendy. Spend 10 minutes scoping before you jump into any tool.
- **Combine strengths** -- Use Figma and your brain to refine and validate. Use AI for naming, copywriting, first drafts, or quick explorations.
- **Challenge developers (constructively)** -- Ask: "If we had to ship this tomorrow, what's the simplest version?" Use AI or no-code tools to quickly prototype an interaction that's hard to explain in words.
- **Document what AI helped with** -- Use reverse prompt engineering to instruct the tool to create a description of the prototype. Leave a short note in your spec or prototype: "First draft created with ChatGPT," etc.

### Don'ts

- **Don't upload sensitive stuff** -- Be very cautious of tools with unclear license terms (e.g., V0 has a "grant-back" clause). Never upload API tokens, credentials, internal links, or Figma access tokens. No client logos, real screenshots, user data, or internal documents.
- **Don't over-polish AI outputs** -- Prototypes from AI tools are disposable.
- **Don't trust defaults** -- AI often creates visually plausible but functionally broken components. Always double-check for accessibility, logic, and inclusivity.
- **Don't use AI as your only lens** -- AI can't replace critique, feedback, or context. Always validate with your team, users, or devs.

### No-Code Tools Watch-outs

| Tool | Good for | Be careful about |
|------|----------|-----------------|
| Loveable | Dynamic UI, inputs, flows. Fast. Close to intended Figma. | Doesn't match Soul DS (yet), limited control. |
| V0 | High-fidelity prototyping, fast | Grant-back license! Do not use client assets. |
| Bolt | Data structure flows, experiments | Can be overkill for simple ideas. Careful for "Remix" similar to V0. |
| Cursor | Code exploration, early testing | Not for design handoff or spec writing. |
