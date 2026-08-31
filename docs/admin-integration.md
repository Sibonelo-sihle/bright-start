# Separate management application contract

The separate management application will use the same Supabase project URL with its own browser-safe environment configuration and Supabase Auth session. It must never embed a service-role key.

## Shared resources

- Tables: `jobs`, `candidates`, `applications`, `candidate_documents`, `staff_requests`, `contact_messages`, `admin_profiles`, `internal_notes`, `company_settings`.
- Private bucket: `candidate-documents`.
- Job statuses: `draft`, `published`, `closed`.
- Application statuses: `new`, `under_review`, `shortlisted`, `interview`, `offer`, `placed`, `not_selected`, `archived`.
- Staffing statuses: `new`, `contacted`, `in_progress`, `filled`, `closed`.
- Message statuses: `unread`, `read`, `replied`, `archived`.

Administrative access requires an authenticated `auth.users` account with a matching active row in `admin_profiles`. RLS remains the authority even when frontend route guards are present. Private documents should be opened with short-lived signed URLs generated only after RLS-authorised access.
