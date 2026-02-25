# SOUL Foundations

## Accessibility

Soul's commitment to accessibility is a fundamental aspect of our design philosophy. We strive to ensure that our design system is usable by all users, regardless of their abilities or disabilities.

### Design for diverse experiences

A well-designed product should offer the same quality experience to everyone, regardless of their abilities. Soul components meet or exceed WCAG 2.2 AA standards to ensure an accessible foundation.

> Accessibility is the responsibility of everyone. Consider accessibility early in the team's planning to avoid costly reworks.

### What we design for

We design for people, prioritizing equity and inclusion at every step. We consider various disabilities:

- For cognitive disabilities, we use clear, easy-to-navigate wording and design.
- For limited mobility, we support keyboard navigation, large selectable targets, and correct semantic HTML;
- For visual disabilities, we use good alternative text, semantic HTML, and accessible color contrast; for hearing disabilities, we provide non-auditory information;

We address multiple disabilities together and use inclusive language that is localizable and respectful of gender, race, age, and ethnicity.

To ensure our design system is accessible to all users, we have outlined the following suggestions. These guidelines will help us create a more inclusive and user-friendly experience.

### Color contrast and readability

Ensure all text and background color combinations meet the WCAG (Web Content Accessibility Guidelines) standards for contrast.

Be sure the Inter font family is used as a primary font to provide users with content blocks that are easily distinguishable and comfortable to read.

#### Tip: Aim to contrast the ratio

