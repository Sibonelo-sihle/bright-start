import React, { useState } from 'react';
import { ArrowRight, School, UserCheck, CheckCircle2 } from 'lucide-react';
import { SCHOOL_PROCESS_STEPS, EDUCATOR_PROCESS_STEPS } from '../data/constants';
import { PageRoute } from '../types';

interface RecruitmentProcessProps {
  onNavigate: (page: PageRoute) => void;
  defaultTab?: 'schools' | 'educators';
}

export const RecruitmentProcess: React.FC<RecruitmentProcessProps> = ({
  onNavigate,
  defaultTab = 'schools',
}) => {
  const [activeTab, setActiveTab] = useState<'schools' | 'educators'>(defaultTab);

  const steps = activeTab === 'schools' ? SCHOOL_PROCESS_STEPS : EDUCATOR_PROCESS_STEPS;

  return (
    <section id="recruitment-process" className="py-16 md:py-24 bg-white border-y border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
            Methodical & Transparent
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            A thoughtful approach to every placement.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#627D98] leading-relaxed">
            Our structured multi-point workflow safeguards institutional standards while empowering educators through transparent communication.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 bg-[#EEF4F8] rounded-xl border border-[#D9E2EC] mt-8">
            <button
              onClick={() => setActiveTab('schools')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === 'schools'
                  ? 'bg-[#102A43] text-white shadow-sm'
                  : 'text-[#627D98] hover:text-[#102A43]'
              }`}
            >
              <School className="w-4 h-4 text-[#F4B942]" />
              <span>For Schools (5 Steps)</span>
            </button>
            <button
              onClick={() => setActiveTab('educators')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === 'educators'
                  ? 'bg-[#102A43] text-white shadow-sm'
                  : 'text-[#627D98] hover:text-[#102A43]'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#F4B942]" />
              <span>For Educators (6 Steps)</span>
            </button>
          </div>
        </div>

        {/* Process Steps Layout */}
        <div className="mt-12">
          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {activeTab === 'educators' && (
              <style>{`.educator-grid { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }`}</style>
            )}
            <div className={`contents ${activeTab === 'educators' ? 'educator-grid' : ''}`}>
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between bg-[#F8F7F3] rounded-xl p-5 border border-[#D9E2EC] hover:border-[#2463A7] hover:bg-white transition-all group"
                >
                  {/* Step Connector Line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 -right-2 w-4 h-0.5 bg-[#D9E2EC] z-10 group-hover:bg-[#F4B942]" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-lg bg-[#102A43] text-[#F4B942] font-black text-xs flex items-center justify-center font-display">
                        {step.number}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#D9E2EC] group-hover:text-[#3D8061] transition-colors" />
                    </div>

                    <h3 className="text-sm font-bold text-[#102A43] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#627D98] leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D9E2EC]/50 text-[11px] text-[#2463A7] font-medium leading-normal">
                    {step.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline (Vertical) */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F3] rounded-xl p-5 border border-[#D9E2EC] flex items-start gap-4"
              >
                <span className="w-9 h-9 rounded-lg bg-[#102A43] text-[#F4B942] font-black text-sm flex items-center justify-center font-display shrink-0 mt-0.5">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#102A43]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#627D98] leading-relaxed">
                    {step.summary}
                  </p>
                  <p className="mt-2 text-[11px] text-[#2463A7] font-medium pt-2 border-t border-[#D9E2EC]/60">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          {activeTab === 'schools' ? (
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button
                id="btn-process-start-hiring"
                onClick={() => onNavigate('staff-request')}
                className="px-8 py-3.5 bg-[#102A43] hover:bg-[#1E3A56] text-white font-bold text-sm rounded-lg transition-all shadow-sm flex items-center gap-2"
              >
                <span>Start Hiring</span>
                <ArrowRight className="w-4 h-4 text-[#F4B942]" />
              </button>
              <span className="text-xs text-[#627D98]">
                Confidential consultation • Bespoke shortlist within 48-72 hours
              </span>
            </div>
          ) : (
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button
                id="btn-process-join-network"
                onClick={() => onNavigate('apply')}
                className="px-8 py-3.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-sm rounded-lg transition-all shadow-sm flex items-center gap-2"
              >
                <span>Join Our Educator Network</span>
                <ArrowRight className="w-4 h-4 text-[#102A43]" />
              </button>
              <span className="text-xs text-[#627D98]">
                100% free candidate registration • Career matching & interview preparation
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
