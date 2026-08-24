# Design

## Register

brand. Confident, institutional, credible to university procurement. The design performs the product promise: rigorous, exact, correct.

## Aesthetic direction — LOCKED: "Civic Cobalt, Set in Serif"

Evolved from "Petrol Ledger" (which evolved from "Engineered Paper + Amber Signal"). The engineered-paper skeleton keeps its precision and the serif keeps carrying institutional confidence; only the colour register changes. Deep cobalt is now the single identity colour — dark fields and, as `cobalt-ink`, every piece of emphasis text on paper. Ochre survives as an action colour only. Boldness is spent in exactly one place: the hero (giant serif + pinned role cursors + verdict card). Every other section stays disciplined and inherits vocabulary the hero established.

## Colour — LOCKED (OKLCH)

Light-dominant on warm bone paper. Paper carries 70-80% of the surface; cobalt is the identity and the single dark field; ochre is actions only. Tokens live in `src/styles/global.css` `@theme`; ratios below are canvas-resolved sRGB, not eyeballed.

### The one hard rule

**Ochre is a fill and a dark-surface colour. Never ochre text on paper** — `accent` `oklch(0.72 0.13 70)` on bone is 2.33:1 and fails AA. On paper, emphasis text is always `cobalt-ink` (8.1:1). Ochre as a button background with an `ink` label is 6.8:1 and fine. Same rule covers non-text indicators: the global focus ring is `cobalt-ink`, not ochre, because ochre on paper misses the 3:1 minimum.

- cobalt `oklch(0.28 0.13 264)`, cobalt-2 `0.24 0.115 264`, cobalt-panel `0.34 0.14 263`, cobalt-line `0.38 0.15 263`, cobalt-ink `0.42 0.18 262` (text on paper), cobalt-bright `0.55 0.20 258` (hover only)
- paper `0.972 0.008 85`, paper-shade `0.94 0.012 85`, line `0.88 0.014 82`, line-soft `0.92 0.012 82` (warm bone hue-85, never cool grey)
- ink `0.22 0.015 80` (17.3:1 on paper), ink-2 `0.34 0.015 80`, muted `0.48 0.015 80` (6.0:1 paper); on-dark `0.972 0.008 85` (14.2:1 cobalt), on-dark-2 `0.86 0.04 262` (9.5:1), on-dark-3 `0.82 0.045 262`, steel `0.78 0.05 262` (7.5:1 cobalt)
- accent `0.72 0.13 70` (+ hover `0.79 0.13 72`) — ochre, actions only. On cobalt 5.9:1 (numerals, eyebrows, hover links are fine there). As a fill with an ink label 6.8:1. NEVER as text or as a lone indicator on paper.
- valid `0.70 0.14 148` / valid-deep `0.42 0.11 150` (6.8:1 paper-shade); flag `0.52 0.17 28` (5.1:1 paper-shade) / flag-bright `0.78 0.14 25` (on cobalt) / flag-deep `0.42 0.15 28` (paper). Validation meaning ONLY — except the Student cursor chip, which is deliberately role-coded in validation's own green (meaning, not decoration).
- Amber and petrol teal are both fully purged. A surviving teal or amber token name or value anywhere = palette drift FAIL.

## Typography — LOCKED

- **Display serif: Source Serif 4 Variable** via `@fontsource-variable/source-serif-4/opsz.css` (the opsz build; plain index.css lacks the optical axis). `font-optical-sizing: auto`; display h1 and the Stats numeral force `font-variation-settings: "opsz" 60`. Serif scope, exhaustive: hero h1, section h2s, Stats giant numeral, CaseStudy pull quote. Serif stops there — h3 and below, nav, buttons, body, FAQ questions stay Geist. No serif-italic flourish words inside sans sentences.
- **Geist Variable** body; **Geist Mono Variable** for metrics, EC numbers, validation lines, trust strip. All three self-hosted @fontsource (cookieless is a hard TrustSecurity claim; prod CSP untouched).
- Scale ratio 1.333; display is a deliberate single super-step (2× h2). Tokens: `--text-display` clamp(2.75rem, 1.35rem + 5.6vw, 6.5rem); `--text-h2` clamp(1.9rem, 1.35rem + 2.2vw, 3.25rem); `--text-h3` clamp(1.35rem, 1.15rem + 0.9vw, 1.8rem); `--text-lead` clamp(1.08rem, 1rem + 0.55vw, 1.375rem); `--text-stat` clamp(3.5rem, 2rem + 9vw, 9.5rem).
- The two pull-quote slots are the CaseStudy outcome paragraph and the FoundingPilot founder blockquote (quiet editorial serif at existing size, weight ~500, never display-scaled). Serif appears at token sizes only; a serif heading at an off-token size is a violation.
- Serif settings: h1 weight 620, lh 1.02, ls -0.035em, balance; h2 weight 600, lh 1.08, ls -0.025em; stat numeral weight 640, ls -0.01em, `font-variant-numeric: lining-nums tabular-nums` (Source Serif defaults to oldstyle figures). Body lh 1.55, measure ≤66ch; lead ≤52ch.

