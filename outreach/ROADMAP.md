# StudyPlanner — Growth Roadmap (Marketing + Outreach)

> **This is the single source of truth.** Update it every working session so nothing is lost.
> Last updated: 2026-05-28

---

## North Star

Get the first university programme to pilot StudyPlanner.

**90-day target** (from `tracking-spreadsheet.md`):
- 50 emails sent
- ≥20% reply rate (10+ replies)
- 10 demo calls done
- 1 pilot agreed

---

## Status Snapshot (2026-05-28)

- **Marketing site** — live at https://studyplanner-marketing-steel.vercel.app. Single-page layout
  (Hero → Problem → Stats → How It Works → Features → For Universities → Case Study →
  Screenshots → FAQ → CTA Footer) + `/contact`. First effectiveness pass done: stats,
  TU Delft case study, FAQ, GDPR block, sharpened headline.
- **Outreach** — Batch 1 + Batch 2 **all sent**. No follow-ups sent yet. Drafts ready in
  `follow-ups.md`.
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

## Research Backlog (Batch 3)

Find coordinator emails, log in `batch-3-contacts.md`, draft with matching template.

**Still to research** (from `batch-2-contacts.md`):
University of Amsterdam (MSc AI), VU Amsterdam (MSc CS), Leiden (already found — done),
Radboud (MSc CS), KTH Data Science, Politecnico di Torino (MSc CS Eng.),
University of Bologna (MSc CS), EPFL (already found — done), University of Edinburgh (MSc CS).

**Tier 2 — high-electives MSc programmes:**
Bonn, Manchester, Bristol, Uppsala, Gothenburg.

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
- `follow-ups.md` — pre-written follow-ups for every sent contact.

### UTM links (paste into outreach)
- Demo: `https://ae-planner-proxy.vercel.app?utm_source=email&utm_medium=outreach&utm_campaign=coordinator-90d`
- Site: `https://studyplanner-marketing-steel.vercel.app?utm_source=email&utm_medium=outreach&utm_campaign=coordinator-90d`
