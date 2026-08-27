# studyplan.se — competitive recon

*Read-only recon, public pages only. No account created, no form submitted, no contact made. Research date: 2026-08-27.*

**AI verdict:** **No AI, anywhere.** Downloaded all 33 JavaScript chunks listed in the site's Next.js `_buildManifest` and grepped for every major vendor, SDK and technique. Zero hits. The only two near-matches are false positives: the string `semantics` inside a bundled KaTeX MathML builder, and `prompt` inside a copy-to-clipboard fallback (`"falling back to prompt"`). No AI vendor host appears among the external hosts in the bundles, and there is no `/api/ai`, `/api/chat` or `/api/assistant` route. Marketing copy makes no AI claim either.

**Alive or dormant:** **Live and used, but functionally frozen for ~17 months.** The service is up and holds real users (2,578). But the shipped application code is byte-identical to the March 2025 Wayback capture — it has been redeployed, not changed. Legal docs are dated April/May 2024, footer says 2024. Both traceable founders are actively coding on GitHub in 2026, on other projects; one now lists himself as "founding engineer @ scape".

**Mechanism:** **Deterministic integer arithmetic over four hard-coded constants.** Fully decompiled below. "Closest specialization" = sort specializations by summed credits, descending. Nothing inferential, no solver, no ranking model.

**Scope:** **LTH only.** 27 LTH programme codes present in live user data. No other Lund faculty, no other Swedish university. No English UI — Swedish only.

**Commercial posture:** **Free, unincorporated, unendorsed.** "helt GRATIS". No named legal entity beyond the word "Studyplan", no org-nummer, no address. Legal pages are unedited TermsFeed boilerplate. No LTH or TLTH endorsement found.

**Data ingestion + gaps:** **Manually-triggered scraping of LTH pages by an admin, plus student-uploaded Ladok PDFs.** Four admin-gated buttons in the settings page each pull a category of data from LTH on click. There is no scheduled pipeline visible.

**Reception:** **Obscure publicly, real privately.** No LTH, TLTH, Reddit, forum or press mention found. One LinkedIn launch post (May 2024). Yet 2,578 registered users and 1,097 who planned a specialization — genuine word-of-mouth adoption inside LTH.

---

## Verified (with quotes + URLs)

### 1. No AI — method and result

Fetched `https://studyplan.se/` raw, parsed `_next/static/ILmzJejXYdPhEa1D3ic9O/_buildManifest.js` to enumerate all 22 routes and all chunk files, downloaded 33 chunks (1.2 MB), decoded `\xNN` escapes, grepped case-insensitively for:

`openai · anthropic · gpt-N · claude · gemini · mistral · llama · huggingface · cohere · langchain · vercel/ai · ai-sdk · embedding · cosine · tensorflow · onnxruntime · transformers · chatbot · prompt · assistant · semantic`

Total substantive hits: **zero**. The two literal matches, in context:

- `s=new ts.MathNode("annotation",...); let o=new ts.MathNode("semantics",[i,s])` — KaTeX MathML output, in `chunks/b5f2ed29-e662f4dcaca3678a.js`
- `console.error("falling back to prompt")` — clipboard polyfill, in `chunks/pages/app/schedule-3661a9d587bfbd31.js`

Complete list of external hosts referenced anywhere in the bundles:

```
api.microlink.io   cdnjs.cloudflare.com   github.com   kurser.lth.se
www.lu.se          www.student.ladok.se   studyplan.se www.studyplan.se
www.facebook.com   www.linkedin.com       nextjs.org   www.termsfeed.com
fb.me              www.apache.org         www.w3.org
```

`api.microlink.io` is a link-preview/screenshot service, not an AI API. Complete list of the site's own API routes:

```
/api/clerk/onboard              /api/courses/application-periods
/api/courses/exam-periods       /api/home-info
/api/mail-sender                /api/upload-ladok
/api/welcome-mail
```

**This is a clean, confident negative.**

### 2. The mechanism, decompiled

Rules module (webpack module `64613`, in `chunks/659-e11aeb3598b08f60.js`), reformatted from the minified source:

