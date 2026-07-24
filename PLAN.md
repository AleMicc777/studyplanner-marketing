# StudyPlanner — Long-Term Plan
> Last updated: 2026-05-29  
> Purpose: survive chat compaction. Read this at the start of every session.

---

## 1. What this project is

**StudyPlanner** — an AI-assisted MSc study plan builder, originally built for TU Delft Aerospace Engineering (AE MSc).  
Goal: license it to other European universities as a SaaS tool.  
Two repos:

| Repo | Purpose | URL |
|---|---|---|
| `ae-planner-proxy` (Desktop) | The actual planner app (React + Vite + Vercel serverless) | https://ae-planner-proxy.vercel.app |
| `studyplanner-astro` (Desktop) | B2B marketing landing page (Astro + Tailwind) | https://studyplanner-marketing-steel.vercel.app |

---

## 2. Marketing site status

**Stack:** Astro + Tailwind CSS, deployed on Vercel, branch: `master`  
**Structure:** single-page layout (/ + /contact only)

### Sections live on `/`:
1. Hero — "Stop validating study plans by hand." CTA → pre-filled mailto demo request
2. Problem
3. Stats — ~2 hrs saved/student/year · <2 wks to go live · 0 invalid plans
4. How It Works
5. Features
6. For Universities — includes GDPR data block
7. Case Study — TU Delft AE: 180+ courses, 4 tracks, <2 wks setup
8. Screenshots / Demo
9. FAQ (6 questions, native `<details>` accordion)
10. CTA Footer

### Nav links:
- `/#how-it-works` · `/#universities` · Demo (external) · Contact (`/contact`)
- Single CTA button: "Book a demo" → mailto

### Demo mailto:
```
mailto:alessandromiccolo2003@gmail.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A
```

### Marketing site TODO:
- [ ] Add real screenshot of the planner UI (save to `public/screenshots/planner-ui.png` and reference in Screenshots section)
- [ ] Add social proof once first non-TU Delft university confirms interest
- [ ] A/B test Hero headline once traffic starts coming in
- [ ] Add an "Institutions interested" or "Pilot partners" section once deals progress
- [ ] Consider adding a short demo video (Loom embed)

---

## 3. Outreach — status as of 2026-05-29

### Emails already sent (Batch 1 + Batch 2):
All of the following have been sent. Do not re-send.

| # | Contact | University | Template | Sent |
|---|---|---|---|---|
| 1 | maria.christakis@tuwien.ac.at | TU Wien (CS) | C | ✅ |
| 2 | hilda.tellioglu@tuwien.ac.at | TU Wien (Media Informatics) | C | ✅ |
| 3 | studyadvisor-eemcs@tudelft.nl | TU Delft EEMCS | A | ✅ (hold — wait for Daniella response) |
| 4 | coordinator.cosc@uu.nl | Utrecht University CS | A | ✅ |
| 5 | master-eecs@kth.se | KTH EECS | A | ✅ |
| 6 | eileen.hazboun@epfl.ch | EPFL | B | ✅ |
| 7 | mastercs@liacs.leidenuniv.nl | Leiden University CS | A | ✅ |

### Also sent (Batch 3):
| # | Contact | University | Template | Sent |
|---|---|---|---|---|
| 8 | krasimir.angelov@cse.gu.se | Chalmers/Gothenburg CS | C | ✅ |
| 9 | master@informatik.rwth-aachen.de | RWTH Aachen CS | A | ✅ |
| 10 | masters-sci@aalto.fi | Aalto University CS | A | ✅ |

### Still to research (no email found yet):
- KTH Data Science track coordinator
- University of Edinburgh Informatics MSc
- University of Bologna CS MSc
- Politecnico di Torino CS/Data MSc
- University of Amsterdam (UvA) AI MSc
- VU Amsterdam CS MSc
- Radboud University CS MSc
- University of Bonn CS MSc
- University of Manchester CS MSc
- University of Bristol CS MSc
- Uppsala University CS MSc

### Email templates (reference):

