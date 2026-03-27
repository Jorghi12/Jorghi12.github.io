# Lilt Product Pivot

## Thesis

Lilt is shifting away from a generic dating-style social product and
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
- Updated feed framing so the old celebrity-style tab language becomes safer
  product language.
- Refocused Explore toward style tags, advice topics, region, and online-now
  discovery instead of identity-first discovery.
- Replaced risky profile-card status framing with profile-completeness style
  trust framing.
- Added a Safety Center screen in settings.
- Reframed premium and waiting-list UI away from "pay to get in" positioning.
- Changed backend account creation so DMs are closed by default.
- Added safer profile/social framing so off-platform handles and feedback DMs
  feel optional instead of central to growth.
- Updated fullscreen media viewing so the structured ask type and prompt remain
  visible outside the feed card.

## Intentionally Deferred To Phase 2

- Proper structured post metadata in the database instead of title encoding.
- Dedicated closet / lookbook objects and private albums.
- Trust state, verified / established signals, and stronger moderation review
  tooling.
- Circles / groups / trusted friend layers.
- City mode, travel mode, advanced discovery, and visibility tools.
- Production-grade receipt validation and broader monetization work.
- More complete cleanup of legacy copy across every secondary screen.
- Authoritative App Store / Google Play receipt verification.

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
- Files in the current tree such as `Backend-Dart/.env.development`,
  `Backend-Dart/repo-key`, `Mobile-Dart/GoogleService-Info.plist`, and
  `Mobile-Dart/keystore.jks` should be treated as local/runtime artifacts and
  moved out of version control in a follow-up cleanup.

## IAP Validation Note

- The current payment flow keeps the UI coherent but does not yet perform
  authoritative server-side receipt validation.
- Mobile currently performs only a lightweight verification-data presence check.
- Backend `validate_iap` currently stores submitted purchase data but still
  needs real App Store / Google Play validation before entitlements should be
  trusted in production.
