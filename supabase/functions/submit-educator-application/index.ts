import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };
const allowedTypes = new Set(['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/jpeg','image/png']);
const allowedFields = new Map([['cv','cv'],['qualification','qualification'],['certificate','certificate']]);

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !serviceKey) throw new Error('Function configuration is incomplete');
    const admin = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });
    const form = await request.formData();
    const payloadText = form.get('payload');
    if (typeof payloadText !== 'string') return json({ error: 'Application payload is required' }, 400);
    const payload = JSON.parse(payloadText);
    const rawJobId=form.get('jobId');
    const selectedJobId = typeof rawJobId === 'string' && rawJobId ? rawJobId : null;
    const required=['firstName','surname','email','phone','currentLocation','primaryRole','yearsOfExperience','highestQualification','institution','teachingQualification','currentEmployer','position','responsibilities'];
    if(required.some(field=>typeof payload[field]!=='string'||!payload[field].trim()))return json({error:'Required application fields are missing'},400);
    if(selectedJobId&&!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(selectedJobId)))return json({error:'Invalid job identifier'},400);
    const documents: Array<{ field:string; file:File }> = [];
    for (const field of allowedFields.keys()) {
      const value = form.get(field);
      if (value instanceof File && value.size > 0) {
        if (value.size > 10 * 1024 * 1024) return json({ error: `${field} exceeds the 10 MB limit` }, 400);
        if (!allowedTypes.has(value.type)) return json({ error: `${field} has an unsupported file type` }, 400);
        documents.push({ field, file: value });
      }
    }
    if (!documents.some(item => item.field === 'cv')) return json({ error: 'A CV is required' }, 400);

    const { data: submission, error: submissionError } = await admin.rpc('submit_educator_application', { payload, selected_job_id: selectedJobId });
    if (submissionError) throw submissionError;
    const uploaded: string[] = [];
    try {
      for (const { field, file } of documents) {
        const extension = safeExtension(file.name, file.type);
        const storagePath = `candidate/${submission.candidateId}/${crypto.randomUUID()}.${extension}`;
        const { error: uploadError } = await admin.storage.from('candidate-documents').upload(storagePath, file, { contentType: file.type, upsert: false });
        if (uploadError) throw uploadError;
        uploaded.push(storagePath);
        const { error: metadataError } = await admin.from('candidate_documents').insert({ candidate_id: submission.candidateId, application_id: submission.applicationId, document_type: allowedFields.get(field), storage_path: storagePath, original_filename: file.name.slice(0,255), mime_type: file.type, size_bytes: file.size });
        if (metadataError) throw metadataError;
      }
    } catch (error) {
      if (uploaded.length) await admin.storage.from('candidate-documents').remove(uploaded);
      throw error;
    }
    return json({ candidateId: submission.candidateId, applicationId: submission.applicationId }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : typeof error === 'object' && error && 'message' in error ? String(error.message) : 'Application submission failed';
    return json({ error: message }, /already exists/i.test(message) ? 409 : 400);
  }
});

function safeExtension(name:string,mime:string) {
  const byMime:Record<string,string>={'application/pdf':'pdf','application/msword':'doc','application/vnd.openxmlformats-officedocument.wordprocessingml.document':'docx','image/jpeg':'jpg','image/png':'png'};
  return byMime[mime] || name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g,'') || 'bin';
}
function json(body:unknown,status=200){return new Response(JSON.stringify(body),{status,headers:{...cors,'Content-Type':'application/json'}})}