Use tools like [WebAIM](https://webaim.org/resources/contrastchecker/) or the recommended Figma plugin contrast checker to verify that text has a contrast ratio of at least 4.5:1 for standard text and 3:1 for large text.

### Keyboard navigation

Ensure all interactive elements (buttons, links, forms) are accessible via keyboard. This includes logical tab order and visible focus indicators.

#### Tip: Use clear tab order and focus indicators

Ensure all buttons, links, and form fields can be accessed and operated using the Tab key.

Provide visible focus indicators (such as a border or background change) for interactive elements focused via the keyboard.

### Screen reader compatibility

Provide text alternatives for all images, icons, and non-text elements. Use ARIA (Accessible Rich Internet Applications) landmarks and roles to improve screen reader navigation.

#### Tip: Use "alt" attributes and follow ARIA roles

- Use ARIA roles to enhance HTML elements, such as role="navigation" for a navigation menu, role="button" for clickable components and aria-live="polite" for areas where dynamic content updates (like a notification).
- Add alt attributes to all images. For instance, use alt="Emplif logo" for an Emplifi logo image

### User testing

Involve users with disabilities in your testing process. Their feedback can help identify and address accessibility issues you might not catch otherwise.

#### Tip: Test accessibility during usability testing

- Conduct usability testing sessions where these users perform common tasks using your design system. Gather feedback on any challenges they encounter and use it to make improvements.
- Recruit users with various disabilities (visual, auditory, motor, cognitive) to test your design system through local organizations, online communities, or accessibility consultants.

### Conclusion

Following the recommendations above can create a more accessible and inclusive product. This will not only help users with disabilities but also enhance everyone's overall user experience.

### Resources

##### Figma plugins

- [Stark | Figma](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker)
- [A11y - Color Contrast Checker | Figma](https://www.figma.com/community/plugin/733159460536249875/a11y-color-contrast-checker)
- [A11y - Focus Order | Figma](https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order)

##### Principles

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [All WCAG 2.1 Techniques | WAI | W3C](https://www.w3.org/WAI/WCAG21/Techniques/)

---

## Colors

### Overview

Guidance around color usage is essential to ensure consistent and engaging user interfaces throughout the Emplifi Platform.

#### Status

- Design: Up to date
- React: Review required

### Anatomy

Soul uses the gray color palette as a dominant color in the default mode, using subtle shifts in value to organize content into distinct zones.

The core blue family is the primary action color across all Emplifi products and experiences. Additional colors beyond these families are used sparingly and purposefully.

### Purpose

The purpose of using color has to be precise and clear. Each color needs to support a message, status, or action that needs to be easily identifiable by users.

Each use of color is purposely bound to a specific meaning. For instance, red signifies dangerous situations, such as critical errors, green represents success messages, and purple draws attention to news and offers.

Using color as decoration is exclusive to illustrations.

### Accessibility

Soul offers consistent color palettes for each color role. This means that each color is assigned a specific relationship within the overall palette.

These relationships ensure that color contrasts remain consistent across every application of color and that proper legibility and understanding are achieved when combining texts with color and interactive shapes with various backgrounds.

Colors are meant to be easily understood and read by all users. Sufficient contrast makes things easier to find, identify, and interact with.

### Modes

Modes serve as an organizational framework for color in Soul, with each mode based on a specific appearance. And they get their names from their appearance. Soul defines two modes: light and dark.

The light mode is based on the Gray 10 background, and the dark mode uses the Gray 110 background. Within each mode, the values for the color variables use the primary background color as the base of its layering model.

#### Light mode

The light mode in Soul primarily uses the color range of Gray 10 to Gray 40 with White 100 for background layers, and text and icons use the color range between Gray 110 and Gray 60.

Each color is represented by a specific variable named by the purpose.

**Layer variables preview**

| Value | Level | Description | Syntax (Web) | Variable |
|-------|-------|-------------|--------------|----------|
| #f3f3f5 | Level 0 | Default page and dialog background | var(--color-layer-level-0) | UI colors |
| #ffffff | Level 1 | Default container background color on layer 0 | var(--color-layer-level-1) | UI colors |
| #f3f3f5 | Level 2 | Container background color on layer 1 | var(--color-layer-level-2) | UI colors |
| #e7e7e7 | Level 3 | Container background color on layer 1 | var(--color-layer-level-3) | UI colors |

**On layer variables preview**

| Value | Role | Description | Syntax (Web) | Variable |
|-------|------|-------------|--------------|----------|
| #24242b | Primary | Primary color for text layers or icons on top of Layer | var(--color-on-layer-primary) | UI colors |
| #505057 | Secondary | Secondary color for text layers or icons on top of Layer | var(--color-on-layer-secondary) | UI colors |
| #9d9da0 | Tertiary | Color for tertiary text layers or icons used mostly as a placeholders | var(--color-on-layer-tertiary) | UI colors |

#### Dark mode

Dark mode in Soul primarily uses the color range of Gray 120 to Gray 90 for background layers and for text and icons, use Gray 10, Gray 70, and Gray 80 colors.

Each color is represented by a specific variable named by the purpose.

**Layer variables preview**

| Value | Level | Description | Syntax (Web) | Variable |
|-------|-------|-------------|--------------|----------|
| #111114 | Level 0 | Default page and dialog background | var(--color-layer-level-0) | UI colors |
| #24242b | Level 1 | Default container background color on layer 0 | var(--color-layer-level-1) | UI colors |
| #37373e | Level 2 | Container background color on layer 1 | var(--color-layer-level-2) | UI colors |
| #505057 | Level 3 | Container background color on layer 1 | var(--color-layer-level-3) | UI colors |

**On layer variables preview**

| Value | Role | Description | Syntax (Web) | Variable |
|-------|------|-------------|--------------|----------|
| #f9f9fa | Primary | Primary color for text layers or icons on top of Layer | var(--color-on-layer-primary) | UI colors |
| #b5b5b7 | Secondary | Secondary color for text layers or icons on top of Layer | var(--color-on-layer-secondary) | UI colors |
| #6d6d71 | Tertiary | Color for tertiary text layers or icons used mostly as a placeholders | var(--color-on-layer-tertiary) | UI colors |

### Layering

Colors in the neutral gray palette are layered on each other to create depth and spatial associations. The layering defines the logic of how colors stack on top of each other in a UI.

The layering differs between the light and dark modes.

### Gradients

#### AI gradient

| Gradient | Description |
|----------|-------------|
| AI on layer | Linear Gradient, #00a19a, 0.00%, #7c2df0, 45.00% |
| AI layer (Figma only) | Linear Gradient, #effefc, 0.48%, #ffffff, 24.00%, #ffffff, 72.00%, #f9f5ff, 99.50% |

#### Avatar gradients

| Name | Value |
|------|-------|
| Indigo | Linear Gradient, #3f51b5, 0.00%, #1a237e, 100.00% |
| Active Blue | Linear Gradient, #71a9ff, 0.00%, #415fff, 100.00% |
| Blue | Linear Gradient, #2196f3, 0.00%, #0d47a1, 100.00% |
| Cyan | Linear Gradient, #00bcd4, 0.00%, #006064, 100.00% |
| Teal | Linear Gradient, #009688, 0.00%, #004d40, 100.00% |
| Green | Linear Gradient, #4caf50, 0.00%, #1b5e20, 100.00% |
| Light green | Linear Gradient, #8bc34a, 0.00%, #33691e, 100.00% |
| Yellow | Linear Gradient, #f5a017, 0.00%, #c46512, 100.00% |
| Orange | Linear Gradient, #e65100, 0.00%, #b84000, 100.00% |
| Brown | Linear Gradient, #795548, 0.00%, #442c28, 100.00% |
| Pink | Linear Gradient, #cd3497, 0.00%, #691a4e, 100.00% |
| Purple | Linear Gradient, #9c27b0, 0.00%, #4a148c, 100.00% |
| Deep purple | Linear Gradient, #622cc2, 0.00%, #311b92, 100.00% |
| Gray | Linear Gradient, #9f9f9f, 0.00%, #575757, 100.00% |
| Chatbot | Linear Gradient, #1a91ff, 0.00%, #263dec, 100.00% |
| AI | Linear Gradient, #90ffee, 0.00%, #effefc, 40.00%, #f9f5ff, 60.00%, #f0e7ff, 80.00% |

#### Button gradients

| Name | Value |
|------|-------|
| Gradient | Linear Gradient, #00000000, 0.00%, #0000001a, 100.00% |
| Gradient Hover | Linear Gradient, #00000000, 0.00%, #00000033, 100.00% |
| Gradient Active | Linear Gradient, #0000001a, 0.00%, #00000000, 100.00% |

### Primitive Colors

Under the hood, all of our semantic colors above map to values in a set of color ramps, which define specific hex values. These are organized by hue.

#### Neutrals

**White**

| Step | Value |
|------|-------|
| 0 | rgba(255,255,255,0) |
| 10 | rgba(255,255,255,0.05) |
| 20 | rgba(255,255,255,0.1) |
| 30 | rgba(255,255,255,0.2) |
| 40 | rgba(255,255,255,0.4) |
| 50 | rgba(255,255,255,0.7) |
| 60 | rgba(255,255,255,0.8) |
| 70 | rgba(255,255,255,0.85) |
| 80 | rgba(255,255,255,0.9) |
| 90 | rgba(255,255,255,0.95) |
| 100 | #ffffff |

**Black**

| Step | Value |
|------|-------|
| 0 | rgba(0,0,0,0) |
| 10 | rgba(0,0,0,0.05) |
| 20 | rgba(0,0,0,0.1) |
| 30 | rgba(0,0,0,0.2) |
| 40 | rgba(0,0,0,0.3) |
| 50 | rgba(0,0,0,0.5) |
| 60 | rgba(0,0,0,0.7) |
| 70 | rgba(0,0,0,0.8) |
| 80 | rgba(0,0,0,0.9) |
| 90 | rgba(0,0,0,0.95) |
| 100 | #000000 |

**Gray**

| Step | Value |
|------|-------|
| 10 | #f9f9fa |
| 20 | #f3f3f5 |
| 30 | #e7e7e7 |
| 40 | #cececf |
| 50 | #b5b5b7 |
| 60 | #9d9da0 |
| 70 | #858589 |
| 80 | #6d6d71 |
| 90 | #505057 |
| 100 | #37373e |
| 110 | #24242b |
| 120 | #111114 |

#### Hue

**Red**: 5 #fef2f2, 10 #fee2e2, 20 #fdcbcb, 30 #fba6a6, 40 #f67373, 50 #ed4646, 60 #da2828, 70 #c52020, 80 #981c1c, 90 #7e1e1e, 100 #440b0b

**Orange**: 5 #fff4ed, 10 #ffe7d4, 20 #ffcaa8, 30 #ffa570, 40 #ff7437, 50 #ff5a1f, 60 #f03406, 70 #c72307, 80 #9e1d0e, 90 #7f1c0f, 100 #450a05

**Yellow**: 5 #fdfbe9, 10 #fcf6c5, 20 #faeb8e, 30 #f6d84e, 40 #f1c21b, 50 #e1ab11, 60 #c2840c, 70 #9b5e0d, 80 #804b13, 90 #6d3d16, 100 #401f08

**Pear**: 5 #fdfde8, 10 #f8facd, 20 #eff4a2, 30 #e0eb6b, 40 #d0df49, 50 #b0c31f, 60 #899b15, 70 #677615, 80 #525e16, 90 #465017, 100 #242c07

**Lime**: 5 #f7fee7, 10 #ecfccb, 20 #d9f99d, 30 #bef264, 40 #a3e635, 50 #84cc16, 60 #65a30d, 70 #4d7c0f, 80 #3f6212, 90 #365314, 100 #1a2e05

**Green**: 5 #f0fdf3, 10 #dcfce4, 20 #baf8cb, 30 #85f0a3, 40 #48e073, 50 #20c54f, 60 #15a43e, 70 #148134, 80 #15662d, 90 #135428, 100 #052e13

**Teal**: 5 #effefc, 10 #c8fff7, 20 #90ffee, 30 #51f7e5, 40 #1de4d5, 50 #05c7bb, 60 #00a19a, 70 #05807c, 80 #0a6563, 90 #0e5352, 100 #003233

**Ocean**: 5 #f0faff, 10 #e1f4fd, 20 #bceafb, 30 #81dbf8, 40 #42c9f2, 50 #15b1e2, 60 #0890c1, 70 #08739c, 80 #0b6181, 90 #0f506b, 100 #0a3447

**Sky**: 5 #eff7ff, 10 #e3f1ff, 20 #b8e0ff, 30 #79c7ff, 40 #32abfe, 50 #0791f0, 60 #0071ce, 70 #005aa6, 80 #034d89, 90 #094171, 100 #06284b

**Blue**: 5 #e8f7ff, 10 #d5efff, 20 #b3dfff, 30 #85c7ff, 40 #56a0ff, 50 #2f79ff, 60 #0c4bff, 70 #003beb, 80 #063bcd, 90 #103a9f, 100 #0a205c

**Indigo**: 5 #f9f5ff, 10 #e8e9ff, 20 #d5d9ff, 30 #b3b8ff, 40 #888bfd, 50 #6666ff, 60 #4835f2, 70 #3923de, 80 #2f1dba, 90 #291a98, 100 #000066

**Violet**: 5 #f9f5ff, 10 #f0e7ff, 20 #e4d4ff, 30 #cfb2ff, 40 #b180ff, 50 #8a3ffc, 60 #7c2df0, 70 #691cd4, 80 #5a1dac, 90 #4b198a, 100 #300467

**Fuchsia**: 5 #fdf4ff, 10 #fae8ff, 20 #f5d0fe, 30 #f0abfc, 40 #e879f9, 50 #d946ef, 60 #c026d3, 70 #a21caf, 80 #86198f, 90 #701a75, 100 #4a044e

**Pink**: 5 #fdf2f8, 10 #fce7f3, 20 #fbcfe8, 30 #f9a8d4, 40 #f472b6, 50 #ec4899, 60 #db2777, 70 #be185d, 80 #9d174d, 90 #831843, 100 #500724

**Sand**: 5 #f8f6f4, 10 #ede9e3, 20 #ded6ca, 30 #c8baa9, 40 #b19b86, 50 #a1856e, 60 #947562, 70 #7c6052, 80 #664f46, 90 #53423b, 100 #2c221e

**Brown**: 5 #f7f4ef, 10 #ebe3d6, 20 #d9c8af, 30 #c2a682, 40 #b0895f, 50 #a17751, 60 #8a5f44, 70 #6f4a39, 80 #5f3f34, 90 #4e342e, 100 #2f1d19

### UI Colors

#### On-layer

Use on-layer color as a fill color for texts and icons placed on top of the layer (e.g., box, widget, table, etc...) or background.

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Primary | #24242b | Primary color for text layers or icons on top of Layer | var(--color-on-layer-primary) |
| Secondary | #505057 | Secondary color for text layers or icons on top of Layer | var(--color-on-layer-secondary) |
| Tertiary | #9d9da0 | Color for tertiary text layers or icons used mostly as placeholders | var(--color-on-layer-tertiary) |
| Inverse | #f9f9fa | Color on high contrast moments (e.g. tooltips) | var(--color-on-layer-inverse) |
| Interactive | #003beb | Color represents interactive elements on top of Layer | var(--color-on-layer-interactive) |
| Warning | #e1ab11 | Color for text layers or icons on top of Layer represents warning state | var(--color-on-layer-warning) |
| Danger | #da2828 | Color for text layers or icons on top of Layer represents danger or error state | var(--color-on-layer-danger) |
| Success | #15a43e | Color for text layers or icons on top of Layer represents success state | var(--color-on-layer-success) |
| Recent | #691cd4 | Color for text layers or icons on top of Layer represents recent state | var(--color-on-layer-recent) |

#### Layer colors

Use layer color as a fill color for page, containers and boxes used in the design.

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Level 0 | #f3f3f5 | Default page and dialog background | var(--color-layer-level-0) |
| Level 1 | #ffffff | Default container background color on layer 0 | var(--color-layer-level-1) |
| Level 2 | #f3f3f5 | Container background color on layer 1 | var(--color-layer-level-2) |
| Level 3 | #e7e7e7 | Container background color on layer 1 | var(--color-layer-level-3) |
| Hover | rgba(0,0,0,0.05) | Hover state color for Layers on level 0 - 2 | var(--color-layer-hover) |
| Active | rgba(0,0,0,0.1) | Active state color for Layers on level 0 - 2 | var(--color-layer-active) |
| Info | #d5efff | Background color for Info container | var(--color-layer-info) |
| Warning | #fcf6c5 | Background color for Warning container | var(--color-layer-warning) |
| Danger | #fee2e2 | Background color for Error container | var(--color-layer-danger) |
| Success | #dcfce4 | Background color for Success container | var(--color-layer-success) |
| Recent | #f0e7ff | Background color for Recent container | var(--color-layer-recent) |
| Main navigation | #111114 | Color on Background reserved only for main navigation | var(--color-layer-main-navigation) |
| Highlight | #f6d84e | Highlight color for the text layers | var(--color-layer-highlight) |
| Transparent | rgba(255,255,255,0.01) | Transparent | var(--color-layer-transparent) |

#### Border colors

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Primary | rgba(0,0,0,0.2) | Border color on background and surface for lines and borders | var(--color-border-primary) |
| Secondary | rgba(0,0,0,0.1) | Border color on background and surface for lines and borders | var(--color-border-secondary) |
| Inverse | rgba(255,255,255,0.2) | Border color on high contrast moments (e.g. tooltips) | var(--color-border-inverse) |
| Info | #56a0ff | Border color for containers within a "info" type of content | var(--color-border-info) |
| Info emphasis | #003beb | | var(--color-border-info-emphasis) |
| Warning | #f6d84e | Border color for containers within a "warning" type of content | var(--color-border-warning) |
| Warning emphasis | #f1c21b | | var(--color-border-warning-emphasis) |
| Danger | #f67373 | Border color for containers within a "danger" type of content | var(--color-border-danger) |
| Danger emphasis | #da2828 | | var(--color-border-danger-emphasis) |
| Success | #85f0a3 | Border color for containers within a "success" type of content | var(--color-border-success) |
| Success emphasis | #20c54f | | var(--color-border-success-emphasis) |
| Recent | #b180ff | Border color for containers within a "recent" type of content | var(--color-border-recent) |
| Recent emphasis | #7c2df0 | | var(--color-border-recent-emphasis) |
| Focus button [Deprecated] | #24242b | Border color for button's Focus state | var(--color-border-focus-button) |
| Focus ring | #003beb | Border color for text inputs, checkboxes and radiobuttons Focus state | var(--color-border-focus-ring) |
| Focus ring inner | rgba(255,255,255,0.95) | | var(--color-border-focus-ring-inner) |
| Focus ring inverse | #85c7ff | | var(--color-border-focus-ring-inverse) |
| Focus ring inner inverse | rgba(0,0,0,0.7) | | var(--color-border-focus-ring-inner-inverse) |
| Focus form | #003beb | | var(--color-border-focus-form) |

#### Overlay colors

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Default | rgba(0,0,0,0.7) | Default background overlay for dialogs | var(--color-overlay-default) |
| Inverse | rgba(255,255,255,0.8) | Inversed background overlay use inside a dialogs | var(--color-overlay-inverse) |

#### Link colors

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Primary | #003beb | Primary links and Link button | var(--color-link-primary) |
| Secondary | #24242b | Secondary link color | var(--color-link-secondary) |
| Tertiary | #505057 | Tertialy link color | var(--color-link-tertiary) |
| Inverse | #f9f9fa | Links on high contrast backgrounds | var(--color-link-inverse) |
| Visited | #691cd4 | Visited links, but not for link buttons | var(--color-link-visited) |

#### Button colors

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Primary | #0c4bff | Primary button background color | var(--color-button-primary) |
| Light | rgba(255,255,255,0.7) | Secondary button background gradient on top of Background | var(--color-button-light) |
| Ghost | rgba(255,255,255,0) | Secondary button background gradient on top of Layer-1 | var(--color-button-ghost) |
| Invisible | rgba(255,255,255,0) | Tertiary button background color | var(--color-button-invisible) |
| Inverse | rgba(255,255,255,0) | Inverse button background color | var(--color-button-inverse) |
| Request | #15a43e | Request button background color | var(--color-button-request) |
| Danger | #da2828 | Danger button background color | var(--color-button-danger) |
| Purchase | #f6d84e | Purchase button background color | var(--color-button-purchase) |
| Ghost hover | rgba(0,0,0,0.05) | Hover background color for button Ghost | var(--color-button-ghost-hover) |
| Invisible hover | rgba(0,0,0,0.05) | Hover background color for button Invisible | var(--color-button-invisible-hover) |
| Inverse hover | rgba(255,255,255,0.05) | Hover background color for button Inverse | var(--color-button-inverse-hover) |
| Ghost active | rgba(0,0,0,0.1) | Active background color for button Ghost | var(--color-button-ghost-active) |
| Invisible active | rgba(0,0,0,0.1) | Active background color for button Invisible | var(--color-button-invisible-active) |
| Inverse active | rgba(255,255,255,0.1) | Active background color for button Inverse | var(--color-button-inverse-active) |
| Invisible applied | rgba(208,226,255,0.5) | | var(--color-button-invisible-applied) |

Gradient: enabled start/end, hover start/end, active start/end — see var(--color-button-gradient-*)

#### Tooltip colors

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Default | #24242b | Background color for Brief and Explanatory tooltips, and snackbars | var(--color-tooltip-default) |
| Guide | #0791f0 | Background color for Guiding tooltip or snackbar | var(--color-tooltip-guide) |
| Caveat | #f6d84e | Background color for Caveat tooltip or snackbar | var(--color-tooltip-caveat) |
| Danger | #da2828 | Background color for Danger tooltip or snackbar represented error situation | var(--color-tooltip-danger) |

#### Table colors

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Row odd | #ffffff | Background color for odd rows, header and footer | var(--color-table-row-odd) |
| Row even | #f9f9fa | Background color for even rows | var(--color-table-row-even) |
| Row hover | #d5efff | Background color for table row hover state | var(--color-table-row-hover) |
| Row hover border | #85c7ff | Border color for table row hover state | var(--color-table-row-hover-border) |

#### Platform colors

Facebook #0866ff, Instagram #d73676, X #000000, YouTube #ff0000, Pinterest #bb0f23, Linkedin #1078b3, Google analytics #f57e02, Google my business #4c8bf5, VKontakte #4e76a1, Snapchat #e6e300, TikTok #000000, TikTok splash #0bd0ca, Salesforce #00a1e0, News #354da3, Forum #dd470f, Blog #4b3827, Web #f57e02, Audience #6e50dc, Reddit #ff5700, Whatsapp #25d366, Threads #000000, Threads purple #9c27b0, Organic #406dd3, Paid #26bca6

#### Chart colors

Indigo #3f51b5, Blue #2196f3, Cyan #00bcd4, Teal #009688, Green #4caf50, Light green #8bc34a, Lime #cddc39, Yellow #ffcc02, Orange #ff9800, Red #f43636, Deep red #b01e1e, Brown #795548, Deep pink #e91e63, Pink #cd3497, Purple #9c27b0, Deep purple #622cc2, Gray #9f9f9f

#### Operator colors

IF #24242b, AND #20c54f, OR #691cd4, NEAR #ff5a1f, NOT #da2828

#### Sentiment colors

Positive strongly #148134, Positive #20c54f, Neutral #858589, Negative #da2828, Negative strongly #c52020, Mixed #ff5a1f, No #cececf

#### Grade colors

A+ #8fd363, A #3a922b, B #ffcc26, C #f09e5b, D #d3d3d3. Approval flow stages 1-15 — see var(--color-approval-flow-stage-*)

#### Scrollbar colors

Thumb #9d9da0, Thumb hover #24242b, Track #e7e7e7, Thumb inverse #6d6d71, Thumb inverse hover #b5b5b7, Track inverse #505057

#### Brand colors

Ocean #42c9f2, Dark blue #000066, Plum #6666ff, Coral #ff5a1f, Charcoal #111114, Sky blue #e3f1ff, Sand #ede9e3, Teal #51f7e5, Royal blue #003beb, Inverse #ffffff

#### AI colors

Gradient start #00a19a, end #7c2df0

#### Message colors

Incoming #e7e7e7, Outgoing #b3dfff

#### Loader colors

Spinner light #0791f0, Spinner dark #063bcd, Spinner inverse rgba(255,255,255,0.85), Skeleton rgba(0,0,0,0.05), Skeleton inverse rgba(255,255,255,0.1)

#### Shadow colors

Inner rgba(0,0,0,0.05), Drop 10 rgba(0,0,0,0.1), Drop 20 rgba(0,0,0,0.2), Drop 30 rgba(0,0,0,0.3)

---

## Elevation

The elevations are the layered containers that form the foundation of the UI. They create a blank canvas where other UI will be placed, such as text, icons, backgrounds, and borders.

#### Component checklist

- Design: Up to date
- React: Up to date

Elevations in the Soul Design System consist of containers and shadows. Soul also uses color as an alternative to shadows to communicate elevation. Both options give the impression of lift or depth. Elevations can guide focus through layering or indicate that the UI can be scrolled, slid, dragged, or clicked.

All containers and components have elevation values

### Elevation levels

The elevation system is purposely limited to just a handful of levels. This constraint means you must make thoughtful decisions about your UI's elevation story.

We defined six elevation levels. An element's resting state can be on levels 0 and 1, while levels 2, 3, and 4 are reserved for user-interacted states such as hover or dragged. 5th level creates a new, focused UI layer to redirect the user's attention.

- Use color change for interaction in elevation level 0
- Use a shadow change for interaction with the container in elevation level 1
- Level 2 is used to communicate hover states by changing the shadow or color of an element or container. Soul dedicated shadow 200 for this elevation level. Color depends on the element's default properties.

### Overlay

The overlay serves to temporarily highlight important content—such as modals, panels, or notifications—by isolating it from the primary interface, thereby directing user attention.

### Overflow

Overflow is another type of elevation that helps users to recognize content has scrolled outside a view using the shadow or border. It can be used for both vertical and horizontal scrolls.

When the content exceeds the available area, a border or shadow can be applied at the point the content is cut off to indicate there is hidden content that can be scrolled back into view.

A border is the default approach for scrolled content and can be seen in dialog sticky headers and footers and top and side navigation.

Shadows are reserved for experiences where a border might be easily missed, such as in very small UI or tables that use borders to separate cells. Use shadow 300 with an angle of 0º or 180º to direct it over the content.

### Shadows

Soul has defined four levels of shadow to help users recognize the distance between elements. Each level has a top-bottom direction by default. This can be changed if the element is stuck to the bottom of the screen or another element.

| Shadow | Light mode | Dark mode |
|--------|------------|-----------|
| Shadow 100 | 0 1px 3px 0 rgba(0,0,0,0.2), 0 0 0.5px 0 rgba(0,0,0,0.3), inset 0 0 1px 0 rgba(0,0,0,0.05), inset 0 0.25px 0 0.25px rgba(0,0,0,0.05) | 0 1px 3px 0 rgba(0,0,0,0.2), 0 0 0.5px 0 rgba(0,0,0,0.3), inset 0 0 1px 0 rgba(255,255,255,0.05), inset 0 0.25px 0 0.25px rgba(255,255,255,0.05) |
| Shadow 100 | Default shadow style for containers with layer level 1 background on layer level 0. | |
| Shadow 200 | 0 5px 12px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.2), 0 0 0.5px 0 rgba(0,0,0,0.3), inset 0 0 1px 0 rgba(0,0,0,0.05), inset 0 0.25px 0 0.25px rgba(0,0,0,0.05) | Same with rgba(255,255,255,0.05) for inset |
| Shadow 200 | The shadow style for the hover of containers with layer level 1. | |
| Shadow 300 | 0 10px 16px 0 rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.2), 0 0 0.5px 0 rgba(0,0,0,0.3)... | Same pattern |
| Shadow 300 | The shadow style for popovers and select lists. | |
| Shadow 400 | 0 10px 24px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.2)... | Same pattern |
| Shadow 400 | The shadow style for floating containers, e.g., dialog without overlay layer below it. | |

