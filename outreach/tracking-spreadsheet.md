# StudyPlanner — Outreach Tracking Spreadsheet

Copy this structure into Google Sheets or Excel.

---

## Sheet 1: Contacts

| # | University | Programme | Coordinator Name | Email | LinkedIn URL | Country | Priority (H/M/L) | Date Added |
|---|-----------|-----------|-----------------|-------|--------------|---------|-----------------|------------|
| 1 | | | | | | | | |

**Priority guide:**
- H = Large programme, public email found, known validation complexity (TU Delft, TUM, POLIMI, ETH)
- M = Medium programme, email findable
- L = Small programme or email hard to find

---

## Sheet 2: Outreach Log

| # | Name | University | Template Used (A/B/C) | Email Sent Date | Follow-up Sent Date | LinkedIn Connected (Y/N) | LinkedIn DM Sent Date | Status | Notes |
|---|------|-----------|----------------------|----------------|--------------------|--------------------------|-----------------------|--------|-------|
| 1 | | | | | | | | | |

**Status options:**
- `Not contacted` — on the list, not yet emailed
- `Email sent` — first email sent
- `Follow-up sent` — follow-up email sent
- `LinkedIn only` — couldn't find email, connected on LinkedIn
- `No reply` — followed up, no response after 2 weeks
- `Replied — positive` — showed interest
- `Replied — not now` — replied but not interested right now
- `Replied — wrong contact` — redirected to someone else
- `Call booked` — demo call scheduled
- `Call done` — had the call
- `Pilot agreed` — institution wants to pilot it
- `Dead` — explicitly said no

---

## Sheet 3: Call Notes

| Date | Name | University | Programme | What they said | Pain points mentioned | Objections | Next step | Follow-up date |
|------|------|-----------|-----------|---------------|----------------------|------------|-----------|---------------|
| | | | | | | | | |

---

## Sheet 4: Weekly Metrics

| Week | Emails Sent | Replies | Reply Rate | Calls Booked | Calls Done | Pilots Discussed | Notes |
|------|-------------|---------|-----------|--------------|------------|-----------------|-------|
| Week 1 | | | | | | | |
| Week 2 | | | | | | | |
| Week 3 | | | | | | | |
| Week 4 | | | | | | | |
| Week 5 | | | | | | | |
| Week 6 | | | | | | | |
| Week 7 | | | | | | | |
| Week 8 | | | | | | | |
| Week 9 | | | | | | | |
| Week 10 | | | | | | | |
| Week 11 | | | | | | | |
| Week 12 | | | | | | | |
| **TOTAL** | | | | | | | |

**Target by Day 90:**
- Emails sent: 50
- Reply rate: ≥20% (10+ replies)
- Calls done: 10
- Pilots: 1

---

## Sheet 5: Template Performance

| Template | Sent | Replies | Reply Rate | Calls Booked | Notes |
|----------|------|---------|-----------|--------------|-------|
| A — Pain-first | | | | | |
| B — Demo-first | | | | | |
| C — Personalised | | | | | |
| Follow-up | | | | | |
| LinkedIn DM | | | | | |

Use this to kill underperforming templates by week 4 and double down on the winner.

---

## UTM Links (add these to all outreach)

Use these URLs so Vercel Analytics can track which emails drove traffic:

**Demo link for emails:**
https://ae-planner-proxy.vercel.app?utm_source=email&utm_medium=outreach&utm_campaign=coordinator-90d

**Marketing site for emails:**
https://studyplanner-marketing-steel.vercel.app?utm_source=email&utm_medium=outreach&utm_campaign=coordinator-90d

**Demo link for LinkedIn:**
https://ae-planner-proxy.vercel.app?utm_source=linkedin&utm_medium=outreach&utm_campaign=coordinator-90d

---

## Quick Setup (Google Sheets)

1. Create a new Google Sheet named `StudyPlanner Outreach`
2. Add 5 tabs: `Contacts`, `Outreach Log`, `Call Notes`, `Weekly Metrics`, `Template Performance`
3. Copy each table above into the corresponding tab
4. Share with yourself so you can update from your phone after calls
