# SITE REGRESSION LEDGER

---

## iOS App Store Badge Live + Get Started Routing + Documents Screenshot Revert (2026-08-31)

Three changes this session, following the buildproof app's App Store
approval (see `buildproof/CLAUDE.md`'s "App Store Approved" entry for
the approval story itself — this ledger covers only the site-side
work).

**1. iOS App Store badge activated.** The `IOS_APP_STORE_URL` toggle
constant in `app/page.tsx` (added 2026-08-20, see entry below) was
flipped from `null` to
`https://apps.apple.com/us/app/leeward-records/id6796795666` — commit
`2812e01` on `ios-app-store-badge-prep`, merged fast-forward into
`marketing-site-overhaul-2026-07`. This single change flips the badge,
eyebrow copy, and availability-section body copy as designed back when
the toggle was built. Verified live on `getleeward.com` via direct
fetch post-deploy: Apple "Download on the App Store" badge renders
next to the Google Play badge, eyebrow reads "Available on Android and
iPhone."

**2. "Get Started" routing changed.** Commit `9f8ea1e`, directly on
`marketing-site-overhaul-2026-07`. All 3 "Get Started" button hrefs
(previously `https://app.getleeward.com/login`, defaulting straight
into the web app) changed to `#download`, an in-page anchor. Added
`id="download"` to the section wrapping the Google Play / App Store
download block, so "Get Started" now scrolls users to a choice of
install options instead of assuming web. Separately, the plain-text
"Web access is available at app.getleeward.com" line in that same
section was converted into a real `<a href="https://app.getleeward.com/login">`
link, so direct web access remains one click away — just no longer the
default "Get Started" destination. Verified live via direct fetch and
in-browser click-through.

**3. Documents-tab screenshot re-crop attempted, reverted.** Ryan
asked to replace `public/documents-tab-dark.jpg` (used in the
Documents-tab feature section, paired side-by-side with
`timeline-photo-dark.jpg`) with a tighter crop that excludes the
header/logo bar (previously showed the full "Leeward" logo, "Signed in
as..." line, and Upgrade/Account buttons above the actual Documents
tab content).

Swapped the file (commit `7d30ddd`, new image 1179×1682px vs. the
original 1179×2039px — both against the same 1179px-wide source
screenshot, just cropped differently). Ryan reported the live result
looked "rough" / "stretched." Investigated via direct DOM measurement
on the live page rather than guessing:

```js
// naturalWidth/naturalHeight vs getBoundingClientRect() on both <img> tags
documents: rendered 280.0x399.5, natural 1179x1682, naturalAspect=0.701, renderedAspect=0.701
timeline:  rendered 280.0x540.7, natural 1178x2275, naturalAspect=0.518, renderedAspect=0.518
```

Confirmed rendered aspect ratio exactly matches natural aspect ratio
for both images — **not** a CSS stretching bug (`height: "auto"` in
the inline style was working correctly, and the flex container's
default `align-items` was not distorting either image). The real issue
is that the new crop is a genuinely squatter/wider-aspect screenshot
(0.701) than its paired image (0.518), so at the same fixed 280px
display width it renders visibly shorter, and the same on-screen
content reads as proportionally "wider"/"stretched" relative to the
smaller frame.

