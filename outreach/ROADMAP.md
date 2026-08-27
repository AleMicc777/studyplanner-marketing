# StudyPlanner — Growth Roadmap (Marketing + Outreach)

> **This is the single source of truth.** Update it every working session so nothing is lost.
> Last updated: 2026-08-27

---

## North Star

Get the first university programme to pilot StudyPlanner.

**90-day target** (from `tracking-spreadsheet.md`):
- 50 emails sent
- ≥20% reply rate (10+ replies)
- 10 demo calls done
- 1 pilot agreed

---

## Status Snapshot (2026-08-27)

- **Marketing site** — live at https://studyplanner-marketing-steel.vercel.app. Single-page layout
  (Hero → Problem → Stats → How It Works → Features → For Universities → Case Study →
  Screenshots → FAQ → CTA Footer) + `/contact`. First effectiveness pass done: stats,
  TU Delft case study, FAQ, GDPR block, sharpened headline.
- **Outreach** — ⚠️ **This file was wrong about sending, and the correction matters.** Sending is
  **automated** in the `ae-planner-proxy` repo and has been for months: a daily GitHub Actions cron
  (08:00 UTC) runs `outreach.mjs build → approve --all → send --live` through the Gmail API.
  **74 emails were already sent** while this section still claimed 20 from a single May wave.
  - **Source of truth for sending:** `~/ae-planner-proxy` branch `main` —
    `docs/prospects/global-prospect-dossier-2026-08-10.md` (prospects),
    `docs/prospects/outreach-queue.json` (live send log),
    `.github/workflows/outreach-send-cron.yml` (cron, `--per-day 10` as of 2026-08-27).
  - **Batches 3–6 are no longer stranded.** All 106 drafts were imported into that dossier on
    2026-08-27 via `scripts/import-manual-batches.mjs`; 104 were new. Queue: **150 → 259 entries**
    (74 sent, 52 approved, 109 pending, 13 blocked, 11 dismissed).
  - Coverage spans 38 universities in 15 countries from this repo's research alone.
  - **The pipeline tables below are a research record, not a send log.** Their "Not contacted"
    statuses are stale the moment the cron runs. Read `outreach-queue.json` for what actually went out.
  - **The cron paces by volume and knows nothing about deadlines.** Ghent closes 30 Sept, Sapienza's
    DIAG window is once-per-year, PW must not be mailed during their declaration window. To act on a
    deadline, set `- **Priority:**` on that entry in the dossier — it jumps the queue without moving
    position, which is the only safe reorder (ids come from position; moving one rebinds sent stamps).
- **Product demo** — https://ae-planner-proxy.vercel.app (live, no login).

> ⚠️ **Action:** confirm the actual send dates below. They're assumed 2026-05-28 — correct any
> that were sent earlier so the follow-up windows are right.

---

## Outreach Pipeline

Follow-up due = send +5 days (email, once only). LinkedIn note = send +2 days.
Status options: `Sent` · `Followed up` · `No reply` · `Replied+` · `Replied-` · `Call booked` · `Pilot`.

### Batch 1

| # | Name | University | Programme | Template | Sent | Follow-up due | Status |
|---|------|-----------|-----------|----------|------|---------------|--------|
| 1 | Dr. Ralf Sasse | ETH Zurich | MSc CS | C | 2026-05-28 | 2026-06-02 | Sent |
| 2 | Dr. Wolfgang Wörndl | TU Munich | MSc Informatics | C | 2026-05-28 | 2026-06-02 | Sent |
| 3 | Dr. Bas Luttik | TU Eindhoven | MSc CS&E | Personalised | 2026-05-28 | 2026-06-02 | Sent |
| 4 | Dr. Loek Cleophas | TU Eindhoven | MSc CS&E | B | 2026-05-28 | 2026-06-02 | Sent |
| 5 | Michaela Zimmermann | ETH Zurich | MSc CS | A (inbox) | 2026-05-28 | 2026-06-02 | Sent |
| 6 | Verena Wimmer | TU Munich | MSc Informatics | A (inbox) | 2026-05-28 | 2026-06-02 | Sent |
| 7 | Dr. Ghislain Fourny | ETH Zurich | MSc Data Science | B | 2026-05-28 | 2026-06-02 | Sent |
| 8 | Sebastiano Vigna | POLIMI | MSc CS&E | A | 2026-05-28 | 2026-06-02 | Sent |
| 9 | Matteo Matteucci | POLIMI | MSc CS&E | A | 2026-05-28 | 2026-06-02 | Sent |
| 10 | Daniele Loiacono | POLIMI | MSc CS&E | A | 2026-05-28 | 2026-06-02 | Sent |

### Batch 2

