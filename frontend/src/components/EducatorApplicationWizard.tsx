import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2, 
  Trash2, 
  Plus, 
  User, 
  Briefcase, 
  GraduationCap, 
  History, 
  FileUp, 
  Settings, 
  FileCheck
} from 'lucide-react';
import { EducatorApplicationData } from '../types';
import { COMPANY_INFO } from '../data/constants';
import { submitEducatorApplication } from '../services/publicSubmissions';

const STORAGE_KEY = 'brightstart_educator_app_draft';

const initialFormData: EducatorApplicationData = {
  firstName: '',
  surname: '',
  email: '',
  phone: '',
  currentLocation: '',
  city: '',
  country: 'Zimbabwe',
  primaryRole: 'Primary School Teacher',
  yearsOfExperience: '3-5 years',
  educationLevel: 'Primary (Grades 1-7)',
  subjects: '',
  currentEmploymentStatus: 'Employed, looking for next step',
  highestQualification: "Bachelor's Degree",
  institution: '',
  graduationYear: '',
  teachingQualification: 'Diploma in Education / Grad CE',
  professionalRegistration: '',
  currentEmployer: '',
  position: '',
  startDate: '',
  endDate: '',
  responsibilities: '',
  previousExperience: '',
  cvFileName: '',
  cvFileSize: '',
  qualificationsFileName: '',
  certificatesFileName: '',
  preferredRoles: [],
  preferredLocations: [],
  availableStartDate: 'Next academic term',
  employmentType: ['Permanent', 'Full-Time'],
  salaryExpectation: '',
  privacyConsent: false,
  communicationConsent: false,
  accuracyDeclaration: false,
};

interface WizardProps {
  selectedJob?: {id:string;title:string;slug?:string};
  onSuccessNavigate?: () => void;
}

