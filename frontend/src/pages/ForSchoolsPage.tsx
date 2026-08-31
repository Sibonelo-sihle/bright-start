import React from 'react';
import { School, CheckCircle2, ShieldCheck, Clock, Users, ArrowRight, BookOpen, Layers, Award, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';
import { AUTHENTIC_IMAGES, SCHOOL_TYPES_SERVED } from '../data/constants';
import { SectionHeading } from '../components/SectionHeading';
import { RecruitmentProcess } from '../components/RecruitmentProcess';
import { FinalCTA } from '../components/FinalCTA';

interface ForSchoolsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#F8F7F3]">
      {/* Hero Header */}
      <section className="bg-[#102A43] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-4">
            <School className="w-3.5 h-3.5" />
            Institutional Staffing Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Build your school’s future with carefully considered education professionals.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate recruitment friction, safeguard your learners, and access pre-vetted teachers, HODs, and leadership talent tailored to your school’s ethos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('staff-request')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <School className="w-4 h-4 text-[#102A43]" />
              <span>Submit Staffing Request</span>
              <ArrowRight className="w-4 h-4 text-[#102A43]" />
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1E3A56] hover:bg-[#2463A7] text-white font-bold text-sm rounded-xl border border-[#2463A7]/50 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Vetting Standards</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Core Value Propositions for Schools */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Benefits"
            title="Why leading schools partner with Bright Start."
            subtitle="Recruitment engineered specifically around the operational demands and curriculum nuances of educational institutions."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8F7F3] rounded-2xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Massive Time Savings</h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                Skip hundreds of unqualified CVs. We present a tightly curated shortlist of 2–3 pre-screened educators ready to interview.
              </p>
            </div>

            <div className="bg-[#F8F7F3] rounded-2xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Rigorous Safeguarding</h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                Complete qualification verification with universities, ID authentication, and confidential verbal reference checks.
              </p>
            </div>

            <div className="bg-[#F8F7F3] rounded-2xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FEF3D6] text-[#102A43] flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#DFA22A]" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Reduced Staff Turnover</h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                By assessing cultural alignment, boarding temperament, and pedagogical philosophy, our placements stay longer.
              </p>
            </div>

            <div className="bg-[#F8F7F3] rounded-2xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Curriculum Expertise</h3>
              <p className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                Specialised knowledge of Cambridge Assessment (IGCSE/A-Level), IB Diploma, and National Curriculum syllabi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Schools Served Grid */}
      <section className="py-16 md:py-24 bg-[#F8F7F3] border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Scope"
            title="Types of educational institutions we serve."
            subtitle="From independent prep schools to large boarding colleges and early learning networks."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOL_TYPES_SERVED.map((type) => (
              <div
                key={type.name}
                className="bg-white rounded-2xl p-6 border border-[#D9E2EC] shadow-xs hover:border-[#2463A7] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center mb-4 font-bold text-sm">
                    <School className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#102A43] mb-2">{type.name}</h3>
                  <p className="text-xs text-[#627D98] leading-relaxed mb-4">{type.description}</p>
                </div>
                <div className="pt-3 border-t border-[#D9E2EC]/70 text-[11px] font-semibold text-[#2463A7] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3D8061]" />
                  <span>Custom placement protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <RecruitmentProcess onNavigate={onNavigate} />

      {/* Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
