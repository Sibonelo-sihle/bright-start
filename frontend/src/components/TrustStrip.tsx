import React from 'react';
import { GraduationCap, CheckCircle2, ShieldCheck, Scale, HeartHandshake } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/constants';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#F4B942]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#F4B942]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#F4B942]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#F4B942]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#F4B942]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#F4B942]" />;
    }
  };

  return (
    <div id="trust-strip" className="w-full bg-[#102A43] text-white border-y border-[#1E3A56] py-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1E3A56]/60">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-2 sm:px-4 ${idx > 0 ? 'pt-3 sm:pt-0' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#2463A7]/30 border border-[#2463A7]/50 flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-400 font-normal line-clamp-1">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
