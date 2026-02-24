# Demo Flows — Cortex AI

Living documentation of all demo flows. Update whenever `flows/*.js` changes.

---

## HUMAN CURATED

### Labubu Trend
**Persona:** Social Media Manager  
**Scenario:** Trend detection and campaign creation

1. Navigate to Command Center
2. Intelligence box appears — Cortex alerts that Labubu is trending and competitors are publishing related content
3. Cursor moves to the Cortex panel
4. Click "More ideas" — Cortex expands the list of suggested actions
5. Check 3 actions: create campaign + collection, create listening query, create analytics board
6. Click "Execute selected" — Cortex starts executing the actions
7. Open result: Collection "Labubu" (Content)
8. Open result: Publisher campaign "Labubu" (Publisher)
9. Open result: Listening query "Labubu" (Settings)
10. Open result: Analytics custom board "Labubu" (Unified Analytics)
11. Delete result: Analytics board
12. Delete result: Listening query
13. Delete result: Publisher campaign
14. Delete result: Collection

---

### Bulk User Import
**Persona:** Team Admin  
**Scenario:** Bulk import of users from an Excel file

1. Navigate to Settings / Users — starting point for the admin
2. Navigate to Command Center to open Cortex
3. Click the `+` (attachment) button in the Cortex chatbox
4. Click "Upload file" in the dropdown — macOS Finder modal opens
5. Select `users-import.xlsx` from the Finder modal
6. Type "add these users" in the chat input
6. Type "add these users" in the chat input
7. Click the send button — message with attached file appears in chat
8. Cortex: analyzing the uploaded file — `users-import-2026.xlsx`
9. Cortex: found 47 valid records (Name, Email, Department, Role)
10. Intelligence box appears with import options
11. Cortex: recommends importing users, creating teams, sending invites, and assigning roles
12. Check 4 actions: import users, create teams, send invites, assign roles
13. Click "Execute selected"
14. Cortex: import complete — 47 users, 6 teams created by department, invitations queued
15. Navigate to Settings / Users — all users are now visible in the User Management panel

---

## AI GENERATED

### Crisis Response
**Persona:** Brand Manager  
**Scenario:** Responding to a sudden negative sentiment spike for the EcoBottle Pro product

1. Navigate to Command Center
2. Cortex URGENT ALERT: 340% increase in negative mentions over the last 2 hours
3. Cortex: primary topic — product quality complaints about EcoBottle Pro
4. Intelligence box appears with recommended actions
5. Cortex: recommends pausing ads, drafting a crisis statement, escalating to Care, and setting up monitoring
6. Check 4 actions: pause promotional content, draft crisis response, escalate to Care, create monitoring board
7. Click "Execute selected"
8. Cortex: crisis protocol activated — 12 posts paused, 28 mentions escalated
9. Navigate to Publisher Calendar — view paused promotional posts
10. Cortex: posts are on hold until the crisis is resolved
11. Navigate to Care Inbox — Care team is handling escalated mentions
12. Cortex: Care team active, crisis monitoring board running
13. Navigate to Unified Analytics — real-time crisis monitoring board
14. Cortex: data shows sentiment stabilizing

---

### Review Automation
**Persona:** eCommerce Manager  
**Scenario:** Automating responses to 156 pending product reviews

1. Navigate to Command Center
2. Cortex: detected 156 unresponded reviews across the product catalog
3. Cortex: breakdown — 89 positive (4–5 stars), 42 neutral, 25 negative
4. Intelligence box appears with automation options
5. Cortex: recommends auto-replies for positive, drafts for negative, flagging refunds, and tagging
6. Check 4 actions: auto-respond to positive, draft responses for negative, flag refund mentions, tag by category
7. Click "Execute selected"
8. Cortex: automation complete — 89 responses sent, 25 drafts ready, 8 escalated
9. Navigate to Ratings & Reviews — review negative response drafts
10. Cortex: drafts ready for approval, all reviews tagged by category
11. Navigate to Unified Analytics — sentiment breakdown by category
12. Cortex: response rate increased to 97%

---

### Care Team Onboarding
**Persona:** Care Supervisor  
**Scenario:** Onboarding 8 new Care agents from a CSV roster file

1. Navigate to Command Center
2. Cortex: processed file `care-team-roster.csv`
3. Cortex: found 8 new agents with channel and skill assignments
4. Intelligence box appears with onboarding steps
5. Cortex: recommends creating accounts, assigning queues, configuring schedules, enabling macros
6. Check 4 actions: create agent accounts, assign queues, configure shift schedules, enable macro library
7. Click "Execute selected"
8. Cortex: onboarding complete — 8 accounts created, queues assigned, schedules set, 42 macros enabled
9. Navigate to Settings / Users — newly created agent accounts visible
10. Cortex: agents have inbox access
11. Navigate to Care Inbox — agents are ready to handle cases
12. Cortex: team capacity increased by 40%

