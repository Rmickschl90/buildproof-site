# BUILDPROOF SITE HANDOFF

## Current State

BuildProof now has a functional V1 landing/marketing site connected to live Stripe monetization flow.

The site has evolved beyond a placeholder marketing page and now reflects the actual BuildProof product identity, onboarding philosophy, and operational rollout strategy.

This handoff tracks:
- landing page structure
- branding/messaging locks
- Stripe monetization flow
- onboarding philosophy
- App Store positioning direction
- rollout philosophy
- next priorities

---

# Product Positioning (LOCKED DIRECTION)

**Updated 2026-07-29** — the two locked headlines below were rewritten as
part of the Record rename + multi-audience broadening pass and are now
STALE. Current live copy (see `app/page.tsx`, deployed to
`getleeward.com`):

Primary positioning direction (current):

"Clear records when accountability matters most."

Supporting hero line (current):

"Built for contractors, subcontractors, landlords, property managers, and
anyone else who needs a clear record of what happened."

This replaces the two "LOCKED" strings previously below (now historical
only, kept for reference):
- ~~"Structured project communication with shareable timelines and
  dispute-ready exports."~~
- ~~"Clear project history when accountability matters most."~~

Additional messaging direction:
- clear records / record history
- dispute-ready documentation
- chronological record history
- accountability
- professional client/tenant/owner communication
- frozen snapshots
- shareable read-only timelines
- offline documentation

IMPORTANT:
The product intentionally moved beyond contractor-only framing. Unlike the
earlier direction (which avoided naming other audiences directly and
relied on contractors self-recognizing through screenshots/workflows),
copy now explicitly names contractors, subcontractors, landlords, and
property managers side by side wherever the product's audience is
described — this was an explicit correction after Ryan flagged that the
implicit approach left non-contractor audiences (landlords, property
managers) essentially invisible in the copy despite the product being
positioned for them too.

The broader positioning direction is intentional.

---

# Current Landing Page Structure

## Hero Section
- headline
- supporting copy
- repair timeline screenshot
- single CTA: "Get Started"

Secondary CTA was intentionally removed.

Reason:
- cleaner UX
- less friction
- screenshots already explain workflow
- site feels more confident/minimal

---

## Structured Communication Section
Includes:
- shareable read-only timeline screenshots
- communication-focused messaging
- project organization positioning

Purpose:
Show professional client-facing workflow.

---

## Features Section

Current features are intentionally tied to actual BuildProof architecture:

1. Chronological Project Records
2. Offline Jobsite Capture
3. Approval Tracking
4. Read-Only Client Timelines
5. Frozen Send Snapshots
6. Delivery & View History
7. Integrity & Timestamp Records
8. One-Click Dispute Export Packages

Important:
Features now communicate:
- accountability
- metadata
- timestamps
- integrity records
- view tracking
- delivery history
- share timelines
- exportable documentation

This was a major positioning improvement over the original generic feature cards.

---

## Pricing Section

Current pricing:
$29/month

Pricing direction intentionally moved away from:
$29.99

Reason:
- cleaner
- more confident
- more aligned with contractor/trades software tone
- less "consumer SaaS psychology"

Pricing section currently includes:
- unlimited projects
- approvals
- exports
- offline capability
- client-facing timelines
- delivery/view tracking

---

# Stripe Monetization

Stripe payment link is now connected live.

Current Stripe checkout description (LOCKED):

"Structured project communication with shareable timelines and dispute-ready exports."

Current flow:

Landing Page
→ Stripe Checkout
→ future success page
→ Open BuildProof
→ existing onboarding wizard handles onboarding

IMPORTANT:
Current philosophy is:
semi-self-serve onboarding

NOT:
- gated approvals
- manual access reviews
- waitlist-heavy onboarding

Reason:
First impression and momentum matter heavily after payment.

## Stripe Success / Cancel Flow

Added V1 checkout completion routes:

- `/success`
- `/cancel`

Current payment flow:

