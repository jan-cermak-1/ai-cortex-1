# Emplifi Platform – Přehled modulů a jejich funkce (rozšířená verze)

## 0. Účel dokumentu

Tento dokument slouží jako **znalostní báze pro AI a interní týmy**.  
Cílem je:

- poskytnout **ucelený přehled Emplifi platformy**,
- popsat **jednotlivé moduly** (co dělají, pro koho jsou, jaké problémy řeší),
- vysvětlit **vztahy mezi moduly** a nadstavbové **AI schopnosti**,
- nabídnout **konkrétnější rozpad** některých modulů (Care/Agent, Unified Analytics, Community atd.) na pod‑moduly a typické reporty.

Struktura:

- nejdříve **high‑level rozdělení** (platforma, marketing, care, commerce),
- poté **modul po modulu** podle stejné šablony:
  - Definice  
  - Oblast / cloud  
  - Uživatelé / persony  
  - Use‑casy  
  - Klíčové funkce  
  - Datové zdroje a výstupy  
  - Napojení na ostatní moduly  
  - Role AI  
  - Technické / architektonické poznámky  

Interní kontext a roadmapy:

- Emplifi 2023 Roadmap  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
- Emplifi Releases and Roadmap – Official  
  https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk
- All Hands 2024 – Product & Design (Content OS, Service OS, Fuel)  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk
- Social Marketing Cloud – Functional Requirements (RFT)  
  https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements
- AI Integration Roadmap  
  https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
- 2025 Product Priorities (AI features)  
  https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

---

## 1. Emplifi jako jednotná platforma

Emplifi je **sjednocená platforma pro customer engagement a customer experience**, která kombinuje:

- **Marketing**
  - Social media management, publishing, analytics
  - Social & web listening
  - Influencer & creator management
  - Content & campaign orchestration
- **Care / Service**
  - Digital care (cases, omnichannel)
  - Chatbot & web chat
  - Knowledge base
  - Voice of Customer (VoC)
  - Agent analytics a QA
- **Commerce**
  - Live Advisor / Live Commerce
  - UGC (User Generated Content)
  - Ratings & Reviews
  - Web Experience layer (Unified CTA)
- **Platform & Shared Capabilities**
  - Unified Analytics
  - Content OS
  - Service OS
  - Platform Intelligence Engine (PIE) & Flow Automations
  - Emplifi Teams & Permissions
  - Trust Layer
  - Fuel & AI Copiloti

---

## 2. Platform & Shared Capabilities

### 2.1 Unified Analytics (UA)

#### Definice

Unified Analytics je **centrální analytický modul** Emplifi platformy. Sjednocuje metriky a reporty napříč marketingem, commerce a care a slouží jako hlavní reportingové rozhraní pro zákazníky i interní týmy.

- Pitch a produktová vize:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

#### Oblast / cloud

Analytics & Intelligence / Platform

#### Hlavní uživatelé / persony

- Marketing Manager, Social Media Manager
- CX / Care Manager
- E‑commerce Manager
- Data / Business Analyst
- C‑level a leadership týmy

#### Hlavní use‑casy

- Mít **jednotný pohled** na výkon marketingu, commerce a care v jednom nástroji.
- Tvořit **dashboardy** a reporty přizpůsobené různým rolím (C‑level, region, produkt, tým).
- Analyzovat **kampaně, kanály, obsah, care výkonnost** a commerce výsledky v jednom prostředí.
- Identifikovat **trendy a anomálie** v datech (růst/pokles, outliery).

#### Klíčové funkce a pod‑moduly UA

1. **Cross‑channel Dashboards**
   - Přehled výkonnosti napříč kanály (social, paid, care, commerce).
   - Filtry podle času, kanálu, účtu, týmu, kampaně, regionu.

2. **Social & Content Performance Reports**
   - Výkon organického a placeného obsahu (reach, engagement, CTR, conversions).
   - Analýza po typech postů, kampaních, formátech, kreativách.

3. **Care & Service Reports**
   - SLA plnění, počet cases, průměrná doba vyřešení, backlog.
   - CSAT/NPS navázané na case, agenty, témata.

4. **Commerce & Experience Reports**
   - Výkon Live Advisor / Live Stream (viewers, engagement, conversion rate, revenue).
   - Výkon UGC a reviews na webu (impact na konverze).

5. **Customer Journey & Funnel Views**
   - Reporty zaměřené na cestu zákazníka (from impression → engagement → conversion → care).

6. **Custom Dashboards & Widgets**
   - Vytváření vlastních dashboardů z předpřipravených widgetů.
   - Sdílení dashboardů a možnost embedů (kde je podporováno).

7. **AI‑powered Widget Insights**
   - AI shrnutí trendů a doporučení v rámci widgetů / dashboardů (viz Releases deck:  
     https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk)

#### Datové zdroje a výstupy

- **Vstupy:**
  - Social a paid data z připojených sítí.
  - Listening data (volume, sentiment, topics).
  - Care/Service OS data (cases, CSAT, NPS, AHT).
  - Commerce data (Live Commerce, UGC, Ratings & Reviews).
  - VoC data (surveys, feedback).
- **Výstupy:**
  - Interaktivní dashboardy v UI UA.
  - Exporty (CSV, PDF – dle aktuální podpory).
  - Datové podklady pro AI (Fuel, Copiloti).

#### Napojení na ostatní moduly

- UA **konzumuje data** ze všech produktových modulů.
- UA poskytuje **agregované informace** pro:
  - Fuel (AI taktické návrhy),
  - AI Copilot rozhraní v jednotlivých modulech (shrnutí dat),
  - Experience Layer a Commerce (widget insights).

#### Role AI

- AI generuje shrnutí a doporučení v kontextu dashboardů a widgetů.
- UA slouží jako datová základna pro AI‑driven rozhodovací logiku (Fuel, Flow Automations).

#### Technické / architektonické poznámky

- UA je vrstvená nad sjednoceným datovým modelem platformy.
- Přístup přes Suite UI a sdílenou API vrstvu (`api.emplifi.io` – konceptuálně).
- Další rozpracování je v UA pitch decku:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

---

### 2.2 Platform Intelligence Engine (PIE) & Flow Automations

*(viz předchozí verze, doplněno pár příkladů pravidel)*

#### Definice

PIE + Flow Automations = **orchestrace a automatizace** napříč platformou. Umožňuje definovat pravidla typu:

- „Když nastane událost X, proveď akci Y za podmínky Z.“

#### Příklady pravidel

- Pokud **Listening** detekuje nárůst negativních zmínek → vytvoř alert + Care case.
- Pokud je **case v Care** nevyřešený déle než SLA → zvýšit prioritu + upozornit supervisora.
- Pokud **UGC widget** mají nízký engagement → navrhnout nové assety přes Fuel.

Vše ostatní (oblasti, persony, funkce, napojení, AI) – viz předchozí verze v sekci 2.2.

---

### 2.3 Content OS

*(bez větších změn – viz předchozí verze)*

---

### 2.4 Service OS

*(bez větších změn – viz předchozí verze, klíčové je, že Service OS sjednocuje Care, Chatbot, KB, VoC, QA/Analytics)*

---

### 2.5 Emplifi Teams & Permissions

*(bez větších změn – governance vrstva)*

---

### 2.6 Trust Layer

*(bez větších změn – AI safety & governance)*

---

### 2.7 Fuel & Fuel AI Copilot

*(bez větších změn – AI „brains“ nad daty; viz All Hands 2024 a AI roadmap)*

---

## 3. Social Marketing & Analytics

### 3.1 Content Publishing & Planner (Publisher, Calendar)

*(rozšíření o pod‑moduly)*

#### Pod‑moduly

- **Campaign Management**
  - Evidence kampaní, jejich cílů a přiřazeného obsahu.
- **Calendar View**
  - Měsíční/týdenní/daily pohled, možnost drag & drop.
- **Post Composer**
  - Vytváření příspěvků, variace pro různé sítě.
- **Approval Workflow**
  - Routing postů ke schválení (legal/compliance, brand).
- **Content Performance Links**
  - Prokliky z kalendáře do UA reportů konkrétních postů nebo kampaní.

Vše ostatní (definice, persony, use‑casy, data, AI) – viz sekce 3.1 v předchozí verzi.

---

### 3.2 Social & Web Listening

*(bez zásadních změn, doplnění o AI Query Copilot)*

