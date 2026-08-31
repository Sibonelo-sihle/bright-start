# Architecture

```text
Public website
      |
      v
Supabase public API and Edge Function
```

The public website is a React/Vite frontend under `frontend/`. It uses browser-safe Supabase configuration for published job reads and public submissions. Educator applications and private document uploads pass through the `submit-educator-application` Edge Function.

The separate admin application integrates against the shared Supabase architecture described in `docs/admin-integration.md`; no admin runtime code is included in this repository.
