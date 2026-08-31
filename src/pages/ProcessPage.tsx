import React from 'react';
import { PageRoute } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { RecruitmentProcess } from '../components/RecruitmentProcess';
import { SafeguardingSection } from '../components/SafeguardingSection';
import { FinalCTA } from '../components/FinalCTA';
import { GitBranch, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#F8F7F3]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            Methodology & Standards
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            A Thoughtful, Safeguarded Approach to Every Placement.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover how Bright Start combines deep pedagogical screening with rigorous verification to protect children and empower schools.
          </p>
        </div>
      </section>

      {/* Dual Process Flow */}
      <RecruitmentProcess onNavigate={onNavigate} />

      {/* Safeguarding Deep Dive */}
      <SafeguardingSection />

      {/* Candidate Code of Practice */}
      <section className="py-16 md:py-20 bg-white border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ethical Charter"
            title="Our 5-Point Quality Commitment"
            subtitle="How we ensure transparency and integrity across every recruitment interaction."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#D9E2EC]">
              <div className="text-xs font-black text-[#2463A7] uppercase mb-2">01. Direct Qualification Checks</div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Authenticated Transcripts</h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                We verify tertiary education certificates and teaching diplomas to ensure authentic academic credentials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#D9E2EC]">
              <div className="text-xs font-black text-[#2463A7] uppercase mb-2">02. Verbal Headmaster References</div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">In-Depth Reference Calls</h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                We speak directly with former supervising heads of school to evaluate classroom management, work ethic, and character.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#D9E2EC]">
              <div className="text-xs font-black text-[#2463A7] uppercase mb-2">03. Safeguarding Clearance</div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Child Protection Scrutiny</h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                Zero tolerance for child protection risks. We conduct background and police clearances where required by law.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#D9E2EC]">
              <div className="text-xs font-black text-[#2463A7] uppercase mb-2">04. Honest Remuneration</div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Salary Transparency</h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                We promote clear salary expectations upfront so neither candidates nor school boards face unexpected surprises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#D9E2EC]">
              <div className="text-xs font-black text-[#2463A7] uppercase mb-2">05. Post-Placement Care</div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Termly Check-ins</h3>
              <p className="text-xs text-[#627D98] leading-relaxed">
                Our role does not end on day one. We check in throughout the first academic terms to ensure mutual satisfaction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#102A43] text-white border border-[#1E3A56] flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#F4B942] uppercase mb-2">Partner with Us</div>
                <h3 className="text-base font-bold text-white mb-2">Ready to start?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect with our education team today to discuss your school staffing or career aspirations.
                </p>
              </div>
              <button
                onClick={() => onNavigate('staff-request')}
                className="mt-4 px-4 py-2 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-xs rounded-lg transition-colors"
              >
                Submit School Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