- Shadow 400 is the strongest shadow used on "floating" elements of the UI, e.g., a multi-select bar or panel without an overlay.
- Shadow 300 represents the 3rd elevation level, and it is applied to elements populated by action, e.g., for the select list, which is shown by clicking on the select field or for the popover.
- Shadow 200 can be used to represent the interactivity of the element. It is used for the hover state of elements with Shadow 100 applied.
- Shadow 100 is the default shadow style used for most boxes to differentiate them from the background.
- Level 5 is used once you need to change the user's attention. In this case, Soul usually uses an overlay layer between the original interface and the elevated element. Exceptions are fullscreen dialogs, which create a new layer of UI.

---

## Illustrations

### Overview

Illustrations are visual symbols used to represent ideas, objects, or narratives. They can communicate messages at a glance, afford interactivity, and simplify complex ideas.

#### Component checklist

- Design: Up to date
- React: Up to date

### Types

Illustrations should communicate complex ideas at a quick glance. While usually paired with text, illustrations should present information clearly so that the message is immediately understood. They should never be used as decoration or without consideration.

Depending on the complexity and level of attention, we differentiate two types of illustration:

1. Complex illustrations
2. Simple illustrations

In both cases, we use a flat illustration style. The illustrations usually do not include people but occasionally include some atmospheric elements, depending on the design.

