# Cortex Panel — Přehled komponent

One-pager dokumentace všech UI komponent v Cortex AI panelu.  
*Zdroj: `cortex-panel.js`, `cortex-config.js`, `flow-switcher.js`*

---

## 1. Hlavní struktura panelu

| Komponenta | Popis |
|------------|-------|
| **cortex-panel-wrapper** | Obaluje celý panel, přepíná mezi rozbaleným a sbaleným stavem (`panel-collapsed`) |
| **cortex-panel** | Hlavní kontejner panelu (šířka 360px), obsahuje header, views a input |
| **cortex-right-bar** | Pravý pruh s přepínači view a tlačítkem pro sbalení/rozbalení |

---

## 2. Header

| Komponenta | Popis |
|------------|-------|
| **cortex-header** | Horní lišta s názvem a akcemi |
| **cortex-title** | Ikona AI + text „Cortex“ |
| **header-btn** | Tlačítka v headeru: **History** (historie chatů), **New chat** (nový chat) |

---

## 3. Views (záložky obsahu)

| Komponenta | Popis |
|------------|-------|
| **cortex-views-container** | Kontejner pro tři přepínatelné pohledy |
| **cortex-view** | Jednotlivý view (aktivní má třídu `active`) |

### 3.1 AI Chat View (`cortex-view-ai-chat`)

| Komponenta | Popis |
|------------|-------|
| **cortex-messages** | Scrollovatelná oblast s chatem |
| **cortex-intelligence-area** | Oblast pro Intelligence Box (doporučení AI) |
| **cortex-chat-messages** | Kontejner pro zprávy chatu |

### 3.2 Activity View (`cortex-view-activity`)

| Komponenta | Popis |
|------------|-------|
| **activity-list** | Seznam aktivit flow |
| **activity-item** | Jedna položka: tečka + text + čas |
| **activity-dot** | Barevná tečka u položky |
| **activity-content** | Text a čas aktivity |
| **activity-item--deleted** | Smazaná položka (přeškrtnutá) |

### 3.3 Notifications View (`cortex-view-notifications`)

| Komponenta | Popis |
|------------|-------|
| **notification-list** | Seznam notifikací |
| **notification-item** | Jedna notifikace: ikona + text + čas |
| **notification-item.unread** | Nepřečtená notifikace |
| **notification-icon** | Ikona (AI nebo activity) |
| **notification-content** | Text a čas |

---

## 4. Intelligence Box

| Komponenta | Popis |
|------------|-------|
| **intelligence-box** | Karta s AI doporučeními — dvě varianty: initial a completed |
| **intelligence-box-header** | Nadpis + tlačítko zavřít |
| **intelligence-box-title** | Nadpis boxu (např. „Labubu is trending“) |
| **intelligence-box-close** | Zavření boxu |
| **intelligence-box-description** | Popisný text (odstavce) |
| **intelligence-box-actions** | Oblast s checkboxy akcí |
| **intelligence-box-buttons** | Tlačítka „Execute selected“ a „More ideas“ |
| **intelligence-box-footer** | Patička s doplňkovým textem |

### Initial stav (před provedením akcí)

| Komponenta | Popis |
|------------|-------|
| **checkbox** | Checkbox pro výběr akce (data-action, role="checkbox") |
| **checkbox-box** | Vizuální box checkboxu |
| **checkbox-label** | Popisek akce |
| **checkbox-select-all** | „Select all“ — vybere všechny akce |
| **execute-btn** | Tlačítko „Execute selected“ — spustí vybrané akce |
| **or-text** | Oddělovač „or“ |
| **More ideas** | Rozšíří seznam o další návrhy z `moreIdeasPool` |

### Completed stav (po provedení akcí)

| Komponenta | Popis |
|------------|-------|
| **intelligence-box-completed** | Varianta boxu po dokončení |
| **decision-completed** | Sekce „Based on your decision I created:“ |
| **decision-header** | Nadpis sekce |
| **decision-item** | Položka výsledku — odkaz na stránku (Collection, Campaign, …) |
| **decision-item.visited** | Navštívená položka (ikona done) |
| **decision-item--deleted** | Smazaná položka |
| **check-icon** | Ikona stavu (upcoming / done) |
| **decision-label** | Název výsledku |
| **decision-item-remove** | Tlačítko pro odstranění položky |

### Skeleton loading

| Komponenta | Popis |
|------------|-------|
| **intelligence-box-skeleton** | Placeholder při načítání „More ideas“ |
| **skeleton-row** | Animovaný řádek skeletonu (pulzující šedý pruh) |

---

## 5. Chat zprávy

| Komponenta | Popis |
|------------|-------|
| **chat-message** | Kontejner jedné zprávy |
| **chat-message--user** | Zpráva od uživatele |
| **chat-message--ai** | Zpráva od AI |
| **chat-message--system** | Systémová zpráva |
| **chat-message--thinking** | Placeholder „Agent is thinking…“ |
| **chat-message-bubble** | Bublina s obsahem zprávy |
| **chat-message-system** | Kontejner systémové zprávy |
| **chat-message-thinking** | Text „Agent is thinking…“ |
| **chat-message--latest-user** | Poslední uživatelská zpráva (zvýraznění) |

### Formátování AI odpovědí

