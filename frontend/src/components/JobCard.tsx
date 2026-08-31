import React, { useEffect, useRef } from 'react';
import { MapPin, Briefcase, Calendar, GraduationCap, ArrowRight, ShieldCheck, Check, Clock } from 'lucide-react';
import { JobListing } from '../types';

interface JobCardProps {
  job: JobListing;
  onApply: (job: JobListing) => void;
  onViewDetails: (job: JobListing) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC]">
              {job.roleType}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-[#627D98]">
              {job.educationLevel}
            </span>
          </div>

          {job.isSample && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FEF3D6] text-[#102A43] border border-[#F4B942]/40">
              Sample Vacancy
            </span>
          )}
        </div>

        {/* Job Title */}
        <h3 className="leading-snug">
          <button onClick={() => onViewDetails(job)} className="text-left text-base font-bold text-[#102A43] transition-colors hover:text-[#2463A7] focus-visible rounded sm:text-lg">
            {job.title}
          </button>
        </h3>

        {/* Employer & Location */}
        <div className="mt-2 space-y-1.5 text-xs text-[#627D98]">
          <div className="flex items-center gap-1.5 font-medium text-[#1F2933]">
            <Briefcase className="w-3.5 h-3.5 text-[#2463A7] shrink-0" />
            <span>{job.employer}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#627D98] shrink-0" />
            <span>{job.location}</span>
          </div>
        </div>

        {/* Short description */}
        <p className="mt-3 text-xs text-[#627D98] line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        {/* Key requirements preview */}
        <div className="mt-4 pt-3 border-t border-[#D9E2EC]/60">
          <div className="text-[11px] font-semibold text-[#102A43] mb-1.5">Key Prerequisite:</div>
          <div className="text-xs text-[#627D98] flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#3D8061] shrink-0 mt-0.5" />
            <span className="line-clamp-1">{job.requirements[0]}</span>
          </div>
        </div>
      </div>

      {/* Footer / Action */}
      <div className="mt-6 pt-4 border-t border-[#D9E2EC]/70 flex items-center justify-between gap-3">
        <div className="text-[11px] text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>Posted: {job.postedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewDetails(job)}
            className="px-3 py-1.5 text-xs font-bold text-[#2463A7] hover:bg-[#EEF4F8] rounded-md transition-colors"
          >
            View Role
          </button>
          <button
            onClick={() => onApply(job)}
            className="px-3.5 py-1.5 text-xs font-bold text-[#102A43] bg-[#F4B942] hover:bg-[#E5A82B] rounded-md transition-colors flex items-center gap-1"
          >
            <span>Apply</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface JobDetailsModalProps {
  job: JobListing | null;
  onClose: () => void;
  onApply: (job: JobListing) => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, onClose, onApply }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!job) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); previousFocus?.focus(); };
  }, [job, onClose]);
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="job-dialog-title" tabIndex={-1} className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#D9E2EC] relative max-h-[90vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200 focus:outline-none">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close job details"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EEF4F8] hover:bg-[#D9E2EC] text-[#1F2933] flex items-center justify-center text-sm font-bold transition-colors"
        >
          ✕
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pr-8">
          <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC]">
            {job.roleType}
          </span>
          <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-[#627D98]">
            {job.educationLevel}
          </span>
          {job.isSample && (
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#FEF3D6] text-[#102A43] border border-[#F4B942]/40">
              Sample Vacancy Profile
            </span>
          )}
        </div>

        {/* Title */}
        <h2 id="job-dialog-title" className="text-xl sm:text-2xl font-extrabold text-[#102A43] leading-tight">
          {job.title}
        </h2>

        {/* Employer & Details */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#627D98] bg-[#F8F7F3] p-3 rounded-lg border border-[#D9E2EC]">
          <div className="flex items-center gap-1.5 font-medium text-[#102A43]">
            <Briefcase className="w-3.5 h-3.5 text-[#2463A7]" />
            <span>Employer: {job.employer}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#627D98]" />
            <span>Location: {job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#627D98]" />
            <span>Posted: {job.postedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#627D98]" />
            <span>Employment: {job.roleType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#627D98]" />
            <span>Education level: {job.educationLevel}</span>
          </div>
          {job.department && <div className="flex items-center gap-1.5 sm:col-span-2"><GraduationCap className="w-3.5 h-3.5 text-[#627D98]" /><span>Subject / Department: {job.department}</span></div>}
          {job.deadline && (
            <div className="flex items-center gap-1.5 text-[#B91C1C] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#B91C1C]" />
              <span>Application Deadline: {job.deadline}</span>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Role Overview
          </h3>
          <p className="text-sm text-[#1F2933] leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2.5">
            Key Responsibilities
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#1F2933]">
            {job.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2463A7] shrink-0 mt-2" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2.5">
            Candidate Requirements & Qualifications
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#1F2933]">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#3D8061] shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        {job.benefits && job.benefits.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2.5">
              Compensation & Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102A43]">
              {job.benefits.map((ben, i) => (
                <div key={i} className="bg-[#EEF4F8] p-2.5 rounded-md border border-[#D9E2EC] flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safeguarding note */}
        <div className="mt-6 p-3 bg-[#EEF4F8] rounded-lg border border-[#D9E2EC] flex items-start gap-2.5 text-xs text-[#627D98]">
          <ShieldCheck className="w-4 h-4 text-[#3D8061] shrink-0 mt-0.5" />
          <span>
            Bright Start Edu Recruitment conducts rigorous identity checks, qualification verification, and professional reference authentication for all placements.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-4 border-t border-[#D9E2EC] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-[#D9E2EC] text-[#627D98] hover:text-[#102A43] font-bold text-xs rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(job);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Apply for this Position</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
