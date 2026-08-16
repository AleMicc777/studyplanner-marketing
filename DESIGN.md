# Design

## Register

brand. Confident, institutional, credible to university procurement. The design performs the product promise: rigorous, exact, correct.

## Aesthetic direction — LOCKED: "Petrol Ledger, Set in Serif"

Owner-approved 2026-08-16, evolved from "Engineered Paper + Amber Signal" (Stellic-inspired pass). The engineered-paper skeleton keeps its precision; the voice changes register: a giant high-contrast serif carries institutional confidence, while the petrol-teal accent, mono numerals, and abstracted product echoes keep it an engineering ledger, never a cream-and-orange Stellic clone. Boldness is spent in exactly one place: the hero (giant serif + pinned role cursors + verdict card). Every other section stays disciplined and inherits vocabulary the hero established.

## Colour — LOCKED (OKLCH)

Light-dominant. Paper carries 70-80% of the surface; ONE teal accent; graphite is the single dark anchor (footer + dark echo cards). Tokens live in `src/styles/global.css` `@theme`; ratios below are computed, not eyeballed.

- graphite `oklch(0.20 0.028 215)`, graphite-2 `0.17 0.026 215`, panel `0.25 0.03 213`, hairline `0.33 0.032 212`
- paper `0.975 0.004 200`, paper-shade `0.945 0.006 200`, line `0.90 0.007 200` (cool hue-200, never warm/cream)
- ink `0.215 0.02 220` (16.26:1 on paper, AAA), muted `0.46 0.02 210` (6.58:1 paper); on-dark `0.975 0.004 200` (16.78:1 graphite), on-dark-2 `0.80 0.018 205` (8.55:1 panel), steel `0.63 0.04 205` (4.61:1 panel — AA body, never below 14px)
- accent `0.785 0.105 200` (+ hover `0.73 0.107 199`, line `0.66 0.10 200`, deep `0.45 0.072 205`) — THE signal: CTAs, key metrics, Coordinator chip. Label on accent: graphite-2 = 10.08:1. accent-deep text on paper 6.71:1. accent-line is decorative rules ONLY (2.78:1 — never text, never sole meaning). Accent numerals on graphite 9.53:1, on panel 8.40:1.
- valid `0.70 0.14 148` / valid-deep `0.42 0.10 147` (7.54:1 paper; valid on graphite 7.13:1); flag `0.60 0.165 27` / flag-bright `0.70 0.155 25` (6.29:1 graphite) / flag-deep `0.45 0.14 27` (7.44:1 paper). Validation meaning ONLY — except the Student cursor chip, which is deliberately role-coded in validation's own green (meaning, not decoration).
- Amber is fully purged. A surviving amber token name or value anywhere = palette drift FAIL.

## Typography — LOCKED

- **Display serif: Source Serif 4 Variable** via `@fontsource-variable/source-serif-4/opsz.css` (the opsz build; plain index.css lacks the optical axis). `font-optical-sizing: auto`; display h1 and the Stats numeral force `font-variation-settings: "opsz" 60`. Serif scope, exhaustive: hero h1, section h2s, Stats giant numeral, CaseStudy pull quote. Serif stops there — h3 and below, nav, buttons, body, FAQ questions stay Geist. No serif-italic flourish words inside sans sentences.
- **Geist Variable** body; **Geist Mono Variable** for metrics, EC numbers, validation lines, trust strip. All three self-hosted @fontsource (cookieless is a hard TrustSecurity claim; prod CSP untouched).
- Scale ratio 1.333; display is a deliberate single super-step (2× h2). Tokens: `--text-display` clamp(2.75rem, 1.35rem + 5.6vw, 6.5rem); `--text-h2` clamp(1.9rem, 1.35rem + 2.2vw, 3.25rem); `--text-h3` clamp(1.35rem, 1.15rem + 0.9vw, 1.8rem); `--text-lead` clamp(1.08rem, 1rem + 0.55vw, 1.375rem); `--text-stat` clamp(3.5rem, 2rem + 9vw, 9.5rem).
- The two pull-quote slots are the CaseStudy outcome paragraph and the FoundingPilot founder blockquote (quiet editorial serif at existing size, weight ~500, never display-scaled). Serif appears at token sizes only; a serif heading at an off-token size is a violation.
- Serif settings: h1 weight 620, lh 1.02, ls -0.035em, balance; h2 weight 600, lh 1.08, ls -0.025em; stat numeral weight 640, ls -0.01em, `font-variant-numeric: lining-nums tabular-nums` (Source Serif defaults to oldstyle figures). Body lh 1.55, measure ≤66ch; lead ≤52ch.

