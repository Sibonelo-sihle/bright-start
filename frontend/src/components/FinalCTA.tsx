import React from 'react';
import { ArrowRight, School, UserCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface FinalCTAProps {
  onNavigate: (page: PageRoute) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section id="final-cta" className="py-20 md:py-28 bg-[#102A43] text-white relative overflow-hidden">
      {/* Restrained gold & blue accent lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F4B942]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/30 text-[#F4B942] border border-[#F4B942]/30 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
          Bright Start Edu Recruitment
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Great schools start with great people.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you're building a stronger team or looking for the next step in your education career, Bright Start is here to help create the right connection.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            id="btn-final-find-staff"
            onClick={() => onNavigate('staff-request')}
            className="w-full sm:w-auto px-8 py-4 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 group"
          >
            <School className="w-4 h-4 text-[#102A43]" />
            <span>Find Staff</span>
            <ArrowRight className="w-4 h-4 text-[#102A43] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="btn-final-find-role"
            onClick={() => onNavigate('jobs')}
            className="w-full sm:w-auto px-8 py-4 bg-[#1E3A56] hover:bg-[#2463A7] text-white font-bold text-sm rounded-xl border border-[#2463A7]/60 transition-all flex items-center justify-center gap-2.5"
          >
            <UserCheck className="w-4 h-4 text-[#F4B942]" />
            <span>Find Your Next Role</span>
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1E3A56] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>• Ethical & Transparent Recruitment</span>
          <span>• Safeguarding-Conscious Verification</span>
          <span>• Dedicated Support for Zimbabwe & Region</span>
        </div>
      </div>
    </section>
  );
};