export const EducatorApplicationWizard: React.FC<WizardProps> = ({ selectedJob, onSuccessNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<EducatorApplicationData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...JSON.parse(saved), cvFileName:'', cvFileSize:'', qualificationsFileName:'', certificatesFileName:'' };
      }
    } catch {
      // ignore
    }
    return initialFormData;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError,setSubmitError]=useState('');
  const [cvFile,setCvFile]=useState<File|null>(null);
  const [qualificationFile,setQualificationFile]=useState<File|null>(null);
  const [certificateFile,setCertificateFile]=useState<File|null>(null);

  // Auto-save form changes locally
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const updateField = (field: keyof EducatorApplicationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleArrayItem = (field: 'preferredRoles' | 'preferredLocations' | 'employmentType', item: string) => {
    setFormData(prev => {
      const list = prev[field] || [];
      const updated = list.includes(item)
        ? list.filter(i => i !== item)
        : [...list, item];
      return { ...prev, [field]: updated };
    });
  };

  const stepsList = [
    { num: 1, label: 'Personal', icon: User },
    { num: 2, label: 'Profile', icon: Briefcase },
    { num: 3, label: 'Qualifications', icon: GraduationCap },
    { num: 4, label: 'Experience', icon: History },
    { num: 5, label: 'Documents', icon: FileUp },
    { num: 6, label: 'Preferences', icon: Settings },
    { num: 7, label: 'Consent', icon: FileCheck },
  ];

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) errs.firstName = 'First name is required';
      if (!formData.surname.trim()) errs.surname = 'Surname is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = 'Valid email address is required';
      if (formData.phone.replace(/\D/g, '').length < 7) errs.phone = 'Valid phone contact number is required';
      if (!formData.currentLocation.trim()) errs.currentLocation = 'Current location is required';
    }

    if (step === 2) {
      if (!formData.primaryRole.trim()) errs.primaryRole = 'Primary teaching/education role is required';
      if (!formData.yearsOfExperience.trim()) errs.yearsOfExperience = 'Years of experience is required';
    }

    if (step === 3) {
      if (!formData.highestQualification.trim()) errs.highestQualification = 'Highest academic qualification is required';
      if (!formData.institution.trim()) errs.institution = 'Institution / University is required';
      if (!formData.teachingQualification.trim()) errs.teachingQualification = 'Teaching qualification / certification is required';
    }

    if (step === 4) {
      if (!formData.currentEmployer.trim()) errs.currentEmployer = 'Current or most recent employer is required';
      if (!formData.position.trim()) errs.position = 'Job position is required';
      if (!formData.responsibilities.trim()) errs.responsibilities = 'Key responsibilities overview is required';
    }

    if (step === 5) {
      if (!cvFile) {
        errs.cvFileName = 'Please attach or select your CV (PDF or DOCX)';
      }
    }

    if (step === 6) {
      if (!formData.availableStartDate) errs.availableStartDate = 'Expected start availability is required';
      if (formData.preferredRoles.length === 0) errs.preferredRoles = 'Select at least one preferred role';
    }

    if (step === 7) {
      if (!formData.privacyConsent) errs.privacyConsent = 'You must accept the privacy and candidate data policy';
      if (!formData.accuracyDeclaration) errs.accuracyDeclaration = 'You must confirm the truthfulness of your submissions';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 7));
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(7)) return;

    if(!cvFile)return;
    setSubmitError('');setIsSubmitting(true);
    try {
      await submitEducatorApplication(formData,{cv:cvFile,qualification:qualificationFile||undefined,certificate:certificateFile||undefined},selectedJob?.id);
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    } catch(error){setIsSubmitting(false);setSubmitError(error instanceof Error?error.message:'Your application could not be submitted. Please try again.');}
  };

  const handleFileDropMock = (field: 'cvFileName' | 'qualificationsFileName' | 'certificatesFileName', fileName: string, size: string) => {
    updateField(field, fileName);
    if (field === 'cvFileName') {
      updateField('cvFileSize', size);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-[#D9E2EC] shadow-md text-center animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-[#EBF4F0] border border-[#3D8061]/30 text-[#3D8061] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full bg-[#FEF3D6] text-[#102A43] text-xs font-bold uppercase tracking-wider border border-[#F4B942]/40">
          Application Received
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-4 mb-2">
          Thank you for applying
        </h2>

        <p className="text-sm text-[#627D98] max-w-lg mx-auto leading-relaxed">
          Thank you, <strong className="text-[#102A43]">{formData.firstName} {formData.surname}</strong>. Your profile and documents have been securely submitted for review.
        </p>

        <p className="my-6 rounded-xl border border-[#D9E2EC] bg-[#F8F7F3] p-4 text-sm font-semibold text-[#102A43]">Our recruitment team will contact you if your profile matches a suitable opportunity.</p>

        <div className="bg-[#EEF4F8] rounded-xl p-5 border border-[#D9E2EC] text-left text-xs text-[#1F2933] space-y-2 mb-8">
          <div className="font-bold text-[#102A43] text-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#3D8061]" />
            What happens next:
          </div>
          <p>Your profile will be reviewed against your selected role and preferences.</p>
          <p>Your documents remain private and are available only to authorised recruitment staff.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData(initialFormData);
              setCvFile(null); setQualificationFile(null); setCertificateFile(null); setSubmitError('');
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-white border border-[#D9E2EC] text-[#102A43] font-bold text-xs rounded-lg hover:bg-slate-50 transition-colors"
          >
            Submit Another Registration
          </button>
          {onSuccessNavigate && (
            <button
              onClick={onSuccessNavigate}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#102A43] text-white font-bold text-xs rounded-lg hover:bg-[#1E3A56] transition-colors"
            >
              Return to Homepage
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#D9E2EC] shadow-sm overflow-hidden">
      {/* Top Banner with Progress Track */}
      <div className="bg-[#102A43] text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Candidate Portal
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Educator Registration & CV Submission
            </h1>
            {selectedJob && (
              <p className="text-xs text-[#F4B942] font-semibold mt-1">
                Applying for: {selectedJob.title}
              </p>
            )}
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-300">Step</span>
            <span className="text-2xl font-black text-[#F4B942] ml-1.5 font-display">{currentStep}</span>
            <span className="text-sm text-slate-400">/7</span>
          </div>
        </div>

        {/* 7-Step Progress Track */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {stepsList.map((st) => {
            const isCompleted = currentStep > st.num;
            const isCurrent = currentStep === st.num;
            return (
              <button
                key={st.num}
                type="button"
                onClick={() => {
                  if (st.num < currentStep || validateStep(currentStep)) {
                    setCurrentStep(st.num);
                  }
                }}
                className={`group flex flex-col items-center text-center transition-all ${
                  isCurrent ? 'opacity-100' : isCompleted ? 'opacity-90' : 'opacity-40'
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all mb-1 ${
                    isCurrent
                      ? 'bg-[#F4B942] text-[#102A43] ring-2 ring-white/50'
                      : isCompleted
                      ? 'bg-[#3D8061] text-white'
                      : 'bg-[#1E3A56] text-slate-300'
                  }`}
                >
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : st.num}
                </div>
                <span className="text-[10px] hidden md:block font-medium truncate max-w-full text-slate-200">
                  {st.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Wizard Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
        {submitError&&<p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{submitError}</p>}
        {/* STEP 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 1 — Personal & Contact Information
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Provide your basic contact details so our recruitment consultants can get in touch regarding suitable placements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="educator-first-name" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  First Name <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  id="educator-first-name" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? 'educator-first-name-error' : undefined}
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  placeholder="e.g. Tendai"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.firstName && <p id="educator-first-name-error" className="text-xs text-[#B91C1C] mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="educator-surname" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Surname <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  id="educator-surname" aria-invalid={!!errors.surname} aria-describedby={errors.surname ? 'educator-surname-error' : undefined}
                  type="text"
                  value={formData.surname}
                  onChange={(e) => updateField('surname', e.target.value)}
                  placeholder="e.g. Moyo"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.surname && <p id="educator-surname-error" className="text-xs text-[#B91C1C] mt-1">{errors.surname}</p>}
              </div>

              <div>
                <label htmlFor="educator-email" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Email Address <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  id="educator-email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'educator-email-error' : undefined}
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="e.g. tendai.moyo@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.email && <p id="educator-email-error" className="text-xs text-[#B91C1C] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="educator-phone" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Phone / WhatsApp Contact <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  id="educator-phone" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'educator-phone-error' : undefined}
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="e.g. +263 77 123 4567"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.phone && <p id="educator-phone-error" className="text-xs text-[#B91C1C] mt-1">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="educator-location" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Current Location / City <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  id="educator-location" aria-invalid={!!errors.currentLocation} aria-describedby={errors.currentLocation ? 'educator-location-error' : undefined}
                  type="text"
                  value={formData.currentLocation}
                  onChange={(e) => updateField('currentLocation', e.target.value)}
                  placeholder="e.g. Harare, Zimbabwe / Bulawayo / Regional"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.currentLocation && <p id="educator-location-error" className="text-xs text-[#B91C1C] mt-1">{errors.currentLocation}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Professional Profile */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 2 — Professional Profile
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Tell us about your core teaching specialisation, curriculum experience, and seniority.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="educator-primary-role" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Primary Role Category <span className="text-[#B91C1C]">*</span>
                </label>
                <select id="educator-primary-role" aria-invalid={!!errors.primaryRole}
                  value={formData.primaryRole}
                  onChange={(e) => updateField('primaryRole', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                >
                  <option value="Classroom Teacher">Classroom Teacher</option>
                  <option value="Primary School Teacher">Primary School Teacher</option>
                  <option value="Secondary School Teacher">Secondary School Teacher</option>
                  <option value="Early Childhood Educator">Early Childhood Educator</option>
                  <option value="Subject Specialist (STEM / Arts)">Subject Specialist (STEM / Arts)</option>
                  <option value="Teaching Assistant">Teaching Assistant</option>
                  <option value="Headmaster / Deputy Head">Headmaster / Deputy Head</option>
                  <option value="Head of Department (HOD)">Head of Department (HOD)</option>
                  <option value="School Manager / Administrator">School Manager / Administrator</option>
                  <option value="Learning Support / SEN">Learning Support / SEN</option>
                  <option value="Other Education Professional">Other Education Professional</option>
                </select>
                {errors.primaryRole && <p className="text-xs text-[#B91C1C] mt-1">{errors.primaryRole}</p>}
              </div>

              <div>
                <label htmlFor="educator-years-experience" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Years of Teaching / Experience <span className="text-[#B91C1C]">*</span>
                </label>
                <select id="educator-years-experience"
                  value={formData.yearsOfExperience}
                  onChange={(e) => updateField('yearsOfExperience', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                >
                  <option value="Early Career / Newly Qualified (0-1 year)">Early Career / Newly Qualified (0-1 year)</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="6-10 years">6-10 years</option>
                  <option value="10+ years senior experience">10+ years senior experience</option>
                </select>
              </div>

              <div>
                <label htmlFor="educator-level-focus" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Education Level Focus
                </label>
                <select id="educator-level-focus"
                  value={formData.educationLevel}
                  onChange={(e) => updateField('educationLevel', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                >
                  <option value="Early Childhood (ECD)">Early Childhood (ECD)</option>
                  <option value="Primary (Grades 1-7)">Primary (Grades 1-7)</option>
                  <option value="Secondary (Forms 1-4 / O-Level)">Secondary (Forms 1-4 / O-Level)</option>
                  <option value="High School (Forms 5-6 / A-Level)">High School (Forms 5-6 / A-Level)</option>
                  <option value="Tertiary / Vocational">Tertiary / Vocational</option>
                  <option value="All Levels / Institutional Leadership">All Levels / Institutional Leadership</option>
                </select>
              </div>

              <div>
                <label htmlFor="educator-employment-status" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Current Employment Status
                </label>
                <select id="educator-employment-status"
                  value={formData.currentEmploymentStatus}
                  onChange={(e) => updateField('currentEmploymentStatus', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                >
                  <option value="Employed, actively seeking next opportunity">Employed, actively seeking next opportunity</option>
                  <option value="Employed, open to exceptional offers">Employed, open to exceptional offers</option>
                  <option value="Available immediately">Available immediately</option>
                  <option value="Recent graduate / newly qualified">Recent graduate / newly qualified</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="educator-subjects" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Subjects / Main Teaching Disciplines
                </label>
                <input id="educator-subjects"
                  type="text"
                  value={formData.subjects}
                  onChange={(e) => updateField('subjects', e.target.value)}
                  placeholder="e.g. Mathematics, Physical Science, Geography, Cambridge IGCSE"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Qualifications */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 3 — Academic & Teaching Qualifications
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Bright Start verifies all academic credentials directly with issuing bodies or authenticated transcripts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Highest Qualification <span className="text-[#B91C1C]">*</span>
                </label>
                <select
                  value={formData.highestQualification}
                  onChange={(e) => updateField('highestQualification', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                >
                  <option value="Diploma in Education">Diploma in Education</option>
                  <option value="Bachelor of Education (B.Ed)">Bachelor of Education (B.Ed)</option>
                  <option value="Bachelor of Arts / Science + Grad CE">Bachelor of Arts / Science + Grad CE</option>
                  <option value="Master's Degree (M.Ed / MA / MSc)">Master's Degree (M.Ed / MA / MSc)</option>
                  <option value="Doctorate / PhD">Doctorate / PhD</option>
                  <option value="Certificate in ECD / Vocational">Certificate in ECD / Vocational</option>
                </select>
                {errors.highestQualification && <p className="text-xs text-[#B91C1C] mt-1">{errors.highestQualification}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Institution / University <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => updateField('institution', e.target.value)}
                  placeholder="e.g. University of Zimbabwe / MSU / Hillside Teachers College"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.institution && <p className="text-xs text-[#B91C1C] mt-1">{errors.institution}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Graduation Year
                </label>
                <input
                  type="text"
                  value={formData.graduationYear}
                  onChange={(e) => updateField('graduationYear', e.target.value)}
                  placeholder="e.g. 2019"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Teaching Qualification / Pedagogy Credential <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.teachingQualification}
                  onChange={(e) => updateField('teachingQualification', e.target.value)}
                  placeholder="e.g. Graduate Certificate in Education (Grad CE)"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.teachingQualification && <p className="text-xs text-[#B91C1C] mt-1">{errors.teachingQualification}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Professional Council / Registration (If applicable)
                </label>
                <input
                  type="text"
                  value={formData.professionalRegistration}
                  onChange={(e) => updateField('professionalRegistration', e.target.value)}
                  placeholder="e.g. Ministry / Council Registration or accredited teacher body number"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Experience */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 4 — Employment History & Experience
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Provide details about your current and recent educational appointments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Current / Most Recent School or Employer <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.currentEmployer}
                  onChange={(e) => updateField('currentEmployer', e.target.value)}
                  placeholder="e.g. St. George's College / Heritage School"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.currentEmployer && <p className="text-xs text-[#B91C1C] mt-1">{errors.currentEmployer}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Position / Role Held <span className="text-[#B91C1C]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => updateField('position', e.target.value)}
                  placeholder="e.g. Senior Geography Teacher & Form 4 Tutor"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.position && <p className="text-xs text-[#B91C1C] mt-1">{errors.position}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Start Date
                </label>
                <input
                  type="text"
                  value={formData.startDate}
                  onChange={(e) => updateField('startDate', e.target.value)}
                  placeholder="e.g. Jan 2021"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  End Date
                </label>
                <input
                  type="text"
                  value={formData.endDate}
                  onChange={(e) => updateField('endDate', e.target.value)}
                  placeholder="e.g. Present / Dec 2024"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Key Responsibilities & Achievements <span className="text-[#B91C1C]">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.responsibilities}
                  onChange={(e) => updateField('responsibilities', e.target.value)}
                  placeholder="Describe your classroom duties, syllabus completion, exam pass rates, extra-curricular coaching, etc."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
                {errors.responsibilities && <p className="text-xs text-[#B91C1C] mt-1">{errors.responsibilities}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Documents */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 5 — Curriculum Vitae & Supporting Documents
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Upload your updated CV. Note: In compliance with safeguarding principles, we do not require sensitive personal ID numbers or bank details during initial enquiry.
              </p>
            </div>

            {/* CV Upload Box */}
            <div className="border-2 border-dashed border-[#D9E2EC] rounded-2xl p-6 sm:p-8 text-center bg-[#F8F7F3] hover:border-[#2463A7] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EEF4F8] flex items-center justify-center mx-auto mb-3 text-[#2463A7]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-[#102A43]">
                Curriculum Vitae (CV) <span className="text-[#B91C1C]">*</span>
              </h3>
              <p className="text-xs text-[#627D98] mt-1 mb-4">
                Supported formats: PDF, DOC, DOCX (Max 10MB)
              </p>

              {formData.cvFileName ? (
                <div className="max-w-md mx-auto p-3 bg-white rounded-lg border border-[#3D8061] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3D8061]" />
                    <span className="font-semibold text-[#102A43] truncate">{formData.cvFileName}</span>
                    <span className="text-slate-400">({formData.cvFileSize || '1.4 MB'})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {updateField('cvFileName', '');setCvFile(null)}}
                    className="text-[#B91C1C] hover:text-red-700 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <label className="cursor-pointer px-4 py-2 bg-[#102A43] hover:bg-[#1E3A56] text-white text-xs font-bold rounded-lg transition-all shadow-xs flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select CV File</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 10 * 1024 * 1024) {
                            setErrors(prev => ({ ...prev, cvFileName: 'CV must be 10MB or smaller' }));
                            e.target.value = '';
                            return;
                          }
                          if (!['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
                            setErrors(prev => ({ ...prev, cvFileName: 'CV must be PDF, DOC, or DOCX' })); e.target.value=''; return;
                          }
                          setCvFile(file);
                          handleFileDropMock('cvFileName', file.name, `${(file.size / 1024 / 1024).toFixed(1)} MB`);
                        }
                      }}
                    />
                  </label>
                </div>
              )}
              {errors.cvFileName && <p className="text-xs text-[#B91C1C] mt-2">{errors.cvFileName}</p>}
            </div>

            {/* Optional Certificates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#EEF4F8] rounded-xl border border-[#D9E2EC]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#102A43]">Degree & Teaching Certificates</span>
                  <span className="text-[10px] text-[#627D98] font-medium">Optional at this stage</span>
                </div>
                {formData.qualificationsFileName ? (
                  <div className="p-2 bg-white rounded border border-[#3D8061] text-xs flex items-center justify-between">
                    <span className="truncate text-[#102A43]">{formData.qualificationsFileName}</span>
                    <button type="button" onClick={() => {updateField('qualificationsFileName', '');setQualificationFile(null)}} className="text-red-500">✕</button>
                  </div>
                ) : (
                  <label className="cursor-pointer block text-center p-2.5 bg-white border border-dashed border-[#D9E2EC] rounded-lg text-xs text-[#2463A7] font-semibold hover:bg-slate-50">
                    + Attach Degree Certificate
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          const file=e.target.files[0]; if(file.size>10*1024*1024){setErrors(prev=>({...prev,qualificationsFileName:'File must be 10MB or smaller'}));return;} setQualificationFile(file);
                          updateField('qualificationsFileName', file.name);
                        }
                      }}
                    />
                  </label>
                )}
              </div>

              <div className="p-4 bg-[#EEF4F8] rounded-xl border border-[#D9E2EC]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#102A43]">Professional Recommendations</span>
                  <span className="text-[10px] text-[#627D98] font-medium">Optional at this stage</span>
                </div>
                {formData.certificatesFileName ? (
                  <div className="p-2 bg-white rounded border border-[#3D8061] text-xs flex items-center justify-between">
                    <span className="truncate text-[#102A43]">{formData.certificatesFileName}</span>
                    <button type="button" onClick={() => {updateField('certificatesFileName', '');setCertificateFile(null)}} className="text-red-500">✕</button>
                  </div>
                ) : (
                  <label className="cursor-pointer block text-center p-2.5 bg-white border border-dashed border-[#D9E2EC] rounded-lg text-xs text-[#2463A7] font-semibold hover:bg-slate-50">
                    + Attach Testimonials / Reference Letters
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          const file=e.target.files[0]; if(file.size>10*1024*1024){setErrors(prev=>({...prev,certificatesFileName:'File must be 10MB or smaller'}));return;} setCertificateFile(file);
                          updateField('certificatesFileName', file.name);
                        }
                      }}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Preferences */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 6 — Placement Preferences & Availability
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Help us match you with opportunities aligned with your personal timetable and location aspirations.
              </p>
            </div>

            {/* Preferred Locations */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                Preferred Teaching Locations (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {['Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Chitungwiza', 'Masvingo', 'Victoria Falls', 'Regional / International Africa'].map((loc) => {
                  const isSelected = formData.preferredLocations.includes(loc);
                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => toggleArrayItem('preferredLocations', loc)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-[#102A43] text-white border-[#102A43]'
                          : 'bg-white text-[#627D98] border-[#D9E2EC] hover:border-[#2463A7]'
                      }`}
                    >
                      {isSelected ? `✓ ${loc}` : `+ ${loc}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred Employment Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                Preferred Employment Type
              </label>
              <div className="flex flex-wrap gap-2">
                {['Permanent', 'Full-Time', 'Contract (Term-based)', 'Part-Time', 'Leadership Appointment'].map((type) => {
                  const isSelected = formData.employmentType.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleArrayItem('employmentType', type)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-[#2463A7] text-white border-[#2463A7]'
                          : 'bg-white text-[#627D98] border-[#D9E2EC] hover:border-[#2463A7]'
                      }`}
                    >
                      {isSelected ? `✓ ${type}` : `+ ${type}`}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Available Start Date <span className="text-[#B91C1C]">*</span>
                </label>
                <select
                  value={formData.availableStartDate}
                  onChange={(e) => updateField('availableStartDate', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                >
                  <option value="Immediately">Immediately</option>
                  <option value="1 Month Notice">1 Month Notice</option>
                  <option value="Next academic term">Next academic term</option>
                  <option value="Next academic school year (January)">Next academic school year (January)</option>
                </select>
                {errors.availableStartDate && <p className="text-xs text-[#B91C1C] mt-1">{errors.availableStartDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Salary Expectation Indicator
                </label>
                <input
                  type="text"
                  value={formData.salaryExpectation}
                  onChange={(e) => updateField('salaryExpectation', e.target.value)}
                  placeholder="e.g. Standard Institutional Band / Negotiable"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: Consent & Declaration */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-[#D9E2EC] pb-4">
              <h2 className="text-lg font-extrabold text-[#102A43]">
                Step 7 — Privacy Consent & Candidate Declaration
              </h2>
              <p className="text-xs text-[#627D98] mt-1">
                Please review your submission and agree to our ethical recruitment charter.
              </p>
            </div>

            {/* Quick Summary Review Card */}
            <div className="p-4 bg-[#F8F7F3] rounded-xl border border-[#D9E2EC] text-xs text-[#1F2933] space-y-2">
              <div className="font-bold text-[#102A43] text-sm">Summary of Application:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div><span className="text-[#627D98]">Name:</span> {formData.firstName} {formData.surname}</div>
                <div><span className="text-[#627D98]">Email:</span> {formData.email}</div>
                <div><span className="text-[#627D98]">Role:</span> {formData.primaryRole} ({formData.yearsOfExperience})</div>
                <div><span className="text-[#627D98]">Qualification:</span> {formData.highestQualification}</div>
                <div><span className="text-[#627D98]">CV Attached:</span> {formData.cvFileName || 'None'}</div>
                <div><span className="text-[#627D98]">Locations:</span> {formData.preferredLocations.join(', ') || 'Any'}</div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#D9E2EC] hover:bg-[#F8F7F3] cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.privacyConsent}
                  onChange={(e) => updateField('privacyConsent', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#2463A7] rounded border-slate-300 focus:ring-[#2463A7]"
                />
                <span className="text-xs text-[#1F2933] leading-relaxed">
                  <strong className="text-[#102A43]">Data & Privacy Consent:</strong> I agree that Bright Start Edu Recruitment (Pty) Ltd may process my personal details and CV for the purpose of matching me with verified educational vacancies in accordance with their Privacy Policy.
                </span>
              </label>
              {errors.privacyConsent && <p className="text-xs text-[#B91C1C] pl-2">{errors.privacyConsent}</p>}

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#D9E2EC] hover:bg-[#F8F7F3] cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.communicationConsent}
                  onChange={(e) => updateField('communicationConsent', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#2463A7] rounded border-slate-300 focus:ring-[#2463A7]"
                />
                <span className="text-xs text-[#1F2933] leading-relaxed">
                  <strong className="text-[#102A43]">Recruitment Communications:</strong> I consent to receiving vacancy updates, interview invitations, and recruitment advice via email or WhatsApp.
                </span>
              </label>

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#D9E2EC] hover:bg-[#F8F7F3] cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.accuracyDeclaration}
                  onChange={(e) => updateField('accuracyDeclaration', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#2463A7] rounded border-slate-300 focus:ring-[#2463A7]"
                />
                <span className="text-xs text-[#1F2933] leading-relaxed">
                  <strong className="text-[#102A43]">Accuracy & Safeguarding Declaration:</strong> I certify that all information provided is accurate and true to the best of my knowledge, and I understand that appointments are subject to credential checks and references.
                </span>
              </label>
              {errors.accuracyDeclaration && <p className="text-xs text-[#B91C1C] pl-2">{errors.accuracyDeclaration}</p>}
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="pt-6 border-t border-[#D9E2EC] flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-5 py-2.5 text-xs font-bold text-[#102A43] bg-[#EEF4F8] hover:bg-[#D9E2EC] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : <div />}

          {currentStep < 7 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#102A43] hover:bg-[#1E3A56] rounded-lg transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Next: Step {currentStep + 1}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F4B942]" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              id="btn-join-bright-start"
              className="px-8 py-3 text-xs font-extrabold text-[#102A43] bg-[#F4B942] hover:bg-[#E5A82B] rounded-lg transition-all flex items-center gap-2 shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#102A43] border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Join Bright Start</span>
                  <Check className="w-4 h-4 text-[#102A43]" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
