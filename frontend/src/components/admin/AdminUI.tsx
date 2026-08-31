import React from 'react';
import { AlertCircle, Inbox } from 'lucide-react';

export const inputClass='w-full rounded-lg border border-[#D9E2EC] bg-white px-3 py-2.5 text-sm text-[#1F2933] outline-none focus:border-[#2463A7] focus:ring-2 focus:ring-[#2463A7]/15';
export const labelClass='mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#102A43]';
export const primaryButton='inline-flex items-center justify-center gap-2 rounded-lg bg-[#2463A7] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#102A43] disabled:opacity-50';
export const secondaryButton='inline-flex items-center justify-center gap-2 rounded-lg border border-[#D9E2EC] bg-white px-4 py-2.5 text-sm font-bold text-[#102A43] hover:bg-[#EEF4F8]';

export function StatusBadge({status}:{status:string}){
  const positive=['Published','Placed','Filled','Replied']; const warning=['New','Unread','Under Review','Interview','In Progress'];
  const tone=positive.includes(status)?'bg-emerald-50 text-emerald-700 border-emerald-200':warning.includes(status)?'bg-amber-50 text-amber-800 border-amber-200':status==='Closed'||status==='Archived'||status==='Not Selected'?'bg-slate-100 text-slate-600 border-slate-200':'bg-blue-50 text-blue-700 border-blue-200';
  return <span className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-bold ${tone}`}>{status}</span>;
}
export function LoadingState(){return <div className="rounded-xl border border-[#D9E2EC] bg-white p-10 text-center text-sm text-[#627D98]">Loading…</div>}
export function EmptyState({message='No records found.'}:{message?:string}){return <div className="rounded-xl border border-dashed border-[#D9E2EC] bg-white p-10 text-center text-sm text-[#627D98]"><Inbox className="mx-auto mb-2 h-6 w-6"/>{message}</div>}
export function ErrorState({message}:{message:string}){return <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"><AlertCircle className="h-4 w-4"/>{message}</div>}
export function PageHeader({title,description,action}:{title:string;description?:string;action?:React.ReactNode}){return <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-2xl font-extrabold text-[#102A43]">{title}</h1>{description&&<p className="mt-1 text-sm text-[#627D98]">{description}</p>}</div>{action}</div>}
export function DataCard({title,children,action}:{title:string;children:React.ReactNode;action?:React.ReactNode}){return <section className="overflow-hidden rounded-xl border border-[#D9E2EC] bg-white shadow-sm"><div className="flex items-center justify-between border-b border-[#D9E2EC] px-5 py-4"><h2 className="font-bold text-[#102A43]">{title}</h2>{action}</div>{children}</section>}
export function DetailGrid({items}:{items:Array<[string,React.ReactNode]>}){return <dl className="grid gap-4 sm:grid-cols-2">{items.map(([label,value])=><div key={label}><dt className="text-xs font-bold uppercase tracking-wide text-[#627D98]">{label}</dt><dd className="mt-1 text-sm text-[#1F2933]">{value||'—'}</dd></div>)}</dl>}
