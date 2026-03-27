# Launch Checklist

The codebase is ready for private beta and soft-launch validation, but these
external steps still need to be completed before production launch.

## Brand / Store Listing

- In-app brand: `Lilt`
- App Store / Play title: `Lilt: Femboy Glow-Up`
- Subtitle / short description: `Fit checks, advice, circles`
- Suggested one-line descriptor:
  `Trusted fit checks, glow-ups, and circles for feminine boys.`
- Keep `femboy` discoverability intentionally in the store title, subtitle,
  description, and keywords without keyword stuffing.

## Billing

- Apple App Store Server API credentials:
  - `APPLE_APP_STORE_SERVER_ISSUER_ID`
  - `APPLE_APP_STORE_SERVER_KEY_ID`
  - `APPLE_APP_STORE_SERVER_PRIVATE_KEY` or
    `APPLE_APP_STORE_SERVER_PRIVATE_KEY_PATH`
  - `APPLE_BUNDLE_ID`
- Google Play billing credentials:
  - `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` or
    `GOOGLE_PLAY_SERVICE_ACCOUNT_PATH`
  - `GOOGLE_PLAY_PACKAGE_NAME`
- Configure App Store subscription products and review-localized metadata.
- Configure Google Play subscriptions, base plans, offers, and tester access.

## Billing Webhooks / Lifecycle

- Point App Store Server Notifications to
  `/auth/billing/apple/notifications`.
- Point Google RTDN / Pub/Sub push to `/auth/billing/google/rtdn`.
- Finish Google Pub/Sub push-auth / OIDC verification setup at deployment time.
- Verify reverse proxy / ingress forwards the push auth header to the backend.

## Legal / Store Metadata

- Confirm App Store / Play listing copy matches the Lilt rebrand:
  - title: `Lilt: Femboy Glow-Up`
  - subtitle / short description: `Fit checks, advice, circles`
  - description language should still mention femboy / feminine boys, fit
    checks, glow-ups, style advice, trusted circles, and 18+ / SFW framing.
- Confirm the production Privacy Policy URL is final and matches store-console
  metadata.
- Confirm the production Terms / EULA URL is final and matches store-console
  metadata.
- Add App Store / Play screenshots, age rating, content disclosures, and
  moderation/contact metadata in the store consoles.

## Notifications / Ops

- Verify push notification certificates / keys / Firebase config in the target
  environments.
- Verify Sentry, analytics, and purchase webhooks are pointed at the production
  project/environment.