| # | Name | University | Programme | Template | Sent | Follow-up due | Status |
|---|------|-----------|-----------|----------|------|---------------|--------|
| 11 | Maria Christakis | TU Wien | MSc Software Eng. | C | 2026-05-28 | 2026-06-02 | Sent |
| 12 | Hilda Tellioglu | TU Wien | MSc Software Eng. | C | 2026-05-28 | 2026-06-02 | Sent |
| 13 | Study Advisor EEMCS | TU Delft | MSc CS | A (inbox) | 2026-05-28 | 2026-06-02 | Sent |
| 14 | Dr. Erik Jan van Leeuwen | Utrecht | MSc Computing Science | A | 2026-05-28 | 2026-06-02 | Sent |
| 15 | MSc CS inbox | KTH Stockholm | MSc CS | A (inbox) | 2026-05-28 | 2026-06-02 | Sent |
| 16 | Eileen Hazboun | EPFL | MSc CS | B | 2026-05-28 | 2026-06-02 | Sent |
| 17 | MSc CS inbox | Leiden | MSc CS | B (inbox) | 2026-05-28 | 2026-06-02 | Sent |
| 18 | Dr. Krasimir Angelov | Chalmers | MSc CS – ALL | C | 2026-05-28 | 2026-06-02 | Sent |
| 19 | MSc inbox | RWTH Aachen | MSc CS | A (inbox) | 2026-05-28 | 2026-06-02 | Sent |
| 20 | MSc inbox | Aalto | MSc CS | A (inbox) | 2026-05-28 | 2026-06-02 | Sent |

### Batch 3 — researched 2026-08-27, drafts ready, **nothing sent yet**

Full drafts + send schedule in `batch-3-contacts.md`. All 17 addresses verified on official pages.

| # | Name | University | Programme | Template | Sent | Follow-up due | Status |
|---|------|-----------|-----------|----------|------|---------------|--------|
| 21 | Cecilia Sigvardsdotter | UvA | MSc AI (+3 more) | Personalised | — | — | Not contacted |
| 22 | Prof. Evangelos Kanoulas | UvA | MSc AI | C | — | — | Not contacted |
| 23 | Master-Science inbox | UvA | MSc AI | B | — | — | Not contacted |
| 24 | Dr.-Ing. Ioana Gheta | KIT | MSc Informatik | Personalised | — | — | Not contacted |
| 25 | Lena Coerdt | KIT | MSc Informatik | C | — | — | Not contacted |
| 26 | Fachstudienberatung inbox | KIT | CS M.Sc. (INT) | B (EN) | — | — | Not contacted |
| 27 | ETIT Studiengangservice | KIT | MSc ETIT | C | — | — | Not contacted |
| 28 | Dr.-Ing. Jasmin Boghrat | TU Darmstadt | FB20 (5 MSc) | Personalised | — | — | Not contacted |
| 29 | Prof. Jan Peters | TU Darmstadt | MSc Informatik | Personalised | — | — | Not contacted |
| 30 | Tim Neubacher | TU Darmstadt | MSc Informatik | A | — | — | Not contacted |
| 31 | Studienbüro inbox | TU Darmstadt | MSc Informatik | B | — | — | Not contacted |
| 32 | Alessandro Savino | Polito | LM Ing. Informatica | Personalised | — | — | Not contacted |
| 33 | Paolo Garza | Polito | Collegio ICM | C | — | — | Not contacted |
| 34 | Mario Roberto Casu | Polito | LM Ing. Elettronica | A | — | — | Not contacted |
| 35 | Dr. Michel Klein | VU Amsterdam | MSc CS (joint VU/UvA) | Personalised | — | — | Not contacted |
| 36 | Vincenzo Stoico | VU Amsterdam | MSc CS — SE & Green IT | C | — | — | Not contacted |
| 37 | Dr. N. Silvis-Cividjian | VU Amsterdam | Pre-Master's CS | C | — | — | Not contacted |

**Two blockers before sending:** KIT addresses were decoded from anti-spam obfuscation (bounce-test the
two personal ones first), and the VU/UvA mails must not go out within 24h of each other — the VU MSc CS
is a joint VU/UvA degree.

### Batch 4 — researched 2026-08-27, drafts ready, **nothing sent yet**

Full drafts, per-university research and send schedule in `batch-4-contacts.md`. Five countries, one
university each. 24 of 25 addresses read verbatim off official pages; 1 decoded (⚠️). **Send Batch 3
first** — it has been ready longer.

