import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#F8F7F3] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#D9E2EC] shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-4">
            <Lock className="w-3.5 h-3.5 text-[#F4B942]" />
            Data Protection & Privacy
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#627D98] mt-1 mb-8">
            Last Updated: January 2026 • Bright Start Edu Recruitment (Pty) Ltd (Reg. No. {COMPANY_INFO.registrationNumber})
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-[#1F2933] leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">1. Overview and Commitment</h2>
              <p>
                Bright Start Edu Recruitment (Pty) Ltd (“Bright Start”, “we”, “our”, or “us”) is dedicated to protecting the privacy, accuracy, and confidentiality of personal information entrusted to us by educators, candidates, school leadership, and visitors. This policy outlines how we collect, store, handle, and safeguard your data in compliance with relevant data privacy principles and employment laws.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">2. Information We Collect</h2>
              <p className="mb-2">We collect information strictly necessary for the purpose of educational recruitment and matching:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#627D98]">
                <li><strong>Candidate Information:</strong> Name, contact email, phone number, physical location, academic qualifications, teaching certificates, curriculum experience, employment history, and references.</li>
                <li><strong>School / Employer Information:</strong> Institutional name, designated head or HR contact, official email, telephone, campus location, and staffing vacancy details.</li>
                <li><strong>Voluntary Documents:</strong> Resumes/CVs, accredited degree certificates, and letters of recommendation provided voluntarily.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">3. Limitation on Sensitive Personal Data</h2>
              <p>
                In strict adherence to safe data handling practices, Bright Start does not publicly display or solicit unnecessary sensitive identifiers (such as bank details, tax IDs, or national identity card copies) during initial enquiry stages. Sensitive checks are only conducted with explicit consent during final pre-placement safeguarding vetting.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">4. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1 text-[#627D98]">
                <li>To evaluate candidate suitability for educational appointments.</li>
                <li>To connect pre-screened educators with partner schools matching their criteria.</li>
                <li>To perform authenticated qualification and reference verifications.</li>
                <li>To communicate recruitment updates, interview invitations, and advisory notices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">5. Confidentiality & Third-Party Disclosure</h2>
              <p>
                We never sell, rent, or trade candidate or institutional data to commercial third-party marketing companies. Candidate profiles are shared with prospective school employers only after candidate review and approval.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">6. Data Retention and Candidate Rights</h2>
              <p>
                You retain the right to request access to your stored profile, ask for corrections to inaccurate credentials, or request the complete deletion of your candidate registration from our database at any time by contacting us at <strong className="text-[#102A43]">{COMPANY_INFO.contactEmail}</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#102A43] mb-2">7. Contact the Information Officer</h2>
              <p>
                For any privacy questions or requests regarding your data, please email: <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-[#2463A7] underline">{COMPANY_INFO.contactEmail}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
