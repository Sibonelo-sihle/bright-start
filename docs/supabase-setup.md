# Supabase setup

1. Create or select the approved shared Supabase project.
2. Install and authenticate the Supabase CLI.
3. From the repository root, link the project and apply migrations:

```bash
supabase login
supabase link --project-ref <project-ref>
supabase db push
supabase functions deploy submit-educator-application
```

4. Copy the Project URL and anon/publishable key into an uncommitted `frontend/.env.local`:

```text
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<browser-safe-anon-key>
```

The Edge Function receives `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from the Supabase runtime. Never copy the service-role key into Vite or any browser environment.

Before production, configure an approved origin instead of wildcard CORS and add bot/rate-limit protection for public submissions. Create real jobs through an authenticated operational process; do not seed demonstration vacancies.
