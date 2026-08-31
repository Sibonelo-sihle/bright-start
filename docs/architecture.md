# Architecture

```text
Public website
      |
      v
Future database / backend
      ^
      |
Admin dashboard
```

The public website and admin dashboard are one React/Vite frontend under `frontend/`. They share TypeScript domain types and frontend service abstractions.

The public site currently displays static sample vacancies and simulates form submissions. Admin V1 uses clearly labelled mock authentication and in-memory demo data. These are development scaffolding, not production persistence or security.