```js
// exports: kE=a, Ti=l, rX=r, gn=i, Ec=n, xC=c
let a = 90,   // kE — total elective credits required
    l = 45,   // Ti — total A-level (advanced) credits required
    r = 45,   // rX — credits required inside the specialisation
    i = 30,   // gn — A-level credits required inside the specialisation
    n = 210;  // Ec — "complete" sentinel (= 90+45+45+30)

function c(e, s, t, n) {   // xC — the entire graduation check
  return Math.min(e, a) + Math.min(s, l) + Math.min(t, r) + Math.min(n, i);
}
```

The whole degree-eligibility test is: clamp four running credit totals at their caps, add them, compare to 210. The user-facing message cascade, same chunk:

```js
let h = e => {
  let { totalCredits: s, aCredits: t,
        creditsInSpecialisation: a, aCreditsInSpecialisation: l } = e;
  return (0, m.xC)(s, t, a, l) === m.Ec
      ? "Du kan ta examen, grattis !"
    : a < m.rX ? "Du har för få HP i specialiseringen för att ta examen, du behöver ytterligare " + (45 - a) + "hp."
    : l < m.gn ? "Du har för få A-poäng i specialiseringen för att ta examen, du behöver ytterligare " + (30 - l) + "hp."
    : s < m.kE ? "Du har för få HP totalt för att ta examen, du behöver ytterligare " + (m.kE - s) + "hp."
    : t < m.Ti ? "Du har för få A-poäng totalt för att ta examen, du behöver ytterligare " + (45 - t) + "hp."
    : void 0;
};
```

The "closest specialization" ranking, same chunk — one filter and one descending sort on a credit-sum function `o.Uc(courses, code)`:

```js
[...t].filter(e => (0, o.Uc)(s, e.specialisationCode) > 0)
      .sort((e, t) => (0, o.Uc)(s, t.specialisationCode)
                    - (0, o.Uc)(s, e.specialisationCode))
```

Progress is rendered as a plain percentage bar: `C(l, r).toFixed(0) + "%"`.

**Verdict: fixed arithmetic over a fixed rule set. Four sums, four constants, one sort key.** Note the four constants are **global** — the same 90/45/45/30 is applied to every one of the 27 programme codes, with no per-programme variation.

Matching marketing copy, `https://studyplan.se/information`:

> "När du har valt några kurser kan du se vilken specialisering som är närmast att uppfylla alla krav."
> ("When you have chosen some courses you can see which specialization is closest to fulfilling all requirements.")

> "Inget av detta behöver du ha full koll på, då vårt verktyg här på Studyplan gör det åt dig :)"

> "…er alltså välja totalt 90 hp. Där 45 hp måste vara inom en specifik specialisering. Därutöver behöver du välja kurser för totalt 45 hp på A-nivå. 30 hp av dessa 45 hp måste vara [inom en specifik specialisering]."

### 3. Liveness evidence

**Frozen code.** Next.js content-hashes its chunk filenames, so an identical filename means identical bytes. Comparing the Wayback CDX record for the 2025-03-30 capture against the live site today:

| Asset | 2024-09-11 | 2025-03-30 | Live 2026-08-27 |
|---|---|---|---|
| buildId | `hbRHFInQZzjhJVr_tNV4z` | `VL8Xl7gyteP18oxNQaT5w` | `ILmzJejXYdPhEa1D3ic9O` |
| `pages/_app` | `c31248e6d60b584f` | `9c90550ed65117f5` | **`9c90550ed65117f5`** |
| `pages/index` | `3d9a1d21bc2b8f86` | `4f2b7a43b4ecf156` | **`4f2b7a43b4ecf156`** |
| `framework` | `5429a50ba5373c56` | `10fac88913917d91` | **`10fac88913917d91`** |
| `main` | `e0465c5e51501156` | `89a73c257705efff` | **`89a73c257705efff`** |

Application code changed between Sept 2024 and March 2025, then **stopped**. The buildId and webpack runtime chunk differ today only because the app has been rebuilt/redeployed — the runtime chunk embeds the buildId. (Source: `http://web.archive.org/cdx/search/cdx?url=www.studyplan.se*`)

