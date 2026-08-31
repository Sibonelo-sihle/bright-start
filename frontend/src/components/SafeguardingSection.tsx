import React from 'react';
import { ShieldCheck, FileCheck, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { SAFEGUARDING_PILLARS, AUTHENTIC_IMAGES } from '../data/constants';

export const SafeguardingSection: React.FC = () => {
  return (
    <section id="safeguarding" className="py-16 md:py-24 bg-[#102A43] text-white relative overflow-hidden">
      {/* Subtle geometric background motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2463A7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4B942]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Safeguarding Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/30 text-[#F4B942] border border-[#F4B942]/30 mb-4">
              <ShieldCheck className="w-4 h-4 text-[#F4B942]" />
              Commitment to Child Safety
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Putting safer recruitment first.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Recruitment in education carries a responsibility beyond qualifications and experience. Bright Start is committed to responsible screening, professional verification and safeguarding-conscious recruitment practices.
            </p>

            <div className="mt-8 space-y-5">
              {SAFEGUARDING_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-[#1E3A56]/60 rounded-xl p-5 border border-[#2463A7]/40 flex items-start gap-4 hover:border-[#F4B942]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#102A43] border border-[#2463A7]/60 flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#F4B942]" />}
                    {idx === 1 && <FileCheck className="w-5 h-5 text-[#F4B942]" />}
                    {idx === 2 && <Lock className="w-5 h-5 text-[#F4B942]" />}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Verification Card & Safe Learning Environment */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E3A56] rounded-2xl p-6 sm:p-8 border border-[#2463A7]/60 shadow-xl relative">
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-4/3 border border-[#2463A7]/40">
                <img
                  src={AUTHENTIC_IMAGES.safeguarding}
                  alt="Modern and secure learning environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold">Child-Centered Vetting Standard</span>
                  <span className="px-2 py-0.5 rounded bg-[#3D8061] text-white text-[10px] font-bold">
                    Active Protocol
                  </span>
                </div>
              </div>

              <h4 className="text-sm font-bold text-[#F4B942] uppercase tracking-wider mb-3">
                Our Verification Blueprint
              </h4>
              
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3D8061] shrink-0" />
                  <span>Face-to-face / live video identity confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3D8061] shrink-0" />
                  <span>Original degree & teaching qualification inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3D8061] shrink-0" />
                  <span>Past employer references directly verified via phone & email</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3D8061] shrink-0" />
                  <span>Detailed employment history gap reconciliation</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-[#2463A7]/40 flex items-start gap-2 text-[11px] text-slate-400">
                <AlertCircle className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                <span>
                  Our process is designed to support safer school recruitment environments across Zimbabwe and the African continent.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
