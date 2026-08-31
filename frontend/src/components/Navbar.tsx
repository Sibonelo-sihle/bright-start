import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageRoute } from '../types';
import { Menu, X, School, UserCheck, PhoneCall, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'for-schools', label: 'For Schools' },
    { id: 'for-educators', label: 'For Educators' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#D9E2EC] py-2.5'
          : 'bg-white border-b border-[#D9E2EC]/70 py-4'
      }`}
    >
      {/* Top micro-bar for emergency / quick contact on desktop */}
      <div className="hidden xl:block bg-[#102A43] text-white py-1 px-4 text-[11px] font-medium transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#F4B942] font-semibold">“{COMPANY_INFO.tagline}”</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Zimbabwe & Regional Education Recruitment</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-300">Reg No: {COMPANY_INFO.registrationNumber}</span>
            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="text-[#F4B942] hover:underline"
            >
              {COMPANY_INFO.contactEmail}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2463A7]"
            aria-label="Bright Start Edu Recruitment Home"
          >
            <BrandLogo size={isScrolled ? 'sm' : 'md'} showTagline={false} />
          </button>

          {/* Desktop Center/Right Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors relative ${
                    isActive
                      ? 'text-[#102A43] font-bold bg-[#EEF4F8]'
                      : 'text-[#627D98] hover:text-[#102A43] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2463A7] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Dual CTAs: [Find Staff] & [Apply for Jobs] */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              id="nav-btn-apply-jobs"
              onClick={() => handleLinkClick('apply')}
              className="px-3.5 py-2 text-xs font-bold text-[#102A43] bg-[#FEF3D6] hover:bg-[#FDE68A] rounded-lg border border-[#F4B942]/50 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#DFA22A]" />
              <span>Apply for Jobs</span>
            </button>

            <button
              id="nav-btn-find-staff"
              onClick={() => handleLinkClick('staff-request')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#102A43] hover:bg-[#1E3A56] rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
            >
              <School className="w-3.5 h-3.5 text-[#F4B942]" />
              <span>Find Staff</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('staff-request')}
              className="px-2.5 py-1.5 text-[11px] font-bold text-white bg-[#102A43] rounded-md sm:inline-flex hidden"
            >
              Find Staff
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#EEF4F8] text-[#102A43] hover:bg-[#D9E2EC] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-[#D9E2EC] shadow-xl p-5 animate-in slide-in-from-top-2 duration-200 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1 pb-4 border-b border-[#D9E2EC]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#EEF4F8] text-[#102A43] font-bold border-l-4 border-[#2463A7]'
                      : 'text-[#627D98] hover:bg-slate-50 hover:text-[#102A43]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D9E2EC]" />
                </button>
              );
            })}
          </div>

          {/* Mobile Dual Action Buttons */}
          <div className="pt-4 space-y-2.5">
            <button
              onClick={() => handleLinkClick('staff-request')}
              className="w-full py-3 bg-[#102A43] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <School className="w-4 h-4 text-[#F4B942]" />
              <span>Find Staff (For Schools)</span>
            </button>

            <button
              onClick={() => handleLinkClick('apply')}
              className="w-full py-3 bg-[#F4B942] text-[#102A43] font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <UserCheck className="w-4 h-4" />
              <span>Apply for Jobs / Submit CV</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 text-xs font-semibold text-[#627D98] hover:text-[#102A43] flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#2463A7]" />
              <span>Need help? Contact our recruitment team</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
