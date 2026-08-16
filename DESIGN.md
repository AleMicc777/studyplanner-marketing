# Design

## Register

brand — confident, branded, credible to university procurement.

## Aesthetic direction — LOCKED: "Engineered Paper + Amber Signal"

Committed and branded, light-dominant. A cool near-white paper carries the structural surface; a single amber signal carries validation, key metrics, and the primary CTA. Graphite is demoted from "the surface" to one grounding anchor (the closing footer) plus small dark product-echo cards (the validation terminal, an optional screenshot frame). The feel is precise, engineered, software-grade (Linear / Stripe craft) applied to a serious institutional tool, so the design itself demonstrates the product's core promise: rigorous, exact, correct. Distinctive enough that a viewer asks "how was this built?", not "which AI made this?"

## Colour — LOCKED (OKLCH)

**Strategy: Committed, light-dominant.** Paper carries 70-80% of the surface; amber is the single accent; graphite is the one dark anchor (footer + product-echo cards). Same committed identity as before, surface dominance inverted from dark to light. This still resolves the root failure (two blue systems at one hue): everything collapses into one neutral ramp plus one amber signal. No second competing colour. Rhythm on the light page comes from paper/paper-shade alternation, `line` hairlines, the full-bleed amber stat band, and the single graphite footer — never a page of identical light rectangles.

Tokens (see `src/styles/global.css` `@theme`):
- graphite `oklch(0.19 0.008 250)`, graphite-2 `oklch(0.165 0.008 250)`, panel `oklch(0.24 0.01 250)`, panel-2 `oklch(0.275 0.011 250)`, hairline `oklch(0.32 0.012 250)`
- paper `oklch(0.975 0.003 250)`, paper-shade `oklch(0.945 0.004 250)`, line `oklch(0.9 0.004 250)` (cool near-white, never warm)
- ink `oklch(0.22 0.01 250)`, muted `oklch(0.46 0.012 250)`; on-dark `oklch(0.975 0.003 250)`, on-dark-2 `oklch(0.8 0.012 250)`, steel `oklch(0.62 0.028 250)`
- amber `oklch(0.785 0.125 71)` (+ hover `0.73 0.125 69`, line `0.66 0.115 71`, deep `0.47 0.115 71`) — refined honey-gold; CTAs, key metrics, validation accents, the full-bleed stat band. Chroma trimmed 0.142→0.125 (2026-08-15, owner-approved education-market pass): brings accent saturation under the 80% cap, CTA contrast preserved at 9.2:1. amber-line is decorative rules only, never text or a sole meaning carrier (2.96:1 on paper).
- valid `oklch(0.7 0.125 152)` / flag `oklch(0.6 0.165 27)` — plan-validation meaning ONLY, never decoration. On dark, body-size flag text uses flag-bright `oklch(0.68 0.15 27)` (flag alone is 4.32:1 on graphite, fails AA small). On light surfaces, validation text uses valid-deep `oklch(0.42 0.09 152)` / flag-deep `oklch(0.45 0.14 27)` (both ~7:1 AAA on paper).

WCAG: body ≥4.5:1, large ≥3:1 verified. Light hero: ink-on-paper ~13:1 (AAA), amber-deep-on-paper AA+. Footer anchor: white-on-graphite ~17:1.

## Typography — LOCKED

- **Geist** (sans) for everything; **Geist Mono** for metrics, the trust strip, validation before/after lines, code, and mono metadata. Both self-hosted via `@fontsource-variable/geist` + `geist-mono` (cookieless, a hard constraint TrustSecurity claims). Family names: `"Geist Variable"`, `"Geist Mono Variable"`.
- Dramatic hierarchy via weight (800/700 display vs 400/500 body) and scale contrast, fluid `clamp()`. Display `--text-display` clamps to 4.4rem; letter-spacing -0.03 to -0.045em on display; `text-wrap: balance` on headings.
- Geist and Geist Mono are not on the reflex-reject list; chosen for engineered precision, not by reflex.

## Layout

- **At least 4 distinct layout families** across the page. No page-of-identical-bordered-rectangles. Cards only where they are genuinely the best affordance; never nested.
- Single-page rhythm: vary spacing (`clamp()` section padding), alternate composition (asymmetric splits, full-bleed bands, prose columns, product-led figures) so no two adjacent sections share a skeleton.
- Preserve all existing anchor IDs: `#home`, `#problem`, `#how-it-works`, `#demo`, `#universities`, `#faq`, `#contact`.

## Components (existing, to be redesigned not rebuilt)

`CTAButton` (variants: solid, solid-dark, outline, outline-invert), `BrowserFrame` (screenshot chrome), `Navbar` (sticky, CSS-only mobile menu), and the 14 section components. Reuse the component boundaries; replace the visual system inside them.

## Motion

Restrained and motivated. Keep the existing infrastructure: `[data-reveal]` intersection reveal with a no-JS fallback (`html.js` gate), hero stagger, the validation checkmark stroke-draw. Ease-out-expo curves, no bounce. `prefers-reduced-motion` alternative mandatory. No uniform fade-on-scroll reflex applied to every section.

## Imagery

Real product screenshots only — the three in `public/screenshots/` (onboarding, track selection, full plan grid), shown in `BrowserFrame`. No div-fake-UI, no colored-block placeholders. Alt text is part of the voice and carries no institution name (per the anonymise decision).

## Accessibility

Mirrors PRODUCT.md: AA sitewide / AAA hero, verified OKLCH contrast, reduced-motion alternatives, keyboard operability, colour never the sole signal.

## Status

System LOCKED (Direction B, user-selected from design-shotgun). Reference implementation: the four shotgun mockups live in the session scratchpad; `variant-B.html` is the visual bible. Tokens live in `src/styles/global.css`. Build is in progress across all section components.
