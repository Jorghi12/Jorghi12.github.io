# Club Femboy Product Pivot

## Thesis

Club Femboy is shifting away from a generic dating-style social product and
toward a safer, stronger wedge:

- an 18+ only network
- SFW only
- centered on fit checks, glow-ups, style feedback, and feminine self-expression
- designed to build confidence and trusted connection over time

The app should not read like a hookup or fetish marketplace. It should read
like a trusted place to post a look, ask for the exact feedback you want, and
participate safely.

## What Changed In This Pass

- Repositioned key mobile copy around 18+, SFW, trusted fit checks, and safer
  connection.
- Reworked the posting flow into a structured "look + ask" composer without a
  schema migration by encoding the ask type into the existing post title.
- Updated feed framing so the old dating-style "Celebs" language becomes safer
  product language.
- Refocused Explore toward style tags, advice topics, region, and online-now
  discovery instead of identity-first discovery.
- Replaced risky profile-card status framing with profile-completeness style
  trust framing.
- Added a Safety Center screen in settings.
- Reframed premium and waiting-list UI away from "pay to get in" positioning.
- Changed backend account creation so DMs are closed by default.

## Intentionally Deferred To Phase 2

- Proper structured post metadata in the database instead of title encoding.
- Dedicated closet / lookbook objects and private albums.
- Trust state, verified / established signals, and stronger moderation review
  tooling.
- Circles / groups / trusted friend layers.
- City mode, travel mode, advanced discovery, and visibility tools.
- Production-grade receipt validation and broader monetization work.
- More complete cleanup of legacy copy across every secondary screen.

## Likely Future Schema / Backend Additions

- structured post ask type and feedback fields
- trusted circles / groups
- verified or trust state
- private albums / closets / lookbooks
- moderation automation and better safety event logging
- robust IAP receipt validation and subscription state hardening

## Security And Repo Hygiene

- Secrets and credentials should not live in source control in real
  deployments.
- Any credentials that were ever real should be rotated and removed from git
  history.
- Sample config files and runtime-injected secrets should be preferred over
  committed environment secrets.