Most illustrations primarily use shades of grey and another primary color, usually blue. A third color can be introduced in rare cases for greater visual interest. Green is used to communicate a successful user action or lack of issues. Red is reserved for errors, missing data, and removing buttons (e.g., close button).

#### Simple illustrations

Regarding functionality, simple illustrations are smaller in size and used in states and modals that take up a small portion of the page.

Simple illustrations should be instantly recognizable, bold, and without much graphic detail.

#### Complex illustrations

Complex illustrations are larger and used in states and modals that take up most of the page.

Complex illustrations are useful in displaying a snapshot of the main idea with more graphic detail than simple illustrations. They include more visual detail and may incorporate a creative concept or narrative.

#### Where to use

Illustrations are used in two situations on the platform:

- as visual support in information modals to make the modal more attractive and to engage the user's attention
- in Empty states

When deciding whether to use a low or complex illustration, consider the empty state's or modal's purpose and size.

### Simple illustrations

Resources: Figma component library, Storybook component documentation.

### Complex illustrations

Resources: Figma component library, Storybook component documentation.

---

## Modul icons

Modul icons represent the main products in the Emplifi CX platform to help users easily recognize them.

#### Component checklist

- Design: Up to date
- React: Up to date

### Icons preview

Module icons are available in the Figma library and Storybook. See Resources for links.

