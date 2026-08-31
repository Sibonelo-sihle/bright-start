create extension if not exists pgcrypto;

create type public.job_status as enum ('draft','published','closed');
create type public.application_status as enum ('new','under_review','shortlisted','interview','offer','placed','not_selected','archived');
create type public.staff_request_status as enum ('new','contacted','in_progress','filled','closed');
create type public.message_status as enum ('unread','read','replied','archived');
create type public.document_type as enum ('cv','qualification','certificate');

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

create table public.jobs (
  id uuid primary key default gen_random_uuid(), title text not null, slug text not null unique,
  school_name text not null, location text not null, role_category text not null,
  role_type text not null, subject_department text, education_level text not null,
  employment_type text not null, description text not null,
  responsibilities text[] not null default '{}', minimum_requirements text[] not null default '{}',
  preferred_requirements text[] not null default '{}', salary_text text,
  application_deadline date, start_date date, status public.job_status not null default 'draft',
  published_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  constraint published_requires_date check (status <> 'published' or published_at is not null)
);

create table public.candidates (
  id uuid primary key default gen_random_uuid(), first_name text not null, surname text not null,
  email text not null, phone text not null, current_location text not null, city text, country text,
  primary_role text not null, years_of_experience text not null, education_level text,
  subjects text, current_employment_status text, highest_qualification text not null,
  institution text not null, graduation_year text, teaching_qualification text not null,
  professional_registration text, current_employer text not null, position text not null,
  employment_start_date text, employment_end_date text, responsibilities text not null,
  previous_experience text, preferred_roles text[] not null default '{}', preferred_locations text[] not null default '{}',
  available_start_date text, preferred_employment_types text[] not null default '{}', salary_expectation text,
  privacy_consent boolean not null, communication_consent boolean not null default false,
  accuracy_declaration boolean not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table public.applications (
  id uuid primary key default gen_random_uuid(), candidate_id uuid not null references public.candidates on delete cascade,
  job_id uuid not null references public.jobs on delete restrict, status public.application_status not null default 'new',
  applied_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  unique(candidate_id, job_id)
);

create table public.candidate_documents (
  id uuid primary key default gen_random_uuid(), candidate_id uuid not null references public.candidates on delete cascade,
  application_id uuid references public.applications on delete set null, document_type public.document_type not null,
  storage_path text not null unique, original_filename text not null, mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0 and size_bytes <= 10485760), created_at timestamptz not null default now()
);