## Spacing

Base 4px. Steps: 4/8/12/16/24/32/48/64/96/120. Section padding `--section-y` clamp(4rem, 3rem + 5vw, 7.5rem); hero top clamp(4.5rem, 3.5rem + 4vw, 7rem). Related ≤16px, sections ≥64px. No arbitrary values.

## Radius / Shadow

Two radii: **999px** (pills: CTAs, chip labels, badges) and **10px** (BrowserFrame, fragment cards, dark echo cards). Skeleton bars 3px (documented sub-element exception). One shadow level, floating elements only (BrowserFrame, fragment cards, cursor chips): `0 12px 32px -12px oklch(0.20 0.028 215 / 0.18)`. Everything else flat; hairlines do structure.

## Signature

The hero: giant opsz-60 serif claim over a real product screenshot with two role cursor chips pinned to the UI regions each role touches, and the validation verdict card resolving INVALID→VALID overlapping the frame. It performs the promise (two roles meeting on one validated plan); other sections only echo its vocabulary.

## Element vocabulary

### Role cursor chips
Filled 18×18 cursor-arrow SVG (rotation varies ±20° per instance) + 999px pill (28px tall, padding 5px 12px, Geist 500 13px, sentence case) + 22px monogram disc (graphite bg, mono initial "S"/"C", 2px paper ring) overlapping the pill end. No stock avatars, no invented names. **Student = valid green** (label graphite-2, 7.54:1); **Coordinator = accent teal** (label graphite-2, 10.08:1). Hard cap 4 instances sitewide: 2 in Hero (Student on plan grid ~18%/35%, Coordinator on approve region ~78%/15%), 1 on HowItWorks EC card, 1 on ForUniversities review card. Chips pin ONLY to product surfaces, never whitespace or text columns, never two same-role in a viewport, never loop-animated, `aria-hidden` decorative.

### Ink spot illustrations
Exactly 7 sitewide (cap raised 4 to 7, owner-approved 2026-08-16, educational-market motifs), one stroke system: 96-unit viewBox, stroke 1.75 `vector-effect: non-scaling-stroke`, round caps/joins, squared bends radius 2 (drafted, not doodled), ink stroke, ONE accent pop each (one teal filled shape OR one teal stroke, never both). Dashes only inside an illustration, one detail ≤6 dashes. 160-200px desktop, 120px at 390 (FAQ book runs smaller, 96-130px, as a header accent). Motifs: Problem = plan sheet gone wrong (teal-circled EC total); HowItWorks = rule stamp above its stamped teal check imprint; FoundingPilot = paper plane folded from plan sheet (teal fold, dashed trail = the sanctioned dash); TrustSecurity = closed ledger with clasp and teal bookmark; AdminDashboard = graduation cap with teal tassel tip; FAQ = open programme guide with one teal highlighted line; HowItWorks step 01 = programme guide half-posted in an envelope with teal stamp (this one carries a paper-fill on the envelope body to occlude the sheet, the sanctioned exception to stroke-only).

### Fragment cards (product-echo abstractions)
Four cards: declared abstractions, never fake screenshots. 10px radius, the one shadow, no tilt, 260-300px desktop. Skeleton bars for ALL name-like text (`line` on light / `hairline` on dark, 6px tall, 3px radius, widths 40-70%); every rendered number is a real product number; no browser chrome or traffic-light dots (chrome belongs to BrowserFrame alone).
1. **Validation verdict card** (dark) — Hero, overlaps BrowserFrame bottom-right (-24px overhang; docks below frame at 390): mono `electives 60 / 60 EC` met, `total 120 / 120 EC`, verdict `INVALID` (flag-bright, struck) resolving to `VALID` (valid) via the existing stroke-draw.
2. **EC counter card** (light) — HowItWorks: mono `96 / 120 EC planned`, teal progress segment on `line` track, three rows skeleton bar + real EC values (6/12/6 EC). Student chip pinned.
3. **Review inbox card** (light) — ForUniversities: mono `Review queue`, three rows monogram disc + skeleton bar + status text (two `valid` in valid-deep, one `1 flag` in flag-deep — status is text, never a dot). Coordinator chip pinned.
4. **Annotated plan document** (light, owner-sanctioned 2026-08-16) — Problem: a mono before/after ledger (`study plan / draft`, flagged email draft vs planner-validated plan). Course codes must be real catalogue codes (AE4870A / AE4870B — a real cross-year prerequisite pair); EC values only from the sanctioned list; qualitative status lines carry the rest.

