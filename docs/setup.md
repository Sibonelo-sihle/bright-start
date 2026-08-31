# Local setup

Requirements: a current Node.js release and npm.

```bash
git clone <repository-url>
cd bright-start/frontend
npm install
npm run dev
```

Vite prints the local URL after startup. Copy `.env.example` to `.env.local` and provide the browser-safe Supabase project URL and anonymous key to exercise live public data flows.

```bash
npm run lint
npm run build
```

Supabase setup and migration instructions are documented in `supabase-setup.md`.
