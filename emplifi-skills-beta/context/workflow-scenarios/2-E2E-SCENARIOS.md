---
source: Confluence export 2026-02-19
translated: yes
original_language: Czech
last_updated: 2026-02-19
coverage: [E2E|workflows|Community|Care|UGC|UA|Fuel]
---

# End-to-End Scenarios Across the Platform

> Concrete workflows showing data and action flow across multiple Emplifi modules

---

## 8.1 Scenario 1: Negative Tweet → Community → Care → VoC → UA → Fuel

**Goal:**  
Show how a single negative social mention becomes a case, is handled, measured, and used in analytics and strategy.

### Step 1 – Negative mention appears (Listening / Social)
- Customer posts a public tweet complaining about a product issue (e.g. broken order)
- Social data is ingested into the platform

**Modules:** Social & Web Listening, Community Management (social messages feed)

### Step 2 – Processing in Community (Unified Inbox)
1. Tweet appears in **Community Unified Inbox**
2. Automatic rules (PIE) or AI:
   - detect **negative sentiment**
   - identify it as "complaint / issue"
3. Community rule:
   - auto-tag: `complaint`, `product_issue`
   - assign to queue "High priority social complaints"
   - optionally send auto-reply: "We're sorry, forwarding to our care team…"

**Modules:** Community Management, PIE / Flow Automations, AI (sentiment, topic classification)

### Step 3 – Escalation to Care (Service OS / Case)
1. Agent or rule triggers **escalation to Care**:
   - creates **case** in Service OS (Care)
   - case contains: original tweet, tags (complaint, product_issue), user identity (if available), interaction history
2. Case is **auto-routed** to correct queue (e.g. "Social complaints – EU") via PIE: region, language, topic

**Modules:** Community → Care integration, Service OS / Care (Case Management, Queues & Routing)

### Step 4 – Resolving case in Care (Agent Desktop)
1. Care agent sees new case on **Agent Desktop**: tweet context, customer history, suggested **Knowledge Base** articles and AI reply
2. Agent contacts customer: reply on tweet, or move to DM/email/phone
3. After resolution: case closed (Resolved), topic kept (e.g. `delivery_delay`), metrics recorded

**Modules:** Care (Agent Desktop, Knowledge Base, AI Agent Assist)

### Step 5 – VoC follow-up (Voice of Customer)
1. After case closure, **VoC survey** is triggered (rule or manual):
   - CSAT: "Were you satisfied with how your issue was resolved?"
   - NPS (optional)
2. Customer responds: e.g. CSAT = 4/5, text comment ("Delivery took long, but support was great.")
3. VoC stores: CSAT + comment, link to case and channel (Twitter)

**Modules:** VoC, Service OS (case ↔ survey link)

### Step 6 – UA reporting (Care & VoC dashboards)
1. UA shows: 1 new case in `delivery_issue`, channel `Social`; resolution time; SLA adherence; new CSAT datapoint
2. **Care & Service Performance dashboard** (see 1-UA-DASHBOARDS.md § 7.2) reflects: volume by topic, CSAT by channel/topic

**Modules:** UA, Care/Service OS connector, VoC connector

### Step 7 – Fuel & strategic recommendations
1. **Fuel** analyzes cumulative data: rising `delivery_issue` cases, falling CSAT in "EU customers", VoC comments often mention "shipping delays"
2. Fuel AI Copilot suggests:
   - tactic: "Launch project to shorten delivery times with logistics"
   - monitoring: "Create dedicated dashboard for `delivery_issue` in UA"

**Modules:** Fuel, UA, VoC, Care

---

## 8.2 Scenario 2: UGC → Web Experience → Conversions → UA → Content Strategy

**Goal:**  
Show the path from UGC collection, display on web, to UA evaluation and content strategy.

### Step 1 – UGC collection (social / upload)
- Customers share photos/videos with product on Instagram (hashtag, mentions)
- Some upload via dedicated UGC landing page
- Emplifi UGC module ingests this content

**Modules:** UGC, Social API integrations

### Step 2 – Curation and rights management
1. UGC team curates: filters brand-safe, quality content
2. Rights: system sends consent requests; after "rights approved", posts are marked usable

**Modules:** UGC (curation, rights management), PIE/automations (where applicable)

### Step 3 – Product mapping
- Each UGC asset is mapped to products: SKU, category, collection
- Stored in Content OS / UGC data model

**Modules:** UGC, Content OS (product metadata)

### Step 4 – Display on web (Experience Layer)
1. Product pages show UGC galleries via **Experience Layer** widgets
2. Customer sees real photos/videos from other customers
3. UGC widget tracks: views, interactions (clicks, expand), conversions (add-to-cart, purchase) via event tracking / e-commerce integration

**Modules:** UGC widget, Experience Layer & Unified CTA, Commerce tracking

### Step 5 – Reporting in UA (Commerce & UGC dashboards)
- UA ingests: UGC impressions, interactions, conversion events tied to UGC widget, revenue (if tracked)
- Dashboard "UGC & Commerce Performance":
  - Top products by UGC-driven revenue
  - Conversion ratio of pages with UGC vs without UGC
  - Performance by UGC type (video vs photo)

**Modules:** UA, UGC (data feed), Commerce integration

### Step 6 – Content & Commerce strategy (Fuel / Marketing)
1. Marketing/E-commerce sees: which products benefit most from UGC, which UGC type drives best conversion
2. Fuel / AI Copilot may suggest:
   - increase focus on UGC for specific categories
   - run campaigns to collect more UGC for low-coverage products
   - cross-promote top UGC on social profiles

**Modules:** UA, Fuel, UGC, Content OS, Social Publishing

---

## 8.3 Scenario 3: Marketing Campaign → Publishing → UA → AI Copilot → Optimization

**Goal:**  
Show how a marketing team runs a campaign and optimizes it based on UA reports and AI recommendations.

### Step 1 – Campaign planning
- Marketing team in Publishing/Planner: defines campaign (name, goals, period, channels), creates and schedules posts across networks

**Modules:** Content Publishing & Planner, Content OS, Fuel (optional: campaign goals)

### Step 2 – Execution and launch
- Posts publish per calendar
- Publishing generates social metrics (reach, engagement, clicks)

**Modules:** Publishing, Social integrations

### Step 3 – Data collection and UA reporting
- UA collects data; campaign dashboard shows: post performance, channel performance, KPI vs goals (leads, revenue, traffic)

**Modules:** UA (campaign dashboard), Social/ads data feed

### Step 4 – AI Copilot analysis
1. Marketing Manager asks AI Copilot (in UA or Fuel): "Why does campaign X not reach the IG goal?"
2. Copilot: loads UA data, compares channels/ads sets/creatives, answers:
   - "On IG, videos have 40 % higher engagement than statics, but video budget is only 20 %…"
   - "In weeks 2–3 there was a sharp drop in IG reach due to…"

**Modules:** AI Copilot, UA, Fuel (if linked to goals)

### Step 5 – Campaign optimization
- Copilot suggests concrete actions: shift budget from low- to high-performing creatives, change audience or timing
- Team applies changes in: Ads manager (paid), Publishing (post times, content type), or via integrations / Flow Automations

**Modules:** Publishing, UA, Fuel / Copilot, PIE (automatization)
