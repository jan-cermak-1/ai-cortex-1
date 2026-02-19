---
source: Confluence export 2026-02-19
translated: yes
original_language: Czech
last_updated: 2026-02-19
coverage: [Listening|Social|monitoring|queries]
---

# Listening – Query & Reporting Mini-Scenarios

> Brand monitoring and competitor tracking examples

---

## 9.1 Scenario: Monitoring Own Brand vs Competitor

**Task:**  
"I want to monitor how BrandX vs BrandY are mentioned in Europe."

### Listening queries

#### 1. BrandX query – AI input

> "Monitor all mentions of our brand BrandX on social networks and the web in Europe (EU), including common typos and abbreviations."

**Example boolean query:**

```text
("BrandX" OR "Brand X" OR "#BrandX" OR "BrendX"~1)
AND lang:(en OR de OR fr OR es OR it OR cs OR pl)
AND geo:(EU)
```

**Notes:**
- `~1` = fuzzy match for typos (e.g. "BrendX")
- `lang:` and `geo:` filters depend on Listening platform capabilities

#### 2. BrandY query (competitor)

Similar structure for competitor BrandY:

```text
("BrandY" OR "Brand Y" OR "#BrandY")
AND lang:(en OR de OR fr OR es OR it OR cs OR pl)
AND geo:(EU)
```

### Reporting

- Create separate dashboards or feeds for BrandX and BrandY
- Compare: volume, sentiment, share of voice, top topics, trending topics
- Use UA for aggregated Listening metrics if integrated

### Modules involved

- **Social Listening**
- **Web Listening** (if enabled)
- **UA** (Listening metrics in UA)
