import { adminJobs } from '../data/adminMockData';
import type { AdminJob, AdminJobStatus } from '../types';
let records = [...adminJobs];
export async function getJobs(){ return [...records]; }
export async function getJob(id:string){ return records.find(item=>item.id===id) ?? null; }
export async function createJob(input:Omit<AdminJob,'id'|'applicantCount'|'postedDate'>){ const item={...input,id:`adm-job-${Date.now()}`,applicantCount:0,postedDate:new Date().toISOString().slice(0,10)}; records=[item,...records]; return item; }
export async function updateJob(id:string, updates:Partial<AdminJob>){ records=records.map(item=>item.id===id?{...item,...updates}:item); return getJob(id); }
export async function closeJob(id:string){ return updateJob(id,{status:'Closed'}); }
export async function duplicateJob(id:string){ const source=await getJob(id); if(!source) return null; const copy={...source,id:`adm-job-${Date.now()}`,title:`${source.title} (Copy)`,status:'Draft' as AdminJobStatus,applicantCount:0,postedDate:new Date().toISOString().slice(0,10)}; records=[copy,...records]; return copy; }
