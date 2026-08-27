# Send Schedule — SUPERSEDED 2026-08-27

> ## ⚠️ This calendar no longer drives sending. A cron does.
>
> This file was written before we found the working automation. It assumed sending was manual. It is
> not, and never was — `ae-planner-proxy` has been sending on a daily GitHub Actions cron since
> before this file existed, and had already sent **74** emails while this repo's ROADMAP still said 20.
>
> **Where sending actually happens:** `~/ae-planner-proxy`, branch `main`
> - `docs/prospects/global-prospect-dossier-2026-08-10.md` — the source of truth for prospects
> - `scripts/outreach.mjs` — `build` → `approve` → Gmail API send (scope `gmail.send`)
> - `docs/prospects/outreach-queue.json` — the live send log
> - `.github/workflows/outreach-send-cron.yml` — daily 08:00 UTC, `--per-day 10`
>
> **All 106 drafts from `batch-3..6-contacts.md` were imported into that dossier on 2026-08-27**
> (`scripts/import-manual-batches.mjs`). 104 were new; 2 were already known. The queue went from 150
> to 259 entries. The cron approves and sends them — no one pastes anything by hand.
>
> **What stays useful below:** the *reasoning*. The dated windows are real and the cron does not know
> about them — it paces by volume, not by deadline. Ghent still closes 30 September; Sapienza's DIAG
> window is still once-per-year; PW should still not be mailed during their declaration window. To act
> on any of that, set `- **Priority:**` on the entry in the dossier — priority lets an entry jump the
> queue without moving position, which is the only safe way to reorder.
>
> **Also still true:** the blockers table, the do-not-send list, and the deliverability warning. The
> cron sends from the same single Gmail address at 10/day and cannot tell you when it starts landing
> in spam.

---

<details>
<summary>Original manual calendar (kept for the deadline reasoning)</summary>

Built 2026-08-27, rebuilt same day at **10 emails/day**. Batch 3 has been ready longest and has no
deadline; Ghent's closes 30 September. Deadlines win.

**All 102 unsent contacts are scheduled.** At 10/day, Tue–Thu, the whole pipeline clears in four
sending weeks plus a mid-October tail for the two universities that must not be contacted before then.

**Rules:** send Tue–Thu, 08:00–10:00 **recipient local time** — at 10/day that is roughly one email
every 12 minutes, and most recipients are CEST so the window is genuinely shared. Max **2 contacts per
university per day**. Never two people from one department on one day. One follow-up only, +5 days.
LinkedIn connection note +2 days, named people only.

---

## ⚠️ Deliverability — the real constraint at this volume

30 cold emails/week from a single Gmail address, mostly to `.edu` domains with aggressive filtering.
This is the part of the plan most likely to fail silently: if `alessandromiccolo2003@gmail.com` gets
reputation-flagged, later batches land in spam and you will not know it happened — no bounce, just
no replies. Mitigations, in order of value:

1. **Warm up.** Week 1 Tuesday, send **5**, not 10. Ramp to 10 by Thursday. A cold personal account
   jumping straight to 10/day to unfamiliar domains is the classic trigger.
2. **Never paste the same body twice.** Every draft is already individually written — that is the
   single strongest protection you have. Do not shortcut to a template as volume rises.
3. **Send manually, spaced.** No mail-merge tool, no BCC, no bulk sender. One at a time, 10–15 minutes
   apart, inside the local-morning window.
4. **Watch the first replies for tone as well as content.** If week 1 gets zero replies across 30
   sends, suspect delivery before suspecting the pitch.
5. **Consider a custom domain** (e.g. `alessandro@studyplanner.<tld>`) before the October tail. A
   domain you control can be warmed and monitored; a Gmail address that gets flagged is unrecoverable.

---

## ⚠️ Blockers — each must clear BEFORE its send date

