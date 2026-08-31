import React, { useState } from 'react';
import { School, CheckCircle2, Send, ShieldCheck, HelpCircle } from 'lucide-react';
import { EmployerStaffingRequestData } from '../types';
import { COMPANY_INFO } from '../data/constants';

interface StaffRequestProps {
  onSuccessNavigate?: () => void;
}

const initialRequestData: EmployerStaffingRequestData = {
  schoolName: '',
  contactPerson: '',
  jobTitle: 'Principal / Head of Academics',
  email: '',
  phone: '',
  location: 'Harare, Zimbabwe',
  roleRequired: 'Senior Secondary Teacher',
  subjectDepartment: 'Mathematics & Science',
  educationLevel: 'Secondary / High School',
  numberOfPositions: 1,
  preferredStartDate: 'Next Academic Term',
  employmentType: 'Permanent Full-Time',
  roleDescription: '',
  minimumRequirements: 'Bachelor of Education / relevant degree with teaching qualification and minimum 2 years experience.',
  additionalInformation: '',
  urgencyLevel: 'Standard',
};

export const SchoolStaffRequestForm: React.FC<StaffRequestProps> = ({ onSuccessNavigate }) => {
  const [formData, setFormData] = useState<EmployerStaffingRequestData>(initialRequestData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestRef, setRequestRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof EmployerStaffingRequestData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.schoolName.trim()) errs.schoolName = 'School / Institution name is required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid official email address is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.roleRequired.trim()) errs.roleRequired = 'Role required is required';
    if (!formData.roleDescription.trim()) errs.roleDescription = 'Please provide a brief description of the role';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `BSR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setRequestRef(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-[#D9E2EC] shadow-md text-center animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-[#EBF4F0] border border-[#3D8061]/30 text-[#3D8061] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full bg-[#FEF3D6] text-[#102A43] text-xs font-bold uppercase tracking-wider border border-[#F4B942]/40">
          Staffing Request Received
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-4 mb-2">
          Thank you for choosing Bright Start.
        </h2>

        <p className="text-sm text-[#627D98] max-w-lg mx-auto leading-relaxed">
          A Bright Start recruitment consultant will review your staffing requirements and contact you within 24–48 hours.
        </p>

        {/* Reference badge */}
        <div className="my-6 p-4 bg-[#F8F7F3] rounded-xl border border-[#D9E2EC] max-w-md mx-auto text-left flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#627D98] block">Request Reference ID</span>
            <span className="text-base font-black text-[#102A43] font-mono">{requestRef}</span>
          </div>
          <span className="text-xs px-2.5 py-1 bg-[#2463A7] text-white font-bold rounded-md">
            Candidate Matching Initiated
          </span>
        </div>

        <div className="bg-[#EEF4F8] rounded-xl p-5 border border-[#D9E2EC] text-left text-xs text-[#1F2933] space-y-2 mb-8">
          <div className="font-bold text-[#102A43] text-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#3D8061]" />
            What happens next?
          </div>
          <p>• Our education recruitment specialist will verify the timetable, syllabus level, and cultural profile of <strong className="text-[#102A43]">{formData.schoolName}</strong>.</p>
          <p>• We will prepare a shortlisted dossier of pre-screened, verified candidates.</p>
          <p>• We coordinate candidate interview schedules and demonstration lessons at your convenience.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData(initialRequestData);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-white border border-[#D9E2EC] text-[#102A43] font-bold text-xs rounded-lg hover:bg-slate-50 transition-colors"
          >
            Submit Another Staff Request
          </button>
          {onSuccessNavigate && (
            <button
              onClick={onSuccessNavigate}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#102A43] text-white font-bold text-xs rounded-lg hover:bg-[#1E3A56] transition-colors"
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#D9E2EC] shadow-sm overflow-hidden">
      {/* Form Header */}
      <div className="bg-[#102A43] text-white p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-3">
          <School className="w-3.5 h-3.5" />
          Employer & School Portal
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
          Tell us who your school needs.
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          From classroom educators to executive school leadership and support professionals, we connect your institution with vetted candidates matched to your ethos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
        {/* Section 1: School & Contact Details */}
        <div>
          <div className="border-b border-[#D9E2EC] pb-3 mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#102A43]">
              1. Institution & Contact Person
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                School / Institution Name <span className="text-[#B91C1C]">*</span>
              </label>
              <input
                type="text"
                value={formData.schoolName}
                onChange={(e) => updateField('schoolName', e.target.value)}
                placeholder="e.g. Heritage Senior School"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
              {errors.schoolName && <p className="text-xs text-[#B91C1C] mt-1">{errors.schoolName}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Contact Person Name <span className="text-[#B91C1C]">*</span>
              </label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => updateField('contactPerson', e.target.value)}
                placeholder="e.g. Dr. Farai Mutasa"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
              {errors.contactPerson && <p className="text-xs text-[#B91C1C] mt-1">{errors.contactPerson}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Official Job Title
              </label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => updateField('jobTitle', e.target.value)}
                placeholder="e.g. Principal / HR Director / Board Member"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Official Email Address <span className="text-[#B91C1C]">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="e.g. headmaster@school.co.zw"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
              {errors.email && <p className="text-xs text-[#B91C1C] mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Contact Phone / WhatsApp <span className="text-[#B91C1C]">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="e.g. +263 (0) 242 123456"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
              {errors.phone && <p className="text-xs text-[#B91C1C] mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Location / Campus City <span className="text-[#B91C1C]">*</span>
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateField('location', e.target.value)}
                placeholder="e.g. Harare / Bulawayo / Mutare / Regional"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Role Specifications */}
        <div>
          <div className="border-b border-[#D9E2EC] pb-3 mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#102A43]">
              2. Staffing Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Role Required <span className="text-[#B91C1C]">*</span>
              </label>
              <input
                type="text"
                value={formData.roleRequired}
                onChange={(e) => updateField('roleRequired', e.target.value)}
                placeholder="e.g. Senior Mathematics Teacher"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
              {errors.roleRequired && <p className="text-xs text-[#B91C1C] mt-1">{errors.roleRequired}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Subject / Department
              </label>
              <input
                type="text"
                value={formData.subjectDepartment}
                onChange={(e) => updateField('subjectDepartment', e.target.value)}
                placeholder="e.g. STEM / Humanities / Commercials"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Education Level
              </label>
              <select
                value={formData.educationLevel}
                onChange={(e) => updateField('educationLevel', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              >
                <option value="Early Childhood (ECD)">Early Childhood (ECD)</option>
                <option value="Primary (Grades 1-7)">Primary (Grades 1-7)</option>
                <option value="Secondary (O-Level)">Secondary (O-Level)</option>
                <option value="High School (A-Level / Cambridge)">High School (A-Level / Cambridge)</option>
                <option value="Executive School Leadership">Executive School Leadership</option>
                <option value="All Levels / Support Staff">All Levels / Support Staff</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Number of Positions
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={formData.numberOfPositions}
                onChange={(e) => updateField('numberOfPositions', parseInt(e.target.value) || 1)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Preferred Start Date
              </label>
              <select
                value={formData.preferredStartDate}
                onChange={(e) => updateField('preferredStartDate', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              >
                <option value="Immediate / Emergency Cover">Immediate / Emergency Cover</option>
                <option value="Next Academic Term">Next Academic Term</option>
                <option value="Next Academic Year (January)">Next Academic Year (January)</option>
                <option value="Flexible / Pipeline Building">Flexible / Pipeline Building</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Employment Type
              </label>
              <select
                value={formData.employmentType}
                onChange={(e) => updateField('employmentType', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              >
                <option value="Permanent Full-Time">Permanent Full-Time</option>
                <option value="Fixed-Term Contract">Fixed-Term Contract</option>
                <option value="Part-Time / Visiting">Part-Time / Visiting</option>
                <option value="Temporary Relief Cover">Temporary Relief Cover</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Role Description & Minimum Requirements */}
        <div>
          <div className="border-b border-[#D9E2EC] pb-3 mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#102A43]">
              3. Role Description & Candidate Requirements
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Role Description & Key Deliverables <span className="text-[#B91C1C]">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.roleDescription}
                onChange={(e) => updateField('roleDescription', e.target.value)}
                placeholder="Outline syllabus expectations, exam levels, extra-curricular requirements, or boarding responsibilities..."
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
              {errors.roleDescription && <p className="text-xs text-[#B91C1C] mt-1">{errors.roleDescription}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Minimum Requirements (Degrees, Experience, Curriculum)
              </label>
              <textarea
                rows={2}
                value={formData.minimumRequirements}
                onChange={(e) => updateField('minimumRequirements', e.target.value)}
                placeholder="e.g. Degree in Mathematics, 3+ years Cambridge IGCSE experience, strong boarding leadership..."
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                Additional Information / Specific Cultural Notes
              </label>
              <textarea
                rows={2}
                value={formData.additionalInformation}
                onChange={(e) => updateField('additionalInformation', e.target.value)}
                placeholder="Any accommodation provisions, relocation packages, or interview timetable constraints..."
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
              />
            </div>
          </div>
        </div>

        {/* Safeguarding commitment assurance */}
        <div className="p-4 bg-[#EEF4F8] rounded-xl border border-[#D9E2EC] flex items-start gap-3 text-xs text-[#1F2933]">
          <ShieldCheck className="w-5 h-5 text-[#3D8061] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#102A43] block">Bright Start Safeguarding Assurance:</span>
            <span>Every candidate presented to your school undergoes authenticated credential checks, reference authentication, and safeguarding vetting prior to submission.</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex items-center justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            id="btn-submit-staffing-request"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#102A43] hover:bg-[#1E3A56] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing Staff Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#F4B942]" />
                <span>Submit Staffing Request</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
