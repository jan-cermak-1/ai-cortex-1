# SOUL Design System — Icon Library

Complete collection of 1014 UI icons from the SOUL Design System.

## Location

All icons are in: `./icons/`

## Icon Categories

### General UI Icons
- Navigation: Arrows, chevrons, menu
- Actions: Add, edit, delete, save, upload, download
- Interface: Close, maximize, minimize, settings
- Status: Success, error, warning, info
- Communication: Bell, message, email, phone

### Business & Analytics
- Analytics: Charts, graphs, metrics, insights
- Reports: Document, file, export, print
- Data: Database, sync, refresh, update

### Social Media & Platforms
- Facebook, Instagram, Twitter (X), LinkedIn, YouTube, TikTok
- Messenger platforms
- Social actions: Like, share, comment, repost

### Content & Media
- Photo, video, document, link
- Upload, download, attachment
- Camera, microphone, recording

### People & Teams
- User, profile, team, agent
- Roles, permissions, groups
- Avatar, contact, directory

### Grades & Ratings
- A+, A, B, C, D, F grades (filled and outline)
- Star ratings
- Thumbs up/down
- Sentiment indicators

### AI Features
- AI sparkle, AI assistant
- Automation, smart features
- Predictive, recommendations

## Usage in Documentation

Icons are referenced in:
- **components-catalog.md**: Component visual examples
- **patterns-guide.md**: UI pattern illustrations
- **SKILL.md**: Quick visual references

## Format

- **File format**: SVG (scalable vector graphics)
- **Color**: Most icons are monochrome (inherit color from CSS)
- **Sizes**: 16px, 18px, 24px typical usage
- **Naming**: Descriptive kebab-case (e.g., `arrow-right.svg`, `user-profile.svg`)

## Preview Sample Icons

### Navigation
- `arrow-left.svg`, `arrow-right.svg`, `arrow-up.svg`, `arrow-down.svg`
- `chevron-left.svg`, `chevron-right.svg`, `chevron-up.svg`, `chevron-down.svg`
- `Caret left.svg`, `Caret right.svg`, `Caret up.svg`, `Caret down.svg`

### Actions
- `Add.svg`, `Add filled.svg`
- `Edit.svg`, `Edit filled.svg`
- `Delete.svg`, `remove-delete-trash.svg`
- `Save.svg`, `Save filled.svg`
- `Copy.svg`, `Duplicate.svg`
- `Download.svg`, `Upload.svg`
- `Refresh-reload.svg`, `Sync.svg`

### Status & Indicators
- `status-active.svg`, `status-inactive.svg`, `status-in-progress.svg`
- `Success.svg`, `Error.svg`, `Warning.svg`
- `Info.svg`, `Help.svg`, `Question mark.svg`
- `Checkmark.svg`, `Close.svg`, `Minus.svg`, `Plus.svg`

### Social Platforms
- `facebook-editable.svg`, `facebook-filled.svg`
- `instagram-editable.svg`, `instagram-filled.svg`
- `twitter-editable.svg`, `twitter-filled.svg`
- `linkedin-editable.svg`, `linkedin-filled.svg`
- `youtube-editable.svg`, `youtube-filled.svg`
- `tiktok-editable.svg`, `tiktok-filled.svg`

### Content
- `Photo.svg`, `Video.svg`, `Document.svg`
- `Link.svg`, `Link external.svg`
- `Attachment.svg`, `File.svg`, `Folder.svg`
- `Camera.svg`, `Image.svg`, `Gallery.svg`

### People & Communication
- `User.svg`, `User filled.svg`, `Users.svg`
- `Team.svg`, `Agent.svg`, `Customer.svg`
- `Message.svg`, `Chat.svg`, `Comment.svg`
- `Email.svg`, `Inbox.svg`, `Direct message.svg`
- `Phone.svg`, `Call.svg`, `Video call.svg`

### Analytics & Business
- `analytics-app-filled.svg`, `Insights.svg`
- `Chart.svg`, `Graph.svg`, `Report.svg`
- `Dashboard.svg`, `Metrics.svg`, `Performance.svg`
- `Calendar.svg`, `Clock.svg`, `Time.svg`
- `Campaign.svg`, `Strategy.svg`, `Target.svg`