## Spacing

Base 4px. Steps: 4/8/12/16/24/32/48/64/96/120. Section padding `--section-y` clamp(4rem, 3rem + 5vw, 7.5rem); hero top clamp(4.5rem, 3.5rem + 4vw, 7rem). Related ≤16px, sections ≥64px. No arbitrary values.

## Radius / Shadow

Two radii: **999px** (pills: CTAs, chip labels, badges) and **10px** (BrowserFrame, fragment cards, dark echo cards). Skeleton bars 3px (documented sub-element exception). One shadow level, floating elements only (BrowserFrame, fragment cards, cursor chips): `0 12px 32px -12px oklch(0.28 0.13 264 / 0.18)`. Everything else flat; hairlines do structure.

## Signature

The hero: giant opsz-60 serif claim over a real product screenshot with two role cursor chips pinned to the UI regions each role touches, and the validation verdict card resolving INVALID→VALID overlapping the frame. It performs the promise (two roles meeting on one validated plan); other sections only echo its vocabulary.

## Element vocabulary

### Role cursor chips
Filled 18×18 cursor-arrow SVG (rotation varies ±20° per instance) + 999px pill (28px tall, padding 5px 12px, Geist 500 13px, sentence case) + 22px monogram disc (cobalt bg, mono initial "S"/"C", 2px paper ring) overlapping the pill end. No stock avatars, no invented names. **Student = valid green** (label cobalt-2, 7.54:1); **Coordinator = accent ochre** (label ink, 6.8:1). Hard cap 4 instances sitewide: 2 in Hero (Student on plan grid ~18%/35%, Coordinator on approve region ~78%/15%), 1 on HowItWorks EC card, 1 on ForUniversities review card. Chips pin ONLY to product surfaces, never whitespace or text columns, never two same-role in a viewport, never loop-animated, `aria-hidden` decorative.

### Ink spot illustrations
Exactly 7 sitewide (cap raised 4 to 7, owner-approved 2026-08-16, educational-market motifs), one stroke system: 96-unit viewBox, stroke 1.75 `vector-effect: non-scaling-stroke`, round caps/joins, squared bends radius 2 (drafted, not doodled), ink stroke, ONE accent pop each (one cobalt filled shape OR one cobalt stroke, never both). Dashes only inside an illustration, one detail ≤6 dashes. 160-200px desktop, 120px at 390 (FAQ book runs smaller, 96-130px, as a header accent). Motifs: Problem = plan sheet gone wrong (cobalt-circled EC total); HowItWorks = rule stamp above its stamped cobalt check imprint; FoundingPilot = paper plane folded from plan sheet (cobalt fold, dashed trail = the sanctioned dash); TrustSecurity = closed ledger with clasp and cobalt bookmark; AdminDashboard = graduation cap with cobalt tassel tip; FAQ = open programme guide with one cobalt highlighted line; HowItWorks step 01 = programme guide half-posted in an envelope with cobalt stamp (this one carries a paper-fill on the envelope body to occlude the sheet, the sanctioned exception to stroke-only).

### Fragment cards (product-echo abstractions)
Four cards: declared abstractions, never fake screenshots. 10px radius, the one shadow, no tilt, 260-300px desktop. Skeleton bars for ALL name-like text (`line` on light / `cobalt-line` on dark, 6px tall, 3px radius, widths 40-70%); every rendered number is a real product number; no browser chrome or traffic-light dots (chrome belongs to BrowserFrame alone).
1. **Validation verdict card** (dark) — Hero, overlaps BrowserFrame bottom-right (-24px overhang; docks below frame at 390): mono `electives 60 / 60 EC` met, `total 120 / 120 EC`, verdict `INVALID` (flag-bright, struck) resolving to `VALID` (valid) via the existing stroke-draw.
2. **EC counter card** (light) — HowItWorks: mono `96 / 120 EC planned`, cobalt progress segment on `line` track, three rows skeleton bar + real EC values (6/12/6 EC). Student chip pinned.
3. **Review inbox card** (light) — ForUniversities: mono `Review queue`, three rows monogram disc + skeleton bar + status text (two `valid` in valid-deep, one `1 flag` in flag-deep — status is text, never a dot). Coordinator chip pinned.
4. **Annotated plan document** (light, owner-sanctioned 2026-08-16) — Problem: a mono before/after ledger (`study plan / draft`, flagged email draft vs planner-validated plan). Course codes must be real catalogue codes (AE4870A / AE4870B — a real cross-year prerequisite pair); EC values only from the sanctioned list; qualitative status lines carry the rest.

