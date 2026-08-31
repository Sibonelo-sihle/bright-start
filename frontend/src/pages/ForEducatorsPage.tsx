import React from 'react';
import { UserCheck, Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake, Briefcase, GraduationCap } from 'lucide-react';
import { PageRoute } from '../types';
import { AUTHENTIC_IMAGES } from '../data/constants';
import { SectionHeading } from '../components/SectionHeading';
import { RolesGrid } from '../components/RolesGrid';
import { FinalCTA } from '../components/FinalCTA';

interface ForEducatorsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ForEducatorsPage: React.FC<ForEducatorsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#F8F7F3]">
      {/* Hero Header */}
      <section className="bg-[#102A43] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            Educator Career Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Take your teaching career to the next level.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Prepare your professional profile for future teaching and school leadership opportunities supported by Bright Start.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('apply')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-[#102A43]" />
              <span>Join Our Educator Network</span>
              <ArrowRight className="w-4 h-4 text-[#102A43]" />
            </button>
            <button
              onClick={() => onNavigate('jobs')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1E3A56] hover:bg-[#2463A7] text-white font-bold text-sm rounded-xl border border-[#2463A7]/50 transition-all flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-[#F4B942]" />
              <span>View Vacancies</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Register - Candidate Benefits */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Candidate Charter"
            title="Why teach with Bright Start Edu Recruitment?"
            subtitle="We treat educators with the professional dignity and respect your noble calling deserves."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F7F3] rounded-2xl p-8 border border-[#D9E2EC] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-3">100% Free for Educators</h3>
                <p className="text-sm text-[#627D98] leading-relaxed">
                  We never charge candidates registration fees, placement cuts, or application processing fees. Our recruitment service is completely free to teachers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D9E2EC] text-xs font-semibold text-[#3D8061] flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Ethical & compliant with labor codes</span>
              </div>
            </div>

            <div className="bg-[#F8F7F3] rounded-2xl p-8 border border-[#D9E2EC] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-3">Interview & Lesson Prep</h3>
                <p className="text-sm text-[#627D98] leading-relaxed">
                  Receive personalized briefing notes on the school's syllabus, curriculum expectations, and pedagogical questions before your demonstration lesson.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D9E2EC] text-xs font-semibold text-[#2463A7] flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Expert guidance from education consultants</span>
              </div>
            </div>

            <div className="bg-[#F8F7F3] rounded-2xl p-8 border border-[#D9E2EC] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FEF3D6] text-[#102A43] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#DFA22A]" />
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-3">Confidential Representation</h3>
                <p className="text-sm text-[#627D98] leading-relaxed">
                  Your current employment status and identity are treated with strict confidentiality. We only share candidate profiles with schools after your explicit consent.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D9E2EC] text-xs font-semibold text-[#102A43] flex items-center gap-1">
                <Check className="w-4 h-4 text-[#3D8061]" />
                <span>Complete data privacy protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles in Demand */}
      <RolesGrid onNavigate={onNavigate} />

      {/* Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
