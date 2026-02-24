# Demo Flows — Cortex AI

Živá dokumentace všech demo flows. Aktualizovat při každé změně `flows/*.js`.

---

## HUMAN CURATED

### Labubu Trend
**Persona:** Social Media Manager  
**Scénář:** Detekce trendu a vytvoření kampaně

1. Navigace na Command Center
2. Zobrazí se intelligence box — Cortex upozorní, že Labubu je trending a konkurenti publikují obsah
3. Kurzor se přesune na panel Cortex
4. Klik na "More ideas" — Cortex nabídne rozšíření akcí
5. Zaškrtnutí 3 akcí: vytvoření kampaně + kolekce, listening query, analytický board
6. Klik na "Execute selected" — Cortex spustí vykonání
7. Otevření výsledku: Collection "Labubu" (Content)
8. Otevření výsledku: Publisher campaign "Labubu" (Publisher)
9. Otevření výsledku: Listening query "Labubu" (Settings)
10. Otevření výsledku: Analytics custom board "Labubu" (Unified Analytics)
11. Smazání výsledku: Analytics board
12. Smazání výsledku: Listening query
13. Smazání výsledku: Publisher campaign
14. Smazání výsledku: Collection

---

### Bulk User Import
**Persona:** Team Admin  
**Scénář:** Hromadný import uživatelů z Excel souboru  
**Stav:** Playback zatím není implementován — kroky jsou připraveny pro fázi 2

1. Navigace na Command Center
2. Cortex: detekoval Excel soubor `users-import-2026.xlsx` a analyzuje ho
3. Cortex: nalezeno 47 platných záznamů (Name, Email, Department, Role)
4. Zobrazí se intelligence box s možnostmi importu
5. Cortex: doporučí import, vytvoření týmů, odeslání pozvánek a přiřazení rolí
6. Zaškrtnutí 4 akcí: import uživatelů, vytvoření týmů, odeslání pozvánek, přiřazení rolí
7. Klik na "Execute selected"
8. Cortex: import dokončen — 47 uživatelů, 6 týmů, pozvánky odeslány
9. Navigace na Settings / Users — zobrazení nově vytvořených účtů

---

## AI GENERATED

### Crisis Response
**Persona:** Brand Manager  
**Scénář:** Reakce na náhlý nárůst negativního sentimentu u produktu EcoBottle Pro

1. Navigace na Command Center
2. Cortex URGENT ALERT: 340% nárůst negativních zmínek za poslední 2 hodiny
3. Cortex: primární téma — stížnosti na kvalitu produktu EcoBottle Pro
4. Zobrazí se intelligence box s doporučenými akcemi
5. Cortex: doporučí pozastavit reklamy, napsat reakci, eskalovat do Care, nastavit monitoring
6. Zaškrtnutí 4 akcí: pauza promo obsahu, draft krizové odpovědi, eskalace do Care, monitorovací board
7. Klik na "Execute selected"
8. Cortex: krizový protokol aktivován — 12 postů pozastaveno, 28 zmínek eskalováno
9. Navigace na Publisher Calendar — zobrazení pozastavených postů
10. Cortex: posty jsou na hold do vyřešení krize
11. Navigace na Care Inbox — Care tým vyřizuje eskalované zmínky
12. Cortex: Care tým aktivní, krizový monitoring board spuštěn
13. Navigace na Unified Analytics — real-time krizový monitoring board
14. Cortex: data ukazují stabilizaci sentimentu

---

### Review Automation
**Persona:** eCommerce Manager  
**Scénář:** Automatizace odpovědí na 156 nevyřízených recenzí produktů

1. Navigace na Command Center
2. Cortex: detekováno 156 nevyřízených recenzí v katalogu produktů
3. Cortex: rozpad — 89 pozitivních (4–5 hvězd), 42 neutrálních, 25 negativních
4. Zobrazí se intelligence box s možnostmi automatizace
5. Cortex: doporučí auto-odpovědi na pozitivní, drafty pro negativní, flagování refundů, tagování
6. Zaškrtnutí 4 akcí: auto-odpovědi na pozitivní, drafty pro negativní, flagování, tagování
7. Klik na "Execute selected"
8. Cortex: automatizace dokončena — 89 odpovědí, 25 draftů, 8 eskalací
9. Navigace na Ratings & Reviews — přehled draftů negativních odpovědí
10. Cortex: drafty připraveny ke schválení, všechny recenze otagovány
11. Navigace na Unified Analytics — přehled sentimentu dle kategorií
12. Cortex: response rate zvýšen na 97 %

---

### Care Team Onboarding
**Persona:** Care Supervisor  
**Scénář:** Onboarding 8 nových Care agentů z CSV rosteru

1. Navigace na Command Center
2. Cortex: zpracoval soubor `care-team-roster.csv`
3. Cortex: nalezeno 8 nových agentů s přiřazením kanálů a dovedností
4. Zobrazí se intelligence box s kroky onboardingu
5. Cortex: doporučí vytvoření účtů, přiřazení front, nastavení směn, aktivaci maker
6. Zaškrtnutí 4 akcí: vytvoření účtů, přiřazení front, nastavení směn, aktivace maker
7. Klik na "Execute selected"
8. Cortex: onboarding dokončen — 8 účtů, fronty přiřazeny, směny nastaveny, 42 maker aktivováno
9. Navigace na Settings / Users — přehled nově vytvořených agentských účtů
10. Cortex: agenti mají přístup do inboxu
11. Navigace na Care Inbox — agenti jsou připraveni vyřizovat případy
12. Cortex: kapacita týmu vzrostla o 40 %

