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
  const routeToPage = (path: string): PageRoute => {
    if (path.startsWith('/jobs')) return 'jobs';
    const routes: Record<string, PageRoute> = {
      '/': 'home', '/about': 'about', '/schools': 'for-schools', '/educators': 'for-educators',
      '/process': 'process', '/contact': 'contact', '/apply': 'apply', '/staff-request': 'staff-request',
      '/privacy': 'privacy', '/terms': 'terms', '/cookies': 'cookies',
    };
    return routes[path] || 'home';
  };
  const pageToRoute: Record<PageRoute, string> = {
    home: '/', about: '/about', 'for-schools': '/schools', 'for-educators': '/educators', jobs: '/jobs',
    process: '/process', contact: '/contact', apply: '/apply', 'staff-request': '/staff-request',
    privacy: '/privacy', terms: '/terms', cookies: '/cookies',
  };
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => routeToPage(window.location.pathname));
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | undefined>(undefined);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    const nextPath = pageToRoute[page];
    if (window.location.pathname !== nextPath) window.history.pushState({}, '', nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(routeToPage(window.location.pathname));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const seo: Record<PageRoute, [string, string]> = {
      home: ['Bright Start Edu Recruitment | Education Recruitment', 'Education-focused recruitment support for schools and educators across Zimbabwe and the region.'],
      about: ['About Bright Start Edu Recruitment', 'Learn about Bright Start’s education recruitment focus, values, and safeguarding-conscious approach.'],
      'for-schools': ['School Staffing Support | Bright Start', 'Explore education staffing support designed for schools and learning institutions.'],
      'for-educators': ['For Educators | Bright Start', 'Explore Bright Start’s educator career support and prepare your professional profile.'],
      jobs: ['Education Jobs | Bright Start', 'Browse clearly labelled sample education vacancy profiles and preview future job-search functionality.'],
      process: ['Recruitment Process | Bright Start', 'Understand Bright Start’s proposed school and educator recruitment process.'],
      contact: ['Contact Bright Start Edu Recruitment', 'Contact Bright Start Edu Recruitment using the official email address or enquiry preview.'],
      apply: ['Educator Application Preview | Bright Start', 'Prepare and validate an educator application profile using the seven-step preview.'],
      'staff-request': ['School Staffing Request Preview | Bright Start', 'Prepare and validate a school staffing request before online delivery goes live.'],
      privacy: ['Privacy Policy | Bright Start', 'Read the Bright Start Edu Recruitment privacy policy.'],
      terms: ['Terms and Conditions | Bright Start', 'Read the Bright Start Edu Recruitment terms and conditions.'],
      cookies: ['Cookie Policy | Bright Start', 'Read the Bright Start Edu Recruitment cookie policy.'],
    };
    const [title, description] = seo[currentPage];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [currentPage]);

  const handleApplyForJob = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setCurrentPage('apply');
    window.history.pushState({}, '', '/apply');
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