---

### Content Optimizer
**Persona:** Content Lead  
**Scenario:** AI optimization of 23 scheduled posts for next week

1. Navigate to Command Center
2. Cortex: analyzed 23 scheduled posts for next week
3. Cortex: optimization opportunities found — predicted +32% engagement improvement
4. Intelligence box appears with optimization suggestions
5. Cortex: recommends rescheduling to optimal times, improving copy, updating hashtags, visual suggestions
6. Check 4 actions: reschedule to optimal times, enhance captions, update hashtags, suggest visual improvements
7. Click "Execute selected"
8. Cortex: optimization complete — 8 posts rescheduled, 23 captions enhanced, 5 visual suggestions ready
9. Navigate to Publisher Calendar — optimized content calendar (Monday peak time 9:30 AM)
10. Cortex: posts rescheduled to best engagement windows
11. Navigate to Content Collection — visual improvement suggestions ready for review
12. Cortex: suggestions prepared

---

### Competitor Alert
**Persona:** Brand Manager  
**Scenario:** Responding to CompetitorX's #SummerSavings campaign launch

1. Navigate to Command Center
2. Cortex ALERT: CompetitorX launched a major campaign targeting the same audience segment
3. Cortex: #SummerSavings campaign generating +45% engagement spike — counter-strategy recommended
4. Intelligence box appears with recommended response actions
5. Cortex: recommends campaign analysis, counter-content, boost budget, audience retargeting
6. Check 4 actions: analyze competitor campaign, generate counter-content, recommend paid boosts, set up audience retargeting
7. Click "Execute selected"
8. Cortex: response activated — analysis ready, 6 counter-content ideas generated, $2,500 boost budget recommended
9. Navigate to Unified Analytics — detailed campaign analysis and share of voice comparison
10. Cortex: share of voice comparison overview
11. Navigate to Publisher Calendar — boost recommendations and retargeting audience of 125K users
12. Cortex: retargeting audience created

---

### Bot Tuning
**Persona:** Bot Manager  
**Scenario:** Improving chatbot performance — containment rate from 73% to 80%

1. Navigate to Command Center
2. Cortex: analyzed chatbot performance — 2,847 conversations this week
3. Cortex: containment rate 73% (target: 80%) — +8% improvement opportunities identified
4. Intelligence box appears with optimization recommendations
5. Cortex: recommends improving intents, adding responses, updating fallback, training entities
6. Check 4 actions: improve intent recognition, add missing responses, update fallback flow, train product entity model
7. Click "Execute selected"
8. Cortex: optimization complete — 5 intents improved, 12 responses added, fallback updated, entity model retrained
9. Navigate to Bot Overview — post-optimization status
10. Cortex: top intent "order_status" now at 94% accuracy, bot is live with updated models
11. Cortex: expected containment rate improvement +8%, monitoring started

---

### Listening Report
**Persona:** PR Manager  
**Scenario:** Generating a weekly brand listening report for stakeholders

1. Navigate to Command Center
2. Cortex: compiled weekly brand data — 12,456 mentions across all channels
3. Cortex: positive sentiment +12% vs last week — stakeholder report ready
4. Intelligence box appears with report content options
5. Cortex: recommends executive summary, sentiment visualization, topic breakdown, share of voice
6. Check 4 actions: generate executive summary, create sentiment trend chart, topic breakdown, calculate share of voice
7. Click "Execute selected"
8. Cortex: report generated — summary, sentiment trends, topic breakdown, SOV: 34%
9. Navigate to Unified Analytics — weekly listening report with all visualizations
10. Cortex: data overview with charts
11. Cortex: share of voice increased to 34% (up from 31% last month), PDF report ready for download

---

### VoC Insights
**Persona:** CX Director  
**Scenario:** Analyzing Q1 Voice of Customer data for a board presentation

1. Navigate to Command Center
2. Cortex: analyzed Q1 VoC data — 4,287 survey responses and 18,000+ feedback touchpoints
3. Cortex: NPS improved to 42 (up from 38), top pain point: checkout process friction
4. Intelligence box appears with analysis options
5. Cortex: recommends NPS breakdown, theme analysis, journey mapping, Q2 action plan
6. Check 4 actions: NPS segment breakdown, deep-dive theme analysis, journey pain point mapping, create Q2 action plan
7. Click "Execute selected"
8. Cortex: analysis complete — NPS breakdown, 5 themes analyzed, journey map created, Q2 action plan drafted
9. Navigate to Unified Analytics — NPS segment breakdown and customer journey pain point map
10. Cortex: data overview and journey pain points
11. Navigate to VoC Survey Detail — promoter segment grew 8%, executive deck ready for board meeting
12. Cortex: deck ready for board presentation
