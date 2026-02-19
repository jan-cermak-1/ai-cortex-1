---
source: Confluence export 2026-02-19
translated: yes
original_language: Czech
last_updated: 2026-02-19
coverage: [UA|dashboards|Social|Care]
---

# UA Dashboard Blueprints

> Concrete structures for Unified Analytics dashboards (widgets, metrics, layout)

---

## 7.1 UA Dashboard: Social Performance Overview (Marketing)

**Purpose:**  
Give the marketing team a quick overview of organic and paid content performance across social networks for a selected period.

**Typical users:**
- Social Media Manager
- Marketing Manager
- Content Lead

### Main sections and widgets

#### 1. Top-level KPI panel (cards)
- Number of published posts (organic / paid)
- Total reach / impressions
- Total engagement (likes, comments, shares, clicks)
- Engagement rate (%)
- Click-through rate (CTR)
- Conversions (if tracked – e.g. web conversions)
- Spend (for paid campaigns)
- Cost per Result (CPR / CPC / CPM – by campaign type)

#### 2. Trends over time (time series)
- *Engagement over time* chart (daily / weekly)
- *Impressions over time* chart
- *Spend vs. Results* chart (dual-axis: spend vs conversions)

#### 3. Performance by Channel
- Bar chart: Engagement by network (FB, IG, TikTok, X/Twitter, LinkedIn, …)
- Pie/stacked bar: Share of spend by network
- Table: KPIs by channel (impressions, clicks, CTR, conversions, cost per conversion)

#### 4. Top Content (table / tile grid)
- Table of top-performing posts:
  - Creative preview
  - Title / description
  - Channel
  - Engagement, ER
  - Clicks, CTR
  - Conversions (if available)
- Filter by content type (video, photo, carousel, story, reel…)

#### 5. Campaign Performance (if campaigns are defined)
- Table: Campaigns vs KPI (reach, engagement, conversions, ROI)
- Chart: Top 5 campaigns by ROI or conversions

#### 6. Audience Insights (optional)
- Demographics (age/gender) – aggregated
- Geography (country/region)

#### 7. AI-powered Insights (text widget)
- Auto-generated summary:
  - "Over the last 30 days engagement increased by X %, largest growth on TikTok…"
  - "Video posts have Y % higher CTR than image posts…"

### Data sources
- Social API data (metrics per post, per campaign, per channel)
- Campaign metadata from Publishing/Ads
- UA aggregation

---

## 7.2 UA Dashboard: Care & Service Performance (CX)

**Purpose:**  
Give CX/Care managers an overview of customer care performance: volume, SLA, satisfaction, team and agent performance.

**Typical users:**
- Head of Customer Care / CX Director
- Care Manager
- Team Leads

### Main sections and widgets

#### 1. Top-level KPI panel (cards)
- Number of new cases (for period)
- Number of resolved cases
- Open cases (current backlog)
- Average time to first response
- Average time to resolution
- SLA adherence (% cases resolved within SLA)
- Average CSAT (Customer Satisfaction)
- Average NPS (if relevant)

#### 2. Case Volume & Resolution Trends
- Time series: New vs Resolved cases over time (daily/weekly)
- Time series: Average resolution time over time
- Time series: SLA adherence over time

#### 3. Channel Breakdown
- Bar/stacked bar: Cases by channel
  - Social (Facebook, Instagram, etc.)
  - Web chat / chatbot
  - Email
  - Reviews / Ratings
  - Other channels (per integrations)
- KPI table: per channel (volume, resolution time, CSAT)

#### 4. Topics / Categories
- Bar chart / treemap: Cases by topic (billing, delivery, product issue, complaint…)
- Table: Top topics by volume + average CSAT per topic

#### 5. Team & Agent Performance
- Table: Teams
  - Number of resolved cases
  - Average resolution time
  - SLA adherence
  - CSAT
- Table: Agents (top/bottom performers by volume and CSAT)

#### 6. VoC & Feedback Overview (integrated with VoC)
- Avg CSAT & NPS by period
- Breakdown: CSAT/NPS by channel / topic / region
- Word cloud or topics based on text comments (if UI supports visualization)

#### 7. AI-powered Insights (text widget)
- Summary examples:
  - "Over the last 2 weeks, cases in the `delivery` category increased by X %…"
  - "Team A has Y % shorter resolution time than average, especially in `billing` topic…"
  - "CSAT in `reviews` channel dropped by Z p.p., mainly due to `product quality` topic…"

### Data sources
- Service OS / Care: case data, topics, SLA, agent/team info
- VoC: survey results (CSAT, NPS, open comments)
- Community: source of some cases (channel mapping)
