import React from 'react';
import { School, UserCheck, Check, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface AudiencePanelsProps {
  onNavigate: (page: PageRoute) => void;
}

export const AudiencePanels: React.FC<AudiencePanelsProps> = ({ onNavigate }) => {
  return (
    <section id="audience-paths" className="py-16 md:py-24 bg-[#EEF4F8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
            Tailored Pathways
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Who can we help?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#627D98] leading-relaxed">
            Whether you are building an exemplary academic institution or seeking the next milestone in your teaching career, we provide dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* PANEL 1: FOR SCHOOLS */}
          <div
            id="panel-for-schools"
            className="bg-white rounded-2xl p-8 sm:p-10 border border-[#D9E2EC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2463A7]" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EEF4F8] text-[#102A43] font-bold text-xs uppercase tracking-wider border border-[#D9E2EC]">
                  <School className="w-4 h-4 text-[#2463A7]" />
                  For Schools & Institutions
                </div>
                <span className="text-xs font-semibold text-[#627D98]">Institutional Staffing</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight leading-snug">
                Find people who belong in your school.
              </h3>

              <p className="mt-4 text-base text-[#627D98] leading-relaxed">
                From classroom educators to school leadership and support staff, we help institutions identify professionals who match both the role and the culture of their school.
              </p>

              <div className="mt-8 pt-6 border-t border-[#D9E2EC]/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-4">
                  Institutional Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1F2933]">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Qualified candidates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Candidate screening</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Reference verification</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Safeguarding-conscious recruitment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Role and culture matching</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Recruitment support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                id="btn-panel-find-staff"
                onClick={() => onNavigate('staff-request')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#102A43] hover:bg-[#1E3A56] text-white font-bold text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 group-hover:bg-[#2463A7]"
              >
                <span>Find Staff</span>
                <ArrowRight className="w-4 h-4 text-[#F4B942]" />
              </button>
              <button
                onClick={() => onNavigate('for-schools')}
                className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-[#2463A7] hover:text-[#102A43] hover:underline"
              >
                Learn more about school partnerships →
              </button>
            </div>
          </div>

          {/* PANEL 2: FOR EDUCATORS */}
          <div
            id="panel-for-educators"
            className="bg-white rounded-2xl p-8 sm:p-10 border border-[#D9E2EC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F4B942]" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FEF3D6] text-[#102A43] font-bold text-xs uppercase tracking-wider border border-[#F4B942]/40">
                  <UserCheck className="w-4 h-4 text-[#DFA22A]" />
                  For Educators & Job Seekers
                </div>
                <span className="text-xs font-semibold text-[#627D98]">Free Candidate Registration</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight leading-snug">
                Find the school where you can thrive.
              </h3>

              <p className="mt-4 text-base text-[#627D98] leading-relaxed">
                We help passionate education professionals discover opportunities where their experience, qualifications and values can make a meaningful impact.
              </p>

              <div className="mt-8 pt-6 border-t border-[#D9E2EC]/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-4">
                  Educator Opportunities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1F2933]">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Teaching opportunities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Leadership positions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Support roles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Transparent recruitment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Application guidance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Career support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                id="btn-panel-explore-jobs"
                onClick={() => onNavigate('jobs')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 text-[#102A43]" />
              </button>
              <button
                onClick={() => onNavigate('apply')}
                className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-[#2463A7] hover:text-[#102A43] hover:underline"
              >
                Submit your CV directly →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
