import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/constants';
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-[#0A1B2D] text-white border-t border-[#1E3A56] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1E3A56]">
          {/* Col 1 & 2: Brand, Tagline, & Registration Details */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo variant="footer" size="lg" showTagline={false} />
            
            <p className="text-sm italic font-medium text-[#F4B942] leading-snug">
              “{COMPANY_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Connecting qualified, vetted and passionate education professionals with schools and educational institutions that value excellence and safeguarding.
            </p>

            {/* Public-facing Contact Details */}
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                <span>{COMPANY_INFO.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                <span>{COMPANY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>

            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400">Connect:</span>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#1E3A56] hover:bg-[#2463A7] text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#1E3A56] hover:bg-[#2463A7] text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter / X"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#1E3A56] hover:bg-[#2463A7] text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: BRIGHT START */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B942] mb-4">
              Bright Start
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Us & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Our Process & Safeguarding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: FOR SCHOOLS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B942] mb-4">
              For Schools
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('for-schools')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Institutional Staffing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('staff-request')}
                  className="hover:text-white hover:underline transition-colors font-medium text-slate-100"
                >
                  Submit Staffing Request
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  School Recruitment Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-schools')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Safeguarding Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: FOR EDUCATORS & LEGAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B942] mb-4">
              For Educators
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Find Teaching Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('apply')}
                  className="hover:text-white hover:underline transition-colors font-medium text-slate-100"
                >
                  Submit CV / Registration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-educators')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Candidate Process & Support
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B942] mb-3">
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with exact registration information */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Bright Start Edu Recruitment (Pty) Ltd.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium text-slate-300">Registration No. {COMPANY_INFO.registrationNumber}</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3D8061]" />
            <span>Ethical Education Staffing across Zimbabwe & Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
