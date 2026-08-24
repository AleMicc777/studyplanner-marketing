# Marketing site — remaining tasks

Status as of 2026-07-19. Site rebuilt (commit c6c74da), pushed to
`github.com/alessandromiccolo-tech/studyplanner-marketing`, deployed to Vercel
(new project, team not yet confirmed which Vercel account/team it landed under).

## Done
- [x] Repo cleanup, SEO/JSON-LD/analytics scaffolding, design tokens, section
      redesign, motion — full 5-phase rebuild + refine pass.
- [x] CTAButton component extracted, dedup across 5 files.
- [x] Committed (outreach/ deliberately excluded — untracked business data).
- [x] Repo ownership transferred `AleMicc777` → `alessandromiccolo-tech`
      (cancellation-risk fix).
- [x] Pushed to GitHub.
- [x] Cal.com account created, event link obtained:
      `https://cal.com/alessandro-miccolo-bigdgh/15min`.
- [x] Vercel project created via GitHub import, first deploy done.

## Open
- [ ] **Set `PUBLIC_BOOKING_URL` env var** on the new Vercel project
      (Settings → Environment Variables → Production/Preview/Development) =
      `https://cal.com/alessandro-miccolo-bigdgh/15min`, then redeploy.
      Blocked on: confirming which Vercel account/team the project landed
      under (MCP tool only sees `alemicc777's projects` team, new project
      not visible there — check dashboard directly).
- [ ] **Verify live site**: Cal.com links resolve, Vercel Analytics script
      fires, screenshots/hero render correctly at desktop + mobile.
- [ ] **Enable Vercel Web Analytics** in the new project's dashboard
      (Analytics tab → Enable) — user says already done for the old
      `ae-planner-proxy` context, needs re-confirming on the new project.
- [x] ~~Formspree account~~ — **dropped 2026-08-09.** The contact form now POSTs
      JSON to `api/growth-intake.js` in the planner repo, so submissions land in
      the Owner → Growth pipeline (and the weekly growth agent sees them) instead
      of an inbox. `PUBLIC_FORMSPREE_ID` is no longer read anywhere.
- [ ] **Set `MARKETING_ORIGINS`** on the *planner* Vercel project = this site's
      production origin (comma-separated if more than one). Without it the intake
      endpoint falls back to `https://studyplanner-marketing.vercel.app` +
      `http://localhost:4321`, so a custom domain would be CORS-blocked.
- [ ] **Real planner screenshots** — capture 3–4 actual StudyPlanner UI shots
      (valid plan state, violation flagged, before/after) at 2x DPR, replace
      placeholder images in `BrowserFrame` usages (Hero, CaseStudy,
      Screenshots).
- [ ] **Verify marketing claim** — confirm or drop any "in conversation with
      NL/DE/IT programmes" line before it ships; it was not true when last
      checked and was deliberately not added.
- [ ] **Custom domain** (if wanted) — point a real domain at the new Vercel
      project instead of the default `*.vercel.app` URL.

## Soft decision, not blocking
- CTAButton `outline` vs `outline-invert` variant naming — two separate
  variants exist because collapsing them would silently change hover
  behavior on 5 buttons. Left as-is; revisit if it bugs you.