create table public.staff_requests (
  id uuid primary key default gen_random_uuid(), school_name text not null, contact_person text not null,
  contact_job_title text, email text not null, phone text not null, location text not null,
  role_required text not null, subject_department text, education_level text not null,
  number_of_positions integer not null check (number_of_positions between 1 and 100), preferred_start_date text,
  employment_type text not null, role_description text not null, minimum_requirements text not null,
  additional_information text, urgency_level text not null check (urgency_level in ('Standard','Urgent','Future Planning')),
  status public.staff_request_status not null default 'new', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(), full_name text not null, email text not null, phone text,
  audience text not null, subject text, message text not null,
  status public.message_status not null default 'unread', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table public.admin_profiles (
  user_id uuid primary key references auth.users on delete cascade, full_name text not null,
  role text not null default 'admin', is_active boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.internal_notes (
  id uuid primary key default gen_random_uuid(), entity_type text not null check (entity_type in ('candidate','application','staff_request','contact_message','job')),
  entity_id uuid not null, body text not null, author_id uuid not null references auth.users on delete restrict,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.company_settings (
  id uuid primary key default gen_random_uuid(), setting_key text not null unique, setting_value jsonb not null,
  is_public boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create index jobs_status_idx on public.jobs(status); create index jobs_location_idx on public.jobs(location); create index jobs_created_at_idx on public.jobs(created_at desc);
create index candidates_email_lower_idx on public.candidates(lower(email));
create index applications_job_idx on public.applications(job_id); create index applications_candidate_idx on public.applications(candidate_id); create index applications_status_idx on public.applications(status); create index applications_applied_idx on public.applications(applied_at desc);
create index staff_requests_status_idx on public.staff_requests(status); create index staff_requests_created_idx on public.staff_requests(created_at desc);
create index contact_messages_status_idx on public.contact_messages(status); create index contact_messages_created_idx on public.contact_messages(created_at desc);

create trigger jobs_updated before update on public.jobs for each row execute function public.set_updated_at();
create trigger candidates_updated before update on public.candidates for each row execute function public.set_updated_at();
create trigger applications_updated before update on public.applications for each row execute function public.set_updated_at();
create trigger staff_requests_updated before update on public.staff_requests for each row execute function public.set_updated_at();
create trigger contact_messages_updated before update on public.contact_messages for each row execute function public.set_updated_at();
create trigger admin_profiles_updated before update on public.admin_profiles for each row execute function public.set_updated_at();
create trigger internal_notes_updated before update on public.internal_notes for each row execute function public.set_updated_at();
create trigger company_settings_updated before update on public.company_settings for each row execute function public.set_updated_at();

alter table public.jobs enable row level security; alter table public.candidates enable row level security;
alter table public.applications enable row level security; alter table public.candidate_documents enable row level security;
alter table public.staff_requests enable row level security; alter table public.contact_messages enable row level security;
alter table public.admin_profiles enable row level security; alter table public.internal_notes enable row level security; alter table public.company_settings enable row level security;

create or replace function public.is_active_admin() returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.admin_profiles where user_id=auth.uid() and is_active=true)
$$;
revoke all on function public.is_active_admin() from public; grant execute on function public.is_active_admin() to authenticated;

create policy "published jobs are public" on public.jobs for select to anon, authenticated using (status='published');
create policy "public staff request submission" on public.staff_requests for insert to anon, authenticated with check (status='new' and length(school_name) between 2 and 200 and length(email) between 5 and 320 and length(role_description) between 10 and 10000);
create policy "public contact submission" on public.contact_messages for insert to anon, authenticated with check (status='unread' and length(full_name) between 2 and 200 and length(email) between 5 and 320 and length(message) between 10 and 10000);
create policy "public settings read" on public.company_settings for select to anon, authenticated using (is_public=true);

revoke insert on public.staff_requests from anon, authenticated;
grant insert(school_name,contact_person,contact_job_title,email,phone,location,role_required,subject_department,education_level,number_of_positions,preferred_start_date,employment_type,role_description,minimum_requirements,additional_information,urgency_level,status) on public.staff_requests to anon, authenticated;
revoke insert on public.contact_messages from anon, authenticated;
grant insert(full_name,email,phone,audience,subject,message,status) on public.contact_messages to anon, authenticated;

create policy "admins manage jobs" on public.jobs for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins manage candidates" on public.candidates for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins manage applications" on public.applications for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins manage documents" on public.candidate_documents for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins manage staff requests" on public.staff_requests for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins manage messages" on public.contact_messages for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins view profiles" on public.admin_profiles for select to authenticated using (public.is_active_admin());
create policy "admins manage notes" on public.internal_notes for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());
create policy "admins manage settings" on public.company_settings for all to authenticated using (public.is_active_admin()) with check (public.is_active_admin());

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('candidate-documents','candidate-documents',false,10485760,array['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/jpeg','image/png'])
on conflict (id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
create policy "admins read candidate objects" on storage.objects for select to authenticated using (bucket_id='candidate-documents' and public.is_active_admin());
create policy "admins delete candidate objects" on storage.objects for delete to authenticated using (bucket_id='candidate-documents' and public.is_active_admin());

create or replace function public.submit_educator_application(payload jsonb, selected_job_id uuid default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare candidate_uuid uuid; application_uuid uuid; normalized_email text := lower(trim(payload->>'email'));
begin
  if normalized_email !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' then raise exception 'Invalid email'; end if;
  if coalesce((payload->>'privacyConsent')::boolean,false)=false or coalesce((payload->>'accuracyDeclaration')::boolean,false)=false then raise exception 'Required consent missing'; end if;
  select id into candidate_uuid from public.candidates where lower(email)=normalized_email and phone=payload->>'phone' order by updated_at desc limit 1;
  if candidate_uuid is null then
    insert into public.candidates(first_name,surname,email,phone,current_location,city,country,primary_role,years_of_experience,education_level,subjects,current_employment_status,highest_qualification,institution,graduation_year,teaching_qualification,professional_registration,current_employer,position,employment_start_date,employment_end_date,responsibilities,previous_experience,preferred_roles,preferred_locations,available_start_date,preferred_employment_types,salary_expectation,privacy_consent,communication_consent,accuracy_declaration)
    values(payload->>'firstName',payload->>'surname',normalized_email,payload->>'phone',payload->>'currentLocation',payload->>'city',payload->>'country',payload->>'primaryRole',payload->>'yearsOfExperience',payload->>'educationLevel',payload->>'subjects',payload->>'currentEmploymentStatus',payload->>'highestQualification',payload->>'institution',payload->>'graduationYear',payload->>'teachingQualification',payload->>'professionalRegistration',payload->>'currentEmployer',payload->>'position',payload->>'startDate',payload->>'endDate',payload->>'responsibilities',payload->>'previousExperience',array(select jsonb_array_elements_text(coalesce(payload->'preferredRoles','[]'))),array(select jsonb_array_elements_text(coalesce(payload->'preferredLocations','[]'))),payload->>'availableStartDate',array(select jsonb_array_elements_text(coalesce(payload->'employmentType','[]'))),payload->>'salaryExpectation',(payload->>'privacyConsent')::boolean,coalesce((payload->>'communicationConsent')::boolean,false),(payload->>'accuracyDeclaration')::boolean)
    returning id into candidate_uuid;
  else
    update public.candidates set first_name=payload->>'firstName',surname=payload->>'surname',current_location=payload->>'currentLocation',primary_role=payload->>'primaryRole',updated_at=now() where id=candidate_uuid;
  end if;
  if selected_job_id is not null then
    if not exists(select 1 from public.jobs where id=selected_job_id and status='published') then raise exception 'Selected job is unavailable'; end if;
    insert into public.applications(candidate_id,job_id) values(candidate_uuid,selected_job_id)
    on conflict(candidate_id,job_id) do nothing returning id into application_uuid;
    if application_uuid is null then raise exception 'An application for this job already exists'; end if;
  end if;
  return jsonb_build_object('candidateId',candidate_uuid,'applicationId',application_uuid);
end $$;
revoke all on function public.submit_educator_application(jsonb,uuid) from public, anon, authenticated;
grant execute on function public.submit_educator_application(jsonb,uuid) to service_role;
