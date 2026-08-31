# Shared Supabase database

Migrations in `migrations/` define the shared data contract used by the public site now and a separate authenticated management application later. Apply migrations through the Supabase CLI; do not paste ad-hoc changes into production.

The public site reads published jobs and submits staffing/contact records through constrained RLS policies. Educator profiles, applications, and private documents are submitted through the `submit-educator-application` Edge Function so no candidate-table insert permission is granted to anonymous browsers.

No production or personally identifiable seed data belongs in this repository.