**Template A — Direct / Pain-first**
```
Subject: Reduce elective planning emails from [Programme] students

Hi,

I'm Alessandro, an MSc Aerospace Engineering student at TU Delft. I built a tool that's now used by AE students here to build valid study plans without emailing coordinators.

Students pick their track, get mandatory courses pre-loaded, and an AI validates their elective choices in real time — catching EC shortfalls and prerequisite conflicts before they submit anything.

[1-sentence personalisation about their programme if applicable]

Would a 20-minute demo make sense? Happy to show you the TU Delft version live.

Best,  
Alessandro  
ae-planner-proxy.vercel.app
```

**Template B — Demo-first**
```
Subject: Study planning tool for [Programme] — live demo at TU Delft

Hi,

Quick note: I've built and deployed a study planner for TU Delft's Aerospace Engineering MSc that reduces coordinator email load by giving students instant, automated plan validation.

I think the same approach could work for [Programme]. Happy to walk you through a live demo — 20 minutes, no commitment.

Best,  
Alessandro  
ae-planner-proxy.vercel.app
```

**Template C — Personalised (research-heavy)**
```
Subject: Automated study plan validation for [Programme name]

Hi [Name],

I'm Alessandro, an MSc Aerospace Engineering student at TU Delft. I noticed [specific detail about their programme — elective breadth, track structure, etc.] and thought you might find this relevant.

I built a tool that's live for TU Delft AE students: they select their track, mandatory courses auto-load, and AI validates their plan in real time — flagging EC gaps, prerequisite issues, and workload imbalances before anything is submitted.

[1-2 sentences about how this maps to their specific programme context]

I'd love to show you a 20-minute demo. Would that be worth 20 minutes of your time?

Best,  
Alessandro  
ae-planner-proxy.vercel.app
```

---

## 4. Next steps — priority order

### Immediate (next session):
1. ~~**Send emails #8, #9, #10**~~ ✅ All 10 emails sent
2. **Follow up** on all 10 if no reply after 5–7 business days (first follow-ups due ~2026-06-05)

### Short term (1–2 weeks):
3. **Research Tier 2 universities** — Edinburgh, Bologna, Torino, UvA, VU, Radboud, Bonn, Manchester, Bristol, Uppsala, Gothenburg
4. **Add screenshot** to marketing site (`public/screenshots/planner-ui.png`)
5. **Prepare a 1-page pitch PDF** (adapt `outreach-onepager.md` from `ae-planner-proxy`) to attach to replies that ask for more info

### Medium term (1 month):
6. If any university shows interest → schedule demo → prepare demo script
7. Draft a pricing/proposal template (per-institution annual licence)
8. Consider LinkedIn outreach to programme directors as a parallel channel

### Long term:
9. First paying customer → use as reference case for next outreach wave
10. Build a generic "course catalogue import" tool to reduce setup time below 1 week
11. Evaluate whether to generalise beyond AE/CS into other elective-heavy MSc programmes (Engineering, Business, etc.)

---

## 5. Key contacts & context

- **My email:** alessandromiccolo2003@gmail.com
- **Demo URL:** https://ae-planner-proxy.vercel.app
- **Marketing site:** https://studyplanner-marketing-steel.vercel.app
- **TU Delft pilot:** live, used by AE MSc students, covers 5 tracks, 180+ courses
- **Daniella** = TU Delft AE study advisor (internal contact — do not cold-email EEMCS until her response)

---

## 6. Planner app (ae-planner-proxy) status

- Production URL: https://ae-planner-proxy.vercel.app
- Models in use: `claude-sonnet-4-6` (plan check) · `claude-haiku-4-5-20251001` (suggestions)
- Rate limit: 15 AI calls/month per authenticated user, 50/hour
- Auth: Clerk
- DB: Postgres (Drizzle ORM) for rate limiting + analytics
- Known issues resolved: model deprecation fix (claude-sonnet-4-5 → 4-6), JSON parse robustness for verbose model output

---

*Update this file whenever outreach is sent, deals progress, or the marketing site changes.*