## Layout

≥4 distinct layout families; no page of identical rectangles; cards only where genuinely best, never nested. Preserve anchor IDs: `#home`, `#problem`, `#how-it-works`, `#demo`, `#universities`, `#dashboard`, `#faq`, `#contact`. The admin console owns two sections (owner-directed 2026-08-16): AdminDashboard (#dashboard, promoted above HowItWorks — flagship curriculum screenshot + statistics ledger) and AdminControl (after HowItWorks — catalogue control + AI cohort analyst frames). Numbers come from the screenshots themselves (568 modules) or stay qualitative. The student-feature deep dive (Features) was cut and the Screenshots walkthrough trimmed to two entries to give the console that space. The mobile sticky CTA bar (StickyMobileCTA: graphite, 44px dismiss, session-remembered) is owner-approved shipped UI and part of the system.

## Motion

Existing infra locked: `[data-reveal]` + `html.js` gate, hero stagger, stroke-draw, ease-out-expo, no bounce, `prefers-reduced-motion` alternative mandatory. Additions: cursor chips reveal-only (8px translate along arrow axis + fade, 480ms, 120ms after parent surface; reduced motion = opacity only) — never drift, never loop. Fragment cards join `[data-reveal]`. Stats numeral: reveal only, NO count-up. No other animation types.

### Interaction feel — apple-design authority (owner-approved 2026-08-16)

The `apple-design` skill (`~/.claude/skills/apple-design/SKILL.md`) governs interaction feel. Applied rules, locked:

- **Press feedback on pointer-down**: every tappable control (CTAs, nav toggle, dismiss) carries `.pressable` (global.css) — instant `scale(0.97)` on `:active` at 80ms, 180ms expo return. Never feedback only on release.
- **Translucent chrome, exactly two surfaces**: the sticky navbar (`.nav-material`, paper at 78% + blur 16px) and the mobile sticky CTA bar (graphite at 86% + blur 20px). Content scrolls under both. No other translucent surfaces; never stack two light materials.
- **Scroll-edge effect**: the navbar has no permanent divider; its hairline + cast shadow fade in only once content is under the bar (`.is-scrolled`). No-JS keeps a static hairline.
- **Fallback triad mandatory on any translucent surface**: `prefers-reduced-transparency` → solid, no blur; `prefers-contrast: more` → solid + defined border; `prefers-reduced-motion` → reveals collapse to a 200ms opacity cross-fade (never "nothing").
- **Spatial consistency**: enter and exit along the same path (sticky CTA slides up in, slides down out). Easing stays critically-damped (ease-out-expo, no overshoot) — bounce is banned because no interaction here carries user momentum.

## Imagery

Real product screenshots (`public/screenshots/`) in `BrowserFrame` remain the only *representations of the product UI*. Carve-out (owner-approved 2026-08-16): the three fragment cards and four ink illustrations above are sanctioned as *declared abstractions* under their specs — skeleton bars, real numbers, no chrome. Anything outside those specs falls back under the "no div-fake-UI, no hand-rolled decorative SVG" ban. Alt text carries no institution name.

## Accessibility

AA sitewide / AAA hero body-on-paper. Verified OKLCH contrast, reduced-motion alternatives, keyboard operability, colour never the sole signal.

## Anti-slop (this system's specific risks)

Chip confetti (cap 4, pinned only); fragment card mistakable for real screenshot; invented numbers (only 120 EC, 60/60, 96/120, 6/12 EC and the real catalogue codes AE4870A/AE4870B exist); serif outside its named slots; cream/sand drift or orange accent (stay hue-200 teal); dashed arcs threading sections; em-dash or middle-dot in copy; purple anywhere; icon-in-circle grids; blobs/wavy dividers; scroll cues; gradient text; >1 uppercase eyebrow per 3 sections; accent-line as text.

## Status

System LOCKED (Petrol Ledger, Set in Serif — owner-approved 2026-08-16). Tokens in `src/styles/global.css`. Predecessor "Engineered Paper + Amber Signal" fully superseded; amber tokens purged.