---

## Overlay

The overlay serves to temporarily highlight important content—such as modals, panels, or notifications—by isolating it from the primary interface, thereby directing user attention.

### Usage

The overlay is designed to present transient content—such as modals, panels, or notifications—in a way that immediately captures the user's attention while maintaining a clear separation from the underlying interface.

### Appearance

#### Color & opacity

Utilize a semi-transparent dark background with an opacity of about 80%. This dims the underlying interface, providing sufficient contrast while maintaining context.

| Name | Value | Description | Variable |
|------|-------|-------------|----------|
| Default | rgba(0,0,0,0.7) | Default background overlay for dialogs | var(--color-overlay-default) |
| Inverse | rgba(255,255,255,0.8) | Inversed background overlay use inside a dialogs | var(--color-overlay-inverse) |

#### UI Motion

##### Entry and exit effects

As part of the overlay, Soul uses smooth fade-in and fade-out transitions, with durations typically around 180ms, to ensure that the overlay's appearance and disappearance feel natural and unobtrusive.

Avoid overly dramatic animations; the focus should remain on content clarity and user comprehension.

### Accessibility

#### Focus management

Visually, the overlay should signal its active state clearly, and in the background, ensure that focus (both visual and programmatic) is appropriately managed to assist users navigating via keyboard or assistive technologies.