Tried padding the new crop with solid-color fill (sampled from the
image's own background, `rgb(10,13,19)`) at the top to force-match
`timeline-photo-dark.jpg`'s height (2275px, +593px of padding) without
reintroducing the header. Rendered and visually inspected before
deploying — this looked distinctly worse: a large empty dark void
floating above the card, not a plausible phone-mockup, so this
approach was abandoned without being committed.

Reverted to the original with-header image (commit `ff3a715`, restored
via `git show 1c331ef:public/documents-tab-dark.jpg`, confirmed byte-
identical dimensions 1179×2039 to the pre-session version). Net result:
this section is visually unchanged from before this session — two real
commits were made and one reverted, but nothing shipped differently.
If a shorter/cropped Documents-tab screenshot is wanted in the future,
the real fix is a screenshot with more actual content (e.g. 2-3
documents listed) to naturally reach a taller, better-matched aspect
ratio — not padding.

---

## iOS App Store Badge — Prepped, Gated, Not Yet Live (2026-08-20)

Ryan asked to get the marketing site ready for iOS App Store approval
ahead of time, so the site can be updated within minutes of Apple
approving the app (currently build 12, resubmitted 2026-08-18, awaiting
review — see the buildproof repo's own CLAUDE.md "iOS Camera Crash on
Take Photo + App Store Guideline 2.1 Reply" entry for that status).

Branch `ios-app-store-badge-prep` (commit `db28370`), off
`marketing-site-overhaul-2026-07`. Single file changed: `app/page.tsx`.

Added one toggle constant near the top of the file:

```
const IOS_APP_STORE_URL: string | null = null;
```

While `null`, the site behaves exactly as it does today — Google Play
badge only, "iPhone users can access Leeward through the web while App
Store distribution is being prepared" copy in the availability section.
The moment Apple approves and a real App Store URL exists, set this one
constant to that URL and redeploy. That single change flips:
- the eyebrow line ("Available on Android" → "Available on Android and
  iPhone")
- the availability-section body copy (drops the "being prepared"
  language, mentions installing from the App Store)
- adds the official Apple "Download on the App Store" badge
  (`tools.applemediaservices.com` badge API, matching the existing
  Google Play badge's size/style) next to the Google Play badge

No other copy, layout, or file was touched. Verified via `tsc --noEmit`
and `npx eslint app/page.tsx` (both clean aside from pre-existing
warnings already present elsewhere in the file) — `next build` itself
could not run in this session's sandbox (missing SWC binary for
linux/x64, an environment limitation unrelated to this change, not a
real build failure). Diff reviewed directly (`git diff --stat`) to
confirm it touched only the intended 34 insertions / 6 deletions in
`app/page.tsx`, with no other pre-existing uncommitted local changes in
this repo swept in.

Pushed to GitHub by Ryan directly (this session's sandbox has no network
egress to github.com — pushes/PR creation had to happen from Ryan's own
machine/browser). PR into `marketing-site-overhaul-2026-07` not yet
opened as of this writing — compare view confirmed "Able to merge,"
just needs Ryan (or a future session, once he's signed into GitHub in
the working browser) to click through and open it. Safe to merge
anytime before Apple approves, since the feature is fully inert until
`IOS_APP_STORE_URL` is set.

**Next step once Apple approves:** get the real App Store URL, set
`IOS_APP_STORE_URL` in `app/page.tsx`, redeploy to production, verify
live via direct fetch of `getleeward.com` (per this repo's own
verification convention).

---

# CURRENT SAFE STATE

Current landing page state includes:

- working hero section
- working screenshots
- consistent screenshot sizing
- functional nav links
- privacy page
- terms page
- Stripe payment integration
- pricing section
- updated feature hierarchy
- mobile-friendly screenshot layout
- operational Get Started flow
- multi-audience copy (contractors, subcontractors, landlords, property
  managers), Record-first language throughout
- separate Estimates/Change Orders and Client Invoices sections, each with
  real, verified-correct product screenshots (2026-07-29)

This is considered current safe landing-page baseline.

---

# MAJOR SITE CHANGES

## Records/Multi-Audience Copy Broadening + Estimate/Invoice Section Split + Real Screenshots (2026-07-29)

Deployed to production (`getleeward.com`) via `vercel --prod` from
`marketing-site-overhaul-2026-07` (commit `5bedb7c`), aliased successfully,
confirmed live via direct fetch of the production URL immediately
afterward (not just trusting the CLI's "Ready" output).

Copy broadened across the whole homepage to stop reading as
contractor-only: hero support line now lists contractors, subcontractors,
landlords, property managers, and "anyone else who needs a clear record of
what happened" directly, rather than a "just as useful for..." aside.
Removed the "No card charged until it ends" trial line from the hero per
Ryan's call. All ~13 feature cards, the pricing captions, the Team
Accounts callout, and the Android-availability section were reworded the
same way (Record-first language, multiple audiences named explicitly),
consistent with the in-app Project→Record rename done earlier this week.

Real screenshots replaced placeholder/mismatched ones:
- `shared-timeline-view-v2.jpg` — genuine read-only client-facing
  `/share/{token}` timeline (previously this section only had an invoice
  screenshot, which was the wrong image for a section about read-only
  timeline sharing).
- `log-payment-dark.jpg` — genuine Log Payment dialog screenshot, added
  alongside the existing Estimate tab screenshot.
- `client-invoice-view-v2.jpg` — corrected invoice screenshot. The
  original `client-invoice-view.jpg` showed a logically-impossible demo
  state (an unapproved/pending Original Estimate coexisting with an
  approved change order, on a record whose total looked too low for the
  scope of work shown) — caught by Ryan reviewing the screenshot before
  it shipped. Fixed by archiving the bad demo approval and recreating a
  correct one on a clean record (Sunset Deck Rebuild: $8,100 approved
  Original Estimate + $4,700 approved Additional Charge = $12,800 total,
  correct chronological order). Note: `client-invoice-view.jpg` (the old,
  broken file) could not be overwritten in place in the working
  environment used to build this, so the new file was written under a
  `-v2` filename and `page.tsx`'s reference was repointed instead — the
  old file is still sitting unused in `public/`, harmless but not worth
  cleaning up urgently.

Also split what used to be a single "Estimates, change orders & invoices"
section into two: "Estimates & change orders" (estimate tab + Log Payment
screenshots) and a new standalone "Client invoices" section (invoice
screenshot alone) — Ryan's call, since invoices are a distinct enough
concept from estimates/change orders to deserve their own section rather
than being visually paired only with the estimate tab.

Verified live on production via direct fetch of `getleeward.com` after
deploy (not just the Vercel CLI's success output) — confirmed all new
copy and all three new image references render correctly in the actual
served HTML.

---

## Stripe Success / Cancel Pages Added

Added:

- `app/success/page.tsx`
- `app/cancel/page.tsx`

Purpose:

- complete post-checkout flow
- give paid users an immediate next step
- route users into the existing BuildProof app onboarding flow
- avoid manual onboarding delay after payment

Current result:

Landing Page
→ Stripe Checkout
→ Success Page
→ Open BuildProof
→ in-app onboarding

## Screenshot Direction Shift
Original generic screenshots were removed.

Landing page shifted toward:
- real project screenshots
- repair workflow screenshots
- share timeline screenshots
- export/dispute-oriented workflow visuals

Reason:
More authentic product presentation.

---

## CTA Simplification
Removed:
"See How It Works"

Reason:
- screenshots already visible
- cleaner UX
- stronger single CTA flow

Current CTA:
"Get Started"

---

## Messaging Direction Lock
Positioning intentionally shifted away from:
generic contractor SaaS language.

Current direction emphasizes:
- structured communication
- accountability
- timeline records
- dispute-ready exports
- shareable timelines

---

## Pricing Lock
Pricing locked to:
$29/month

Reason:
Cleaner/more mature presentation than:
$29.99

---

## Stripe Monetization Added
Stripe payment link integrated into:
- hero CTA
- pricing section CTA

Current flow:
Landing Page
→ Stripe Checkout
→ future success page
→ app onboarding

---

## Privacy / Terms Added
Added:
- /privacy
- /terms

Operational contact:
admin@linquelabs.com

---

## Feature Section Rewrite
Original generic cards removed.

Current features now include:
- chronological records
- frozen snapshots
- dispute exports
- delivery/view history
- integrity/timestamp records
- offline documentation
- read-only timelines

This was major positioning improvement.

---

# KNOWN FUTURE WORK

## Onboarding Refinement
Future onboarding improvement:
Add softer educational guidance explaining:
- document as work happens
- preserve accountability
- timeline-first workflow philosophy

Current onboarding is functional and acceptable.

---

## Staging Infrastructure
Critical future operational priority.

Current preview deployments insufficient for:
- full auth testing
- full offline testing
- reconnect E2E testing

Future staging environment required.

---

# CURRENT SAFE OPERATIONAL PHILOSOPHY

Avoid:
- aggressive rollout
- fake exclusivity
- overengineered onboarding
- unnecessary complexity

Prefer:
- low-friction onboarding
- structured communication
- operational realism
- gradual rollout
- careful infrastructure evolution

---

# CURRENT STATUS

Landing page now considered:
- operational
- monetizable
- soft-launch ready
- brand-consistent
- professionally presentable

Not considered:
- placeholder
- temporary demo