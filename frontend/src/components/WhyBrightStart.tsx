import React from 'react';
import { BookOpen, ShieldCheck, Scale, Users2 } from 'lucide-react';
import { WHY_BRIGHT_START_BLOCKS } from '../data/constants';

export const WhyBrightStart: React.FC = () => {
  const icons = [
    <BookOpen key="0" className="w-5 h-5 text-[#F4B942]" />,
    <ShieldCheck key="1" className="w-5 h-5 text-[#F4B942]" />,
    <Scale key="2" className="w-5 h-5 text-[#F4B942]" />,
    <Users2 key="3" className="w-5 h-5 text-[#F4B942]" />
  ];

  return (
    <section id="why-bright-start" className="py-16 md:py-24 bg-white border-b border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
            Our Difference
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            More than filling vacancies.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#627D98] leading-relaxed">
            We focus on building relationships that strengthen schools and careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_BRIGHT_START_BLOCKS.map((block, idx) => (
            <div
              key={idx}
              className="bg-[#F8F7F3] rounded-xl p-6 sm:p-8 border border-[#D9E2EC] hover:border-[#2463A7]/50 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black font-display text-[#102A43]/30 group-hover:text-[#F4B942] transition-colors">
                    {block.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#D9E2EC] flex items-center justify-center shadow-xs">
                    {icons[idx]}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#102A43] mb-3">
                  {block.title}
                </h3>

                <p className="text-sm text-[#627D98] leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D9E2EC]/50 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#F4B942] rounded" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2463A7]">
                  Bright Start Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
