import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Target, Award, Eye, Users, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';
import { PageRoute } from '../types';
import { AUTHENTIC_IMAGES, COMPANY_INFO, CORE_VALUES } from '../data/constants';
import { SectionHeading } from '../components/SectionHeading';
import { FinalCTA } from '../components/FinalCTA';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#F8F7F3]">
      {/* Header Banner */}
      <section className="bg-[#102A43] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            About Bright Start Edu Recruitment
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Empowering Education Through Trusted Recruitment.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building long-term partnerships between outstanding educators and forward-thinking educational institutions across Zimbabwe and southern Africa.
          </p>
        </div>
      </section>

      {/* Origin Story / Who We Are */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC]">
                Our Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight">
                Why Bright Start Edu Recruitment was founded.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#627D98] leading-relaxed">
                <p>
                  Education is the single most transformative catalyst in society. Yet, headmasters and school governing bodies constantly face severe challenges in sourcing verified, dependable, and pedagogy-driven teaching talent.
                </p>
                <p>
                  Bright Start Edu Recruitment (Pty) Ltd was established with a singular vision: to bring professionalism, transparency, and rigorous safeguarding standards to the education staffing sector.
                </p>
                <p>
                  Unlike generalist recruitment agencies, we exclusively serve schools and educators. We understand curriculum frameworks—from local curricula to Cambridge Assessment International Education (CAIE) and International Baccalaureate (IB)—and we assess candidates for both academic mastery and classroom culture fit.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#102A43]">
                <div className="flex items-center gap-2 bg-[#EEF4F8] px-3.5 py-2 rounded-lg border border-[#D9E2EC]">
                  <CheckCircle2 className="w-4 h-4 text-[#3D8061]" />
                  <span>100% Focused on Education</span>
                </div>
                <div className="flex items-center gap-2 bg-[#EEF4F8] px-3.5 py-2 rounded-lg border border-[#D9E2EC]">
                  <CheckCircle2 className="w-4 h-4 text-[#3D8061]" />
                  <span>Zero Fees for Job Seekers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#F8F7F3] aspect-4/3">
                <img
                  src={AUTHENTIC_IMAGES.aboutStory}
                  alt="African education administrators collaborating with teachers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs sm:text-sm font-semibold italic text-[#F4B942]">
                      “Building Bright Futures, One Teacher at a Time.”
                    </p>
                    <span className="text-[11px] text-slate-300 block mt-1">
                      Bright Start Edu Recruitment Brand Charter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 md:py-20 bg-[#F8F7F3] border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direction & Purpose"
            title="Our Vision & Mission"
            subtitle="Guiding every placement, every vetting interaction, and every school partnership."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-[#D9E2EC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-[#627D98] leading-relaxed">
                  To be the most trusted, ethical, and respected education recruitment partner across Zimbabwe and southern Africa—empowering schools to flourish with passionate, highly qualified educators in every classroom.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D9E2EC] text-xs font-semibold text-[#2463A7] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F4B942]" />
                <span>Transforming learning outcomes through talent</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-[#D9E2EC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FEF3D6] text-[#102A43] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-[#DFA22A]" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-[#627D98] leading-relaxed">
                  To deliver thorough vetting, transparent matching, and dedicated support for schools and educators alike, ensuring safer recruitment, reduced administrative burden, and sustained career growth for teaching professionals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D9E2EC] text-xs font-semibold text-[#102A43] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3D8061]" />
                <span>Safeguarding-first recruitment architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="Values that shape our practice."
            subtitle="The five commitments that govern how we interact with candidates, school heads, and partner communities."
            centered={true}
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="bg-[#F8F7F3] rounded-2xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-black text-[#2463A7] uppercase tracking-wider block mb-3 font-mono">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#2463A7] transition-colors mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#627D98] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