**Dates.**
- Footer, every page: `2024 Studyplan, right reserved` *(sic — verified verbatim in the live HTML)*
- `https://studyplan.se/legal/terms`: "Our Terms of Service were last updated on **2024-05-05**."
- `https://studyplan.se/legal/privacy`: last updated **2024-04-25**.
- Launch: **2024-05-14**. Derived from the LinkedIn post activity ID `7196003797561675776` (`id >> 22` → epoch ms → 2024-05-14T04:30Z), post title "Äntligen lanserar vi Studyplan…" at `se.linkedin.com/posts/oliver-levay_...activity-7196003797561675776-9qSl`
- Only 27 Wayback snapshots ever; the last is 2025-03-30.

**Founders (GitHub API, public profiles).** No public studyplan repository exists — `search/repositories?q=studyplan+lth` returns zero results. The product is closed source.

- `github.com/oliverlevay` — Oliver Levay, company "Lund University", blog links studyplan.se, bio **"founding engineer @ scape"**, 42 public repos, profile updated 2026-08-25. 2026 activity is all other projects (`sakur.se`, `uwb-thesis-figures`, `personal-pwa-starter`).
- `github.com/AdrianSteene` — Adrian Steene, 5 public repos, most recent push 2025-12-11 (`adventOfCode2025`). None related to studyplan.
- Christoffer Sylve — no GitHub account confidently identified.

**Live usage** (`https://studyplan.se/api/home-info`, a public unauthenticated GET):

```
userCount                 2578
plannedCourseUsersCount   2129
specializationPlannedCount 1097
scheduledCourseCount     21350
scheduleCredits         163223
```

The homepage renders these client-side, which is why a static fetch shows `0`.

### 4. Scope — 27 LTH programme codes, live

Users per programme code from the same endpoint:

```
D   460    M   357    E   259    V   256    F   247    I   172
W   146    C   141    BME 121    Pi   89    N    80    B    75
K    64    L    56    R    25    MD   14    RH    4    A     2
MNAV  2    MMSR  1    MWLU  1    MMET  1    MBIO  1    BI    1
TNB   1    BR    1    IDA   1
```

