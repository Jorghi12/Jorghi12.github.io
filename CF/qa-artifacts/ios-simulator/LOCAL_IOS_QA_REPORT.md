# Local iOS Simulator QA Report

Date: 2026-03-31
Repo: `/Users/jorgdoku/Desktop/sideprojects/CF`
Target: `iPhone 16 Pro` simulator
Mode: `LOCAL_ONLY=true`

## Run Summary

- Final QA run id: `20260331201544`
- Final QA account: `iosqa_20260331201544@example.com`
- Result: `PASS`

## Covered Flow

1. Login screen
2. Create-account screen
3. Login to authenticated home
4. Explore
5. Conversations
6. My profile
7. Profile settings
8. Lookbooks
9. Create-lookbook dialog
10. Lookbook creation
11. Safety Center
12. Create-post entry point

## Artifacts

- Structured result JSON:
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/logs/local_ios_qa_response.json`
- Current QA env:
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/logs/current_qa_env.txt`
- Screenshots:
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/01_login_screen.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/02_create_account_screen.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/03_home_after_login.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/04_explore.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/05_conversations.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/06_profile.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/07_profile_settings.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/08_lookbooks.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/09_create_lookbook_dialog.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/10_lookbook_created.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/11_safety_center.png`
  - `/Users/jorgdoku/Desktop/sideprojects/CF/qa-artifacts/ios-simulator/screenshots/12_create_post.png`

## Issues Found And Fixed During QA

- Backend local seed bug:
  - SQLite circle seeding used raw `DateTime` values and broke `/user/circles` for local accounts.
  - Fixed in `/Users/jorgdoku/Desktop/sideprojects/CF/Backend-Dart/bin/database/repository.dart`
- Mobile nested-scroll layout bugs:
  - `profile_settings`, `safety_center`, and `lookbooks` were rendering `ListView`s inside `PageViewHelper` with the wrapper scroll view enabled.
  - Fixed in:
    - `/Users/jorgdoku/Desktop/sideprojects/CF/Mobile-Dart/lib/src/frontend/primary_pages/profile/my_profile/profile_settings.dart`
    - `/Users/jorgdoku/Desktop/sideprojects/CF/Mobile-Dart/lib/src/frontend/primary_pages/profile/my_profile/safety_center.dart`
    - `/Users/jorgdoku/Desktop/sideprojects/CF/Mobile-Dart/lib/src/frontend/primary_pages/profile/my_profile/lookbooks.dart`
- QA harness reliability:
  - Replaced brittle back-button tapping with navigator-driven route pops.
  - Added stable keys for login/profile/settings/lookbook actions.
  - Sanitized the JSON report so it stores screenshot names instead of raw PNG bytes.

## Notes

- A previous failure in the lookbook-create step was caused by reusing a free-tier QA account that had already hit the 2-board limit. The final passing run used a fresh QA account.
- The final passing run triggered `POST /user/lookbooks` on the local backend, confirming the durable lookbook create path executed successfully.