| Status | What | Detail |
|---|---|---|
| ✅ **CLEARED 27 Aug** | **Warsaw drafts (#79–82) USOS wording** | Re-read against the UJ/PW/AGH refinement. Drafts 1, 3, 4 were already stage-framed. Draft 2 (Schubert) said "USOSweb only checks registration limits at the front" — rewritten. Note recorded in `batch-5-contacts.md`. |
| Before **1 Sept** | Bounce-test KIT ⚠️ (#24, #25) | Decoded from `∂does-not-exist.kit edu` spam-trap obfuscation. Personal addresses first, role inboxes only after 24h clean. |
| Before **14 Sept** | Re-check Sapienza DIAG window dates | Published Aug 2026; the whole pitch rests on them |
| Before **15 Sept** | Verify Lund #117 against the live page | LUCAT renders obfuscated |
| Before **22 Sept** | Sorbonne: browser-check MCC article numbers; confirm 2026 rentrée date | The 2025-26 MCC PDF 404'd. **Do not quote an article number until verified.** |
| Before **22 Sept** | Bounce-test Genitrini (#96) ⚠️ | Decoded from LIP6's `null` anti-scraper token |
| Before **22 Sept** | Re-verify Bologna's 5 Oct – 6 Nov window | Published Aug 2026 for A.Y. 2026/27 |
| Rolling | Native-speaker glance on Polish drafts | Titles differ: UJ's four are plain **dr**; PW's and AGH's are *prof. uczelni / prof. AGH* |
| Rolling | Bounce-test remaining ⚠️ | PW #86–87, AGH #89, Paris-Saclay #65–66, Lund #119, Radboud #61, TU Berlin #72–73, UPC #68 |

---

## Week 1 — 1, 2, 3 September  ·  25 sends (warm-up week)

**Tue 1 Sept — 5 sends (deliberately half; warm-up)**

| # | Contact | University | Why today |
|---|---|---|---|
| **75** | Prof. Andrew Butterfield | TCD | **Most urgent in the campaign** — M.A.I. choices close end of teaching week 1 |
| 112 | dr.ir. Vadim Zaytsev | Twente | Quartile-1 window live now |
| 104 | Studietrajectbegeleiding burgerlijk ir. | Ghent | FEA window opens; deadline 30 Sept |
| 79 | dr Daria Walukiewicz-Chrząszcz | Warsaw | Before mid-Sept · USOS wording cleared |
| 21 | Cecilia Sigvardsdotter | UvA | Batch 3 opener — advises four programmes at once |

**Wed 2 Sept — 10 sends**

| # | Contact | University |
|---|---|---|
| 113 | dr. Hil Meijer | Twente |
| 105 | Trajectbegeleiding Wetenschappen | Ghent |
| 80 | dr hab. Aleksy Schubert | Warsaw |
| 35 | Dr. Michel Klein | VU Amsterdam ⚠️ *not same day as any UvA* |
| 24 | Dr.-Ing. Ioana Gheta | KIT |
| 28 | Dr.-Ing. Jasmin Boghrat | TU Darmstadt |
| 32 | Alessandro Savino | Polito |
| 48 | Per Bækgaard | DTU — subject **must** start `H-CAI:` |
| 53 | Liselott Dominicus | Uppsala |
| 58 | Dr Johannes Textor | Radboud |

**Thu 3 Sept — 10 sends**

| # | Contact | University |
|---|---|---|
| 114 | Lisette van den Broek | Twente |
| 106 | Studietrajectbegeleiding industrieel ir. | Ghent |
| 81 | dr hab. Norbert Dojer | Warsaw |
| 22 | Prof. Evangelos Kanoulas | UvA |
| 25 | Lena Coerdt | KIT |
| 29 | Prof. Jan Peters | TU Darmstadt |
| 33 | Paolo Garza | Polito |
| 49 | Jørgen Villadsen | DTU — peer-to-peer framing, ask him to break it |
| 54 | Lars-Henrik Eriksson | Uppsala |
| 59 | Dr Perry Groot | Radboud |

## Week 2 — 8, 9, 10 September  ·  30 sends

**Tue 8 Sept**

| # | Contact | University |
|---|---|---|
| 115 | Josca van Houwelingen-Snippe | Twente — closes Twente |
| 107 | Kwaliteitscel Onderwijs FEA | Ghent — closes Ghent, 3 weeks before deadline |
| 82 | mgr K. Czyrkowska-Dziemba | Warsaw — closes Warsaw |
| 36 | Vincenzo Stoico | VU Amsterdam |
| 26 | Fachstudienberatung inbox | KIT — only after bounce check |
| 30 | Tim Neubacher | TU Darmstadt |
| 34 | Mario Roberto Casu | Polito |
| 50 | Ziwei Ouyang | DTU |
| 55 | Olga Kaj | Uppsala |
| 60 | Dr Marieke de Vries | Radboud |

**Wed 9 Sept**

| # | Contact | University |
|---|---|---|
| 38 | Devriese (director inbox) | KU Leuven — ISP season, salient now |
| 23 | Master-Science inbox | UvA — closes UvA |
| 27 | ETIT Studiengangservice | KIT — sharpest wedge at KIT |
| 51 | Yiqiu Dong | DTU |
| 56 | R. Thinniyam Srinivasan | Uppsala |
| 61 | Susanne van Helden ⚠️ | Radboud — different faculty |
| 67 | Óscar Romero Moral | UPC — covers MIRI **and** MEI |
| 71 | Studienfachberatung CS | TU Berlin |
| 88 | dr hab. inż. Igor Wojnicki | AGH |
| 92 | dr Jakub Zygadło | Jagiellonian — set-cover hook, 6 of 10 |

**Thu 10 Sept**

| # | Contact | University |
|---|---|---|
| 39 | MAI programme office | KU Leuven |
| 37 | Dr. N. Silvis-Cividjian | VU Amsterdam — closes VU |
| 62 | Drs Vera Kamphuis | Radboud — closes Radboud |
| 68 | Marcos Postigo Boix ⚠️ | UPC |
| 72 | Prüfungsausschuss ISM ⚠️ | TU Berlin |
| 89 | dr inż. Marek Gajęcki ⚠️ | AGH — English-elective hook |
| 93 | dr Małgorzata Moczurad | Jagiellonian |
| 100 | Yongluan Zhou | Copenhagen — the `{{ects_total}}` hook |
| 120 | Dr. Herman Haverkort | Bonn — elective-approval desk |
| 76 | Prof. Doug Leith | TCD — **say plainly this is a 2027-28 pitch** |

## Week 3 — 15, 16, 17 September  ·  29 sends

**Tue 15 Sept**

| # | Contact | University |
|---|---|---|
| 108 | Prof. Riccardo Lazzeretti | Sapienza — window opens |
| 63 | Florent Hivert | Paris-Saclay — window opens mid-Sept |
| 73 | Prüfungsausschuss CS ⚠️ | TU Berlin |
| 90 | dr hab. inż. Joanna Kwiecień | AGH |
| 94 | dr Katarzyna Grzesiak-Kopeć | Jagiellonian |
| 101 | Boris Düdder | Copenhagen |
| 121 | Dr. Antje Kiesel | Bonn |
| 77 | Prof. Gavin Doherty | TCD |
| 44 | master.ai@unibo.it | Bologna |
| 116 | Pablo Hernandez | Lund — the named human doing the arithmetic |

**Wed 16 Sept**

| # | Contact | University |
|---|---|---|
| 109 | Prof. Giorgio Grisetti | Sapienza |
| 64 | Romane Taddei | Paris-Saclay |
| 74 | Studienfachberatung CE | TU Berlin — closes TU Berlin |
| 91 | dr inż. Mikołaj Skowron | AGH — closes AGH |
| 95 | mgr Iwona Wojtkiewicz | Jagiellonian — closes UJ |
| 102 | Trine Krogh Boomsma | Copenhagen |
| 122 | Dr. Matthias Frank | Bonn — sits on both sides of the desk |
| 78 | Dr. Mimi Zhang | TCD — closes TCD |
| 45 | Enrico Denti | Bologna |
| 117 | Patrik Persson ⚠️ | Lund — verify live page first |

**Thu 17 Sept — 9 sends**

| # | Contact | University |
|---|---|---|
| 111 | Data Science mailbox (unnamed) | Sapienza — **keep it unnamed**, chair conflict unresolved |
| 65 | Janna Burman ⚠️ | Paris-Saclay |
| 66 | Murielle Benard ⚠️ | Paris-Saclay — closes Paris-Saclay |
| 103 | Amelie Stein | Copenhagen — closes Copenhagen |
| 123 | Judith König | Bonn — closes Bonn ⚠️ *different week from #120, same office* |
| 46 | Giancarlo Succi | Bologna |
| 47 | Ugo Dal Lago | Bologna |
| 118 | msc.mlsc@lth.lu.se | Lund |
| 119 | Lotta Persmark ⚠️ | Lund — closes Lund |

> ⚠️ #120 Haverkort (10 Sept) and #123 König (17 Sept) share an office — a full week apart, as required.

## Week 4 — 22, 23, 24 September  ·  8 sends (date-gated tail)

Thin by design: everything left is gated on a window that has not opened yet.

**Tue 22 Sept**

| # | Contact | University |
|---|---|---|
| **110** | Prof. Domenico Lembo | Sapienza — **Presidente CAD, deliberately last.** #108, #109, #111 all precede him |
| 98 | Olivier Fourmaux | Sorbonne — **Directeur du Master**, lead with him |
| 42 | Valerio Velino | Bologna — before the 5 Oct window opens |
| 43 | Valerio Marcopoli | Bologna — closes Bologna |

**Wed 23 Sept**

| # | Contact | University |
|---|---|---|
| 97 | Aurélie Beynier | Sorbonne — AI2D |
| 31 | Studienbüro inbox | TU Darmstadt — closes TU Darmstadt |
| 52 | DTU Study Guidance | DTU — closes DTU |
| 57 | Davide Vega D'Aurelio | Uppsala — closes Uppsala |
| 69 | Anna Queralt Calafat | UPC |

**Thu 24 Sept**

| # | Contact | University |
|---|---|---|
| 96 | Antoine Genitrini ⚠️ | Sorbonne — bounce-test first; hosts the UE-voeux tool |
| 99 | Danielle Émery | Sorbonne — E3A/EEA, separate department. Closes Sorbonne |
| 70 | Secretaria FIB | UPC — closes UPC |

## Mid-October tail — 13, 14 October  ·  6 sends

Held deliberately. Late August *is* PW's declaration window and KU Leuven's ISP deadline is mid-October
— both must arrive *after*, not during.

**Tue 13 Oct**

| # | Contact | University |
|---|---|---|
| 84 | dr inż. Tomasz Traczyk | Politechnika Warszawska — **he publicly invites this email**, lead with him |
| 85 | dr inż. Piotr Firek | Politechnika Warszawska |

**Wed 14 Oct**

| # | Contact | University |
|---|---|---|
| 86 | dr hab. inż. Marek Gągolewski ⚠️ | Politechnika Warszawska (MiNI) |
| 87 | dr inż. Krzysztof Kaczmarski ⚠️ | Politechnika Warszawska (MiNI) — closes PW |
| 40 | Reynaert (secretariat) | KU Leuven — ISP deadline now passed |
| 41 | Adriaan Mahy | KU Leuven — closes KU Leuven |

---

## Optional, not scheduled

**#83 Pedro Tiago Monteiro (IST Lisbon)** — Fénix already does the job. The one surviving draft pitches
only the irreversible-enrolment gap. Send it if you want the coverage; skipping it costs nothing.

---

## Totals

| Week | Sends | Running |
|---|---|---|
| W1 (1–3 Sept) | 25 | 25 |
| W2 (8–10 Sept) | 30 | 55 |
| W3 (15–17 Sept) | 29 | 84 |
| W4 (22–24 Sept) | 13 | 96 |
| Tail (13–14 Oct) | 6 | **102** |

**All 102 unsent contacts placed, each exactly once** (verified against the ROADMAP pipeline). With the
20 already sent in May, the campaign reaches **122 emails against a 50-email 90-day target**, plus #83
optional.

**Follow-up load:** every send generates one +5d follow-up. Peak is week 3, where you are handling
roughly 29 new sends plus 30 follow-ups from week 2 — about 60 touches. Budget time for it, or drop
the second contact per university rather than a whole university.

---

## Spacing constraints this schedule respects

- **UvA ↔ VU Amsterdam** never on the same day (joint MSc CS degree): UvA on 1, 3, 9 Sept; VU on 2, 8, 10 Sept.
- **Sapienza:** Lembo (#110) after Lazzeretti, Grisetti and the DS mailbox — 22 Sept, five days clear.
- **Sorbonne:** Fourmaux (#98) 22 Sept, Genitrini (#96) 24 Sept — both Master Informatique leadership, staggered.
- **Bonn:** Haverkort (#120) and König (#123) a full week apart; same office.
- **Bonn ↔ RWTH Aachen:** RWTH was contacted in May, no follow-up pending — the ≥2-week b-it spacing holds.
- **Twente ↔ Delft/Eindhoven:** 4TU CybSec overlap; Delft and Eindhoven were May sends, no live thread.
- **Copenhagen ↔ DTU:** DTU runs 2–9 Sept, Copenhagen 10–17 Sept. No same-day, same-city collision.
- **Max 2 per university per day**, and one per department per day, throughout.
- **National networks** (Dutch, Swedish, Italian, Polish study-adviser communities are small): no more than two institutions from one country on any single day.

## Not in this schedule, on purpose

`teaching-unit@rt.scss.tcd.ie` (RT ticket queue) · AGH dziekanat inboxes (accept mail only from
`agh.edu.pl` senders) · van Grinsven (Twente, EIT Digital — spans six already-contacted schools) ·
Kożuszek (PW, shares Firek's inbox) · Turlej (PW — owns USOS development; right *second* contact, wrong
first) · Bonn Prüfungsausschuss chairs (no published addresses) · Geuvers (Radboud — standing TU/e
appointment) · all reserve addresses in every batch file.

</details>