| # | Name | University | Programme | Template | Sent | Follow-up due | Status |
|---|------|-----------|-----------|----------|------|---------------|--------|
| 38 | Devriese (director inbox) | KU Leuven | MEng Computer Science | Personalised | — | — | Not contacted |
| 39 | MAI programme office | KU Leuven | Master of AI | C | — | — | Not contacted |
| 40 | Reynaert (secretariat) | KU Leuven | MEng Electrical Eng. | C | — | — | Not contacted |
| 41 | Adriaan Mahy | KU Leuven | MEng CS — ISP Coordinator | B | — | — | Not contacted |
| 42 | Valerio Velino | Bologna | LM Informatica | Personalised (IT) | — | — | Not contacted |
| 43 | Valerio Marcopoli | Bologna | LM Ing. Informatica | Personalised (IT) | — | — | Not contacted |
| 44 | Chiara Preti (role inbox) | Bologna | LM Artificial Intelligence | C (EN) | — | — | Not contacted |
| 45 | Enrico Denti | Bologna | LM Ing. Informatica | C (IT) | — | — | Not contacted |
| 46 | Giancarlo Succi | Bologna | LM Informatica | C (IT) | — | — | Not contacted |
| 47 | Ugo Dal Lago | Bologna | LM Artificial Intelligence | C (EN) | — | — | Not contacted |
| 48 | Per Bækgaard | DTU | MSc Human-Centered AI | Personalised | — | — | Not contacted |
| 49 | Jørgen Villadsen | DTU | MSc CS & Engineering | Personalised | — | — | Not contacted |
| 50 | Ziwei Ouyang | DTU | MSc Electrical Engineering | C | — | — | Not contacted |
| 51 | Yiqiu Dong | DTU | MSc Math. Modelling & Comp. | C | — | — | Not contacted |
| 52 | DTU Study Guidance | DTU | All MSc | B | — | — | Not contacted |
| 53 | Liselott Dominicus | Uppsala | MSc CS + Embedded Systems | Personalised | — | — | Not contacted |
| 54 | Lars-Henrik Eriksson | Uppsala | MSc Computer Science | Personalised | — | — | Not contacted |
| 55 | Olga Kaj | Uppsala | MSc Data Science | C | — | — | Not contacted |
| 56 | R. Thinniyam Srinivasan | Uppsala | MSc Embedded Systems | C | — | — | Not contacted |
| 57 | Davide Vega D'Aurelio | Uppsala | MSc Data Science | A | — | — | Not contacted |
| 58 | Dr Johannes Textor | Radboud | MSc Computing Science | Personalised | — | — | Not contacted |
| 59 | Dr Perry Groot | Radboud | MSc CS + Information Sciences | Personalised | — | — | Not contacted |
| 60 | Dr Marieke de Vries | Radboud | MSc Information Sciences | C | — | — | Not contacted |
| 61 | Susanne van Helden ⚠️ | Radboud | MSc AI (Social Sciences) | C | — | — | Not contacted |
| 62 | Drs Vera Kamphuis | Radboud | iCIS — all CS/IS | B | — | — | Not contacted |

**Blockers before sending:**
1. **Bologna window** — plans open 5 Oct, close 6 Nov (A.Y. 2026/27, published Aug 2026). Reach Velino
   and Marcopoli *before* 5 Oct; re-verify the dates if the send slips past October.
2. **KU Leuven timing** — send CS/AI during ISP season; hold Reynaert and Mahy until after the
   mid-October deadline.
3. **Radboud spacing** — not within 24h of the Batch-3 UvA or VU sends. Examination Board chair Herman
   Geuvers stays in reserve: standing one-day-a-week TU/e appointment, and TU/e was emailed 2026-05-28.
4. **One decoded address** — bounce-test `susanne.vanhelden@ru.nl` before spending Radboud reserves.
5. **Coordinator conflicts unresolved** — KU Leuven CS (Devriese vs Holvoet), Bologna Ing. Informatica
   (Denti vs Chesani) and Ing. Elettronica (Gnudi vs Reggiani). Elettronica has no draft until fixed.

**Pitch note:** the incumbent-tool situation differs per university and the drafts differ with it —
KU Leuven's KU Loket *does* validate (aim at the published single-year gap), DTU and Bologna have tools
that explicitly do not validate (quote their own admission), Uppsala has no tooling at all. Do not
reuse a Batch-4 draft on another university without re-reading `batch-4-contacts.md`.

### Batch 5 — researched 2026-08-27, drafts ready, **nothing sent yet**

Full drafts, per-university research and send schedule in `batch-5-contacts.md`. Opens the untouched
national markets: France, Spain, Ireland and Poland had zero contacts before this. Six universities
researched, **five recommended and one deliberately dropped** (IST Lisbon — see below).

⚠️ **One item overrides the Batch 3 → 4 → 5 order: #75 Butterfield (TCD) must go this week.**

