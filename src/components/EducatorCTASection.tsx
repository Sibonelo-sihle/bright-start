import React from 'react';
import { UserPlus, Check, ArrowRight, FileText } from 'lucide-react';
import { PageRoute } from '../types';
import { AUTHENTIC_IMAGES } from '../data/constants';

interface EducatorCTASectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const EducatorCTASection: React.FC<EducatorCTASectionProps> = ({ onNavigate }) => {
  return (
    <section id="educator-cta" className="py-16 md:py-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF4F8] rounded-3xl p-8 sm:p-12 border border-[#D9E2EC] shadow-sm relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#2463A7]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-[#2463A7] border border-[#D9E2EC] mb-4">
                <UserPlus className="w-4 h-4 text-[#F4B942]" />
                Educator Registration
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight">
                Ready to take the next step in your teaching career?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#627D98] leading-relaxed">
                Join our regional educator database to be matched with verified vacancies in progressive primary, secondary, and international syllabus institutions.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1F2933]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8061]" />
                  <span>Free registration for all educators</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8061]" />
                  <span>Tailored role matching & interview prep</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8061]" />
                  <span>Confidential profile handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8061]" />
                  <span>Transparent school compensation</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="btn-educator-join-network"
                  onClick={() => onNavigate('apply')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Join Our Educator Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-[#102A43] font-bold text-sm rounded-lg border border-[#D9E2EC] transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#2463A7]" />
                  <span>Browse Current Jobs</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white aspect-4/3">
                <img
                  src={AUTHENTIC_IMAGES.forEducators}
                  alt="African education professional preparing for placement"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs rounded-xl p-3.5 border border-white/40 shadow-sm text-left">
                  <p className="text-xs font-bold text-[#102A43]">
                    “Connecting qualified, trusted and passionate educators with schools where they can make a lasting difference.”
                  </p>
                  <span className="text-[10px] font-semibold text-[#627D98] block mt-1">
                    Bright Start Candidate Charter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
