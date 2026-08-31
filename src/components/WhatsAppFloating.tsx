import React, { useState } from 'react';
import { MessageCircle, Phone, X, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = COMPANY_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl p-4 shadow-xl border border-[#D9E2EC] max-w-xs text-left animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#D9E2EC] mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3D8061] animate-pulse" />
              <span className="text-xs font-bold text-[#102A43]">Bright Start Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close message popover"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#627D98] leading-relaxed mb-3">
            Have questions about educator registration or urgent school staffing requirements?
          </p>

          <a
            href={`https://wa.me/${cleanPhone}?text=Hello%20Bright%20Start%20Edu%20Recruitment,%20I%20would%20like%20to%20inquire%20about...`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <div className="mt-2 text-[10px] text-center text-slate-400">
            Official line: {COMPANY_INFO.phone}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Support"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/30"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};