| # | Name | University | Programme | Template | Sent | Follow-up due | Status |
|---|------|-----------|-----------|----------|------|---------------|--------|
| 63 | Florent Hivert | Paris-Saclay | Master mention Informatique | Personalised (FR) | — | — | Not contacted |
| 64 | Romane Taddei | Paris-Saclay | Parcours AI, M1+M2 | Personalised (FR) | — | — | Not contacted |
| 65 | Janna Burman ⚠️ | Paris-Saclay | Parcours QDCS, M1 | C (FR) | — | — | Not contacted |
| 66 | Murielle Benard ⚠️ | Paris-Saclay | Parcours QDCS, M1+M2 | B (FR) | — | — | Not contacted |
| 67 | Óscar Romero Moral | UPC Barcelona | MIRI + MEI | Personalised | — | — | Not contacted |
| 68 | Marcos Postigo Boix ⚠️ | UPC Barcelona | MET + MATT (ETSETB) | C | — | — | Not contacted |
| 69 | Anna Queralt Calafat | UPC Barcelona | MSc Data Science | C | — | — | Not contacted |
| 70 | Secretaria FIB | UPC Barcelona | MIRI/MEI/MAI/MDS | B | — | — | Not contacted |
| 71 | Studienfachberatung CS | TU Berlin | M.Sc. Computer Science | Personalised | — | — | Not contacted |
| 72 | Prüfungsausschuss ISM ⚠️ | TU Berlin | M.Sc. ICT Innovation / ISM | C | — | — | Not contacted |
| 73 | Prüfungsausschuss CS ⚠️ | TU Berlin | M.Sc./B.Sc. Computer Science | C | — | — | Not contacted |
| 74 | Studienfachberatung CE | TU Berlin | M.Sc. Computer Engineering | B | — | — | Not contacted |
| 75 | **Prof. Andrew Butterfield** | TCD | M.A.I. ECE Yr 5, CS stream | Personalised | — | — | **SEND THIS WEEK** |
| 76 | Prof. Doug Leith | TCD | MSc Computer Science | Personalised | — | — | Not contacted |
| 77 | Prof. Gavin Doherty | TCD | SCSS taught PG portfolio | C | — | — | Not contacted |
| 78 | Dr. Mimi Zhang | TCD | MSc CS — Data Science strand | C | — | — | Not contacted |
| 79 | dr Daria Walukiewicz-Chrząszcz | Warsaw MIMUW | Informatyka II stopnia | Personalised (PL) | — | — | Not contacted |
| 80 | dr hab. Aleksy Schubert | Warsaw MIMUW | Machine Learning MSc (EN) | Personalised | — | — | Not contacted |
| 81 | dr hab. Norbert Dojer | Warsaw MIMUW | Bioinformatyka II stopnia | C (PL) | — | — | Not contacted |
| 82 | mgr K. Czyrkowska-Dziemba | Warsaw MIMUW | ML + Inf. + Bioinf. (admin) | B (PL) | — | — | Not contacted |
| 83 | Pedro Tiago Monteiro | IST Lisbon | MEIC | C (PT) | — | — | Send last, or not at all |

**Hard timing — this batch has real expiry dates, unlike Batches 3–4:**
1. **#75 Butterfield — this week.** M.A.I. module choices are changeable only until end of teaching
   week 1 (~mid-September). Every other contact in Batches 3–5 can wait; this one expires.
