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

Primary positioning direction:

"Structured project communication with shareable timelines and dispute-ready exports."

Supporting positioning:

"Clear project history when accountability matters most."

Additional messaging direction:
- structured project communication
- dispute-ready documentation
- chronological project records
- accountability
- professional client communication
- frozen snapshots
- shareable timelines
- offline documentation

IMPORTANT:
The product intentionally moved away from overusing:
- "for contractors"
- niche construction-only language

while still naturally appealing to contractors through:
- screenshots
- workflows
- approvals
- exports
- documentation flow

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