| Komponenta | Popis |
|------------|-------|
| **chat-response-heading** | Nadpis sekce v AI odpovědi (h3) |
| **chat-response-list** | Seznam (ul/li) v odpovědi |
| **chat-decision-wrapper** | Wrapper pro decision-item vložené do chat zprávy |
| **attached-files** | Zobrazení připojených souborů v uživatelské zprávě |
| **file-attachment-chip** | Chip připojeného souboru v textu zprávy |

---

## 6. Input oblast

| Komponenta | Popis |
|------------|-------|
| **cortex-input-area** | Celá oblast vstupu (skryje se v Activity/Notifications) |
| **cortex-input-box** | Hlavní box inputu |
| **cortex-input-context** | Kontextová lišta — aktuální stránka |
| **context-label** | Popisek „Context“ |
| **context-value** | Hodnota (např. „Command center“) |
| **context-page-name** | Název stránky |
| **context-close** | Odstranění kontextu |
| **cortex-input-body** | Tělo inputu |
| **file-attachments** | Oblast pro náhled připojených souborů před odesláním |
| **cortex-input-field** | Textarea pro psaní zprávy |
| **cortex-input-footer** | Patička s tlačítky |
| **attachment-btn** | Tlačítko + (otevře attachment menu) |
| **attachment-dropdown** | Dropdown: Upload file, Add link, Mention someone |
| **attachment-dropdown-item** | Položka menu |
| **cortex-footer-actions** | Tlačítka Send / Mic / Stop |
| **cortex-input-action-btn** | Tlačítko akce (send, mic, stop) |
| **cortex-stop-btn** | Zastavení hlasového nahrávání |
| **cortex-input-meta** | Meta informace pod inputem |
| **cortex-input-powered** | Text „Get instant answers powered by Emplifi AI“ |

### File attachment chips (v input oblasti)

| Komponenta | Popis |
|------------|-------|
| **file-attachment-chip** | Chip připojeného souboru (ikona + název + remove) |
| **file-attachment-chip--xlsx** | Varianta pro Excel soubory |
| **file-icon** | Ikona dokumentu |
| **file-name** | Název souboru |
| **file-remove** | Tlačítko pro odstranění souboru |

### Voice recording

| Komponenta | Popis |
|------------|-------|
| **voice-wave-animation** | Animace vln při nahrávání |
| **voice-wave-bar** | Jedna tyč animace |
| **recording** | Třída na footer-actions při nahrávání |

---

## 7. Right bar (pravý pruh)

| Komponenta | Popis |
|------------|-------|
| **cortex-right-bar-header** | Horní část s toggle tlačítkem |
| **toggle-btn** | Sbalení/rozbalení panelu |
| **toggle-icon** | Ikona (collapse/expand) |
| **bar-divider** | Oddělovač |
| **cortex-right-bar-nav** | Navigace mezi views |
| **bar-btn** | Tlačítko záložky (Notifications, Activity) |
| **bar-btn.active** | Aktivní záložka |
| **badge** | Badge s číslem (např. 33 u Notifications) |
| **cortex-right-bar-bottom** | Spodní část |
| **ai-btn** | Hlavní tlačítko AI Chat |

---

## 8. Finder modal (macOS styl)

| Komponenta | Popis |
|------------|-------|
| **finder-modal** | Modal pro výběr souboru (Bulk User Import, Content Calendar) |
| **finder-modal-backdrop** | Tmavé pozadí |
| **finder-modal-window** | Okno modalu |
| **finder-titlebar** | Titulní lišta s traffic lights |
| **finder-traffic-lights** | Tlačítka zavřít/minimalizovat/maximalizovat |
| **finder-toolbar** | Toolbar s navigací |
| **finder-nav-btn** | Zpět / Vpřed |
| **finder-toolbar-title** | Název složky |
| **finder-view-buttons** | Tlačítka zobrazení |
| **finder-file-list** | Seznam souborů |

---

## 9. Další komponenty

| Komponenta | Popis |
|------------|-------|
| **role-picker-options** | Výběr role (Team Manager, Care Agent, …) |
| **role-option** | Jedna možnost role |
| **btn, btn-s, btn-ghost** | Tlačítka (Soul design system) |

---

## 10. Flow Switcher (součást dema)

| Komponenta | Popis |
|------------|-------|
| **flow-switcher** | Plovoucí panel pro přepínání demo flows |
| **flow-item** | Položka flow v seznamu |
| **flow-item-persona** | Persona flow (např. Social Media Manager) |
| **flow-play-btn** | Tlačítko Play/Pause pro playback |
| **flow-restart-btn** | Reset flow na počáteční stav |

---

## Konfigurace

Všechny labely, ikony a texty jsou v **`cortex-config.js`**:

- `CORTEX_UI_CONFIG.header` — ikona, název, akce
- `CORTEX_UI_CONFIG.rightBar` — záložky, toggle ikony, AI tlačítko
- `CORTEX_UI_CONFIG.input` — placeholder, attachment menu, ikony
- `CORTEX_UI_CONFIG.chat` — AI avatar
- `CORTEX_UI_CONFIG.viewTitles` — názvy views
- `CORTEX_UI_CONFIG.pageTitles` — názvy stránek pro kontext

---

*Poslední aktualizace: březen 2026*