2. **Warsaw (#79–82) before mid-September** — lands right before the academic year and the
   seminar-allocation cycle, the best window of their year.
3. **Paris-Saclay not before mid-September** — window is mid-Sept to early Nov (the *contrat
   pédagogique* is legally due 15 November). Late-August mail hits empty boxes.
4. **TCD MSc CS (#76–78) is pitching the 2027-28 cycle** — module enrolment for 2026-27 closed 5 Aug.
   Say so plainly; pretending otherwise will be spotted.

**IST Lisbon dropped — and that is the useful result.** Fénix is IST's own open-sourced system and
already encodes curricular rules as first-class objects (public "Show Rules" toggle, ECTS caps,
coordinator approval). There is no plan-approval step at IST at all. One draft survives (#83), pitching
only the narrow real gap: enrolments are irreversible, no what-if mode.

**Pitch note — the layer question.** Batch 4 asked *whether* an incumbent tool exists; Batch 5 shows the
sharper question is **what layer it validates at**, and nearly all validate the wrong one. USOS, UPC's
e-Secretaria and TCD's OME all check one semester's enrolment, never the whole plan against graduation
rules; TU Berlin's MTS stores the Wahlregeln but never runs them. *"Counts a sum, not a structure"* is
the line that works across most of this batch. **Never frame the incumbent as deficient** — USOS
especially, it is a shared Polish national asset and criticising it reads as criticising the sector.

**The Poland finding outlives the Poland contacts.** USOS is run by the MUCI consortium and used by most
Polish universities; "validates registration and settlement, never plan composition" applies verbatim at
Politechnika Warszawska, UJ, AGH, UAM and Politechnika Gdańska. If Warsaw converts, the same opening
works nationally with the local grid swapped in.

**Never email** `teaching-unit@rt.scss.tcd.ie` — Request Tracker ticket queue, not a person.

### Batch 6 — researched 2026-08-27, drafts ready, **nothing sent yet**

Full drafts, per-university research and the consolidated send calendar in `batch-6-contacts.md`. Ten
universities, seven countries, 40 wave-1 contacts. **All ten verdicts came back SEND.** Two programmes
inside them were dropped: Bonn's Life Science Informatics (fixed grid, 15 CP electives, jointly run
with already-contacted RWTH Aachen) and Ghent's MSc Electrical Engineering (no elective block at all).

⚠️ **Batch order no longer governs the campaign — see the calendar below.**

| # | Name | University | Programme | Template | Sent | Follow-up due | Status |
|---|------|-----------|-----------|----------|------|---------------|--------|
| 84 | dr inż. Tomasz Traczyk | Politechnika Warszawska | Informatyka 2°, AiR 2° | Personalised (PL) | — | — | Not contacted |
| 85 | dr inż. Piotr Firek | Politechnika Warszawska | all WEiTI 2° | C (PL) | — | — | Not contacted |
| 86 | dr hab. inż. Marek Gągolewski ⚠️ | Politechnika Warszawska | Data Science 2° (MiNI) | C (PL) | — | — | Not contacted |
| 87 | dr inż. Krzysztof Kaczmarski ⚠️ | Politechnika Warszawska | all MiNI 2° | B (PL) | — | — | Not contacted |
| 88 | dr hab. inż. Igor Wojnicki | AGH Kraków | Informatyka i Systemy Inteligentne 2° | Personalised (PL) | — | — | Not contacted |
| 89 | dr inż. Marek Gajęcki ⚠️ | AGH Kraków | Informatyka / Data Science / UMiSI | Personalised (PL) | — | — | Not contacted |
| 90 | dr hab. inż. Joanna Kwiecień | AGH Kraków | Automatyka i Robotyka 2° | C (PL) | — | — | Not contacted |
| 91 | dr inż. Mikołaj Skowron | AGH Kraków | EAIiIB — podania, IOS | B (PL) | — | — | Not contacted |
| 92 | dr Jakub Zygadło | Jagiellonian (UJ) | Informatyka II st. | Personalised (PL) | — | — | Not contacted |
| 93 | dr Małgorzata Moczurad | Jagiellonian (UJ) | Matematyka komputerowa II st. | C (PL) | — | — | Not contacted |
| 94 | dr Katarzyna Grzesiak-Kopeć | Jagiellonian (UJ) | Informatyka stosowana II st. | C (PL) | — | — | Not contacted |
| 95 | mgr Iwona Wojtkiewicz | Jagiellonian (UJ) | Sekretariat dydaktyczny IIMK | B (PL) | — | — | Not contacted |
| 96 | Antoine Genitrini ⚠️ | Sorbonne | Master Informatique — STL | Personalised (FR) | — | — | Not contacted |
| 97 | Aurélie Beynier | Sorbonne | Master Informatique — AI2D | Personalised (FR) | — | — | Not contacted |
| 98 | Olivier Fourmaux | Sorbonne | **Directeur du Master Informatique** | Personalised (FR) | — | — | Not contacted |
| 99 | Danielle Émery | Sorbonne | Master E3A/EEA — CIMES | B (FR) | — | — | Not contacted |
| 100 | Yongluan Zhou | Copenhagen | MSc Computer Science | Personalised | — | — | Not contacted |
| 101 | Boris Düdder | Copenhagen | DIKU, all programmes | C | — | — | Not contacted |
| 102 | Trine Krogh Boomsma | Copenhagen | Study Board chair (Maths + CS) | C | — | — | Not contacted |
| 103 | Amelie Stein | Copenhagen | MSc Bioinformatics | C | — | — | Not contacted |
| 104 | Studietrajectbegeleiding burgerlijk ir. | Ghent | MSc Computer Science Engineering | Personalised (NL) | — | — | Not contacted |
| 105 | Trajectbegeleiding Wetenschappen | Ghent | Master informatica | Personalised (NL) | — | — | Not contacted |
| 106 | Studietrajectbegeleiding industrieel ir. | Ghent | MSc Information Engineering Tech. | C (NL) | — | — | Not contacted |
| 107 | Kwaliteitscel Onderwijs FEA | Ghent | Faculty-wide, FEA | B (NL) | — | — | Not contacted |
| 108 | Prof. Riccardo Lazzeretti | Sapienza | Eng. in CS and AI | Personalised | — | — | Not contacted |
| 109 | Prof. Giorgio Grisetti | Sapienza | AI and Robotics | Personalised | — | — | Not contacted |
| 110 | Prof. Domenico Lembo | Sapienza | **Presidente CAD** | C — send last | — | — | Not contacted |
| 111 | (mailbox, unnamed on purpose) | Sapienza | Data Science (i3S joint) | B | — | — | Not contacted |
| 112 | dr.ir. Vadim Zaytsev | Twente | MSc Computer Science | Personalised | — | — | Not contacted |
| 113 | dr. Hil Meijer | Twente | MSc Applied Mathematics | Personalised | — | — | Not contacted |
| 114 | Lisette van den Broek MSc | Twente | MSc EE + EmSys + Robotics | C | — | — | Not contacted |
| 115 | Josca van Houwelingen-Snippe PhD | Twente | MSc Interaction Technology | C | — | — | Not contacted |
| 116 | Pablo Hernandez | Lund (LTH) | Datateknik + ICT — programplanerare | Personalised | — | — | Not contacted |
| 117 | Patrik Persson ⚠️ | Lund (LTH) | Civilingenjör datateknik | C | — | — | Not contacted |
| 118 | Mikael Nilsson (role inbox) | Lund (LTH) | Machine Learning, Systems and Control | C | — | — | Not contacted |
| 119 | Lotta Persmark ⚠️ | Lund (Science) | Bioinformatics (NABIN) | B | — | — | Not contacted |
| 120 | Dr. Herman Haverkort | Bonn | M.Sc. CS — elective-approval desk | Personalised | — | — | Not contacted |
| 121 | Dr. Antje Kiesel | Bonn | M.Sc. Mathematics | Personalised (DE) | — | — | Not contacted |
| 122 | Dr. Matthias Frank | Bonn | M.Sc. CS — Beratung + Prüfungsausschuss | C (DE) | — | — | Not contacted |
| 123 | Judith König | Bonn | M.Sc. CS — receives the Anträge | B (DE) | — | — | Not contacted |

---

## ⚠️ Consolidated Send Calendar — this now overrides batch order

Four batches carry dated windows and three expire within six weeks. Batch 3 has no deadline at all;
Ghent's closes 30 September. **Work this table, not the batch numbers.** Full version with reasoning in
`batch-6-contacts.md`.

| When | Who | Why it expires |
|---|---|---|
| **This week** | Butterfield (TCD, #75) | M.A.I. choices changeable only to end of teaching week 1 |
| **Now – early Sept** | Twente (#112–115) | Quartile-1 / 3-months-from-start deadlines; live now |
| **Before mid-Sept** | Warsaw MIMUW (#79–82) | Lands before the academic year and seminar allocation |
| **1–18 Sept** | Ghent (#104–107) | **FEA deadline 30 Sept** — one submission, then edit rights lost |
| **14–25 Sept** | Sapienza (#108–111) | DIAG window, submitted once per year, unchangeable |
| **21 Sept – 17 Oct** | Sorbonne (#96–99) | Rentrée + UE-voeux period |
| **Mid-Sept – early Nov** | Paris-Saclay (#63–66) | *Contrat pédagogique* legally due 15 Nov |
| **Before 5 Oct** | Bologna (#42–43) | Piano di studi window 5 Oct – 6 Nov |
| **Mid-Oct** | Politechnika Warszawska (#84–87) | Late Aug *is* the declaration window — arrive after it |
| **After mid-Oct** | KU Leuven EE + Mahy (#40–41) | Hold until the ISP deadline passes |
| No hard window | AGH, UJ, Copenhagen, Lund, Bonn, all of Batch 3 | Fill around the dated sends |

---

**What Batch 6 established.** Batch 4 asked *whether* a tool exists; Batch 5 asked *what layer* it
validates at; Batch 6 answers **what the student is committed to before anyone checks** — and that is
the real product. Ghent: one submission, edit rights lost, reply may arrive 14 Nov, the same day the
first-semester change deadline expires. Sapienza: once per year, unchangeable, twelve months lost.
Bonn: Schwerpunkt binding under PO 2023 §4(4). UJ: deklaracja przedmiotowa or skreślenie.

**Two artifacts are the pitch, quoted from the institutions' own systems.** Copenhagen ships a planner
whose only aggregate is literally `Antal ECTS-point: {{ects_total}}` while its restricted-elective rule
spans **three overlapping lists** — 60 valid ECTS can still fail. Twente's form has
`<input type="number" min="120" max="240">` for total credits, typed by the student rather than summed
from its own 32 checkboxes.

**Set-cover, not sums — now five instances:** UJ (6 of 10 electives must match the ścieżka), AGH WI
(one semester-2 elective must be English-taught), Bonn (six interlocking Wahlpflicht rules), Lund
(specialisation courses must share one läro- och timplan), Copenhagen (the three overlapping lists).

**Poland — the USOS claim is now precise, and the old wording was too strong.** Never write that USOS
"cannot" check plans. It validates **each course** (PW's WEiTI rejects declarations with missing
prerequisites at registration); it never validates **the set** against the degree; and it *does* ship a
staff-side settlement module that runs after the session on graded courses. Claim **stage, not
capability**. Also: **AGH runs USOS after all** — Wirtualna Uczelnia is a portal on top of it.
**The Warsaw drafts (#79–82) predate this refinement — re-read them before sending.**

**Competitive intelligence, first sighting:** Lund has a live student-built competitor at
**`studyplan.se`**, plus an official Ladok-backed "Min studieplan". First direct competitor seen
anywhere in this campaign.

**Never email:** `teaching-unit@rt.scss.tcd.ie` (RT ticket queue) · AGH **dziekanat inboxes** (WI accepts
mail only from `agh.edu.pl` senders — a bounce would read as disinterest).

**Excluded deliberately — do not rescue:** van Grinsven (Twente, EIT Digital coordinator spanning six
already-contacted schools), Kożuszek (PW, shares Firek's inbox), Turlej (PW — owns USOS development;
wrong *first* contact, right second one if PW bites), Bonn's Prüfungsausschuss chairs (no published
addresses, not guessed).

**Pipeline total:** 20 sent + 17 (B3) + 25 (B4) + 21 (B5) + 40 (B6) = **123 contacts across 38
universities in 15 countries**, against the 50-email target.



---

## Follow-up Cadence Rules (from `email-templates.md`)

1. **Email follow-up** — day +5 after the first email. **Only one.** Never a second.
2. **LinkedIn connection note** — day +2 (named people only; skip role-based inboxes).
3. **LinkedIn follow-up** — if connected and no reply after 1 week.
4. On a positive reply → offer a 20-min call, log in `tracking-spreadsheet.md`.
5. On "talk to IT" → ask for the IT contact directly.
6. On "not interested" → ask "what would need to be true for it to be useful?"

All drafts are pre-written in `follow-ups.md` — paste when the window hits.

---

## Research Backlog (next batch)

Find coordinator emails, log in a new `batch-7-contacts.md`, draft with matching template.

> **The pipeline is no longer the bottleneck — sending is.** 123 contacts are drafted and 103 of them
> have never been sent. Three windows close within six weeks (see the Consolidated Send Calendar).
> More research does not move the North Star until mail actually goes out. Treat Batch 7 as optional.

**Cleared by Batches 3–6 (38 universities, 15 countries):** UvA, VU Amsterdam, Leiden, Radboud, Twente,
Politecnico di Torino, Bologna, Sapienza, EPFL, KIT, TU Darmstadt, TU Berlin, Bonn, Uppsala, Lund,
KU Leuven, Ghent, DTU, Copenhagen, Paris-Saclay, Sorbonne, UPC Barcelona, Trinity College Dublin,
University of Warsaw, Politechnika Warszawska, AGH, Jagiellonian. **IST Lisbon researched and
deliberately dropped** — Fénix already does the job.

**Poland is now three-quarters done and the wedge is proven.** USOS/MUCI: validates each course, never
the set; staff-side settlement runs after the session. Remaining MUCI targets where the same opening
works with only the local grid swapped in: **UAM Poznań, Politechnika Gdańska, Politechnika Wrocławska,
Uniwersytet Wrocławski.** Cheapest research pass available — the finding is already established.

**Still to research:** DSBA at **WNE UW** (separate faculty from MIMUW — its own contacts), KTH Data
Science (KTH MSc CS already emailed in Batch 2), Gothenburg, Aarhus, Trento, Groningen, Grenoble INP,
NTNU (Norway — EEA, not EU).

**UK, deliberately parked:** Edinburgh, Manchester, Bristol. Not EU — keep separate if the pitch ever
needs an EU-only framing, since GDPR/hosting answers land differently there.

**Open items carried forward:**
- **Re-read the Warsaw drafts (#79–82) against the refined USOS wording** before sending — they were
  written before UJ/PW/AGH corrected it. Never claim USOS "cannot" check; claim stage, not capability.
- Resolve coordinator conflicts before spending reserve addresses — KU Leuven CS (Devriese vs Holvoet),
  Bologna Ing. Informatica (Denti vs Chesani), Bologna Ing. Elettronica (Gnudi vs Reggiani, no draft
  until fixed), Sapienza Data Science (Silvestri vs Cuomo — #111 is addressed unnamed on purpose).
- Paris-Saclay **mention E3A is uncovered** — no verifiable address exists publicly, none guessed.
  Needs a browser pass or a phone call.
- **Sorbonne needs a browser check before quoting article numbers** — the 2025-26 MCC PDF 404'd, and
  the 2026 rentrée date was never confirmed.
- Verify Lund #117 against the live page — LUCAT renders addresses obfuscated.
- Polish drafts need a native-speaker glance. Titles differ by university: UJ's four are plain **dr**;
  PW's and AGH's are *prof. uczelni / prof. AGH*.

**Competitive intelligence — `studyplan.se`, recon complete 2026-08-27.** Full report in
`competitor-studyplan-se.md`. The only direct competitor found across 38 universities.

- **No AI anywhere.** All 33 JS chunks downloaded and grepped; only false positives.
- **The whole graduation check is one line:**
  `Math.min(x,90)+Math.min(y,45)+Math.min(z,45)+Math.min(w,30) === 210`, against **one global rule set
  shared by all 27 programmes**. "Closest specialisation" is a descending sort on summed credits.
- **Live but frozen ~17 months** — chunk hashes identical to the March 2025 Wayback capture, footer and
  terms still 2024, founders on other projects.
- **2,578 real users** (public `/api/home-info` endpoint) at a single faculty. Free, no legal entity,
  boilerplate TermsFeed legals, no LTH/TLTH/press footprint.
- Data: admin-clicked "Add course HTML from LTH" scrapes plus student-uploaded Ladok PDFs.

**What it means.** It is a demand proof, not a competitor: 2,578 students at one faculty used an
unmaintained tool. And its architecture cannot do the thing this campaign sells — a single global
credit-sum rule set cannot express per-programme set-cover constraints (UJ's 6-of-10, Bonn's six
interlocking rules, Lund's own one-läro-och-timplan rule). Their ceiling is the pitch.

**If an LTH contact raises it:** the honest and generous line is that it proves the need. Do not raise
it unprompted, and never disparage it — three students shipped something 2,578 people used.

**Method notes, worth keeping.**
1. **Tell every researcher to correct the brief.** All sixteen across Batches 4–6 did, and several
   corrections would otherwise have produced emails that got deleted on sight — pitching Data Science
   to the wrong PW faculty, calling four UJ *dr* "Professor", claiming an approval step at UPC that
   does not exist, reusing Paris-Saclay's 15 November date at Sorbonne where it does not exist.
2. **"An honest deprioritise beats a forced pitch."** It has now correctly killed IST Lisbon, Bonn's
   Life Science Informatics and Ghent's MSc EE.
3. **Pass established findings forward to verify, not re-derive.** Cheaper, and the refutations are
   where the value is — AGH refuted "AGH does not run USOS", Ghent refuted "Oasis validates like KU
   Loket", Lund refuted "the Uppsala hook transfers".
---

## Marketing Backlog

- [ ] **1. Cal.com booking** — replace every `mailto:` demo CTA with a Cal.com link
      (`BOOKING_URL` const) across Hero, Navbar, CTAFooter, ForUniversities, contact.astro.
      Keep mailto only as the "or email directly" fallback line. *(in progress)*
- [ ] **2. UTM links** — demo + site links carry
      `?utm_source=email|linkedin&utm_medium=outreach&utm_campaign=coordinator-90d`.
- [ ] **3. Demo clip** — turn the Screenshots section into a short looping GIF/MP4 of the
      planner validating a plan in real time.
- [ ] **4. SEO/OG pass** — verify title, meta description, OG tags; add a sitemap.
- [ ] **5. First real proof** — once a pilot/positive reply lands, swap the aspirational stat
      footnote for a real quote + (if permitted) institution name/logo.
- [ ] **6. Lighthouse** — keep ≥95 perf/SEO/a11y after the video embed.

---

## Weekly Review Ritual (every Monday)

1. Log any replies received → update the pipeline status + `tracking-spreadsheet.md`.
2. Fire any follow-ups whose +5d window has hit (paste from `follow-ups.md`).
3. Send LinkedIn connection notes for +2d contacts.
4. Update the weekly metrics row (emails / replies / reply rate / calls).
5. By week 4: decide which template is winning; kill the underperformer.
6. Research + send next research-backlog contacts toward the 50-email target.

---

## Reference Files

- `target-list.md` — 50 target MSc programmes.
- `email-templates.md` — Templates A/B/C, follow-up, LinkedIn notes, tips.
- `tracking-spreadsheet.md` — Google Sheets structure + 90-day metrics.
- `batch-1-contacts.md`, `batch-2-contacts.md` — verified contacts + send order.
- `batch-3-contacts.md` — 17 verified contacts across UvA, KIT, TU Darmstadt, Polito, VU + full drafts.
- `batch-4-contacts.md` — 25 verified contacts across KU Leuven, Bologna, DTU, Uppsala, Radboud + full drafts, per-university research, send schedule.
- `batch-5-contacts.md` — 21 verified contacts across Paris-Saclay, UPC Barcelona, TU Berlin, Trinity College Dublin, Warsaw (+ IST Lisbon, researched and dropped) + full drafts, per-university research, send schedule.
- **`SEND-SCHEDULE.md`** — dated send plan, 1 Sept – 8 Oct 2026. **This file, not batch order, decides what goes out.**
- `batch-6-contacts.md` — 40 verified contacts across Politechnika Warszawska, AGH, Jagiellonian, Sorbonne, Copenhagen, Ghent, Sapienza, Twente, Lund, Bonn + full drafts, per-university research, and the **consolidated send calendar**.
- `follow-ups.md` — pre-written follow-ups for every sent contact.

### UTM links (paste into outreach)
- Demo: `https://ae-planner-proxy.vercel.app?utm_source=email&utm_medium=outreach&utm_campaign=coordinator-90d`
- Site: `https://studyplanner-marketing-steel.vercel.app?utm_source=email&utm_medium=outreach&utm_campaign=coordinator-90d`