#### Readable & clear

All text and interactive elements within the overlay should maintain high readability standards, ensuring that critical information is accessible to all users.

---

## Radius

Radius refers to the rounded corners found in elements and various pieces of content. These corners provide a touch of personalization to the design, resulting in a bolder and more expressive appearance.

#### Component checklist

- Design: Up to date
- React: Up to date

### Definition

A radius refers to the amount of curvature or rounding applied to the corners of a rectangular shape or element.

It determines how none or smooth the corners of an element appear. In addition to its aesthetic impact, the radius can affect an element's perceived weight and texture.

### Purpose and hierarchy

The purpose of radius rules is to highlight the container nesting level visually – the more the container envelops, the bigger its radius.

This description serves as a general guideline rather than a strict rule, as there is relative freedom in using the border radiuses according to your needs.

### Variables

In Soul, we offer radius variables to help you maintain a consistent appearance throughout your project when simultaneously rounding all corners of an element. You can use the corresponding class or variable representing the desired radius value to apply these variables.

| Value | Name | Description | Variable |
|-------|------|-------------|----------|
| 2px | Small | Use a small radius to soften the corners of areas you don't want to look like cards or boxes. | --border-radius-small |
| 6px | Medium | Medium is the default radius for most elements. | --border-radius-medium |
| 8px | Large | Use a large radius when an element is used as a Container for other elements and pieces of content. | --border-radius-large |
| 50% | Full | Use a full radius to create a circle. | --border-radius-full |
| 999px | Pill | Use a pill radius to round off the edge to a half circle, creating a pill-like shape. | --border-radius-pill |

---

## Spacing

Spacing is a critical part of visual design. Using Soul as a guideline for your spacing will help you to overcome assumptions and ensure you deliver clear, functional layouts.

#### Component checklist

- Design: Up to date
- React: Up to date

### Scale

The spacing scale is a guideline for all Soul components, demonstrating the incremental additions and substractions you need to create appropriate spatial relationships at the detail-level.

| Value | Name | Description | Variable |
|-------|------|-------------|----------|
| 3px | Space 1 | Primary space reserved for smaller components like Input, Select field, Button, etc. Using it as a general spacing (padding or margin) is not recommended. | --space-1 |
| 6px | Space 2 | The primary and default space unit. | --space-2 |
| 9px | Space 3 | Primary space reserved for smaller components like Input, Select field, Button, etc. Using it as a general spacing (padding or margin) is not recommended. | --space-3 |
| 12px | Space 4 | Standard space between logically associated and unassociated elements. e.g. Inside of a tooltip; horizontal spacing between associated and unassociated buttons, etc. | --space-4 |
| 18px | Space 5 | | --space-5 |
| 24px | Space 6 | Standard space between logically primarily unassociated but also secondarily associated elements. e.g. form elements like inputs and selects. Default app content padding for resolution 1559px and lower. | --space-6 |
| 30px | Space 7 | | --space-7 |
| 36px | Space 8 | Standard space between empty state and text. Default app content padding for resolution 1560px and higher. | --space-8 |
| 48px | Space 9 | | --space-9 |
| 60px | Space 10 | | --space-10 |
| 72px | Space 11 | Standard space below the empty state in panels or full-page elements. | --space-11 |
| 96px | Space 12 | | --space-12 |
| 120px | Space 13 | | --space-13 |

