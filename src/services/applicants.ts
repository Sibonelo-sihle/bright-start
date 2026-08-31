import { adminCandidates } from '../data/adminMockData';
import type { ApplicantStatus, Candidate, InternalNote } from '../types';
let records=[...adminCandidates];
export async function getApplicants(){ return [...records]; }
export async function getApplicant(id:string){ return records.find(item=>item.id===id)??null; }
export async function updateApplicantStatus(id:string,status:ApplicantStatus){ records=records.map(item=>item.id===id?{...item,status}:item); return getApplicant(id); }
export async function addApplicantNote(id:string,body:string){ const note:InternalNote={id:`note-${Date.now()}`,body,author:'Bright Start Admin',createdAt:new Date().toISOString()}; records=records.map(item=>item.id===id?{...item,notes:[note,...item.notes]}:item); return getApplicant(id); }
