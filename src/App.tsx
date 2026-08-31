import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ForSchoolsPage } from './pages/ForSchoolsPage';
import { ForEducatorsPage } from './pages/ForEducatorsPage';
import { JobsPage } from './pages/JobsPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage, CookiesPage } from './pages/TermsPage';
import { EducatorApplicationWizard } from './components/EducatorApplicationWizard';
import { SchoolStaffRequestForm } from './components/SchoolStaffRequestForm';
import { ArrowLeft, Sparkles, School, UserCheck } from 'lucide-react';
import { AdminApp } from './pages/admin/AdminApp';

export default function App() {
  if (window.location.pathname.startsWith('/admin')) return <AdminApp />;
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | undefined>(undefined);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyForJob = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setCurrentPage('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#1F2933] font-sans antialiased selection:bg-[#F4B942]/30 selection:text-[#102A43]">
      {/* Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'for-schools' && <ForSchoolsPage onNavigate={navigateTo} />}
        {currentPage === 'for-educators' && <ForEducatorsPage onNavigate={navigateTo} />}
        {currentPage === 'jobs' && <JobsPage onNavigate={navigateTo} onApplyForJob={handleApplyForJob} />}
        {currentPage === 'process' && <ProcessPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
        {currentPage === 'cookies' && <CookiesPage />}

        {/* Dedicated Educator Registration Page */}
        {currentPage === 'apply' && (
          <div className="py-12 md:py-16 bg-[#F8F7F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2463A7] hover:text-[#102A43] transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EducatorApplicationWizard
                initialJobTitle={selectedJobTitle}
                onSuccessNavigate={() => navigateTo('home')}
              />
            </div>
          </div>
        )}

        {/* Dedicated School Staff Request Page */}
        {currentPage === 'staff-request' && (
          <div className="py-12 md:py-16 bg-[#F8F7F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2463A7] hover:text-[#102A43] transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SchoolStaffRequestForm
                onSuccessNavigate={() => navigateTo('home')}
              />
            </div>
          </div>
        )}
      </main>

      {/* Floating WhatsApp Support Button */}
      <WhatsAppFloating />

      {/* Official Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