### Recommendations

#### Paddings and margins

Below is a guideline for how to manage padding and margins between and inside elements or components. Use these recommendations to create custom and more complex parts of the UI. In other cases, everything should be prepared and available in the design system.

##### 6px

- Standard space between logically associated elements. e.g., Multiple buttons, a checkbox and a label, a tooltip and a button/icon, an icon and text, etc.

##### 12px

- Standard space between logically associated and unassociated elements. e.g., Inside of a tooltip, horizontal spacing between associated and unassociated buttons, etc.

##### 24px

- Default app content padding for resolution 1559px and lower
- Standard space between logically primarily unassociated but also secondarily associated elements. e.g. form elements like inputs and selects.

##### 36px

- Default app content padding for resolution 1560px and higher
- Standard space between empty state and text

##### 72px

- Bottom padding for content where there is a Go to up button
- Standard space below the empty state in panels or full-page elements

#### Sizes

Below are a few recommendations for spacing elements or components. Use these to create custom and more complex parts of the UI. Everything should be prepared and available in the design system.

##### 30px

- Smaller size for interactive elements if you need to save space. Eg. Community

##### 36px

- The default size of buttons, inputs, and other interactive elements

##### 48px

- The bigger size of interaction elements if you need to increase the attention of this element. Eg. the Request button on the teasing page.

##### 60px

- The standard height of bars. E.g. App header, the bar for bulk changes, etc.

---

## Typography

### Overview

Typography serves to organize information into clear hierarchical structures and guide users throughout interface.

#### Component checklist

- Design: Up to date
- React: Up to date

### Main typeface