- **AI Query Copilot** – asistent, který převádí dotazy v přirozeném jazyce na komplexní boolean dotazy, navrhuje relevantní zdroje a filtry (viz příslušné LSN‑ epic v Jire, např. LSN‑2146:  
  https://emplifi.atlassian.net/browse/LSN-2146)

---

### 3.3 Influencers & Creators

*(beze změn)*

---

## 4. Community & Care

### 4.1 Community Management (detailnější rozpad)

#### Definice

Community Management: **jednotný inbox pro sociální a další digitální konverzace**, s podporou workflow, routing, tagování a spolupráce.

#### Oblast / cloud

Community Management & Digital Care

#### Pod‑moduly

1. **Unified Inbox**
   - Zobrazuje příspěvky a zprávy z připojených sociálních sítí a jiných kanálů.
   - Podpora různých typů itemů: komentáře, soukromé zprávy, zprávy z review platforem atd.

2. **Assignment & Routing**
   - Přiřazování zpráv jednotlivým agentům nebo týmům (Team‑based governance).
   - Možnost automatického routingu (podle pravidel z PIE).

3. **Tagging & Categorization**
   - Ruční a automatické tagování zpráv (téma, produkt, sentiment).
   - Využití pro reporting a VoC.

4. **Saved Replies & Templates**
   - Předpřipravené odpovědi pro časté situace.
   - Využití jako podklad pro agent‑assist AI.

5. **Internal Collaboration**
   - Interní poznámky, @mentions, eskalace.
   - Předání do **Care** jako case (vyšší úroveň řešení).

6. **Moderation Rules**
   - Skrytí spamu, filtrování obsahu, auto‑odpovědi.

#### Hlavní use‑casy

- Z jednoho místa spravovat **veškeré komentáře a zprávy**.
- Zajistit, že nic „nepropadne“ – všechny dotazy mají vlastníka.
- Rychle reagovat na krize nebo virální témata.

#### Datové zdroje a výstupy

- Vstupy: proud sociálních interakcí (komentáře, zprávy, reviews).
- Výstupy: zpracované konverzace, tagy, eskalované cases v Care, reporty (přes UA).

#### Role AI

- AI štítky (spam, téma, sentiment).
- AI návrhy odpovědí na základě historie a KB.
- AI detekce konverzací vhodných k eskalaci do Care.

Vše ostatní – viz starší verze (sekce 3.2 Community Management).

---

### 4.2 Care (Digital Care / Agent) – detailní rozpad

#### Definice

Care je **core modul Service OS** pro správu zákaznických případů (cases). Řeší omnichannel care, routing, SLA, agent desktop a reporting.

#### Oblast / cloud

Service OS / Care

#### Hlavní uživatelé / persony

- Care Agent / Support Agent  
- Team Lead / Supervisor  
- CX / Care Manager  
- Quality / Training Manager  

#### Pod‑moduly

1. **Case Management**
   - Vytvoření case (ručně nebo automaticky z Community/Chatbotu/Webu).
   - Základní atributy: téma, priorita, SLA, stav, vlastník, zákazník.
   - Historie aktivit a konverzací.

2. **Queues & Routing**
   - Fronty podle tématu, kanálu, jazyka, regionu atd.
   - Auto‑routing podle pravidel (skills‑based, priority‑based).
   - Převody mezi frontami (re‑routing, eskalace).

3. **SLA & Workload Management**
   - Konfigurace SLA pravidel (odpověď/řešení).
   - Sledování SLA plnění v reálném čase.
   - Zobrazení workloadu agentů (kolik mají otevřených cases).

4. **Omnichannel Management**
   - Podpora vícero kanálů v jednom case:
     - Social zprávy (přes Community eskalaci),
     - Web chat / chatbot přepnutí na live agenta,
     - Email (přes integrace),
     - Formuláře / VoC feedback.
   - Všechny interakce se ukládají pod jeden case.

5. **Agent Desktop**
   - Jednotné rozhraní pro agenta:
     - Kontext zákazníka (historie interakcí, profil),
     - Kontext case (předchozí zprávy, KB články),
     - Actions (odpovědět, přeposlat, eskalovat, uzavřít).
   - Napojení na Knowledge Base a AI suggestion engine.

6. **Quality & Coaching**
   - Možnost hodnotit kvalitu vyřešených cases (interní QA).
   - Výstupy pro školení a coaching agentů.

7. **Agent & Team Analytics**
   - Přehled o výkonnosti agentů a týmů:
     - počet vyřešených cases,
     - průměrný čas,
     - adherence k SLA,
     - CSAT.

#### Hlavní use‑casy

- Uspořádat a vyřešit **zákaznické požadavky** napříč kanály.
- Udržovat přehled o **SLA** a **výkonnosti agentů**.
- Zajistit konzistentní experience díky **Knowledge Base** a šablonám.

#### Datové zdroje a výstupy

- **Vstupy:**
  - Převody z Community (konverzace → case),
  - Přepnutí z Chatbotu / web chatu,
  - E‑mail/CRM integrace,
  - VoC feedback.
- **Výstupy:**
  - Uzavřené cases, jejich stavy a metriky,
  - CSAT/NPS navázané na jednotlivé cases/agentů,
  - Reporty o týmové výkonnosti (přes UA).

#### Napojení na ostatní moduly

- **Community** – hlavní zdroj cases z public kanálů.
- **Chatbot & Web Chat** – pre‑kvalifikace a následné předání agentovi.
- **Knowledge Base** – navrhované články v agent desktopu.
- **VoC** – follow‑up na negativní hodnocení nebo konkrétní feedback.
- **UA** – reporting o Care výkonu.
- **Fuel** – strategie a taktiky zlepšení péče.

#### Role AI

- **Agent Assist**:
  - AI návrhy odpovědí, shrnutí předchozí konverzace, doporučení dalšího kroku.
- **Routing**:
  - AI‑based routing case podle obsahu, jazyka, sentimentu nebo hodnoty zákazníka.
- **Quality & Coaching**:
  - Automatická analýza hovoru/chatů (kde je k dispozici) a doporučení tréninku.

#### Technické / architektonické poznámky

- Care je implementačně součástí Service OS (sdílené entity, datový model).
- V některých materiálech vystupuje jako „Service“ nebo „Agent“ (desktop).

---

### 4.3 Chatbot & Conversational (detailnější)

*(rozšíření o pod‑moduly)*

#### Pod‑moduly

1. **Bot Builder / Flow Editor**
   - UI pro definici konverzačních scénářů (trees/flows).
2. **Intent & Entity Recognition**
   - Klasifikace dotazů do intencí, extrakce entit (např. číslo objednávky).
3. **Knowledge‑based Q&A**
   - Dotazy odpovídány na základě KB (FAQ, procedurální články).
4. **Handover to Agent**
   - Mechanismus přesměrování na live agenta (Care), včetně předání kontextu.

Vše ostatní – viz předchozí verze 4.3.

---

### 4.4 Knowledge Base

*(beze změn, ale lze doplnit, že KB je klíčovým zdrojem pro generativní AI a LLM-based odpovědi)*

---

### 4.5 Voice of Customer (VoC)

*(beze změn, ale VoC data jsou důležitý vstup pro UA, Fuel a produktové rozhodování)*

---

## 5. Commerce & Live Commerce

### 5.1 Live Advisor / Live Commerce

*(viz detailní verze v předchozí odpovědi; zde se odkazuje na 2023 Roadmap pro architekturu a KPI)*

- Emplifi 2023 Roadmap – Live Advisor & Live Stream:  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

---

### 5.2 UGC (User Generated Content)

*(beze změn, jen doplnění o rights management a produktové mapování)*

#### Další detaily

- **Rights Management**
  - Sběr souhlasů (Rights approval) pro použití UGC v marketingu.
- **Product Mapping**
  - Přiřazení UGC ke konkrétním produktům (SKU, kategorie) pro zobrazení na produktových stránkách.
- **Performance Analytics**
  - Měření dopadu UGC widgetů na engagement a konverze (přes UA).

---

### 5.3 Ratings & Reviews

*(beze změn, doplnění o „review response workflow“)*

#### Review Response Workflow

- Vstup recenze → Community/Care workflow (zpracování jako message/case).
- Šablony odpovědí a schvalování (pro právně citlivé odpovědi).
- Reporty o době odpovědi a míře odpovědí na reviews.

---

### 5.4 Experience Layer & Unified CTA

*(beze změn)*

---

## 6. AI‑first nadstavby (2025–2026)

### 6.1 AI Copiloti a agenti

*(beze změn, ale rozšíření o příklady)*

#### Příklady AI Copilotů

- **Marketing Copilot**
  - Přímo v Publishing/UA: „vysvětli mi, proč kampaň X klesla o 30 %“ → AI z UA dat shrne důvody.
- **Care Copilot**
  - V Agent Desktopu: shrnutí předchozích kontaktů, návrhy odpovědí a KB článků.
- **Commerce Copilot**
  - Pro Live Advisor nebo e‑shop: návrhy personalizovaných produktů, cross‑sell.

---

## 7. Závěr a doporučení pro použití jako AI knowledge base

- **Konzistence struktury**  
  Všechny moduly jsou popsány podobným patternem, ideální pro trénování nebo system prompt.

- **Rozšiřitelnost**  
  Při přidání nového modulu (např. nový typ analytiky, nový kanál v Care) použij stejné sekce:
  - Definice  
  - Oblast / cloud  
  - Persony  
  - Use‑casy  
  - Klíčové funkce  
  - Data (vstupy/výstupy)  
  - Integrace  
  - AI role  
  - Technické poznámky  

- **Odkazy na zdroje**  
  U každého většího modulu jsou uvedeny relevantní interní zdroje (decky, RFT, roadmapy), např.:
  - UA deck:  
    https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk
  - 2023 Roadmap (Experience, Live Commerce, Service OS, Content OS):  
    https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
  - Social Marketing Cloud RFT (detailní výčet marketing funkcí):  
    https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements
  - AI integration roadmap:  
    https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
  - AI priorities 2025:  
    https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

- **Verzování a update**  
  Doporučuje se tento Markdown udržovat v repozitáři nebo jako Confluence Live doc:
  - přidávat nové sekce při rozšíření produktů,
  - označovat „legacy“ moduly / funkce,
  - udržovat odkazy na interní materiály aktuální.


# Emplifi Platform – Přehled modulů, modulů, dashboardů a end‑to‑end scénářů (rozšířená verze)

## 0. Účel dokumentu

Tento dokument slouží jako **znalostní báze pro AI a interní týmy**.  
Cílem je:

- poskytnout **ucelený přehled Emplifi platformy**,
- popsat **jednotlivé moduly** (co dělají, pro koho jsou, jaké problémy řeší),
- vysvětlit **vztahy mezi moduly** a nadstavbové **AI schopnosti**,
- doplnit **konkrétní příklady dashboardů v Unified Analytics (UA)**,
- a ukázat **end‑to‑end scénáře** napříč moduly (Community → Care → VoC → UA → Fuel…).

Struktura:

- high‑level rozdělení (platforma, marketing, care, commerce),
- modul po modulu podle šablony:
  - Definice  
  - Oblast / cloud  
  - Uživatelé / persony  
  - Use‑casy  
  - Klíčové funkce  
  - Datové zdroje a výstupy  
  - Napojení na ostatní moduly  
  - Role AI  
  - Technické / architektonické poznámky  
- konkrétní **UA dashboardy**,
- konkrétní **end‑to‑end scénáře**.

Klíčové interní zdroje (roadmapy, decky):

- Emplifi 2023 Roadmap  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
- Emplifi Releases and Roadmap – Official  
  https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk
- All Hands 2024 – Product & Design (Content OS, Service OS, Fuel)  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk
- Social Marketing Cloud – Functional Requirements (RFT)  
  https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements
- Unified Analytics pitch  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk
- AI Integration Roadmap  
  https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
- 2025 Product Priorities (AI features)  
  https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

---

## 1. Emplifi jako jednotná platforma

Emplifi je **sjednocená platforma pro customer engagement a customer experience**, která kombinuje:

- **Marketing**
  - Social media management, publishing, analytics
  - Social & web listening
  - Influencer & creator management
  - Content & campaign orchestration
- **Care / Service**
  - Digital care (cases, omnichannel)
  - Chatbot & web chat
  - Knowledge base
  - Voice of Customer (VoC)
  - Agent analytics a QA
- **Commerce**
  - Live Advisor / Live Commerce
  - UGC (User Generated Content)
  - Ratings & Reviews
  - Web Experience layer (Unified CTA)
- **Platform & Shared Capabilities**
  - Unified Analytics
  - Content OS
  - Service OS
  - Platform Intelligence Engine (PIE) & Flow Automations
  - Emplifi Teams & Permissions
  - Trust Layer
  - Fuel & AI Copiloti

---

## 2. Platform & Shared Capabilities

### 2.1 Unified Analytics (UA)

#### Definice

Unified Analytics je **centrální analytický modul** Emplifi platformy. Sjednocuje metriky a reporty napříč marketingem, commerce a care a slouží jako hlavní reportingové rozhraní pro zákazníky i interní týmy.

- Pitch a produktová vize:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

#### Oblast / cloud

Analytics & Intelligence / Platform

#### Hlavní uživatelé / persony

- Marketing Manager, Social Media Manager
- CX / Care Manager
- E‑commerce Manager
- Data / Business Analyst
- C‑level a leadership týmy

#### Hlavní use‑casy

- Mít **jednotný pohled** na výkon marketingu, commerce a care v jednom nástroji.
- Tvořit **dashboardy** a reporty přizpůsobené různým rolím (C‑level, region, produkt, tým).
- Analyzovat **kampaně, kanály, obsah, care výkonnost** a commerce výsledky v jednom prostředí.
- Identifikovat **trendy a anomálie** v datech (růst/pokles, outliery).

#### Klíčové funkce a pod‑moduly UA

1. **Cross‑channel Dashboards**
   - Přehled výkonnosti napříč kanály (social, paid, care, commerce).
   - Filtry podle času, kanálu, účtu, týmu, kampaně, regionu.

2. **Social & Content Performance Reports**
   - Výkon organického a placeného obsahu (reach, engagement, CTR, conversions).
   - Analýza po typech postů, kampaních, formátech, kreativách.

3. **Care & Service Reports**
   - SLA plnění, počet cases, průměrná doba vyřešení, backlog.
   - CSAT/NPS navázané na case, agenty, témata.

4. **Commerce & Experience Reports**
   - Výkon Live Advisor / Live Stream (viewers, engagement, conversion rate, revenue).
   - Výkon UGC a reviews na webu (impact na konverze).

5. **Customer Journey & Funnel Views**
   - Reporty zaměřené na cestu zákazníka (from impression → engagement → conversion → care).

6. **Custom Dashboards & Widgets**
   - Vytváření vlastních dashboardů z předpřipravených widgetů.
   - Sdílení dashboardů a možnost embedů (kde je podporováno).

7. **AI‑powered Widget Insights**
   - AI shrnutí trendů a doporučení v rámci widgetů / dashboardů (viz Releases deck:  
     https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk)

#### Datové zdroje a výstupy

- **Vstupy:**
  - Social a paid data z připojených sítí.
  - Listening data (volume, sentiment, topics).
  - Care/Service OS data (cases, CSAT, NPS, AHT).
  - Commerce data (Live Commerce, UGC, Ratings & Reviews).
  - VoC data (surveys, feedback).
- **Výstupy:**
  - Interaktivní dashboardy v UI UA.
  - Exporty (CSV, PDF – dle podpory).
  - Datové podklady pro AI (Fuel, Copiloti).

#### Napojení na ostatní moduly

- UA **konzumuje data** ze všech produktových modulů.
- UA poskytuje **agregované informace** pro:
  - Fuel (AI taktické návrhy),
  - AI Copilot rozhraní v jednotlivých modulech (shrnutí dat),
  - Experience Layer a Commerce (widget insights).

#### Role AI

- AI generuje shrnutí a doporučení v kontextu dashboardů a widgetů.
- UA slouží jako datová základna pro AI‑driven rozhodovací logiku (Fuel, Flow Automations).

#### Technické / architektonické poznámky

- UA je vrstvená nad sjednoceným datovým modelem platformy.
- Přístup přes Suite UI a sdílenou API vrstvu (konceptuálně `api.emplifi.io`).

---

### 2.2 Platform Intelligence Engine (PIE) & Flow Automations

#### Definice

PIE + Flow Automations = **orchestrace a automatizace** napříč platformou. Umožňuje definovat pravidla typu:

> „Když nastane událost X, proveď akci Y za podmínky Z.“

#### Příklady pravidel

- Pokud **Listening** detekuje nárůst negativních zmínek → vytvoř alert + Care case.
- Pokud je **case v Care** nevyřešený déle než SLA → zvýšit prioritu + upozornit supervisora.
- Pokud **UGC widget** dlouhodobě klesá v engagementu → vytvořit task nebo doporučit nové kreativy přes Fuel.

#### Oblast / cloud

Platform / Intelligence / Automations

#### Hlavní uživatelé / persony

- Marketing Ops, CX Ops
- Power users / administrátoři
- Interní product/CS týmy (připravují předpřipravené flow)

#### Klíčové funkce

- Definice spouštěčů (eventy z modulů).
- Definice akcí (vytvořit case, poslat notifikaci, tagovat, změnit prioritu, spustit kampaň).
- Šablony pro časté scénáře.
- Napojení na AI pro doporučení pravidel a detekci anomálií.

*(další sekce – persony, data, integrace, AI – viz předchozí verze)*

---

### 2.3 Content OS

*(viz předchozí verze – jednotný obsahový backbone pro platformu)*

---

### 2.4 Service OS

*(viz předchozí verze – sjednocuje Care, Chatbot, KB, VoC, Agent Analytics)*

---

### 2.5 Emplifi Teams & Permissions

*(viz předchozí verze – governance vrstva, RBAC, Teams)*

---

### 2.6 Trust Layer

*(viz předchozí verze – AI safety & governance)*

---

### 2.7 Fuel & Fuel AI Copilot

*(viz předchozí verze – AI „brains“ nad daty, Objectives & Tactics, doporučení)*

---

## 3. Social Marketing & Analytics

### 3.1 Content Publishing & Planner (Publisher, Calendar)

*(viz předchozí rozšířená verze – kalendář, composer, approvals, kampaně)*

---

### 3.2 Social & Web Listening

*(viz předchozí verze – včetně AI Query Copilota, např. LSN‑2146:  
https://emplifi.atlassian.net/browse/LSN-2146)*

---

### 3.3 Influencers & Creators

*(viz předchozí verze)*

---

## 4. Community & Care

### 4.1 Community Management (detailní rozpad)

*(viz předchozí detail – Unified Inbox, routing, tagging, šablony, moderace)*

---

### 4.2 Care (Digital Care / Agent) – detailní rozpad

*(viz předchozí detail – Case Management, Queues, SLA, Omnichannel, Agent Desktop, QA, Analytics)*

---

### 4.3 Chatbot & Conversational (detailní)

*(viz předchozí rozšíření – Bot Builder, intents/entities, Knowledge Q&A, handover)*

---

### 4.4 Knowledge Base

*(viz předchozí verze – centrální znalostí, tagy, workflow, AI generování článků)*

---

### 4.5 Voice of Customer (VoC)

*(viz předchozí verze – surveys, NPS/CSAT, insighty, AI analýza textu)*

---

## 5. Commerce & Live Commerce

### 5.1 Live Advisor / Live Commerce

*(viz předchozí verze – 1:1 & 1:N live video, KPI, integrace přes Experience Layer)*  
Roadmap detail:  
https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

---

### 5.2 UGC (User Generated Content)

*(viz předchozí verze – sběr, rights management, product mapping)*

---

### 5.3 Ratings & Reviews

*(viz předchozí verze – správa recenzí, moderace, doplněný review response workflow)*

---

### 5.4 Experience Layer & Unified CTA

*(viz předchozí verze – jednotné CTA na webu, orchestrace různých interakcí)*

---

## 6. AI‑first nadstavby (2025–2026)

### 6.1 AI Copiloti a agenti

*(viz předchozí verze + příklady Marketing / Care / Commerce copilotů)*  
AI roadmap:  
https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk

---

## 7. Konkrétní příklady UA dashboardů

Tato sekce je zaměřená na **konkrétní struktury UA dashboardů** (typy widgetů a metrik), aby AI měla představu, jak vypadá „reálný“ UA board.

### 7.1 UA Dashboard: Social Performance Overview (Marketing)

**Cíl dashboardu:**  
Poskytnout marketingovému týmu rychlý přehled o výkonnosti organického i placeného obsahu napříč sociálními sítěmi za zvolené období.

**Typičtí uživatelé:**

- Social Media Manager
- Marketing Manager
- Content Lead

#### Hlavní sekce dashboardu a widgety

1. **Top‑level KPI panel (cards)**
   - Počet publikovaných postů (organické / paid)
   - Celkový reach / impressions
   - Celkový engagement (lajky, komentáře, sdílení, kliky)
   - Engagement rate (%)
   - Click‑through rate (CTR)
   - Conversions (pokud jsou trackovány – např. web konverze)
   - Spend (pro paid kampaně)
   - Cost per Result (CPR / CPC / CPM – dle typu kampaní)

2. **Trendy v čase (time series)**
   - Graf *Engagement over time* (denní / týdenní)
   - Graf *Impressions over time*
   - Graf *Spend vs. Results* (dvouosý graf: spend vs conversions)

3. **Performance by Channel**
   - Bar chart: Engagement by network (FB, IG, TikTok, X/Twitter, LinkedIn, …)
   - Pie/stacked bar: Share of spend by network
   - Table: KPIs by channel (impressions, clicks, CTR, conversions, cost per conversion)

4. **Top Content (tabulka / tile grid)**
   - Tabulka s nejvýkonnějšími posty:
     - Náhled kreativy
     - Název / popis
     - Kanál
     - Engagement, ER
     - Clicks, CTR
     - Conversions (pokud jsou)
   - Filtrace podle typu obsahu (video, photo, carousel, story, reel…).

5. **Campaign Performance (pokud jsou kampaně definované)**
   - Tabulka: Kampaně vs KPI (reach, engagement, conversions, ROI).
   - Graf: Top 5 kampaní podle ROI nebo conversions.

6. **Audience Insights (volitelné)**
   - Demografie (age/gender) – aggregated.
   - Geography (country/region).

7. **AI‑powered Insights (textový widget)**
   - Automaticky generované shrnutí:
     - „Za posledních 30 dní vzrostl engagement o X %, největší nárůst byl na TikToku…“
     - „Videoposty mají o Y % vyšší CTR než obrázkové posty…“

#### Datové zdroje

- Social API data (metrics per post, per campaign, per channel).
- Campaign metadate z Publishing/Ads.
- UA agregace.

---

### 7.2 UA Dashboard: Care & Service Performance (CX)

**Cíl dashboardu:**  
Dát CX/Care managerům přehled o výkonnosti péče o zákazníky: objem, SLA, spokojenost, výkon týmů a agentů.

**Typičtí uživatelé:**

- Head of Customer Care / CX Director
- Care Manager
- Team Leads

#### Hlavní sekce dashboardu a widgety

1. **Top‑level KPI panel (cards)**
   - Počet nových cases (za období)
   - Počet vyřešených cases
   - Otevřené cases (current backlog)
   - Průměrná doba do prvotní odpovědi
   - Průměrná doba do vyřešení
   - SLA adherence (% cases vyřešených v SLA)
   - Průměrný CSAT (Customer Satisfaction)
   - Průměrný NPS (pokud je relevantní)

2. **Case Volume & Resolution Trends**
   - Time series: New vs Resolved cases over time (denní/týdenní).
   - Time series: Average resolution time over time.
   - Time series: SLA adherence over time.

3. **Channel Breakdown**
   - Bar/stacked bar: Cases by channel
     - Social (Facebook, Instagram, atd.)
     - Web chat / chatbot
     - Email
     - Reviews / Ratings
     - Další kanály (podle integrací).
   - KPI tabulka: per channel (volume, resolution time, CSAT).

4. **Topics / Categories**
   - Bar chart / treemap: Cases by topic (billling, delivery, product issue, complaint…).
   - Table: Top topics by volume + average CSAT per topic.

5. **Team & Agent Performance**
   - Tabulka: Teams
     - Počet vyřešených cases
     - Průměrná doba řešení
     - SLA adherence
     - CSAT
   - Tabulka: Agents (top/bottom performers podle objemu a CSAT).

6. **VoC & Feedback Overview (integrované s VoC)**
   - Avg CSAT & NPS by period.
   - Breakdown: CSAT/NPS by channel / topic / region.
   - Word cloud nebo topics based na textových komentářích (pokud UI podporuje vizualizaci).

7. **AI‑powered Insights (textový widget)**
   - Shrnutí:  
     - „Během posledních 2 týdnů došlo k nárůstu case ve třídě `delivery` o X %…“  
     - „Team A má o Y % kratší resolution time než průměr, zejména v tématu `billing`…“  
     - „CSAT v kanálu `reviews` se snížil o Z p.b., hlavně kvůli tématu `product quality`…“

#### Datové zdroje

- Service OS / Care: case data, topics, SLA, agent/tým info.
- VoC: survey results (CSAT, NPS, open comments).
- Community: zdroj některých cases (channel mapping).

---

## 8. End‑to‑end scénáře napříč platformou

Tato sekce ukazuje **konkrétní scénáře napříč několika moduly**. Je vhodná pro AI, která má chápat kontext a tok dat/akcí v rámci Emplifi.

### 8.1 Scénář 1: Negativní tweet → Community → Care → VoC → UA → Fuel

**Cíl:**  
Ukázat, jak se z jedné negativní sociální zmínky stává case, jak je zpracována, změřena a použitá v analytice a strategii.

#### Krok 1 – Vznik negativní zmínky (Listening / Social)

- Zákazník napíše veřejný tweet, kde si stěžuje na problém s produktem (např. nefunkční objednávka).
- Social data jsou ingestována do platformy.

**Zapojené moduly:**
- Social & Web Listening
- Community Management (social messages feed)

#### Krok 2 – Zpracování v Community (Unified Inbox)

1. Tweet se objeví v **Community Unified Inbox**.
2. Automatická pravidla (PIE) nebo AI:
   - detekují **negativní sentiment**,
   - identifikují, že jde o „complaint / issue“.
3. Pravidlo v Community:
   - auto‑tag: `complaint`, `product_issue`,
   - přiřazení do fronty „High priority social complaints“,
   - případně automatická odpověď typu „Mrzí nás to, předáváme náš care tým…“.

**Zapojené moduly:**
- Community Management
- PIE / Flow Automations
- AI (sentiment analysis, topic classification)

#### Krok 3 – Eskalace do Care (Service OS / Case)

1. Agent/Community nebo pravidlo spustí **eskalaci na Care**:
   - vytvoří se **case** v Service OS (Care),
   - case obsahuje:
     - původní tweet,
     - tagy a kontext (complaint, product_issue),
     - identitu uživatele (pokud dostupná),
     - historii interakcí (např. předchozí tweety/stížnosti).

2. Case je **automaticky zařazen** do správné fronty (např. „Social complaints – EU“):
   - routing logika (PIE): region, jazyk, téma.

**Zapojené moduly:**
- Community → Care integration
- Service OS / Care (Case Management, Queues & Routing)

#### Krok 4 – Řešení case v Care (Agent Desktop)

1. Care agent vidí nový case na svém **Agent Desktopu**:
   - kontext tweeta,
   - historii zákazníka (předchozí cases),
   - doporučené **Knowledge Base** články a AI návrh odpovědi.
2. Agent kontaktuje zákazníka:
   - přes reply na tweet,
   - případně přechod na DM/email/telefon.
3. Po vyřešení:
   - case je uzavřen se statusem (Resolved),
   - téma zůstává (např. `delivery_delay`),
   - metriky (řešení, čas, použité články).

**Zapojené moduly:**
- Care (Agent Desktop, Knowledge Base, AI Agent Assist)

#### Krok 5 – VoC follow‑up (Voice of Customer)

1. Po uzavření case je automaticky (nebo pravidlem) spuštěn **VoC survey**:
   - CSAT dotazník: „Byl(a) jste spokojen(a) s vyřešením vašeho problému?“
   - NPS dotazník (volitelně).
2. Zákazník odpoví:
   - např. CSAT = 4/5,
   - textový komentář (např. „Doručení trvalo dlouho, ale support byl super.“).

3. VoC module uloží:
   - CSAT + komentář,
   - vazbu na konkrétní case a kanál (Twitter).

**Zapojené moduly:**
- VoC
- Service OS (link case ↔ survey result)

#### Krok 6 – UA reporting (Care & VoC dashboards)

1. V UA se objeví:
   - 1 nový case v kategorii `delivery_issue`, kanál `Social`.
   - resolution time, SLA adherence.
   - nový CSAT datapoint navázaný na case.
2. V **Care & Service Performance dashboardu** (viz 7.2) se tyto hodnoty projeví v:
   - volume by topic,
   - CSAT by channel/topic.

**Zapojené moduly:**
- UA
- Care/Service OS data connector
- VoC data connector

#### Krok 7 – Fuel & strategická doporučení

1. **Fuel** analyzuje kumulativní data:
   - roste počet case s tématem `delivery_issue`,
   - klesá CSAT v segmentu „EU customers“,
   - VoC komentáře často zmiňují „shipping delays“.
2. Fuel AI Copilot:
   - navrhne taktikou: „Spustit projekt na zkrácení dodacích lhůt ve spolupráci s logistikou“,
   - navrhne monitoring v UA: „Vytvořit dedicated dashboard pro `delivery_issue`“.

**Zapojené moduly:**
- Fuel
- UA
- VoC
- Care

---

### 8.2 Scénář 2: UGC → Web Experience → Conversions → UA → Content Strategy

**Cíl:**  
Ukázat cestu od shromáždění UGC přes zobrazení na webu až po vyhodnocení v UA a využití v content strategii.

#### Krok 1 – Sběr UGC (social / upload)

- Zákazníci sdílejí fotky a videa s produktem na Instagramu (hashtag, mentions).
- Někteří nahrávají obsah přes dedikovanou UGC landing page.
- Emplifi UGC modul ingestuje tento obsah.

**Zapojené moduly:**
- UGC
- Social API integrace

#### Krok 2 – Kurátorování a rights management

1. UGC tým prochází obsah:
   - filtruje kvalitní, brand‑safe příspěvky.
2. Práva:
   - systém posílá žádosti o souhlas,
   - po získání „rights approved“ jsou příspěvky označeny jako použitelné.

**Zapojené moduly:**
- UGC (kurátorství, rights management)
- PIE/automations (část procesů lze automatizovat)

#### Krok 3 – Napojení na produkty (product mapping)

- Každý UGC asset je mapovaný k produktům:
  - produktový kód (SKU),
  - kategorie, kolekce.
- Tyto mapy jsou uložené v Content OS / UGC datovém modelu.

**Zapojené moduly:**
- UGC
- Content OS (metadata o produktech)

#### Krok 4 – Zobrazení na webu (Experience Layer)

1. Na produktových stránkách e‑shopu se zobrazují UGC galerie:
   - jako widgety v rámci **Experience Layer**.
2. Zákazník vidí reálné fotky a videa ostatních zákazníků.
3. UGC widget trackuje:
   - zobrazení (views),
   - interakce (clicks, expand),
   - případné konverze (add‑to‑cart, purchase) – přes event tracking / e‑commerce integraci.

**Zapojené moduly:**
- UGC widget
- Experience Layer & Unified CTA / UI komponenty
- Commerce tracking (web events, conversions)

#### Krok 5 – Reporting v UA (Commerce & UGC dashboards)

- UA ingestuje:
  - UGC impressions, interactions,
  - konverzní eventy navázané na UGC widget,
  - revenue (pokud je trackováno).
- V UA existuje např. dashboard „UGC & Commerce Performance“:
  - Top produkty podle UGC‑driven revenue,
  - Konverzní poměr stránek s UGC vs bez UGC,
  - Performance podle typu UGC (video vs photo).

**Zapojené moduly:**
- UA
- UGC (data feed)
- Commerce integration

#### Krok 6 – Content & Commerce strategie (Fuel / Marketing)

1. Marketing/E‑commerce tým vidí:
   - které produkty profitují nejvíc z UGC,
   - jaký typ UGC má nejlepší vliv na konverzi.
2. Fuel / AI Copilot může navrhnout:
   - zvýšit fokus na UGC pro konkrétní kategorie,
   - spustit kampaně na získání více UGC pro produkty s nízkým UGC coverage,
   - cross‑promovat top performing UGC i na social profilech.

**Zapojené moduly:**
- UA (UGC dashboardy)
- Fuel
- UGC, Content OS
- Social Publishing (pro cross‑promo kampaně)

---

### 8.3 Scénář 3: Marketing kampaně → Publishing → UA → AI Copilot → Optimalizace

**Cíl:**  
Ukázat, jak marketingový tým řídí kampaň a optimalizuje ji na základě UA reportů a AI doporučení.

#### Krok 1 – Plánování kampaně

- Marketing tým v Publishing/Planner:
  - definuje kampaň (název, cíle, období, kanály),
  - vytváří a plánuje posty napříč sítěmi.

**Zapojené moduly:**
- Content Publishing & Planner
- Content OS (asset management)
- Fuel (volitelně: cíle kampaně)

#### Krok 2 – Realizace a běh kampaně

- Příspěvky se publikují dle kalendáře.
- Publikace generuje social metriky (reach, engagement, clicks).

**Zapojené moduly:**
- Publishing
- Social integrace

#### Krok 3 – Sběr dat a UA reporting

- UA sbírá data a na kampani založený dashboard zobrazuje:
  - výkon postů,
  - výkon kanálů,
  - KPI proti cílům (např. leads, revenue, traffic).

**Zapojené moduly:**
- UA (specific campaign dashboard)
- Social/ads data feed

#### Krok 4 – AI Copilot analýza

1. Marketing Manager se zeptá AI Copilota (např. v UA nebo Fuel):
   - „Proč kampaň X neplní cíl na IG?“
2. Copilot:
   - načte data z UA,
   - analyzuje rozdíly mezi kanály/ads sets/creatives,
   - odpoví:
     - „Na IG vids mají o 40 % vyšší engagement než statics, ale budget na video je jen 20 %…“
     - „V týdnech 2–3 byl prudký pokles reach na IG kvůli X…“

**Zapojené moduly:**
- AI Copilot
- UA
- Fuel (pokud je navázané na cíle)

#### Krok 5 – Optimalizace kampaně

- Copilot navrhne konkrétní kroky:
  - přesun budgetu z low‑performing creatives na high‑performing,
  - změnu publika nebo času publikace.
- Tým tyto kroky provede v:
  - Ads manageru (pokud jde o paid),
  - Publishing (změna post times, typ obsahu),
  - nebo přes integrace / Flow Automations.

**Zapojené moduly:**
- Publishing
- UA
- Fuel / Copilot
- PIE (automatizace některých úprav)

---

## 9. Závěr a doporučení pro použití jako AI knowledge base

- Tento dokument kombinuje:
  - **katalog modulů**,
  - **konkrétní UA dashboard příklady**,
  - **end‑to‑end scénáře**.
- Pro AI použití:
  - moduly jsou popsány konzistentně (Definice → Persony → Use‑casy → Data → Integrace → AI),
  - dashboardy a scénáře ukazují reálné vztahy dat a procesů,
  - odkazy na interní materiály (roadmapy, decky, sheets) umožňují navázat na detailnější interní dokumentaci.

Doporučení:

1. **Verzování** – udržovat tento Markdown jako „single source of truth“ (Git/Confluence Live Doc).
2. **Rozšiřování** – při přidání nového modulu nebo AI funkce:
   - přidat modulovou sekci,
   - příp. přidat nový end‑to‑end scénář.
3. **Lokalizace** – dle potřeby vytvořit i anglickou verzi pro trénování globálních modelů, se stejnou strukturou.


# Emplifi Platform – Přehled modulů a jejich funkce (rozšířená verze)

## 0. Účel dokumentu

Tento dokument slouží jako **znalostní báze pro AI a interní týmy**.  
Cílem je:

- poskytnout **ucelený přehled Emplifi platformy**,
- popsat **jednotlivé moduly** (co dělají, pro koho jsou, jaké problémy řeší),
- vysvětlit **vztahy mezi moduly** a nadstavbové **AI schopnosti**,
- nabídnout **konkrétnější rozpad** některých modulů (Care/Agent, Unified Analytics, Community atd.) na pod‑moduly a typické reporty.

Struktura:

- nejdříve **high‑level rozdělení** (platforma, marketing, care, commerce),
- poté **modul po modulu** podle stejné šablony:
  - Definice  
  - Oblast / cloud  
  - Uživatelé / persony  
  - Use‑casy  
  - Klíčové funkce  
  - Datové zdroje a výstupy  
  - Napojení na ostatní moduly  
  - Role AI  
  - Technické / architektonické poznámky  

Interní kontext a roadmapy:

- Emplifi 2023 Roadmap  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
- Emplifi Releases and Roadmap – Official  
  https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk
- All Hands 2024 – Product & Design (Content OS, Service OS, Fuel)  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk
- Social Marketing Cloud – Functional Requirements (RFT)  
  https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements
- AI Integration Roadmap  
  https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
- 2025 Product Priorities (AI features)  
  https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

---

## 1. Emplifi jako jednotná platforma

Emplifi je **sjednocená platforma pro customer engagement a customer experience**, která kombinuje:

- **Marketing**
  - Social media management, publishing, analytics
  - Social & web listening
  - Influencer & creator management
  - Content & campaign orchestration
- **Care / Service**
  - Digital care (cases, omnichannel)
  - Chatbot & web chat
  - Knowledge base
  - Voice of Customer (VoC)
  - Agent analytics a QA
- **Commerce**
  - Live Advisor / Live Commerce
  - UGC (User Generated Content)
  - Ratings & Reviews
  - Web Experience layer (Unified CTA)
- **Platform & Shared Capabilities**
  - Unified Analytics
  - Content OS
  - Service OS
  - Platform Intelligence Engine (PIE) & Flow Automations
  - Emplifi Teams & Permissions
  - Trust Layer
  - Fuel & AI Copiloti

---

## 2. Platform & Shared Capabilities

### 2.1 Unified Analytics (UA)

#### Definice

Unified Analytics je **centrální analytický modul** Emplifi platformy. Sjednocuje metriky a reporty napříč marketingem, commerce a care a slouží jako hlavní reportingové rozhraní pro zákazníky i interní týmy.

- Pitch a produktová vize:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

#### Oblast / cloud

Analytics & Intelligence / Platform

#### Hlavní uživatelé / persony

- Marketing Manager, Social Media Manager
- CX / Care Manager
- E‑commerce Manager
- Data / Business Analyst
- C‑level a leadership týmy

#### Hlavní use‑casy

- Mít **jednotný pohled** na výkon marketingu, commerce a care v jednom nástroji.
- Tvořit **dashboardy** a reporty přizpůsobené různým rolím (C‑level, region, produkt, tým).
- Analyzovat **kampaně, kanály, obsah, care výkonnost** a commerce výsledky v jednom prostředí.
- Identifikovat **trendy a anomálie** v datech (růst/pokles, outliery).

#### Klíčové funkce a pod‑moduly UA

1. **Cross‑channel Dashboards**
   - Přehled výkonnosti napříč kanály (social, paid, care, commerce).
   - Filtry podle času, kanálu, účtu, týmu, kampaně, regionu.

2. **Social & Content Performance Reports**
   - Výkon organického a placeného obsahu (reach, engagement, CTR, conversions).
   - Analýza po typech postů, kampaních, formátech, kreativách.

3. **Care & Service Reports**
   - SLA plnění, počet cases, průměrná doba vyřešení, backlog.
   - CSAT/NPS navázané na case, agenty, témata.

4. **Commerce & Experience Reports**
   - Výkon Live Advisor / Live Stream (viewers, engagement, conversion rate, revenue).
   - Výkon UGC a reviews na webu (impact na konverze).

5. **Customer Journey & Funnel Views**
   - Reporty zaměřené na cestu zákazníka (from impression → engagement → conversion → care).

6. **Custom Dashboards & Widgets**
   - Vytváření vlastních dashboardů z předpřipravených widgetů.
   - Sdílení dashboardů a možnost embedů (kde je podporováno).

7. **AI‑powered Widget Insights**
   - AI shrnutí trendů a doporučení v rámci widgetů / dashboardů (viz Releases deck:  
     https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk)

#### Datové zdroje a výstupy

- **Vstupy:**
  - Social a paid data z připojených sítí.
  - Listening data (volume, sentiment, topics).
  - Care/Service OS data (cases, CSAT, NPS, AHT).
  - Commerce data (Live Commerce, UGC, Ratings & Reviews).
  - VoC data (surveys, feedback).
- **Výstupy:**
  - Interaktivní dashboardy v UI UA.
  - Exporty (CSV, PDF – dle aktuální podpory).
  - Datové podklady pro AI (Fuel, Copiloti).

#### Napojení na ostatní moduly

- UA **konzumuje data** ze všech produktových modulů.
- UA poskytuje **agregované informace** pro:
  - Fuel (AI taktické návrhy),
  - AI Copilot rozhraní v jednotlivých modulech (shrnutí dat),
  - Experience Layer a Commerce (widget insights).

#### Role AI

- AI generuje shrnutí a doporučení v kontextu dashboardů a widgetů.
- UA slouží jako datová základna pro AI‑driven rozhodovací logiku (Fuel, Flow Automations).

#### Technické / architektonické poznámky

- UA je vrstvená nad sjednoceným datovým modelem platformy.
- Přístup přes Suite UI a sdílenou API vrstvu (`api.emplifi.io` – konceptuálně).
- Další rozpracování je v UA pitch decku:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

---

### 2.2 Platform Intelligence Engine (PIE) & Flow Automations

*(viz předchozí verze, doplněno pár příkladů pravidel)*

#### Definice

PIE + Flow Automations = **orchestrace a automatizace** napříč platformou. Umožňuje definovat pravidla typu:

- „Když nastane událost X, proveď akci Y za podmínky Z.“

#### Příklady pravidel

- Pokud **Listening** detekuje nárůst negativních zmínek → vytvoř alert + Care case.
- Pokud je **case v Care** nevyřešený déle než SLA → zvýšit prioritu + upozornit supervisora.
- Pokud **UGC widget** mají nízký engagement → navrhnout nové assety přes Fuel.

Vše ostatní (oblasti, persony, funkce, napojení, AI) – viz předchozí verze v sekci 2.2.

---

### 2.3 Content OS

*(bez větších změn – viz předchozí verze)*

---

### 2.4 Service OS

*(bez větších změn – viz předchozí verze, klíčové je, že Service OS sjednocuje Care, Chatbot, KB, VoC, QA/Analytics)*

---

### 2.5 Emplifi Teams & Permissions

*(bez větších změn – governance vrstva)*

---

### 2.6 Trust Layer

*(bez větších změn – AI safety & governance)*

---

### 2.7 Fuel & Fuel AI Copilot

*(bez větších změn – AI „brains“ nad daty; viz All Hands 2024 a AI roadmap)*

---

## 3. Social Marketing & Analytics

### 3.1 Content Publishing & Planner (Publisher, Calendar)

*(rozšíření o pod‑moduly)*

#### Pod‑moduly

- **Campaign Management**
  - Evidence kampaní, jejich cílů a přiřazeného obsahu.
- **Calendar View**
  - Měsíční/týdenní/daily pohled, možnost drag & drop.
- **Post Composer**
  - Vytváření příspěvků, variace pro různé sítě.
- **Approval Workflow**
  - Routing postů ke schválení (legal/compliance, brand).
- **Content Performance Links**
  - Prokliky z kalendáře do UA reportů konkrétních postů nebo kampaní.

Vše ostatní (definice, persony, use‑casy, data, AI) – viz sekce 3.1 v předchozí verzi.

---

### 3.2 Social & Web Listening

*(bez zásadních změn, doplnění o AI Query Copilot)*

- **AI Query Copilot** – asistent, který převádí dotazy v přirozeném jazyce na komplexní boolean dotazy, navrhuje relevantní zdroje a filtry (viz příslušné LSN‑ epic v Jire, např. LSN‑2146:  
  https://emplifi.atlassian.net/browse/LSN-2146)

---

### 3.3 Influencers & Creators

*(beze změn)*

---

## 4. Community & Care

### 4.1 Community Management (detailnější rozpad)

#### Definice

Community Management: **jednotný inbox pro sociální a další digitální konverzace**, s podporou workflow, routing, tagování a spolupráce.

#### Oblast / cloud

Community Management & Digital Care

#### Pod‑moduly

1. **Unified Inbox**
   - Zobrazuje příspěvky a zprávy z připojených sociálních sítí a jiných kanálů.
   - Podpora různých typů itemů: komentáře, soukromé zprávy, zprávy z review platforem atd.

2. **Assignment & Routing**
   - Přiřazování zpráv jednotlivým agentům nebo týmům (Team‑based governance).
   - Možnost automatického routingu (podle pravidel z PIE).

3. **Tagging & Categorization**
   - Ruční a automatické tagování zpráv (téma, produkt, sentiment).
   - Využití pro reporting a VoC.

4. **Saved Replies & Templates**
   - Předpřipravené odpovědi pro časté situace.
   - Využití jako podklad pro agent‑assist AI.

5. **Internal Collaboration**
   - Interní poznámky, @mentions, eskalace.
   - Předání do **Care** jako case (vyšší úroveň řešení).

6. **Moderation Rules**
   - Skrytí spamu, filtrování obsahu, auto‑odpovědi.

#### Hlavní use‑casy

- Z jednoho místa spravovat **veškeré komentáře a zprávy**.
- Zajistit, že nic „nepropadne“ – všechny dotazy mají vlastníka.
- Rychle reagovat na krize nebo virální témata.

#### Datové zdroje a výstupy

- Vstupy: proud sociálních interakcí (komentáře, zprávy, reviews).
- Výstupy: zpracované konverzace, tagy, eskalované cases v Care, reporty (přes UA).

#### Role AI

- AI štítky (spam, téma, sentiment).
- AI návrhy odpovědí na základě historie a KB.
- AI detekce konverzací vhodných k eskalaci do Care.

Vše ostatní – viz starší verze (sekce 3.2 Community Management).

---

### 4.2 Care (Digital Care / Agent) – detailní rozpad

#### Definice

Care je **core modul Service OS** pro správu zákaznických případů (cases). Řeší omnichannel care, routing, SLA, agent desktop a reporting.

#### Oblast / cloud

Service OS / Care

#### Hlavní uživatelé / persony

- Care Agent / Support Agent  
- Team Lead / Supervisor  
- CX / Care Manager  
- Quality / Training Manager  

#### Pod‑moduly

1. **Case Management**
   - Vytvoření case (ručně nebo automaticky z Community/Chatbotu/Webu).
   - Základní atributy: téma, priorita, SLA, stav, vlastník, zákazník.
   - Historie aktivit a konverzací.

2. **Queues & Routing**
   - Fronty podle tématu, kanálu, jazyka, regionu atd.
   - Auto‑routing podle pravidel (skills‑based, priority‑based).
   - Převody mezi frontami (re‑routing, eskalace).

3. **SLA & Workload Management**
   - Konfigurace SLA pravidel (odpověď/řešení).
   - Sledování SLA plnění v reálném čase.
   - Zobrazení workloadu agentů (kolik mají otevřených cases).

4. **Omnichannel Management**
   - Podpora vícero kanálů v jednom case:
     - Social zprávy (přes Community eskalaci),
     - Web chat / chatbot přepnutí na live agenta,
     - Email (přes integrace),
     - Formuláře / VoC feedback.
   - Všechny interakce se ukládají pod jeden case.

5. **Agent Desktop**
   - Jednotné rozhraní pro agenta:
     - Kontext zákazníka (historie interakcí, profil),
     - Kontext case (předchozí zprávy, KB články),
     - Actions (odpovědět, přeposlat, eskalovat, uzavřít).
   - Napojení na Knowledge Base a AI suggestion engine.

6. **Quality & Coaching**
   - Možnost hodnotit kvalitu vyřešených cases (interní QA).
   - Výstupy pro školení a coaching agentů.

7. **Agent & Team Analytics**
   - Přehled o výkonnosti agentů a týmů:
     - počet vyřešených cases,
     - průměrný čas,
     - adherence k SLA,
     - CSAT.

#### Hlavní use‑casy

- Uspořádat a vyřešit **zákaznické požadavky** napříč kanály.
- Udržovat přehled o **SLA** a **výkonnosti agentů**.
- Zajistit konzistentní experience díky **Knowledge Base** a šablonám.

#### Datové zdroje a výstupy

- **Vstupy:**
  - Převody z Community (konverzace → case),
  - Přepnutí z Chatbotu / web chatu,
  - E‑mail/CRM integrace,
  - VoC feedback.
- **Výstupy:**
  - Uzavřené cases, jejich stavy a metriky,
  - CSAT/NPS navázané na jednotlivé cases/agentů,
  - Reporty o týmové výkonnosti (přes UA).

#### Napojení na ostatní moduly

- **Community** – hlavní zdroj cases z public kanálů.
- **Chatbot & Web Chat** – pre‑kvalifikace a následné předání agentovi.
- **Knowledge Base** – navrhované články v agent desktopu.
- **VoC** – follow‑up na negativní hodnocení nebo konkrétní feedback.
- **UA** – reporting o Care výkonu.
- **Fuel** – strategie a taktiky zlepšení péče.

#### Role AI

- **Agent Assist**:
  - AI návrhy odpovědí, shrnutí předchozí konverzace, doporučení dalšího kroku.
- **Routing**:
  - AI‑based routing case podle obsahu, jazyka, sentimentu nebo hodnoty zákazníka.
- **Quality & Coaching**:
  - Automatická analýza hovoru/chatů (kde je k dispozici) a doporučení tréninku.

#### Technické / architektonické poznámky

- Care je implementačně součástí Service OS (sdílené entity, datový model).
- V některých materiálech vystupuje jako „Service“ nebo „Agent“ (desktop).

---

### 4.3 Chatbot & Conversational (detailnější)

*(rozšíření o pod‑moduly)*

#### Pod‑moduly

1. **Bot Builder / Flow Editor**
   - UI pro definici konverzačních scénářů (trees/flows).
2. **Intent & Entity Recognition**
   - Klasifikace dotazů do intencí, extrakce entit (např. číslo objednávky).
3. **Knowledge‑based Q&A**
   - Dotazy odpovídány na základě KB (FAQ, procedurální články).
4. **Handover to Agent**
   - Mechanismus přesměrování na live agenta (Care), včetně předání kontextu.

Vše ostatní – viz předchozí verze 4.3.

---

### 4.4 Knowledge Base

*(beze změn, ale lze doplnit, že KB je klíčovým zdrojem pro generativní AI a LLM-based odpovědi)*

---

### 4.5 Voice of Customer (VoC)

*(beze změn, ale VoC data jsou důležitý vstup pro UA, Fuel a produktové rozhodování)*

---

## 5. Commerce & Live Commerce

### 5.1 Live Advisor / Live Commerce

*(viz detailní verze v předchozí odpovědi; zde se odkazuje na 2023 Roadmap pro architekturu a KPI)*

- Emplifi 2023 Roadmap – Live Advisor & Live Stream:  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

---

### 5.2 UGC (User Generated Content)

*(beze změn, jen doplnění o rights management a produktové mapování)*

#### Další detaily

- **Rights Management**
  - Sběr souhlasů (Rights approval) pro použití UGC v marketingu.
- **Product Mapping**
  - Přiřazení UGC ke konkrétním produktům (SKU, kategorie) pro zobrazení na produktových stránkách.
- **Performance Analytics**
  - Měření dopadu UGC widgetů na engagement a konverze (přes UA).

---

### 5.3 Ratings & Reviews

*(beze změn, doplnění o „review response workflow“)*

#### Review Response Workflow

- Vstup recenze → Community/Care workflow (zpracování jako message/case).
- Šablony odpovědí a schvalování (pro právně citlivé odpovědi).
- Reporty o době odpovědi a míře odpovědí na reviews.

---

### 5.4 Experience Layer & Unified CTA

*(beze změn)*

---

## 6. AI‑first nadstavby (2025–2026)

### 6.1 AI Copiloti a agenti

*(beze změn, ale rozšíření o příklady)*

#### Příklady AI Copilotů

- **Marketing Copilot**
  - Přímo v Publishing/UA: „vysvětli mi, proč kampaň X klesla o 30 %“ → AI z UA dat shrne důvody.
- **Care Copilot**
  - V Agent Desktopu: shrnutí předchozích kontaktů, návrhy odpovědí a KB článků.
- **Commerce Copilot**
  - Pro Live Advisor nebo e‑shop: návrhy personalizovaných produktů, cross‑sell.

---

## 7. Závěr a doporučení pro použití jako AI knowledge base

- **Konzistence struktury**  
  Všechny moduly jsou popsány podobným patternem, ideální pro trénování nebo system prompt.

- **Rozšiřitelnost**  
  Při přidání nového modulu (např. nový typ analytiky, nový kanál v Care) použij stejné sekce:
  - Definice  
  - Oblast / cloud  
  - Persony  
  - Use‑casy  
  - Klíčové funkce  
  - Data (vstupy/výstupy)  
  - Integrace  
  - AI role  
  - Technické poznámky  

- **Odkazy na zdroje**  
  U každého většího modulu jsou uvedeny relevantní interní zdroje (decky, RFT, roadmapy), např.:
  - UA deck:  
    https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk
  - 2023 Roadmap (Experience, Live Commerce, Service OS, Content OS):  
    https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
  - Social Marketing Cloud RFT (detailní výčet marketing funkcí):  
    https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements
  - AI integration roadmap:  
    https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
  - AI priorities 2025:  
    https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

- **Verzování a update**  
  Doporučuje se tento Markdown udržovat v repozitáři nebo jako Confluence Live doc:
  - přidávat nové sekce při rozšíření produktů,
  - označovat „legacy“ moduly / funkce,
  - udržovat odkazy na interní materiály aktuální.


# Emplifi Platform – Přehled modulů a jejich funkce

## 0. Účel dokumentu

Tento dokument slouží jako **znalostní báze pro AI a interní týmy**.  
Cílem je:

- poskytnout **ucelený přehled Emplifi platformy**,
- popsat **jednotlivé moduly** (co dělají, pro koho jsou, jaké problémy řeší),
- vysvětlit **vztahy mezi moduly** a nadstavbové **AI schopnosti**.

Struktura je navržená tak, aby ji bylo možné dobře zpracovat algoritmicky (AI):

- nejdříve **high‑level rozdělení** (platforma, marketing, care, commerce),
- poté **modul po modulu** podle stejné šablony:
  - Definice  
  - Oblast / cloud  
  - Uživatelé / persony  
  - Use‑casy  
  - Klíčové funkce  
  - Datové zdroje a výstupy  
  - Napojení na ostatní moduly  
  - Role AI  
  - Technické / architektonické poznámky  

---

## 1. Emplifi jako jednotná platforma

Emplifi je **sjednocená platforma pro customer engagement a customer experience**, která kombinuje:

- **Marketing** (social media management, analytics, listening, influencers, content),
- **Care / Service** (digitální péče o zákazníky, case management, chatboti, VoC),
- **Commerce** (live commerce, UGC a ratings & reviews, experience layer na webu),
- a **platformní vrstvu** (Unified Analytics, Content OS, Service OS, Fuel AI, platformní API, permissions, Teams).

Základní rozpad podle interních roadmap (2023–2026):

- **Analytics & Intelligence / Unified Analytics**
- **Social & Web Listening**
- **Social Media Management & Content Creation**
- **Community Management & Digital Care**
- **Service OS (Care, Chatbot, Knowledge Base, VoC, Agent Analytics)**
- **Commerce & Live Advisor**
- **UGC & Ratings & Reviews**
- **Platform / Shared Experiences (Content OS, Experience Layer, Public APIs, Trust Layer, Fuel)**

Vybrané interní zdroje s roadmapami a vizemi:

- Emplifi 2023 Roadmap  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
- Emplifi Releases and Roadmap – Official  
  https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk
- All Hands 2024 – Product & Design (Content OS, Service OS, Fuel)  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk
- Social Marketing Cloud – Functional Requirements (RFT)  
  https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements

---

## 2. Platform & Shared Capabilities

Tato sekce popisuje modulární schopnosti, které jsou **společné napříč celou platformou**.

### 2.1 Unified Analytics (UA)

**Definice**  
Unified Analytics je centrální analytický modul Emplifi platformy, který sjednocuje metriky a reporty napříč marketingem, commerce a care. Je to „jediný zdroj pravdy“ pro data a reporting v rámci platformy.

- Pitch deck a detailnější popis:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

**Oblast / cloud**  
Analytics & Intelligence / Platform

**Hlavní uživatelé / persony**

- Marketing Manager, Social Media Manager
- CX / Care Manager
- E‑commerce Manager
- Data / Business Analyst
- Management / Executives

**Hlavní use‑casy**

- Sledovat **výkon napříč produkty** (social marketing, commerce, care) v jednom prostředí.
- Tvořit **dashboardy** pro různé persony (exekutiva, regiony, týmy).
- Porovnávat **kampaně, kanály a obsah** a hledat, co funguje nejlépe.
- Připravovat **reporty pro klienty / management** na jednotném datovém modelu.

**Klíčové funkce**

- Interaktivní widgety (zoom, filtrace, detailní drill‑down).
- Podpora více typů dat: social organics, paid ads, listening, care metriky, commerce metriky.
- Vytváření a správa **boardů / dashboardů**.
- Sdílení reportů, export (např. CSV, PDF).
- Možnost obejít se bez více nástrojů/integrací – UA je centrální.

**Datové zdroje a výstupy**

- **Zdrojová data**:
  - Social & paid (FB/IG/TikTok/…)
  - Listening (zmínky, sentiment, témata)
  - Care (cases, SLA, handle time, satisfaction)
  - Commerce (Live Advisor, konverze, web events)
  - UGC & Ratings & Reviews (počet, kvalita, engagement)
- **Výstupy**:
  - Interaktivní dashboardy v UA UI
  - Exportované soubory (CSV/PDF)
  - Data pro AI shrnutí (AI‑powered widget insights)

**Napojení na ostatní moduly**

- Čte data z: Content Publishing, Listening, Community, Care, Live Commerce, UGC/R&R.
- Slouží jako primární datový vstup pro **Fuel AI Copilot** a další AI služby.
- Integruje se s **Public Platform APIs** pro ingest i export dat.

**Role AI**

- **AI‑powered widget insights** (podle Releases deck): automatická textová shrnutí trendů a doporučení v dashboardech.
- Datová základna pro **Fuel** – AI pak na výsledcích navrhuje taktiky a další kroky.

**Technické / architektonické poznámky**

- UA staví na sjednoceném datovém modelu pro všechny produkty.
- Přístup přes Emplifi Suite UI, s použitím sdíleného API layeru (např. `api.emplifi.io`).

---

### 2.2 Platform Intelligence Engine (PIE) & Flow Automations

**Definice**  
Platform Intelligence Engine (PIE) a Flow Automations jsou **platformní orchestrace a automatizační vrstva**, která umožňuje vytvářet pravidla a workflow napříč produkty: od marketingu, přes community a care, až po commerce.

**Oblast / cloud**  
Platform / Intelligence / Automations

**Hlavní uživatelé / persony**

- Product a ops týmy klienta (Marketing Ops, CX Ops)
- Power users / administrátoři
- Interní týmy Emplifi (pro definici předpřipravených flow)

**Hlavní use‑casy**

- Automatické **tagování** a směrování konverzací (např. v Community/Care).
- Spouštění **kampaní či follow‑upů** na základě chování (web events, engagement, nákupy).
- Propojování triggerů z jednoho produktu (např. Listening alert) s akcemi v jiném produktu (Care case, kampaně, alerts).

**Klíčové funkce**

- Definice spouštěčů (triggery: zmínka, komentář, case, nákup, změna metriky).
- Definice akcí (actions: vytvoř case, pošli upozornění, přiděl tag, přidej do kampaně).
- Šablony pro časté scénáře (např. negativní zmínka → Care case).
- Napojení na AI (např. AI detekce spamu, klasifikace témat).

**Datové zdroje a výstupy**

- Vstupy: eventy z marketingu, care, commerce (obsah, konverzace, cases, nákupy).
- Výstupy: nové objekty (cases, alerts, tasks), změněná metadata (tagy, priority), notifikace.

**Napojení na ostatní moduly**

- Přímo ovládá/ovlivňuje Community, Care, Listening, UA, Commerce.
- Je podklad pro **AI‑based automations** (doporučování nebo plně automatizované toky).

**Role AI**

- AI využívaná pro:
  - klasifikaci obsahu nebo zpráv,
  - detekci spamu,
  - doporučení „next best action“ v rámci flow.

**Technické / architektonické poznámky**

- Centrální orchestrace – modul není typicky „viditelný“ jako samostatná UI aplikace, ale projevuje se funkcionalitou napříč systémem.
- Rozšiřitelný o další typy triggerů a akcí.

---

### 2.3 Content OS

**Definice**  
Content OS je **společná content infrastruktura** pro Emplifi platformu. Slouží jako jednotný digitální content backbone – jedno místo pro ukládání, správu, opakované použití a analýzu obsahu napříč social, webem, reklamami a commerce.

**Oblast / cloud**  
Platform / Content Infrastructure

**Hlavní uživatelé / persony**

- Social Media Manager, Content Manager
- Creative teams
- E‑commerce a brand teams

**Hlavní use‑casy**

- Ukládat a spravovat obsah (vizuály, videa, texty) pro **social, ads, web, commerce**.
- Recyklovat a znovu využívat obsah v různých kanálech.
- Propojit obsah s **výkonem** (metriky v UA) a s dalšími moduly (Care odpovědi, chatbot nápověda, commerce výpisy).

**Klíčové funkce**

- Centrální knihovna obsahů (assets).
- Metadata pro obsah (tagy, témata, kampaně, jazyky, regiony).
- Napojení na publishing (pro social), commerce (product detail, landing pages), care (knowledge odpovědi).
- Podpora AI při vytváření a optimalizaci obsahu (v kombinaci s Fuel).

**Datové zdroje a výstupy**

- Vstupy: nahraný obsah, import z externích zdrojů, uživatelský obsah (UGC).
- Výstupy: obsah připravený pro distribuci do modulů (Publisher, Live Advisor, Chatbot, Knowledge Base).

**Napojení na ostatní moduly**

- Publikační modul (Publisher/Planner), Influencers, UGC, Commerce front‑endy.
- Care / Chatbot / Knowledge Base (sdílené assety a šablony).
- UA (výkonový reporting navázaný na konkrétní assety).

**Role AI**

- Generování návrhů obsahu, variací, shrnutí.
- Doporučení, který obsah znovu použít nebo zvýraznit.

**Technické / architektonické poznámky**

- Content OS je navržen tak, aby zabránil fragmentaci obsahu (stejný asset v různých silách).
- Úzce integrovaný s dalšími platformními službami (permissions, Teams, Fuel).

---

### 2.4 Service OS

**Definice**  
Service OS je **platformní vrstva pro péči o zákazníky**, která sjednocuje case management, routing, knowledge base, chatbota, VoC a analytiku agentů. Cílem je přechod od „assist“ k „resolve“ – tj. nejen reagovat, ale vyřešit zákaznické problémy napříč kanály.

**Oblast / cloud**  
Platform / Service

**Hlavní uživatelé / persony**

- Head of Customer Care, CX Director
- Care Manager / Supervisor
- Care Agent
- Chatbot / Knowledge Base owner

**Hlavní use‑casy**

- Centralizovaný **case management** z různých kanálů.
- **Routing** a prioritizace případů podle SLA, tématu, hodnoty zákazníka.
- Podpora agentů znalostní bází a chatbotem.
- Měření výkonu (AHT, FCR, CSAT, NPS, agent productivity).

**Klíčové funkce**

- Jednotný model case.
- Integrovaný **Knowledge Base** a **Chatbot**.
- Podpora multi‑kanálů: social, web chat, email, telefon (přes integrace), reviews.
- Agent desktop, který sjednocuje informace o zákazníkovi.

**Datové zdroje a výstupy**

- Vstupy: konverzace z Community, web chat, chatbot dialogs, VoC feedback, email, volání (přes integrace).
- Výstupy: vyřešené cases, knowledge články, záznamy konverzací, metriky pro UA.

**Napojení na ostatní moduly**

- Community (eskalace z Community → Care case v rámci Service OS).
- Chatbot, Knowledge Base, VoC – běží nad Service OS.
- Unified Analytics pro reporting.

**Role AI**

- AI routing, shrnutí konverzací, návrhy odpovědí.
- Identifikace trendů ve stížnostech a příležitostí pro zlepšení.

**Technické / architektonické poznámky**

- Service OS sjednocuje dříve oddělené funkce (Care, Chatbot, VoC, Knowledge Base) na jedné datové vrstvě.
- Části vize jsou detailněji rozpracované v All Hands 2024:  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk

---

### 2.5 Emplifi Teams & Permissions

**Definice**  
Emplifi Teams a permissions poskytují **governance vrstvu**, která umožňuje strukturovat účty, uživatele a práva v rámci celé platformy.

**Oblast / cloud**  
Platform / Governance & Security

**Hlavní uživatelé / persony**

- Admini účtu (Account Admin, IT, Security)
- Týmoví leadři (Marketing Lead, CX Lead)

**Hlavní use‑casy**

- Oddělení dat a přístupů mezi regiony, značkami, odděleními.
- Řízení toho, kdo může publikovat, moderovat, vytvářet kampaně, pracovat s daty.
- Předpříprava bezpečných sandboxů pro AI a automatizace.

**Klíčové funkce**

- Týmy (Teams) jako logické skupiny uživatelů a zdrojů (accounts, pages, workspaces).
- Role‑based access control (RBAC).
- Nastavení práv pro publikaci, moderaci, správu modulů.

**Datové zdroje a výstupy**

- Vstupy: uživatelé, role, spojení na identity provider (SSO).
- Výstupy: policy enforcement v rámci celé platformy.

**Napojení na ostatní moduly**

- Všechna UI a API volání respektují nastavení Teams a rights.
- Základ pro **Trust Layer** a bezpečné AI.

**Role AI**

- Omezení toho, co AI agent může dělat (v rámci Teams, scopes a rolí).

**Technické / architektonické poznámky**

- Teams jsou klíčové při návrhu multi‑brand / multi‑region prostředí.
- Governance a Teams jsou pokryté v interních deckách (Teams/governance materiály).

---

### 2.6 Trust Layer

**Definice**  
Trust Layer je **vrstva ochrany a governance pro AI a automatizace**. Zajišťuje, že AI agenti i automatizace jednají v definovaných mezích, s ohledem na bezpečnost, compliance a kvalitu.

**Oblast / cloud**  
Platform / AI Safety & Governance

**Hlavní uživatelé / persony**

- Platform / IT / Security
- Product & AI teams
- Právní / compliance

**Hlavní use‑casy**

- Určit, jaká data může AI číst, jaké akce může provádět.
- Nastavit pravidla pro audit, logging a explainability.
- Zabránit nechtěné automatizaci (např. masové smazání obsahu).

**Klíčové funkce**

- Policy management pro AI agenty.
- Monitoring a logging AI akcí.
- Možnost ručně či automaticky zastavit rizikové akce.

**Datové zdroje a výstupy**

- Vstup: AI požadavky (čtení/psaní), uživatelská práva, auditní logy.
- Výstupy: povolené/odmítnuté akce, auditní záznamy.

**Napojení na ostatní moduly**

- Fuel, Copiloti, Flow Automations – všechny AI‑driven akce dochází přes Trust Layer.

**Role AI**

- Trust Layer typicky využívá AI minimálně; spíše uplatňuje rozhodovací logiku a pravidla.

**Technické / architektonické poznámky**

- Koncept zmíněný v All Hands 2024 (část o Fuel a AI):  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk

---

### 2.7 Fuel & Fuel AI Copilot

**Definice**  
Fuel je **operační systém pro řízení strategie a taktiky** napříč Emplifi platformou. Fuel AI Copilot (někdy přezdíván „The Wisdom“) je inteligentní asistent, který na základě dat (UA, Service OS, Content OS atd.) navrhuje taktiky, priority a další kroky.

**Oblast / cloud**  
Platform / AI & Strategy

**Hlavní uživatelé / persony**

- Marketing Leadership, CX Leadership
- Strategičtí plánovači
- Product marketing, category managers

**Hlavní use‑casy**

- Definovat **strategické cíle** a rozpadnout je do taktik a úkolů.
- Propojit cíle s daty v UA a ostatních modulech.
- Používat AI copilot pro návrh kroků „co dělat dál“.

**Klíčové funkce**

- Objectives & Tactics – definice cílů a taktik.
- Napojení na data (co se daří / nedaří).
- AI doporučení a vysvětlování (proč navrhuje určité kroky).

**Datové zdroje a výstupy**

- Vstupy: data z UA, modulů (performance), user input (cíle).
- Výstupy: doporučené taktiky, priorizované seznamy aktivit.

**Napojení na ostatní moduly**

- Fuel čte z UA, Service OS, Content OS.
- Může spouštět akce přes Flow Automations.

**Role AI**

- Srdce Fuelu – AI analyzuje data, navrhuje taktiky a shrnuje situaci.
- Roadmapa a priorizace AI funkcí je rozvedená v AI integration roadmap:  
  https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk

**Technické / architektonické poznámky**

- Fuel je vrstva nad stávajícími produkty, není izolovaným produktem.
- Dlouhodobý cíl: AI‑first řízení celé customer journey přes Fuel.

---

## 3. Social Marketing & Analytics

### 3.1 Content Publishing & Planner (Publisher, Calendar)

**Definice**  
Content Publishing & Planner je modul (nebo sada modulů) pro plánování, tvorbu, schvalování a publikaci obsahu na sociální sítě a další digitální kanály.

**Oblast / cloud**  
Social Media Management & Content Creation

**Hlavní uživatelé / persony**

- Social Media Manager
- Content Creator
- Brand Manager
- Legal / Compliance (schvalování)

**Hlavní use‑casy**

- Plánování kalendáře příspěvků pro různé kanály, regiony a značky.
- Tvorba a schvalování postů, včetně workflow.
- Publikace v nejlepším čase podle dat a doporučení.
- Propojení s kampaněmi a výsledky v UA.

**Klíčové funkce**

- Kalendář (Calendar) s kampaněmi a jednotlivými posty.
- WYSIWYG editor pro posty, multi‑channel publikace.
- Approval workflow (draft → review → approve → publish).
- Napojení na Content OS (jednotné assety).
- Základní analytika úspěšnosti postů (přes UA).

**Datové zdroje a výstupy**

- Vstupy: obsah a briefy z Content OS, externí inspirace.
- Výstupy: publikované posty, kampaně a jejich metriky v UA.

**Napojení na ostatní moduly**

- Content OS (zdroj assetů),
- UA (výkon obsahu),
- Fuel (cíle a taktiky),
- Community (reakce a engagement, který pak řeší moderátoři).

**Role AI**

- AI může navrhovat texty, vizuály, optimum publishing times.
- AI shrnutí výkonu kampaní.

**Technické / architektonické poznámky**

- Součást Social Marketing Cloud – viz RFT:  
  https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements

---

### 3.2 Social & Web Listening

**Definice**  
Listening modul umožňuje **sledovat zmínky o značce, produktech, konkurenci a tématech** napříč sociálními sítěmi a webem. Poskytuje přehled o sentimentu, tématech, trendech a rizicích.

**Oblast / cloud**  
Analytics & Intelligence / Listening

**Hlavní uživatelé / persony**

- Brand Manager
- PR / Communications
- Market Research, Competitive Intelligence
- CX Analyst

**Hlavní use‑casy**

- Monitorovat, jak se o značce mluví v reálném čase.
- Identifikovat krize, negativní trendy, virální témata.
- Porovnat značku s konkurenty.
- Hledat zákaznické insighty pro produkt a marketing.

**Klíčové funkce**

- Tvorba Listening queries (boolean dopyty).
- Dashboardy pro sentiment, volume, témata, geografii.
- Alerts pro kritické situace.
- Integrace s UA pro reporting.

**Datové zdroje a výstupy**

- Vstupy: social data, webové zdroje (podle integrací).
- Výstupy: zmínky, témata, alerty, dashboards.

**Napojení na ostatní moduly**

- Community / Care: negativní zmínky mohou být eskalovány jako cases.
- UA: agregované metriky listeningu.
- Fuel: insighty vstupují do strategických doporučení.

**Role AI**

- AI pomáhá tvořit dotazy (AI Query Copilot – převod přirozeného jazyka na boolean).
- AI pro detekci témat a klasifikaci sentimentu.

**Technické / architektonické poznámky**

- Listening je postaven nad ingest vrstvou social/web dat, využívá vlastní indexy pro rychlé dotazování.

---

### 3.3 Influencers & Creators

**Definice**  
Modul pro správu influencer a creator kampaní – od výběru, přes kampaně, až po reporting.

**Oblast / cloud**  
Social Marketing

**Hlavní uživatelé / persony**

- Influencer Marketing Manager
- Brand Manager
- Agency partners

**Hlavní use‑casy**

- Najít a vybrat vhodné influencery.
- Spravovat spolupráce a rozpočty.
- Vyhodnocovat výkon influencer kampaní.

**Klíčové funkce**

- Databáze influencerů/creatorů (profil, audience, performance).
- Kampaně (briefy, schválení, trackování postů).
- Reporting v UA.

**Datové zdroje a výstupy**

- Vstupy: data o influencerech, jejich výkonnost.
- Výstupy: kampaně, reporty, závěry pro další spolupráce.

**Napojení na ostatní moduly**

- Content Publishing (spolupráce na obsahu).
- UA (výkon kampaní).

**Role AI**

- Doporučení vhodných influencerů dle tématu, cílovky a historie.

**Technické / architektonické poznámky**

- Často integrace s externími datovými zdroji (influencer odkazy / API).

---

## 4. Community & Care

### 4.1 Community Management

*(Tento modul byl již rozepsán výše, zde stručnější rekapitulace)*

**Definice**  
Modul pro správu a moderaci veškeré konverzace na sociálních sítích a dalších digitálních kanálech v jednotném inboxu.

**Oblast / cloud**  
Community Management & Digital Care

**Hlavní uživatelé / persony**

- Community Manager
- Social Media Manager
- Care Agent (společné týmy)

**Use‑casy, funkce, integrace, role AI, technické poznámky**  
Viz detailní popis v sekci 2.3 výše (Community Management).

---

### 4.2 Care (Digital Care / Agent)

**Definice**  
Care je modul pro **digitální péči o zákazníky** – case management, routing, SLA, řešení dotazů, problémů a stížností napříč kanály. Je součástí Service OS.

**Oblast / cloud**  
Service OS / Care

**Hlavní uživatelé / persony**

- Care Agent
- Supervisor
- CX Manager
- Quality / Training

**Hlavní use‑casy**

- Přijímat a řešit zákaznické požadavky z více kanálů (social, web chat, email, reviews).
- Sledovat SLA, čas do vyřešení, spokojenost.
- Zajistit konzistentní komunikaci díky šablonám a knowledge base.
- Eskalace složitých případů mezi týmy.

**Klíčové funkce**

- Case management (vytvoření, přiřazení, změna stavu).
- SLA management, fronty, priority.
- Agent desktop (historie zákazníka, kontext konverzací).
- Napojení na Knowledge Base a Chatbot.

**Datové zdroje a výstupy**

- Vstupy: konverzace a dotazy z Community, chatbotů, web chat, email.
- Výstupy: vyřešené cases, SLA statistiky, CSAT, NPS.

**Napojení na ostatní moduly**

- Community (zdroj cases).
- Service OS (infrastruktura, knowledge, chatbot, VoC).
- UA (reporting Care výkonu).
- Fuel (AI navrhuje zlepšení v procesech).

**Role AI**

- AI návrhy odpovědí (na základě knowledge base a historie).
- Shrnutí konverzací pro rychlou orientaci agenta.
- AI‑based routing (priority, témata, vhodný tým).

**Technické / architektonické poznámky**

- Care běží na Service OS; modul Core často oddělen od UI (Agent desktop).
- Viz detailnější vize a roadmap v All Hands 2024 (Service OS).

---

### 4.3 Chatbot & Conversational

**Definice**  
Chatbot modul poskytuje **automatizovanou konverzační vrstvu** – textové a případně hlasové boti, kteří zodpovídají dotazy, sbírají informace, směrují požadavky a mohou řešit část case bez zásahu agenta.

**Oblast / cloud**  
Service OS / Conversational

**Hlavní uživatelé / persony**

- CX / Care Manager
- Chatbot owner / Knowledge Manager
- IT / Integrations

**Hlavní use‑casy**

- 24/7 self‑service pro časté dotazy.
- Před‑kvalifikace a sběr informací před předáním agentovi.
- Kampaně (např. produktové, promo, cross‑sell/up‑sell).

**Klíčové funkce**

- Konverzační scénáře (flows).
- Napojení na Knowledge Base.
- Handover na živého agenta (Care).
- Integrace s webem (widget), mobilními aplikacemi a sociálními kanály.

**Datové zdroje a výstupy**

- Vstupy: dotazy uživatelů, knowledge base články.
- Výstupy: vyřešené dotazy, přesměrované cases, strukturovaná data (např. formulář přes chat).

**Napojení na ostatní moduly**

- Knowledge Base (zdroj odpovědí).
- Care (předání complicated cases).
- UA (reporting chatbot usage a resolution rate).

**Role AI**

- LLM‑based odpovědi, pokud jsou povoleny.
- AI pro rozpoznání záměru (intent) a entity.
- AI pro generování a úpravu odpovědí.

**Technické / architektonické poznámky**

- Součást Service OS, integrace do Experience Layer (web widget).

---

### 4.4 Knowledge Base

**Definice**  
Knowledge Base (KB) je centrální úložiště článků a znalostí, které využívají jak agenti, tak chatboti a další moduly pro **konzistentní a rychlé odpovědi**.

**Oblast / cloud**  
Service OS / Knowledge

**Hlavní uživatelé / persony**

- Knowledge Manager
- Care Agent
- Chatbot owner

**Hlavní use‑casy**

- Poskytnout agentům odpovědi během konverzací.
- Umožnit chatbotům čerpat z ověřených znalostí.
- Udržovat konzistentní know‑how napříč organizací.

**Klíčové funkce**

- Strukturované články, FAQ, postupy.
- Tagování podle témat, produktů, zemí.
- Verzování a workflow pro aktualizace.

**Datové zdroje a výstupy**

- Vstupy: interní dokumentace, procesy, produktové informace.
- Výstupy: znalostní články využívané v Care, Chatbotu, AI.

**Napojení na ostatní moduly**

- Chatbot (odpovědi).
- Care (suggested articles).
- Fuel (AI navrhuje, jaké články vytvořit).

**Role AI**

- AI generuje drafty článků, shrnutí, přepis konverzací do článků.
- AI pomáhá doporučit články v reálném čase.

**Technické / architektonické poznámky**

- Znalosti mohou být uložené v Emplifi nebo integrovány z externích KB.

---

### 4.5 Voice of Customer (VoC)

**Definice**  
Voice of Customer je modul pro **sběr, analýzu a akci na základě zpětné vazby zákazníků** (ankety, formuláře, NPS, CSAT, reviews apod.).

**Oblast / cloud**  
Service OS / VoC

**Hlavní uživatelé / persony**

- CX/VoC Manager
- Product Manager
- Marketing Insights

**Hlavní use‑casy**

- Sledovat NPS, CSAT, CES a další metriky.
- Získávat kvalitativní insighty z komentářů a odpovědí.
- Identifikovat problémy, které je třeba řešit.

**Klíčové funkce**

- Tvorba survey kampaní a formulářů.
- Analýza výsledků (kvantitativní i kvalitativní).
- Segmentace podle segmentu, regionu, produktu.

**Datové zdroje a výstupy**

- Vstupy: odpovědi z anket, reviews, contact forms.
- Výstupy: VoC dashboards, insighty, podklady pro product/marketing změny.

**Napojení na ostatní moduly**

- UA (reporting VoC).
- Care (follow‑up na negativní zpětnou vazbu).
- Fuel (strategická doporučení na základě VoC).

**Role AI**

- AI analýza textových odpovědí (témata, sentiment, root causes).
- AI generované shrnutí „co nám zákazníci říkají“.

**Technické / architektonické poznámky**

- VoC může ingestovat data i z externích platforem (např. surveys, app store reviews), pokud jsou integrace.

---

## 5. Commerce & Live Commerce

### 5.1 Live Advisor / Live Commerce

*(Detailní popis už výše v sekci 3.3; zde shrnutí)*

**Definice**  
Live Advisor / Live Commerce je modul pro **live video prodej a poradenství** (1:1 i 1:N) na webu zákazníka, který zvyšuje konverze a zlepšuje CX.

**Oblast / cloud**  
Commerce / Live Advisor

**Hlavní uživatelé / persony**

- E‑commerce Manager
- Live Advisor / Sales staff
- Marketing kampaně

**Hlavní use‑casy**

- Poskytnout osobní konzultaci přímo na webu.
- Pořádat live stream kampaně.
- Měřit dopad live interakcí na tržby.

**Klíčové funkce, datové zdroje, integrace, role AI, technické poznámky**  
Viz detail v sekci 3.3 a Emplifi 2023 Roadmap:  
https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

---

### 5.2 UGC (User Generated Content)

**Definice**  
UGC modul umožňuje **sbírat, kurátorovat a publikovat obsah vytvořený zákazníky** (fotky, videa, recenze, příspěvky) na web, do kampaní a dalších kanálů.

**Oblast / cloud**  
Commerce / Marketing

**Hlavní uživatelé / persony**

- E‑commerce a digital marketing
- Social Media Manager
- Brand Manager

**Hlavní use‑casy**

- Zobrazovat autentický obsah od zákazníků na e‑shopu.
- Použít UGC v marketingových kampaních.
- Zvyšovat důvěru a konverze.

**Klíčové funkce**

- Sbírání UGC (hashtag kampaně, zmínky, přímé nahrání).
- Právní souhlasy (rights management).
- Kurátorství a schválení UGC.
- Publikace na web (galerie, carousel, produktové stránky).

**Datové zdroje a výstupy**

- Vstupy: social data, uploady.
- Výstupy: schválené UGC publikované na webu, v kampaních.

**Napojení na ostatní moduly**

- Content OS (uložení assetů).
- UA (výkon UGC widgetů).
- Ratings & Reviews (doprovodný obsah).

**Role AI**

- AI doporučuje nejlepší UGC pro danou stránku/kampaň.
- Automatická klasifikace (produkt, téma, kvalita).

**Technické / architektonické poznámky**

- UGC modul typicky obsahuje widgety pro embed do webu (Experience Layer).

---

### 5.3 Ratings & Reviews

**Definice**  
Ratings & Reviews modul spravuje produktové recenze a hodnocení, jejich moderaci, zobrazení na webu a analýzu.

**Oblast / cloud**  
Commerce / VoC

**Hlavní uživatelé / persony**

- E‑commerce Manager
- Product Manager
- CX/VoC Manager

**Hlavní use‑casy**

- Zobrazovat recenze a hodnocení na produktových stránkách.
- Moderovat a odpovídat na recenze (včetně integrace s Care/Community).
- Analyzovat recenze pro produktový vývoj a marketing.

**Klíčové funkce**

- Sběr a správa recenzí.
- Moderace a odpovědi (často přes Community/Care workflow).
- Widgety pro zobrazení na webu.
- Analýza sentimentu, témat.

**Datové zdroje a výstupy**

- Vstupy: zákaznické recenze (web, marketplaces).
- Výstupy: viditelné recenze, datové insighty, metriky (rating, topics).

**Napojení na ostatní moduly**

- Care/Community (odpovědi na recenze).
- UA (reporting performance).
- VoC (součást hlasu zákazníka).

**Role AI**

- AI sumarizace recenzí (shrnutí plusů/mínusů).
- AI doporučení prioritních oblastí zlepšení.

**Technické / architektonické poznámky**

- Často integrace s e‑commerce platformami a marketplaces.

---

### 5.4 Experience Layer & Unified CTA

**Definice**  
Experience Layer je vrstva, která poskytuje **jednotné zákaznické rozhraní** (Unified CTA) na webu – jedna „brána“ k chatu, live videu, UGC, reviews, formulářům a dalším interakcím.

**Oblast / cloud**  
Commerce / Platform / Experience

**Hlavní uživatelé / persony**

- E‑commerce Manager
- CX/UX Designer
- IT/Web dev

**Hlavní use‑casy**

- Nabídnout návštěvníkům různorodé interakce bez roztříštěnosti (jedno CTA).
- Orchestrace mezi chatem, live videem, formuláři, UGC, recenzemi.

**Klíčové funkce**

- Jednotné CTA na webu (widget, overlay).
- Konfigurace, co je uvnitř (chat, call, live, feedback, UGC atd.).
- Napojení na Experience OS a Flow Automations.

**Datové zdroje a výstupy**

- Vstupy: konfigurace v Emplifi, kontext návštěvníka (URL, produkt, segment).
- Výstupy: otevřené interakce (chaty, live sessions, formuláře).

**Napojení na ostatní moduly**

- Chatbot, Care, Live Advisor, UGC, Ratings & Reviews, VoC.
- UA (metriky interakcí Experience Layer).

**Role AI**

- AI rozhoduje, jaké CTA a obsah zobrazit (personalizace).
- AI doporučení „next best action“ v Experience Layer.

**Technické / architektonické poznámky**

- Popsáno v 2023 Roadmap – Experience Layer:  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

---

## 6. AI‑first nadstavby (2025–2026)

### 6.1 AI Copiloti a agenti

**Definice**  
AI copilot a agenti jsou **inteligentní asistenti**, kteří fungují napříč produkty (marketing, care, commerce) a pomáhají uživatelům při analýze, rozhodování a vykonávání úkonů.

**Oblast / cloud**  
Platform / AI

**Hlavní use‑casy**

- Copilot v UA (shrnutí dat, doporučení).
- Copilot v Care (návrhy odpovědí, shrnutí case).
- Copilot v Publishingu (návrhy obsahu, optimalizace kampaní).
- Copilot v Commerce (doporučení produktů, live podpora).

**Klíčové funkce**

- Konverzační rozhraní (chat s AI).
- Schopnost číst data z modulů.
- Schopnost navrhovat a někdy provádět akce (v mezích Trust Layeru).

**Reference**

- AI integration roadmap:  
  https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
- Product priorities 2025 (codeless AI labeling, AI summarization, topic recommendation apod.):  
  https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

---

## 7. Závěr a doporučení pro použití jako AI knowledge base

- **Konzistence struktury**:  
  Při rozšiřování dokumentu o další moduly/feature se drž stejné šablony (Definice, Oblast, Persony, Use‑casy, Funkce, Data, Integrace, AI, Technika).

- **Odkazy na zdroje**:  
  Vždy, když existuje detailní interní dokument (deck, Confluence, RFT), přidej URL. AI pak může propojit high‑level popis s upřesňujícími materiály.

- **Verzování**:  
  Doporučuje se tento Markdown udržovat jako „živý dokument“ (např. v repozitáři nebo v Confluence – Live Doc) a při větších změnách modulů ho aktualizovat.

- **Další možné rozšíření**:
  - Detailnější rozpis pod‑modulů (např. konkrétní typy dashboardů v UA, konkrétní flows v Chatbotu).
  - Technické sekce zaměřené čistě na architekturu (mikroslužby, datasources, schema).
  - Přidání slovníčku pojmů, zkratek a interních kódů (ANA, COM, CARE, UA, SCC atd.).


# Emplifi Platform – Kompletní znalostní báze (moduly, dashboardy, scénáře, datové vazby)

## 0. Účel dokumentu

Tento dokument slouží jako **znalostní báze pro AI a interní týmy** Emplifi.  
Cílem je:

- poskytnout **ucelený přehled Emplifi platformy**,
- popsat **jednotlivé moduly** (co dělají, pro koho jsou, jaké problémy řeší),
- vysvětlit **vztahy mezi moduly** a nadstavbové **AI schopnosti**,
- ukázat **konkrétní příklady UA dashboardů**,
- popsat **end‑to‑end scénáře** napříč produkty,
- a doplnit **Listening mini‑scénáře** + **technické datové vazby UA ↔ Care ↔ UGC**.

Struktura:

- 1–6: katalog modulů (platforma, marketing, care, commerce, AI),
- 7: konkrétní UA dashboardy,
- 8: end‑to‑end scénáře,
- 9: Listening mini‑scénáře,
- 10: technické datové vazby UA ↔ Care ↔ UGC,
- 11: shrnutí pro AI.

Klíčové interní zdroje (roadmapy, decky):

- Emplifi 2023 Roadmap  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
- Emplifi Releases and Roadmap – Official  
  https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk
- All Hands 2024 – Product & Design (Content OS, Service OS, Fuel)  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk
- Social Marketing Cloud – Functional Requirements (RFT)  
  https://emplifi.atlassian.net/wiki/spaces/RFT/pages/5382242340/Social+Marketing+Cloud+-+Functional+Requirements
- Unified Analytics pitch  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk
- AI Integration Roadmap  
  https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk
- 2025 Product Priorities (AI features)  
  https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

---

## 1. Emplifi jako jednotná platforma

Emplifi je **sjednocená platforma pro customer engagement a customer experience**, která kombinuje:

- **Marketing**
  - Social media management, publishing, analytics
  - Social & web listening
  - Influencer & creator management
  - Content & campaign orchestration
- **Care / Service**
  - Digital care (cases, omnichannel)
  - Chatbot & web chat
  - Knowledge base
  - Voice of Customer (VoC)
  - Agent analytics a QA
- **Commerce**
  - Live Advisor / Live Commerce
  - UGC (User Generated Content)
  - Ratings & Reviews
  - Web Experience layer (Unified CTA)
- **Platform & Shared Capabilities**
  - Unified Analytics
  - Content OS
  - Service OS
  - Platform Intelligence Engine (PIE) & Flow Automations
  - Emplifi Teams & Permissions
  - Trust Layer
  - Fuel & AI Copiloti

---

## 2. Platform & Shared Capabilities

### 2.1 Unified Analytics (UA)

#### Definice

Unified Analytics je **centrální analytický modul** Emplifi platformy. Sjednocuje metriky a reporty napříč marketingem, commerce a care a slouží jako hlavní reportingové rozhraní pro zákazníky i interní týmy.

- Pitch a produktová vize:  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

#### Oblast / cloud

Analytics & Intelligence / Platform

#### Hlavní uživatelé / persony

- Marketing Manager, Social Media Manager
- CX / Care Manager
- E‑commerce Manager
- Data / Business Analyst
- C‑level a leadership týmy

#### Hlavní use‑casy

- Mít **jednotný pohled** na výkon marketingu, commerce a care v jednom nástroji.
- Tvořit **dashboardy** a reporty pro různé role (C‑level, region, produkt, tým).
- Analyzovat **kampaně, kanály, obsah, care výkonnost** a commerce výsledky.
- Identifikovat **trendy a anomálie** v datech (růst/pokles, outliery).

#### Klíčové funkce a pod‑moduly UA

1. **Cross‑channel Dashboards**
   - Přehled výkonnosti napříč kanály (social, paid, care, commerce).
   - Filtry podle času, kanálu, účtu, týmu, kampaně, regionu.

2. **Social & Content Performance Reports**
   - Výkon organického a placeného obsahu (reach, engagement, CTR, conversions).
   - Analýza podle typů postů, kampaní, formátů, kreativ.

3. **Care & Service Reports**
   - Počet a objem cases, průměrná doba řešení, backlog.
   - SLA adherence, CSAT, NPS.

4. **Commerce & Experience Reports**
   - Výkon Live Advisor / Live Stream (viewers, engagement, conversion, revenue).
   - Výkon UGC widgetů a reviews (impact na konverze).

5. **Customer Journey & Funnel Views**
   - Reporty typu „from impression → engagement → conversion → care“.

6. **Custom Dashboards & Widgets**
   - Vytváření vlastních dashboardů z předpřipravených widgetů.
   - Sdílení, případné embedování.

7. **AI‑powered Widget Insights**
   - AI shrnutí trendů a doporučení v rámci dashboardů (viz Releases deck:  
     https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk)

#### Datové zdroje a výstupy

- **Vstupy:**
  - Social a paid data z připojených sítí.
  - Listening data (volume, sentiment, topics).
  - Care/Service OS data (cases, CSAT, NPS, AHT).
  - Commerce data (Live Commerce, UGC, Ratings & Reviews).
  - VoC data (surveys, feedback).
- **Výstupy:**
  - Interaktivní dashboardy v UA.
  - Exporty (CSV, PDF – dle podpory).
  - Datové podklady pro AI (Fuel, Copiloti).

#### Napojení na ostatní moduly

- UA **konzumuje data** ze všech produktových modulů.
- UA poskytuje **agregované informace** pro:
  - Fuel (AI taktické návrhy),
  - AI Copilot rozhraní v jednotlivých modulech (shrnutí dat),
  - Experience Layer a Commerce (widget insights).

#### Role AI

- AI generuje shrnutí a doporučení v kontextu dashboardů a widgetů.
- UA slouží jako datová základna pro AI‑driven logiku (Fuel, Flow Automations).

#### Technické / architektonické poznámky

- UA je vrstvená nad sjednoceným datovým modelem platformy.
- Přístup přes Suite UI a sdílenou API vrstvu (konceptuálně `api.emplifi.io`).

---

### 2.2 Platform Intelligence Engine (PIE) & Flow Automations

#### Definice

PIE + Flow Automations = **orchestrace a automatizace** napříč platformou. Umožňuje definovat pravidla typu:

> „Když nastane událost X, proveď akci Y za podmínky Z.“

#### Příklady pravidel

- Pokud **Listening** detekuje nárůst negativních zmínek → vytvoř alert + Care case.
- Pokud je **case v Care** nevyřešený déle než SLA → zvýšit prioritu + upozornit supervisora.
- Pokud **UGC widget** dlouhodobě klesá v engagementu → vytvořit task nebo doporučit nové kreativy přes Fuel.

#### Oblast / cloud

Platform / Intelligence / Automations

#### Hlavní uživatelé / persony

- Marketing Ops, CX Ops
- Power users / administrátoři
- Interní product/CS týmy (předpřipravené flow)

#### Klíčové funkce

- Definice spouštěčů (eventy z modulů).
- Definice akcí (vytvořit case, poslat notifikaci, tagovat, změnit prioritu, spustit kampaň).
- Šablony pro časté scénáře.
- Napojení na AI pro doporučení pravidel a detekci anomálií.

*(další sekce – persony, data, integrace, AI – analogicky jako výše)*

---

### 2.3 Content OS

#### Definice

Content OS je **společná content infrastruktura** pro Emplifi platformu. Slouží jako jednotný digitální content backbone – jedno místo pro ukládání, správu, opakované použití a analýzu obsahu napříč social, webem, reklamami a commerce.

#### Oblast / cloud

Platform / Content Infrastructure

#### Hlavní uživatelé / persony

- Social Media Manager, Content Manager
- Creative teams
- E‑commerce / brand teams

#### Hlavní use‑casy

- Ukládat a spravovat content pro více kanálů.
- Recyklovat a znovu využívat obsah.
- Propojit obsah s výkonem (UA) a s moduly (Care odpovědi, chatbot, commerce).

#### Klíčové funkce

- Centrální knihovna assetů.
- Metadata (tagy, témata, kampaně, regiony).
- Napojení na publishing, commerce front‑endy, chatbot/KB.
- Podpora AI (generování variant, shrnutí, doporučení).

---

### 2.4 Service OS

#### Definice

Service OS je **platformní vrstva pro péči o zákazníky**, která sjednocuje case management, routing, knowledge base, chatbota, VoC a agent analytics. Cíl – přechod od „assist“ k „resolve“.

#### Oblast / cloud

Platform / Service

#### Hlavní uživatelé / persony

- Head of Customer Care, CX Director
- Care Manager / Supervisor
- Care Agent
- Knowledge / Chatbot Owner

#### Hlavní use‑casy

- Centralizovaný **case management** z různých kanálů.
- **Routing** a prioritizace podle SLA, tématu, hodnoty zákazníka.
- Podpora agentů KB a chatbotem.
- Měření výkonu (AHT, FCR, CSAT, NPS).

#### Klíčové funkce

- Jednotný model case.
- Integrovaný KB a Chatbot.
- Podpora multi‑kanálů.
- Agent desktop jako jednotné UI.

---

### 2.5 Emplifi Teams & Permissions

#### Definice

Emplifi Teams a permissions poskytují **governance vrstvu**, která umožňuje strukturovat účty, uživatele a práva v rámci celé platformy.

#### Oblast / cloud

Platform / Governance & Security

#### Hlavní use‑casy

- Oddělení dat a přístupů mezi regiony, značkami, odděleními.
- Nastavení rolí a oprávnění (publishing, moderace, reporting, admin).
- Bezpečné použití AI (omezení akcí dle rolí a týmů).

---

### 2.6 Trust Layer

#### Definice

Trust Layer je **vrstva ochrany a governance pro AI a automatizace**. Zajišťuje, že AI agenty i automatizace jednají v definovaných mezích, s ohledem na bezpečnost, compliance a kvalitu.

---

### 2.7 Fuel & Fuel AI Copilot

#### Definice

Fuel je **operační systém pro řízení strategie a taktiky** napříč Emplifi platformou. Fuel AI Copilot („The Wisdom“) je inteligentní asistent, který na základě dat (UA, Service OS, Content OS atd.) navrhuje taktiky, priority a další kroky.

- All Hands 2024 – Fuel/OS:  
  https://docs.google.com/presentation/d/1G7xlliE2qJeEbXpeeXAG1MmIeCKXApVVeXdUpWbJNEg/edit?usp=drivesdk

---

## 3. Social Marketing & Analytics

### 3.1 Content Publishing & Planner (Publisher, Calendar)

#### Definice

Content Publishing & Planner je modul pro plánování, tvorbu, schvalování a publikaci obsahu na sociální sítě a další digitální kanály.

#### Pod‑moduly

- **Campaign Management** – evidence a plán kampaní.
- **Calendar View** – měsíční/týdenní/daily kalendář.
- **Post Composer** – vytváření a editace postů, multi‑channel publikace.
- **Approval Workflow** – workflow schvalování.
- **Content Performance Links** – proklik na UA reporting.

#### Hlavní use‑casy

- Plánovat kalendář postů napříč kanály.
- Organizovat kampaně a jejich obsah.
- Schvalovat a publikovat obsah v optimální čas.

---

### 3.2 Social & Web Listening

#### Definice

Listening modul umožňuje **monitorovat zmínky o značce, produktech, konkurenci a tématech** napříč sociálními sítěmi a webem.

#### Klíčové body

- Tvorba listening queries (ručně nebo přes AI Query Copilot).
- Dashboardy (volume, sentiment, topics, SoV).
- Alerts (krize, incidenty, trendové nárůsty).
- Napojení na UA, Community, Care, Fuel.

- Příklad AI Query Copilota – viz příp. LSN‑2146:  
  https://emplifi.atlassian.net/browse/LSN-2146

---

### 3.3 Influencers & Creators

*(viz dřívější popis – správa influencer kampaní, výběr, reporting v UA)*

---

## 4. Community & Care

### 4.1 Community Management (detailní rozpad)

#### Definice

Community Management = **jednotný inbox pro sociální a další digitální konverzace**, s podporou workflow, routingu, tagování a spolupráce.

#### Pod‑moduly

- Unified Inbox (všechny zprávy a komentáře).
- Assignment & Routing (přiřazení agentům/týmům).
- Tagging & Categorization (ruční/AI).
- Saved Replies & Templates.
- Internal Collaboration (poznámky, @mentions).
- Moderation Rules (spam, auto‑odpovědi).

---

### 4.2 Care (Digital Care / Agent) – detailní rozpad

#### Definice

Care je **core modul Service OS** pro správu zákaznických případů (cases). Řeší omnichannel care, routing, SLA, agent desktop a reporting.

#### Pod‑moduly

- Case Management (create/assign/status/history).
- Queues & Routing (fronty, skills‑based / priority‑based).
- SLA & Workload Management.
- Omnichannel Management (social, chat, email atd.).
- Agent Desktop (kontext zákazníka a case).
- Quality & Coaching (hodnocení kvality, tréning).
- Agent & Team Analytics.

---

### 4.3 Chatbot & Conversational

#### Pod‑moduly

- Bot Builder / Flow Editor.
- Intent & Entity Recognition.
- Knowledge‑based Q&A.
- Handover to Agent (Care).

---

### 4.4 Knowledge Base

*(centrální úložiště článků a znalostí, využívané Care i Chatbotem; AI generuje drafty a doporučuje články)*

---

### 4.5 Voice of Customer (VoC)

*(survey kampaně, NPS/CSAT, textový feedback, AI analýza témat)*

---

## 5. Commerce & Live Commerce

### 5.1 Live Advisor / Live Commerce

*(1:1 & 1:N live video, Experience Layer, commerce KPI)*  
Roadmap:  
https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

---

### 5.2 UGC (User Generated Content)

#### Definice

UGC modul umožňuje **sbírat, kurátorovat a publikovat obsah vytvořený zákazníky** (fotky, videa, příspěvky) na web a do kampaní.

#### Pod‑moduly

- Content ingestion (social, upload).
- Rights Management (souhlasy).
- Curation (výběr a schvalování).
- Product Mapping (přiřazení k produktům).
- Web Widgets (galerie na produktových stránkách).
- Performance Analytics (přes UA).

---

### 5.3 Ratings & Reviews

#### Definice

Ratings & Reviews modul spravuje produktové recenze a hodnocení, jejich moderaci, zobrazení na webu a analýzu.

#### Review Response Workflow

- Review → Community/Care workflow.
- Šablony odpovědí, schvalování.
- Reporty o době odpovědi a míře odpovědí.

---

### 5.4 Experience Layer & Unified CTA

*(jednotné CTA na webu – vstup do chatů, live, feedbacku, UGC, reviews…)*

---

## 6. AI‑first nadstavby (2025–2026)

### 6.1 AI Copiloti a agenti

#### Definice

AI copilot a agenti jsou **inteligentní asistenti** napříč produkty (marketing, care, commerce), kteří pomáhají uživatelům při analýze, rozhodování a provádění úkonů.

#### Příklady

- Marketing Copilot (v UA/Publishing).
- Care Copilot (v Agent Desktopu).
- Commerce Copilot (v Live Advisor, e‑shopu).

AI roadmap:  
https://docs.google.com/spreadsheets/d/1Veqoo8BxJfuiP9H97AAQj0QCx_ZI849nNioJdPyY4kg/edit?usp=drivesdk

---

## 7. Konkrétní příklady UA dashboardů

### 7.1 UA Dashboard: Social Performance Overview (Marketing)

**Cíl:**  
Rychlý přehled o výkonnosti organického i placeného obsahu napříč sociálními sítěmi za zvolené období.

**Typičtí uživatelé:**  
Social Media Manager, Marketing Manager, Content Lead.

#### Sekce a widgety

1. **Top‑level KPI panel**
   - Počet publikovaných postů (organic / paid)
   - Reach / impressions
   - Celkový engagement
   - Engagement rate
   - Click‑through rate (CTR)
   - Conversions
   - Spend (paid)
   - Cost per Result (CPR/CPC/CPM)

2. **Trendy v čase**
   - Engagement over time
   - Impressions over time
   - Spend vs Results (dvouosý graf)

3. **Performance by Channel**
   - Engagement by network (bar chart)
   - Share of spend by network
   - KPI tabulka per channel

4. **Top Content**
   - Tabulka top postů: asset preview, channel, engagement, CTR, conversions.

5. **Campaign Performance**
   - Kampaně vs KPI (reach, engagement, conversions, ROI).
   - Top 5 kampaní podle ROI.

6. **Audience Insights**
   - Demografie, geo.

7. **AI‑powered Insights**
   - Textové shrnutí hlavních trendů (AI generované).

---

### 7.2 UA Dashboard: Care & Service Performance (CX)

**Cíl:**  
Přehled o výkonnosti péče o zákazníky: objem, SLA, spokojenost, výkon týmů/agentů.

**Typičtí uživatelé:**  
Head of Care/CX, Care Manager, Team Leads.

#### Sekce a widgety

1. **Top‑level KPI panel**
   - New cases, resolved cases, open cases
   - Avg first response time
   - Avg resolution time
   - SLA adherence
   - Avg CSAT
   - Avg NPS

2. **Case Volume & Resolution Trends**
   - New vs Resolved over time
   - Avg resolution time over time
   - SLA adherence over time

3. **Channel Breakdown**
   - Cases by channel (social, chat, email, reviews…)
   - KPI per channel

4. **Topics / Categories**
   - Cases by topic
   - CSAT/NPS by topic

5. **Team & Agent Performance**
   - Tabulka týmů, tabulka agentů.

6. **VoC Overview**
   - CSAT/NPS by period, by channel, by topic.

7. **AI‑powered Insights**
   - Shrnutí trendů, upozornění na nárůsty problémů.

---

## 8. End‑to‑end scénáře napříč platformou

### 8.1 Scénář 1: Negativní tweet → Community → Care → VoC → UA → Fuel

1. **Negativní tweet**  
   - Vznikne zmínka na Twitteru; v Listening a Community se objeví item.

2. **Community Inbox**
   - AI detekuje negativní sentiment + complaint.
   - Tagy: `complaint`, `product_issue`.
   - Přiřazení do „High priority social complaints“.

3. **Eskalace do Care**
   - Z itemu se vytvoří `Case` v Care (Service OS).
   - Routing do správné fronty (region, jazyk, topic).

4. **Řešení v Care**
   - Agent na Agent Desktopu vidí case, KB suggestions, AI návrhy odpovědí.
   - Po vyřešení: case = resolved + měřené metriky.

5. **VoC follow‑up**
   - Po uzavření case odchází CSAT/NPS survey.
   - Odpověď = `SurveyResponse` navázaná na case.

6. **UA reporting**
   - UA agreguje data: case metrics + CSAT/NPS.
   - Zobrazení v Care & Service dashboardech.

7. **Fuel doporučení**
   - Fuel analyzuje kumulativní data (nárůst problémů, pokles CSAT).
   - AI navrhne taktiky (změna procesu, produktová změna, komunikační kampaň).

---

### 8.2 Scénář 2: UGC → Web Experience → Conversions → UA → Content Strategy

1. **Sběr UGC**
   - Zákazníci publikují UGC (social, upload).
   - UGC modul ingestuje obsah.

2. **Kurátorování a rights management**
   - Výběr kvalitního UGC.
   - Získání práv („rights approved“).

3. **Product mapping**
   - UGCAsset ↔ Product (SKU, kategorie).

4. **Zobrazení na webu (Experience Layer)**
   - UGC widget na produktových stránkách.
   - Trackování eventů (views, clicks, conversions).

5. **UA reporting**
   - UGC & Commerce dashboardy:
     - konverze z UGC,
     - výkonnost UGC per produkt/kategorie.

6. **Content & Commerce strategie**
   - Marketing/E‑commerce tým identifikuje, kde UGC funguje.
   - Fuel/AI navrhne získání víc UGC pro slabě pokryté produkty, cross‑promo atd.

---

### 8.3 Scénář 3: Marketing kampaně → Publishing → UA → AI Copilot → Optimalizace

1. **Plánování kampaně**
   - Publishing: definice kampaně, plán postů.

2. **Realizace**
   - Publikace postů / ads, sběr metrik.

3. **UA reporting**
   - Kampaně dashboard v UA.

4. **AI Copilot analýza**
   - Dotaz: „Proč kampaň X neplní cíle na IG?“
   - Copilot analyzuje UA data a vysvětluje.

5. **Optimalizace**
   - Úpravy budgetu, kreativy, timing.
   - Možná částečná automatizace přes PIE.

---

## 9. Listening – konkrétní query + reporting mini‑scénáře

### 9.1 Scénář: Monitoring vlastní značky vs konkurence

**Zadání:**  
„Chci sledovat, jak se mluví o naší značce `BrandX` vs `BrandY` v Evropě.“

#### Listening queries

1. **BrandX query – AI vstup:**

> „Monitoruj všechny zmínky o naší značce BrandX na sociálních sítích a webech v Evropě (EU), včetně běžných překlepů a zkratek.“

**Možný boolean příklad:**

```text
("BrandX" OR "Brand X" OR "#BrandX" OR "BrendX"~1)
AND lang:(en OR de OR fr OR es OR it OR cs OR pl)
AND geo:(EU)


# Emplifi Platform – Rozšířená znalostní báze pro AI agenta (Cursor skill)

Tento soubor **navazuje** na předchozí „mega MD“ a **doplňuje nové informace**, které jsou vidět v novějších deckách a materiálech:

- další detaily z **Emplifi 2023 Roadmap**  
  https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk
- Unified Analytics pitch & platform overview  
  https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk
- produktový overview, AI, Fuel a hlavní vydání 2024–2026  
  https://docs.google.com/presentation/d/1OGHlkqX_e_fwO5dcKnuQ3psOhBktS_UQNvQBAjbyArc/edit?usp=drivesdk  
  https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk
- 2025 Product Priorities (AI features, R&R → UA atd.)  
  https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

Cíl: **přidat další „facts“ a formulace**, které můžeš použít jako zdroj pro skill agenta v Cursoru (RAG, system prompt, finetune).

---

## 1. Emplifi – high‑level positioning a proč existuje

Z Unified Analytics pitch a platform decku:

- Emplifi je **Customer Engagement Platform**, která:
  - „unifies marketing, commerce and care on one platform“,
  - pomáhá „market to, sell, and service your customers where they are and will be – on digital and social networks“,
  - staví na **Unified Analytics, AI, automatizaci a orchestrace** (Platform Intelligence Engine, Fuel).

- Emplifi Customer Engagement Platform:
  - **MARKETING**
    - Social Media Management
    - Social Listening, Monitoring & Benchmarking
    - Influencer Marketing
    - Ad Campaign Management
    - Content Strategy
  - **COMMERCE**
    - Livestream & recorded video
    - 1:1 Video Shopping
    - 1:N Livestream Events
    - Social UGC
    - Ratings & Reviews
    - Social Shop Synchronization
  - **CARE**
    - Community Management & Care
    - Social Customer Care
    - Agent Case Management Tools
    - Knowledge base
    - CX VoC
    - Reputation Management
    - Livestream Video Care

- Emplifi staví na konceptu **„Continuous Content & Continuous Insights“**:
  - obsah (content) generuje data a insighty,
  - tyto insighty se vrací do strategie skrze AI/UA/Fuel,
  - vzniká „loop“, který zlepšuje výsledky.

Z Unified Analytics pitch:  
https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

---

## 2. Platform – produktový overview (z klientského decku)

Z „Client event recording / Product Platform Overview“:  
https://docs.google.com/presentation/d/1OGHlkqX_e_fwO5dcKnuQ3psOhBktS_UQNvQBAjbyArc/edit?usp=drivesdk

### 2.1 Hlavní vrstvy platformy

Výseková architektura:

1. **Governance**
   - Authentication
   - Team/Org Setup
   - Access Control
   - Compliance
   - Data Encryption
   - Threat Detection

2. **Analytics**
   - Templates
   - Self‑service Boards
   - Anomaly Detection
   - Collaboration
   - Notifications
   - Data Sharing

3. **Platform Intelligence & Automation**
   - Scheduling
   - Workflow Automation
   - Campaigns
   - Influencers
   - Data Outreach  
   (tohle v praxi = PIE + Fuel + orchestrace po suite)

4. **Content**
   - Content Management
   - Consent Management
   - Collaboration
   - Adjustments
   - Recommendations
   - Storage

5. **AI & Machine Learning**
   - Image & Video analysis
   - Generative AI
   - Text/NLP
   - Recommendations
   - Machine Learning

6. **Content Distribution**
   - Publishing
   - Surveys
   - Live Streaming
   - Website
   - Calls
   - Emails
   - Partners
   - Client‑specific systems

7. **Bi‑Directional Data Integration**
   - Public Social
   - Private Social
   - Reviews
   - Messaging
   - Calls
   - Emails
   - Webchat
   - Client Specific APIs
   - Direct Input

+ přes to vše běží entity:
- **Customer**
- **Product**

Tohle je velmi dobrá „kostra“ pro AI – popisuje, že Emplifi není jen pár UI modulů, ale **platforma s governance, analytics, AI, content, distribucí a integracemi**.

---

## 3. Hlavní produktové skupiny a moduly (2023 Roadmap detail)

Z Emplifi 2023 Roadmap:  
https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk

Emplifi rozděluje produkty do „groups“:

- **Care Group**
  - Digital Care
  - Community Management
  - Conversational / Chatbot
  - Live web chat
  - Reviews moderation
  - Voice of Customer
  - Agent
  - CRS
  - Agent Analytics
  - EVA (Emplifi Virtual Assistant – starší název pro některé bot/assistance funkce)
  - Knowledge Base

- **Data Insights Group**
  - Organic Social Analytics
  - Paid Social Analytics
  - Platform Dashboard
  - Web Analytics
  - Unified Analytics
  - Digital Listening

- **Content Creation Group**
  - Content Publishing
  - Link in Bio
  - Influencers / Creators
  - Content Inspiration (např. AI Composer)
  - Asset Management

- **Commerce Group**
  - Social UGC
  - Ratings & Reviews
  - 1:1 Live Advisor
  - 1:N Live Streaming
  - Experience Layer (Unified CTA na webu)

- **Service Center Group**
  - (kontext: service workflows, contact center integrace typu Five9, CRM routing)

- **Shared Platform Group**
  - Platform Intelligence Engine (PIE)
  - Public Platform APIs
  - Productized Connectors
  - Product/Account User Permissions
  - Security & Token Flow
  - Notifications
  - Multi‑cloud & performance
  - Native mobile apps
  - Butler / support interface
  - Payment Gateway
  - Platform Settings Module
  - Integrace s interními nástroji
  - Design System

Tohle se dá použít jako **„taxonomy“** modulů pro skill agenta.

---

## 4. Unified Analytics – další formulace a benefity

Z pitch decku Unified Analytics:  
https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk

### 4.1 Jednovětá definice (dobrá pro AI prompt)

> „Emplifi Unified Analytics consolidates and transforms vast, complex data sets across disparate customer touch points into easily‑digestible, visually‑compelling, and actionable insights.“

### 4.2 Co konkrétně přináší

- **Unify marketing, commerce, and care on one platform**
- **Unified data visualization**
  - konsoliduje social, care, VoC, commerce (Live, UGC, R&R) data,
  - poskytuje „holistic view“ zákazníka a jeho interakcí.

- **Actionable insights**
  - usnadňuje **real‑time rozhodování** (méně excelů, méně jiných BI nástrojů),
  - click‑through data z grafů zpět na obsah (drill‑down).

- **Greater team collaboration**
  - sdílená data napříč marketing, commerce, care,
  - přemosťuje „datové silosy“.

### 4.3 UA jako „central product for customer‑facing KPIs“

Z 2023 Roadmap:

> „Unified Analytics as a central product for customer‑facing KPIs across products: all key social, paid, listening, care, VoC, Live Commerce, UGC and R&R metrics in UA; all customers across all modules having access to centralized reporting.“

Tohle je „prohlášení“, které můžeš přímo vložit do promptu jako fakt.

---

## 5. Social Customer Care & PIE – víc detailů z RFP decku

Z „Carnival RFP – Emplifi for Marketing, UGC and Care“:  
https://docs.google.com/presentation/d/1Wavc9TZ8SDzK_-lptByPvqm1nmonlqlGDoOBtnlKWIs/edit?usp=drivesdk

### 5.1 Social Customer Care – popis pro klienty

> „Streamline customer care with comprehensive case management that lets you manage both public and private messages without losing continuity. Easily route, open, track, and resolve inquiries across social and review channels with user‑friendly, intuitive tools.“

- **Advanced automation**
  - automatizace assignments a case status,
  - řízení permissions, SLAs, audit trails, agent views, case attributes.

- **No heavy IT lift**
  - rychlé onboardování (dny, ne měsíce), user‑friendly UI.

- **Governance**
  - řízení přístupů a workflow.

- **3rd‑party integrations**
  - spolupráce s CRM uživateli,
  - „seamless escalation“ cases do CRM s plným kontextem.

### 5.2 Routing & Automation Engine (PIE) – další detail

> „PIE, our Platform Intelligence Engine, allows for advanced routing and automations for Community & Care including:
> - Identifying customer service issues  
> - Setting case priority  
> - Filling in case fields  
> - Auto‑assigning to agents  
> - Escalations to CRMs  
> 
> Message types: Comments, Ad Comments, Mentions, Direct Messages & Listening“

Tohle je super konkrétní – můžeš to použít v definici PIE a Social Care modulu.

---

## 6. Konkrétní produktové výsledky a ROI metriky

Z Unified Analytics pitch a overview decku:

> „Emplifi delivers proven results…“

Ukázkové metriky (užitečné pro AI, když bude vysvětlovat přínosy):

- **UGC**
  - 4× increase UGC engagement
  - 19+ % increase conversions from 4+ star reviews
  - 28 %+ ratings & reviews interactions

- **Live Commerce**
  - 10× increase conversions with 1:1 video
  - 28–40 % AOV increase via 1:1 live video
  - 25 %+ increase repeat purchases

- **Influencers**
  - 47 %+ engagement micro vs. macro influencers
  - 3–9+ influencers discovered (u konkrétních klientů)

Tyto čísla nejsou modul‑technické, ale pro skill agenta jsou výborné, pokud má vysvětlovat **„Why Emplifi / business value“**.

---

## 7. 2024–2026: Konkrétní vydání a AI featury (pro knowledge)

Z „Client event recording – Major product releases of 2024“:  
https://docs.google.com/presentation/d/1OGHlkqX_e_fwO5dcKnuQ3psOhBktS_UQNvQBAjbyArc/edit?usp=drivesdk

### 7.1 Hlavní releasy 2024 (výběr)

- **JAN 2024**
  - Enhanced Unified Analytics templates
    - Snapchat reporting
    - multi‑comparison views
    - listening metrics v UA

- **FEB 2024**
  - **Ratings & Reviews integrated into Emplifi Suite**
    - R&R jako modul uvnitř unified platformy.

- **MAR 2024**
  - OAuth 2.0 authorization for API
  - Librarian (interní nástroj / knowledge management)

- **APR 2024**
  - AI Assistant in Community and Care
  - AI case summary for Agent
  - Five9 Agent integration

- **MAY 2024**
  - Community data exports
  - Additional UA boards
  - Care Governance Improvements

- **JUN 2024**
  - Google Business (Business Profile) integrace v Community a Care

- **JUL 2024**
  - AI Image Score in Collections

- **AUG 2024**
  - Deep TikTok Paid Social Analytics

- **SEP 2024**
  - Brand voice for AI Composer (personalizace generativního obsahu)

- **OCT 2024**
  - Moderation of WhatsApp Messages in Community & Care

- **NOV 2024**
  - All Reviews Widget and bulk review moderation in R&R
  - UGC in Unified Analytics

- **DEC 2024**
  - Publishing to Meta Threads

Tyto body ukazují, že:

- UA se postupně rozšiřuje o další datové zdroje (Snapchat, Listening, UGC, R&R).
- AI proniká do Community, Care (assistant, summaries, brand voice), Collections.

---

## 8. 2026 Vision – klíčové „phrases“ a směr

Z „Emplifi Releases and Roadmap – Official“ (2026):  
https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk

### 8.1 2026 Vision – definice platformy

> „Move beyond a collection of tools to provide a unified workflow platform that connects every stage of the customer journey. By integrating data and actions across our suite, we empower brands to drive measurable ROI through efficiency and authenticity.“

**Strategické pilíře:**

1. **Unified Engagement**
   - spojení všech touchpointů do jednoho interaction engine.

2. **Authentic Content Lifecycle**
   - centrální hub, který mění zákaznické signály (reviews, social posts, testimonials) na použitelná brand assets.

3. **Fuel AI Copilot**
   - „intelligent, suite‑wide assistant“,
   - nejen poskytuje insighty, ale **vykonává cross‑product workflows bezpečně (Trust Layer)**.

4. **360 Voice of Customer (VoC)**
   - sjednocená inteligence okolo zpětné vazby zákazníků,
   - pomáhá zavřít mezeru mezi marketingem, supportem a commerce.

**Pro zákazníky to znamená:**

- Connected Workflows
- Measurable Productivity (AI automatizace)
- Actionable Intelligence (UA + AI)

### 8.2 Game‑changing platform updates H1 2026

- **AI Copilot for Care**
  - knowledge‑backed response generation,
  - snížení handle time.

- **AI‑Powered Widget Insights v UA**
  - „on‑demand AI analysis and actionable suggestions“ přímo v dashboardech.

- **Workflow & Bot Automations**
  - orchestruje komplexní workflow, integruje boty přímo do Care ekosystému.

- **Emplifi Teams**
  - granular data separation & permissions.

- **Full Reddit Integration**
  - Listening & Analytics ingest Redditu.

- **Deeper Social Analytics**
  - TikTok hashtag search,
  - split IG paid vs organic.

Tyto informace může AI agent použít, když se ho někdo zeptá na **směr produktu, budoucí capabilities**.

---

## 9. 2025 Product Priorities – pár konkrétních AI/R&R facts

Z 2025 Product Priorities sheet:  
https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk

### 9.1 Ratings & Reviews v UA

- Existuje explicitní priorita:
  - „R&R in Unified Analytics – R&R has no content in UA. This has to change soon.“
- Cíl:
  - dostat **Ratings & Reviews content/metrics** do UA,
  - 90 % R&R ARR pokryté UA reportingem (v poznámkách).

### 9.2 AI features v R&R

- „AI features in R&R widgets and API: review summary paragraph“
  - jednoduchý, ale hodnotný use‑case:
    - generované shrnutí recenzí pro nákupníky (shoppers),
    - podobné jako „AI‑generated review topics“ už popsané v Releases decku:
      https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk

### 9.3 Verticalization / Fuel content

- „CMS for Tactics and Objectives“ pro Fuel:
  - interní CMS, aby sales/solutions/product mohli spravovat taktiky bez hardcodu.
- „Introduce industry categorization to Suite accounts“:
  - flag účtů podle odvětví → Fuel/taktiky mohou být **vertical‑specific**.

To je důležité, pokud AI agent dostane otázky typu:  
„Jak bude Fuel podporovat různé vertikály?“ nebo „Jak se R&R propsává do UA?“.

---

## 10. Shrnutí – co z toho použít pro Cursor AI agenta

### 10.1 Co přidat do znalostní báze / RAG

1. **Celý hlavní „mega MD“** (katalog modulů, UA dashboardy, scénáře, data model).
2. **Tenhle doplňující blok**:
   - high‑level definice platformy,
   - taxonomy produktových skupin podle 2023 Roadmap,
   - UA benefity a ROI metriky,
   - Social Customer Care + PIE citace,
   - explicitní informace o roce 2024–2026 (co se reálně vydává),
   - 2025 priorities pro AI a R&R.

### 10.2 Jak to AI agent může použít

- **Odpovědi na otázky typu „What is Emplifi and how does it work?“**
  - využije unified definice, modulový katalog, datový model a přínosy.

- **Odpovědi na „What is Unified Analytics?“**
  - použije přesné definice z pitch decku + seznam podporovaných dat.

- **Odpovědi na „How does Social Customer Care / PIE automation work?“**
  - použije body z Carnival RFP a 2023 Roadmap.

- **Odpovědi na „What’s coming / what’s the roadmap?“**
  - použije 2024–2026 releases, 2026 vision, 2025 product priorities.

- **Cross‑domain dotazy (UA ↔ Care ↔ UGC ↔ R&R)**
  - použije datový model a scénáře z hlavního MD + doplňky o R&R→UA.

---

## 11. Doporučení pro final / system prompt pro agenta (volitelné)

*(Tento snippet můžeš použít jako část system promptu v Cursoru.)*

> - Tvoje znalost Emplifi platformy vychází z interních dokumentů:  
>   - Emplifi 2023 Roadmap:  
>     https://docs.google.com/presentation/d/1vpovqLboxQBK-whdpB8LsnggyhhIvq50pcz2zieMRqw/edit?usp=drivesdk  
>   - Emplifi Unified Analytics pitch:  
>     https://docs.google.com/presentation/d/1SUslzjAf0Ds9Lw4Xm0ypmrMglERxxh0XY42HaX0e8iA/edit?usp=drivesdk  
>   - Emplifi Releases and Roadmap – Official:  
>     https://docs.google.com/presentation/d/17lTKvp0h9N9eQb6EzjCQsKgDnclkswWNSfEY_lDgq4Q/edit?usp=drivesdk  
>   - 2025 Product Priorities:  
>     https://docs.google.com/spreadsheets/d/1EDjc-gfaAkTjTN6zIu_Y5PZl3AZqLmrA5NR26XX_egM/edit?usp=drivesdk  
> - Pokud odpovídáš na otázky o Emplifi:
>   - vždy vysvětluj, **které moduly** jsou do scénáře zapojené (UA, Community, Care, UGC, R&R, Fuel, PIE, Experience Layer, atd.),
>   - zmiňuj, **jaká data** jsou použita (social, care, VoC, commerce, UGC),
>   - zvaž, jakou roli v daném scénáři hraje **AI** (Copiloti, insights, automatizace),
>   - opírej se o koncept „Continuous Content & Continuous Insights“ a „Unified platform for Marketing, Commerce, and Care“.
