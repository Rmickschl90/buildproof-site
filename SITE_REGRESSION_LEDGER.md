# SITE REGRESSION LEDGER

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