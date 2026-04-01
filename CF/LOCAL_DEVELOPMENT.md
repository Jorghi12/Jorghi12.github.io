# Local Development

This repo supports a fully local day-to-day stack without Firebase, Postgres, or Redis.

Primary local-only mode uses:

- local SQLite for backend persistence
- in-memory cache instead of Redis
- local auth stored in backend private state
- local media uploads on disk
- local backend API
- local socket server
- Flutter app pointed at the local backend

## 1. Run the backend API locally

From [/Users/jorgdoku/Desktop/sideprojects/CF/Backend-Dart](/Users/jorgdoku/Desktop/sideprojects/CF/Backend-Dart):

```bash
LOCAL_ONLY=true \
ENV=local \
INITIALIZE_DATABASE=true \
PORT=8080 \
dart run bin/server.dart
```

Local-only backend mode does all of the following:

- skips Firebase initialization
- uses SQLite at `Backend-Dart/.local_dev/clubfemboy.sqlite`
- stores local auth credentials in backend private state
- stores uploaded media under `Backend-Dart/public/local_uploads`
- serves uploaded media directly from the local backend
- uses an in-memory cache instead of Redis

Optional overrides:

- `LOCAL_SQLITE_PATH=/absolute/path/to/local.sqlite`
- `LOCAL_PUBLIC_BASE_URL=http://127.0.0.1:8080`

## 2. Run the socket server locally

From [/Users/jorgdoku/Desktop/sideprojects/CF/Backend-Dart](/Users/jorgdoku/Desktop/sideprojects/CF/Backend-Dart):

```bash
LOCAL_ONLY=true \
ENV=local \
PORT=3000 \
dart run bin/socket-server.dart
```

The socket health endpoint is:

- `http://127.0.0.1:3001/socket-message/health`

## 3. Run the Flutter app locally

From [/Users/jorgdoku/Desktop/sideprojects/CF/Mobile-Dart](/Users/jorgdoku/Desktop/sideprojects/CF/Mobile-Dart):

macOS:

```bash
flutter run -d macos --dart-define=LOCAL_ONLY=true
```

iOS simulator:

```bash
flutter run -d ios --dart-define=LOCAL_ONLY=true
```

Android emulator:

```bash
flutter run -d android \
  --dart-define=LOCAL_ONLY=true \
  --dart-define=LOCAL_BACKEND_HOST=http://10.0.2.2:8080
```

Chrome/web is not the recommended local-only auth target right now. The supported local flow is the native Flutter app against the local backend and socket servers.

## 4. Create a local account

Use the app’s normal signup flow in local-only mode, or hit the backend directly:

```bash
curl -X POST http://127.0.0.1:8080/auth/create \
  -H 'Content-Type: application/json' \
  -d '{
    "email":"localtester@example.com",
    "username":"localtester",
    "password":"testpass123",
    "birth_date":"2000-01-01",
    "confirm_adult":true
  }'
```

Then sign in with the same email/password using the local app.

## Notes

- In local-only mode, the mobile app skips Firebase bootstrap, push setup, Sentry init, and Mixpanel tracking.
- In local-only mode, billing stays disabled on-device instead of pretending purchases can complete locally.
- Local auth uses the same `/auth/create`, `/auth/login`, `/auth/check`, and `/auth/logout` flows, but is verified entirely by the backend without Firebase.
- Uploaded media is stored locally and returned as backend-served URLs.
- The mobile app now defaults to `127.0.0.1` for local desktop/simulator backend access and uses `10.0.2.2` for Android emulator access.

## Quick Health Checks

API:

```bash
curl http://127.0.0.1:8080/health
```

Socket health:

```bash
curl http://127.0.0.1:3001/socket-message/health
```

Auth check:

```bash
curl http://127.0.0.1:8080/auth/check
```

## Optional Advanced Path

If you want a more production-like local environment later, the repo still includes [docker-compose.local.yml](/Users/jorgdoku/Desktop/sideprojects/CF/docker-compose.local.yml). The primary supported local-dev path, though, is the no-container local-only mode described above.