Soul uses the open-source typeface Inter. It has been carefully chosen to meet our needs and reflect our brand, ethos, and design principles. The Inter typeface family can be downloaded from [Google Fonts](https://fonts.google.com/specimen/Inter).

### Type color

The choice of type color should prioritize legibility and accessibility above all else. Keep the neutral color --color-on-layer-primary as a default option for most texts, the subtle color --color-on-layer-secondary for supplemental texts, and use --color-on-layer-interactive for primary actions.

### Styles

The right typographic treatment and the controlled usage of typestyle help manage the display of content and keep it useful.

We recommend following our predefined styles to create a series of clear user expectations about hierarchy.

We use the following setup for the main font to create the best experience in each part of the platform.

- [Character variants](https://rsms.me/inter/#features/cvXX)(cv08)
- [Tabular numbers](https://rsms.me/inter/#features/tnum)(only for tables)
- [Contextual alternates](https://rsms.me/inter/#features/calt)
- [Slashed zero](https://rsms.me/inter/#features/zero)
- [Case alternates](https://rsms.me/inter/#features/case)

### Mixins and variables

#### Headline

| Style | Spec | Description | Mixin |
|-------|------|-------------|-------|
| Headline hero | Inter 700 46px/60px | Display. This text style is exclusively and only to be used on teasing pages. | headline-hero |
| Headline 1 | Inter 500 30px/42px | Use on top of the content as a main headline or title of the page or content block. Soul recommends using only one H1 style per page. | headline-1 |
| Headline 2 | Inter 500 20px/30px | Use on top of the content block as a second headline or title of the surface or page. | headline-2 |
| Headline 3 | Inter 500 16px/24px | Use on top of the content block as a third headline or title of the surface or page. | headline-3 |
| Headline 4 | Inter 700 13px/18px | Use on top of the content block as a fourth headline or title of the surface or page. | headline-4 |
| Headline 4 - Uppercase | Inter 700 13px/18px, uppercase | Use on top of the content block as a fourth headline or title of the surface or page. | - |
| Headline 5 | Inter 700 10px/12px, uppercase | Use this text style to differentiate smaller blocks of the content inside surfaces. Avoid using the style as a title for inputs or selects elements. | headline-5 |

#### Body

| Style | Spec | Mixin | Variable |
|-------|------|-------|----------|
| Large (16px) - Regular | Inter Regular 16px/24px | - | - |
| Large (16px) - Bold | Inter Bold 16px/24px | - | - |
| Medium (13px) - Regular | Inter Regular 13px/18px | paragraph-regular | - |
| Medium (13px) - Bold | Inter Bold 13px/18px | paragraph-regular | --font-weight-bold |
| Small (11px) - Regular | Inter Regular 11px/16px | paragraph-small | - |
| Small (11px) - Bold | Inter Bold 11px/16px | paragraph-small | --font-weight-bold |

#### Code

| Style | Spec | Mixin | Variable |
|-------|------|-------|----------|
| 13px (Medium) - Regular | Noto Sans Mono 400 13px/18px | code-regular | - |
| Large (16px) - Regular | Noto Sans Mono Regular 16px/24px | - | - |
| Large (16px) - Bold | Noto Sans Mono Bold 16px/24px | - | - |
| Medium (13px) - Regular | Noto Sans Mono Regular 13px/18px | - | - |
| Medium (13px) - Bold | Noto Sans Mono Bold 13px/18px | - | - |
| Small (11px) - Regular | Noto Sans Mono Regular 11px/16px | - | - |
| Small (11px) - Bold | Noto Sans Mono Bold 11px/16px | - | - |
| 13px (Medium) - Bold | Noto Sans Mono 700 13px/18px | code-regular | --font-weight-bold |
| 11px (Small) - Regular | Noto Sans Mono 400 11px/16px | code-regular | - |
| 11px (Small) - Bold | Noto Sans Mono 700 11px/16px | - | --font-weight-bold |

#### Supporting

| Style | Spec | Description | Mixin | Variable |
|-------|------|-------------|-------|----------|
| Field label | Inter 600 11px/18px | Use this style for all labels of inputs and triggers | - | - |
| Helper - Regular | Inter 400 10px/12px | | helper-regular | - |
| Helper - Bold | Inter 700 10px/12px | | helper-regular | --font-weight-bold |
| Button label | Inter 600 13px/18px | | - | - |
| Field label | Inter 600 11px/18px | Use this style for all labels of inputs and triggers | - | - |
| Hotkey label | Inter 700 11px/16px, uppercase | This style is reserved for hotkeys only. | - | - |
| Badge label | Inter 700 10px/12px, uppercase | | - | - |
| Platform tag label | Inter 800 8px/12px, uppercase | | - | - |

### Typefaces

All Soul typefaces have been carefully chosen to meet our needs and reflect our brand, ethos, and design principles.

#### Inter

The Inter typeface family is our primary typeface and is used across all of our UI, including exports.

Inter is a variable font family carefully crafted & designed for computer screens. Inter features a tall x-height to aid in readability of mixed-case and lower-case text. [Google Fonts - Inter](https://fonts.google.com/specimen/Inter?query=inter)

#### Noto Sans Arabic

Noto Sans Arabic is our primary typeface used for Arabic text.

Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Arabic is an unmodulated ("sans serif") design for texts in the Middle Eastern Arabic script. [Google Fonts - Noto Sans Arabic](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic)

#### Noto Sans Mono

Noto Sans Mono was chosen to represent code blocks in Soul UI.

Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Mono is a monospaced, unmodulated ("sans serif") design suitable for code and technical content. [Google Fonts - Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)

---

## UI Icons

UI Icons provide additional information. You can use them when there's no space for a text label to draw attention to important messages and pieces of information.

#### Component checklist

- Design: Up to date
- React: Up to date

### Gallery

UI Icons are organized into categories:

- UI Icons / System
- UI Icons / Navigation
- UI Icons / Operation
- UI Icons / File
- UI Icons / Formatting
- UI Icons / User
- UI Icons / Technology
- UI Icons / Time
- UI Icons / Social specific
- UI Icons / Toggle
- UI Icons / Data source & Social
- UI Icons / Control
- UI Icons / Emplifi app
- UI Icons / Additional
- UI Icons / Arrow
- UI Icons / Media type
- UI Icons / Content type
- UI Icons / Metrics
- UI Icons / Sentiment
- UI Icons / Sorting
- UI Icons / Predicted grade
- UI Icons / Status
- UI Icons / Data visualisations
- UI Icons / Shape
- UI Icons / Export types

Download all icons from Figma or Storybook. See Resources, Properties, Meaning, and Usage pages for detailed documentation.

---

## UI Motion

Motion improves user experience and it brings to our UI a sense of life while providing our users with valuable interactional feedback.

#### Component checklist

- Design: Up to date
- React: Up to date

The UI motion library is a work in progress and subject to daily changes. Consult usage with the Soul DS team.

### Overview

#### Duration

| Variable | Duration | Potential usage |
|----------|----------|-----------------|
| --motion-duration-instant | 0ms | Text change |
| --motion-duration-quick-1 | 80ms | Checkboxes, Radio buttons |
| --motion-duration-quick-2 | 120ms | Toggles, Tabs, Chips, Color, Button hover |
| --motion-duration-moderate-1 | 180ms | Dropdowns, Tooltips |
| --motion-duration-moderate-2 | 270ms | Modals, Snackbars, Dialogs, Notifications |

#### Easing

| Variable | Easing |
|----------|--------|
| --motion-easing-ease | ease |
| --motion-easing-entry | ease-out |
| --motion-easing-exit | ease-in |
| --motion-easing-linear | linear |

#### Position

| Variable | Value |
|----------|-------|
| --motion-slide-up | translateY(12px) |
| --motion-slide-down | translateY(-12px) |

#### Effects

Effects are the key to turning components from static to interactive and keeping UI elements alive.

##### Slide up fade

As a default setup, Soul recommends using duration --motion-duration-moderate-2 to show and hide the UI element with --motion-easing-entry and --motion-easing-exit easings and --motion-slide-up position.

##### Slide down fade

As a default setup, Soul recommends using duration --motion-duration-moderate-2 to show and hide the UI element with --motion-easing-entry and --motion-easing-exit easings and --motion-slide-down position.

##### Fade

As a default setup, Soul recommends using duration --motion-duration-quick-2 to show and hide the UI element with --motion-easing-linear.

### Accessibility

Motion plays a crucial role in design as it guides users while using our product and helps orientate them by depicting how UI elements are connected. However, we should also consider whether motion can cause discomfort to users.

Certain groups of users may not be able to safely experience certain types of motion due to vestibular disorders, vision problems, and epilepsy. Unsafe animations can lead to dizziness, migraines, imbalance, nausea, or even worse for these people. Examples of risky motion include horizontal animations while scrolling vertically, large areas of motion, or having elements moving at different speeds, such as the parallax effect. To avoid this, it is important to ensure that all animations are easy to understand, have a clear purpose, and are simple to follow.

In conclusion, the safety of our users is of utmost importance when it comes to motion in design. All animations should be accessible to everyone, regardless of their physical abilities. If not, our animations could turn from helpful to dangerous.

#### Recommendation

Soul recommends using the following suggestions to make motion accessible.

- Be certain the code is accurate according to the screen reader for motion accessibility
- Make sure animations don't interfere with screen magnifiers
- Avoid rough bounces
- Limit flashes three times or less per second
- Avoid animations where there is no user focus
- Avoid automatic animations; let users trigger motion instead
- Avoid moving elements at different speeds, such as the parallax effect
- Avoid horizontal scrolling while users are scrolling vertically
- Avoid animations that cover up large screens

##### Safe motion

- Expanding
- Scaling
- Slides
- Color transitions
- Fade in/out

##### Risky motion

- Rotating while scrolling
- Scale-up/down while scrolling
- Zoom in/out while scrolling
- Fast effects
- Too bouncing animations
- Parallax

#### Reduced motion preference

The prefers-reduced-motion CSS media feature is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion. The setting conveys to the browser on the device that the user prefers an interface that removes, reduces, or replaces motion-based animations.

Such animations can trigger discomfort for those with [vestibular motion disorders](https://www.a11yproject.com/posts/understanding-vestibular-disorders/). Animations such as scaling or panning large objects can be vestibular motion triggers.

[prefers-reduced-motion - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
