import React from 'react';
import { ArrowRight, School, UserCheck, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { PageRoute } from '../types';
import { AUTHENTIC_IMAGES, COMPANY_INFO } from '../data/constants';
import { TrustStrip } from '../components/TrustStrip';
import { AudiencePanels } from '../components/AudiencePanels';
import { WhyBrightStart } from '../components/WhyBrightStart';
import { RolesGrid } from '../components/RolesGrid';
import { RecruitmentProcess } from '../components/RecruitmentProcess';
import { SafeguardingSection } from '../components/SafeguardingSection';
import { EducatorCTASection } from '../components/EducatorCTASection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative bg-[#F8F7F3] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#D9E2EC]/70">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#2463A7]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-80 bg-[#F4B942]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Side Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#F4B942]" />
                TRUSTED EDUCATION RECRUITMENT
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#102A43] tracking-tight leading-[1.12]">
                Building <span className="text-[#2463A7]">Bright Futures</span>,<br />
                <span className="text-[#102A43]">One Teacher at a Time.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-[#627D98] max-w-2xl leading-relaxed font-normal">
                Connecting qualified, trusted and passionate educators with schools where they can make a lasting difference.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  id="hero-btn-find-staff"
                  onClick={() => onNavigate('staff-request')}
                  className="px-8 py-4 bg-[#102A43] hover:bg-[#1E3A56] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <School className="w-4 h-4 text-[#F4B942]" />
                  <span>Find Staff</span>
                  <ArrowRight className="w-4 h-4 text-[#F4B942] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-btn-apply-jobs"
                  onClick={() => onNavigate('apply')}
                  className="px-8 py-4 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4 text-[#102A43]" />
                  <span>Apply for Jobs</span>
                </button>
              </div>

              {/* Small Supporting Line */}
              <div className="pt-4 flex items-center gap-2 text-xs text-[#627D98] font-medium border-t border-[#D9E2EC]/60">
                <ShieldCheck className="w-4 h-4 text-[#3D8061] shrink-0" />
                <span>Ethical recruitment • Carefully vetted candidates • Education-focused expertise</span>
              </div>
            </div>

            {/* Right Side Education Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 sm:aspect-5/4">
                  <img
                    src={AUTHENTIC_IMAGES.hero}
                    alt="African educator teaching engaged students in a modern classroom"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge 1: Vetted Educators */}
                <div className="absolute -bottom-5 left-2 sm:left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-[#D9E2EC] shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-extrabold text-[#102A43]">Vetted & Safeguarded</div>
                    <div className="text-xs text-[#627D98]">Safeguarding-conscious screening</div>
                  </div>
                </div>

                {/* Floating Badge 2: Zimbabwe & Region */}
                <div className="absolute -top-4 right-2 hidden sm:flex bg-[#102A43] text-white rounded-xl py-2 px-3.5 border border-[#2463A7] shadow-md items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F4B942] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wide">Zimbabwe & Regional Markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. INTRODUCTION / WHO WE ARE */}
      <section id="who-we-are" className="py-16 md:py-24 bg-white border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#F8F7F3] aspect-4/3 sm:aspect-5/4">
                <img
                  src={AUTHENTIC_IMAGES.whoWeAre}
                  alt="African teacher leading an inspiring learning session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#102A43]/70 to-transparent p-5 text-white text-left">
                  <span className="text-xs font-bold text-[#F4B942] uppercase tracking-wider block">
                    Our Core Mission
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium mt-1">
                    “Every child deserves a safe, nurturing and inspiring learning environment.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
                WHO WE ARE
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight">
                Recruitment built around education.
              </h2>

              <div className="space-y-4 text-base text-[#627D98] leading-relaxed">
                <p>
                  <strong className="text-[#102A43]">Bright Start Edu Recruitment</strong> is a professional education recruitment agency dedicated to connecting schools with highly qualified teachers, school managers, supervisors and support staff.
                </p>
                <p>
                  We believe every child deserves a safe, nurturing and inspiring learning environment. That starts with having the right people in the right roles.
                </p>
                <p>
                  We work closely with educational institutions to understand their needs and carefully identify professionals who are qualified, dependable and aligned with their values.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="btn-learn-about-bright-start"
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 bg-[#102A43] hover:bg-[#1E3A56] text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-xs inline-flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#F4B942]" />
                  <span>Learn About Bright Start</span>
                  <ArrowRight className="w-4 h-4 text-[#F4B942]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHOOLS VS EDUCATORS (TWO AUDIENCE PATHS) */}
      <AudiencePanels onNavigate={onNavigate} />

      {/* 5. WHY BRIGHT START */}
      <WhyBrightStart />

      {/* 6. ROLES WE RECRUIT */}
      <RolesGrid onNavigate={onNavigate} />

      {/* 7. RECRUITMENT PROCESS */}
      <RecruitmentProcess onNavigate={onNavigate} />

      {/* 8. SAFEGUARDING */}
      <SafeguardingSection />

      {/* 9. EDUCATOR CTA */}
      <EducatorCTASection onNavigate={onNavigate} />

      {/* 10. FINAL CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
