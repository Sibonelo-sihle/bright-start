import { adminStaffRequests } from '../data/adminMockData';
import type { InternalNote, StaffRequestStatus } from '../types';
let records=[...adminStaffRequests];
export async function getStaffRequests(){return [...records];}
export async function getStaffRequest(id:string){return records.find(item=>item.id===id)??null;}
export async function updateStaffRequest(id:string,status:StaffRequestStatus){records=records.map(item=>item.id===id?{...item,status}:item);return getStaffRequest(id);}
export async function addStaffRequestNote(id:string,body:string){const note:InternalNote={id:`note-${Date.now()}`,body,author:'Bright Start Admin',createdAt:new Date().toISOString()};records=records.map(item=>item.id===id?{...item,notes:[note,...item.notes]}:item);return getStaffRequest(id);}