---

### Content Optimizer
**Persona:** Content Lead  
**Scénář:** AI optimalizace 23 naplánovaných postů pro příští týden

1. Navigace na Command Center
2. Cortex: analyzoval 23 naplánovaných postů pro příští týden
3. Cortex: nalezeny příležitosti k optimalizaci — predikce +32 % engagement
4. Zobrazí se intelligence box s návrhy optimalizace
5. Cortex: doporučí přeplánování časů, vylepšení copywritingu, aktualizaci hashtagů, vizuální návrhy
6. Zaškrtnutí 4 akcí: optimální časy, vylepšení textů, aktualizace hashtagů, vizuální doporučení
7. Klik na "Execute selected"
8. Cortex: optimalizace hotova — 8 postů přeplánováno, 23 textů vylepšeno, 5 vizuálních návrhů
9. Navigace na Publisher Calendar — optimalizovaný obsah kalendáře (pondělí 9:30 peak)
10. Cortex: posty přeplánované na nejlepší časy
11. Navigace na Content Collection — vizuální doporučení ke schválení
12. Cortex: návrhy připraveny

---

### Competitor Alert
**Persona:** Brand Manager  
**Scénář:** Reakce na spuštění kampaně #SummerSavings od CompetitorX

1. Navigace na Command Center
2. Cortex ALERT: CompetitorX spustil velkou kampaň cílící na stejný segment
3. Cortex: kampaň #SummerSavings generuje +45 % engagement — doporučena counter-strategie
4. Zobrazí se intelligence box s doporučenými akcemi
5. Cortex: doporučí analýzu, counter-content, boost budget, retargeting
6. Zaškrtnutí 4 akcí: analýza kampaně, counter-content, doporučení boostů, retargeting publika
7. Klik na "Execute selected"
8. Cortex: odpověď aktivována — analýza hotova, 6 counter-content nápadů, $2 500 boost doporučen
9. Navigace na Unified Analytics — detailní analýza kampaně a share of voice
10. Cortex: přehled srovnání share of voice
11. Navigace na Publisher Calendar — boost doporučení a retargeting publika 125K uživatelů
12. Cortex: retargeting audience vytvořena

---

### Bot Tuning
**Persona:** Bot Manager  
**Scénář:** Zlepšení výkonu chatbota — containment rate z 73 % na 80 %

1. Navigace na Command Center
2. Cortex: analyzoval výkon chatbota — 2 847 konverzací tento týden
3. Cortex: containment rate 73 % (cíl 80 %) — identifikovány příležitosti ke zlepšení o +8 %
4. Zobrazí se intelligence box s doporučeními
5. Cortex: doporučí vylepšení intentů, přidání odpovědí, aktualizaci fallbacku, trénink entit
6. Zaškrtnutí 4 akcí: vylepšení intentů, nové odpovědi, aktualizace fallbacku, trénink entit
7. Klik na "Execute selected"
8. Cortex: optimalizace hotova — 5 intentů, 12 odpovědí, fallback, entity model
9. Navigace na Bot Overview — stav po optimalizaci
10. Cortex: top intent "order_status" má nově 94 % přesnost, bot je live s novými modely
11. Cortex: očekávaný nárůst containment rate o +8 %, monitoring spuštěn

---

### Listening Report
**Persona:** PR Manager  
**Scénář:** Generování týdenního brand listening reportu pro stakeholdery

1. Navigace na Command Center
2. Cortex: zkompiloval týdenní data — 12 456 zmínek napříč kanály
3. Cortex: pozitivní sentiment +12 % vs minulý týden — připraven report pro stakeholdery
4. Zobrazí se intelligence box s obsahem reportu
5. Cortex: doporučí executive summary, sentiment vizualizaci, breakdown témat, share of voice
6. Zaškrtnutí 4 akcí: executive summary, sentiment graf, téma breakdown, share of voice
7. Klik na "Execute selected"
8. Cortex: report vygenerován — summary, sentiment trendy, témata, SOV 34 %
9. Navigace na Unified Analytics — weekly listening report s vizualizacemi
10. Cortex: přehled dat s grafy
11. Cortex: share of voice vzrostl na 34 % (z 31 % minulý měsíc), PDF report připraven

---

### VoC Insights
**Persona:** CX Director  
**Scénář:** Analýza Voice of Customer dat za Q1 pro boardovou prezentaci

1. Navigace na Command Center
2. Cortex: analyzoval Q1 VoC data — 4 287 odpovědí na dotazník, 18 000+ feedback touchpointů
3. Cortex: NPS vzrostl na 42 (z 38), top pain point: checkout process friction
4. Zobrazí se intelligence box s analýzami
5. Cortex: doporučí NPS breakdown, analýzu témat, journey mapping, akční plán pro Q2
6. Zaškrtnutí 4 akcí: NPS breakdown, analýza témat, journey mapping, akční plán
7. Klik na "Execute selected"
8. Cortex: analýza hotova — NPS breakdown, 5 témat, journey mapa, Q2 akční plán
9. Navigace na Unified Analytics — NPS segment breakdown a customer journey mapa
10. Cortex: přehled dat a journey pain points
11. Navigace na VoC Survey Detail — promoter segment vzrostl o 8 %, executive deck připraven
12. Cortex: deck připraven pro boardové setkání