All are LTH codes (the civilingenjör programmes plus a handful of master's/exchange codes with 1–2 users each). Nothing outside LTH. `https://studyplan.se/information` states the tool covers all LTH engineering programmes.

Self-description, `https://studyplan.se/about`:
> "Studyplan är en plattform för att hjälpa studenter att planera sin specialisering på LTH. **Lägg ifrån er ert föråldrade excellark** och välkommen till en ny era av planering!"

> "Som studenter stod vi inför utmaningen att planera vår specialisering, vilket ledde till idén om detta verktyg."

Contacts listed on `/about`: `adrian@studyplan.se`, `sylve@studyplan.se`, `oliver@studyplan.se`; `linkedin.com/company/studyplanlth`. *(Listed for completeness — not contacted.)*

### 5. Commercial posture

Free, stated unambiguously on `https://studyplan.se/faq`:
> "JA! Självklart är studyplan helt GRATIS! Studyplan är gjord av student, för studenter"

No legal entity is named. `https://studyplan.se/legal/terms` defines only:
> "**Company** (referred to as either the Company, We, Us or Our in this Agreement) refers to Studyplan."

The legal pages are **unedited TermsFeed boilerplate** — `www.termsfeed.com` appears in the bundles, and the terms retain an inapplicable clause:
> "100 USD if You haven't purchased anything through the Service."

The privacy policy similarly boilerplates "third-party advertisers" using "cookies, scripts, and web beacons" — no ad network is actually present in the bundles. It also says name and email are "obtained through Google with your explicit consent", and makes **no mention of Ladok data** despite the product ingesting Ladok transcripts (see below).

Auth is Clerk (`pk_live_Y2xlcmsuc3R1ZHlwbGFuLnNlJA`, `clerk.studyplan.se`). Hosting is Heroku (`Server: Heroku`, `heroku-nel` reporting headers). No pricing page, no donation link, no ads observed.

An LTH logo is displayed in the footer. No endorsement statement accompanies it, and no LTH or TLTH page referencing studyplan.se was found.

### 6. Data ingestion — hand-cranked

The settings page ships an **admin-only panel**, gated on `publicMetadata.admin`:

```js
let g = !!(null == b ? void 0 : b.publicMetadata.admin);
```

It contains four manual ingestion buttons, each firing a one-shot call on click (`chunks/pages/app/settings-1828c3f08d655c65.js`):

| Label | Button text | Handler |
|---|---|---|
| `"Add course HTML from LTH"` | `"Add now!!"` | `m.Tk(session, user)` |
| `"Add course CEQ information from LTH"` | `"Add CEQ Info"` | `m.Xj(session, user)` |
| `"Add Exam Info"` | `"Add Exam Info"` | `m.PE(session, user)` |
| `"Add prerequisites"` | `"Add prerequisites"` | `m.Dd(session, user)` |

`"Add course HTML from LTH"` is the tell: course data is **scraped from LTH's HTML pages** (`kurser.lth.se` is referenced in the bundles) and refreshed only when a human presses a button. There is no cron, no webhook, no LTH API integration anywhere in the client code.

The second ingestion path is the student's own **Ladok transcript PDF**, uploaded to `/api/upload-ladok`. The client parses the result and strips the verification footer with this regex — note it handles Swedish personnummer:

```js
.replace(/Kontrollera intyget på: https:\/\/www\.student\.ladok\.se\/verifiera\/\s+
          Personnummer:\s+\d{8}-\d{4}\s+Verifierbart tom:\s+\d{4}-\d{2}-\d{2}\s+
          Kontrollkod:\s+\w+\s+Sida \d+ \/ \d+/, ...)
```

Instructions shown to the user:
> "Det får du genom att gå in på Ladok->Meny->Intyg->Skapa intyg->Nationellt resultatintyg->Skapa"

Failure message:
> "Vi kunde inte hitta några kurser i PDF:en. Försök igen. Se till att du laddar upp ett nationellt resultatintyg från Ladok."

If the student skips the import, the tool **assumes a clean record**:
> "Eftersom du inte har importerat några kurser från Ladok så antar vi att du har klarat alla"

A nagging toast fires randomly (20% of loads) for users who never imported: `!importedFromLadok && .2 > Math.random()`.

### 7. Their own accuracy disclaimer

From `https://studyplan.se/information`:
> "…aktuell information, men vi rekommenderar alltid att du verifierar din planerade specialisering med din studievägledare för att säkerställa att allt stämmer med dina mål och krav."
> ("…current information, but we always recommend that you verify your planned specialization with your study advisor to make sure everything matches your goals and requirements.")

They explicitly do **not** position the tool as authoritative.

---

## Inferred (clearly marked)

- **The four-constant rule engine is incomplete against their own documentation.** `/information` describes the degree as "180 hp obligatoriska kurser år 1-3, 45 hp vald specialisering varav minst 30 hp A-nivå, 45 hp valfria kurser varav **max 15 hp externt valfria**, totalt minst 75 hp på A-nivå". The shipped checker enforces only 90/45/45/30. The "max 15 hp externally elective" cap is not enforced anywhere in the client bundles. *(Inferred from absence in code — it could conceivably be enforced server-side, though nothing suggests it.)*
- **One rule set for 27 programmes.** The constants are module-level and unparameterised, so architecture (A), the master's codes (MNAV, MMSR, MWLU, MMET, MBIO) and the 5-year civilingenjör programmes are all measured against the same thresholds. For the master's-code users this is near-certainly wrong, though those are only ~6 users.
- **Effectively in maintenance mode.** Code frozen since March 2025 + both traceable founders shipping other projects in 2026 + one now employed as a founding engineer elsewhere. The site is being kept running, not developed. *(Inference from the combination; no announcement of abandonment exists.)*
- **The redeploy since March 2025 is likely infrastructural** — a Heroku rebuild or dependency bump — since the buildId changed while every page chunk hash held constant.
- **Adoption is roughly one LTH cohort's worth.** 2,578 users against LTH's ~10,000 students, concentrated in the years where specialization choice actually happens. Spread across programmes proportional to programme size (D and M largest), which is the signature of organic peer-to-peer spread rather than any institutional push.

---

## Could not determine

- **The exact string "lyckades inte hitta någon information om denna kurs".** The brief reports it and the page-rendering fetches surfaced it, but I could **not** locate it in any of the 33 chunks I downloaded. It is most likely inside a `next/dynamic` chunk that is not listed in `_buildManifest` and is only pulled in on a course-detail view, which I did not reach because course views sit behind Clerk login. I did verify the adjacent fact that explains such a gap: CEQ data is ingested by an admin pressing a button, so it will be missing for any course not covered by the last manual run. **How incomplete the coverage actually is cannot be measured from outside the login.**
- **Whether `Uc`/`ZP`/`jN` (the credit-sum helpers) do anything beyond summing.** Their defining module is in a login-gated chunk. Every call site I read passes only a course array and a specialization code and consumes a single number, so a plain sum is the only shape consistent with the evidence — but I did not read the function body.
- **Server-side logic in general.** All seven API routes are thin; the heavy work appears client-side, but I cannot rule out server validation.
- **Christoffer Sylve's current activity.** No GitHub account confidently attributed.
- **Any TLTH / LTH institutional relationship.** No page on either side mentions the other. The footer LTH logo may be decorative or may reflect an informal arrangement — could not determine.
- **Traffic trend.** No analytics are exposed; `home-info` gives cumulative totals only, with no time series, so I cannot tell whether signups are still growing or have flatlined.
- **Reddit/forum discussion.** Searches returned nothing. Absence of evidence here is weak — Swedish-language student chat often lives in Discord/Facebook groups that are not indexed.

---

## What this means for a competing product

- **Lead with what they verifiably are not: this is a credit calculator, not a validator.** Their entire correctness engine is `Math.min(x,90)+Math.min(y,45)+Math.min(z,45)+Math.min(w,30) === 210`, with one global rule set for 27 programmes and no enforcement of the externally-elective cap they themselves document. If StudyPlanner does real per-programme rule checking — prerequisites, course-instance collisions, the 15 hp external cap, programme-specific exceptions — that is a category difference, not a feature difference. Demonstrate it on a case their arithmetic gets wrong.

- **Do not lead with AI.** They have none, and their tool is *free*, *already adopted by 2,578 LTH students*, and *endorsed by nobody* — which means an LTH staff member's instinct will be about correctness and liability, not sophistication. "We use AI" invites the question their disclaimer already answers ("verify with your study advisor"). "We are correct per programme, and here is the rule source" does not.

- **Their real moat is data plumbing, and it is weaker than it looks.** They solved two things you would otherwise have to solve: scraping LTH course/CEQ/exam/prerequisite data, and parsing Ladok *nationellt resultatintyg* PDFs into a completed-course list. But the LTH scrape is a human pressing "Add now!!" with no scheduler, so their catalogue drifts stale between manual runs. An automated, dated, verifiable ingest is a concrete claim you can make that they cannot.

- **The 17-month code freeze is your timing argument, but do not say it out loud.** Frame it as capacity, not decay: their team has graduated and moved to industry jobs. If LTH staff raise studyplan.se, "it's a great student project that's been stable since early 2025 — we're building something maintained" lands. Calling a well-liked student tool dead in a cold email to their university will not.

- **Expect studyplan.se to come up, and pre-empt it in the email.** 2,578 users out of ~10,000 LTH students means programme staff have probably heard of it, even though it has zero official footprint (no LTH page, no TLTH page, no press). Naming it first, generously, signals you did the homework — and lets you set the comparison frame instead of defending against it.

- **Two soft spots worth knowing, to use carefully.** Their privacy policy is unedited TermsFeed boilerplate that never mentions Ladok, while the product ingests Ladok transcripts containing personnummer; and their terms name no legal entity. If a GDPR-conscious administrator asks about data handling, a named controller, an accurate DPA-ready policy, and a clear statement on personnummer handling are cheap for you and currently absent for them. Raise this as your own standard, never as an accusation against three students.
