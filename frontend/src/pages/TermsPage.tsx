import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F8F7F3] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#D9E2EC] shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-4">
            <FileText className="w-3.5 h-3.5 text-[#F4B942]" />
            Terms of Service
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#627D98] mt-1 mb-8">
            Effective Date: January 2026 • Bright Start Edu Recruitment (Pty) Ltd
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-[#1F2933] leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing this website, submitting an educator application, or submitting a school staffing request, you agree to be bound by these Terms and Conditions and all applicable statutory labor laws.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">2. Candidate Representation and Zero Fee Policy</h2>
              <p>
                Registration and placement services provided to educators, teachers, and support candidates are 100% free of charge. Bright Start strictly does not levy recruitment fees or deduct placement commissions from educator remuneration.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">3. Accuracy of Candidate Submissions</h2>
              <p>
                Candidates warrant that all information provided—including academic degrees, pedagogical diplomas, teaching experience, and references—is authentic, accurate, and not misleading. Providing falsified qualifications will lead to immediate disqualification and reporting where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">4. Institutional Placement & Terms for Schools</h2>
              <p>
                Educational institutions engaging Bright Start enter into tailored terms governing shortlist presentation, interview facilitation, placement support, and fee schedules prior to candidate introduction.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">5. Safeguarding Verification Notice</h2>
              <p>
                While Bright Start conducts rigorous candidate screening, credential checks, and reference interviews, final hiring decisions and employment contracts remain the prerogative and responsibility of the hiring school or board of trustees.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">6. Intellectual Property</h2>
              <p>
                All brand marks, logos, website copy, and domain content are the exclusive intellectual property of Bright Start Edu Recruitment (Pty) Ltd. Unauthorized reproduction is strictly prohibited.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CookiesPage: React.FC = () => {
  return (
    <div className="bg-[#F8F7F3] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#D9E2EC] shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F4B942]" />
            Cookies & Local Storage
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            Cookie Policy
          </h1>
          <p className="text-xs text-[#627D98] mt-1 mb-8">
            Last Updated: January 2026
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-[#1F2933] leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">1. Use of Cookies and Storage</h2>
              <p>
                Our website uses functional cookies and browser local storage strictly to improve your browsing experience—such as saving multi-step educator application draft progress so accidental page refreshes do not erase your work.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-5 space-y-1 text-[#627D98]">
                <li><strong>Essential / Functional Cookies:</strong> Necessary to navigate the portal, save application forms, and maintain session stability.</li>
                <li><strong>Analytics:</strong> Anonymous aggregate metrics to understand vacancy demand and optimize website loading speeds.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">3. Managing Cookie Preferences</h2>
              <p>
                You can configure your browser to reject cookies or notify you when cookies are set. Note that disabling essential storage may impact form draft preservation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