Landing Page
→ Stripe Checkout
→ Success Page
→ Open BuildProof
→ existing in-app onboarding wizard

Current app link on success page:

https://buildproof-kappa.vercel.app

This is temporary until final domain structure is connected.

Future target:

buildproof.app → marketing site  
app.buildproof.app → production app  
staging.buildproof.app → staging/testing app

---

# Existing App Onboarding

The BuildProof app already contains an onboarding wizard system.

Current onboarding flow:
- create project
- open project
- add client info
- add entry
- add files
- send first update

This onboarding is considered sufficient for current monetization rollout.

Future onboarding refinement planned:
Add softer educational guidance around:
- documenting projects as they happen
- preserving accountability
- using timeline structure effectively

This is future polish, not current blocker.

---

# Privacy / Terms Pages

Pages added:
- /privacy
- /terms

Current contact email:
admin@linquelabs.com

This email is:
- tied to LLC
- already used for tester communication
- considered current operational contact address

---

# Rollout Philosophy

Current stage:
Controlled soft launch

Meaning:
- real users
- real field testing
- monetization beginning
- careful rollout
- no mass advertising yet

Current philosophy:
Keep onboarding low-friction while scaling carefully operationally.

---

# Staging Infrastructure (IMPORTANT FUTURE PRIORITY)

Current issue:
Preview deployments are NOT reliable for full auth/offline E2E testing due to Supabase auth redirect/session behavior.

Current production testing relies heavily on:
buildproof-kappa.vercel.app

Future required solution:
True staging environment.

Planned future structure:

buildproof.app → public marketing site
app.buildproof.app → production app
staging.buildproof.app → staging/testing app

Staging environment should:
- isolate testing
- preserve production testers
- support full auth flow
- support offline testing
- support reconnect/send testing safely

IMPORTANT:
Do NOT randomly modify production auth setup while testers are active.

Staging setup should be treated as a dedicated infrastructure lane.

---

# Current Operational Philosophy

BuildProof philosophy:
- practical
- organized
- accountable
- calm
- trustworthy
- not overhyped
- not startup-fluff-heavy

Avoid:
- fake scarcity
- excessive waitlist language
- overpromising
- aggressive SaaS jargon

Current direction intentionally favors:
- clarity
- operational realism
- professionalism
- structured communication

---

# Current Major Accomplishments

Landing site now includes:
- real screenshots
- real positioning
- legal pages
- pricing
- Stripe monetization
- operational CTA flow
- structured feature hierarchy
- mobile-friendly screenshot presentation
- professional visual consistency

This is considered:
V1 launch-ready marketing infrastructure.

**2026-07-29 update**: full copy + screenshot refresh deployed to
production, closing out the long-deferred "review/update marketing site"
follow-up from the in-app Record rename / Estimate-Invoice-Payments-
Documents / dark mode work. Copy now reflects every feature shipped since
the original launch copy was written (Estimates & Change Orders, Payment
Tracking, Reference Document Vault, Team Accounts) and explicitly speaks
to landlords/property managers, not just contractors. All screenshots
verified to be real, current, and logically correct (see
`SITE_REGRESSION_LEDGER.md` entry of the same date for the invoice-data
bug that was caught and fixed before shipping). See "Product Positioning"
above for the two rewritten locked headlines.

---

# Current Next Priorities

1. Success page after Stripe checkout
2. Open BuildProof app flow
3. Logo refinement
4. Landing page mobile polish pass
5. Staging infrastructure
6. App Store preparation
7. Launch documentation refinement

---

# Important Messaging Locks

LOCKED:
"Structured project communication with shareable timelines and dispute-ready exports."

LOCKED:
"Clear project history when accountability matters most."

LOCKED:
$29/month pricing

LOCKED:
Single primary CTA:
"Get Started"

---

# Notes

This landing page is no longer considered:
- placeholder
- mockup
- temporary experiment

It is now operational launch infrastructure and should be treated with the same documentation discipline as the core BuildProof app.