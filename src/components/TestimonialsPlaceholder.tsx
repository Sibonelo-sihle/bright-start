import React from 'react';
import { MessageSquare, Quote, Star, Sparkles } from 'lucide-react';

export const TestimonialsPlaceholder: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white border-b border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#F4B942]" />
            Community & Institutional Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            Voices from classrooms & leadership.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#627D98] leading-relaxed">
            We value genuine relationships built through ethical recruitment and sustained classroom success.
          </p>
        </div>

        {/* Transparent Placeholder Container */}
        <div className="max-w-4xl mx-auto bg-[#F8F7F3] rounded-2xl p-8 sm:p-12 border border-[#D9E2EC] text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF4F8] border border-[#D9E2EC] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <Quote className="w-7 h-7 text-[#2463A7]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3D6] text-[#102A43] font-bold text-xs uppercase tracking-wider mb-4 border border-[#F4B942]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#DFA22A]" />
            Testimonials coming soon
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#102A43] max-w-xl mx-auto">
            We are collecting verified feedback from our partner schools and placed educators.
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-[#627D98] max-w-lg mx-auto leading-relaxed">
            As an ethical recruitment agency, Bright Start only publishes authenticated, verified testimonials from school heads, trustees, and active educators.
          </p>

          {/* Skeleton representation showing how testimonials will be presented cleanly */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto opacity-70">
            <div className="bg-white rounded-xl p-4 border border-dashed border-[#D9E2EC]">
              <div className="flex items-center gap-1 text-[#F4B942] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">
                “Institutional feedback from partner school leadership will appear here once verified.”
              </p>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#627D98]">
                <span className="font-semibold text-[#102A43]">Head of School</span>
                <span>Harare, Zimbabwe</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-dashed border-[#D9E2EC]">
              <div className="flex items-center gap-1 text-[#F4B942] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">
                “Educator career journey reflections and placement reviews will appear here once verified.”
              </p>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#627D98]">
                <span className="font-semibold text-[#102A43]">Secondary Science Specialist</span>
                <span>Midlands, Zimbabwe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