## Layout

≥4 distinct layout families; no page of identical rectangles; cards only where genuinely best, never nested. Preserve anchor IDs: `#home`, `#problem`, `#how-it-works`, `#demo`, `#universities`, `#dashboard`, `#faq`, `#contact`. The admin console owns two sections (owner-directed 2026-08-16): AdminDashboard (#dashboard, promoted above HowItWorks — flagship curriculum screenshot + statistics ledger) and AdminControl (after HowItWorks — catalogue control + AI cohort analyst frames). Numbers come from the screenshots themselves (568 modules) or stay qualitative. The student-feature deep dive (Features) was cut and the Screenshots walkthrough trimmed to two entries to give the console that space. The mobile sticky CTA bar (StickyMobileCTA: cobalt, 44px dismiss, session-remembered) is owner-approved shipped UI and part of the system.

## Motion

Existing infra locked: `[data-reveal]` + `html.js` gate, hero stagger, stroke-draw, ease-out-expo, no bounce, `prefers-reduced-motion` alternative mandatory. Additions: cursor chips reveal-only (8px translate along arrow axis + fade, 480ms, 120ms after parent surface; reduced motion = opacity only) — never drift, never loop. Fragment cards join `[data-reveal]`. Stats numeral: reveal only, NO count-up. No other animation types.

### Interaction feel — apple-design authority (owner-approved 2026-08-16)

The `apple-design` skill (`~/.claude/skills/apple-design/SKILL.md`) governs interaction feel. Applied rules, locked:

- **Press feedback on pointer-down**: every tappable control (CTAs, nav toggle, dismiss) carries `.pressable` (global.css) — instant `scale(0.97)` on `:active` at 80ms, 180ms expo return. Never feedback only on release.
- **Translucent chrome, exactly two surfaces**: the sticky navbar (`.nav-material`, paper at 78% + blur 16px) and the mobile sticky CTA bar (cobalt at 86% + blur 20px). Content scrolls under both. No other translucent surfaces; never stack two light materials.
- **Scroll-edge effect**: the navbar has no permanent divider; its hairline + cast shadow fade in only once content is under the bar (`.is-scrolled`). No-JS keeps a static hairline.
- **Fallback triad mandatory on any translucent surface**: `prefers-reduced-transparency` → solid, no blur; `prefers-contrast: more` → solid + defined border; `prefers-reduced-motion` → reveals collapse to a 200ms opacity cross-fade (never "nothing").
- **Spatial consistency**: enter and exit along the same path (sticky CTA slides up in, slides down out). Easing stays critically-damped (ease-out-expo, no overshoot) — bounce is banned because no interaction here carries user momentum.

## Imagery

Real product screenshots (`public/screenshots/`) in `BrowserFrame` remain the only *representations of the product UI*. Carve-out (owner-approved 2026-08-16): the three fragment cards and four ink illustrations above are sanctioned as *declared abstractions* under their specs — skeleton bars, real numbers, no chrome. Anything outside those specs falls back under the "no div-fake-UI, no hand-rolled decorative SVG" ban. Alt text carries no institution name.

## Accessibility

AA sitewide / AAA hero body-on-paper. Verified OKLCH contrast, reduced-motion alternatives, keyboard operability, colour never the sole signal.

## Anti-slop (this system's specific risks)

Chip confetti (cap 4, pinned only); fragment card mistakable for real screenshot; invented numbers (only 120 EC, 60/60, 96/120, 6/12 EC and the real catalogue codes AE4870A/AE4870B exist); serif outside its named slots; cream/sand drift or orange accent (stay hue-200 cobalt); dashed arcs threading sections; em-dash or middle-dot in copy; purple anywhere; icon-in-circle grids; blobs/wavy dividers; scroll cues; gradient text; >1 uppercase eyebrow per 3 sections; cobalt-line as text.

## Status

System LOCKED (Civic Cobalt, Set in Serif). Predecessors "Petrol Ledger" and "Engineered Paper + Amber Signal" fully superseded; teal and amber tokens purged. Tokens in `src/styles/global.css`.