### AI & Smart Features
- `AI.svg`, `AI filled.svg`
- `Automation.svg`, `Bot.svg`, `Robot.svg`
- `Smart.svg`, `Recommend.svg`, `Suggest.svg`
- `Generate.svg`, `Optimize.svg`, `Predict.svg`

## Icon States

Many icons have multiple states:
- **Default**: Regular outline version
- **Filled**: Solid fill version (e.g., `Add.svg` vs `Add filled.svg`)
- **Editable**: Platform-specific editable state
- **Disabled**: Grayed out or lower opacity
- **Active**: Highlighted or accented

## Implementation

### In HTML
```html
<img src="./assets/icons/Add.svg" alt="Add" width="24" height="24">
```

### In CSS (as background)
```css
.icon-add {
  background-image: url('./assets/icons/Add.svg');
  background-size: 24px 24px;
}
```

### Inline SVG
```html
<!-- Copy SVG content directly for CSS customization -->
<svg width="24" height="24" viewBox="0 0 24 24">...</svg>
```

## Color Customization

Most icons use `currentColor` and inherit text color:

```css
.icon {
  color: var(--color-on-layer-primary); /* Icon inherits this color */
}
```

For specific colors:
```css
.icon-success { color: var(--color-status-success); }
.icon-error { color: var(--color-status-error); }
.icon-primary { color: var(--color-button-primary); }
```

## Complete Icon List

Total icons: **462**

For the complete alphabetical list, see the `./icons/` directory.

Sample icons (first 100):
- A+ grade filled.svg
- A+ grade.svg
- A grade filled.svg
- A grade.svg
- About.svg
- Accessibility alt.svg
- Account.svg
- Activity log.svg
- Add Conversation flow.svg
- Add.svg
- Agent.svg
- AI.svg
- Analytics.svg
- API key.svg
- API.svg
- Archive.svg
- Arrow back.svg
- Arrow down.svg
- Arrow forward.svg
- Arrow left.svg
- Arrow right.svg
- Arrow up.svg
- Attachment.svg
- Automation.svg
- Avatar.svg
- B grade.svg
- Bell notification.svg
- Bookmark.svg
- Bot.svg
- C grade.svg
- Calendar.svg
- Call.svg
- Camera.svg
- Campaign.svg
- Cancel.svg
- Caret down.svg
- Caret left.svg
- Caret right.svg
- Caret up.svg
- Chart.svg
- Chat.svg
- Checkmark.svg
- Chevron down.svg
- Chevron left.svg
- Chevron right.svg
- Chevron up.svg
- Clock.svg
- Close.svg
- Comment.svg
- Copy.svg
- Customer.svg
- D grade.svg
- Dashboard.svg
- Delete.svg
- Document.svg
- Download.svg
- Duplicate.svg
- Edit.svg
- Email.svg
- Error.svg
- Export.svg
- External link.svg
- Eye.svg
- F grade.svg
- Facebook.svg
- File.svg
- Filter.svg
- Folder.svg
- Gallery.svg
- Graph.svg
- Help.svg
- Hide.svg
- Home.svg
- Image.svg
- Inbox.svg
- Info.svg
- Instagram.svg
- Layout.svg
- Like.svg
- Link.svg
- LinkedIn.svg
- List.svg
- Lock.svg
- Menu.svg
- Message.svg
- Metrics.svg
- Minus.svg
- More.svg
- Notification.svg
- Options.svg
- Pause.svg
- Performance.svg
- Phone.svg
- Photo.svg
- Pin.svg
- Play.svg
- Plus.svg
- Print.svg

... and 362 more icons in the directory.

## Resources

- **SOUL Storybook**: https://soul.dev.emplifi.io/?path=/docs/icons-icon--overview
- **SOUL Docs**: https://soul.emplifi.io/latest/foundations/ui-icons
- **Icon Guidelines**: See `../SKILL.md#icon` and `../components-catalog.md#icon`

## Notes

- All icons are from the official SOUL Design System
- Icons are optimized SVG files
- Use appropriate sizing (16px-32px) based on context
- Maintain accessibility with proper `alt` text or `aria-label`
- Some icons have platform-specific variants (Facebook, Instagram, etc.)
